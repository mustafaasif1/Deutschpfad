import { afterEach, describe, expect, it } from "vitest";
import { setNow } from "@/lib/dates";
import { createProgressStore, emptyLevel, hydrateRoot, PROGRESS_KEY } from "@/state/progress";
import { memoryStorage } from "@/test/helpers";

afterEach(() => setNow(null));

describe("progress store", () => {
  it("starts empty and persists after a quiz", () => {
    setNow(new Date(2026, 7, 17));
    const storage = memoryStorage();
    const store = createProgressStore({ storage, nowMs: () => Date.parse("2026-08-17T10:00:00") });
    store.setLevel("a1");
    store.record("g-articles", 8, 10);
    expect(store.get().results["g-articles"]?.correct).toBe(8);
    expect(store.get().schedule["g-articles"]?.interval).toBe(3);
    expect(store.get().schedule["g-articles"]?.due).toBe("2026-08-20");
    expect(store.get().streak.count).toBe(1);
    expect(JSON.parse(storage.getItem(PROGRESS_KEY) || "{}").level).toBe("a1");
  });

  it("promotes a held set from 3-day to 7-day", () => {
    setNow(new Date(2026, 7, 17));
    const store = createProgressStore({ storage: memoryStorage(), nowMs: () => Date.parse("2026-08-17T10:00:00") });
    store.setLevel("a1");
    store.record("g-articles", 9, 10);
    expect(store.get().schedule["g-articles"]?.interval).toBe(3);
    store.record("g-articles", 10, 10);
    expect(store.get().schedule["g-articles"]?.interval).toBe(7);
  });

  it("fails a quiz onto the 1-day list", () => {
    setNow(new Date(2026, 7, 17));
    const store = createProgressStore({ storage: memoryStorage(), nowMs: () => Date.parse("2026-08-17T10:00:00") });
    store.setLevel("a2");
    store.record("g-perfekt", 3, 10);
    expect(store.get().schedule["g-perfekt"]?.interval).toBe(1);
    expect(store.get().schedule["g-perfekt"]?.due).toBe("2026-08-18");
  });

  it("keeps exam date when a level is reset", () => {
    const store = createProgressStore({ storage: memoryStorage() });
    store.setLevel("b1");
    store.setExamDate("2026-12-01");
    store.markDone("topic-wohn");
    store.resetLevel();
    expect(store.get().examDate).toBe("2026-12-01");
    expect(store.get().done["topic-wohn"]).toBeUndefined();
  });

  it("does not leak writes across levels", () => {
    const store = createProgressStore({ storage: memoryStorage() });
    store.setLevel("a1");
    store.markDone("topic-wohn");
    store.setLevel("a2");
    expect(store.get().done["topic-wohn"]).toBeUndefined();
    expect(store.get("a1").done["topic-wohn"]).toBe(true);
  });

  it("migrates a v1 B1 blob", () => {
    const old = emptyLevel();
    old.done["topic-wohn"] = true;
    const storage = memoryStorage({ "deutschpfad-progress-v1": JSON.stringify(old) });
    const store = createProgressStore({ storage });
    expect(store.getLevel()).toBe("b1");
    expect(store.get("b1").done["topic-wohn"]).toBe(true);
  });

  it("rewrites leftover hash hrefs on hydrate", () => {
    const root = hydrateRoot({
      level: "a1",
      levels: {
        a1: {
          session: {
            date: "2026-08-17",
            started: false,
            steps: [
              {
                id: "plan-a1w1-topic-person",
                kind: "plan",
                title: "Topic Person",
                blurb: "",
                href: "#/topics/personal",
                keys: { planId: "a1w1-topic-person", hrefs: ["#/topics/personal"] },
              },
            ],
          },
        } as never,
        a2: emptyLevel(),
        b1: emptyLevel(),
      },
    });
    expect(root.levels.a1.session?.steps[0].href).toBe("/topics/personal");
    expect(root.levels.a1.session?.steps[0].keys?.hrefs).toEqual(["/topics/personal"]);
  });

  it("hydrates corrupt exam dates to null", () => {
    const root = hydrateRoot({
      level: "nope" as never,
      levels: { a1: { examDate: "not-a-date" } as never, a2: emptyLevel(), b1: emptyLevel() },
    });
    expect(root.level).toBeNull();
    expect(root.levels.a1.examDate).toBeNull();
  });

  it("round-trips export/import", () => {
    const store = createProgressStore({ storage: memoryStorage() });
    store.setLevel("a1");
    store.markDone("topic-wohn");
    const json = store.exportJson();
    const other = createProgressStore({ storage: memoryStorage() });
    other.importJson(json);
    expect(other.getLevel()).toBe("a1");
    expect(other.get().done["topic-wohn"]).toBe(true);
  });
});
