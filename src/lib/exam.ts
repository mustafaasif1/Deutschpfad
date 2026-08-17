import type { ExamFormat, HoerenSet, LevelId, LevelPack, LesenSet } from "@/types/content";

export type HoerenPaper = {
  id: string;
  title: string;
  sets: HoerenSet[];
  itemCount: number;
};

export type HoerenMeta = {
  minutes: number;
  lesenMin: number;
  sbMin: number;
  writeMin: number;
  mockMin: number;
  lead: string;
};

export function hoerenMeta(id: LevelId | null): HoerenMeta {
  if (id === "a1") {
    return {
      minutes: 20,
      lesenMin: 45,
      sbMin: 0,
      writeMin: 20,
      mockMin: 65,
      lead: "telc A1 Hörverstehen is about 20 minutes: short announcements, a shop/café dialogue, then messages. Some centres use picture matching. Read first. Teil 1 often plays once.",
    };
  }
  if (id === "a2") {
    return {
      minutes: 20,
      lesenMin: 50,
      sbMin: 0,
      writeMin: 25,
      mockMin: 70,
      lead: "telc A2 Hörverstehen is about 20 minutes: announcements plus a longer conversation. Teil 1 is often once; Teil 2 and 3 play twice. Lesen and Schreiben share one ~50-minute booklet — no Sprachbausteine paper.",
    };
  }
  return {
    minutes: 30,
    lesenMin: 90,
    sbMin: 0,
    writeMin: 30,
    mockMin: 150,
    lead: "telc B1 Hörverstehen is about 30 minutes and 20 items. Teil 1 plays once. Teil 2 (interview) twice. Teil 3 (everyday scenes) twice. Lesen + Sprachbausteine share one 90-minute booklet.",
  };
}

export function hoerenRate(id: LevelId | null): number {
  if (id === "a1") return 0.82;
  if (id === "a2") return 0.88;
  return 0.95;
}

export function officialTelcUrl(format: ExamFormat | null, id: LevelId | null): string {
  if (format?.officialUrl) return format.officialUrl;
  const level = id || "b1";
  return `https://www.telc.net/en/language-examinations/certificate-exams/german/certificate-german-telc-german-${level}/`;
}

export function groupHoerenPapers(sets: HoerenSet[]): HoerenPaper[] {
  const papers: HoerenPaper[] = [];
  const byId: Record<string, HoerenPaper> = {};
  let loose: HoerenSet[] = [];

  function pushLoose() {
    if (!loose.length) return;
    let n = papers.length + 1;
    let key = String(n);
    while (byId[key]) {
      n += 1;
      key = String(n);
    }
    const paper: HoerenPaper = { id: key, title: `Hören paper ${key}`, sets: loose.slice(), itemCount: 0 };
    byId[key] = paper;
    papers.push(paper);
    loose = [];
  }

  sets.forEach((set) => {
    if (set.paper != null && set.paper !== "") {
      pushLoose();
      const key = String(set.paper);
      if (!byId[key]) {
        const paper: HoerenPaper = { id: key, title: `Hören paper ${key}`, sets: [], itemCount: 0 };
        byId[key] = paper;
        papers.push(paper);
      }
      byId[key].sets.push(set);
    } else {
      loose.push(set);
      if (loose.length >= 3) pushLoose();
    }
  });
  pushLoose();
  papers.forEach((p) => {
    p.sets.sort((a, b) => (a.teil || 99) - (b.teil || 99));
    p.itemCount = p.sets.reduce((acc, s) => acc + ((s.items && s.items.length) || 0), 0);
  });
  return papers;
}

export function paperForHoerenIds(pack: LevelPack, ids: string[]): HoerenPaper | undefined {
  const papers = groupHoerenPapers(pack.exam.hoeren || []);
  return papers.find((p) => p.sets.some((s) => ids.includes(s.id))) || papers[0];
}

export function countLesenItems(set: LesenSet): number {
  let n = 0;
  (set.parts || []).forEach((part) => {
    if ((part.kind === "headlines" || part.kind === "ads") && part.answer && typeof part.answer === "object") {
      n += Object.keys(part.answer).length;
    } else if (part.items) n += part.items.length;
  });
  return n;
}

export function unusedKeys(allIds: string[], usedMap: Record<string, string>): string[] {
  const used: Record<string, boolean> = {};
  Object.keys(usedMap).forEach((k) => {
    used[usedMap[k]] = true;
  });
  return allIds.filter((id) => !used[id]);
}

export function deNumWord(n: number): string {
  return ["eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn"][n - 1] || String(n);
}

export function pickOralItem<T>(arr: T[] | undefined, avoid?: T): T | null {
  if (!arr || !arr.length) return null;
  if (arr.length === 1) return arr[0];
  let x: T = arr[0];
  let n = 0;
  do {
    x = arr[Math.floor(Math.random() * arr.length)];
    n += 1;
  } while (avoid && x === avoid && n < 12);
  return x;
}

