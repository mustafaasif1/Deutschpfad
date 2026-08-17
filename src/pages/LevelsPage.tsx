import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/Progress";
import { StudyPath } from "@/components/ui/StudyPath";
import { useApp } from "@/context/AppContext";
import { SITE_PATH } from "@/lib/course";
import { LEVEL_META } from "@/lib/levels";
import { progressStore } from "@/state/progress";
import { useDocumentTitle } from "@/hooks/useUi";

export function LevelsPage() {
  const { selectLevel, toast } = useApp();
  const navigate = useNavigate();
  const summaries = progressStore.summaryAll();
  useDocumentTitle("Choose level · Deutschpfad");

  return (
    <>
      <p className="kicker">Deutschpfad</p>
      <h1>Which telc exam are you aiming for?</h1>
      <p className="lead">
        Pick one level and stay there. Each has its own 8-week plan, vocabulary, grammar, exam gym, printable book, and
        saved progress. Start at your true level — A1 if you are new, A2 if you can survive daily life, B1 to pass the
        classic certificate.
      </p>
      <StudyPath title="How the course works" steps={SITE_PATH} />
      <div className="level-picks">
        {LEVEL_META.map((lv) => {
          const sum = summaries.find((s) => s.id === lv.id) || { checks: 0, topics: 0 };
          return (
            <button
              key={lv.id}
              type="button"
              className="level-pick"
              onClick={() => {
                void selectLevel(lv.id).then(() => {
                  toast(`Switched to ${lv.id.toUpperCase()}`);
                  navigate("/");
                });
              }}
            >
              <h3>
                {lv.title} <Badge level={lv.id} />
              </h3>
              <p>
                <strong>{lv.subtitle}</strong>
              </p>
              <p>{lv.blurb}</p>
              <p className="q-meta">
                {sum.topics} topics ticked · {sum.checks} plan ticks
              </p>
            </button>
          );
        })}
      </div>
      <div className="structure-note">
        <p>
          After you pick a level you land on <strong>Today</strong>. That is the daily lesson. The 8-week plan is the
          full curriculum. Practice (grammar and vocab) is the reference shelf — use it when Today sends you there, not
          as a random dump. The book is tables for print; this site is drills and exam shape.
        </p>
      </div>
    </>
  );
}
