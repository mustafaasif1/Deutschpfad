import type { LevelId } from "@/types/content";
import { addDays, localYmd, parseYmd } from "@/lib/dates";
import { LEVEL_IDS, isLevelId } from "@/lib/levels";

export const PROGRESS_KEY = "deutschpfad-progress-v2";
const LEGACY_KEY = "deutschpfad-progress-v1";

export type Streak = { last: string | null; count: number };
export type QuizResult = { correct: number; total: number; at: number };
export type ScheduleRow = {
  interval: number;
  due: string;
  lastPct: number;
  lastAt: number;
  reviews: number;
};

export type SessionStepKeys = {
  planId?: string;
  topicId?: string;
  quizIds?: string[];
  hrefs?: string[];
};

export type SessionStep = {
  id: string;
  kind: string;
  title: string;
  blurb: string;
  href: string;
  keys?: SessionStepKeys;
};

export type StudySession = {
  date: string;
  steps: SessionStep[];
  started: boolean;
};

export type LevelState = {
  started: string;
  xp: number;
  streak: Streak;
  done: Record<string, boolean>;
  results: Record<string, QuizResult>;
  checks: Record<string, boolean>;
  seenVocab: Record<string, number>;
  examDate: string | null;
  schedule: Record<string, ScheduleRow>;
  scheduleSeeded: boolean;
  session: StudySession | null;
};

export type ProgressRoot = {
  level: LevelId | null;
  levels: Record<LevelId, LevelState>;
};

export type LevelSummary = {
  id: LevelId;
  checks: number;
  topics: number;
  mocks: number;
  weak: number;
  streak: number;
  examDate: string | null;
};

export type ProgressStoreOptions = {
  storage?: Storage | null;
  nowMs?: () => number;
};

export function nextInterval(prev: number, passed: boolean): number {
  if (!passed) return 1;
  if ((prev || 0) >= 3) return 7;
  return 3;
}

export function emptyLevel(started = localYmd()): LevelState {
  return {
    started,
    xp: 0,
    streak: { last: null, count: 0 },
    done: {},
    results: {},
    checks: {},
    seenVocab: {},
    examDate: null,
    schedule: {},
    scheduleSeeded: false,
    session: null,
  };
}

export function emptyRoot(): ProgressRoot {
  return {
    level: null,
    levels: { a1: emptyLevel(), a2: emptyLevel(), b1: emptyLevel() },
  };
}

function clone<T>(value: T): T {
  return structuredClone(value);
}

function migrateManualSessionTicks(state: LevelState): void {
  const steps = state.session?.steps;
  if (!steps) return;
  for (const step of steps) {
    const flagged = (step as SessionStep & { done?: boolean }).done;
    if (!flagged || !step.id || state.done[step.id]) continue;
    if (step.kind === "exam" || step.kind === "review") state.done[step.id] = true;
  }
}

export function hydrateLevel(raw: Partial<LevelState> | undefined): LevelState {
  const state = { ...emptyLevel(), ...(raw || {}) };
  state.streak = { last: null, count: 0, ...(raw?.streak || {}) };
  state.done = { ...(raw?.done || {}) };
  state.results = { ...(raw?.results || {}) };
  state.checks = { ...(raw?.checks || {}) };
  state.seenVocab = { ...(raw?.seenVocab || {}) };
  state.schedule = { ...(raw?.schedule || {}) };
  if (state.examDate && !parseYmd(state.examDate)) state.examDate = null;
  if (!state.started) state.started = localYmd();
  if (state.session?.steps) {
    state.session = {
      date: state.session.date,
      started: !!state.session.started,
      steps: state.session.steps.map((step) => ({
        id: step.id,
        kind: step.kind,
        title: step.title,
        blurb: step.blurb || "",
        href: step.href,
        keys: step.keys,
      })),
    };
  } else {
    state.session = null;
  }
  migrateManualSessionTicks(state);
  return state;
}

export function hydrateRoot(parsed: Partial<ProgressRoot> | undefined): ProgressRoot {
  const root = emptyRoot();
  root.level = isLevelId(parsed?.level ?? null) ? (parsed!.level as LevelId) : null;
  for (const id of LEVEL_IDS) {
    root.levels[id] = hydrateLevel(parsed?.levels?.[id]);
  }
  return root;
}

function loadRoot(storage: Storage | null): ProgressRoot {
  if (!storage) return emptyRoot();
  try {
    const raw = storage.getItem(PROGRESS_KEY);
    if (raw) return hydrateRoot(JSON.parse(raw) as ProgressRoot);
    const old = storage.getItem(LEGACY_KEY);
    if (old) {
      const root = emptyRoot();
      root.level = "b1";
      root.levels.b1 = hydrateLevel(JSON.parse(old) as LevelState);
      storage.setItem(PROGRESS_KEY, JSON.stringify(root));
      return root;
    }
  } catch {
    /* corrupt storage */
  }
  return emptyRoot();
}

function applySchedule(state: LevelState, id: string, pct: number, at: number): void {
  if (!id) return;
  const prev = state.schedule[id] || { interval: 0, reviews: 0, due: "", lastPct: 0, lastAt: 0 };
  const passed = pct >= 80;
  const interval = nextInterval(prev.interval, passed);
  state.schedule[id] = {
    interval,
    due: addDays(localYmd(), interval),
    lastPct: pct,
    lastAt: at,
    reviews: (prev.reviews || 0) + 1,
  };
}

