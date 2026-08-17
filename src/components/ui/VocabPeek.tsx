import { useEffect, useState, type ReactNode } from "react";
import { SpeakButton } from "@/components/ui/German";
import { peekSpans, wordLabel } from "@/lib/vocabText";
import type { VocabWord } from "@/types/content";

export function VocabHeadword({
  word,
  open,
  onToggle,
  compact = false,
}: {
  word: VocabWord;
  open: boolean;
  onToggle: () => void;
  compact?: boolean;
}) {
  const label = wordLabel(word);
  return (
    <div className={`vocab-head${compact ? " is-compact" : ""}`}>
      <button
        type="button"
        className={`vocab-word${open ? " is-open" : ""}`}
        aria-expanded={open}
        aria-label={open ? `${label}: ${word.en}` : `${label}. Show English`}
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
      >
        {word.art ? <span className="vocab-art">{word.art}</span> : null}
        <span className="vocab-de" lang="de">
          {word.de}
        </span>
      </button>
      <SpeakButton text={label} />
      {open ? (
        <span className="vocab-meaning" lang="en">
          {word.en}
        </span>
      ) : compact ? null : (
        <p className="vocab-tap-hint">Tap the German if you need English</p>
      )}
      {compact && word.pl ? <span className="vocab-pl">pl. {word.pl}</span> : null}
    </div>
  );
}

export function VocabExample({
  word,
  words,
  peekId,
  onPeek,
  showSentenceEn,
}: {
  word: VocabWord;
  words: VocabWord[];
  peekId: string | null;
  onPeek: (id: string | null) => void;
  showSentenceEn: boolean;
}) {
  if (!word.ex) return null;
  const spans = peekSpans(word.ex, words, word);
  return (
    <div className="vocab-ex-block">
      <p className="vocab-ex" lang="de">
        {spans.map((span, i) => {
          const hit = span.word;
          if (!hit) return <span key={`t-${i}`}>{span.text}</span>;
          return (
            <WordHit
              key={`${hit.id}-${i}`}
              word={hit}
              text={span.text}
              open={peekId === hit.id}
              onToggle={() => onPeek(peekId === hit.id ? null : hit.id)}
            />
          );
        })}
        <SpeakButton text={word.ex} />
      </p>
      {word.exEn && showSentenceEn ? (
        <p className="vocab-ex-en" lang="en">
          {word.exEn}
        </p>
      ) : null}
    </div>
  );
}

function WordHit({
  word,
  text,
  open,
  onToggle,
}: {
  word: VocabWord;
  text: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      className={`vocab-hit${open ? " is-open" : ""}${word.de.toLowerCase() === text.toLowerCase() ? " is-target" : ""}`}
      aria-expanded={open}
      aria-label={open ? `${text}: ${word.en}` : `${text}. Show English`}
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
    >
      {text}
      {open ? (
        <span className="vocab-gloss" lang="en">
          {word.en}
        </span>
      ) : null}
    </button>
  );
}

export function VocabRow({
  word,
  words,
  open,
  onToggle,
}: {
  word: VocabWord;
  words: VocabWord[];
  open: boolean;
  onToggle: () => void;
}) {
  const [peekId, setPeekId] = useState<string | null>(null);
  return (
    <div className={`vocab-row${open ? " is-open" : ""}`}>
      <div className="vocab-row-main">
        <VocabHeadword word={word} open={open} onToggle={onToggle} compact />
        {word.note ? <p className="q-meta">{word.note}</p> : null}
      </div>
      <VocabExample
        word={word}
        words={words}
        peekId={open ? peekId || word.id : peekId}
        onPeek={(id) => {
          setPeekId(id);
          if (id === word.id && !open) onToggle();
        }}
        showSentenceEn={open}
      />
    </div>
  );
}

export function VocabStudyCard({
  word,
  children,
}: {
  word: VocabWord;
  words?: VocabWord[];
  children?: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [word.id]);

  return (
    <div className="card flash vocab-card">
      <VocabHeadword word={word} open={open} onToggle={() => setOpen((v) => !v)} />
      {word.pl ? <p className="sub">plural: {word.pl}</p> : null}
      <VocabExample
        word={word}
        words={[word]}
        peekId={open ? word.id : null}
        onPeek={(id) => setOpen(!!id)}
        showSentenceEn={open}
      />
      {word.note ? <p className="q-meta">{word.note}</p> : null}
      {children}
    </div>
  );
}
