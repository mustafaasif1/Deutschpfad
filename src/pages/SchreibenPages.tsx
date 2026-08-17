import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppLink } from "@/components/ui/AppLink";
import { Badge } from "@/components/ui/Progress";
import { EnhanceRoot } from "@/components/ui/German";
import { useApp } from "@/context/AppContext";
import { progressStore } from "@/state/progress";
import { noteFinished } from "@/state/session";
import { hoerenMeta } from "@/lib/exam";
import { formatClock } from "@/lib/dates";
import { useCountdown, useDocumentTitle } from "@/hooks/useUi";
import type { LevelId, SchreibenTask } from "@/types/content";

export function SchreibenListPage() {
  const { pack, meta, levelId } = useApp();
  useDocumentTitle(meta ? `Schreiben · ${meta.title}` : "Schreiben · Deutschpfad");
  if (!pack || !levelId) return null;
  const hm = hoerenMeta(levelId);
  const aim =
    levelId === "a1"
      ? "Teil 1 form (5 fields) + Teil 2 ~30 words, greeting + closing"
      : levelId === "a2"
        ? "form or note + short letter, all points"
        : "30 minutes, four Leitpunkte, 100–120 words";
  return (
    <>
      <h1>Schreiben from memory</h1>
      <p className="lead">
        The model stays locked until you finish or the timer ends. Cover all points, then compare. Aim ~{hm.writeMin} min · {aim}.
      </p>
      <div className="grid grid-2">
        {(pack.exam.schreiben || []).map((t) => {
          const lv = t.register === "Sie" ? (levelId === "a1" ? "a1" : levelId) : "a2";
          const kind = t.kind === "form" ? "form" : "memory";
          return (
            <AppLink key={t.id} className="card clickable" to={`/schreiben/${t.id}`}>
              <h3>{t.title}</h3>
              <p>
                <Badge level={lv} /> {t.register} · {kind}
              </p>
            </AppLink>
          );
        })}
      </div>
    </>
  );
}

export function SchreibenTaskPage() {
  const { id = "", mode } = useParams();
  const { pack, meta, levelId, toast } = useApp();
  const t = pack?.exam.schreiben.find((x) => x.id === id);
  useDocumentTitle(t ? `${t.title} · ${meta?.title || "Deutschpfad"}` : "Schreiben · Deutschpfad");
  if (!pack || !levelId) return null;
  if (!t) return <p>Task not found.</p>;
  if (t.kind === "form") return <FormTask key={t.id} task={t} toast={toast} />;
  return <LetterTask key={t.id} task={t} peek={mode === "model"} levelId={levelId} toast={toast} />;
}

function FormTask({ task, toast }: { task: SchreibenTask; toast: (msg: string) => void }) {
  const fields = task.fields || [];
  const [values, setValues] = useState<Record<string, string>>({});
  const [show, setShow] = useState(false);
  const filled = fields.every((f) => (values[f.id] || "").trim());
  return (
    <EnhanceRoot>
      <p className="kicker">{task.register} · Formular</p>
      <h1>{task.title}</h1>
      <p>{task.situation}</p>
      {task.situationEn ? <p className="en-hint">{task.situationEn}</p> : null}
      <div className="card form-grid">
        {fields.map((f) => (
          <label key={f.id}>
            {f.label}
            <input
              autoComplete="off"
              value={values[f.id] || ""}
              onChange={(e) => setValues({ ...values, [f.id]: e.target.value })}
            />
          </label>
        ))}
      </div>
      <div className="btn-row">
        <button
          type="button"
          className="btn btn-primary"
          disabled={!filled}
          onClick={() => {
            progressStore.markDone(`schreiben-${task.id}`);
            noteFinished(progressStore, `/schreiben/${task.id}`);
            toast("Form ticked. Now write the short message too.");
          }}
        >
          Mark form done
        </button>
        <button type="button" className="btn" onClick={() => setShow(true)}>
          Show sample
        </button>
      </div>
      {task.model ? (
        <div className="ex" hidden={!show}>
          <span className="label-s">Sample — yours will be your own details</span>
          <p className="de">{task.model}</p>
        </div>
      ) : null}
    </EnhanceRoot>
  );
}

