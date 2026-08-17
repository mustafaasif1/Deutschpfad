import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const files = [
  "src/content/a1/vocab.js",
  "src/content/a1/vocab-extra.js",
  "src/content/a2/vocab.js",
  "src/content/a2/vocab-extra.js",
  "src/content/b1/vocab.js",
  "src/content/b1/vocab-extra.js",
];

const SPECIAL = {
  Hallo: ["Hallo, ich heiße Anna.", "Hello, my name is Anna."],
  "Guten Tag": ["Guten Tag, ich suche das Rathaus.", "Good day, I am looking for the town hall."],
  "Guten Morgen": ["Guten Morgen, der Kurs beginnt um neun.", "Good morning, the course starts at nine."],
  "Guten Abend": ["Guten Abend, ein Tisch für zwei bitte.", "Good evening, a table for two please."],
  Tschüss: ["Tschüss, bis morgen im Kurs.", "Bye, see you tomorrow in class."],
  "Auf Wiedersehen": ["Auf Wiedersehen und vielen Dank für Ihre Hilfe.", "Goodbye and thank you for your help."],
  Bitte: ["Einen Kaffee bitte.", "A coffee please."],
  Danke: ["Danke für den Kaffee.", "Thank you for the coffee."],
  Entschuldigung: ["Entschuldigung, wo ist der Bahnhof?", "Excuse me, where is the station?"],
  sein: ["Ich möchte pünktlich sein.", "I want to be on time."],
  haben: ["Haben Sie Zeit? Ich möchte einen Termin haben.", "Do you have time? I would like to have an appointment."],
  heißen: ["Wie heißen Sie? Ich heiße Anna.", "What is your name? My name is Anna."],
  kommen: ["Können Sie bitte um drei kommen?", "Can you please come at three?"],
  gehen: ["Ich muss jetzt gehen, der Bus kommt.", "I have to go now, the bus is coming."],
  machen: ["Kann ich bitte ein Foto machen?", "Can I take a photo please?"],
  wohnen: ["Wo wohnen Sie in der Stadt?", "Where do you live in the city?"],
  arbeiten: ["Wo arbeiten Sie — im Büro oder zu Hause?", "Where do you work — in the office or at home?"],
  weil: ["Ich bleibe zu Hause, weil ich krank bin.", "I am staying home because I am ill."],
  dass: ["Ich hoffe, dass der Bus pünktlich kommt.", "I hope that the bus arrives on time."],
  wenn: ["Wenn der Brief kommt, rufe ich Sie an.", "If the letter arrives, I will call you."],
  als: ["Als ich ankam, war das Amt schon zu.", "When I arrived, the office was already closed."],
  denn: ["Ich bleibe hier, denn ich warte auf den Arzt.", "I am staying here, because I am waiting for the doctor."],
  deshalb: ["Der Zug hat Verspätung, deshalb komme ich später.", "The train is delayed, so I will arrive later."],
  dann: ["Zuerst der Ausweis, dann das Formular.", "First the ID card, then the form."],
  danach: ["Wir unterschreiben, danach bekommen wir den Schlüssel.", "We sign, after that we get the key."],
  gut: ["Der Kurs ist gut, ich lerne viel.", "The course is good, I am learning a lot."],
  schlecht: ["Die Verbindung ist schlecht, ich rufe später an.", "The connection is bad, I will call later."],
  groß: ["Die Wohnung ist groß genug für uns.", "The flat is big enough for us."],
  klein: ["Das Zimmer ist klein, aber hell.", "The room is small but bright."],
  neu: ["Ich brauche eine neue Meldebescheinigung.", "I need a new registration certificate."],
  alt: ["Der Pass ist alt, ich beantrage einen neuen.", "The passport is old, I am applying for a new one."],
  schön: ["Die Lage ist schön, nah am Park.", "The location is nice, close to the park."],
  Null: ["Die Hausnummer ist Null? Nein, das ist zwölf.", "The house number is zero? No, it is twelve."],
  eins: ["Ich möchte eins, bitte — das kleine Brot.", "I would like one, please — the small loaf."],
  zwei: ["Ich kaufe zwei Fahrkarten nach Köln.", "I am buying two tickets to Cologne."],
  finden: ["Wie finden Sie den Kurs?", "How do you find the course?"],
  glauben: ["Glauben Sie, dass der Termin stimmt?", "Do you believe that the appointment is correct?"],
  stimmen: ["Die Adresse muss stimmen.", "The address has to be correct."],
  einverstanden: ["Ich bin einverstanden mit dem Termin am Dienstag.", "I agree with the appointment on Tuesday."],
};

