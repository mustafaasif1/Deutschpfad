import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { AppLink } from "@/components/ui/AppLink";
import { EnhanceRoot } from "@/components/ui/German";
import { useApp } from "@/context/AppContext";
import { progressStore } from "@/state/progress";
import { noteFinished } from "@/state/session";
import { deNumWord, groupHoerenPapers, hoerenMeta, hoerenRate, officialTelcUrl } from "@/lib/exam";
import { pauseMs, speak, speakAsync, speakLong, stopSpeak } from "@/lib/speech";
import { useDocumentTitle } from "@/hooks/useUi";
import type { HoerenItem } from "@/types/content";

type RunToken = {
  aborted: boolean;
  timer: number | null;
  skipRead: (() => void) | null;
};

export function HoerenListPage() {
  const { pack, meta, levelId } = useApp();
  useDocumentTitle(meta ? `Hören · ${meta.title}` : "Hören · Deutschpfad");
  if (!pack || !meta || !levelId) return null;
  const hm = hoerenMeta(levelId);
  const papers = groupHoerenPapers(pack.exam.hoeren || []);
  return (
    <>
      <h1>Hörverstehen · {meta.title}</h1>
      <p className="lead">
        {hm.lead} Start a paper in exam mode — German voice, reading time, then audio in order. Transcripts stay hidden
        until you mark.
      </p>
      <div className="grid grid-2">
        {papers.map((p) => {
          const teile = p.sets
            .map((s) => `Teil ${s.teil || "?"} ${s.once ? "once" : "twice"}`)
            .join(" · ");
          return (
            <AppLink key={p.id} className="card clickable" to={`/exam/hoeren/${p.id}`}>
              <h3>{p.title}</h3>
              <p>
                ~{hm.minutes} min · {p.itemCount} items · {teile}
              </p>
            </AppLink>
          );
        })}
      </div>
      <div className="card" style={{ marginTop: "1rem" }}>
        <h3>How this copies the exam</h3>
        <ul>
          <li>You read the Richtig/Falsch lines first (timed pause). A1 also has picture-matching items — pick A, B or C.</li>
          <li>A German announcer says Teil and Text numbers, then the clip plays.</li>
          <li>Teil 1 with “once” cannot be replayed in exam mode.</li>
          <li>Longer talks and Teil 3 play twice, with a pause, like telc.</li>
        </ul>
        <p>
          Browser voice trains <strong>method</strong>. For exam ears, play the official telc MP3 on this device:{" "}
          <AppLink to="/exam/ears">Official exam ears</AppLink> ·{" "}
          <AppLink to={officialTelcUrl(pack.examFormat, levelId)}>telc.net {meta.title}</AppLink>
        </p>
      </div>
      <div className="btn-row">
        <AppLink className="btn" to="/exam">
          Back to exam gym
        </AppLink>
      </div>
    </>
  );
}

