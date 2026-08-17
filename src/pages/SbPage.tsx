import { useState } from "react";
import { EnhanceRoot } from "@/components/ui/German";
import { useApp } from "@/context/AppContext";
import { progressStore } from "@/state/progress";
import { noteFinished } from "@/state/session";
import { answersMatch } from "@/lib/quiz";
import { useDocumentTitle } from "@/hooks/useUi";
import type { SprachbausteineSet } from "@/types/content";

export function SprachbausteinePage() {
  const { pack, meta } = useApp();
  useDocumentTitle(meta ? `Sprachbausteine · ${meta.title}` : "Sprachbausteine · Deutschpfad");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<number, { right: number; total: number; keys: string[] }>>({});
  if (!pack) return null;

  function mark(si: number, set: SprachbausteineSet) {
    let right = 0;
    const keys: string[] = [];
    if (set.kind === "cloze") {
      set.gaps.forEach((g, gi) => {
        keys.push(g.answer);
        if (answers[`sb-${si}-${gi}`] === g.answer) right += 1;
      });
      progressStore.record(set.id, right, set.gaps.length);
      noteFinished(progressStore, "/exam/sprachbausteine");
      setResults((r) => ({ ...r, [si]: { right, total: set.gaps.length, keys } }));
    } else {
      set.answer.forEach((a, gi) => {
        keys.push(a);
        if (answersMatch(answers[`bank-${si}-${gi}`] || "", a)) right += 1;
      });
      progressStore.record(set.id, right, set.answer.length);
      noteFinished(progressStore, "/exam/sprachbausteine");
      setResults((r) => ({ ...r, [si]: { right, total: set.answer.length, keys } }));
    }
  }

  return (
    <EnhanceRoot>
      <h1>Sprachbausteine</h1>
      <p className="lead">Read the whole letter first. Verb position tells you weil vs denn vs deshalb.</p>
      {pack.exam.sprachbausteine.map((set, si) => {
        const res = results[si];
        return (
          <section className="card" style={{ marginBottom: "1rem" }} key={set.id}>
            <h3>{set.title}</h3>
            {set.kind === "cloze" ? (
              <>
                <p>{set.text}</p>
                {set.gaps.map((g, gi) => {
                  const key = `sb-${si}-${gi}`;
                  const ok = res ? answers[key] === g.answer : false;
                  return (
                    <p key={key}>
                      ({gi + 1}){" "}
                      <select
                        value={answers[key] || ""}
                        disabled={!!res}
                        onChange={(e) => setAnswers({ ...answers, [key]: e.target.value })}
                      >
                        <option value="">—</option>
                        {g.options.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                      {res ? <span className={`answer-key ${ok ? "is-ok" : "is-bad"}`}> Answer: {g.answer}</span> : null}
                    </p>
                  );
                })}
              </>
            ) : (
              <>
                <p>Bank: {set.bank.map((b) => b).join(" · ")}</p>
                <p>{set.text}</p>
                {set.answer.map((a, gi) => {
                  const key = `bank-${si}-${gi}`;
                  const ok = res ? answersMatch(answers[key] || "", a) : false;
                  return (
                    <p key={key}>
                      ({gi + 1}){" "}
                      <input
                        type="text"
                        value={answers[key] || ""}
                        disabled={!!res}
                        onChange={(e) => setAnswers({ ...answers, [key]: e.target.value })}
                      />
                      {res ? <span className={`answer-key ${ok ? "is-ok" : "is-bad"}`}> Answer: {a}</span> : null}
                    </p>
                  );
                })}
              </>
            )}
            <button type="button" className="btn btn-primary" disabled={!!res} onClick={() => mark(si, set)}>
              Mark
            </button>
            {res ? (
              <div className="explain">
                {res.right} / {res.total}
                <br />
                Key: {res.keys.join(", ")}
              </div>
            ) : null}
          </section>
        );
      })}
    </EnhanceRoot>
  );
}
