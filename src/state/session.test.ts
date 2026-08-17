import { afterEach, describe, expect, it } from "vitest";
import { setNow } from "@/lib/dates";
import { createProgressStore } from "@/state/progress";
import {
  advanceSession,
  buildSteps,
  clock,
  dueItems,
  isStepDone,
  leadCopy,
  persistTodaySession,
  produceReady,
  setStep,
  todaySession,
} from "@/state/session";
import { memoryStorage, miniPack } from "@/test/helpers";
import { getMeta } from "@/lib/levels";

afterEach(() => setNow(null));

const meta = getMeta("a1")!;

function storeAt(day: string) {
  setNow(new Date(`${day}T12:00:00`));
  const store = createProgressStore({
    storage: memoryStorage(),
    nowMs: () => Date.parse(`${day}T12:00:00`),
  });
  store.setLevel("a1");
  return store;
}

describe("session", () => {
  it("builds week from first visit when no exam date is set", () => {
    setNow(new Date(2026, 7, 17));
    const state = createProgressStore({ storage: memoryStorage() }).get();
    state.started = "2026-08-03";
    const c = clock(state, meta);
    expect(c.day).toBe(15);
    expect(c.weekN).toBe(3);
    expect(c.source).toBe("start");
    expect(leadCopy(c)).toBe("Day 15 of 56 · week 3 of 8. Do today’s list in order (~45–60 min).");
  });

  it("counts down to an exam date", () => {
    setNow(new Date(2026, 7, 17));
    const state = createProgressStore({ storage: memoryStorage() }).get();
    state.examDate = "2026-08-24";
    const c = clock(state, meta);
    expect(c.source).toBe("exam");
    expect(c.daysLeft).toBe(7);
    expect(c.weekN).toBe(8);
  });

  it("queues due reviews before new work", () => {
    setNow(new Date(2026, 7, 17));
    const pack = miniPack();
    const store = storeAt("2026-08-17");
    store.record("g-articles", 4, 10);
    store.write((s) => {
      s.schedule["g-articles"].due = "2026-08-17";
    });
    const due = dueItems(pack, store.get());
    expect(due[0].id).toBe("g-articles");
    const steps = buildSteps(pack, clock(store.get(), meta), store.get(), due);
    expect(steps[0].kind).toBe("review");
    expect(steps.some((s) => s.kind === "plan")).toBe(true);
    expect(steps.some((s) => s.kind === "produce")).toBe(true);
  });

  it("derives review completion from a quiz sat today", () => {
    const pack = miniPack();
    const store = storeAt("2026-08-17");
    store.record("g-articles", 9, 10);
    const step = {
      id: "due-g-articles",
      kind: "review",
      title: "Articles",
      blurb: "",
      href: "/grammar/articles",
      keys: { quizIds: ["g-articles"], hrefs: ["/grammar/articles"] },
    };
    expect(isStepDone(pack, store.get(), step)).toBe(true);
  });

  it("does not treat yesterday's quiz as today's review done", () => {
    const pack = miniPack();
    const store = storeAt("2026-08-16");
    store.record("g-articles", 9, 10);
    setNow(new Date(2026, 7, 17));
    const step = {
      id: "due-g-articles",
      kind: "review",
      title: "Articles",
      blurb: "",
      href: "/grammar/articles",
      keys: { quizIds: ["g-articles"], hrefs: ["/grammar/articles"] },
    };
    expect(isStepDone(pack, store.get(), step)).toBe(false);
  });

  it("requires 80% on topic chunks before produce is ready", () => {
    const pack = miniPack();
    const store = storeAt("2026-08-17");
    expect(produceReady(pack, store.get(), "wohn")).toBe(false);
    store.record("topic-wohn", 8, 10);
    expect(produceReady(pack, store.get(), "wohn")).toBe(true);
  });

  it("marks a plan tick from the today list without writing during read", () => {
    const pack = miniPack();
    const store = storeAt("2026-08-17");
    persistTodaySession(pack, store, meta);
    const before = store.get().session;
    const again = todaySession(pack, store.get(), meta);
    expect(again.date).toBe(before?.date);
    expect(again.steps.map((s) => s.id)).toEqual(before?.steps.map((s) => s.id));
    const plan = again.steps.find((s) => s.kind === "plan")!;
    expect(plan.done).toBe(false);
    setStep(pack, store, meta, plan.id, true);
    expect(store.get().checks["w1-t1"]).toBe(true);
    expect(todaySession(pack, store.get(), meta).steps.find((s) => s.id === plan.id)?.done).toBe(true);
  });

  it("opens the next step without ticking it", () => {
    const pack = miniPack();
    const store = storeAt("2026-08-17");
    persistTodaySession(pack, store, meta);
    const session = todaySession(pack, store.get(), meta);
    const first = session.steps[0];
    const result = advanceSession(pack, store, meta, "/");
    expect(result.mode).toBe("open");
    expect(result.href).toBe(first.href);
    expect(todaySession(pack, store.get(), meta).steps.find((s) => s.id === first.id)?.done).toBe(false);
  });

  it("does not auto-tick when you are already on the step", () => {
    const pack = miniPack();
    const store = storeAt("2026-08-17");
    persistTodaySession(pack, store, meta);
    const first = todaySession(pack, store.get(), meta).steps[0];
    const result = advanceSession(pack, store, meta, first.href);
    expect(result.mode).toBe("stay");
    expect(todaySession(pack, store.get(), meta).steps.find((s) => s.id === first.id)?.done).toBe(false);
  });

  it("keeps a plan task and a produce step even when they share a URL", () => {
    const pack = miniPack({
      weeks: [
        {
          id: 1,
          title: "Week 1",
          goal: "Survive",
          tasks: [{ id: "w1-t1", label: "Topic Wohnen", href: "/topics/wohn" }],
        },
      ],
    });
    const store = storeAt("2026-08-17");
    const steps = buildSteps(pack, clock(store.get(), meta), store.get(), []);
    expect(steps.filter((s) => s.href === "/topics/wohn")).toHaveLength(2);
    expect(steps.some((s) => s.kind === "plan")).toBe(true);
    expect(steps.some((s) => s.kind === "produce")).toBe(true);
  });

  it("does not treat an old letter as today's exam step", () => {
    const pack = miniPack();
    const store = storeAt("2026-08-16");
    store.markDone("schreiben-cafe");
    store.markDone("sprechen-run");
    store.markDone("mock-1");
    setNow(new Date(2026, 7, 17));
    store.write((s) => {
      s.session = null;
    });
    persistTodaySession(pack, store, meta);
    const exam = todaySession(pack, store.get(), meta).steps.find((s) => s.kind === "exam");
    expect(exam).toBeTruthy();
    expect(isStepDone(pack, store.get(), exam!)).toBe(false);
  });
});
