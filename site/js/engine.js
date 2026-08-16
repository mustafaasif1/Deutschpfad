(function () {
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  function norm(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/ß/g, "ss")
      .replace(/[.,!?;:]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function answersMatch(got, expected) {
    const g = norm(got);
    const list = Array.isArray(expected) ? expected : [expected];
    return list.some(function (e) {
      return g === norm(e);
    });
  }

  function bySet(setId) {
    return (window.QUESTIONS || []).filter(function (q) {
      return q.set === setId;
    });
  }

  function forDrill(drill) {
    if (drill.sets) {
      return drill.sets.reduce(function (acc, s) {
        return acc.concat(bySet(s));
      }, []);
    }
    return bySet(drill.set);
  }

  function vocabByTopic(topic) {
    return (window.VOCAB || []).filter(function (w) {
      return w.topic === topic;
    });
  }

  function makeVocabQuiz(words, n) {
    const pool = words.length >= 4 ? words : window.VOCAB || [];
    const pick = shuffle(pool).slice(0, Math.min(n || 12, pool.length));
    return pick.map(function (w, i) {
      const label = (w.art ? w.art + " " : "") + w.de;
      const distract = shuffle(pool.filter(function (x) { return x.id !== w.id; })).slice(0, 3);
      const options = shuffle([w.en].concat(distract.map(function (d) { return d.en; })));
      return {
        id: "vq-" + w.id + "-" + i,
        type: i % 3 === 0 ? "type" : "mcq",
        prompt: i % 3 === 0
          ? "Type the German" + (w.art ? " (with article if it has one)" : "") + " for: “" + w.en + "”"
          : "What does “" + label + "” mean?",
        options: options,
        answer: i % 3 === 0 ? [label.trim(), w.de] : w.en,
        explain: "German: " + label + (w.pl ? " · plural hint: " + w.pl : "") + " — English: " + w.en,
        level: w.level,
        vocabId: w.id,
      };
    });
  }

  let voicesReady = false;
  let cachedDeVoice = null;
  let cachedVoicePack = null;
  let speakGen = 0;
  let currentUtterance = null;
  let activeFinish = null;

  function germanVoices() {
    return (window.speechSynthesis ? window.speechSynthesis.getVoices() : []).filter(function (v) {
      return scoreGermanVoice(v) > 0;
    }).sort(function (a, b) { return scoreGermanVoice(b) - scoreGermanVoice(a); });
  }

  function scoreGermanVoice(v) {
    if (!v) return -1;
    const lang = (v.lang || "").toLowerCase();
    const name = (v.name || "").toLowerCase();
    if (lang.indexOf("de") !== 0 && name.indexOf("german") < 0 && name.indexOf("deutsch") < 0) return -1;
    if (lang.indexOf("en") === 0 && name.indexOf("german") < 0) return -1;
    let score = 10;
    if (lang === "de-de" || lang === "de_de") score += 50;
    else if (lang.indexOf("de") === 0) score += 40;
    if (/google|anna|helena|markus|vicki|siri|premium|enhanced|neural|microsoft|petra/.test(name)) score += 30;
    if (name === "anna" || name.indexOf("anna ") === 0) score += 40;
    if (/english|en-us|en_gb|uk english|us english/.test(name)) score -= 100;
    if (v.localService) score += 5;
    return score;
  }

  function isFemaleVoice(v) {
    return /anna|helena|petra|sara|katja|hedda|vicki|victoria|martha|serena/.test((v.name || "").toLowerCase());
  }

  function isMaleVoice(v) {
    return /markus|stefan|yannick|georg|andreas|rainer|thomas|michael|otto/.test((v.name || "").toLowerCase());
  }

  function voicePack() {
    const list = germanVoices();
    if (!list.length) {
      cachedVoicePack = { primary: null, secondary: null };
      return cachedVoicePack;
    }
    const female = list.filter(isFemaleVoice)[0] || null;
    const male = list.filter(isMaleVoice)[0] || null;
    const primary = list[0];
    let secondary = male && male !== primary ? male : (female && female !== primary ? female : list[1] || primary);
    cachedDeVoice = primary;
    cachedVoicePack = { primary: primary, secondary: secondary, female: female, male: male };
    return cachedVoicePack;
  }

  function pickGermanVoice() {
    return (cachedVoicePack && cachedVoicePack.primary) || voicePack().primary;
  }

  function voiceForRole(role) {
    const pack = cachedVoicePack || voicePack();
    if (!pack.primary) return null;
    if (role === "guest" || role === "b" || role === "customer") return pack.secondary || pack.primary;
    return pack.primary;
  }

  function warmVoices() {
    if (!window.speechSynthesis) return;
    const tryPick = function () {
      voicePack();
      if (cachedDeVoice) voicesReady = true;
    };
    tryPick();
    if (typeof speechSynthesis.onvoiceschanged !== "undefined") {
      speechSynthesis.onvoiceschanged = tryPick;
    }
    setTimeout(tryPick, 250);
    setTimeout(tryPick, 1000);
  }

  function warnNoVoice() {
    console.warn("No German voice found. Install a German system voice (macOS: System Settings → Accessibility → Spoken Content).");
    if (!speak._warned) {
      speak._warned = true;
      alert("No German voice found on this device. The browser would otherwise read German with an English accent.\n\nmacOS: System Settings → Accessibility → Spoken Content → System Voice → download a German voice (e.g. Anna / Helena / Markus).\nThen reload this page.");
    }
  }

  function prepGermanSpeech(text) {
    return String(text || "")
      .replace(/(\d{1,2}):(\d{2})/g, "$1 Uhr $2")
      .replace(/(\d+),(\d{2})\s*Euro/gi, "$1 Euro $2")
      .replace(/B1/g, "Be eins")
      .replace(/A2/g, "A zwei")
      .replace(/A1/g, "A eins");
  }

  function stopSpeak() {
    speakGen += 1;
    currentUtterance = null;
    if (window.speechSynthesis) {
      try { window.speechSynthesis.cancel(); } catch (e) {}
    }
    if (activeFinish) {
      const f = activeFinish;
      activeFinish = null;
      f();
    }
  }

  function pauseMs(ms) {
    const gen = speakGen;
    return new Promise(function (resolve) {
      if (!ms) return resolve();
      setTimeout(function () {
        if (gen === speakGen) resolve();
      }, ms);
    });
  }

  function speakAsync(text, opts) {
    opts = opts || {};
    const gen = speakGen;
    return new Promise(function (resolve) {
      if (gen !== speakGen) return resolve(false);
      if (!window.speechSynthesis) {
        if (!speak._noSynth) {
          speak._noSynth = true;
          alert("This browser has no speech synthesis. Use Safari or Chrome with a German voice installed.");
        }
        return resolve(false);
      }
      const voice = voiceForRole(opts.role) || pickGermanVoice();
      cachedDeVoice = voice || cachedDeVoice;
      if (!voice) warnNoVoice();
      const u = new SpeechSynthesisUtterance(prepGermanSpeech(text));
      currentUtterance = u;
      u.lang = (voice && voice.lang) || "de-DE";
      u.rate = opts.rate != null ? opts.rate : 0.9;
      u.pitch = opts.pitch != null ? opts.pitch : (opts.role === "guest" || opts.role === "b" ? 0.88 : 1);
      if (voice) u.voice = voice;
      let settled = false;
      const finish = function () {
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
      setTimeout(finish, fallback);
      try {
        if (window.speechSynthesis.paused) window.speechSynthesis.resume();
        window.speechSynthesis.speak(u);
      } catch (e) {
        finish();
      }
    });
  }

  function speakLong(text, opts) {
    opts = opts || {};
    const gen = speakGen;
    const parts = String(text || "").split(/(?<=[.!?])\s+/).filter(Boolean);
    const chunks = parts.length ? parts : [String(text || "")];
    let chain = Promise.resolve(true);
    chunks.forEach(function (part, i) {
      chain = chain.then(function () {
        if (gen !== speakGen) return false;
        return speakAsync(part, opts).then(function () {
          if (gen !== speakGen) return false;
          return i < chunks.length - 1 ? pauseMs(220) : true;
        });
      });
    });
    return chain;
  }

  function speak(text, opts) {
    stopSpeak();
    return speakAsync(text, opts);
  }

  speak.listGerman = function () {
    return germanVoices().map(function (v) { return v.name + " (" + v.lang + ")"; });
  };

  warmVoices();

  window.Engine = {
    shuffle: shuffle,
    bySet: bySet,
    forDrill: forDrill,
    vocabByTopic: vocabByTopic,
    makeVocabQuiz: makeVocabQuiz,
    answersMatch: answersMatch,
    speak: speak,
    speakAsync: speakAsync,
    speakLong: speakLong,
    stopSpeak: stopSpeak,
    pauseMs: pauseMs,
    warmVoices: warmVoices,
    germanVoiceName: function () {
      const v = cachedDeVoice || pickGermanVoice();
      return v ? v.name + " · " + v.lang : null;
    },
    germanVoicePair: function () {
      const p = cachedVoicePack || voicePack();
      if (!p.primary) return null;
      const a = p.primary.name;
      const b = (p.secondary && p.secondary.name) || a;
      return a === b ? a : a + " + " + b;
    },
    check: function (q, value) {
      if (q.type === "tf") return Boolean(value) === Boolean(q.answer);
      if (q.type === "mcq") return value === q.answer;
      if (q.type === "order") return norm(value) === norm(q.answer);
      return answersMatch(value, q.answer);
    },
  };
})();
