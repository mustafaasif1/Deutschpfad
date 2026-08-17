import type { LevelId, LevelPack, PackPartial } from "@/types/content";

type PackModule = { default: PackPartial };

const loaders: Record<LevelId, Array<() => Promise<PackModule>>> = {
  a1: [
    () => import("@/content/a1/weeks.js") as Promise<PackModule>,
    () => import("@/content/a1/vocab.js") as Promise<PackModule>,
    () => import("@/content/a1/vocab-extra.js") as Promise<PackModule>,
    () => import("@/content/a1/vocab-more.js") as Promise<PackModule>,
    () => import("@/content/a1/grammar.js") as Promise<PackModule>,
    () => import("@/content/a1/questions.js") as Promise<PackModule>,
    () => import("@/content/a1/questions-extra.js") as Promise<PackModule>,
    () => import("@/content/a1/questions-grammar.js") as Promise<PackModule>,
    () => import("@/content/a1/exam.js") as Promise<PackModule>,
    () => import("@/content/a1/topics.js") as Promise<PackModule>,
  ],
  a2: [
    () => import("@/content/a2/weeks.js") as Promise<PackModule>,
    () => import("@/content/a2/vocab.js") as Promise<PackModule>,
    () => import("@/content/a2/vocab-extra.js") as Promise<PackModule>,
    () => import("@/content/a2/vocab-more.js") as Promise<PackModule>,
    () => import("@/content/a2/grammar.js") as Promise<PackModule>,
    () => import("@/content/a2/questions.js") as Promise<PackModule>,
    () => import("@/content/a2/questions-extra.js") as Promise<PackModule>,
    () => import("@/content/a2/questions-grammar.js") as Promise<PackModule>,
    () => import("@/content/a2/exam.js") as Promise<PackModule>,
    () => import("@/content/a2/topics.js") as Promise<PackModule>,
  ],
  b1: [
    () => import("@/content/b1/weeks.js") as Promise<PackModule>,
    () => import("@/content/b1/vocab.js") as Promise<PackModule>,
    () => import("@/content/b1/vocab-extra.js") as Promise<PackModule>,
    () => import("@/content/b1/vocab-more.js") as Promise<PackModule>,
    () => import("@/content/b1/vocab-telc.js") as Promise<PackModule>,
    () => import("@/content/b1/grammar.js") as Promise<PackModule>,
    () => import("@/content/b1/questions.js") as Promise<PackModule>,
    () => import("@/content/b1/questions-extra.js") as Promise<PackModule>,
    () => import("@/content/b1/questions-grammar.js") as Promise<PackModule>,
    () => import("@/content/b1/exam.js") as Promise<PackModule>,
    () => import("@/content/b1/topics.js") as Promise<PackModule>,
  ],
};

function emptyPack(): LevelPack {
  return {
    weeks: [],
    vocab: [],
    vocabTopics: [],
    grammar: [],
    questions: [],
    drills: [],
    exam: {
      lesen: [],
      sprachbausteine: [],
      hoeren: [],
      schreiben: [],
      sprechen: null,
      mocks: [],
      tips: [],
    },
    topics: [],
    examFormat: null,
  };
}

function mergePack(prev: PackPartial, incoming: PackPartial): PackPartial {
  const next: PackPartial = { ...prev };
  (Object.keys(incoming) as (keyof PackPartial)[]).forEach((key) => {
    const value = incoming[key];
    const existing = prev[key];
    if (
      (key === "vocab" || key === "questions" || key === "drills") &&
      Array.isArray(existing) &&
      Array.isArray(value)
    ) {
      next[key] = [...existing, ...value] as never;
    } else if (value !== undefined) {
      next[key] = value as never;
    }
  });
  return next;
}

function finalize(partial: PackPartial): LevelPack {
  const base = emptyPack();
  return {
    ...base,
    ...partial,
    exam: {
      ...base.exam,
      ...(partial.exam || {}),
    },
  };
}

const cache = new Map<LevelId, LevelPack>();
const inflight = new Map<LevelId, Promise<LevelPack>>();

export async function loadLevelPack(id: LevelId): Promise<LevelPack> {
  const hit = cache.get(id);
  if (hit) return hit;
  const pending = inflight.get(id);
  if (pending) return pending;
  const job = (async () => {
    let merged: PackPartial = {};
    const modules = await Promise.all(loaders[id].map((load) => load()));
    for (const mod of modules) {
      merged = mergePack(merged, mod.default || {});
    }
    const pack = finalize(merged);
    cache.set(id, pack);
    inflight.delete(id);
    return pack;
  })().catch((err) => {
    inflight.delete(id);
    throw err;
  });
  inflight.set(id, job);
  return job;
}

export function getCachedPack(id: LevelId): LevelPack | null {
  return cache.get(id) ?? null;
}