export function HoerenPaperPage() {
  const { id = "", mode } = useParams();
  const practice = mode === "practice";
  const { pack, meta, levelId, toast } = useApp();
  const papers = pack ? groupHoerenPapers(pack.exam.hoeren || []) : [];
  const paper = papers.find((p) => String(p.id) === String(id));
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [status, setStatus] = useState({ title: "Bereit", sub: "Lautsprecher an. Aussagen lesen, dann Start." });
  const [running, setRunning] = useState(false);
  const [readPct, setReadPct] = useState(0);
  const [live, setLive] = useState("");
  const [heard, setHeard] = useState<Record<string, boolean>>({});
  const [activeTeil, setActiveTeil] = useState<number | null>(null);
  const [marked, setMarked] = useState<{ right: number; total: number } | null>(null);
  const [playedOnce, setPlayedOnce] = useState<Record<string, boolean>>({});
  const runRef = useRef<RunToken | null>(null);
  useDocumentTitle(paper ? `${paper.title} · ${meta?.title || "Deutschpfad"}` : "Hören · Deutschpfad");

  useEffect(() => {
    setAnswers({});
    setStatus({ title: "Bereit", sub: "Lautsprecher an. Aussagen lesen, dann Start." });
    setRunning(false);
    setReadPct(0);
    setLive("");
    setHeard({});
    setActiveTeil(null);
    setMarked(null);
    setPlayedOnce({});
  }, [id, practice]);

  useEffect(() => {
    return () => {
      if (runRef.current) runRef.current.aborted = true;
      stopSpeak();
    };
  }, [id, practice]);

  if (!pack || !meta || !levelId) return null;
  if (!paper) {
    return (
      <p>
        Paper not found. <AppLink className="btn" to="/exam/hoeren">All Hören papers</AppLink>
      </p>
    );
  }
  const current = paper;
  const hm = hoerenMeta(levelId);
  const rate = hoerenRate(levelId);

  function stopRun() {
    if (runRef.current) {
      runRef.current.aborted = true;
      if (runRef.current.timer) window.clearInterval(runRef.current.timer);
      runRef.current.skipRead?.();
      runRef.current = null;
    }
    stopSpeak();
    setRunning(false);
  }

  async function startExam() {
    stopRun();
    const token: RunToken = { aborted: false, timer: null, skipRead: null };
    runRef.current = token;
    setRunning(true);
    setMarked(null);
    const still = () => runRef.current === token && !token.aborted;

    const readCountdown = (sec: number) =>
      new Promise<void>((resolve) => {
        let left = sec;
        let settled = false;
        const done = () => {
          if (settled) return;
          settled = true;
          if (token.timer) window.clearInterval(token.timer);
          token.timer = null;
          resolve();
        };
        setReadPct(0);
        setStatus({ title: "Aussagen lesen", sub: `${left} s` });
        token.timer = window.setInterval(() => {
          if (token.aborted) {
            done();
            return;
          }
          left -= 1;
          setReadPct(Math.max(0, (1 - left / sec) * 100));
          setStatus({ title: "Aussagen lesen", sub: `${left} s` });
          if (left <= 0) done();
        }, 1000);
        token.skipRead = () => {
          setReadPct(100);
          done();
        };
      });

    setStatus({ title: "Prüfung startet", sub: "Bitte nicht unterbrechen." });
    await pauseMs(150);
    if (!still()) return finish("Gestoppt");
    await speakAsync("Hörverstehen.", { rate: 0.92, role: "announcer" });
    if (!still()) return finish("Gestoppt");

    for (let si = 0; si < current.sets.length; si++) {
      const set = current.sets[si];
      const teil = set.teil || si + 1;
      const once = !!set.once;
      const plays = once ? 1 : 2;
      const nAudio = set.items.filter((it) => it.audio).length;
      const isLong = !!(set.audio || set.turns?.length);
      const readSec = set.items.length >= 8 ? 45 : 30;
      setActiveTeil(si);

      let intro: string;
      if (isLong) {
        intro = `Teil ${teil}. Sie hören jetzt ein Gespräch. Sie hören den Text ${plays === 1 ? "nur einmal" : "zweimal"}. Lesen Sie zuerst die Aussagen.`;
      } else if (once) {
        intro = `Teil ${teil}. Sie hören jetzt ${nAudio} kurze Texte. Sie hören jeden Text nur einmal. Lesen Sie zuerst die Aussagen.`;
      } else {
        intro = `Teil ${teil}. Sie hören jetzt ${nAudio} kurze Texte. Sie hören jeden Text zweimal. Lesen Sie zuerst die Aussagen.`;
      }

      await speakAsync(intro, { rate: 0.92, role: "announcer" });
      if (!still()) return finish("Gestoppt");
      await speakAsync(`Sie haben ${readSec === 45 ? "fünfundvierzig" : "dreißig"} Sekunden Zeit.`, {
        rate: 0.92,
        role: "announcer",
      });
      if (!still()) return finish("Gestoppt");
      await readCountdown(readSec);
      if (!still()) return finish("Gestoppt");

      if (isLong) {
        for (let p = 1; p <= plays; p++) {
          const line =
            plays === 2
              ? p === 1
                ? "Sie hören den Text jetzt zum ersten Mal."
                : "Sie hören den Text jetzt zum zweiten Mal."
              : "Sie hören den Text jetzt.";
          setStatus({ title: `Teil ${teil} · Hören`, sub: plays === 1 ? "einmal" : `${p}. Mal` });
          setLive(`${set.id}-0`);
          await speakAsync(line, { rate: 0.92, role: "announcer" });
          if (!still()) return finish("Gestoppt");
          if (set.turns?.length) {
            for (let t = 0; t < set.turns.length; t++) {
              const turn = set.turns[t];
              await speakLong(turn.text, { rate, role: turn.role || (t % 2 ? "guest" : "announcer") });
              if (!still()) return finish("Gestoppt");
              await pauseMs(280);
            }
          } else if (set.audio) {
            await speakLong(set.audio, { rate, role: "guest" });
          }
          if (!still()) return finish("Gestoppt");
          await pauseMs(2000);
        }
      } else {
        for (let ii = 0; ii < set.items.length; ii++) {
          const it = set.items[ii];
          if (!it.audio) continue;
          setLive(`${set.id}-${ii}`);
          for (let p = 1; p <= plays; p++) {
            if (p === 1) {
              await speakAsync(`Text ${deNumWord(ii + 1)}.`, { rate: 0.92, role: "announcer" });
              if (!still()) return finish("Gestoppt");
            }
            setStatus({
              title: `Teil ${teil} · Text ${ii + 1}`,
              sub: plays === 1 ? "nur einmal" : `Wiedergabe ${p}/${plays}`,
            });
            await speakLong(it.audio, { rate, role: "announcer" });
            if (!still()) return finish("Gestoppt");
            if (plays === 2 && p === 1) await pauseMs(800);
          }
          setHeard((h) => ({ ...h, [`${set.id}-${ii}`]: true }));
          await pauseMs(3500);
          if (!still()) return finish("Gestoppt");
        }
      }
    }

    await speakAsync(
      "Das war der Prüfungsteil Hörverstehen. Übertragen Sie jetzt Ihre Lösungen auf den Antwortbogen.",
      { rate: 0.92, role: "announcer" },
    );
    finish("Fertig");

    function finish(label: string) {
      if (runRef.current === token) runRef.current = null;
      setRunning(false);
      setLive("");
      setStatus({ title: label, sub: "Jetzt auswerten." });
    }
  }

  function markPaper() {
    let right = 0;
    let total = 0;
    current.sets.forEach((set) => {
      let setRight = 0;
      set.items.forEach((it, ii) => {
        total += 1;
        const key = `h-${set.id}-${ii}`;
        const ok = itemCorrect(it, answers[key]);
        if (ok) {
          right += 1;
          setRight += 1;
        }
      });
      progressStore.record(set.id, setRight, set.items.length);
    });
    progressStore.record(`hoeren-paper-${current.id}`, right, total);
    noteFinished(progressStore, `/exam/hoeren/${current.id}`);
    setMarked({ right, total });
    toast("Paper marked.");
  }

  const p = marked && marked.total ? Math.round((marked.right / marked.total) * 100) : 0;

  return (
    <EnhanceRoot>
      <p className="kicker">
        {meta.exam} · Hörverstehen · ~{hm.minutes} min
      </p>
      <h1>{paper.title}</h1>
      <p className="lead">
        {practice
          ? "Practice mode: replay clips as you like. Switch to exam sitting for real rules."
          : "Exam sitting: read the statements, then let the audio run. Do not replay Teil 1. Mark Richtig/Falsch or the matching picture as you hear each text."}
      </p>
      <div className="btn-row">
        <AppLink className="btn" to="/exam/hoeren">
          All papers
        </AppLink>
        {practice ? (
          <AppLink className="btn btn-primary" to={`/exam/hoeren/${paper.id}`}>
            Exam sitting
          </AppLink>
        ) : (
          <AppLink className="btn" to={`/exam/hoeren/${paper.id}/practice`}>
            Practice / replay
          </AppLink>
        )}
      </div>
      {!practice ? (
        <div className="exam-player">
          <div className="exam-player-top">
            <p className="kicker">{status.title}</p>
            <p className="exam-status">{status.title}</p>
            <p className="exam-sub">{status.sub}</p>
            <div className="progress-bar exam-readbar">
              <span style={{ width: `${readPct}%` }} />
            </div>
          </div>
          <div className="btn-row">
            <button type="button" className="btn btn-primary" disabled={running} onClick={() => void startExam()}>
              {running ? "Running…" : "Start exam audio"}
            </button>
            <button
              type="button"
              className="btn"
              hidden={!running}
              onClick={() => runRef.current?.skipRead?.()}
            >
              Skip wait
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => {
                stopRun();
                setStatus({ title: "Gestoppt", sub: "Sie können neu starten oder in Practice einzelne Clips hören." });
              }}
            >
              Stop
            </button>
          </div>
        </div>
      ) : null}
      {paper.sets.map((set, si) => {
        const teil = set.teil || si + 1;
        const once = !!set.once;
        const isLong = !!(set.audio || set.turns?.length);
        const trans = set.turns
          ? set.turns.map((t) => `${t.role ? `${t.role}: ` : ""}${t.text}`).join(" ")
          : set.audio;
        return (
          <section
            key={set.id}
            className={`card teil-block${activeTeil === si ? " is-active-teil" : ""}`}
            style={{ marginTop: "1rem" }}
          >
            <h3>
              Teil {teil} {once ? " · einmal" : " · zweimal"}
            </h3>
            {set.intro ? <p>{set.intro}</p> : null}
            <p className="q-meta">
              {once
                ? "Sie hören jeden Text nur einmal."
                : isLong
                  ? "Sie hören den Text zweimal."
                  : "Sie hören jeden Text zweimal."}
            </p>
            {practice && isLong ? (
              <div className="audio-box btn-row">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    stopSpeak();
                    if (set.turns?.length) {
                      let chain = Promise.resolve(true);
                      set.turns.forEach((turn, t) => {
                        chain = chain.then(() =>
                          speakLong(turn.text, { rate, role: turn.role || (t % 2 ? "guest" : "announcer") }),
                        );
                      });
                    } else if (set.audio) {
                      void speakLong(set.audio, { rate, role: "guest" });
                    }
                  }}
                >
                  Play interview
                </button>
                <button type="button" className="btn" onClick={() => stopSpeak()}>
                  Stop
                </button>
              </div>
            ) : null}
            {set.items.map((it, ii) => {
              const key = `h-${set.id}-${ii}`;
              const liveKey = `${set.id}-${ii}`;
              const ok = marked ? itemCorrect(it, answers[key]) : null;
              return (
                <div
                  key={key}
                  className={`hoeren-item${live === liveKey ? " is-live" : ""}${heard[liveKey] ? " is-heard" : ""}`}
                >
                  <p className="hoeren-q">
                    <span className="hoeren-num">{ii + 1}.</span> <span className="de">{it.statement}</span>
                  </p>
                  {it.options?.length ? (
                    <div className="pic-choices">
                      {it.options.map((opt) => (
                        <label key={opt} className="pic-choice">
                          <input
                            type="radio"
                            name={key}
                            value={opt}
                            checked={answers[key] === opt}
                            onChange={() => setAnswers({ ...answers, [key]: opt })}
                          />
                          <span className="pic-box">{opt}</span>
                        </label>
                      ))}
                    </div>
                  ) : (
                    <div className="rf-row">
                      <label className="rf">
                        <input
                          type="radio"
                          name={key}
                          value="true"
                          checked={answers[key] === "true"}
                          onChange={() => setAnswers({ ...answers, [key]: "true" })}
                        />{" "}
                        Richtig
                      </label>
                      <label className="rf">
                        <input
                          type="radio"
                          name={key}
                          value="false"
                          checked={answers[key] === "false"}
                          onChange={() => setAnswers({ ...answers, [key]: "false" })}
                        />{" "}
                        Falsch
                      </label>
                    </div>
                  )}
                  {practice && it.audio && !isLong ? (
                    <div className="btn-row">
                      <button
                        type="button"
                        className="btn"
                        disabled={!!(set.once && playedOnce[key])}
                        onClick={() => {
                          void speak(it.audio || "", { rate, role: "announcer" });
                          if (set.once) setPlayedOnce((p) => ({ ...p, [key]: true }));
                        }}
                      >
                        {set.once && playedOnce[key] ? "Played" : set.once ? "Play (once)" : "Play"}
                      </button>
                      <button type="button" className="btn" onClick={() => stopSpeak()}>
                        Stop
                      </button>
                    </div>
                  ) : null}
                  {it.audio ? (
                    <p className="transcript" hidden={!marked}>
                      <span className="label-s">Transcript</span>
                      {it.audio}
                    </p>
                  ) : null}
                  {marked ? (
                    <p className={`answer-key ${ok ? "is-ok" : "is-bad"}`}>
                      Answer: {it.options?.length ? String(it.answer) : it.answer ? "Richtig" : "Falsch"}
                    </p>
                  ) : null}
                </div>
              );
            })}
            {isLong && trans ? (
              <p className="transcript" hidden={!marked}>
                <span className="label-s">Transcript</span>
                {trans}
              </p>
            ) : null}
          </section>
        );
      })}
      <div className="btn-row">
        <button type="button" className="btn btn-warm" disabled={!!marked || (!practice && running)} onClick={markPaper}>
          Mark paper
        </button>
      </div>
      {marked ? (
        <div className="explain">
          Score: <strong>{marked.right} / {marked.total}</strong> ({p}%).{" "}
          {p >= 80 ? "Exam-ready method." : p >= 60 ? "Passable — repeat this paper." : "Do this paper again today."} Answers
          and transcripts are now visible.
        </div>
      ) : null}
    </EnhanceRoot>
  );
}

function itemCorrect(it: HoerenItem, value?: string): boolean {
  if (!value) return false;
  if (it.options?.length) return value === String(it.answer);
  return (value === "true") === Boolean(it.answer);
}
