import type { Question } from "@/types/content";
import { answerLabel } from "@/lib/quiz";

const STUBS: Record<string, string> = {
  v2: "In a German main clause the conjugated verb stays in position 2. Only one unit sits in position 1 — the subject, a time phrase, or another chunk. Everything else follows the verb.",
  "verb first": "Yes/no questions and commands put the conjugated verb first: Kommst du? / Kommen Sie bitte!",
  unpack: "Separable verbs split in the present tense. Conjugate the core and send the prefix to the end: Ich stehe um sechs auf.",
  "prefix to the end": "This is a separable verb. The prefix leaves the stem and sits at the end of the clause.",
  "only one unit in position 1": "Position 1 holds one idea (Ich, Heute, Um acht). The verb still comes next. Do not put two units before the verb.",
  "one unit": "Treat a time or place phrase as one unit in position 1. The conjugated verb stays second.",
  irregular: "This verb is irregular: the vowel often changes in du/er/sie (du fährst, er isst, sie spricht). Learn those forms as chunks.",
  "irregular.": "This verb is irregular: the vowel often changes in du/er/sie. Learn the changed form with the subject pronoun.",
  "weil end": "weil opens a subordinate clause, so the conjugated verb moves to the end: Ich lerne Deutsch, weil ich in Berlin wohne.",
  "weil + verb last": "weil is a subordinating conjunction. The conjugated verb goes to the end of the weil-clause.",
  weil: "weil means because and sends the verb to the end. Main clause stays verb-second; the weil-clause is verb-last.",
  "dass + verb last": "dass means that and sends the conjugated verb to the end: Ich glaube, dass er heute kommt.",
  "obwohl + verb last": "obwohl means although. It is subordinating, so the verb goes last: Obwohl es regnet, gehe ich spazieren.",
  "trotzdem + v2": "trotzdem (nevertheless) is an adverb, not a conjunction like obwohl. It can sit in position 1; the verb stays second.",
  "denn does not move the verb": "denn means because but it does not send the verb last. Word order stays like a main clause: Ich bleibe zu Hause, denn ich bin krank.",
  "dann in position 1, verb second": "dann (then) can fill position 1. The conjugated verb still comes next: Dann gehe ich nach Hause.",
  "mit + dat": "mit always takes the dative: mit dem Bus, mit der Bahn, mit einem Freund.",
  "mit + dativ": "mit always takes the dative: mit dem Bus, mit der Bahn, mit einem Freund.",
  "für + akk": "für always takes the accusative: für dich, für den Freund, für ein Ticket.",
  "für is always accusative": "für never takes dative. Use accusative after it: für den Mann, für die Frau, für das Kind.",
  "helfen + dat": "helfen takes the dative person: Ich helfe der Frau / ihm / Ihnen. There is no direct object.",
  "antworten + dat": "antworten takes a dative person: Ich antworte dem Lehrer. The thing you answer is often auf + Akk.",
  "wo? dat": "wo? asks for a location, so two-way prepositions take dative: in der Stadt, im Kino, auf der Arbeit.",
  akk: "This slot is accusative — the direct object, or motion after a two-way preposition (wohin?).",
  "akk m": "Masculine accusative changes: der → den, ein → einen, mein → meinen.",
  "wohin? → akk. ins = in das": "wohin? is motion, so in takes accusative. ins is the contraction of in das.",
  "ich bin": "Age, origin, profession, and location use sein: Ich bin 24 Jahre alt. Ich bin in Berlin. Never Ich habe 24 Jahre.",
  "du hast": "du of haben is hast. Use haben for possessions, Hunger, Durst, and Zeit.",
  "er hat": "er/sie/es of haben is hat.",
  "wir sind": "wir of sein is sind. Location and identity use sein.",
  "ihr seid": "ihr of sein is seid (not sind). sind is for wir/sie/Sie.",
  "sie ist": "sie meaning she takes ist. sie meaning they takes sind.",
  "sie sind": "sie (they) and Sie (formal you) both take sind.",
  "ich war": "war is simple past of sein (ich/er/sie). Use it for was/were in stories and the exam’s written past.",
  "du warst": "du of sein in Präteritum is warst.",
  "wir waren": "wir of sein in Präteritum is waren.",
  "ich + -e": "ich in the present tense usually ends in -e: ich wohne, ich lerne, ich heiße.",
  "du + -st": "du in the present tense usually ends in -st: du wohnst, du lernst. Watch irregular vowels: du fährst.",
  "-e": "ich present-tense ending is -e on regular verbs.",
  "-en": "wir/sie/Sie present-tense ending is -en — the same as the infinitive on regular verbs.",
  "-ung": "Nouns ending in -ung are almost always feminine: die Wohnung, die Rechnung, die Übung.",
  "-keit": "Nouns ending in -keit or -heit are feminine: die Freundlichkeit, die Krankheit.",
  "ge- + t": "Regular Perfekt: ge- + stem + -t, with haben for most verbs: ich habe gemacht, gelernt, gekauft.",
  "no ge-": "Verbs with inseparable prefixes (be-, ver-, er-, ent-, emp-, miss-) and -ieren verbs do not take ge- in the past participle.",
  "be- → no ge-": "be- is inseparable. Past participle is bezahlt, not gebezahlt.",
  "-ieren: no ge-": "Verbs ending in -ieren skip ge-: informiert, studiert, diskutiert.",
  "haben + gegessen": "essen is irregular: past participle gegessen, usually with haben: Ich habe Pizza gegessen.",
  "haben + eingekauft": "einkaufen is separable. Perfekt: habe eingekauft — ge- sits between prefix and stem.",
  "gehen + sein": "gehen uses sein in the Perfekt because it is a change of place: Ich bin nach Hause gegangen.",
  "zu + dem = zum": "zu + dem contracts to zum: zum Bahnhof, zum Arzt. zu + der becomes zur.",
  "zum = zu dem": "zum is zu + dem (masculine/neuter dative).",
  "zur = zu der arbeit": "zur is zu + der: zur Arbeit, zur Schule, zur Post.",
  "zu hause = at home": "zu Hause means at home (location). nach Hause means going home (direction).",
  "um + clock time": "Clock time takes um: um acht Uhr, um halb neun. Days take am: am Montag.",
  "am + day": "Days and parts of the day often take am: am Montag, am Abend, am Wochenende.",
  "nicht + adjective": "nicht usually stands before the adjective or extra information: Das ist nicht teuer. kein is for nouns.",
  "mein like ein": "Possessives decline like ein-words: mein Bruder, meine Adresse, meinen Ausweis (masculine accusative).",
  "meinen": "meinen is masculine accusative: Ich suche meinen Ausweis / meinen Bruder.",
  unsere: "unser + feminine/plural adds -e: unsere Adresse, unsere Kinder. Masculine nominative stays unser.",
  "ein-words: m akk = -en": "ein, kein, mein in masculine accusative take -en: einen, keinen, meinen.",
  "ein → einen in m akk": "Masculine accusative of ein is einen: Ich kaufe einen Tisch.",
  "diesen like den": "dieser declines like der: masculine accusative is diesen, like den.",
  "akk m after der: -en": "After der-words, masculine accusative adjectives and articles use -en: den alten Mann.",
  "plural after die: -en": "After die in the plural, mixed/weak adjectives often end in -en: die kleinen Kinder.",
  "sich interessieren für": "The verb is sich interessieren für + Akkusativ: Ich interessiere mich für Musik.",
  "warten auf + akk": "warten auf takes accusative: Ich warte auf den Bus / auf dich.",
  "denken an → daran": "denken an + thing. If you drop the noun, use daran: Ich denke oft daran.",
  "um … zu, same subject": "um … zu + infinitive needs the same subject in both parts: Ich lerne Deutsch, um in Berlin zu arbeiten.",
  "zu + infinitive": "English to + verb is often zu + infinitive: Es ist wichtig, pünktlich zu sein.",
  "zu tucks in": "With separable verbs, zu sits between prefix and stem: aufzustehen, anzurufen.",
  "lass uns + infinitive, no zu": "Lass uns + infinitive (no zu): Lass uns Kaffee trinken.",
  "würde + infinitive": "würde + infinitive is the polite / unreal form: Ich würde gern kommen. A firm future is werde.",
  "sollen": "sollen is supposed to / should: Ich soll um acht da sein. It is also how you report instructions.",
  "müssen": "müssen is must / have to: Ich muss arbeiten. nicht müssen means don’t have to, not must not (that is nicht dürfen).",
  "er will": "er/sie/es of wollen is will: Er will Deutsch lernen. Not *wollt or *willst.",
  "du musst": "du of müssen is musst (double s).",
  "ich sehe": "sehen is irregular: ich sehe, du siehst, er sieht. Accusative for the thing you see.",
  "sich setzen = the move": "sich setzen is the action of sitting down. sitzen is the state of already sitting.",
  "lesen skill": "In Lesen, hunt the word that matches the question. Guess if you must — never leave a blank.",
  context: "The correct option is the one that fits this exam situation, not a word-for-word English calque.",
  synonyms: "The paper often paraphrases. Match meaning, not the identical word from the text.",
  "ii vs i": "Konjunktiv II (würde / wäre / hätte) is unreal or polite. Indicative (werde / bin / habe) is a real fact or plan.",
  process: "This form describes an action in progress or an event, not a finished state.",
  doubt: "This marker shows uncertainty (wohl, vielleicht, Konjunktiv). Do not treat it as a confirmed fact.",
  man: "man means one / people in general. It takes er-forms: man sagt, man kann. Not der Mann.",
  mir: "mir is the dative of ich (to me). mich is accusative (me as direct object).",
  wir: "wir means we and takes -en: wir sind, wir haben, wir wohnen.",
  zu: "zu can be a preposition (zu + Dativ), the infinitive marker, or too + adjective. Read the slot.",
  "sei!": "du-imperative of sein is Sei! Formal is Seien Sie! Not *Bist or *Sind as a command.",
  doch: "doch can contradict a negative, soften a command, or mean after all. Here it belongs in this spoken pattern.",
  "so … wie": "Equality uses so … wie: so groß wie. Inequality uses als: größer als.",
  weekend: "am Wochenende is the set phrase for at the weekend.",
  "die tür": "Tür is feminine: die Tür, die Türen. Accusative stays die Tür.",
  kinder: "Kind is neuter (das Kind); plural is die Kinder.",
  "die züge": "Zug is masculine (der Zug); umlaut plural die Züge.",
  gemacht: "machen is regular: past participle gemacht with haben.",
  abgesagt: "absagen is separable: absagen → habe abgesagt (ge- between prefix and stem).",
  "wehtun": "weh tun takes a dative person: Mir tut der Kopf weh.",
  "weh tun": "weh tun takes a dative person: Mir tut der Kopf weh.",
  wenige: "wenige means few. After it, nouns stay in the expected case; it is not a der-word table.",
  jemand: "jemand is someone. Accusative is often jemanden in careful German; dative jemandem.",
  nichts: "nichts means nothing. Use it without an article: Ich habe nichts verstanden. Not *kein nichts.",
  cheaper: "Comparatives add -er: billiger, kleiner. than is als, not wie.",
  kleiner: "klein → kleiner (comparative). Equality is so klein wie; inequality is kleiner als.",
  "dat set": "This verb or preposition wants dative (dem / der / den + n on many plurals).",
  "akk set": "This slot is accusative (den / die / das / einen).",
  "zum arzt": "zu + person or professional: zum Arzt, zur Bank. Dative, often contracted.",
  "würde gern + infinitive": "Ich würde gern + infinitive is the polite wish: Ich würde gern kommen.",
  "wurde gemacht": "wurde + participle is a passive event: Das Haus wurde gebaut. ist gemacht often describes the result.",
  "wollte = wanted to": "wollte is past of wollen: Ich wollte kommen, aber…",
  "wohl = guess, not a confirmed fact": "wohl here means probably, not well. It marks a guess.",
  "worum = about what. warum = why": "worum (about what) vs warum (why). They are not interchangeable.",
  "zu + adjective": "zu + adjective means too: zu teuer, zu spät, zu klein.",
};

