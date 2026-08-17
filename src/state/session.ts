import type { LevelMeta, LevelPack, Topic } from "@/types/content";
import { daysBetween, isSameYmd, localYmd, parseYmd, addDays } from "@/lib/dates";
import { onHref, toPath } from "@/lib/href";
import type {
  LevelState,
  ProgressStore,
  SessionStep,
  SessionStepKeys,
  StudySession,
} from "@/state/progress";

export const PASS = 80;
const MAX_STEPS = 4;
const DUE_CAP = 1;

export type Clock = {
  today: string;
  started: string;
  examDate: string | null;
  weekN: number;
  day: number;
  daysLeft: number | null;
  weeks: number;
  source: "start" | "exam";
  examName: string;
  levelTitle: string;
};

export type DueItem = {
  id: string;
  interval: number;
  due: string;
  lastPct: number | undefined;
  reviews: number;
  kind: string;
  title: string;
  href: string;
};

export type SetMeta = {
  kind: string;
  title: string;
  href: string;
  topicId?: string;
};

export type SessionStepView = SessionStep & { done: boolean };

export type SessionView = Omit<StudySession, "steps"> & {
  steps: SessionStepView[];
};

export function clock(state: LevelState, meta: LevelMeta | null): Clock {
  const today = localYmd();
  const started = state.started || today;
  const examDate = state.examDate || null;
  let weekN: number;
  let day: number;
  let daysLeft: number | null = null;
  let source: "start" | "exam" = "start";

  if (examDate) {
    daysLeft = daysBetween(today, examDate);
    weekN = Math.max(1, Math.min(8, 9 - Math.ceil(Math.max(daysLeft, 1) / 7)));
    day = Math.max(1, Math.min(56, 57 - Math.max(daysLeft, 0)));
    source = "exam";
  } else {
    day = Math.min(56, Math.max(1, daysBetween(started, today) + 1));
    weekN = Math.min(8, Math.max(1, Math.ceil(day / 7)));
  }

  return {
    today,
    started,
    examDate,
    weekN,
    day,
    daysLeft,
    weeks: 8,
    source,
    examName: meta?.exam || "telc",
    levelTitle: meta?.title || "",
  };
}

export function weekFor(pack: LevelPack, clockObj: Clock) {
  return pack.weeks[clockObj.weekN - 1] || { id: clockObj.weekN, title: "Your plan", goal: "", tasks: [] };
}

export function describeSet(pack: LevelPack, setId: string): SetMeta {
  const id = String(setId || "");
  if (!id) return { kind: "quiz", title: "Practice", href: "/grammar" };

  if (id.startsWith("g-")) {
    const gid = id.slice(2);
    const g = pack.grammar.find((x) => x.id === gid);
    return { kind: "quiz", title: g ? g.title : gid, href: `/grammar/${gid}` };
  }
  if (id.startsWith("vocab-")) {
    const vid = id.slice(6);
    const v = pack.vocabTopics.find((x) => x.id === vid);
    return { kind: "vocab", title: v ? v.title : vid, href: `/vocab/${vid}`, topicId: vid };
  }
  if (id.startsWith("topic-")) {
    const tid = id.slice(6);
    const t = pack.topics.find((x) => x.id === tid);
    return { kind: "produce", title: t ? t.titleDe || t.title : tid, href: `/topics/${tid}`, topicId: tid };
  }
  if (id.startsWith("drill-")) {
    const did = id.slice(6);
    const d = pack.drills.find((x) => x.id === did);
    return { kind: "quiz", title: d ? d.title : did, href: `/drill/${did}` };
  }
  if (id.startsWith("hoeren-paper-")) {
    const hid = id.slice(13);
    return { kind: "exam", title: `Hören paper ${hid}`, href: `/exam/hoeren/${hid}` };
  }
  if (id.startsWith("mock-")) {
    const mid = id.slice(5);
    const mock = pack.exam.mocks.find((x) => x.id === mid);
    return { kind: "exam", title: mock ? mock.title : id, href: `/exam/mock/${mid}` };
  }

  const lesen = pack.exam.lesen.find((x) => x.id === id);
  if (lesen) return { kind: "exam", title: lesen.title, href: `/exam/lesen/${id}` };

  const sb = pack.exam.sprachbausteine.find((x) => x.id === id);
  if (sb) return { kind: "exam", title: sb.title, href: "/exam/sprachbausteine" };

  return { kind: "quiz", title: id, href: "/progress" };
}

