type SpeechRole = "announcer" | "guest" | "b" | "customer" | string;

type SpeakOpts = {
  rate?: number;
  pitch?: number;
  role?: SpeechRole;
};

type VoicePack = {
  primary: SpeechSynthesisVoice | null;
  secondary: SpeechSynthesisVoice | null;
  female?: SpeechSynthesisVoice | null;
  male?: SpeechSynthesisVoice | null;
};

function scoreGermanVoice(v: SpeechSynthesisVoice | null | undefined): number {
  if (!v) return -1;
  const lang = (v.lang || "").toLowerCase();
  const name = (v.name || "").toLowerCase();
  if (!lang.startsWith("de") && !name.includes("german") && !name.includes("deutsch")) return -1;
  if (lang.startsWith("en") && !name.includes("german")) return -1;
  let score = 10;
  if (lang === "de-de" || lang === "de_de") score += 50;
  else if (lang.startsWith("de")) score += 40;
  if (/google|anna|helena|markus|vicki|siri|premium|enhanced|neural|microsoft|petra/.test(name)) score += 30;
  if (name === "anna" || name.startsWith("anna ")) score += 40;
  if (/english|en-us|en_gb|uk english|us english/.test(name)) score -= 100;
  if (v.localService) score += 5;
  return score;
}

function isFemaleVoice(v: SpeechSynthesisVoice): boolean {
  return /anna|helena|petra|sara|katja|hedda|vicki|victoria|martha|serena/.test((v.name || "").toLowerCase());
}

function isMaleVoice(v: SpeechSynthesisVoice): boolean {
  return /markus|stefan|yannick|georg|andreas|rainer|thomas|michael|otto/.test((v.name || "").toLowerCase());
}

function germanVoices(): SpeechSynthesisVoice[] {
  if (typeof window === "undefined" || !window.speechSynthesis) return [];
  return window.speechSynthesis
    .getVoices()
    .filter((v) => scoreGermanVoice(v) > 0)
    .sort((a, b) => scoreGermanVoice(b) - scoreGermanVoice(a));
}

let voicesReady = false;
let cachedDeVoice: SpeechSynthesisVoice | null = null;
let cachedVoicePack: VoicePack | null = null;
let speakGen = 0;
let currentUtterance: SpeechSynthesisUtterance | null = null;
let activeFinish: (() => void) | null = null;
let warnedNoVoice = false;
let warnedNoSynth = false;

function voicePack(): VoicePack {
  const list = germanVoices();
  if (!list.length) {
    cachedVoicePack = { primary: null, secondary: null };
    return cachedVoicePack;
  }
  const female = list.find(isFemaleVoice) || null;
  const male = list.find(isMaleVoice) || null;
  const primary = list[0];
  const secondary =
    male && male !== primary ? male : female && female !== primary ? female : list[1] || primary;
  cachedDeVoice = primary;
  cachedVoicePack = { primary, secondary, female, male };
  return cachedVoicePack;
}

function pickGermanVoice(): SpeechSynthesisVoice | null {
  return cachedVoicePack?.primary || voicePack().primary;
}

function voiceForRole(role?: SpeechRole): SpeechSynthesisVoice | null {
  const pack = cachedVoicePack || voicePack();
  if (!pack.primary) return null;
  if (role === "guest" || role === "b" || role === "customer") return pack.secondary || pack.primary;
  return pack.primary;
}

export function warmVoices(): void {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  const tryPick = () => {
    voicePack();
    if (cachedDeVoice) voicesReady = true;
  };
  tryPick();
  if (typeof speechSynthesis.onvoiceschanged !== "undefined") {
    speechSynthesis.onvoiceschanged = tryPick;
  }
  window.setTimeout(tryPick, 250);
  window.setTimeout(tryPick, 1000);
}

function warnNoVoice(): void {
  console.warn(
    "No German voice found. Install a German system voice (macOS: System Settings → Accessibility → Spoken Content).",
  );
  if (!warnedNoVoice) {
    warnedNoVoice = true;
    window.alert(
      "No German voice found on this device. The browser would otherwise read German with an English accent.\n\nmacOS: System Settings → Accessibility → Spoken Content → System Voice → download a German voice (e.g. Anna / Helena / Markus).\nThen reload this page.",
    );
  }
}