const SET_HINTS: Record<string, string> = {
  "a1-sein-haben": "Age, origin, job, and location use sein. Hunger, Durst, Zeit, and things you own use haben.",
  "a1-articles": "Learn der/die/das with the noun. All plurals take die in nominative. ein/eine follow gender; masculine accusative is einen.",
  "a1-alphabet": "Spell with German letter names (we, jot, fau). ß is ss, never B. Contrast -zehn (teens) with -zig (tens).",
  "a1-present": "Verb second in statements. ich -e, du -st, er/sie/es -t, wir/sie/Sie -en. Irregulars change the vowel in du/er.",
  "a1-separable": "Present: conjugate the core, prefix last. With a modal, keep the infinitive in one word: Ich muss aufstehen.",
  "a1-questions": "Yes/no = verb first. W-questions: question word, then verb, then subject.",
  "a1-negation": "kein with nouns (kein Brot). nicht with verbs, adjectives, and extra information.",
  "a1-prepositions": "zu Hause = at home, nach Hause = going home. mit + Dativ. um + clock time, am + day.",
  gender: "Gender is part of the word. -ung/-keit/-heit feminine, -chen/-lein neuter. All plurals: die in Nom/Akk.",
  akkusativ: "Direct objects and wohin? motion take accusative. Masculine der → den, ein → einen.",
  dativ: "Indirect objects and wo? location (with two-way prepositions) take dative. helfen, gehören, danken, mit, bei, zu, von, nach, seit.",
  "cases-mix": "Ask: is this the person (often Dativ) or the thing (often Akkusativ)? wo? = Dat, wohin? = Akk.",
};

