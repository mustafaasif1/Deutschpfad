import { afterEach, describe, expect, it } from "vitest";
import { setNow } from "@/lib/dates";
import { mastery, masteryLine, masteryRank, mixDrill } from "@/lib/mastery";
import { emptyLevel } from "@/state/progress";
import { miniPack } from "@/test/helpers";

afterEach(() => setNow(null));

describe("mastery", () => {
  it("ranks due weak sets first", () => {
    setNow(new Date(2026, 7, 17));
    const state = emptyLevel();
    state.results["g-articles"] = { correct: 2, total: 10, at: Date.now() };
    state.schedule["g-articles"] = { interval: 1, due: "2026-08-16", lastPct: 20, lastAt: Date.now(), reviews: 1 };
    const m = mastery(state, "g-articles");
    expect(m.pct).toBe(20);
    expect(m.due).toBe(true);
    expect(m.weak).toBe(true);
    expect(masteryRank(state, "g-articles")).toBe(0);
    expect(masteryLine(state, "g-articles")).toBe("20% · due");
    expect(masteryLine(state, "missing")).toBe("Not sat");
  });

  it("finds the core mix drill", () => {
    const pack = miniPack({
      drills: [
        { id: "b2-mix", title: "B2" },
        { id: "mix-a1", title: "Mix" },
      ],
    });
    expect(mixDrill(pack)?.id).toBe("mix-a1");
  });
});
