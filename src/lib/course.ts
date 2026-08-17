import type { GrammarLesson, LevelPack, VocabTopic, Week, WeekTask } from "@/types/content";
import { toPath } from "@/lib/href";
import type { LevelState } from "@/state/progress";

export type CourseKind = "grammar" | "vocab" | "topic" | "drill" | "exam" | "other";

export type CourseRef = {
  kind: CourseKind;
  id: string;
  href: string;
};

export const SITE_PATH = [
  {
    title: "Today is the lesson",
    body: "Open Today and do the four steps in order. That is one sitting (~45–60 minutes). Do not hop between Grammar, Topics, and Exam.",
  },
  {
    title: "Read, then say, then quiz",
    body: "Every lesson has a teaching page. Read it slowly. Say every German example aloud. Only then take the quiz — 80% is the bar, not 60%.",
  },
  {
    title: "Produce without English notes",
    body: "Topics are the exam. After the chunks quiz hits 80%, say the sentences from memory and mark the topic done.",
  },
  {
    title: "Exam gym last",
    body: "Hören, Lesen, Schreiben, and Sprechen train the booklet. Sit them after this week’s topic, not instead of it. Official telc audio still matters for Hören.",
  },
] as const;

export const LESSON_PATH = [
  { title: "Read once without rushing", body: "Tables, traps, and the produce list are the lesson. Skimming the quiz first is why it feels too fast." },
  { title: "Say every German example", body: "Tap the speaker or read aloud. The exam is spoken and written — silent reading is not enough." },
  { title: "Quiz to 80%", body: "Read the explanation on every item, especially the ones you got right by guessing." },
  { title: "Next item in this week’s plan", body: "Stay on this week’s theme. The eight-week plan is the course; Practice is the reference shelf." },
] as const;

export const VOCAB_PATH = [
  { title: "Learn one word", body: "Stay on Learn. Hear it, say article + word, tap English only if you are stuck." },
  { title: "Then quiz by typing", body: "The check is producing German with the article, not picking an English meaning." },
  { title: "Browse is a dictionary", body: "Use Browse to look a word up. It is not the study session." },
  { title: "80% before you leave", body: "Weak vocab fails Hören numbers and Schreiben forms. Do not skip the quiz." },
] as const;

export const TOPIC_PATH = [
  { title: "Read how this topic appears in telc", body: "Can-do lines, exam traps, and the teaching notes come first. Chunks are the last step, not the first." },
  { title: "Unlock it with grammar and vocab", body: "Open the linked lessons if a pattern is new. Then come back here." },
  { title: "Say the chunks, then quiz them", body: "Cover the English. Speak the German. Quiz until 80%." },
  { title: "Produce, then tick done", body: "Write or say the same facts without looking. Only then mark the topic done." },
] as const;

export function parseCourseHref(href: string): CourseRef {
  const path = toPath(href).replace(/\/+$/, "") || "/";
  const parts = path.split("/").filter(Boolean);
  const a = parts[0] || "";
  const b = parts[1] || "";
  if (a === "grammar" && b) return { kind: "grammar", id: b, href: `/grammar/${b}` };
  if (a === "vocab" && b) return { kind: "vocab", id: b, href: `/vocab/${b}` };
  if (a === "topics" && b) return { kind: "topic", id: b, href: `/topics/${b}` };
  if (a === "drill" && b) return { kind: "drill", id: b, href: `/drill/${b}` };
  if (a === "exam" || a === "schreiben") return { kind: "exam", id: path, href: path };
  return { kind: "other", id: path, href: path };
}

function orderedIds(pack: LevelPack, kind: "grammar" | "vocab" | "topic"): string[] {
  const seen = new Set<string>();
  const ids: string[] = [];
  for (const week of pack.weeks || []) {
    for (const task of week.tasks || []) {
      const ref = parseCourseHref(task.href);
      if (ref.kind === kind && !seen.has(ref.id)) {
        seen.add(ref.id);
        ids.push(ref.id);
      }
    }
  }
  return ids;
}

export function grammarCourseIds(pack: LevelPack): string[] {
  return orderedIds(pack, "grammar");
}

export function weekOfGrammar(pack: LevelPack, grammarId: string): Week | null {
  for (const week of pack.weeks || []) {
    for (const task of week.tasks || []) {
      const ref = parseCourseHref(task.href);
      if (ref.kind === "grammar" && ref.id === grammarId) return week;
    }
  }
  return null;
}

export function grammarByWeek(pack: LevelPack): {
  groups: { week: Week; lessons: GrammarLesson[] }[];
  extra: GrammarLesson[];
} {
  const byId = new Map(pack.grammar.map((g) => [g.id, g]));
  const used = new Set<string>();
  const groups: { week: Week; lessons: GrammarLesson[] }[] = [];
  for (const week of pack.weeks || []) {
    const lessons: GrammarLesson[] = [];
    for (const task of week.tasks || []) {
      const ref = parseCourseHref(task.href);
      const lesson = ref.kind === "grammar" ? byId.get(ref.id) : undefined;
      if (!lesson || used.has(lesson.id)) continue;
      used.add(lesson.id);
      lessons.push(lesson);
    }
    if (lessons.length) groups.push({ week, lessons });
  }
  return { groups, extra: pack.grammar.filter((g) => !used.has(g.id)) };
}

export function vocabByWeek(pack: LevelPack): {
  groups: { week: Week; topics: VocabTopic[] }[];
  extra: VocabTopic[];
} {
  const byId = new Map(pack.vocabTopics.map((v) => [v.id, v]));
  const used = new Set<string>();
  const groups: { week: Week; topics: VocabTopic[] }[] = [];
  for (const week of pack.weeks || []) {
    const topics: VocabTopic[] = [];
    for (const task of week.tasks || []) {
      const ref = parseCourseHref(task.href);
      const topic = ref.kind === "vocab" ? byId.get(ref.id) : undefined;
      if (!topic || used.has(topic.id)) continue;
      used.add(topic.id);
      topics.push(topic);
    }
    if (topics.length) groups.push({ week, topics });
  }
  return { groups, extra: pack.vocabTopics.filter((v) => !used.has(v.id)) };
}

export function nextGrammar(pack: LevelPack, id: string): GrammarLesson | null {
  const ids = grammarCourseIds(pack);
  const i = ids.indexOf(id);
  const nextId = i >= 0 ? ids[i + 1] : pack.grammar.find((g) => g.id !== id)?.id;
  return pack.grammar.find((g) => g.id === nextId) || null;
}

export function remainingWeekTasks(pack: LevelPack, state: Pick<LevelState, "checks">, weekN: number): WeekTask[] {
  const week = pack.weeks.find((w) => w.id === weekN) || pack.weeks[weekN - 1];
  if (!week) return [];
  return week.tasks.filter((t) => !state.checks[t.id]);
}

export function taskAlreadyOnToday(href: string, todayHrefs: string[]): boolean {
  const path = toPath(href);
  return todayHrefs.some((h) => {
    const a = toPath(h).replace(/\/+$/, "");
    const b = path.replace(/\/+$/, "");
    return a === b || a.startsWith(`${b}/`) || b.startsWith(`${a}/`);
  });
}
