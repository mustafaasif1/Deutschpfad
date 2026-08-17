import { describe, expect, it } from "vitest";
import { answerLabel, answersMatch, bySet, checkAnswer, forDrill, makeVocabQuiz, norm } from "@/lib/quiz";
import type { Question } from "@/types/content";

const mcq: Question = {
  id: "1",
  type: "mcq",
  prompt: "Pick",
  options: ["a", "b"],
  answer: "a",
};

describe("quiz", () => {
  it("normalizes ß and punctuation", () => {
    expect(norm("Straße!")).toBe("strasse");
    expect(norm("  Hello,  world. ")).toBe("hello world");
  });

  it("matches typed answers against a list", () => {
    expect(answersMatch("der Tisch", ["der Tisch", "Tisch"])).toBe(true);
    expect(answersMatch("tisch", "Tisch")).toBe(true);
    expect(answersMatch("die Tisch", "der Tisch")).toBe(false);
  });

  it("checks each question type", () => {
    expect(checkAnswer(mcq, "a")).toBe(true);
    expect(checkAnswer(mcq, "b")).toBe(false);
    expect(checkAnswer({ ...mcq, type: "tf", answer: false }, false)).toBe(true);
    expect(checkAnswer({ ...mcq, type: "tf", answer: false }, true)).toBe(false);
    expect(checkAnswer({ ...mcq, type: "order", answer: "Ich bin hier" }, "ich bin hier")).toBe(true);
    expect(checkAnswer({ ...mcq, type: "gap", answer: ["der", "Der"] }, "Der")).toBe(true);
  });

  it("labels answers for the results screen", () => {
    expect(answerLabel({ ...mcq, type: "tf", answer: true })).toBe("True / Richtig");
    expect(answerLabel({ ...mcq, answer: ["der Tisch", "Tisch"] })).toBe("der Tisch");
    expect(answerLabel(mcq)).toBe("a");
  });

  it("filters sets and drills", () => {
    const qs: Question[] = [
      { ...mcq, id: "a", set: "g1" },
      { ...mcq, id: "b", set: "g2" },
    ];
    expect(bySet(qs, "g1")).toHaveLength(1);
    expect(forDrill(qs, { id: "d", title: "d", sets: ["g1", "g2"] })).toHaveLength(2);
    expect(forDrill(qs, { id: "g1", title: "d" })).toHaveLength(1);
  });

  it("builds a production-first vocab quiz that requires the article", () => {
    const words = [
      { id: "tisch", de: "Tisch", art: "der", en: "table", topic: "home", level: "a1" },
      { id: "lampe", de: "Lampe", art: "die", en: "lamp", topic: "home", level: "a1" },
      { id: "buch", de: "Buch", art: "das", en: "book", topic: "home", level: "a1" },
      { id: "stuhl", de: "Stuhl", art: "der", en: "chair", topic: "home", level: "a1" },
    ];
    const quiz = makeVocabQuiz(words, words, 4);
    expect(quiz).toHaveLength(4);
    expect(quiz.every((q) => q.type === "type")).toBe(true);
    for (const q of quiz) {
      expect(Array.isArray(q.answer)).toBe(true);
      const answers = q.answer as string[];
      expect(answers[0]).toMatch(/^(der|die|das) /);
      expect(answers.some((a) => /^(der|die|das) /i.test(a) === false)).toBe(false);
    }
    const tisch = quiz.find((q) => (q.answer as string[])[0] === "der Tisch");
    expect(tisch).toBeTruthy();
    expect(checkAnswer(tisch!, "der Tisch")).toBe(true);
    expect(checkAnswer(tisch!, "Tisch")).toBe(false);
  });

  it("starts a longer vocab quiz with a short multiple-choice warmup", () => {
    const words = Array.from({ length: 8 }, (_, i) => ({
      id: `w${i}`,
      de: `Wort${i}`,
      art: "das",
      en: `word ${i}`,
      topic: "home",
      level: "a1",
    }));
    const quiz = makeVocabQuiz(words, words, 8);
    expect(quiz.filter((q) => q.type === "mcq")).toHaveLength(2);
    expect(quiz.filter((q) => q.type === "type")).toHaveLength(6);
  });
});
