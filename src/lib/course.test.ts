import { describe, expect, it } from "vitest";
import {
  grammarByWeek,
  grammarCourseIds,
  nextGrammar,
  parseCourseHref,
  remainingWeekTasks,
  taskAlreadyOnToday,
} from "@/lib/course";
import { miniPack } from "@/test/helpers";

describe("course order", () => {
  it("parses study hrefs", () => {
    expect(parseCourseHref("/grammar/a1-articles/quiz")).toEqual({
      kind: "grammar",
      id: "a1-articles",
      href: "/grammar/a1-articles",
    });
    expect(parseCourseHref("/topics/personal")).toMatchObject({ kind: "topic", id: "personal" });
    expect(parseCourseHref("/vocab/food")).toMatchObject({ kind: "vocab", id: "food" });
    expect(parseCourseHref("/exam/lesen/lesen-1")).toMatchObject({ kind: "exam" });
  });

  it("orders grammar from the 8-week plan, not file order", () => {
    const pack = miniPack({
      weeks: [
        {
          id: 1,
          title: "Start",
          goal: "Intro",
          tasks: [
            { id: "t1", label: "sein", href: "/grammar/sein" },
            { id: "t2", label: "articles", href: "/grammar/articles" },
            { id: "t3", label: "articles again", href: "/grammar/articles/quiz" },
          ],
        },
      ],
      grammar: [
        { id: "articles", title: "Articles", level: "a1", minutes: 10, html: "" },
        { id: "sein", title: "sein", level: "a1", minutes: 10, html: "" },
        { id: "extra", title: "Extra", level: "a1", minutes: 10, html: "" },
      ],
    });
    expect(grammarCourseIds(pack)).toEqual(["sein", "articles"]);
    const { groups, extra } = grammarByWeek(pack);
    expect(groups[0].lessons.map((g) => g.id)).toEqual(["sein", "articles"]);
    expect(extra.map((g) => g.id)).toEqual(["extra"]);
    expect(nextGrammar(pack, "sein")?.id).toBe("articles");
    expect(nextGrammar(pack, "articles")).toBeNull();
  });

  it("lists remaining week tasks and ignores ones already on Today", () => {
    const pack = miniPack();
    const left = remainingWeekTasks(pack, { checks: {} }, 1);
    expect(left).toHaveLength(1);
    expect(taskAlreadyOnToday("/vocab/cafe/quiz", ["/vocab/cafe"])).toBe(true);
    expect(taskAlreadyOnToday("/grammar/articles", ["/vocab/cafe"])).toBe(false);
  });
});
