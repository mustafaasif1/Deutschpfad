import { describe, expect, it } from "vitest";
import { getMeta, isLevelId, LEVEL_IDS } from "@/lib/levels";

describe("levels", () => {
  it("knows the three telc tracks", () => {
    expect(LEVEL_IDS).toEqual(["a1", "a2", "b1"]);
    expect(isLevelId("a1")).toBe(true);
    expect(isLevelId("b2")).toBe(false);
    expect(getMeta("a2")?.exam).toContain("A2");
    expect(getMeta(null)).toBeNull();
  });
});