export const GRAMMAR_COVERAGE: Record<LevelId, { kicker: string; text: string }> = {
  a1: {
    kicker: "A1 coverage (Start Deutsch 1)",
    text: "This academy now covers the full A1 grammar set used in telc/Goethe Start Deutsch 1: articles and plurals, sein/haben plus war/hatte, present + verb second, questions, negation including doch, accusative and dative (mir helfen, mit dem Bus), possessives, modals (mögen vs möchten), separable verbs, imperative, time and ordinals, prepositions, und/aber/denn/dann/wenn, adjectives (zu teuer, billiger als), dieser/man/etwas/welche, and survival dialogues. Grammar is tested through the four skills — there is no Sprachbausteine paper at A1.",
  },
  a2: {
    kicker: "A2 coverage (Start Deutsch 2)",
    text: "This academy covers the A2 grammar you must control for Start Deutsch 2: Perfekt, dative, Wechselpräpositionen, connectors with verb-last, separable verbs, adjective endings, comparatives, modal Präteritum, reflexives, verbs with prepositions, ja/nein/doch, zu / um … zu, polite Könnten/würde/wäre, and letter/speaking patterns. Official themes include Wohnen, Arbeit, Gesundheit, Reisen, Bank/Post/Amt, Einkaufen/Umtausch, Feste, Medien, and Meinungen. Relative clauses and passive are here for recognition on signs and ads — do not force them in a 60-word letter. Not DTZ.",
  },
  b1: {
    kicker: "B1 coverage (Zertifikat Deutsch)",
    text: "This academy covers the full telc A1–B1 grammar set used in Zertifikat Deutsch: cases and adjective endings, connectors including two-part pairs (zwar … aber, weder … noch), Konjunktiv II, relatives, zu / um zu / ohne zu, passive, reflexives, Plusquamperfekt, Futur I and the three jobs of werden, n-declension, genitive, da-/wo-compounds, Präteritum, lassen / brauchen zu / als ob, imperative, indefinites (man / jemand / irgend-), stellen/liegen pairs, modal particles, pronouns (ihn/ihm, dieser, meiner), negation (kein vs nicht), comparatives and ordinals, and questions (W-words, ob/wann, worauf vs auf wen). Packed participles are taught for Lesen unpack. Konjunktiv I, nominalisation, and rumour-modals stay recognition-first (B2 stretch). Vocabulary follows the official theme groups (housing, Amt, work, health, feelings, body, clothes, letter formulas, function words) — original exam sentences, not a copied wordlist.",
  },
};

export const COVERAGE_HONESTY: Record<LevelId, string> = {
  a1: "This pack covers the official Start Deutsch 1 themes, the grammar you must produce, and the booklet shape (Hören, Lesen+Schreiben form + ~30-word note, group oral). Browser voice trains method only. Before exam day you still need the official telc A1 Modelltest PDF + MP3, and a human partner for the oral. There is no Sprachbausteine paper at A1.",
  a2: "This pack covers official Start Deutsch 2 themes (including Einkaufen and Feste), A2 grammar you must produce (Perfekt, dative, weil, polite Könnten), and the exam shape. Relatives and passive are recognition-only. Not DTZ. Lesen and Schreiben share one ~50-minute booklet — no Sprachbausteine paper. Official telc A2 MP3 still required for real ears.",
  b1: "This pack covers Zertifikat Deutsch / telc B1 themes, the A1–B1 grammar set, Sprachbausteine, and the 225+75 point shape. You must pass written and oral separately. Browser voice is not exam acoustics — sit the official telc B1 MP3 once in weeks 7–8. Konjunktiv I stays B2 stretch.",
};

const BOOK_ANCHORS: Record<LevelId, Record<string, string>> = {
  a1: { home: "toc", plan: "ch-01", grammar: "ch-04", vocab: "ch-05", topics: "ch-05b", exam: "ch-02", lesen: "ch-06", hoeren: "ch-07", ears: "ch-07", schreiben: "ch-08", sprechen: "ch-09", practice: "ch-11", progress: "toc" },
  a2: { home: "toc", plan: "ch-01", grammar: "ch-03", vocab: "ch-07", topics: "ch-07b", exam: "ch-02", lesen: "ch-08", hoeren: "ch-09", ears: "ch-09", schreiben: "ch-10", sprechen: "ch-11", practice: "ch-13", progress: "toc" },
  b1: { home: "toc", plan: "ch-01", grammar: "ch-04", vocab: "ch-09", topics: "ch-09d", exam: "ch-02", lesen: "ch-10", hoeren: "ch-12", ears: "ch-12", schreiben: "ch-13", sprechen: "ch-14", sprachbausteine: "ch-11", practice: "ch-17", progress: "toc" },
};

export function bookHrefForRoute(levelId: LevelId | null, pathname: string, book: string): string {
  const id = levelId || "b1";
  const parts = pathname.split("/").filter(Boolean);
  const a = parts[0] || "home";
  const b = parts[1] || "";
  const map = BOOK_ANCHORS[id] || BOOK_ANCHORS.b1;
  let key = a;
  if (a === "exam") key = b || "exam";
  if (a === "schreiben") key = "schreiben";
  if (a === "drill") key = "grammar";
  return `${book}#${map[key] || map.home || "toc"}`;
}
