import type { VocabWord } from "@/types/content";

export function wordLabel(word: Pick<VocabWord, "art" | "de">): string {
  return `${word.art ? `${word.art} ` : ""}${word.de}`.trim();
}

export function lemmaOf(word: Pick<VocabWord, "de">): string {
  return String(word.de || "").replace(/^sich\s+/i, "").trim();
}

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function isBoundary(ex: string, start: number, end: number): boolean {
  const left = start === 0 || /[\s,.;:!?„“”"»«(/-]/.test(ex[start - 1] || "");
  const right = end >= ex.length || /[\s,.;:!?„“”"»«)/-]/.test(ex[end] || "");
  return left && right;
}

export type PeekSpan = {
  text: string;
  word?: VocabWord;
};

export function peekSpans(ex: string, words: VocabWord[], prefer?: VocabWord | null): PeekSpan[] {
  const sentence = String(ex || "");
  if (!sentence) return [];
  const seen = new Set<string>();
  const dict: { word: VocabWord; needles: string[] }[] = [];

  const add = (word: VocabWord) => {
    if (!word?.de || seen.has(word.id)) return;
    seen.add(word.id);
    const needles = [word.de];
    const lemma = lemmaOf(word);
    if (lemma && lemma.toLowerCase() !== word.de.toLowerCase()) needles.push(lemma);
    const usable = needles.filter((n) => n.length >= 3).sort((a, b) => b.length - a.length);
    if (!usable.length) return;
    dict.push({ word, needles: usable });
  };

  if (prefer) add(prefer);
  for (const word of words) {
    if (word.id === prefer?.id) continue;
    const lemma = lemmaOf(word);
    if (lemma.length < 5 && word.id !== prefer?.id) continue;
    add(word);
  }
  dict.sort((a, b) => Math.max(...b.needles.map((n) => n.length)) - Math.max(...a.needles.map((n) => n.length)));

  const spans: PeekSpan[] = [];
  let i = 0;
  while (i < sentence.length) {
    let hit: { len: number; word: VocabWord } | null = null;
    for (const entry of dict) {
      for (const needle of entry.needles) {
        const slice = sentence.slice(i, i + needle.length);
        if (slice.length !== needle.length) continue;
        if (slice.toLowerCase() !== needle.toLowerCase()) continue;
        if (!isBoundary(sentence, i, i + needle.length)) continue;
        hit = { len: needle.length, word: entry.word };
        break;
      }
      if (hit) break;
    }
    if (hit) {
      spans.push({ text: sentence.slice(i, i + hit.len), word: hit.word });
      i += hit.len;
      continue;
    }
    const last = spans[spans.length - 1];
    if (last && !last.word) last.text += sentence[i];
    else spans.push({ text: sentence[i] });
    i += 1;
  }
  return spans;
}

export function exampleHasLemma(ex: string, word: Pick<VocabWord, "de">): boolean {
  const sentence = String(ex || "");
  const needles = [word.de, lemmaOf(word)].filter(Boolean);
  return needles.some((needle) => new RegExp(escapeRe(needle), "i").test(sentence));
}
