import { useState } from "react";
import { useParams } from "react-router-dom";
import { AppLink } from "@/components/ui/AppLink";
import { Badge } from "@/components/ui/Progress";
import { PracticeTabs } from "@/components/ui/PracticeTabs";
import { StudyPath } from "@/components/ui/StudyPath";
import { LessonHtml } from "@/components/ui/German";
import { QuizView } from "@/components/quiz/QuizView";
import { useApp } from "@/context/AppContext";
import { grammarByWeek, LESSON_PATH, nextGrammar, weekOfGrammar } from "@/lib/course";
import { bySet, forDrill, shuffle } from "@/lib/quiz";
import { masteryLine } from "@/lib/mastery";
import { GRAMMAR_COVERAGE } from "@/lib/exam";
import { useDocumentTitle } from "@/hooks/useUi";
import type { GrammarLesson } from "@/types/content";

export function GrammarListPage() {
  const { pack, meta, progress } = useApp();
  const [q, setQ] = useState("");
  useDocumentTitle(meta ? `Practice · ${meta.title}` : "Practice · Deutschpfad");
  if (!pack || !meta) return null;
  const levelPack = pack;
  const coverage = GRAMMAR_COVERAGE[meta.id];
  const { groups, extra } = grammarByWeek(levelPack);
  const needle = q.toLowerCase().trim();

  function lessonCard(g: GrammarLesson) {
    const n = bySet(levelPack.questions, g.id).length;
    const setId = `g-${g.id}`;
    const week = weekOfGrammar(levelPack, g.id);
    return (
      <AppLink className="card clickable filter-item" to={`/grammar/${g.id}`}>
        <h3>
          {g.title} <Badge level={g.level} />
        </h3>
        <p>
          {week ? `Week ${week.id} · ` : ""}
          {g.minutes} min{n ? ` · ${n} quiz items` : ""} · {masteryLine(progress, setId)}
        </p>
      </AppLink>
    );
  }

  const filteredGroups = needle
    ? groups
        .map((group) => ({
          ...group,
          lessons: group.lessons.filter((g) => g.title.toLowerCase().includes(needle)),
        }))
        .filter((group) => group.lessons.length)
    : groups;
  const filteredExtra = needle ? extra.filter((g) => g.title.toLowerCase().includes(needle)) : extra;
  const empty = needle && !filteredGroups.length && !filteredExtra.length;

  return (
    <>
      <PracticeTabs />
      <h1>Grammar academy</h1>
      <p className="lead">
        Lessons follow the 8-week plan, not a dump of every table. Read the whole lesson, say every German example, then
        quiz to 80%. This is {meta.title} grammar only — stay on this level.
      </p>
      <StudyPath title="How to study a grammar lesson" steps={LESSON_PATH} />
      {coverage ? (
        <div className="card" style={{ marginBottom: "1rem" }}>
          <p className="kicker">{coverage.kicker}</p>
          <p>{coverage.text}</p>
        </div>
      ) : null}
      <label className="filter-label" htmlFor="list-filter">
        Filter
      </label>
      <div className="filter-row">
        <input
          className="list-filter"
          id="list-filter"
          type="search"
          placeholder="Filter lessons…"
          autoComplete="off"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button type="button" className="btn" onClick={() => setQ("")}>
          Clear
        </button>
      </div>
      {empty ? <p className="filter-empty">No matches for “{q.trim()}”.</p> : null}
      {filteredGroups.map((group) => (
        <section key={group.week.id} className="week-band">
          <h2>
            Week {group.week.id} · {group.week.title}
          </h2>
          <p>{group.week.goal}</p>
          <div className="grid grid-2">
            {group.lessons.map((g) => (
              <span key={g.id} className="filter-item-wrap">
                {lessonCard(g)}
              </span>
            ))}
          </div>
        </section>
      ))}
      {filteredExtra.length ? (
        <section className="week-band">
          <h2>Extra drills for this level</h2>
          <p>Not on the 8-week spine — use them when a quiz keeps missing the same pattern.</p>
          <div className="grid grid-2">
            {filteredExtra.map((g) => (
              <span key={g.id} className="filter-item-wrap">
                {lessonCard(g)}
              </span>
            ))}
          </div>
        </section>
      ) : null}
      <h2>Mixed drills</h2>
      <p className="lead">After the week’s lessons, mix the endings so the exam cannot surprise you.</p>
      <div className="grid grid-2">
        {pack.drills.map((d) => (
          <AppLink key={d.id} className="card clickable filter-item" to={`/drill/${d.id}`}>
            <h3>{d.title}</h3>
            <p>
              {d.blurb} · {masteryLine(progress, `drill-${d.id}`)}
            </p>
          </AppLink>
        ))}
      </div>
    </>
  );
}