const SUBORD = new Set(["weil", "dass", "wenn", "als", "obwohl", "damit", "während", "bevor", "nachdem", "falls", "ob", "sodass", "indem"]);
const ADVERB = new Set(["deshalb", "darum", "deswegen", "dann", "danach", "trotzdem", "sonst", "außerdem", "jedoch", "dennoch", "also", "folglich"]);
const PLURAL = /^(Eltern|Leute|Möbel|Kosten|Ferien|Geschwister|Großeltern|Schwiegereltern|Lebensmittel|Medien|Nachrichten|Unterlagen|Angaben|Nebenkosten|Heizkosten|Daten|Möbel|Leute)$/i;

function firstArt(art) {
  return String(art || "")
    .split("/")[0]
    .trim()
    .toLowerCase();
}

function accArt(art) {
  if (art === "der") return "den";
  if (art === "die") return "die";
  if (art === "das") return "das";
  return art;
}

function np(w) {
  const art = firstArt(w.art);
  if (["der", "die", "das"].includes(art)) return `${art} ${w.de}`;
  return w.de;
}

function accNp(w) {
  const art = firstArt(w.art);
  if (["der", "die", "das"].includes(art)) return `${accArt(art)} ${w.de}`;
  return w.de;
}

function looksLikeVerb(w) {
  const de = String(w.de || "").replace(/^sich\s+/i, "");
  if (/^to /i.test(w.en || "")) return true;
  if (w.art) return false;
  if (/\s/.test(de)) return false;
  return /^[a-zäöüß]/.test(de) && /(en|eln|ern|ieren)$/.test(de);
}

function looksLikeAdj(w) {
  if (w.art || looksLikeVerb(w)) return false;
  const de = String(w.de || "");
  return /^[a-zäöüß]/.test(de) && !/\s/.test(de) && de.length < 22;
}

function isSentence(de) {
  return /[?!]$/.test(de) || (de.split(/\s+/).length >= 4 && /[.?!]$/.test(de));
}

function pair(de, en) {
  const cap = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
  return { ex: cap(de), exEn: cap(en) };
}

