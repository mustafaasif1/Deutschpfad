import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppLink } from "@/components/ui/AppLink";
import { FilteredGrid } from "@/components/ui/FilterBar";
import { FormatCard } from "@/components/ui/FormatCard";
import { PracticeTabs } from "@/components/ui/PracticeTabs";
import { StudyPath } from "@/components/ui/StudyPath";
import { EnhanceRoot, LessonHtml } from "@/components/ui/German";
import { QuizView } from "@/components/quiz/QuizView";
import { useApp } from "@/context/AppContext";
import { TOPIC_PATH } from "@/lib/course";
import { progressStore } from "@/state/progress";
import { shuffle } from "@/lib/quiz";
import { produceReady } from "@/state/session";
import { useDocumentTitle } from "@/hooks/useUi";
import type { Question } from "@/types/content";

export function TopicsListPage() {
  const { pack, meta, progress } = useApp();
  useDocumentTitle(meta ? `Topics · ${meta.title}` : "Topics · Deutschpfad");
  if (!pack || !meta) return null;
  return (
    <>
      <PracticeTabs />
      <h1>Official {meta.title} topics</h1>
      <p className="lead">
        These are the themes telc actually asks. Work them in plan order: read the lesson, unlock grammar and vocab,
        say the chunks, quiz to 80%, then produce without English notes. Mark a topic done only when you can do that.
      </p>
      <StudyPath title="How to finish a topic" steps={TOPIC_PATH} />
      <FormatCard format={pack.examFormat} />
      <FilteredGrid
        placeholder="Filter topics…"
        items={pack.topics.map((t) => {
          const done = !!progress.done[`topic-${t.id}`];
          const core = t.weight === "exam-core" || t.weight === "always";
          return {
            key: t.id,
            filter: `${t.titleDe || ""} ${t.title || ""} ${t.blurb || ""}`,
            node: (
              <AppLink className="card clickable filter-item" to={`/topics/${t.id}`}>
                <p className="kicker">
                  <span className={`weight-pill${core ? " is-core" : ""}`}>{t.weight || "topic"}</span>
                  {done ? " · done" : ""}
                </p>
                <h3>{t.titleDe}</h3>
                <p>
                  {t.title} — {t.blurb}
                </p>
              </AppLink>
            ),
          };
        })}
      />
    </>
  );
}

