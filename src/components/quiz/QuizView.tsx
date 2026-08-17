import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { Question } from "@/types/content";
import { AppLink } from "@/components/ui/AppLink";
import { Badge } from "@/components/ui/Progress";
import { ProgressBar } from "@/components/ui/Progress";
import { EnhanceRoot } from "@/components/ui/German";
import { useApp } from "@/context/AppContext";
import { answerLabel, checkAnswer, shuffle } from "@/lib/quiz";
import { enrichExplain } from "@/lib/explain";
import { progressStore } from "@/state/progress";
import {
  advanceSession,
  isComplete,
  remainingCount,
  sessionCta,
  todaySession,
} from "@/state/session";
import { useDocumentTitle } from "@/hooks/useUi";

type QuizOpts = {
  exitPath: string;
  parentLabel: string;
};

type Verdict = { ok: boolean; picked: unknown };

function formatPrompt(text: string) {
  const parts = String(text).split(/(_{2,})/g);
  return parts.map((part, i) =>
    /^_{2,}$/.test(part) ? (
      <span key={i} className="blank" aria-label="blank">
        ______
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export function QuizView({
  questions,
  title,
  setId,
  opts,
}: {
  questions: Question[];
  title: string;
  setId: string;
  opts: QuizOpts;
}) {
  const { meta } = useApp();
  const navigate = useNavigate();
  const [items, setItems] = useState(() => questions);
  const [i, setI] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);
  const [locked, setLocked] = useState(false);
  const [verdicts, setVerdicts] = useState<(Verdict | undefined)[]>([]);
  const [missed, setMissed] = useState<{ prompt: string; answer: string; explain: string }[]>([]);
  const [built, setBuilt] = useState<number[]>([]);
  const [typed, setTyped] = useState("");
  const [replay, setReplay] = useState(0);
  const lockRef = useRef(false);
  const recordedRef = useRef(false);
  const verdictsRef = useRef<(Verdict | undefined)[]>([]);

  useEffect(() => {
    setItems(shuffle(questions));
    setI(0);
    setCorrect(0);
    setDone(false);
    setLocked(false);
    setVerdicts([]);
    verdictsRef.current = [];
    setMissed([]);
    setBuilt([]);
    setTyped("");
    setReplay(0);
    lockRef.current = false;
    recordedRef.current = false;
  }, [setId]);

  useDocumentTitle(`${title} · ${meta?.title || "Deutschpfad"}`);

  const dirty = !done && (i > 0 || verdicts.some(Boolean));

  if (!items.length) {
    return <p>No questions in this set yet.</p>;
  }

  if (done) {
    return (
      <QuizDone
        title={title}
        setId={setId}
        correct={correct}
        total={items.length}
        missed={missed}
        opts={opts}
        onRetry={() => {
          setItems(shuffle(items));
          setI(0);
          setCorrect(0);
          setDone(false);
          setLocked(false);
          setVerdicts([]);
          setMissed([]);
          setBuilt([]);
          setTyped("");
          setReplay((n) => n + 1);
          lockRef.current = false;
          recordedRef.current = false;
        }}
      />
    );
  }

  const q = items[i];
  const n = items.length;
  const step = i + 1;
  let hint = "Choose one answer.";
  if (q.type === "tf") hint = "True or false?";
  else if (q.type === "order") hint = "Tap the words in the correct order, then Check.";
  else if (q.type === "gap" || q.type === "type") hint = "Type your answer, then Check.";

  const scored = verdicts.filter(Boolean) as Verdict[];
  const scoreN = scored.filter((v) => v.ok).length;

  function finishQ(ok: boolean, picked: unknown) {
    if (lockRef.current) return;
    lockRef.current = true;
    setLocked(true);
    setVerdicts((prev) => {
      const next = prev.slice();
      next[i] = { ok, picked };
      verdictsRef.current = next;
      return next;
    });
    if (ok) setCorrect((c) => c + 1);
    else {
      setMissed((m) => [
        ...m,
        { prompt: q.de || q.prompt, answer: answerLabel(q), explain: enrichExplain(q) },
      ]);
    }
  }

  const verdict = verdicts[i];
  const showExplain = locked || !!verdict;

  return (
    <EnhanceRoot key={`${replay}-${i}`}>
      <div className="quiz-toolbar">
        <button
          type="button"
          className="btn"
          onClick={() => {
            if (dirty && !window.confirm("Leave this quiz? Score so far will not be saved.")) return;
            navigate(opts.exitPath);
          }}
        >
          Exit quiz
        </button>
        {i > 0 ? (
          <button
            type="button"
            className="btn"
            onClick={() => {
              setI((n) => n - 1);
              const prevLocked = !!verdicts[i - 1];
              lockRef.current = prevLocked;
              setLocked(prevLocked);
              setBuilt([]);
              setTyped("");
            }}
          >
            Previous
          </button>
        ) : null}
      </div>
      <div className="card q-card">
        <p className="q-meta">
          Question <strong>{step}</strong> of {n} · score so far {scoreN} {q.level ? <Badge level={q.level} /> : null}
        </p>
        <ProgressBar n={step - 1} d={n} />
        <p className="q-hint">{hint}</p>
        <h2 className="q-prompt">
          {q.de ? (
            <>
              <span className="de">{q.de}</span>
              <br />
            </>
          ) : null}
          {formatPrompt(q.prompt)}
        </h2>
        {q.type === "mcq" ? (
          <div className="options">
            {(q.options || []).map((o, oi) => (
              <OptionButton
                key={`${oi}-${o}`}
                letter={String.fromCharCode(97 + oi)}
                label={o}
                disabled={showExplain}
                correct={showExplain && o === q.answer}
                wrong={showExplain && !verdict?.ok && String(verdict?.picked) === o}
                onClick={() => finishQ(checkAnswer(q, o), o)}
              />
            ))}
          </div>
        ) : null}
        {q.type === "tf" ? (
          <div className="options">
            <OptionButton
              letter="a"
              label="True / Richtig"
              disabled={showExplain}
              correct={showExplain && Boolean(q.answer) === true}
              wrong={showExplain && !verdict?.ok && verdict?.picked === true}
              onClick={() => finishQ(checkAnswer(q, true), true)}
            />
            <OptionButton
              letter="b"
              label="False / Falsch"
              disabled={showExplain}
              correct={showExplain && Boolean(q.answer) === false}
              wrong={showExplain && !verdict?.ok && verdict?.picked === false}
              onClick={() => finishQ(checkAnswer(q, false), false)}
            />
          </div>
        ) : null}
        {q.type === "order" ? (
          <OrderQuestion
            words={q.words || []}
            built={built}
            setBuilt={setBuilt}
            locked={showExplain}
            onCheck={() => {
              const sentence = built.map((idx) => (q.words || [])[idx]).join(" ");
              finishQ(checkAnswer(q, sentence), sentence);
            }}
          />
        ) : null}
        {q.type === "gap" || q.type === "type" ? (
          <div className="gap-row">
            <input
              type="text"
              value={typed}
              disabled={showExplain}
              placeholder="Type the German answer…"
              autoComplete="off"
              spellCheck={false}
              autoFocus
              onChange={(e) => setTyped(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !showExplain) finishQ(checkAnswer(q, typed), typed);
              }}
            />
            <button
              type="button"
              className="btn btn-primary"
              disabled={showExplain}
              onClick={() => finishQ(checkAnswer(q, typed), typed)}
            >
              Check answer
            </button>
          </div>
        ) : null}
        {showExplain ? (
          <Explain
            ok={verdict?.ok ?? locked}
            q={q}
            isLast={i + 1 >= items.length}
            onNext={() => {
              if (i + 1 >= items.length) {
                if (recordedRef.current) return;
                recordedRef.current = true;
                const scored = verdictsRef.current.filter((v) => v?.ok).length;
                progressStore.record(setId, scored, items.length);
                setDone(true);
              } else {
                const nextLocked = !!verdicts[i + 1];
                lockRef.current = nextLocked;
                setI((n) => n + 1);
                setLocked(nextLocked);
                setBuilt([]);
                setTyped("");
              }
            }}
          />
        ) : null}
      </div>
    </EnhanceRoot>
  );
}

function OptionButton({
  letter,
  label,
  disabled,
  correct,
  wrong,
  onClick,
}: {
  letter: string;
  label: string;
  disabled: boolean;
  correct: boolean;
  wrong: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`opt${correct ? " correct" : ""}${wrong ? " wrong" : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      <span className="opt-letter">{letter}</span> {label}
    </button>
  );
}

function OrderQuestion({
  words,
  built,
  setBuilt,
  locked,
  onCheck,
}: {
  words: string[];
  built: number[];
  setBuilt: (v: number[]) => void;
  locked: boolean;
  onCheck: () => void;
}) {
  const used = new Set(built);

  return (
    <>
      <div className="chips" id="bank">
        {words.map((w, idx) => {
          const isUsed = used.has(idx);
          return (
            <button
              key={`${w}-${idx}`}
              type="button"
              className={`chip${isUsed ? " used" : ""}`}
              disabled={locked || isUsed}
              onClick={() => {
                if (locked || isUsed) return;
                setBuilt([...built, idx]);
              }}
            >
              {w}
            </button>
          );
        })}
      </div>
      <p className={`de built-line${built.length ? "" : " muted"}`}>
        {built.length ? built.map((idx) => words[idx]).join(" ") : "Your sentence appears here…"}
      </p>
      <div className="btn-row">
        <button
          type="button"
          className="btn"
          disabled={locked}
          onClick={() => setBuilt(built.slice(0, -1))}
        >
          Undo
        </button>
        <button type="button" className="btn btn-primary" disabled={locked} onClick={onCheck}>
          Check answer
        </button>
      </div>
    </>
  );
}

function Explain({
  ok,
  q,
  isLast,
  onNext,
}: {
  ok: boolean;
  q: Question;
  isLast: boolean;
  onNext: () => void;
}) {
  const why = enrichExplain(q);
  return (
    <div className={`explain-wrap ${ok ? "is-correct" : "is-wrong"}`}>
      <div className="explain-result">{ok ? "Correct" : "Not quite"}</div>
      <p className="explain-answer">
        Answer: <strong className="de">{answerLabel(q)}</strong>
      </p>
      <p className="explain-why">
        <span className="explain-label">Explanation</span> {why}
      </p>
      <div className="btn-row">
        <button type="button" className="btn btn-primary" autoFocus onClick={onNext}>
          {isLast ? "See results" : "Next question"}
        </button>
      </div>
    </div>
  );
}

function QuizDone({
  setId,
  correct,
  total,
  missed,
  opts,
  onRetry,
}: {
  title: string;
  setId: string;
  correct: number;
  total: number;
  missed: { prompt: string; answer: string; explain: string }[];
  opts: QuizOpts;
  onRetry: () => void;
}) {
  const { pack, meta, toast, progress } = useApp();
  const navigate = useNavigate();
  const location = useLocation();
  const p = Math.round((correct / total) * 100);
  const heading = p >= 80 ? "Strong." : p >= 60 ? "Passable — drill again." : "Repeat this set today.";
  const session = pack && meta ? todaySession(pack, progress, meta) : null;
  const action = pack && meta && remainingCount(session) > 0 ? sessionCta(pack, progress, meta, location.pathname) : null;
  const complete = session ? isComplete(session) : false;

  return (
    <div className="card">
      <h1>{heading}</h1>
      <p>
        You scored <strong>{correct} / {total}</strong> ({p}%).{" "}
        {p >= 80
          ? "This set returns in 3 days, then 7 if it holds. Read any miss below once more before you leave."
          : "Under 80% means the pattern is not exam-ready. Retry today and read every explanation — this set returns tomorrow."}
      </p>
      {setId.startsWith("topic-") ? (
        <p>Quiz saved. Go back to the topic and tick “I can say this” only when you can produce it without English notes.</p>
      ) : (
        <p>Score saved. Tick the matching step on Today if this was today’s plan task.</p>
      )}
      <ProgressBar n={correct} d={total} />
      {missed.length ? (
        <>
          <h2>Answers you missed</h2>
          <ul className="missed-list">
            {missed.map((m, i) => (
              <li key={`${m.prompt}-${i}`}>
                <span className="q-meta">{m.prompt}</span>
                <br />
                <strong className="de">{m.answer}</strong>
                {m.explain ? (
                  <>
                    <br />
                    {m.explain}
                  </>
                ) : null}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Every item was right. The answer was the one marked green on each question.</p>
      )}
      <div className="btn-row">
        {action ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              if (!pack || !meta) return;
              const result = advanceSession(pack, progressStore, meta, location.pathname);
              if (result.toast) toast(result.toast);
              if (result.mode === "stay") {
                navigate("/");
                return;
              }
              navigate(result.href);
            }}
          >
            {action.label}
          </button>
        ) : complete ? (
          <AppLink className="btn btn-primary" to="/">
            Today — list clear
          </AppLink>
        ) : (
          <AppLink className="btn btn-primary" to="/">
            Tick this on Today
          </AppLink>
        )}
        <button type="button" className="btn" onClick={onRetry}>
          Retry missed-style shuffle
        </button>
        <AppLink className="btn" to={opts.exitPath}>
          {opts.parentLabel}
        </AppLink>
      </div>
    </div>
  );
}
