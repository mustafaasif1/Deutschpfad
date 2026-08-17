import { describe, expect, it } from "vitest";
import { bookHrefForRoute, countLesenItems, groupHoerenPapers, unusedKeys } from "@/lib/exam";

describe("exam helpers", () => {
  it("groups Hören sets by paper id and counts items", () => {
    const papers = groupHoerenPapers([
      { id: "t1", paper: 1, teil: 2, items: [{ statement: "a", answer: true }] },
      { id: "t2", paper: 1, teil: 1, items: [{ statement: "b", answer: false }, { statement: "c", answer: true }] },
      { id: "loose", items: [{ statement: "d", answer: true }] },
    ]);
    expect(papers[0].id).toBe("1");
    expect(papers[0].sets.map((s) => s.teil)).toEqual([1, 2]);
    expect(papers[0].itemCount).toBe(3);
    expect(papers[1].sets[0].id).toBe("loose");
  });

  it("counts Lesen items including headline maps", () => {
    expect(
      countLesenItems({
        id: "l",
        title: "L",
        parts: [
          { kind: "headlines", instruction: "", answer: { a: "1", b: "2" } },
          { kind: "tf", instruction: "", items: [{ q: "x", answer: true }] },
        ],
      }),
    ).toBe(3);
  });

  it("returns unused matching keys", () => {
    expect(unusedKeys(["a", "b", "c"], { 1: "a", 2: "c" })).toEqual(["b"]);
  });

  it("points the book at the matching chapter", () => {
    expect(bookHrefForRoute("b1", "/exam/hoeren/1", "/books/b1.html")).toBe("/books/b1.html#ch-12");
    expect(bookHrefForRoute("a1", "/grammar", "/books/a1.html")).toBe("/books/a1.html#ch-04");
  });
});