export function seedSchedule(state: LevelState): boolean {
  if (state.scheduleSeeded) return false;
  state.scheduleSeeded = true;
  const today = localYmd();
  let added = false;
  for (const id of Object.keys(state.results || {})) {
    if (state.schedule[id]) continue;
    const r = state.results[id];
    if (!r || !r.total) continue;
    const pct = Math.round((r.correct / r.total) * 100);
    const passed = pct >= PASS;
    const interval = passed ? 3 : 1;
    const from = r.at ? localYmd(new Date(r.at)) : state.started || today;
    const dueDate = addDays(from, interval);
    state.schedule[id] = {
      interval,
      due: dueDate < today ? today : dueDate,
      lastPct: pct,
      lastAt: r.at || Date.now(),
      reviews: 1,
    };
    added = true;
  }
  return added;
}

export function seedIfNeeded(progress: ProgressStore): void {
  if (progress.get().scheduleSeeded) return;
  progress.write((state) => {
    seedSchedule(state);
  });
}

export function dueItems(pack: LevelPack, state: LevelState): DueItem[] {
  const today = localYmd();
  const list: DueItem[] = [];
  for (const id of Object.keys(state.schedule || {})) {
    const row = state.schedule[id];
    if (!row || !row.due || row.due > today) continue;
    const meta = describeSet(pack, id);
    list.push({
      id,
      interval: row.interval || 1,
      due: row.due,
      lastPct: row.lastPct,
      reviews: row.reviews || 0,
      kind: meta.kind,
      title: meta.title,
      href: meta.href,
    });
  }
  list.sort((a, b) => {
    const ap = a.lastPct == null ? -1 : a.lastPct;
    const bp = b.lastPct == null ? -1 : b.lastPct;
    if (ap !== bp) return ap - bp;
    return a.due < b.due ? -1 : a.due > b.due ? 1 : 0;
  });
  return list;
}

export function kindLabel(kind: string): string {
  if (kind === "review") return "Review";
  if (kind === "plan") return "This week";
  if (kind === "produce") return "Speak";
  if (kind === "exam") return "Exam skill";
  return "Step";
}

export function keysFromStep(step: Pick<SessionStep, "id" | "kind" | "href" | "keys">): SessionStepKeys {
  if (step.keys) return step.keys;
  const href = toPath(step.href || "");
  if (step.kind === "plan" && step.id.startsWith("plan-")) {
    return { planId: step.id.slice(5), hrefs: href ? [href] : [] };
  }
  if (step.kind === "produce" && step.id.startsWith("topic-")) {
    const topicId = step.id.slice(6);
    return { topicId, hrefs: [`/topics/${topicId}`] };
  }
  if (step.kind === "review" && step.id.startsWith("due-")) {
    return { quizIds: [step.id.slice(4)], hrefs: href ? [href] : [] };
  }
  if (step.kind === "exam") {
    const hrefs = href ? [href] : [];
    if (href.includes("schreiben")) hrefs.push("/schreiben");
    if (href.includes("sprechen")) hrefs.push("/exam/sprechen");
    if (href.includes("hoeren")) hrefs.push("/exam/hoeren");
    if (href.includes("lesen")) hrefs.push("/exam/lesen");
    if (href.includes("mock")) hrefs.push("/exam/mock");
    if (href.includes("ears")) hrefs.push("/exam/ears");
    return { hrefs };
  }
  return { hrefs: href ? [href] : [] };
}

function examSkillStep(c: Clock): Omit<SessionStep, "keys"> {
  if (c.weekN >= 7) {
    return {
      id: "exam-mock",
      kind: "exam",
      title: "Written mock",
      blurb: `Week ${c.weekN} — sit one written mock in exam order. Leave no blanks. Mark it before you look at the key.`,
      href: "/exam/mock",
    };
  }
  const skills = [
    { href: "/exam/hoeren", title: "Hören in exam sitting", blurb: "One paper in exam order. Hunt numbers and negatives, then read the key slowly." },
    { href: "/exam/schreiben", title: "Schreiben from memory", blurb: "Hide the model. Cover every content point. Then compare, do not copy first." },
    { href: "/exam/sprechen/run", title: "Timed oral run", blurb: "Same clock as the group exam. Use this week’s topic sentences, not English notes." },
    { href: "/exam/lesen", title: "Lesen paper", blurb: "Guess, never blank. After marking, read why the trap option was wrong." },
  ];
  const d = parseYmd(c.today);
  const skill = skills[(d ? d.getDay() : 0) % skills.length];
  return {
    id: `exam-skill-${skill.href}`,
    kind: "exam",
    title: skill.title,
    blurb: skill.blurb,
    href: skill.href,
  };
}