function LetterTask({
  task,
  peek,
  levelId,
  toast,
}: {
  task: SchreibenTask;
  peek: boolean;
  levelId: LevelId;
  toast: (msg: string) => void;
}) {
  const hm = hoerenMeta(levelId);
  const minWords = levelId === "a1" ? 20 : levelId === "a2" ? 50 : 80;
  const wordAim = levelId === "a1" ? "Aim ~30 words." : levelId === "a2" ? "Aim ~60–80 words." : "Aim 100–120 words.";
  const [unlocked, setUnlocked] = useState(peek);
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const [lp, setLp] = useState<Record<number, boolean>>({});
  const [chkK2, setChkK2] = useState(false);
  const [chkReg, setChkReg] = useState(false);
  const formal = task.register === "Sie" && levelId === "b1";
  const clock = useCountdown(hm.writeMin * 60, () => {
    setUnlocked(true);
  });
  useEffect(() => {
    clock.start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const n = text.trim() ? text.trim().split(/\s+/).length : 0;
  const hasK2 = /könnten|würde|wäre|hätte/i.test(text);
  const allLp =
    (task.points || []).every((_, i) => lp[i]) &&
    chkReg &&
    (!formal || chkK2 || hasK2);
  const canSave = unlocked && n >= minWords && allLp;

  return (
    <EnhanceRoot>
      <p className="kicker">
        {task.register} · {peek ? "model allowed" : "memory"}
      </p>
      <div className="exam-player">
        <div className="exam-player-top">
          <p className="kicker">Timer</p>
          <p className={`exam-status exam-clock${clock.left <= 120 ? " is-low" : ""}`}>{formatClock(clock.left)}</p>
          <p className="exam-sub">{unlocked ? "Model unlocked. Compare, then tick the points you actually wrote." : `${wordAim} Model locked until you finish.`}</p>
        </div>
      </div>
      <h1>{task.title}</h1>
      <p>{task.situation}</p>
      {task.situationEn ? <p className="en-hint">{task.situationEn}</p> : null}
      <ol>
        {(task.points || []).map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ol>
      <p className="letter-lock">Write from memory. Do not open the model until the four points are in the letter.</p>
      <textarea value={text} placeholder="Write the letter here…" onChange={(e) => setText(e.target.value)} />
      <p className="q-meta">
        {n} words · need at least {minWords}
      </p>
      <div className="checklist card">
        {(task.points || []).map((p, i) => (
          <label key={p}>
            <input
              type="checkbox"
              checked={!!lp[i]}
              onChange={(e) => setLp({ ...lp, [i]: e.target.checked })}
            />{" "}
            Leitpunkt {i + 1} is a full sentence in my letter
          </label>
        ))}
        {formal ? (
          <label>
            <input type="checkbox" checked={chkK2 || hasK2} onChange={(e) => setChkK2(e.target.checked)} /> I used Könnten /
            würde / wäre once
          </label>
        ) : null}
        <label>
          <input type="checkbox" checked={chkReg} onChange={(e) => setChkReg(e.target.checked)} /> Greeting and closing match{" "}
          {task.register}
        </label>
      </div>
      <div className="btn-row">
        <button
          type="button"
          className="btn btn-warm"
          onClick={() => {
            clock.stop();
            setUnlocked(true);
          }}
        >
          I am finished — unlock model
        </button>
        <button type="button" className="btn" disabled={!unlocked} onClick={() => setShow(true)}>
          Show model
        </button>
        <button
          type="button"
          className="btn btn-primary"
          disabled={!canSave}
          onClick={() => {
            progressStore.markDone(`schreiben-${task.id}`);
            noteFinished(progressStore, `/schreiben/${task.id}`);
            toast("Letter saved. Redo it later with the model still hidden.");
          }}
        >
          Mark task done
        </button>
        {peek ? null : (
          <AppLink className="btn btn-ghost" to={`/schreiben/${task.id}/model`}>
            Practice with model
          </AppLink>
        )}
      </div>
      <div className="ex" hidden={!show}>
        <span className="label-s">Model — compare, do not copy</span>
        <p className="de">{task.model}</p>
      </div>
    </EnhanceRoot>
  );
}
