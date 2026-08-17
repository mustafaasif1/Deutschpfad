import type { LevelId, LevelMeta } from "@/types/content";

export const LEVEL_IDS: LevelId[] = ["a1", "a2", "b1"];

export const LEVEL_META: LevelMeta[] = [
  {
    id: "a1",
    title: "A1",
    subtitle: "Start here · telc A1",
    exam: "telc Deutsch A1",
    blurb: "Start Deutsch 1: official A1 topics, forms, ~30-word messages, group speaking.",
    book: "/books/a1.html",
    weeks: 8,
    color: "a1",
  },
  {
    id: "a2",
    title: "A2",
    subtitle: "Build fluency · telc A2",
    exam: "telc Deutsch A2",
    blurb: "Start Deutsch 2: official A2 topics, Perfekt, connectors, short letters. Not DTZ A2·B1.",
    book: "/books/a2.html",
    weeks: 8,
    color: "a2",
  },
  {
    id: "b1",
    title: "B1",
    subtitle: "Pass comfortably · telc B1",
    exam: "telc Deutsch B1",
    blurb: "Zertifikat Deutsch: official B1 topics, 90-min Lesen+SB, formal letters, oral Teil 3.",
    book: "/books/b1.html",
    weeks: 8,
    color: "b1",
  },
];

export function getMeta(id: LevelId | null | undefined): LevelMeta | null {
  if (!id) return null;
  return LEVEL_META.find((m) => m.id === id) ?? null;
}

export function isLevelId(value: string | null | undefined): value is LevelId {
  return value === "a1" || value === "a2" || value === "b1";
}
