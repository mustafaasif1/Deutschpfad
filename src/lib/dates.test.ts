import { afterEach, describe, expect, it } from "vitest";
import { addDays, daysBetween, formatClock, localYmd, parseYmd, setNow } from "@/lib/dates";

afterEach(() => setNow(null));

describe("dates", () => {
  it("formats local ymd from the injected clock", () => {
    setNow(new Date(2026, 7, 17, 15, 30));
    expect(localYmd()).toBe("2026-08-17");
  });

  it("parses ymd as a local calendar date", () => {
    const d = parseYmd("2026-08-17");
    expect(d?.getFullYear()).toBe(2026);
    expect(d?.getMonth()).toBe(7);
    expect(d?.getDate()).toBe(17);
  });

  it("rejects incomplete dates", () => {
    expect(parseYmd("2026-08")).toBeNull();
    expect(parseYmd("")).toBeNull();
    expect(parseYmd(null)).toBeNull();
  });

  it("adds and diffs days without UTC drift", () => {
    expect(addDays("2026-08-17", 3)).toBe("2026-08-20");
    expect(addDays("2026-08-31", 1)).toBe("2026-09-01");
    expect(daysBetween("2026-08-17", "2026-08-20")).toBe(3);
    expect(daysBetween("2026-08-20", "2026-08-17")).toBe(-3);
    expect(daysBetween("bad", "2026-08-17")).toBe(0);
  });

  it("formats exam clocks", () => {
    expect(formatClock(0)).toBe("0:00");
    expect(formatClock(65)).toBe("1:05");
    expect(formatClock(-4)).toBe("0:00");
    expect(formatClock(90.9)).toBe("1:30");
  });
});
