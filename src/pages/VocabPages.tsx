import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppLink } from "@/components/ui/AppLink";
import { Badge } from "@/components/ui/Progress";
import { PracticeTabs } from "@/components/ui/PracticeTabs";
import { StudyPath } from "@/components/ui/StudyPath";
import { EnhanceRoot, SpeakButton } from "@/components/ui/German";
import { QuizView } from "@/components/quiz/QuizView";
import { useApp } from "@/context/AppContext";
import { vocabByWeek, VOCAB_PATH } from "@/lib/course";
import { progressStore } from "@/state/progress";
import { makeVocabQuiz, vocabByTopic } from "@/lib/quiz";
import { masteryLine } from "@/lib/mastery";
import { reviewVocab } from "@/state/session";
import { useDocumentTitle } from "@/hooks/useUi";
import type { VocabTopic } from "@/types/content";

export function VocabListPage() {
  const { pack, meta, progress } = useApp();
  const [q, setQ] = useState("");
  useDocumentTitle(meta ? `Vocabulary · ${meta.title}` : "Vocabulary · Deutschpfad");
  if (!pack || !meta) return null;
  const levelPack = pack;
  const { groups, extra } = vocabByWeek(levelPack);
  const needle = q.toLowerCase().trim();

  function card(t: VocabTopic) {
    const n = vocabByTopic(levelPack.vocab, t.id).length;
    return (
      <AppLink className="card clickable filter-item" to={`/vocab/${t.id}`}>
        <h3>{t.title}</h3>
        <p>
          {t.blurb} · {n} words · {masteryLine(progress, `vocab-${t.id}`)}
        </p>
      </AppLink>
    );
  }

  const filteredGroups = needle
    ? groups
        .map((group) => ({
          ...group,
          topics: group.topics.filter((t) => `${t.title} ${t.blurb || ""}`.toLowerCase().includes(needle)),
        }))
        .filter((group) => group.topics.length)
    : groups;
  const filteredExtra = needle
    ? extra.filter((t) => `${t.title} ${t.blurb || ""}`.toLowerCase().includes(needle))
    : extra;
  const empty = needle && !filteredGroups.length && !filteredExtra.length;

  return (
    <>
      <PracticeTabs />
      <h1>Vocabulary trainer</h1>
      <p className="lead">
        Packs follow the 8-week plan. Always learn <strong>article + word</strong>. Tap the speaker. This list is built
        around official telc {meta.title} topic areas — {pack.vocab.length} words and phrases. Do not skip to another
        level.
      </p>
      <StudyPath title="How to learn a vocab pack" steps={VOCAB_PATH} />
      <label className="filter-label" htmlFor="list-filter">
        Filter
      </label>
      <div className="filter-row">
        <input
          className="list-filter"
          id="list-filter"
          type="search"
          placeholder="Filter packs…"
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
            {group.topics.map((t) => (
              <span key={t.id} className="filter-item-wrap">
                {card(t)}
              </span>
            ))}
          </div>
        </section>
      ))}
      {filteredExtra.length ? (
        <section className="week-band">
          <h2>Extra packs</h2>
          <p>Use these when a topic still feels thin after the week’s list.</p>
          <div className="grid grid-2">
            {filteredExtra.map((t) => (
              <span key={t.id} className="filter-item-wrap">
                {card(t)}
              </span>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}

export function VocabTopicPage() {
  const { id = "" } = useParams();
  const { pack, meta } = useApp();
  const topic = pack?.vocabTopics.find((t) => t.id === id);
  const words = pack ? vocabByTopic(pack.vocab, id) : [];
  const [i, setI] = useState(0);
  const [front, setFront] = useState(true);
  useDocumentTitle(topic ? `${topic.title} · ${meta?.title || "Deutschpfad"}` : "Vocabulary · Deutschpfad");

  useEffect(() => {
    setI(0);
    setFront(true);
  }, [id]);

  if (!pack) return null;
  if (!topic) return <p>Topic not found.</p>;
  if (!words.length) return <p>No words in this pack.</p>;

  const w = words[i];
  const label = `${w.art ? `${w.art} ` : ""}${w.de}`;

  function goNext() {
    progressStore.markVocab(words[i].id);
    const last = i === words.length - 1;
    if (last) reviewVocab(progressStore, id);
    setI((i + 1) % words.length);
    setFront(true);
  }

  function goPrev() {
    setI((i - 1 + words.length) % words.length);
    setFront(true);
  }

  return (
    <EnhanceRoot>
      <h1>{topic.title}</h1>
      <p className="lead">
        Flip the card (tap, Space, or Enter). Hear the German first. Learn article + noun as one chunk. Then type the
        quiz to 80% — do not stop at flipping.
      </p>
      <div
        id="flash-wrap"
        onKeyDown={(e) => {
          if ((e.target as HTMLElement).closest(".speak-btn")) return;
          if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            setFront((f) => !f);
          } else if (e.key === "ArrowRight") {
            e.preventDefault();
            goNext();
          } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            goPrev();
          }
        }}
      >
        <div
          className="card flash"
          role="button"
          tabIndex={0}
          aria-label="Flip card"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest(".speak-btn")) return;
            setFront((f) => !f);
          }}
        >
          {front ? (
            <>
              <div className="flash-head">
                <div className="big de">
                  {label}
                  <SpeakButton text={label} />
                </div>
              </div>
              <div className="sub">
                Tap card for English · tap speaker to hear it
                {w.pl ? ` · plural: ${w.pl}` : ""}
              </div>
              {w.ex ? <p className="vocab-ex de">{w.ex}</p> : null}
              {w.note ? <p className="q-meta">{w.note}</p> : null}
            </>
          ) : (
            <div>
              <div className="big">{w.en}</div>
              <div className="sub">
                <span className="de">{label}</span>
                {w.pl ? ` · ${w.pl}` : ""}
              </div>
              {w.ex ? <p className="vocab-ex de">{w.ex}</p> : null}
              {w.note ? <p className="q-meta">{w.note}</p> : null}
            </div>
          )}
        </div>
        <p className="q-meta">
          {i + 1} / {words.length} <Badge level={w.level} />
        </p>
      </div>
      <div className="btn-row">
        <button type="button" className="btn" onClick={goPrev}>
          Previous
        </button>
        <button type="button" className="btn" onClick={goNext}>
          Next
        </button>
        <AppLink className="btn btn-primary" to={`/vocab/${id}/quiz`}>
          Quiz {Math.min(20, words.length)}
        </AppLink>
        <AppLink className="btn" to="/vocab">
          All packs
        </AppLink>
      </div>
      <details className="word-list">
        <summary>All words in this topic</summary>
        <p className="lead">Speaker beside each German word. Learn article + noun as one chunk.</p>
        {words.map((word) => {
          const lab = `${word.art ? `${word.art} ` : ""}${word.de}`;
          return (
            <div className="vocab-row" key={word.id}>
              <span className="de">
                {lab}
                <SpeakButton text={lab} />
              </span>
              <span className="vocab-en">
                {word.en}
                {word.pl ? ` · ${word.pl}` : ""}
                {word.ex ? (
                  <>
                    <br />
                    <em className="de">{word.ex}</em>
                  </>
                ) : null}
              </span>
            </div>
          );
        })}
      </details>
    </EnhanceRoot>
  );
}

export function VocabQuizPage() {
  const { id = "" } = useParams();
  const { pack } = useApp();
  if (!pack) return null;
  const words = vocabByTopic(pack.vocab, id);
  return (
    <QuizView
      questions={makeVocabQuiz(words, pack.vocab, Math.min(20, Math.max(12, words.length)))}
      title="Vocab quiz"
      setId={`vocab-${id}`}
      opts={{ exitPath: `/vocab/${id}`, parentLabel: "Vocabulary" }}
    />
  );
}