function makeStep(partial: Omit<SessionStep, "keys">): SessionStep {
  const step: SessionStep = {
    id: partial.id,
    kind: partial.kind,
    title: partial.title,
    blurb: partial.blurb || "",
    href: toPath(partial.href),
  };
  step.keys = keysFromStep(step);
  return step;
}

export function buildSteps(pack: LevelPack, c: Clock, state: LevelState, due: DueItem[]): SessionStep[] {
  const steps: SessionStep[] = [];
  const seenId = new Set<string>();

  function add(partial: Omit<SessionStep, "keys"> | null | undefined) {
    if (!partial || !partial.href) return;
    const step = makeStep(partial);
    if (seenId.has(step.id)) return;
    if (steps.length >= MAX_STEPS) return;
    seenId.add(step.id);
    steps.push(step);
  }

  due.slice(0, DUE_CAP).forEach((item) => {
    const weak = item.lastPct != null && item.lastPct < PASS;
    add({
      id: `due-${item.id}`,
      kind: "review",
      title: item.title,
      blurb: weak
        ? `${item.lastPct}% last time. Repeat slowly and read every explanation until it holds at 80%.`
        : `Scheduled review · ${item.interval}-day box. Read the explanation even when you are right.`,
      href: item.href,
    });
  });

  const w = weekFor(pack, c);
  const task = (w.tasks || []).find((t) => !state.checks[t.id]);
  if (task) {
    add({
      id: `plan-${task.id}`,
      kind: "plan",
      title: task.label,
      blurb: `Week ${c.weekN} · ${w.title}. Do this task fully (read → say → quiz), then tick it on the plan.`,
      href: toPath(task.href),
    });
  }

  const openTopic = pack.topics.find((t) => !state.done[`topic-${t.id}`]);
  if (openTopic) {
    add({
      id: `topic-${openTopic.id}`,
      kind: "produce",
      title: `Produce ${openTopic.titleDe || openTopic.title}`,
      blurb: "Read the topic lesson first, say the chunks, quiz to 80%, then produce without English notes.",
      href: `/topics/${openTopic.id}`,
    });
  }

  add(examSkillStep(c));
  return steps;
}

export function reviewedToday(state: LevelState, setId: string): boolean {
  const at = state.schedule[setId]?.lastAt || state.results[setId]?.at;
  return isSameYmd(at);
}

export function isStepDone(pack: LevelPack, state: LevelState, step: SessionStep): boolean {
  if (state.done[step.id]) return true;
  const keys = keysFromStep(step);

  if (step.kind === "review") {
    return !!(keys.quizIds || []).some((id) => reviewedToday(state, id));
  }
  if (step.kind === "plan" && keys.planId) {
    return !!state.checks[keys.planId];
  }
  if (step.kind === "produce" && keys.topicId) {
    return !!state.done[`topic-${keys.topicId}`];
  }
  if (step.kind === "exam") {
    return examWorkedToday(pack, state, step);
  }
  return false;
}

function hrefMatches(here: string, href: string): boolean {
  return onHref(here, href) || onHref(href, here);
}

function examWorkedToday(pack: LevelPack, state: LevelState, step: SessionStep): boolean {
  const hrefs = keysFromStep(step).hrefs || [];
  return Object.entries(state.results || {}).some(([id, row]) => {
    if (!row || !isSameYmd(row.at)) return false;
    const meta = describeSet(pack, id);
    return hrefs.some((h) => hrefMatches(meta.href, h));
  });
}

export function withDone(pack: LevelPack, state: LevelState, session: StudySession): SessionView {
  return {
    ...session,
    steps: session.steps.map((step) => ({ ...step, done: isStepDone(pack, state, step) })),
  };
}

export function todaySession(pack: LevelPack, state: LevelState, meta: LevelMeta | null): SessionView {
  const c = clock(state, meta);
  const saved = state.session;
  const steps =
    saved && saved.date === c.today && saved.steps.length
      ? saved.steps
      : buildSteps(pack, c, state, dueItems(pack, state));
  return withDone(pack, state, {
    date: c.today,
    started: saved?.date === c.today ? !!saved.started : false,
    steps,
  });
}

