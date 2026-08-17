import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppLink } from "@/components/ui/AppLink";
import { EnhanceRoot } from "@/components/ui/German";
import { useApp } from "@/context/AppContext";
import { progressStore } from "@/state/progress";
import { noteFinished } from "@/state/session";
import { countLesenItems, unusedKeys } from "@/lib/exam";
import { useDocumentTitle } from "@/hooks/useUi";
import type { LesenPart, LesenSet } from "@/types/content";

export function LesenListPage() {
  const { pack, meta } = useApp();
  useDocumentTitle(meta ? `Lesen · ${meta.title}` : "Lesen · Deutschpfad");
  if (!pack) return null;
  const fmt = pack.examFormat;
  const shape = fmt?.written?.[0]?.note || "Aim for 80%+ before exam week.";
  return (
    <>
      <h1>Lesen papers</h1>
      <p className="lead">
        {pack.exam.lesen.length} training papers. {shape}
      </p>
      <div className="grid grid-2">
        {pack.exam.lesen.map((set) => (
          <AppLink key={set.id} className="card clickable" to={`/exam/lesen/${set.id}`}>
            <h3>{set.title}</h3>
            <p>
              ~{set.timeMin || 45} min · {countLesenItems(set)} items
            </p>
          </AppLink>
        ))}
      </div>
    </>
  );
}

export function LesenPaperPage() {
  const { id = "" } = useParams();
  const { pack, meta } = useApp();
  const set = pack?.exam.lesen.find((x) => x.id === id);
  useDocumentTitle(set ? `${set.title} · ${meta?.title || "Deutschpfad"}` : "Lesen · Deutschpfad");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [marked, setMarked] = useState<{ right: number; total: number; unused: string[] } | null>(null);
  useEffect(() => {
    setAnswers({});
    setMarked(null);
  }, [id]);
  if (!pack) return null;
  if (!set) {
    return (
      <p>
        Paper not found. <AppLink to="/exam/lesen">All Lesen papers</AppLink>
      </p>
    );
  }

  function mark(current: LesenSet) {
    let right = 0;
    let total = 0;
    const unusedBits: string[] = [];
    current.parts.forEach((part, pi) => {
      const map = part.answer && typeof part.answer === "object" ? part.answer : {};
      if (part.kind === "headlines") {
        Object.keys(map).forEach((k) => {
          total += 1;
          if (answers[`lesen-${k}`] === map[k]) right += 1;
        });
        unusedBits.push(`Unused headlines: ${unusedKeys((part.headlines || []).map((h) => h.id), map).join(", ")}`);
      } else if (part.kind === "detail") {
        (part.items || []).forEach((it, ii) => {
          total += 1;
          if (Number(answers[`d${pi}-${ii}`]) === it.answer) right += 1;
        });
      } else if (part.kind === "ads") {
        Object.keys(map).forEach((k) => {
          total += 1;
          if (answers[`ad-${k}`] === map[k]) right += 1;
        });
        unusedBits.push(`Unused ads: ${unusedKeys((part.ads || []).map((a) => a.id), map).join(", ")}`);
      } else if (part.kind === "tf" || part.kind === "signs") {
        (part.items || []).forEach((it, ii) => {
          total += 1;
          const val = answers[`tf${pi}-${ii}`];
          if (val !== "true" && val !== "false") return;
          if ((val === "true") === !!it.answer) right += 1;
        });
      }
    });
    progressStore.record(current.id, right, total);
    noteFinished(progressStore, `/exam/lesen/${current.id}`);
    setMarked({ right, total, unused: unusedBits });
  }

  return (
    <EnhanceRoot>
      <p className="kicker">Lesen · ~{set.timeMin || 45} min</p>
      <h1>{set.title}</h1>
      <div className="btn-row">
        <AppLink className="btn" to="/exam/lesen">
          All papers
        </AppLink>
      </div>
      {set.parts.map((part, pi) => (
        <LesenPartView
          key={pi}
          part={part}
          pi={pi}
          answers={answers}
          setAnswers={setAnswers}
          marked={!!marked}
        />
      ))}
      <button type="button" className="btn btn-primary" disabled={!!marked} onClick={() => mark(set)}>
        Mark paper
      </button>
      {marked ? (
        <div id="lesen-res">
          <div className="explain">
            Score: <strong>{marked.right} / {marked.total}</strong>
            {marked.unused.length ? `. ${marked.unused.join(". ")}` : ""}. Answers are marked on the paper.
          </div>
        </div>
      ) : null}
    </EnhanceRoot>
  );
}