function touchStreak(state: LevelState): void {
  const t = localYmd();
  if (state.streak.last === t) return;
  const yesterday = addDays(t, -1);
  state.streak.count = state.streak.last === yesterday ? (state.streak.count || 0) + 1 : 1;
  state.streak.last = t;
}

export function createProgressStore(options: ProgressStoreOptions = {}) {
  const storage =
    options.storage === undefined
      ? typeof window === "undefined"
        ? null
        : window.localStorage
      : options.storage;
  const nowMs = options.nowMs ?? (() => Date.now());

  let root = loadRoot(storage);
  const listeners = new Set<() => void>();

  function persist(): void {
    if (!storage) return;
    storage.setItem(PROGRESS_KEY, JSON.stringify(root));
  }

  function emit(): void {
    persist();
    for (const fn of listeners) {
      try {
        fn();
      } catch (err) {
        console.error(err);
      }
    }
  }

  function commit(recipe: (draft: ProgressRoot) => void): void {
    const draft = clone(root);
    recipe(draft);
    root = draft;
    emit();
  }

  function currentId(draft: ProgressRoot = root): LevelId {
    return draft.level || "b1";
  }

  function withLevel(fn: (state: LevelState, draft: ProgressRoot, id: LevelId) => void): void {
    commit((draft) => {
      const id = currentId(draft);
      if (!draft.levels[id]) draft.levels[id] = emptyLevel();
      fn(draft.levels[id], draft, id);
    });
  }

  return {
    subscribe(fn: () => void): () => void {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
    getSnapshot(): ProgressRoot {
      return root;
    },
    getRoot(): ProgressRoot {
      return root;
    },
    getLevel(): LevelId | null {
      return root.level;
    },
    setLevel(id: LevelId) {
      commit((draft) => {
        draft.level = id;
        if (!draft.levels[id]) draft.levels[id] = emptyLevel();
      });
    },
    get(id?: LevelId | null): LevelState {
      const key = id || currentId();
      return root.levels[key] || emptyLevel();
    },
    write(fn: (state: LevelState, draft: ProgressRoot, id: LevelId) => void) {
      withLevel(fn);
    },
    setExamDate(ymd: string | null) {
      withLevel((s) => {
        s.examDate = ymd && parseYmd(ymd) ? ymd : null;
        s.session = null;
      });
    },
    setDone(id: string, on: boolean) {
      withLevel((s) => {
        if (on) {
          s.done[id] = true;
          touchStreak(s);
        } else {
          delete s.done[id];
        }
      });
    },
    markDone(id: string) {
      this.setDone(id, true);
    },
    isDone(id: string) {
      return !!this.get().done[id];
    },
    addXp(n: number) {
      withLevel((s) => {
        s.xp += n;
        touchStreak(s);
      });
    },
    record(setId: string, correct: number, total: number) {
      const at = nowMs();
      withLevel((s) => {
        s.results[setId] = { correct, total, at };
        s.xp += correct * 8 + 4;
        touchStreak(s);
        applySchedule(s, setId, total ? Math.round((correct / total) * 100) : 0, at);
      });
    },
    review(setId: string, pct: number) {
      const at = nowMs();
      withLevel((s) => {
        applySchedule(s, setId, pct == null ? 100 : pct, at);
        touchStreak(s);
      });
    },
    toggleCheck(id: string, on: boolean) {
      withLevel((s) => {
        if (on) s.checks[id] = true;
        else delete s.checks[id];
      });
    },
    markVocab(id: string) {
      withLevel((s) => {
        s.seenVocab[id] = (s.seenVocab[id] || 0) + 1;
      });
    },
    setSession(session: StudySession | null) {
      withLevel((s) => {
        s.session = session;
      });
    },
    resetLevel() {
      const id = root.level;
      if (!id) return;
      commit((draft) => {
        const examDate = draft.levels[id]?.examDate || null;
        draft.levels[id] = emptyLevel();
        draft.levels[id].examDate = examDate;
      });
    },
    reset() {
      if (storage) storage.removeItem(PROGRESS_KEY);
      root = emptyRoot();
      emit();
    },
    exportJson() {
      return JSON.stringify(root, null, 2);
    },
    importJson(raw: string) {
      root = hydrateRoot(JSON.parse(raw) as ProgressRoot);
      emit();
      return root;
    },
    summaryAll(): LevelSummary[] {
      return LEVEL_IDS.map((id) => {
        const s = root.levels[id] || emptyLevel();
        const topics = Object.keys(s.done).filter((k) => k.startsWith("topic-")).length;
        const mocks = Object.keys(s.done).filter((k) => k.startsWith("mock-")).length;
        const weak = Object.keys(s.results).filter((k) => {
          const r = s.results[k];
          return r && r.total && r.correct / r.total < 0.8;
        }).length;
        return {
          id,
          checks: Object.keys(s.checks).filter((k) => s.checks[k]).length,
          topics,
          mocks,
          weak,
          streak: s.streak?.count || 0,
          examDate: s.examDate || null,
        };
      });
    },
  };
}

export type ProgressStore = ReturnType<typeof createProgressStore>;

export const progressStore = createProgressStore();
