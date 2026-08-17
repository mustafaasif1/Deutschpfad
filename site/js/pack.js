(function () {
  window.DP = window.DP || { level: null, packs: {} };

  window.LEVEL_META = [
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

  const LEVEL_FILES = {
    a1: [
      "/site/data/a1/weeks.js",
      "/site/data/a1/vocab.js",
      "/site/data/a1/vocab-extra.js",
      "/site/data/a1/vocab-more.js",
      "/site/data/a1/grammar.js",
      "/site/data/a1/questions.js",
      "/site/data/a1/questions-extra.js",
      "/site/data/a1/questions-grammar.js",
      "/site/data/a1/exam.js",
      "/site/data/a1/topics.js"
    ],
    a2: [
      "/site/data/a2/weeks.js",
      "/site/data/a2/vocab.js",
      "/site/data/a2/vocab-extra.js",
      "/site/data/a2/vocab-more.js",
      "/site/data/a2/grammar.js",
      "/site/data/a2/questions.js",
      "/site/data/a2/questions-extra.js",
      "/site/data/a2/questions-grammar.js",
      "/site/data/a2/exam.js",
      "/site/data/a2/topics.js"
    ],
    b1: [
      "/site/data/b1/weeks.js",
      "/site/data/b1/vocab.js",
      "/site/data/b1/vocab-extra.js",
      "/site/data/b1/vocab-more.js",
      "/site/data/b1/vocab-telc.js",
      "/site/data/b1/grammar.js",
      "/site/data/b1/questions.js",
      "/site/data/b1/questions-extra.js",
      "/site/data/b1/questions-grammar.js",
      "/site/data/b1/exam.js",
      "/site/data/b1/topics.js"
    ]
  };

  const loading = {};
  const ready = {};

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      const s = document.createElement("script");
      s.src = src;
      s.onload = function () { resolve(); };
      s.onerror = function () { reject(new Error("Failed to load " + src)); };
      document.head.appendChild(s);
    });
  }

  window.registerPack = function (id, partial) {
    const prev = DP.packs[id] || {};
    const next = Object.assign({}, prev);
    Object.keys(partial || {}).forEach(function (k) {
      const incoming = partial[k];
      const existing = prev[k];
      if ((k === "vocab" || k === "questions" || k === "drills") && Array.isArray(existing) && Array.isArray(incoming)) {
        next[k] = existing.concat(incoming);
      } else {
        next[k] = incoming;
      }
    });
    DP.packs[id] = next;
  };

  window.getPack = function (id) {
    return DP.packs[id || DP.level] || null;
  };

  window.getMeta = function (id) {
    return LEVEL_META.find(function (m) { return m.id === (id || DP.level); });
  };

  window.levelPackReady = function (id) {
    return !!ready[id];
  };

  window.loadLevelPack = function (id) {
    if (!LEVEL_FILES[id]) return Promise.reject(new Error("Unknown level"));
    if (ready[id]) return Promise.resolve(id);
    if (loading[id]) return loading[id];
    loading[id] = LEVEL_FILES[id].reduce(function (p, src) {
      return p.then(function () { return loadScript(src); });
    }, Promise.resolve()).then(function () {
      ready[id] = true;
      return id;
    }).catch(function (err) {
      delete loading[id];
      throw err;
    });
    return loading[id];
  };

  window.activateLevel = function (id) {
    const p = DP.packs[id];
    if (!p) return false;
    DP.level = id;
    window.WEEKS = p.weeks || [];
    window.VOCAB = p.vocab || [];
    window.VOCAB_TOPICS = p.vocabTopics || [];
    window.GRAMMAR = p.grammar || [];
    window.QUESTIONS = p.questions || [];
    window.DRILLS = p.drills || [];
    window.EXAM = p.exam || { lesen: [], sprachbausteine: [], hoeren: [], schreiben: [], sprechen: {}, mocks: [], tips: [] };
    window.TOPICS = p.topics || [];
    window.EXAM_FORMAT = p.examFormat || null;
    if (window.Progress && Progress.setLevel) Progress.setLevel(id);
    return true;
  };

  window.ensureLevel = function () {
    const saved = window.Progress && Progress.getLevel ? Progress.getLevel() : null;
    const id = saved && ready[saved] ? saved : null;
    if (id) return activateLevel(id);
    return false;
  };
})();
