import type { Drill, Question, VocabWord } from "@/types/content";

export function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i];
    a[i] = a[j];
    a[j] = t;
  }
  return a;
}

export function norm(s: unknown): string {
  return String(s ?? "")
    .toLowerCase()
    .replace(/ß/g, "ss")
    .replace(/[.,!?;:]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function answersMatch(got: unknown, expected: unknown): boolean {
  const g = norm(got);
  const list = Array.isArray(expected) ? expected : [expected];
  return list.some((e) => g === norm(e));
}

export function bySet(questions: Question[], setId: string): Question[] {
  return questions.filter((q) => q.set === setId);
}

export function forDrill(questions: Question[], drill: Drill): Question[] {
  if (drill.sets) {
    return drill.sets.reduce<Question[]>((acc, s) => acc.concat(bySet(questions, s)), []);
  }
  return bySet(questions, drill.set || drill.id);
}

export function vocabByTopic(vocab: VocabWord[], topic: string): VocabWord[] {
  return vocab.filter((w) => w.topic === topic);
}

export function makeVocabQuiz(words: VocabWord[], allVocab: VocabWord[], n?: number): Question[] {
  const pool = words.length >= 4 ? words : allVocab;
  const pick = shuffle(pool).slice(0, Math.min(n || 12, pool.length));
  const warmup = pick.length >= 8 ? 2 : pick.length >= 5 ? 1 : 0;
  return pick.map((w, i) => {
    const arts = String(w.art || "")
      .split("/")
      .map((a) => a.trim())
      .filter((a) => /^(der|die|das)$/i.test(a));
    const hasArt = arts.length > 0;
    const typedAnswers = hasArt ? arts.map((a) => `${a} ${w.de}`) : [w.de];
    const label = typedAnswers[0] || w.de;
    const explain = `German: ${label}${w.pl ? ` · plural: ${w.pl}` : ""} — English: ${w.en}${w.ex ? ` · e.g. ${w.ex}` : ""}`;
    if (i < warmup) {
      const distract = shuffle(pool.filter((x) => x.id !== w.id)).slice(0, 3);
      return {
        id: `vq-${w.id}-${i}`,
        set: `vocab-${w.topic}`,
        type: "mcq",
        prompt: `What does “${label}” mean?`,
        options: shuffle([w.en, ...distract.map((d) => d.en)]),
        answer: w.en,
        explain,
        level: w.level,
        vocabId: w.id,
      };
    }
    return {
      id: `vq-${w.id}-${i}`,
      set: `vocab-${w.topic}`,
      type: "type",
      prompt: hasArt ? `Type the German with article for: “${w.en}”` : `Type the German for: “${w.en}”`,
      answer: typedAnswers,
      explain,
      level: w.level,
      vocabId: w.id,
    };
  });
}

export function checkAnswer(q: Question, value: unknown): boolean {
  if (q.type === "tf") return Boolean(value) === Boolean(q.answer);
  if (q.type === "mcq") return value === q.answer;
  if (q.type === "order") return norm(value) === norm(q.answer);
  return answersMatch(value, q.answer);
}

export function answerLabel(q: Question): string {
  if (q.type === "tf") return q.answer ? "True / Richtig" : "False / Falsch";
  if (Array.isArray(q.answer)) return String(q.answer[0]);
  return String(q.answer);
}
