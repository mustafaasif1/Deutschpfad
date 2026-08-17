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

type Needle = {
  word: VocabWord;
  needle: string;
  len: number;
};

function needlesFor(word: VocabWord): string[] {
  const needles = [word.de];
  const lemma = lemmaOf(word);
  if (lemma && lemma.toLowerCase() !== word.de.toLowerCase()) needles.push(lemma);
  return needles.filter((n) => n.length >= 3).sort((a, b) => b.length - a.length);
}

function addNeedles(byFirst: Map<string, Needle[]>, word: VocabWord, seen: Set<string>) {
  if (!word?.de || seen.has(word.id)) return;
  seen.add(word.id);
  for (const needle of needlesFor(word)) {
    const key = needle[0].toLowerCase();
    const list = byFirst.get(key) || [];
    list.push({ word, needle: needle.toLowerCase(), len: needle.length });
    byFirst.set(key, list);
  }
}

function buildBuckets(words: VocabWord[], prefer?: VocabWord | null): Map<string, Needle[]> {
  const seen = new Set<string>();
  const byFirst = new Map<string, Needle[]>();
  if (prefer) addNeedles(byFirst, prefer, seen);
  for (const word of words) {
    if (word.id === prefer?.id) continue;
    if (lemmaOf(word).length < 5) continue;
    addNeedles(byFirst, word, seen);
  }
  for (const list of byFirst.values()) {
    list.sort((a, b) => b.len - a.len);
  }
  return byFirst;
}

export function peekSpans(ex: string, words: VocabWord[], prefer?: VocabWord | null): PeekSpan[] {
  const sentence = String(ex || "");
  if (!sentence) return [];
  const lower = sentence.toLowerCase();
  const byFirst = buildBuckets(words, prefer);
  const spans: PeekSpan[] = [];
  let i = 0;
  while (i < sentence.length) {
    const bucket = byFirst.get(lower[i]);
    let hit: Needle | null = null;
    if (bucket) {
      for (const entry of bucket) {
        if (lower.slice(i, i + entry.len) !== entry.needle) continue;
        if (!isBoundary(sentence, i, i + entry.len)) continue;
        hit = entry;
        break;
      }
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
