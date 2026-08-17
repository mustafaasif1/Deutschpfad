import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppLink } from "@/components/ui/AppLink";
import { Badge } from "@/components/ui/Progress";
import { PracticeTabs, VocabPackTabs } from "@/components/ui/PracticeTabs";
import { StudyPath } from "@/components/ui/StudyPath";
import { EnhanceRoot } from "@/components/ui/German";
import { VocabRow, VocabStudyCard } from "@/components/ui/VocabPeek";
import { QuizView } from "@/components/quiz/QuizView";
import { useApp } from "@/context/AppContext";
import { vocabByWeek, VOCAB_PATH } from "@/lib/course";
import { makeVocabQuiz, vocabByTopic } from "@/lib/quiz";
import { masteryLine } from "@/lib/mastery";
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
        Learn one word, then quiz by typing <strong>article + word</strong>. Browse is only for lookup. Packs follow the
        8-week {meta.title} plan — {pack.vocab.length} words and phrases.
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

function useVocabPack() {
  const { id = "" } = useParams();
  const { pack, meta } = useApp();
  const topic = pack?.vocabTopics.find((t) => t.id === id);
  const words = pack ? vocabByTopic(pack.vocab, id) : [];
  return { id, pack, meta, topic, words };
}

export function VocabTopicPage() {
  const { id, pack, meta, topic, words } = useVocabPack();
  const [i, setI] = useState(0);
  useDocumentTitle(topic ? `${topic.title} · ${meta?.title || "Deutschpfad"}` : "Vocabulary · Deutschpfad");

  useEffect(() => {
    setI(0);
  }, [id]);

  if (!pack) return null;
  if (!topic) return <p>Topic not found.</p>;
  if (!words.length) return <p>No words in this pack.</p>;

  const w = words[i];
  const last = i === words.length - 1;

  return (
    <EnhanceRoot>
      <VocabPackTabs id={id} />
      <h1>{topic.title}</h1>
      <p className="lead">Hear it. Say article + word. Tap the German only if you need English.</p>
      <div
        id="flash-wrap"
        tabIndex={0}
        onKeyDown={(e) => {
          if ((e.target as HTMLElement).closest("button, a, input")) return;
          if (e.key === "ArrowRight") {
            e.preventDefault();
            setI((n) => (n + 1) % words.length);
          } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            setI((n) => (n - 1 + words.length) % words.length);
          }
        }}
      >
        <VocabStudyCard key={w.id} word={w} />
        <div className="vocab-card-bar">
          <p className="q-meta">
            {i + 1} / {words.length} <Badge level={w.level} />
          </p>
          <div className="btn-row">
            <button type="button" className="btn" onClick={() => setI((n) => (n - 1 + words.length) % words.length)}>
              Previous
            </button>
            {last ? (
              <>
                <button type="button" className="btn" onClick={() => setI(0)}>
                  Again
                </button>
                <AppLink className="btn btn-primary" to={`/vocab/${id}/quiz`}>
                  Quiz
                </AppLink>
              </>
            ) : (
              <button type="button" className="btn btn-primary" onClick={() => setI((n) => n + 1)}>
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </EnhanceRoot>
  );
}

export function VocabBrowsePage() {
  const { id, pack, meta, topic, words } = useVocabPack();
  const [q, setQ] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const [showAllEn, setShowAllEn] = useState(false);
  useDocumentTitle(topic ? `${topic.title} · ${meta?.title || "Deutschpfad"}` : "Vocabulary · Deutschpfad");

  useEffect(() => {
    setQ("");
    setOpenId(null);
    setShowAllEn(false);
  }, [id]);

  if (!pack) return null;
  if (!topic) return <p>Topic not found.</p>;
  if (!words.length) return <p>No words in this pack.</p>;

  const needle = q.toLowerCase().trim();
  const shown = needle
    ? words.filter((w) => `${w.de} ${w.art || ""} ${w.en} ${w.ex || ""}`.toLowerCase().includes(needle))
    : words;

  return (
    <EnhanceRoot>
      <VocabPackTabs id={id} />
      <h1>{topic.title}</h1>
      <p className="lead">Lookup only. Tap a word for English. Study happens on Learn, then Quiz.</p>
      <div className="vocab-list-tools">
        <input
          className="list-filter"
          type="search"
          placeholder="Filter words…"
          autoComplete="off"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Filter words"
        />
        <button type="button" className="btn" onClick={() => setShowAllEn((v) => !v)}>
          {showAllEn ? "Hide English" : "Show English"}
        </button>
      </div>
      {needle && !shown.length ? <p className="filter-empty">No matches for “{q.trim()}”.</p> : null}
      {shown.map((word) => (
        <VocabRow
          key={word.id}
          word={word}
          words={pack.vocab}
          open={showAllEn || openId === word.id}
          onToggle={() => setOpenId((cur) => (cur === word.id ? null : word.id))}
        />
      ))}
    </EnhanceRoot>
  );
}

export function VocabQuizPage() {
  const { id, pack, topic, words } = useVocabPack();
  if (!pack) return null;
  if (!topic) return <p>Topic not found.</p>;
  const n = Math.min(20, Math.max(12, words.length));
  return (
    <>
      <VocabPackTabs id={id} />
      <QuizView
        questions={makeVocabQuiz(words, pack.vocab, n)}
        title="Vocab quiz"
        setId={`vocab-${id}`}
        opts={{ exitPath: `/vocab/${id}`, parentLabel: "Learn" }}
      />
    </>
  );
}