export function TopicPage() {
  const { id = "" } = useParams();
  const { pack, meta, toast, progress } = useApp();
  const navigate = useNavigate();
  const t = pack?.topics.find((x) => x.id === id);
  useDocumentTitle(t ? `${t.titleDe} · ${meta?.title || "Deutschpfad"}` : "Topic · Deutschpfad");
  if (!pack || !meta) return null;
  if (!t) {
    return (
      <p>
        Topic not found. <AppLink to="/topics">All topics</AppLink>
      </p>
    );
  }
  const gById = Object.fromEntries(pack.grammar.map((g) => [g.id, g]));
  const vById = Object.fromEntries(pack.vocabTopics.map((v) => [v.id, v]));
  const writeById = Object.fromEntries((pack.exam.schreiben || []).map((w) => [w.id, w]));
  const quizOk = produceReady(pack, progress, t.id);
  const hasChunks = !!(t.chunks && t.chunks.length);
  const done = !!progress.done[`topic-${t.id}`];

  return (
    <EnhanceRoot>
      <p className="kicker">
        {t.weight || "topic"}
        {t.official ? " · official inventory" : ""}
      </p>
      <h1>{t.titleDe}</h1>
      <p className="lead">{t.blurb}</p>
      <StudyPath title="Do this topic in order" steps={TOPIC_PATH} />
      {t.exam ? (
        <p>
          <strong>In the exam:</strong> {t.exam}
        </p>
      ) : null}
      {t.explain ? <LessonHtml className="lesson topic-explain" html={t.explain} /> : null}
      {t.canDo?.length ? (
        <>
          <h2>GER / telc can-do (this topic)</h2>
          <ul>
            {t.canDo.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </>
      ) : null}
      {t.examHow?.length ? (
        <>
          <h2>How it appears in telc {meta.title}</h2>
          <ul>
            {t.examHow.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </>
      ) : null}
      {t.subtopics?.length ? (
        <>
          <h2>Cover these subtopics</h2>
          <ul>
            {t.subtopics.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </>
      ) : null}
      {t.youMust?.length ? (
        <>
          <h2>You must be able to</h2>
          <ul>
            {t.youMust.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </>
      ) : null}
      {t.traps?.length ? (
        <div className="warn" style={{ margin: "1rem 0" }}>
          <span className="label-s">Exam traps</span>
          <ul>
            {t.traps.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {t.vocab?.length ? (
        <>
          <h2>Vocabulary</h2>
          <p className="lead">Learn article + word here, then return and say the chunks.</p>
          <div className="grid grid-2">
            {t.vocab.map((vid) => {
              const v = vById[vid];
              return (
                <AppLink key={vid} className="card clickable" to={`/vocab/${vid}`}>
                  <h3>{v ? v.title : vid}</h3>
                  <p>{v ? v.blurb : "Vocabulary"}</p>
                </AppLink>
              );
            })}
          </div>
        </>
      ) : null}
      {t.grammar?.length ? (
        <>
          <h2>Grammar that unlocks this topic</h2>
          <p className="lead">Open these if a pattern in the lesson is new. Then come back and say the chunks.</p>
          <div className="grid grid-2">
            {t.grammar.map((gid) => {
              const g = gById[gid];
              if (!g) return null;
              return (
                <AppLink key={gid} className="card clickable" to={`/grammar/${gid}`}>
                  <h3>{g.title}</h3>
                  <p>Lesson + quiz</p>
                </AppLink>
              );
            })}
          </div>
        </>
      ) : null}
      {hasChunks ? (
        <>
          <h2>Say these without looking</h2>
          <p className="lead">
            Cover the English. Speak the German as one chunk. Then quiz to 80% — that unlocks “mark done”.
          </p>
          {t.chunks!.map((c) => (
            <div className="chunk-row" key={c.de}>
              <div className="de">{c.de}</div>
              <div className="en-hint">{c.en || ""}</div>
            </div>
          ))}
          <div className="btn-row" style={{ marginTop: "1rem" }}>
            <AppLink className="btn btn-primary" to={`/topics/${t.id}/quiz`}>
              Quiz these chunks
            </AppLink>
            {t.sprechen ? (
              <AppLink className="btn" to="/exam/sprechen/run">
                Oral run
              </AppLink>
            ) : null}
          </div>
        </>
      ) : t.sprechen ? (
        <div className="btn-row">
          <AppLink className="btn" to="/exam/sprechen/run">
            Oral run
          </AppLink>
        </div>
      ) : null}
      {t.schreiben?.length ? (
        <>
          <h2>Write it</h2>
          <div className="grid grid-2">
            {t.schreiben.map((wid) => {
              const w = writeById[wid];
              return (
                <AppLink key={wid} className="card clickable" to={`/schreiben/${wid}`}>
                  <h3>{w ? w.title : wid}</h3>
                  <p>{w ? `${w.register} · ${w.situationEn || "letter"}` : "Writing task"}</p>
                </AppLink>
              );
            })}
          </div>
        </>
      ) : null}
      {t.lesen?.length ? (
        <>
          <h2>Read it</h2>
          <div className="grid grid-2">
            {t.lesen.map((lid) => (
              <AppLink key={lid} className="card clickable" to={`/exam/lesen/${lid}`}>
                <h3>Lesen {lid}</h3>
                <p>Paper in exam shape</p>
              </AppLink>
            ))}
          </div>
        </>
      ) : null}
      <div className="card" style={{ marginTop: "1.2rem" }}>
        <label className="week-item topic-tick">
          <input
            className="check"
            type="checkbox"
            checked={done}
            disabled={hasChunks && !quizOk && !done}
            onChange={(e) => {
              if (hasChunks && e.target.checked && !produceReady(pack, progress, t.id)) {
                toast("Quiz the chunks to 80% first.");
                navigate(`/topics/${t.id}/quiz`);
                return;
              }
              const on = e.target.checked;
              progressStore.setDone(`topic-${t.id}`, on);
              toast(on ? "Topic ticked. Today’s Speak step uses this same box." : "Unchecked.");
            }}
          />
          <div>
            Mark as done — I can say and write this topic without English notes.
            {hasChunks && !quizOk ? <span className="session-blurb"> Quiz the chunks to 80% first.</span> : null}
          </div>
        </label>
        <div className="btn-row">
          <AppLink className="btn" to="/topics">
            All topics
          </AppLink>
        </div>
      </div>
    </EnhanceRoot>
  );
}

export function TopicQuizPage() {
  const { id = "" } = useParams();
  const { pack, levelId } = useApp();
  const t = pack?.topics.find((x) => x.id === id);
  const qs: Question[] = useMemo(() => {
    if (!t?.chunks?.length) return [];
    return shuffle(
      t.chunks.map((c, i) => {
      const others = t.chunks!.filter((x) => x.de !== c.de);
      const opts = shuffle([c.de, ...shuffle(others).slice(0, 2).map((x) => x.de)]);
      return {
        id: `chunk-${id}-${i}`,
        set: `topic-${id}`,
        type: "mcq",
        prompt: c.en || "Choose the German sentence.",
        options: opts,
        answer: c.de,
        explain: c.en
          ? `English: ${c.en}. This is a ready-made exam chunk. Learn the whole German sentence — “${c.de}” — not word by word.`
          : `Say the whole German sentence as one chunk: “${c.de}”. Do not rebuild it from English in the oral.`,
        level: levelId || undefined,
      };
    }),
    );
  }, [t, id, levelId]);
  if (!pack) return null;
  if (!t?.chunks?.length) {
    return (
      <p>
        No chunks to quiz. <AppLink to={`/topics/${id}`}>Back</AppLink>
      </p>
    );
  }
  return (
    <QuizView
      questions={qs}
      title={`${t.titleDe || t.title} — chunks`}
      setId={`topic-${id}`}
      opts={{ exitPath: `/topics/${id}`, parentLabel: t.titleDe || t.title }}
    />
  );
}
