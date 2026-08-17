import { describe, expect, it } from "vitest";
import { exampleHasLemma, peekSpans, wordLabel } from "@/lib/vocabText";
import type { VocabWord } from "@/types/content";

const tisch: VocabWord = { id: "tisch", de: "Tisch", art: "der", en: "table", topic: "home", level: "a1" };
const kueche: VocabWord = { id: "kueche", de: "Küche", art: "die", en: "kitchen", topic: "home", level: "a1" };
const streiten: VocabWord = { id: "str", de: "sich streiten", art: "", en: "to argue", topic: "people", level: "a2" };

describe("vocab text", () => {
  it("joins article and word", () => {
    expect(wordLabel(tisch)).toBe("der Tisch");
    expect(wordLabel({ de: "Hallo", art: "" })).toBe("Hallo");
  });

  it("marks the target word in an example", () => {
    const spans = peekSpans("Der Tisch steht in der Küche.", [tisch, kueche], tisch);
    const hits = spans.filter((s) => s.word);
    expect(hits.map((s) => [s.text, s.word?.en])).toEqual([
      ["Tisch", "table"],
      ["Küche", "kitchen"],
    ]);
  });

  it("matches reflexive verbs by the lemma", () => {
    const spans = peekSpans("Bitte nicht streiten.", [streiten], streiten);
    expect(spans.some((s) => s.word?.id === "str" && s.text.toLowerCase() === "streiten")).toBe(true);
    expect(exampleHasLemma("Bitte nicht streiten.", streiten)).toBe(true);
  });

  it("matches umlauts without scanning every dictionary word at each letter", () => {
    const filler: VocabWord[] = Array.from({ length: 80 }, (_, i) => ({
      id: `f${i}`,
      de: `Wohnung${i}`,
      art: "die",
      en: "flat",
      topic: "home",
      level: "a1",
    }));
    const spans = peekSpans("Die Küche ist hell.", [tisch, kueche, ...filler], kueche);
    expect(spans.some((s) => s.word?.id === "kueche" && s.text === "Küche")).toBe(true);
  });
});