export function GrammarLessonPage() {
  const { id = "" } = useParams();
  const { pack, meta } = useApp();
  const g = pack?.grammar.find((x) => x.id === id);
  const next = pack && g ? nextGrammar(pack, g.id) : null;
  const week = pack && g ? weekOfGrammar(pack, g.id) : null;
  useDocumentTitle(g ? `${g.title} · ${meta?.title || "Deutschpfad"}` : "Lesson · Deutschpfad");
  if (!pack || !meta) return null;
  if (!g) {
    return (
      <p>
        Lesson not found. <AppLink to="/grammar">All lessons</AppLink>
      </p>
    );
  }
  const n = bySet(pack.questions, g.id).length;
  return (
    <>
      <p className="kicker">
        Grammar · {g.level.toUpperCase()}
        {week ? ` · week ${week.id}` : ""} · ~{g.minutes} min
      </p>
      <h1>{g.title}</h1>
      <p className="lead">
        Read the whole lesson before the quiz. Say every <span className="de">German</span> example aloud. 80% is the bar
        because the oral will not wait while you reconstruct a table.
      </p>
      <StudyPath title="Do this lesson in order" steps={LESSON_PATH} />
      <LessonHtml className="lesson" html={g.html} />
      <div className="lesson-follow">
        <h2>Next</h2>
        <p>
          Quiz this topic to 80%, then continue the week — do not open a random other lesson.
          {week ? (
            <>
              {" "}
              This belongs to <AppLink to="/plan">week {week.id}: {week.title}</AppLink>.
            </>
          ) : null}
        </p>
        <div className="btn-row">
          {n ? (
            <AppLink className="btn btn-primary" to={`/grammar/${id}/quiz`}>
              Quiz this topic ({n})
            </AppLink>
          ) : null}
          {next ? (
            <AppLink className="btn" to={`/grammar/${next.id}`}>
              Next lesson: {next.title}
            </AppLink>
          ) : (
            <AppLink className="btn" to="/plan">
              Back to this week’s plan
            </AppLink>
          )}
          <AppLink className="btn" to="/grammar">
            All lessons
          </AppLink>
        </div>
      </div>
    </>
  );
}

export function GrammarQuizPage() {
  const { id = "" } = useParams();
  const { pack } = useApp();
  const g = pack?.grammar.find((x) => x.id === id);
  if (!pack) return null;
  if (!g) return <p>Lesson not found.</p>;
  return (
    <QuizView
      questions={shuffle(bySet(pack.questions, id))}
      title={`${g.title} quiz`}
      setId={`g-${id}`}
      opts={{ exitPath: `/grammar/${id}`, parentLabel: g.title }}
    />
  );
}

export function DrillPage() {
  const { id = "" } = useParams();
  const { pack } = useApp();
  const d = pack?.drills.find((x) => x.id === id);
  if (!pack) return null;
  if (!d) return <p>Drill not found.</p>;
  return (
    <QuizView
      questions={shuffle(forDrill(pack.questions, d))}
      title={d.title}
      setId={`drill-${id}`}
      opts={{ exitPath: "/grammar", parentLabel: "Practice" }}
    />
  );
}