function LesenPartView({
  part,
  pi,
  answers,
  setAnswers,
  marked,
}: {
  part: LesenPart;
  pi: number;
  answers: Record<string, string>;
  setAnswers: (v: Record<string, string>) => void;
  marked: boolean;
}) {
  function set(key: string, value: string) {
    setAnswers({ ...answers, [key]: value });
  }
  return (
    <section className="card" style={{ marginBottom: "1rem" }}>
      <h3>Teil {pi + 1}</h3>
      <p>{part.instruction}</p>
      {part.kind === "headlines" ? (
        <>
          <ol>
            {(part.headlines || []).map((h) => (
              <li key={h.id}>{h.text}</li>
            ))}
          </ol>
          {(part.texts || []).map((t) => {
            const map = part.answer && typeof part.answer === "object" ? part.answer : {};
            const ok = marked && answers[`lesen-${t.id}`] === map[t.id];
            return (
              <div key={t.id}>
                <p>
                  <strong>{t.id}.</strong> {t.text}
                </p>
                <p>
                  Überschrift zu {t.id}:{" "}
                  <select
                    value={answers[`lesen-${t.id}`] || ""}
                    disabled={marked}
                    onChange={(e) => set(`lesen-${t.id}`, e.target.value)}
                  >
                    <option value="">—</option>
                    {(part.headlines || []).map((h) => (
                      <option key={h.id} value={h.id}>
                        {h.id}
                      </option>
                    ))}
                  </select>
                  {marked ? <KeyNote ok={ok} text={String(map[t.id] || "")} /> : null}
                </p>
              </div>
            );
          })}
        </>
      ) : null}
      {part.kind === "detail" ? (
        <>
          <div className="ex">{part.text}</div>
          {(part.items || []).map((it, ii) => {
            const name = `d${pi}-${ii}`;
            const picked = answers[name];
            const options = it.options || [];
            return (
              <div key={name}>
                <p>
                  <strong>{ii + 1}.</strong> {it.q}
                </p>
                <div className="options">
                  {options.map((o, oi) => {
                    const hit = marked && oi === it.answer;
                    const bad = marked && picked === String(oi) && !hit;
                    return (
                      <label key={o} className={`opt${hit ? " key-ok" : ""}${bad ? " key-bad" : ""}`} style={{ display: "block", marginBottom: "0.35rem" }}>
                        <input
                          type="radio"
                          name={name}
                          value={oi}
                          disabled={marked}
                          checked={picked === String(oi)}
                          onChange={() => set(name, String(oi))}
                        />{" "}
                        {o}
                      </label>
                    );
                  })}
                </div>
                {marked ? <KeyNote ok={picked === String(it.answer)} text={options[Number(it.answer)] || String(it.answer)} /> : null}
              </div>
            );
          })}
        </>
      ) : null}
      {part.kind === "ads" ? (
        <>
          <p>
            <strong>Personen</strong>
          </p>
          {(part.people || []).map((p) => (
            <p key={p.id}>
              {p.id}. {p.text}
            </p>
          ))}
          <p>
            <strong>Anzeigen</strong>
          </p>
          {(part.ads || []).map((a) => (
            <p key={a.id}>
              {a.id}. {a.text}
            </p>
          ))}
          {(part.people || []).map((p) => {
            const map = part.answer && typeof part.answer === "object" ? part.answer : {};
            const ok = marked && answers[`ad-${p.id}`] === map[p.id];
            return (
              <p key={`sel-${p.id}`}>
                {p.id} →{" "}
                <select
                  value={answers[`ad-${p.id}`] || ""}
                  disabled={marked}
                  onChange={(e) => set(`ad-${p.id}`, e.target.value)}
                >
                  <option value="">—</option>
                  {(part.ads || []).map((a) => (
                    <option key={a.id} value={a.id}>
                      {a.id}
                    </option>
                  ))}
                </select>
                {marked ? <KeyNote ok={ok} text={String(map[p.id] || "")} /> : null}
              </p>
            );
          })}
        </>
      ) : null}
      {part.kind === "tf" || part.kind === "signs" ? (
        <>
          {(part.items || []).map((it, ii) => {
            const name = `tf${pi}-${ii}`;
            const picked = answers[name];
            const ok = marked && (picked === "true" || picked === "false") && (picked === "true") === !!it.answer;
            return (
              <div className="tf-item" key={name}>
                {it.sign ? <div className="sign-box de">{it.sign}</div> : null}
                {it.text ? <p className="de">{it.text}</p> : null}
                <p>
                  <strong>{ii + 1}.</strong> {it.q}
                </p>
                <div className="rf-row">
                  <label className={`rf${marked && it.answer ? " key-ok" : ""}${marked && picked === "true" && !it.answer ? " key-bad" : ""}`}>
                    <input type="radio" name={name} value="true" disabled={marked} checked={picked === "true"} onChange={() => set(name, "true")} /> Richtig
                  </label>
                  <label className={`rf${marked && !it.answer ? " key-ok" : ""}${marked && picked === "false" && it.answer ? " key-bad" : ""}`}>
                    <input type="radio" name={name} value="false" disabled={marked} checked={picked === "false"} onChange={() => set(name, "false")} /> Falsch
                  </label>
                </div>
                {marked ? <KeyNote ok={ok} text={it.answer ? "Richtig" : "Falsch"} /> : null}
              </div>
            );
          })}
        </>
      ) : null}
    </section>
  );
}

function KeyNote({ ok, text }: { ok: boolean; text: string }) {
  return <p className={`answer-key ${ok ? "is-ok" : "is-bad"}`}>{ok ? "Correct. Answer: " : "Answer: "}{text}</p>;
}
