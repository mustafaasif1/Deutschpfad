export type LevelId = "a1" | "a2" | "b1";

export type LevelMeta = {
  id: LevelId;
  title: string;
  subtitle: string;
  exam: string;
  blurb: string;
  book: string;
  weeks: number;
  color: string;
};

export type WeekTask = {
  id: string;
  label: string;
  href: string;
};

export type Week = {
  id: number;
  title: string;
  goal: string;
  tasks: WeekTask[];
};

export type VocabWord = {
  id: string;
  de: string;
  art?: string;
  pl?: string;
  en: string;
  topic: string;
  level: string;
  ex?: string;
  note?: string;
};

export type VocabTopic = {
  id: string;
  title: string;
  blurb: string;
};

export type GrammarLesson = {
  id: string;
  title: string;
  level: string;
  minutes: number;
  html: string;
};

export type QuestionType = string;

export type Question = {
  id: string;
  set?: string;
  type: string;
  prompt: string;
  explain?: string;
  level?: string;
  options?: string[];
  answer: string | string[] | boolean | number;
  de?: string;
  words?: string[];
  vocabId?: string;
};

export type Drill = {
  id: string;
  title: string;
  blurb?: string;
  set?: string;
  sets?: string[];
};

export type TopicChunk = {
  de: string;
  en?: string;
};

export type Topic = {
  id: string;
  title: string;
  titleDe: string;
  weight?: string;
  official?: boolean;
  blurb: string;
  exam?: string;
  explain?: string;
  canDo?: string[];
  examHow?: string[];
  subtopics?: string[];
  youMust?: string[];
  traps?: string[];
  chunks?: TopicChunk[];
  vocab?: string[];
  grammar?: string[];
  schreiben?: string[];
  lesen?: string[];
  sprechen?: boolean;
};

export type ExamFormatPart = {
  name: string;
  parts?: number | string;
  minutes?: number;
  points?: number | string;
  items?: string;
  note?: string;
};

export type ExamFormat = {
  name: string;
  notThisExam?: string;
  officialUrl?: string;
  passRule?: string;
  written?: ExamFormatPart[];
  oral?: {
    parts?: number;
    minutes?: number;
    prep?: number;
    points?: number | string;
    note?: string;
  };
};

export type LesenHeadline = { id: string; text: string };
export type LesenText = { id: string; text: string };
export type LesenPerson = { id: string; text: string };
export type LesenAd = { id: string; text: string };

export type LesenPart = {
  kind: string;
  instruction: string;
  headlines?: LesenHeadline[];
  texts?: LesenText[];
  answer?: Record<string, string> | boolean;
  text?: string;
  items?: {
    q: string;
    options?: string[];
    answer?: number | boolean;
    sign?: string;
    text?: string;
  }[];
  people?: LesenPerson[];
  ads?: LesenAd[];
};

export type LesenSet = {
  id: string;
  title: string;
  timeMin?: number;
  parts: LesenPart[];
};

export type SprachbausteineSet =
  | {
      id: string;
      title: string;
      kind: "cloze";
      text: string;
      gaps: { options: string[]; answer: string }[];
    }
  | {
      id: string;
      title: string;
      kind: "bank";
      text: string;
      bank: string[];
      answer: string[];
    };

export type HoerenTurn = {
  role?: string;
  text: string;
};

export type HoerenItem = {
  statement: string;
  answer: boolean | string;
  options?: string[];
  audio?: string;
};

export type HoerenSet = {
  id: string;
  title?: string;
  paper?: string | number;
  teil?: number;
  once?: boolean;
  intro?: string;
  audio?: string;
  turns?: HoerenTurn[];
  items: HoerenItem[];
};

export type SchreibenField = { id: string; label: string };

export type SchreibenTask = {
  id: string;
  title: string;
  register: string;
  kind?: string;
  situation: string;
  situationEn?: string;
  points?: string[];
  model?: string;
  fields?: SchreibenField[];
};

export type SprechenTopic = {
  t: string;
  spine: string;
  ask?: string[];
};

export type SprechenPlan = {
  t: string;
  points: string[];
};

export type SprechenPack = {
  lead?: string;
  intro: string;
  questions?: string[];
  teil2Title?: string;
  teil2Lead?: string;
  teil2Steps?: string[];
  teil2Timer?: number;
  topics?: SprechenTopic[];
  teil3Title?: string;
  teil3Lead?: string;
  engine?: { de: string }[];
  planning?: SprechenPlan[];
};

export type Mock = {
  id: string;
  title: string;
  blurb: string;
  lesen?: string;
  sb?: string[];
  hoeren?: string[];
  schreiben?: string;
};

export type ExamPack = {
  lesen: LesenSet[];
  sprachbausteine: SprachbausteineSet[];
  hoeren: HoerenSet[];
  schreiben: SchreibenTask[];
  sprechen: SprechenPack | null;
  mocks: Mock[];
  tips: string[];
};

export type LevelPack = {
  weeks: Week[];
  vocab: VocabWord[];
  vocabTopics: VocabTopic[];
  grammar: GrammarLesson[];
  questions: Question[];
  drills: Drill[];
  exam: ExamPack;
  topics: Topic[];
  examFormat: ExamFormat | null;
};

export type PackPartial = Partial<LevelPack>;