/** Persist today's frozen step list if missing or stale. Safe to call from an effect. */
export function persistTodaySession(pack: LevelPack, progress: ProgressStore, meta: LevelMeta | null): void {
  const state = progress.get();
  const c = clock(state, meta);
  const saved = state.session;
  if (saved && saved.date === c.today && saved.steps.length) return;
  progress.setSession({
    date: c.today,
    started: false,
    steps: buildSteps(pack, c, state, dueItems(pack, state)),
  });
}

function firstOpen(session: SessionView): (SessionStep & { done: boolean }) | null {
  return session.steps.find((st) => !st.done) || null;
}

function remaining(session: SessionView): number {
  return session.steps.filter((st) => !st.done).length;
}

export function produceReady(pack: LevelPack, state: LevelState, topicId: string): boolean {
  const t = pack.topics.find((x) => x.id === topicId);
  if (!t?.chunks?.length) return true;
  const r = state.results[`topic-${topicId}`];
  return !!(r && r.total && Math.round((r.correct / r.total) * 100) >= PASS);
}

export function produceQuizHref(topicId: string): string {
  return `/topics/${topicId}/quiz`;
}

export function leadCopy(c: Clock): string {
  if (c.source === "exam") {
    if (c.daysLeft === 0) return `Sitting today · week ${c.weekN} of 8. Do today’s list, then stop and rest.`;
    if (c.daysLeft != null && c.daysLeft < 0) {
      const n = Math.abs(c.daysLeft);
      return `The sitting was ${n} day${n === 1 ? "" : "s"} ago · week 8 of 8.`;
    }
    return `Week ${c.weekN} of 8 · ${c.daysLeft} day${c.daysLeft === 1 ? "" : "s"} until the sitting. Keep Today in order.`;
  }
  return `Day ${c.day} of 56 · week ${c.weekN} of 8. Do today’s list in order (~45–60 min).`;
}

export function shortTitle(step: SessionStep): string {
  return String(step.title || "").replace(/^Produce\s+/, "");
}

export function sessionCta(pack: LevelPack, state: LevelState, meta: LevelMeta | null, here: string) {
  const session = todaySession(pack, state, meta);
  const step = firstOpen(session);
  if (!step) return null;
  const keys = keysFromStep(step);
  let href = step.href;
  if (step.kind === "produce" && keys.topicId && !produceReady(pack, state, keys.topicId)) {
    href = produceQuizHref(keys.topicId);
  }
  if (onHref(here, step.href) || onHref(here, href)) return null;
  return {
    on: false,
    href,
    title: step.title,
    kind: step.kind,
    label: `Open ${shortTitle(step)}`,
  };
}

export function setStep(
  pack: LevelPack,
  progress: ProgressStore,
  meta: LevelMeta | null,
  id: string,
  on: boolean,
): SessionStep | null {
  persistTodaySession(pack, progress, meta);
  const state = progress.get();
  const session = todaySession(pack, state, meta);
  const current = session.steps.find((st) => st.id === id);
  if (!current) return firstOpen(session);

  const keys = keysFromStep(current);
  if (on && current.kind === "produce" && keys.topicId && !produceReady(pack, progress.get(), keys.topicId)) {
    return firstOpen(session);
  }

  if (current.kind === "produce" && keys.topicId) {
    progress.setDone(`topic-${keys.topicId}`, on);
  } else if (current.kind === "plan" && keys.planId) {
    progress.toggleCheck(keys.planId, on);
  } else {
    progress.setDone(current.id, on);
  }

  progress.write((s) => {
    if (s.session) s.session.started = true;
  });
  return firstOpen(todaySession(pack, progress.get(), meta));
}

export function startSession(pack: LevelPack, progress: ProgressStore, meta: LevelMeta | null): SessionStep | null {
  persistTodaySession(pack, progress, meta);
  progress.write((s) => {
    if (s.session) s.session.started = true;
  });
  return firstOpen(todaySession(pack, progress.get(), meta));
}

/** Tick today's exam step when the learner finishes that skill in the gym. */
export function noteFinished(progress: ProgressStore, here: string): void {
  const state = progress.get();
  const session = state.session;
  if (!session?.steps.length) return;
  for (const step of session.steps) {
    if (step.kind !== "exam" || state.done[step.id]) continue;
    const hrefs = keysFromStep(step).hrefs || [step.href];
    if (hrefs.some((h) => hrefMatches(here, h))) {
      progress.setDone(step.id, true);
      return;
    }
  }
}

