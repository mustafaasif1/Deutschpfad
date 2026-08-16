(function () {
  const KEY = "deutschpfad-progress-v2";
  const LEGACY = "deutschpfad-progress-v1";

  function emptyLevel() {
    return {
      started: new Date().toISOString().slice(0, 10),
      xp: 0,
      streak: { last: null, count: 0 },
      done: {},
      results: {},
      checks: {},
      seenVocab: {},
    };
  }

  function emptyRoot() {
    return {
      level: null,
      levels: { a1: emptyLevel(), a2: emptyLevel(), b1: emptyLevel() },
    };
  }

  function loadRoot() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        const root = emptyRoot();
        root.level = parsed.level || null;
        ["a1", "a2", "b1"].forEach(function (id) {
          root.levels[id] = Object.assign(emptyLevel(), (parsed.levels && parsed.levels[id]) || {});
          root.levels[id].streak = Object.assign({ last: null, count: 0 }, root.levels[id].streak || {});
        });
        return root;
      }
      // migrate v1 → b1
      const old = localStorage.getItem(LEGACY);
      if (old) {
        const root = emptyRoot();
        root.level = "b1";
        root.levels.b1 = Object.assign(emptyLevel(), JSON.parse(old));
        saveRoot(root);
        return root;
      }
    } catch (e) {}
    return emptyRoot();
  }

  function saveRoot(root) {
    localStorage.setItem(KEY, JSON.stringify(root));
  }

  function today() {
    return new Date().toISOString().slice(0, 10);
  }

  function touchStreak(state) {
    const t = today();
    if (state.streak.last === t) return;
    const y = new Date();
    y.setDate(y.getDate() - 1);
    const ymd = y.toISOString().slice(0, 10);
    state.streak.count = state.streak.last === ymd ? (state.streak.count || 0) + 1 : 1;
    state.streak.last = t;
  }

  function withLevel(fn) {
    const root = loadRoot();
    const id = root.level || DP.level || "b1";
    if (!root.levels[id]) root.levels[id] = emptyLevel();
    const state = root.levels[id];
    const result = fn(state, root, id);
    saveRoot(root);
    return result === undefined ? state : result;
  }

  window.Progress = {
    getRoot: loadRoot,
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
      const id = root.level || DP.level || "b1";
      return root.levels[id] || emptyLevel();
    },
    markDone: function (id) {
      return withLevel(function (s) {
        s.done[id] = true;
        touchStreak(s);
      });
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
      return withLevel(function (s) {
        s.results[setId] = { correct: correct, total: total, at: Date.now() };
        s.xp += correct * 8 + 4;
        touchStreak(s);
      });
    },
    toggleCheck: function (id, on) {
      return withLevel(function (s) {
        s.checks[id] = on;
      });
    },
    markVocab: function (id) {
      return withLevel(function (s) {
        s.seenVocab[id] = (s.seenVocab[id] || 0) + 1;
      });
    },
    resetLevel: function () {
      const root = loadRoot();
      const id = root.level || DP.level;
      if (id) root.levels[id] = emptyLevel();
      saveRoot(root);
    },
    reset: function () {
      localStorage.removeItem(KEY);
    },
    summaryAll: function () {
      const root = loadRoot();
      return ["a1", "a2", "b1"].map(function (id) {
        const s = root.levels[id] || emptyLevel();
        return {
          id: id,
          xp: s.xp,
          checks: Object.keys(s.checks).filter(function (k) { return s.checks[k]; }).length,
          done: Object.keys(s.done).length,
          streak: (s.streak && s.streak.count) || 0,
        };
      });
    },
  };
})();
