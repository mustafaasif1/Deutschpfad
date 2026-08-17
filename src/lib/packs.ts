import type { LevelId, LevelPack, PackPartial } from "@/types/content";

type PackModule = { default: PackPartial };
type Loader = () => Promise<PackModule>;

const coreLoaders: Record<LevelId, Loader[]> = {
  a1: [
    () => import("@/content/a1/weeks.js") as Promise<PackModule>,
    () => import("@/content/a1/vocab.js") as Promise<PackModule>,
    () => import("@/content/a1/vocab-extra.js") as Promise<PackModule>,
    () => import("@/content/a1/vocab-more.js") as Promise<PackModule>,
    () => import("@/content/a1/questions.js") as Promise<PackModule>,
    () => import("@/content/a1/questions-extra.js") as Promise<PackModule>,
    () => import("@/content/a1/questions-grammar.js") as Promise<PackModule>,
    () => import("@/content/a1/topics.js") as Promise<PackModule>,
  ],
  a2: [
    () => import("@/content/a2/weeks.js") as Promise<PackModule>,
    () => import("@/content/a2/vocab.js") as Promise<PackModule>,
    () => import("@/content/a2/vocab-extra.js") as Promise<PackModule>,
    () => import("@/content/a2/vocab-more.js") as Promise<PackModule>,
    () => import("@/content/a2/questions.js") as Promise<PackModule>,
    () => import("@/content/a2/questions-extra.js") as Promise<PackModule>,
    () => import("@/content/a2/questions-grammar.js") as Promise<PackModule>,
    () => import("@/content/a2/topics.js") as Promise<PackModule>,
  ],
  b1: [
    () => import("@/content/b1/weeks.js") as Promise<PackModule>,
    () => import("@/content/b1/vocab.js") as Promise<PackModule>,
    () => import("@/content/b1/vocab-extra.js") as Promise<PackModule>,
    () => import("@/content/b1/vocab-more.js") as Promise<PackModule>,
    () => import("@/content/b1/vocab-telc.js") as Promise<PackModule>,
    () => import("@/content/b1/questions.js") as Promise<PackModule>,
    () => import("@/content/b1/questions-extra.js") as Promise<PackModule>,
    () => import("@/content/b1/questions-grammar.js") as Promise<PackModule>,
    () => import("@/content/b1/topics.js") as Promise<PackModule>,
  ],
};

const restLoaders: Record<LevelId, Loader[]> = {
  a1: [
    () => import("@/content/a1/grammar.js") as Promise<PackModule>,
    () => import("@/content/a1/exam.js") as Promise<PackModule>,
  ],
  a2: [
    () => import("@/content/a2/grammar.js") as Promise<PackModule>,
    () => import("@/content/a2/exam.js") as Promise<PackModule>,
  ],
  b1: [
    () => import("@/content/b1/grammar.js") as Promise<PackModule>,
    () => import("@/content/b1/exam.js") as Promise<PackModule>,
  ],
};

export function pathNeedsHeavyPack(pathname: string): boolean {
  return (
    pathname.startsWith("/grammar") ||
    pathname.startsWith("/exam") ||
    pathname.startsWith("/schreiben") ||
    pathname.startsWith("/b2")
  );
}

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

async function mergeLoaders(loaders: Loader[], start: PackPartial = {}): Promise<PackPartial> {
  const modules = await Promise.all(loaders.map((load) => load()));
  let merged = start;
  for (const mod of modules) {
    merged = mergePack(merged, mod.default || {});
  }
  return merged;
}

const cache = new Map<LevelId, LevelPack>();
const complete = new Set<LevelId>();
const inflight = new Map<LevelId, Promise<LevelPack>>();

export type PackUpdate = { done: boolean };

export function resetPackCache(): void {
  cache.clear();
  complete.clear();
  inflight.clear();
}

export async function loadLevelPack(
  id: LevelId,
  onUpdate?: (pack: LevelPack, update: PackUpdate) => void,
): Promise<LevelPack> {
  const hit = cache.get(id);
  if (hit && complete.has(id)) return hit;
  const pending = inflight.get(id);
  if (pending) return pending;
  const job = (async () => {
    const core = await mergeLoaders(coreLoaders[id]);
    let pack = finalize(core);
    cache.set(id, pack);
    onUpdate?.(pack, { done: false });

    const merged = await mergeLoaders(restLoaders[id], core);
    pack = finalize(merged);
    cache.set(id, pack);
    complete.add(id);
    inflight.delete(id);
    onUpdate?.(pack, { done: true });
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
