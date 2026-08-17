import type { LevelPack } from "@/types/content";

export function memoryStorage(initial: Record<string, string> = {}): Storage {
  const map = new Map(Object.entries(initial));
  return {
    get length() {
      return map.size;
    },
    clear() {
      map.clear();
    },
    getItem(key: string) {
      return map.has(key) ? map.get(key)! : null;
    },
    key(index: number) {
      return [...map.keys()][index] ?? null;
    },
    removeItem(key: string) {
      map.delete(key);
    },
    setItem(key: string, value: string) {
      map.set(key, value);
    },
  };
}

export function miniPack(overrides: Partial<LevelPack> = {}): LevelPack {
  return {
    weeks: [
      {
        id: 1,
        title: "Week 1",
        goal: "Survive",
        tasks: [{ id: "w1-t1", label: "Learn articles", href: "/vocab/cafe" }],
      },
    ],
    vocab: [],
    vocabTopics: [{ id: "cafe", title: "Café", blurb: "Order a coffee" }],
    grammar: [{ id: "articles", title: "Articles", level: "a1", minutes: 20, html: "<p>der</p>" }],
    questions: [
      {
        id: "q1",
        set: "articles",
        type: "mcq",
        prompt: "der or das?",
        options: ["der Tisch", "das Tisch"],
        answer: "der Tisch",
      },
    ],
    drills: [{ id: "mix-a1", title: "A1 mix", set: "articles" }],
    exam: {
      lesen: [{ id: "lesen-1", title: "Lesen 1", parts: [] }],
      sprachbausteine: [],
      hoeren: [],
      schreiben: [],
      sprechen: null,
      mocks: [{ id: "mock-1", title: "Mock 1", blurb: "Full paper" }],
      tips: [],
    },
    topics: [
      {
        id: "wohn",
        title: "Wohnen",
        titleDe: "Wohnen",
        blurb: "Housing",
        weight: "exam-core",
        chunks: [{ de: "Ich wohne in Berlin." }],
      },
    ],
    examFormat: null,
    ...overrides,
  };
}
