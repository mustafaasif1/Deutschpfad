import { describe, expect, it } from "vitest";
import { enrichExplain } from "@/lib/explain";
import type { Question } from "@/types/content";

const base: Question = {
  id: "q",
  type: "mcq",
  prompt: "Fill",
  options: ["a", "b"],
  answer: "a",
};

describe("enrichExplain", () => {
  it("expands telegram stubs into a full teaching sentence", () => {
    const text = enrichExplain({ ...base, explain: "V2." });
    expect(text.toLowerCase()).toContain("position 2");
    expect(text).toContain("“a”");
  });

  it("expands preposition + case shorthand", () => {
    const text = enrichExplain({ ...base, answer: "mit dem Bus", explain: "mit + Dat" });
    expect(text.toLowerCase()).toContain("dative");
    expect(text).toContain("mit dem Bus");
  });

  it("expands verb-last conjunctions", () => {
    const text = enrichExplain({ ...base, answer: "weil ich krank bin", explain: "weil + verb last" });
    expect(text.toLowerCase()).toContain("end");
    expect(text.toLowerCase()).toContain("weil");
  });

  it("keeps a real explanation", () => {
    const full =
      "Age uses sein, never haben. Say Ich bin 24 Jahre alt. Ich habe 24 Jahre is an English calque and loses easy points.";
    expect(enrichExplain({ ...base, answer: "Ich bin 24 Jahre alt", explain: full })).toBe(full);
  });

  it("does not just repeat the German on topic chunks", () => {
    const text = enrichExplain({
      ...base,
      set: "topic-personal",
      prompt: "Hello. My name is … and I come from …",
      answer: "Guten Tag. Ich heiße … und komme aus …",
      explain: "Guten Tag. Ich heiße … und komme aus …",
    });
    expect(text.toLowerCase()).toContain("chunk");
    expect(text).toContain("Hello");
  });
});