export function advanceSession(pack: LevelPack, progress: ProgressStore, meta: LevelMeta | null, here: string) {
  persistTodaySession(pack, progress, meta);
  progress.write((s) => {
    if (s.session) s.session.started = true;
  });
  const step = firstOpen(todaySession(pack, progress.get(), meta));
  if (!step) {
    return { mode: "home" as const, href: "/", toast: "That’s all for today." };
  }
  const keys = keysFromStep(step);
  let href = step.href;
  if (step.kind === "produce" && keys.topicId && !produceReady(pack, progress.get(), keys.topicId)) {
    href = produceQuizHref(keys.topicId);
  }
  if (onHref(here, step.href) || onHref(here, href)) {
    return { mode: "stay" as const, href: here, toast: "Tick this step on Today when you have finished." };
  }
  return { mode: "open" as const, href };
}

export function remainingCount(session: SessionView | null): number {
  return session ? remaining(session) : 0;
}

export function isComplete(session: SessionView | null): boolean {
  return !!(session && session.steps.length && remaining(session) === 0);
}

export function nextStep(session: SessionView | null): SessionStep | null {
  return session ? firstOpen(session) : null;
}

export function reviewVocab(progress: ProgressStore, topicId: string): void {
  const id = `vocab-${topicId}`;
  const row = progress.get().schedule?.[id];
  const alreadyToday = isSameYmd(row?.lastAt);
  if (!alreadyToday) progress.review(id, 100);
}

export type PassMap = {
  clock: Clock;
  topics: { id: string; title: string; href: string; done: boolean; core: boolean }[];
  produce: number;
  quizzes: {
    id: string;
    title: string;
    href: string;
    pct: number;
    correct: number;
    total: number;
    weak: boolean;
    due: string | null;
    interval: number | null;
  }[];
  weak: PassMap["quizzes"];
  mocks: { id: string; title: string; href: string; done: boolean }[];
  mocksDone: number;
  due: DueItem[];
  oral: boolean;
  readiness: { level: string; text: string };
};

export function passMap(pack: LevelPack, state: LevelState, meta: LevelMeta | null): PassMap {
  const c = clock(state, meta);
  const topics = pack.topics.map((t: Topic) => ({
    id: t.id,
    title: t.titleDe || t.title,
    href: `/topics/${t.id}`,
    done: !!state.done[`topic-${t.id}`],
    core: t.weight === "exam-core" || t.weight === "always",
  }));
  const quizzes = Object.keys(state.results || {})
    .map((id) => {
      const r = state.results[id];
      const pct = r && r.total ? Math.round((r.correct / r.total) * 100) : 0;
      const metaSet = describeSet(pack, id);
      const sched = state.schedule?.[id];
      return {
        id,
        title: metaSet.title,
        href: metaSet.href,
        pct,
        correct: r.correct,
        total: r.total,
        weak: pct < PASS,
        due: sched ? sched.due : null,
        interval: sched ? sched.interval : null,
      };
    })
    .sort((a, b) => a.pct - b.pct);
  const mocks = pack.exam.mocks.map((m) => ({
    id: m.id,
    title: m.title,
    href: `/exam/mock/${m.id}`,
    done: !!state.done[`mock-${m.id}`],
  }));
  const produce = topics.filter((t) => t.done).length;
  const weak = quizzes.filter((q) => q.weak);
  const mocksDone = mocks.filter((m) => m.done).length;
  let level = "start";
  let text = "No production yet. Start today’s list.";
  if (quizzes.length || produce) {
    if (weak.length || (topics.length && produce / topics.length < 0.5)) {
      level = "gap";
      text = "Not exam-ready yet. Clear due reviews and mark topics done.";
    } else if (mocks.length && mocksDone === 0) {
      level = "shape";
      text = "Topics and quizzes are holding. Sit a written mock before exam week.";
    } else if (topics.length && produce / topics.length >= 0.8 && weak.length === 0 && mocksDone >= 1) {
      level = "ready";
      text = "Pass map looks solid: most topics done, quizzes at 80%+, and a mock is done.";
    } else {
      level = "work";
      text = "Keep the 1/3/7 reviews. Mark a topic done when you can speak it cold.";
    }
  }
  return {
    clock: c,
    topics,
    produce,
    quizzes,
    weak,
    mocks,
    mocksDone,
    due: dueItems(pack, state),
    oral: !!state.done["sprechen-run"],
    readiness: { level, text },
  };
}

export function rebuildSession(pack: LevelPack, progress: ProgressStore, meta: LevelMeta | null): SessionView {
  progress.setSession(null);
  persistTodaySession(pack, progress, meta);
  return todaySession(pack, progress.get(), meta);
}