function keyOf(s: string): string {
  return s
    .toLowerCase()
    .replace(/ß/g, "ss")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ")
    .replace(/[.!]+$/g, "")
    .trim();
}

function isFullExplanation(text: string): boolean {
  if (text.length >= 90) return true;
  if (text.length >= 48 && /[.!?].*\s/.test(text)) return true;
  return (
    text.length >= 40 &&
    /\b(the|this|use|takes|means|because|always|never|correct|german|verb|clause)\b/i.test(text)
  );
}

function plusCase(raw: string): string | null {
  const m = raw.match(/^(.+?)\s*\+\s*(dat(?:iv)?|akk(?:usativ)?|gen(?:itiv)?)\.?$/i);
  if (!m) return null;
  const left = m[1].trim();
  const code = m[2].toLowerCase();
  if (code.startsWith("dat")) {
    return `${left} always takes the dative (dem / der / den, or mir / dir / ihm). Say the whole chunk together.`;
  }
  if (code.startsWith("akk")) {
    return `${left} always takes the accusative (den / die / das, or mich / dich / ihn). Masculine articles add -en.`;
  }
  return `${left} takes the genitive in careful written German (des / der). Spoken German sometimes uses von + Dativ instead.`;
}

function verbLast(raw: string): string | null {
  const m = raw.match(/^(\S+)\s*\+?\s*verb last\.?$/i);
  if (!m) return null;
  return `${m[1]} opens a subordinate clause, so the conjugated verb moves to the end of that clause. The main clause still keeps verb-second.`;
}

