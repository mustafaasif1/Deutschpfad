(function () {
  const PASS = 80;
  const MAX_STEPS = 4;
  const DUE_CAP = 2;

  function pad2(n) {
    return (n < 10 ? "0" : "") + n;
  }

  function ymd(d) {
    d = d || new Date();
    return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate());
  }

  function parseYmd(value) {
    const p = String(value || "").split("-");
    const y = Number(p[0]);
    const m = Number(p[1]);
    const day = Number(p[2]);
    if (!y || !m || !day) return null;
    return new Date(y, m - 1, day);
  }

  function addDays(value, n) {
    const d = parseYmd(value);
    if (!d) return ymd();
    d.setDate(d.getDate() + n);
    return ymd(d);
  }

  function daysBetween(a, b) {
    const da = parseYmd(a);
    const db = parseYmd(b);
    if (!da || !db) return 0;
    return Math.round((db.getTime() - da.getTime()) / 86400000);
  }

  function clock() {
    const s = Progress.get();
    const m = window.getMeta && getMeta();
    const today = ymd();
    const started = s.started || today;
    const examDate = s.examDate || null;
    let weekN;
    let day;
    let daysLeft = null;
    let source = "start";

    if (examDate) {
      daysLeft = daysBetween(today, examDate);
      weekN = Math.max(1, Math.min(8, 9 - Math.ceil(Math.max(daysLeft, 1) / 7)));
      day = Math.max(1, Math.min(56, 57 - Math.max(daysLeft, 0)));
      source = "exam";
    } else {
      day = Math.min(56, Math.max(1, daysBetween(started, today) + 1));
      weekN = Math.min(8, Math.max(1, Math.ceil(day / 7)));
    }

    return {
      today: today,
      started: started,
      examDate: examDate,
      weekN: weekN,
      day: day,
      daysLeft: daysLeft,
      weeks: 8,
      source: source,
      examName: (m && m.exam) || "telc",
      levelTitle: (m && m.title) || ""
    };
  }

  function week(clockObj) {
    const c = clockObj || clock();
    return (window.WEEKS && WEEKS[c.weekN - 1]) || { id: c.weekN, title: "Your plan", goal: "", tasks: [] };
  }

  function describeSet(setId) {
    const id = String(setId || "");
    if (!id) return { kind: "quiz", title: "Practice", href: "#/grammar" };

    if (id.indexOf("g-") === 0) {
      const gid = id.slice(2);
      const g = (window.GRAMMAR || []).find(function (x) { return x.id === gid; });
      return { kind: "quiz", title: g ? g.title : gid, href: "#/grammar/" + gid };
    }
    if (id.indexOf("vocab-") === 0) {
      const vid = id.slice(6);
      const v = (window.VOCAB_TOPICS || []).find(function (x) { return x.id === vid; });
      return { kind: "vocab", title: v ? v.title : vid, href: "#/vocab/" + vid, topicId: vid };
    }
    if (id.indexOf("topic-") === 0) {
      const tid = id.slice(6);
      const t = (window.TOPICS || []).find(function (x) { return x.id === tid; });
      return { kind: "produce", title: t ? (t.titleDe || t.title) : tid, href: "#/topics/" + tid, topicId: tid };
    }
    if (id.indexOf("drill-") === 0) {
      const did = id.slice(6);
      const d = (window.DRILLS || []).find(function (x) { return x.id === did; });
      return { kind: "quiz", title: d ? d.title : did, href: "#/drill/" + did };
    }
    if (id.indexOf("hoeren-paper-") === 0) {
      const hid = id.slice(13);
      return { kind: "exam", title: "Hören paper " + hid, href: "#/exam/hoeren/" + hid };
    }
    if (id.indexOf("mock-") === 0) {
      const mid = id.slice(5);
      const mock = ((window.EXAM && EXAM.mocks) || []).find(function (x) { return x.id === mid; });
      return { kind: "exam", title: mock ? mock.title : id, href: "#/exam/mock/" + mid };
    }

    const lesen = ((window.EXAM && EXAM.lesen) || []).find(function (x) { return x.id === id; });
    if (lesen) return { kind: "exam", title: lesen.title, href: "#/exam/lesen/" + id };

    const sb = ((window.EXAM && EXAM.sprachbausteine) || []).find(function (x) { return x.id === id; });
    if (sb) return { kind: "exam", title: sb.title, href: "#/exam/sprachbausteine" };

    return { kind: "quiz", title: id, href: "#/progress" };
  }

  function seedSchedule(state) {
    if (state.scheduleSeeded) return false;
    state.scheduleSeeded = true;
    if (!state.schedule) state.schedule = {};
    const today = ymd();
    let added = false;
    Object.keys(state.results || {}).forEach(function (id) {
      if (state.schedule[id]) return;
      const r = state.results[id];
      if (!r || !r.total) return;
      const pct = Math.round((r.correct / r.total) * 100);
      const passed = pct >= PASS;
      const interval = passed ? 3 : 1;
      const from = r.at ? ymd(new Date(r.at)) : (state.started || today);
      const due = addDays(from, interval);
      state.schedule[id] = {
        interval: interval,
        due: due < today ? today : due,
        lastPct: pct,
        lastAt: r.at || Date.now(),
        reviews: 1
      };
      added = true;
    });
    return added;
  }

  function dueItems() {
    const s = Progress.get();
    if (!s.scheduleSeeded && typeof Progress.write === "function") {
      Progress.write(function (state) { seedSchedule(state); });
    }
    const fresh = Progress.get();
    const today = ymd();
    const list = [];
    Object.keys(fresh.schedule || {}).forEach(function (id) {
      const row = fresh.schedule[id];
      if (!row || !row.due || row.due > today) return;
      const meta = describeSet(id);
      list.push({
        id: id,
        interval: row.interval || 1,
        due: row.due,
        lastPct: row.lastPct,
        reviews: row.reviews || 0,
        kind: meta.kind,
        title: meta.title,
        href: meta.href
      });
    });
    list.sort(function (a, b) {
      const ap = a.lastPct == null ? -1 : a.lastPct;
      const bp = b.lastPct == null ? -1 : b.lastPct;
      if (ap !== bp) return ap - bp;
      return (a.due < b.due) ? -1 : (a.due > b.due ? 1 : 0);
    });
    return list;
  }

  function examSkillStep(c) {
    if (c.weekN >= 7) {
      return {
        id: "exam-mock",
        kind: "exam",
        title: "Written mock",
        blurb: "Week " + c.weekN + " — sit one paper in exam order.",
        href: "#/exam/mock"
      };
    }
    const skills = [
      { href: "#/exam/hoeren", title: "Hören in exam sitting", blurb: "One paper, then mark and read the answers." },
      { href: "#/exam/schreiben", title: "Schreiben from memory", blurb: "Hide the model. Cover every content point." },
      { href: "#/exam/sprechen/run", title: "Timed oral run", blurb: "Same clock as the group exam." },
      { href: "#/exam/lesen", title: "Lesen paper", blurb: "Guess, never blank. Mark and check the key." }
    ];
    const d = parseYmd(c.today);
    const skill = skills[(d ? d.getDay() : 0) % skills.length];
    return {
      id: "exam-skill-" + skill.href,
      kind: "exam",
      title: skill.title,
      blurb: skill.blurb,
      href: skill.href
    };
  }

  function buildSteps(c, state) {
    const steps = [];
    const seenHref = {};

    function add(step) {
      if (!step || !step.href || seenHref[step.href]) return;
      if (steps.length >= MAX_STEPS) return;
      seenHref[step.href] = true;
      steps.push({
        id: step.id,
        kind: step.kind,
        title: step.title,
        blurb: step.blurb || "",
        href: step.href,
        done: false
      });
    }

    dueItems().slice(0, DUE_CAP).forEach(function (item) {
      const weak = item.lastPct != null && item.lastPct < PASS;
      add({
        id: "due-" + item.id,
        kind: "review",
        title: item.title,
        blurb: weak
          ? item.lastPct + "% — back on the 1-day list until it holds at 80%."
          : "Scheduled review · " + item.interval + "-day box.",
        href: item.href
      });
    });

    const w = week(c);
    const task = (w.tasks || []).find(function (t) { return !state.checks[t.id]; });
    if (task) {
      add({
        id: "plan-" + task.id,
        kind: "plan",
        title: task.label,
        blurb: "Week " + c.weekN + " · " + w.title,
        href: task.href
      });
    }

    const openTopic = (window.TOPICS || []).find(function (t) {
      return !state.done["topic-" + t.id];
    });
    if (openTopic) {
      add({
        id: "topic-" + openTopic.id,
        kind: "produce",
        title: "Produce " + (openTopic.titleDe || openTopic.title),
        blurb: "Say the chunks, then tick the topic when you can do it without English notes.",
        href: "#/topics/" + openTopic.id
      });
    }

    add(examSkillStep(c));
    return steps;
  }

  function ensureSession() {
    const c = clock();
    const saved = Progress.get().session;
    if (saved && saved.date === c.today && Array.isArray(saved.steps)) {
      return saved;
    }
    const steps = buildSteps(c, Progress.get());
    const session = {
      date: c.today,
      steps: steps,
      started: false
    };
    Progress.setSession(session);
    return session;
  }

  function saveSession(session) {
    Progress.setSession(session);
    return session;
  }

  function firstOpen(session) {
    if (!session || !session.steps) return null;
    for (let i = 0; i < session.steps.length; i++) {
      if (!session.steps[i].done) return session.steps[i];
    }
    return null;
  }

  function remaining(session) {
    return (session && session.steps || []).filter(function (st) { return !st.done; }).length;
  }

  function isComplete(session) {
    return !!(session && session.steps && session.steps.length && remaining(session) === 0);
  }

  function quizMatchesHref(quizId, href) {
    if (!quizId || !href) return false;
    const h = String(href).replace(/^#/, "");
    if (quizId.indexOf("g-") === 0 && h === "/grammar/" + quizId.slice(2)) return true;
    if (quizId.indexOf("vocab-") === 0) {
      const vid = quizId.slice(6);
      return h === "/vocab/" + vid || h === "/vocab/" + vid + "/quiz";
    }
    if (quizId.indexOf("topic-") === 0) {
      const tid = quizId.slice(6);
      return h === "/topics/" + tid || h === "/topics/" + tid + "/quiz";
    }
    if (quizId.indexOf("drill-") === 0 && h === "/drill/" + quizId.slice(6)) return true;
    if (h === "/exam/lesen/" + quizId) return true;
    if (h === "/exam/lesen" && quizId.indexOf("lesen") === 0) return true;
    if (quizId.indexOf("hoeren-paper-") === 0 && h.indexOf("/exam/hoeren/" + quizId.slice(13)) === 0) return true;
    if (h.indexOf("/exam/hoeren") === 0 && quizId.indexOf("hoeren") === 0) return true;
    if (h === "/exam/sprachbausteine" && ((window.EXAM && EXAM.sprachbausteine) || []).some(function (x) { return x.id === quizId; })) return true;
    return false;
  }

  function stepMatches(step, act) {
    if (!step || step.done) return false;
    const href = step.href || "";
    if (act.quizId && (quizMatchesHref(act.quizId, href) || step.id === "due-" + act.quizId)) return true;
    if (act.vocabId && (href === "#/vocab/" + act.vocabId || href === "#/vocab/" + act.vocabId + "/quiz")) return true;
    if (act.planId && step.id === "plan-" + act.planId) return true;
    if (act.topicId && (href === "#/topics/" + act.topicId || step.id === "topic-" + act.topicId)) return true;
    if (act.href && href === act.href) return true;
    if (act.doneId) {
      const d = act.doneId;
      if (d.indexOf("topic-") === 0 && (href === "#/topics/" + d.slice(6) || step.id === d)) return true;
      if (d.indexOf("mock-") === 0 && (href === "#/exam/mock/" + d.slice(5) || href === "#/exam/mock")) return true;
      if (d.indexOf("schreiben-") === 0 && href.indexOf("schreiben") >= 0) return true;
      if (d === "sprechen-run" && href.indexOf("sprechen") >= 0) return true;
    }
    return false;
  }

  function completeMatch(act) {
    const session = Progress.get().session;
    if (!session || session.date !== ymd() || !session.steps) return null;
    let changed = false;
    let planId = null;
    for (let i = 0; i < session.steps.length; i++) {
      if (!stepMatches(session.steps[i], act)) continue;
      session.steps[i].done = true;
      changed = true;
      if (session.steps[i].id.indexOf("plan-") === 0) {
        planId = session.steps[i].id.slice(5);
      }
      break;
    }
    if (!changed) return session;
    saveSession(session);
    if (planId && !Progress.get().checks[planId]) {
      Progress.toggleCheck(planId, true);
    }
    return session;
  }

  function start() {
    const session = ensureSession();
    session.started = true;
    saveSession(session);
    return firstOpen(session);
  }

  function leadCopy(c) {
    if (c.source === "exam") {
      if (c.daysLeft === 0) return "Sitting today · week " + c.weekN + " of 8.";
      if (c.daysLeft < 0) return "The sitting was " + Math.abs(c.daysLeft) + " day" + (Math.abs(c.daysLeft) === 1 ? "" : "s") + " ago · week 8 of 8.";
      return "Week " + c.weekN + " of 8 · " + c.daysLeft + " day" + (c.daysLeft === 1 ? "" : "s") + " until the sitting.";
    }
    return "Day " + c.day + " · week " + c.weekN + " of 8.";
  }

  function passMap() {
    const s = Progress.get();
    const c = clock();
    const topics = (window.TOPICS || []).map(function (t) {
      return {
        id: t.id,
        title: t.titleDe || t.title,
        href: "#/topics/" + t.id,
        done: !!s.done["topic-" + t.id],
        core: t.weight === "exam-core" || t.weight === "always"
      };
    });
    const quizzes = Object.keys(s.results || {}).map(function (id) {
      const r = s.results[id];
      const pct = r && r.total ? Math.round((r.correct / r.total) * 100) : 0;
      const meta = describeSet(id);
      const sched = (s.schedule || {})[id];
      return {
        id: id,
        title: meta.title,
        href: meta.href,
        pct: pct,
        correct: r.correct,
        total: r.total,
        weak: pct < PASS,
        due: sched ? sched.due : null,
        interval: sched ? sched.interval : null
      };
    }).sort(function (a, b) { return a.pct - b.pct; });
    const mocks = ((window.EXAM && EXAM.mocks) || []).map(function (m) {
      return { id: m.id, title: m.title, href: "#/exam/mock/" + m.id, done: !!s.done["mock-" + m.id] };
    });
    const produce = topics.filter(function (t) { return t.done; }).length;
    const weak = quizzes.filter(function (q) { return q.weak; });
    const mocksDone = mocks.filter(function (m) { return m.done; }).length;
    let level = "start";
    let text = "No production yet. Start today’s session.";
    if (quizzes.length || produce) {
      if (weak.length || (topics.length && produce / topics.length < 0.5)) {
        level = "gap";
        text = "Not exam-ready yet. Clear due reviews and tick topics you can produce without English notes.";
      } else if (mocks.length && mocksDone === 0) {
        level = "shape";
        text = "Topics and quizzes are holding. Sit a written mock before exam week.";
      } else if (topics.length && produce / topics.length >= 0.8 && weak.length === 0 && mocksDone >= 1) {
        level = "ready";
        text = "Pass map looks solid: most topics ticked, quizzes at 80%+, and a mock is done.";
      } else {
        level = "work";
        text = "Keep the 1/3/7 reviews. Tick a topic only when you can speak it cold.";
      }
    }
    return {
      clock: c,
      topics: topics,
      produce: produce,
      quizzes: quizzes,
      weak: weak,
      mocks: mocks,
      mocksDone: mocksDone,
      due: dueItems(),
      oral: !!s.done["sprechen-run"],
      readiness: { level: level, text: text }
    };
  }

  function bindProgress() {
    if (!window.Progress || Progress._sessionBound) return;
    Progress._sessionBound = true;
    const rec = Progress.record;
    Progress.record = function (setId, correct, total) {
      const out = rec(setId, correct, total);
      completeMatch({ quizId: setId });
      return out;
    };
    const done = Progress.markDone;
    Progress.markDone = function (id) {
      const out = done(id);
      completeMatch({ doneId: id });
      return out;
    };
    const chk = Progress.toggleCheck;
    Progress.toggleCheck = function (id, on) {
      const out = chk(id, on);
      if (on) completeMatch({ planId: id });
      return out;
    };
  }

  bindProgress();

  window.Session = {
    PASS: PASS,
    clock: clock,
    week: week,
    leadCopy: leadCopy,
    describeSet: describeSet,
    dueItems: dueItems,
    ensure: ensureSession,
    start: start,
    next: function () {
      return firstOpen(ensureSession());
    },
    remaining: function () {
      return remaining(ensureSession());
    },
    isComplete: function () {
      return isComplete(ensureSession());
    },
    isActive: function () {
      const session = Progress.get().session;
      return !!(session && session.date === ymd() && session.started && remaining(session) > 0);
    },
    completeMatch: completeMatch,
    reviewVocab: function (topicId) {
      const id = "vocab-" + topicId;
      const row = (Progress.get().schedule || {})[id];
      const alreadyToday = row && row.lastAt && ymd(new Date(row.lastAt)) === ymd();
      if (!alreadyToday) Progress.review(id, 100);
      completeMatch({ vocabId: topicId, quizId: id });
    },
    passMap: passMap,
    rebuild: function () {
      Progress.setSession(null);
      return ensureSession();
    }
  };
})();
