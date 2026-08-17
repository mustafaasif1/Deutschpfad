import { useEffect, useRef } from "react";
import { AppLink } from "@/components/ui/AppLink";
import { Badge, ProgressBar } from "@/components/ui/Progress";
import { PracticeTabs } from "@/components/ui/PracticeTabs";
import { useApp } from "@/context/AppContext";
import { progressStore } from "@/state/progress";
import { clock, leadCopy } from "@/state/session";
import { useDocumentTitle } from "@/hooks/useUi";

export function PlanPage() {
  const { pack, meta, progress } = useApp();
  const scrolled = useRef(false);
  useDocumentTitle(meta ? `Plan · ${meta.title}` : "Plan · Deutschpfad");
  const c = pack && meta ? clock(progress, meta) : null;

  useEffect(() => {
    if (!c || scrolled.current) return;
    const el = document.getElementById(`week-${c.weekN}`);
    if (!el?.scrollIntoView) return;
    scrolled.current = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ block: "nearest", behavior: reduce ? "auto" : "smooth" });
  }, [c]);

  if (!pack || !meta) return null;
  const s = progress;
  const weekN = c?.weekN;

  return (
    <>
      <PracticeTabs />
      <h1>Eight weeks · {meta.exam}</h1>
      <p className="lead">
        {c ? leadCopy(c) : ""} This is the full curriculum. Do each week’s tasks in the order listed.{" "}
        <AppLink to="/">Today</AppLink> pulls the next unticked task plus a review, a topic, and one exam skill — so you
        never have to invent a sitting.
      </p>
      <div className="card" style={{ marginBottom: "1.25rem" }}>
        <p className="kicker">How to use the plan</p>
        <ol className="plain-ol">
          <li>Stay on the current week until its topics can be said without English notes.</li>
          <li>Tick a task only after you finish it — opening the page does not tick it.</li>
          <li>Do not skip to week 8 mocks because grammar feels slow. Weak chunks fail the oral.</li>
          <li>About 45–60 minutes a day, six days a week, is enough if you finish Today.</li>
        </ol>
      </div>
      {pack.weeks.map((w) => {
        const n = w.tasks.filter((t) => s.checks[t.id]).length;
        const current = w.id === weekN;
        return (
          <section key={w.id} className={`week-block${current ? " is-current" : ""}`} id={`week-${w.id}`}>
            <h3>
              Week {w.id} · {w.title}
              {current ? " · this week" : ""} <Badge level={meta.id} />
            </h3>
            <p>{w.goal}</p>
            <ProgressBar n={n} d={w.tasks.length} />
            {w.tasks.map((t, i) => (
              <div className="week-item" key={t.id}>
                <input
                  className="check"
                  type="checkbox"
                  checked={!!s.checks[t.id]}
                  aria-label={`Mark done: ${t.label}`}
                  onChange={(e) => progressStore.toggleCheck(t.id, e.target.checked)}
                />
                <div>
                  <span className="week-item-n">{i + 1}.</span> <AppLink to={t.href}>{t.label}</AppLink>
                </div>
                <div>{s.checks[t.id] ? "✓" : ""}</div>
              </div>
            ))}
          </section>
        );
      })}
    </>
  );
}
