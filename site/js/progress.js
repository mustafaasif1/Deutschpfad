(function () {
  const KEY = "deutschpfad-progress-v2";
  const LEGACY = "deutschpfad-progress-v1";

  function pad2(n) {
    return (n < 10 ? "0" : "") + n;
  }

  function localYmd(d) {
    d = d || new Date();
    return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate());
  }

  function parseYmd(ymd) {
    const p = String(ymd || "").split("-");
    const y = Number(p[0]);
    const m = Number(p[1]);
    const d = Number(p[2]);
    if (!y || !m || !d) return null;
    return new Date(y, m - 1, d);
  }

  function addDays(ymd, n) {
    const d = parseYmd(ymd);
    if (!d) return localYmd();
    d.setDate(d.getDate() + n);
    return localYmd(d);
  }

  function daysBetween(a, b) {
    const da = parseYmd(a);
    const db = parseYmd(b);
    if (!da || !db) return 0;
    return Math.round((db.getTime() - da.getTime()) / 86400000);
  }

  function nextInterval(prev, passed) {
    if (!passed) return 1;
    if ((prev || 0) >= 3) return 7;
    return 3;
  }

  function applySchedule(state, id, pct) {
    if (!id) return;
    if (!state.schedule) state.schedule = {};
    const prev = state.schedule[id] || { interval: 0, reviews: 0 };
    const passed = pct >= 80;
    const interval = nextInterval(prev.interval, passed);
    state.schedule[id] = {
      interval: interval,
      due: addDays(localYmd(), interval),
      lastPct: pct,
      lastAt: Date.now(),
      reviews: (prev.reviews || 0) + 1
    };
  }

  function emptyLevel() {
    return {
      started: localYmd(),
      xp: 0,
      streak: { last: null, count: 0 },
      done: {},
      results: {},
      checks: {},
      seenVocab: {},
      examDate: null,
      schedule: {},
      scheduleSeeded: false,
      session: null
    };
  }

  function emptyRoot() {
    return {
      level: null,
      levels: { a1: emptyLevel(), a2: emptyLevel(), b1: emptyLevel() },
    };
  }

  function hydrateLevel(raw) {
    const state = Object.assign(emptyLevel(), raw || {});
    state.streak = Object.assign({ last: null, count: 0 }, state.streak || {});
    state.done = state.done || {};
    state.results = state.results || {};
    state.checks = state.checks || {};
    state.seenVocab = state.seenVocab || {};
    state.schedule = state.schedule || {};
    if (state.examDate && !parseYmd(state.examDate)) state.examDate = null;
    if (!state.started) state.started = localYmd();
    return state;
  }

  function loadRoot() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        const root = emptyRoot();
        root.level = parsed.level || null;
        ["a1", "a2", "b1"].forEach(function (id) {
          root.levels[id] = hydrateLevel(parsed.levels && parsed.levels[id]);
        });
        return root;
      }
      const old = localStorage.getItem(LEGACY);
      if (old) {
        const root = emptyRoot();
        root.level = "b1";
        root.levels.b1 = hydrateLevel(JSON.parse(old));
        saveRoot(root);
        return root;
      }
    } catch (e) {}
    return emptyRoot();
  }

  function saveRoot(root) {
    localStorage.setItem(KEY, JSON.stringify(root));
  }

  function touchStreak(state) {
    const t = localYmd();
    if (state.streak.last === t) return;
    const ymd = addDays(t, -1);
    state.streak.count = state.streak.last === ymd ? (state.streak.count || 0) + 1 : 1;
    state.streak.last = t;
  }

  function withLevel(fn) {
    const root = loadRoot();
    const id = root.level || (window.DP && DP.level) || "b1";
    if (!root.levels[id]) root.levels[id] = emptyLevel();
    const state = root.levels[id];
    const result = fn(state, root, id);
    saveRoot(root);
    return result === undefined ? state : result;
  }

  const listeners = [];

  function emit(event) {
    for (let i = 0; i < listeners.length; i++) {
      try { listeners[i](event); }
      catch (err) { console.error(err); }
    }
  }

  window.Progress = {
    today: localYmd,
    parseYmd: parseYmd,
    addDays: addDays,
    daysBetween: daysBetween,
    nextInterval: nextInterval,
    getRoot: loadRoot,
    write: withLevel,
    subscribe: function (fn) {
      if (typeof fn !== "function") return function () {};
      listeners.push(fn);
      return function () {
        const i = listeners.indexOf(fn);
        if (i >= 0) listeners.splice(i, 1);
      };
    },
    getLevel: function () {
      return loadRoot().level;
    },
    setLevel: function (id) {
      const root = loadRoot();
      root.level = id;
      if (!root.levels[id]) root.levels[id] = emptyLevel();
      saveRoot(root);
    },
    get: function () {
      const root = loadRoot();
      const id = root.level || (window.DP && DP.level) || "b1";
      return root.levels[id] || emptyLevel();
    },
    setExamDate: function (ymd) {
      return withLevel(function (s) {
        s.examDate = ymd && parseYmd(ymd) ? ymd : null;
        s.session = null;
      });
    },
    setDone: function (id, on) {
      const value = !!on;
      const out = withLevel(function (s) {
        if (value) {
          s.done[id] = true;
          touchStreak(s);
        } else {
          delete s.done[id];
        }
      });
      emit({ type: "done", id: id, on: value });
      return out;
    },
    markDone: function (id) {
      return this.setDone(id, true);
    },
    isDone: function (id) {
      return !!Progress.get().done[id];
    },
    addXp: function (n) {
      return withLevel(function (s) {
        s.xp += n;
        touchStreak(s);
      });
    },
    record: function (setId, correct, total) {
      const out = withLevel(function (s) {
        s.results[setId] = { correct: correct, total: total, at: Date.now() };
        s.xp += correct * 8 + 4;
        touchStreak(s);
        applySchedule(s, setId, total ? Math.round((correct / total) * 100) : 0);
      });
      emit({ type: "quiz", id: setId, correct: correct, total: total });
      return out;
    },
    review: function (setId, pct) {
      const out = withLevel(function (s) {
        applySchedule(s, setId, pct == null ? 100 : pct);
        touchStreak(s);
      });
      emit({ type: "quiz", id: setId });
      return out;
    },
    toggleCheck: function (id, on) {
      const value = !!on;
      const out = withLevel(function (s) {
        if (value) s.checks[id] = true;
        else delete s.checks[id];
      });
      emit({ type: "check", id: id, on: value });
      return out;
    },
    markVocab: function (id) {
      return withLevel(function (s) {
        s.seenVocab[id] = (s.seenVocab[id] || 0) + 1;
      });
    },
    setSession: function (session) {
      return withLevel(function (s) {
        s.session = session;
      });
    },
    resetLevel: function () {
      const root = loadRoot();
      const id = root.level || (window.DP && DP.level);
      if (!id) return;
      const examDate = root.levels[id] && root.levels[id].examDate;
      root.levels[id] = emptyLevel();
      root.levels[id].examDate = examDate || null;
      saveRoot(root);
    },
    reset: function () {
      localStorage.removeItem(KEY);
    },
    exportJson: function () {
      return JSON.stringify(loadRoot(), null, 2);
    },
    importJson: function (raw) {
      const parsed = JSON.parse(raw);
      const root = emptyRoot();
      root.level = parsed && parsed.level ? parsed.level : null;
      ["a1", "a2", "b1"].forEach(function (id) {
        root.levels[id] = hydrateLevel(parsed && parsed.levels && parsed.levels[id]);
      });
      saveRoot(root);
      return root;
    },
    summaryAll: function () {
      const root = loadRoot();
      return ["a1", "a2", "b1"].map(function (id) {
        const s = root.levels[id] || emptyLevel();
        const topics = Object.keys(s.done).filter(function (k) { return k.indexOf("topic-") === 0; }).length;
        const mocks = Object.keys(s.done).filter(function (k) { return k.indexOf("mock-") === 0; }).length;
        const weak = Object.keys(s.results).filter(function (k) {
          const r = s.results[k];
          return r && r.total && (r.correct / r.total) < 0.8;
        }).length;
        return {
          id: id,
          checks: Object.keys(s.checks).filter(function (k) { return s.checks[k]; }).length,
          topics: topics,
          mocks: mocks,
          weak: weak,
          streak: (s.streak && s.streak.count) || 0,
          examDate: s.examDate || null
        };
      });
    },
  };
})();
