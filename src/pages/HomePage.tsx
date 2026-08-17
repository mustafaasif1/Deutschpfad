import { useNavigate } from "react-router-dom";
import { AppLink } from "@/components/ui/AppLink";
import { StudyPath } from "@/components/ui/StudyPath";
import { useApp } from "@/context/AppContext";
import { remainingWeekTasks, SITE_PATH, taskAlreadyOnToday } from "@/lib/course";
import { toPath } from "@/lib/href";
import { progressStore } from "@/state/progress";
import {
  clock,
  dueItems,
  isComplete,
  kindLabel,
  leadCopy,
  nextStep,
  produceQuizHref,
  produceReady,
  setStep,
  startSession,
  todaySession,
  weekFor,
} from "@/state/session";
import { useDocumentTitle } from "@/hooks/useUi";

export function HomePage() {
  const { pack, meta, progress } = useApp();
  const navigate = useNavigate();
  useDocumentTitle(meta ? `Today · ${meta.title}` : "Today · Deutschpfad");
  if (!pack || !meta) return null;

  const c = clock(progress, meta);
  const session = todaySession(pack, progress, meta);
  const w = weekFor(pack, c);
  const open = nextStep(session);
  const complete = isComplete(session);
  const dueN = dueItems(pack, progress).length;
  const dueShown = session.steps.filter((st) => st.kind === "review").length;
  const extraDue = Math.max(0, dueN - dueShown);
  const todayHrefs = session.steps.map((st) => st.href);
  const restOfWeek = remainingWeekTasks(pack, progress, c.weekN)
    .filter((t) => !taskAlreadyOnToday(t.href, todayHrefs))
    .slice(0, 6);

  return (
    <>
      <p className="kicker">{meta.exam} · 8-week course</p>
      <h1>Today</h1>
      <p className="lead">{leadCopy(c)}</p>
      <StudyPath title="How Deutschpfad works" steps={SITE_PATH} />
      <div className="session-card">
        <p className="session-week">
          <AppLink to="/plan">
            <strong>
              Week {c.weekN} · {w.title}
            </strong>
          </AppLink>
          <span className="session-week-goal"> — {w.goal}</span>
        </p>
        <p className="session-pace">
          Do the steps in order. Tick a box only when you have finished that step — the rail never ticks for you. A quiz
          you sit today checks Review by itself.
        </p>
        {session.steps.length ? (
          <ol className="session-steps">
            {session.steps.map((st) => {
              const current = open && st.id === open.id;
              const keys = st.keys || {};
              const topicId = keys.topicId || (st.id.startsWith("topic-") ? st.id.slice(6) : "");
              const blocked = st.kind === "produce" && !!topicId && !produceReady(pack, progress, topicId);
              let blurb = st.blurb || "";
              if (st.done) blurb = "Done — keep the German in your mouth tomorrow.";
              else if (blocked) blurb = "Quiz the chunks to 80% first, then come back and produce.";
              else if (current) blurb = `Do this next. ${blurb}`;
              const derivedDone =
                st.done &&
                ((st.kind === "review" && !progress.done[st.id]) || (st.kind === "exam" && !progress.done[st.id]));
              const href = blocked && topicId ? produceQuizHref(topicId) : st.href;
              return (
                <li key={st.id} className={st.done ? "is-done" : current ? "is-current" : ""}>
                  <input
                    className="check"
                    type="checkbox"
                    checked={st.done}
                    disabled={(blocked && !st.done) || derivedDone}
                    aria-label={`Mark done: ${st.title}`}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => {
                      setStep(pack, progressStore, meta, st.id, e.target.checked);
                    }}
                  />
                  <AppLink to={href}>
                    <span className="session-title">
                      {st.title}
                      <span className="session-kind">{kindLabel(st.kind)}</span>
                    </span>
                    <span className="session-blurb">{blurb}</span>
                  </AppLink>
                </li>
              );
            })}
          </ol>
        ) : (
          <p>Nothing queued. Open this week’s plan and take the next unticked task.</p>
        )}
        {complete ? (
          <p>
            That’s all for today. Come back tomorrow. Reviews return on a 1 / 3 / 7 schedule — sleep is part of the
            course.
          </p>
        ) : null}
        {extraDue ? (
          <p className="pass-meta">
            <AppLink to="/progress">
              {extraDue} more review{extraDue === 1 ? "" : "s"} on Progress
            </AppLink>
          </p>
        ) : null}
        {session.steps.length && !complete ? (
          <div className="btn-row">
            <button
              type="button"
              className="btn btn-warm"
              onClick={() => {
                const step = startSession(pack, progressStore, meta);
                if (!step) {
                  navigate("/plan");
                  return;
                }
                const keys = step.keys || {};
                let href = step.href;
                if (step.kind === "produce" && keys.topicId && !produceReady(pack, progressStore.get(), keys.topicId)) {
                  href = produceQuizHref(keys.topicId);
                }
                navigate(toPath(href));
              }}
            >
              Start the next step
            </button>
            <AppLink className="btn" to="/plan">
              Full 8-week plan
            </AppLink>
          </div>
        ) : !session.steps.length ? (
          <div className="btn-row">
            <AppLink className="btn btn-primary" to="/plan">
              This week’s plan
            </AppLink>
          </div>
        ) : (
          <div className="btn-row">
            <AppLink className="btn" to="/plan">
              Full 8-week plan
            </AppLink>
          </div>
        )}
      </div>
      {restOfWeek.length ? (
        <div className="week-follow">
          <h2>Also this week — do in this order</h2>
          <p className="lead">
            Today only queues four steps so the sitting stays finishable. These are the next unticked tasks from week{" "}
            {c.weekN}. Tomorrow’s list will pull from here.
          </p>
          <ol className="week-follow-list">
            {restOfWeek.map((t) => (
              <li key={t.id}>
                <AppLink to={t.href}>{t.label}</AppLink>
              </li>
            ))}
          </ol>
        </div>
      ) : null}
      <p className="structure-note">
        This site is the course: topics, grammar, vocab, writing, speaking clocks, and mocks. Browser voice trains
        method, not exam acoustics — play the official telc MP3 on{" "}
        <AppLink to="/exam/ears">Official ears</AppLink> before you sit. A human partner still helps the oral.
      </p>
    </>
  );
}