function prepGermanSpeech(text: string): string {
  return String(text || "")
    .replace(/(\d{1,2}):(\d{2})/g, "$1 Uhr $2")
    .replace(/(\d+),(\d{2})\s*Euro/gi, "$1 Euro $2")
    .replace(/B1/g, "Be eins")
    .replace(/A2/g, "A zwei")
    .replace(/A1/g, "A eins");
}

export function stopSpeak(): void {
  speakGen += 1;
  currentUtterance = null;
  if (typeof window !== "undefined" && window.speechSynthesis) {
    try {
      window.speechSynthesis.cancel();
    } catch {
      /* ignore */
    }
  }
  if (activeFinish) {
    const f = activeFinish;
    activeFinish = null;
    f();
  }
}

export function pauseMs(ms: number): Promise<void> {
  const gen = speakGen;
  return new Promise((resolve) => {
    if (!ms) {
      resolve();
      return;
    }
    window.setTimeout(() => {
      if (gen === speakGen) resolve();
    }, ms);
  });
}

export function speakAsync(text: string, opts: SpeakOpts = {}): Promise<boolean> {
  const gen = speakGen;
  return new Promise((resolve) => {
    if (gen !== speakGen) {
      resolve(false);
      return;
    }
    if (typeof window === "undefined" || !window.speechSynthesis) {
      if (!warnedNoSynth) {
        warnedNoSynth = true;
        window.alert("This browser has no speech synthesis. Use Safari or Chrome with a German voice installed.");
      }
      resolve(false);
      return;
    }
    const voice = voiceForRole(opts.role) || pickGermanVoice();
    cachedDeVoice = voice || cachedDeVoice;
    if (!voice) warnNoVoice();
    const u = new SpeechSynthesisUtterance(prepGermanSpeech(text));
    currentUtterance = u;
    u.lang = voice?.lang || "de-DE";
    u.rate = opts.rate != null ? opts.rate : 0.9;
    u.pitch = opts.pitch != null ? opts.pitch : opts.role === "guest" || opts.role === "b" ? 0.88 : 1;
    if (voice) u.voice = voice;
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      if (activeFinish === finish) activeFinish = null;
      if (currentUtterance === u) currentUtterance = null;
      resolve(gen === speakGen);
    };
    activeFinish = finish;
    u.onend = finish;
    u.onerror = finish;
    const chars = String(text || "").length;
    const fallback = Math.min(90000, Math.max(1800, (chars / Math.max(0.5, u.rate)) * 90 + 1200));
    window.setTimeout(finish, fallback);
    try {
      if (window.speechSynthesis.paused) window.speechSynthesis.resume();
      window.speechSynthesis.speak(u);
    } catch {
      finish();
    }
  });
}

export function speakLong(text: string, opts: SpeakOpts = {}): Promise<boolean> {
  const gen = speakGen;
  const s = String(text || "").trim();
  const chunks: string[] = [];
  let buf = "";
  for (let i = 0; i < s.length; i++) {
    buf += s[i];
    if (/[.!?]/.test(s[i]) && (s[i + 1] === " " || i === s.length - 1)) {
      const piece = buf.trim();
      if (piece) chunks.push(piece);
      buf = "";
      if (s[i + 1] === " ") i++;
    }
  }
  if (buf.trim()) chunks.push(buf.trim());
  if (!chunks.length) chunks.push(s || "");
  let chain = Promise.resolve(true);
  chunks.forEach((part, i) => {
    chain = chain.then(() => {
      if (gen !== speakGen) return false;
      return speakAsync(part, opts).then(() => {
        if (gen !== speakGen) return false;
        return i < chunks.length - 1 ? pauseMs(220).then(() => true) : true;
      });
    });
  });
  return chain;
}

export function speak(text: string, opts: SpeakOpts = {}): Promise<boolean> {
  stopSpeak();
  return speakAsync(text, opts);
}

export function germanVoiceName(): string | null {
  const v = cachedDeVoice || pickGermanVoice();
  return v ? `${v.name} · ${v.lang}` : null;
}

export function germanVoicePair(): string | null {
  const p = cachedVoicePack || voicePack();
  if (!p.primary) return null;
  const a = p.primary.name;
  const b = p.secondary?.name || a;
  return a === b ? a : `${a} + ${b}`;
}

export function listGermanVoices(): string[] {
  return germanVoices().map((v) => `${v.name} (${v.lang})`);
}

void voicesReady;
