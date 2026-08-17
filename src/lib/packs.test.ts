import { describe, expect, it } from "vitest";
import { parseCourseHref } from "@/lib/course";
import { groupHoerenPapers } from "@/lib/exam";
import { toPath } from "@/lib/href";
import { LEVEL_IDS } from "@/lib/levels";
import { loadLevelPack } from "@/lib/packs";

const LIST_PATHS = new Set([
  "/grammar",
  "/vocab",
  "/topics",
  "/plan",
  "/progress",
  "/exam",
  "/exam/lesen",
  "/exam/hoeren",
  "/exam/schreiben",
  "/exam/sprechen",
  "/exam/sprechen/run",
  "/exam/sprachbausteine",
  "/exam/mock",
  "/exam/ears",
  "/b2",
  "/levels",
]);

describe("level pack links", () => {
  it("resolves every week task href to real content", async () => {
    const missing: string[] = [];
    for (const id of LEVEL_IDS) {
      const pack = await loadLevelPack(id);
      const grammar = new Set(pack.grammar.map((g) => g.id));
      const vocab = new Set(pack.vocabTopics.map((v) => v.id));
      const topics = new Set(pack.topics.map((t) => t.id));
      const drills = new Set(pack.drills.map((d) => d.id));
      const lesen = new Set(pack.exam.lesen.map((x) => x.id));
      const schreiben = new Set(pack.exam.schreiben.map((x) => x.id));
      const mocks = new Set(pack.exam.mocks.map((x) => x.id));
      const hoeren = new Set(groupHoerenPapers(pack.exam.hoeren || []).map((p) => String(p.id)));

      for (const week of pack.weeks) {
        for (const task of week.tasks) {
          const path = toPath(task.href).replace(/\/quiz$/, "") || "/";
          if (LIST_PATHS.has(path) || path.startsWith("http") || path.startsWith("/books/")) continue;
          const ref = parseCourseHref(path);
          let ok = false;
          if (ref.kind === "grammar") ok = grammar.has(ref.id);
          else if (ref.kind === "vocab") ok = vocab.has(ref.id);
          else if (ref.kind === "topic") ok = topics.has(ref.id);
          else if (ref.kind === "drill") ok = drills.has(ref.id);
          else if (ref.kind === "exam") {
            const parts = path.split("/").filter(Boolean);
            if (parts[0] === "schreiben" && parts[1]) ok = schreiben.has(parts[1]);
            else if (parts[1] === "lesen" && parts[2]) ok = lesen.has(parts[2]);
            else if (parts[1] === "hoeren" && parts[2]) ok = hoeren.has(parts[2]);
            else if (parts[1] === "mock" && parts[2]) ok = mocks.has(parts[2]);
            else ok = LIST_PATHS.has(path) || path.startsWith("/exam/");
          } else {
            ok = false;
          }
          if (!ok) missing.push(`${id} week ${week.id} ${task.id} → ${task.href}`);
        }
      }
    }
    expect(missing).toEqual([]);
  });

  it("gives every vocab word an example sentence", async () => {
    const missing: string[] = [];
    for (const id of LEVEL_IDS) {
      const pack = await loadLevelPack(id);
      for (const word of pack.vocab) {
        if (!word.ex || !String(word.ex).trim()) missing.push(`${id} ${word.id} ${word.de}`);
      }
    }
    expect(missing).toEqual([]);
  });
});