function expandBody(q: Question): string {
  const raw = String(q.explain || "").trim();
  const answer = answerLabel(q);
  const prompt = String(q.prompt || "");

  if (!raw || keyOf(raw) === keyOf(answer) || keyOf(raw) === keyOf(prompt)) {
    return fromAnswer(q, answer);
  }
  if (isFullExplanation(raw)) return raw;

  const mapped = STUBS[keyOf(raw)];
  if (mapped) return mapped;

  const cased = plusCase(raw);
  if (cased) return cased;
  const last = verbLast(raw);
  if (last) return last;

  if (/^(ich|du|er|sie|es|wir|ihr)\s+\S+/i.test(raw) && raw.length < 28) {
    return `The correct conjugated form is “${raw.replace(/\.$/, "")}”. Learn pronoun + verb as one chunk — do not rebuild it from English.`;
  }

  const sentence = /[.!?]$/.test(raw) ? raw : `${raw.replace(/[.]+$/, "")}.`;
  return `The pattern you need is: ${sentence} Hold the full German answer, not a word-for-word English order.`;
}

function fromAnswer(q: Question, answer: string): string {
  if (q.type === "tf") {
    return q.answer
      ? "The statement is true. This is the form telc expects — keep it as a ready-made chunk."
      : `The statement is false. The German you want is along the lines of “${answer}”.`;
  }
  if (String(q.prompt || "").length && q.set?.startsWith("topic-")) {
    return `English: ${q.prompt}. Say the whole German sentence as one chunk: “${answer}”. Do not translate word by word in the oral.`;
  }
  return `The correct answer is “${answer}”. Say it aloud once, then look back at the lesson table if the ending or article still feels random.`;
}

function setHint(q: Question): string {
  const set = String(q.set || "");
  if (SET_HINTS[set]) return SET_HINTS[set];
  const prefix = Object.keys(SET_HINTS).find((k) => set.startsWith(k));
  return prefix ? SET_HINTS[prefix] : "";
}

function mentions(text: string, answer: string): boolean {
  const a = keyOf(answer);
  if (!a) return true;
  if (a === "true / richtig" || a === "false / falsch") return true;
  if (a.length <= 2) {
    return /the correct answer is/i.test(text);
  }
  return keyOf(text).includes(a.slice(0, Math.min(a.length, 24)));
}

export function enrichExplain(q: Question): string {
  const answer = answerLabel(q);
  const body = expandBody(q);
  const parts = [body];
  if (!mentions(body, answer) && answer) {
    parts.push(`The correct answer is “${answer}”.`);
  }
  const hint = setHint(q);
  if (hint && body.length < 140 && !keyOf(body).includes(keyOf(hint).slice(0, 18))) {
    parts.push(hint);
  }
  return parts.join(" ").replace(/\s+/g, " ").trim();
}
