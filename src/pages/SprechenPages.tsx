import { useEffect, useRef, useState } from "react";
import { AppLink } from "@/components/ui/AppLink";
import { EnhanceRoot, SpeakButton } from "@/components/ui/German";
import { useApp } from "@/context/AppContext";
import { progressStore } from "@/state/progress";
import { noteFinished } from "@/state/session";
import { pickOralItem } from "@/lib/exam";
import { formatClock } from "@/lib/dates";
import { speak } from "@/lib/speech";
import { useCountdown, useDocumentTitle } from "@/hooks/useUi";
import type { SprechenPlan, SprechenTopic } from "@/types/content";

export function SprechenPage() {
  const { pack, meta } = useApp();
  useDocumentTitle(meta ? `Sprechen · ${meta.title}` : "Sprechen · Deutschpfad");
  if (!pack) return null;
  const sp = pack.exam.sprechen;
  const oral = pack.examFormat?.oral || {};
  if (!sp) return <><h1>Sprechen</h1><p>No speaking pack for this level yet.</p></>;
  return (
    <EnhanceRoot>
      <h1>Sprechen</h1>
      <p className="lead">{sp.lead || `Phrases first, then a timed ~${oral.minutes || 15}-minute run. A human partner beats both roles on your phone.`}</p>
      {oral.note ? <p className="q-meta">{oral.note}</p> : null}
      <div className="btn-row">
        <AppLink className="btn btn-primary" to="/exam/sprechen/run">
          Start oral run
        </AppLink>
      </div>
      <div className="card" style={{ marginTop: "1rem" }}>
        <h3>Teil 1 — intro (memorise, then throw the paper away)</h3>
        <p className="de">{sp.intro}</p>
        <p>Follow-up questions — tap the speaker, then answer aloud.</p>
        <ul>
          {(sp.questions || []).map((q) => (
            <li key={q}>
              <span className="de">{q}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="card" style={{ marginTop: "0.8rem" }}>
        <h3>{sp.teil2Title || "Teil 2"}</h3>
        <p>{sp.teil2Lead || "Speak, then ask your partner."}</p>
        {sp.teil2Steps?.length ? (
          <ol>
            {sp.teil2Steps.map((s) => (
              <li key={s}>
                <span className="de">{s}</span>
              </li>
            ))}
          </ol>
        ) : null}
        {(sp.topics || []).map((t) => (
          <p key={t.t}>
            <strong>{t.t}</strong> — <span className="de">{t.spine}</span>
            {t.ask?.length ? (
              <>
                <br />
                <span className="q-meta">Ask: {t.ask.join(" · ")}</span>
              </>
            ) : null}
          </p>
        ))}
      </div>
      <div className="card" style={{ marginTop: "0.8rem" }}>
        <h3>{sp.teil3Title || "Teil 3 — plan and agree"}</h3>
        <p>{sp.teil3Lead || "You must reach a decision."}</p>
        <div className="phrase-list">
          {(sp.engine || []).map((e) => (
            <div className="phrase-line" key={e.de}>
              <span className="de">{e.de}</span>
            </div>
          ))}
        </div>
        <h4>Practice cards — draw a new one in the timed run</h4>
        {(sp.planning || []).map((p) => (
          <p key={p.t}>
            <strong>{p.t}</strong> — {p.points.join(" · ")}
          </p>
        ))}
      </div>
    </EnhanceRoot>
  );
}

export function SprechenRunPage() {
  const { pack, meta, toast } = useApp();
  const sp = pack?.exam.sprechen;
  const oral = pack?.examFormat?.oral || {};
  const minutes = oral.minutes || 15;
  const [teil, setTeil] = useState(1);
  const [topic, setTopic] = useState<SprechenTopic>(() => pickOralItem(sp?.topics) || { t: "Freizeit", spine: "Hier geht es um Freizeit." });
  const [plan, setPlan] = useState<SprechenPlan>(() => pickOralItem(sp?.planning) || { t: "Wochenende", points: ["Wann?", "Wo?", "Kosten?"] });
  const [decision, setDecision] = useState("");
  const [miniOn, setMiniOn] = useState(false);
  const [miniDone, setMiniDone] = useState(false);
  const timerSec = sp?.teil2Timer == null ? 90 : Number(sp.teil2Timer);
  const clock = useCountdown(minutes * 60, () => {
    toast(`${minutes} minutes. If the decision box is empty, run Teil 3 again.`);
  });
  const miniClock = useCountdown(timerSec, () => setMiniDone(true));
  useDocumentTitle(meta ? `Oral run · ${meta.title}` : "Oral run · Deutschpfad");
  const autoTeil = useRef(1);

  useEffect(() => {
    if (!clock.running) return;
    const t2 = (minutes - 4) * 60;
    const t3 = (minutes - 9) * 60;
    if (clock.left <= t3 && autoTeil.current < 3) {
      autoTeil.current = 3;
      setTeil(3);
    } else if (clock.left <= t2 && autoTeil.current < 2) {
      autoTeil.current = 2;
      setTeil(2);
    }
  }, [clock.left, clock.running, minutes]);

  if (!pack) return null;
  if (!sp) return <><h1>Oral run</h1><p>No speaking pack for this level yet.</p></>;
  const t2lead = sp.teil2Lead || "Speak, then ask your partner.";
  const t3lead = sp.teil3Lead || "You must reach a decision.";

  return (
    <EnhanceRoot>
      <p className="kicker">
        {pack.examFormat?.name || "telc"} · ~{minutes} minutes
        {oral.prep ? ` · ${oral.prep} min prep for Teil 2–3` : " · no prep"}
      </p>
      <div className="exam-player">
        <p className="kicker">Clock</p>
        <p className={`exam-status exam-clock${clock.left <= 60 ? " is-low" : ""}`}>{formatClock(clock.left)}</p>
        <p className="exam-sub">
          {teil === 1 ? "Teil 1 — Kontakt. Answer out loud. A partner is better." : teil === 2 ? t2lead : t3lead}
        </p>
        <div className="btn-row">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              autoTeil.current = 1;
              setTeil(1);
              clock.start();
            }}
          >
            Start {formatClock(minutes * 60)}
          </button>
          <button type="button" className="btn" onClick={() => setTeil(1)}>
            Teil 1
          </button>
          <button type="button" className="btn" onClick={() => setTeil(2)}>
            Teil 2
          </button>
          <button type="button" className="btn" onClick={() => setTeil(3)}>
            Teil 3
          </button>
        </div>
      </div>
      <section className={`card teil-block${teil === 1 ? " is-active-teil" : ""}`} style={{ marginTop: "1rem" }}>
        <h3>Teil 1 · 3–4 min</h3>
        <p className="de">{sp.intro}</p>
        <p>Questions — hear, then speak. Do not read a speech at the wall.</p>
        <ul>
          {(sp.questions || []).map((q) => (
            <li key={q}>
              <button type="button" className="btn" onClick={() => void speak(q, { role: "announcer" })}>
                Ask
              </button>{" "}
              <span className="de">{q}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className={`card teil-block${teil === 2 ? " is-active-teil" : ""}`} style={{ marginTop: "0.8rem" }}>
        <h3>{sp.teil2Title || "Teil 2"}</h3>
        <p>
          <strong>{topic.t}</strong>
        </p>
        <p className="de">{topic.spine}</p>
        <p>{t2lead}</p>
        {topic.ask?.length ? (
          <>
            <p>Ask your partner:</p>
            <ul>
              {topic.ask.map((q) => (
                <li key={q}>
                  <span className="de">{q}</span>
                </li>
              ))}
            </ul>
          </>
        ) : null}
        {timerSec > 0 ? (
          <>
            <button
              type="button"
              className="btn"
              onClick={() => {
                setMiniOn(true);
                setMiniDone(false);
                miniClock.setLeft(timerSec);
                miniClock.start();
              }}
            >
              Start {timerSec}s
            </button>{" "}
            <span className="q-meta">
              {miniOn ? (miniDone || miniClock.left <= 0 ? "Stop. Ask: Und du?" : formatClock(miniClock.left)) : ""}
            </span>
          </>
        ) : (
          <p className="q-meta">No 90-second speech at this level. Two or three short sentences, then a question back.</p>
        )}
        <div className="btn-row" style={{ marginTop: "0.6rem" }}>
          <button
            type="button"
            className="btn"
            onClick={() => setTopic(pickOralItem(sp.topics, topic) || topic)}
          >
            Andere Karte
          </button>
        </div>
      </section>
      <section className={`card teil-block${teil === 3 ? " is-active-teil" : ""}`} style={{ marginTop: "0.8rem" }}>
        <h3>{sp.teil3Title || "Teil 3 — plan and agree"}</h3>
        <p>{t3lead}</p>
        <p>
          <strong>{plan.t}</strong> — {(plan.points || []).join(" · ")}
        </p>
        <div className="phrase-list">
          {(sp.engine || []).map((e) => (
            <div className="phrase-line" key={e.de}>
              <span className="de">
                {e.de}
                <SpeakButton text={e.de} />
              </span>
            </div>
          ))}
        </div>
        <div className="btn-row">
          <button type="button" className="btn" onClick={() => setPlan(pickOralItem(sp.planning, plan) || plan)}>
            Andere Planung
          </button>
        </div>
        <label className="q-meta" htmlFor="oral-decision">
          Unsere Entscheidung (required)
        </label>
        <textarea
          id="oral-decision"
          value={decision}
          placeholder="z.B. Wir treffen uns am Samstag um 15 Uhr im Park. Jeder bringt etwas zu essen mit."
          onChange={(e) => setDecision(e.target.value)}
        />
        <p className="q-meta">If this box is empty, Teil 3 did not happen. Examiners listen for a clear plan.</p>
      </section>
      <div className="btn-row">
        <button
          type="button"
          className="btn btn-primary"
          disabled={decision.trim().length < 20}
          onClick={() => {
            progressStore.markDone("sprechen-run");
            noteFinished(progressStore, "/exam/sprechen/run");
            toast("Oral run saved. Do this 6 times with a human if you can — new cards each time.");
          }}
        >
          Mark oral run done
        </button>
        <AppLink className="btn" to="/exam/sprechen">
          Phrases
        </AppLink>
      </div>
    </EnhanceRoot>
  );
}