function makeExample(w) {
  const de = String(w.de || "").trim();
  const en = String(w.en || "").trim();
  if (SPECIAL[de]) return pair(SPECIAL[de][0], SPECIAL[de][1]);
  if (isSentence(de)) return pair(de.endsWith(".") || de.endsWith("?") || de.endsWith("!") ? de : `${de}.`, en);
  if (SUBORD.has(de.toLowerCase())) {
    return pair(`Ich bleibe zu Hause, ${de} ich krank bin.`, `I am staying home ${en} I am ill.`);
  }
  if (ADVERB.has(de.toLowerCase())) {
    return pair(`Der Bus hat Verspätung, ${de} komme ich später.`, `The bus is delayed, ${en} I arrive later.`);
  }
  if (w.topic === "numbers" && !w.art) {
    return pair(`Ich brauche ${de} Fahrkarten bitte.`, `I need ${en} tickets please.`);
  }
  if (w.topic === "greetings" && !w.art) {
    return pair(`${de} — bis morgen im Kurs.`, `${en} — see you tomorrow in class.`);
  }
  if (looksLikeVerb(w)) {
    if (/^sich\s+/i.test(de)) {
      const verb = de.replace(/^sich\s+/i, "");
      return pair(`Wir wollen uns nicht ${verb}.`, `We do not want ${en}.`);
    }
    return pair(`Ich möchte heute ${de}.`, `I would like ${en} today.`);
  }
  if (looksLikeAdj(w)) {
    return pair(`Der Termin ist ${de}.`, `The appointment is ${en}.`);
  }
  if (!w.art && /\s/.test(de)) {
    return pair(`${de} — das sage ich oft im Amt.`, `${en} — I often say that at the office.`);
  }

  const nom = np(w);
  const acc = accNp(w);
  const plural = PLURAL.test(de) || /\b(people|parents|furniture|costs|holidays|relatives)\b/i.test(en);

  if (plural) {
    return pair(`Hier sind ${nom}.`, `Here are the ${en}.`);
  }

  const topic = w.topic;
  const level = w.level || "a1";
  if (topic === "people") return pair(`Das ist ${nom}.`, `This is ${en}.`);
  if (topic === "home" || topic === "travel") return pair(`Wo ist ${nom}?`, `Where is the ${en}?`);
  if (topic === "food" || topic === "shopping") return pair(`Ich kaufe ${acc}.`, `I am buying the ${en}.`);
  if (topic === "work") return pair(`Ich brauche ${acc} morgen.`, `I need the ${en} tomorrow.`);
  if (topic === "health") return pair(`Ich suche ${acc}.`, `I am looking for the ${en}.`);
  if (topic === "services" || topic === "examday") return pair(`Bitte bringen Sie ${acc} mit.`, `Please bring the ${en} with you.`);
  if (topic === "school" || topic === "opinions" || topic === "media") {
    const verb = plural ? "sind" : "ist";
    const enVerb = plural ? "are" : "is";
    return pair(`${nom} ${verb} wichtig.`, `The ${en} ${enVerb} important.`);
  }
  if (topic === "daily") return pair(`Heute geht es um ${acc}.`, `Today it is about the ${en}.`);
  if (topic === "connectors") return pair(`Ich lerne ${de} in diesem Satz.`, `I am learning “${en}” in this sentence.`);
  if (level === "b1" || level === "b2") {
    return pair(`${nom} steht im Brief vom Amt.`, `The ${en} is in the letter from the office.`);
  }
  return pair(`Hier ist ${nom}.`, `Here is the ${en}.`);
}

function stripEx(block) {
  return block
    .replace(/,?\s*"exEn"\s*:\s*"(?:\\.|[^"\\])*"/g, "")
    .replace(/,?\s*"ex"\s*:\s*"(?:\\.|[^"\\])*"/g, "")
    .replace(/,?\s*exEn:"(?:\\.|[^"\\])*"/g, "")
    .replace(/,?\s*ex:"(?:\\.|[^"\\])*"/g, "")
    .replace(/\s+,/g, ",")
    .replace(/,\s*}/, "}");
}

function inject(src, byKey) {
  return src.replace(/\{[^{}]+\}/g, (block) => {
    const idMatch = block.match(/id:\s*"([^"]+)"/) || block.match(/"id":\s*"([^"]+)"/);
    const deMatch = block.match(/de:\s*"([^"]+)"/) || block.match(/"de":\s*"([^"]+)"/);
    if (!idMatch || !deMatch) return block;
    const extra = byKey.get(`${idMatch[1]}\0${deMatch[1]}`);
    if (!extra) return block;
    const clean = stripEx(block);
    if (/"id":/.test(clean)) {
      return clean.replace(/\n(\s*)\}$/, () => `,\n    "ex": ${JSON.stringify(extra.ex)},\n    "exEn": ${JSON.stringify(extra.exEn)}\n  }`);
    }
    return clean.replace(/\}$/, `, ex:${JSON.stringify(extra.ex)}, exEn:${JSON.stringify(extra.exEn)}}`);
  });
}

const missing = [];
for (const rel of files) {
  const abs = path.resolve(root, "..", rel);
  const mod = await import(`${pathToFileURL(abs).href}?t=${Date.now()}`);
  const words = mod.default?.vocab || [];
  const byKey = new Map();
  for (const word of words) {
    const extra = makeExample(word);
    byKey.set(`${word.id}\0${word.de}`, extra);
    if (!extra.ex.toLowerCase().includes(String(word.de).replace(/^sich\s+/i, "").toLowerCase())) {
      missing.push(`${rel} ${word.id} ${word.de} → ${extra.ex}`);
    }
  }
  const next = inject(readFileSync(abs, "utf8"), byKey);
  writeFileSync(abs, next);
  console.log(rel, "updated", byKey.size);
}
if (missing.length) {
  console.log("lemma not in example:", missing.length);
  console.log(missing.slice(0, 40).join("\n"));
}
