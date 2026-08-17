import { useNavigate } from "react-router-dom";
import { AppLink } from "@/components/ui/AppLink";
import { useApp } from "@/context/AppContext";
import { progressStore } from "@/state/progress";
import { leadCopy, passMap, PASS, rebuildSession } from "@/state/session";
import { useDocumentTitle } from "@/hooks/useUi";

export function ProgressPage() {
  const { pack, meta, toast, selectLevel, progress } = useApp();
  const navigate = useNavigate();
  useDocumentTitle(meta ? `Progress · ${meta.title}` : "Progress · Deutschpfad");
  if (!pack || !meta) return null;
  const map = passMap(pack, progress, meta);
  const c = map.clock;
  const r = map.readiness;
  const heading =
    r.level === "ready"
      ? "Ready enough to sit."
      : r.level === "gap"
        ? "Gaps before the paper."
        : r.level === "shape"
          ? "Shape is forming."
          : "Will you pass?";

  return (
    <>
      <h1>Pass map · {meta.title}</h1>
      <p className="lead">
        {leadCopy(c)}
        {c.examDate ? "" : " Add an exam date below so this week matches the sitting."} Topics done, quizzes at 80%+, and
        one mock is the pass map — not random extra grammar.
      </p>
      <div className="readiness" data-level={r.level}>
        <h2>{heading}</h2>
        <p>{r.text}</p>
        <p className="pass-meta">
          {map.produce} / {map.topics.length} topics done · {map.weak.length} quiz
          {map.weak.length === 1 ? "" : "zes"} under 80% · {map.mocksDone} / {map.mocks.length} mocks ·{" "}
          {map.oral ? "oral run done" : "no oral run yet"} · streak {progress.streak?.count || 0}
        </p>
      </div>
      <h2>Topics</h2>
      <Rows list={map.topics} okLabel="done" openLabel="open" />
      <h2>Due review (1 / 3 / 7)</h2>
      {map.due.length ? (
        <div className="pass-list">
          {map.due.map((d) => {
            const weak = d.lastPct != null && d.lastPct < PASS;
            const label = weak ? `${d.lastPct}% · 1-day` : `${d.interval || 3}-day box`;
            return (
              <AppLink key={d.id} className="pass-row" to={d.href}>
                <span>{d.title}</span>
                <span className={`pass-status ${weak ? "is-weak" : "is-ok"}`}>{label}</span>
              </AppLink>
            );
          })}
        </div>
      ) : (
        <p>Nothing due. Passed quizzes return in 3 days, then 7 if they hold at 80%.</p>
      )}
      <h2>Weak quizzes</h2>
      {map.weak.length ? (
        <Rows
          list={map.weak.map((q) => ({ title: q.title, href: q.href, done: false, pct: q.pct, due: q.due }))}
          weak
        />
      ) : (
        <p>No scored set is under 80%.</p>
      )}
      <h2>Mocks</h2>
      {map.mocks.length ? <Rows list={map.mocks} okLabel="done" openLabel="not sat" /> : <p>No mocks in this level pack.</p>}
      <div className="exam-date-row">
        <label htmlFor="exam-date">Exam date</label>
        <input
          id="exam-date"
          type="date"
          value={c.examDate || ""}
          onChange={(e) => progressStore.setExamDate(e.target.value || null)}
        />
        {c.examDate ? (
          <button type="button" className="btn" onClick={() => progressStore.setExamDate(null)}>
            Clear
          </button>
        ) : null}
        <span className="pass-meta">Optional. Sets week from the sitting, not from first visit.</span>
      </div>
      <h2>This browser only</h2>
      <p className="lead">Progress is saved on this device, not in an account. Download a copy before you reset or switch phones.</p>
      <div className="btn-row">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            const blob = new Blob([progressStore.exportJson()], { type: "application/json" });
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = "deutschpfad-progress.json";
            a.click();
            URL.revokeObjectURL(a.href);
            toast("Backup downloaded.");
          }}
        >
          Download backup
        </button>
        <label className="btn" htmlFor="backup-import">
          Import backup
        </label>
        <input
          id="backup-import"
          type="file"
          accept="application/json,.json"
          hidden
          onChange={(ev) => {
            const file = ev.target.files?.[0];
            ev.target.value = "";
            if (!file) return;
            const reader = new FileReader();
            reader.onload = () => {
              try {
                progressStore.importJson(String(reader.result || ""));
                const lv = progressStore.getLevel();
                if (lv) void selectLevel(lv);
                toast("Backup imported.");
              } catch {
                toast("Could not import that file.");
              }
            };
            reader.readAsText(file);
          }}
        />
      </div>
      <div className="btn-row">
        <button
          type="button"
          className="btn"
          onClick={() => {
            if (confirm(`Erase ticks, scores, and the due list for ${meta.title} only? The exam date stays.`)) {
              progressStore.resetLevel();
              rebuildSession(pack, progressStore, meta);
              toast("Level progress reset.");
            }
          }}
        >
          Reset {meta.title} progress
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => {
            const typed = window.prompt("This erases A1, A2, and B1 on this browser. Type RESET to confirm.");
            if (typed !== "RESET") return;
            progressStore.reset();
            navigate("/levels");
          }}
        >
          Reset all levels
        </button>
      </div>
      <p className="pass-meta">Reset this level keeps the exam date. Scores, ticks, and the due list are erased.</p>
    </>
  );
}

function Rows({
  list,
  okLabel = "done",
  openLabel = "open",
  weak = false,
}: {
  list: { title: string; href: string; done?: boolean; core?: boolean; pct?: number; due?: string | null }[];
  okLabel?: string;
  openLabel?: string;
  weak?: boolean;
}) {
  if (!list.length) return <p className="pass-meta">None yet.</p>;
  return (
    <div className="pass-list">
      {list.map((item) => {
        const st = weak ? "is-weak" : item.done ? "is-ok" : "is-open";
        const label = weak
          ? `${item.pct}%${item.due ? ` · due ${item.due}` : ""}`
          : item.done
            ? okLabel
            : openLabel;
        return (
          <AppLink key={`${item.href}-${item.title}`} className="pass-row" to={item.href}>
            <span>
              {item.title}
              {item.core ? <span className="pass-meta"> core</span> : null}
            </span>
            <span className={`pass-status ${st}`}>{label}</span>
          </AppLink>
        );
      })}
    </div>
  );
}
