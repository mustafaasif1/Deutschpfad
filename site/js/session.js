(function () {
  const PASS = 80;
  const MAX_STEPS = 4;
  const DUE_CAP = 2;

  function ymd(d) {
    return Progress.today(d);
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
      daysLeft = Progress.daysBetween(today, examDate);
      weekN = Math.max(1, Math.min(8, 9 - Math.ceil(Math.max(daysLeft, 1) / 7)));
      day = Math.max(1, Math.min(56, 57 - Math.max(daysLeft, 0)));
      source = "exam";
    } else {
      day = Math.min(56, Math.max(1, Progress.daysBetween(started, today) + 1));
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
      const due = Progress.addDays(from, interval);
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
    if (!s.scheduleSeeded) {
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

  function hashPath(h) {
    return String(h || "").replace(/^#/, "").replace(/\/+$/, "") || "/";
  }

  function onHref(here, href) {
    const a = hashPath(here);
    const b = hashPath(href);
    if (!b || b === "/") return false;
    return a === b || a.indexOf(b + "/") === 0;
  }

  function kindLabel(kind) {
    if (kind === "review") return "Review";
    if (kind === "plan") return "Week plan";
    if (kind === "produce") return "Produce";
    if (kind === "exam") return "Exam";
    return "Step";
  }

  function keysFromStep(step) {
    if (step.keys) return step.keys;
    const href = step.href || "";
    if (step.kind === "plan" && step.id.indexOf("plan-") === 0) {
      return { planId: step.id.slice(5), hrefs: href ? [href] : [] };
    }
    if (step.kind === "produce" && step.id.indexOf("topic-") === 0) {
      const topicId = step.id.slice(6);
      return { topicId: topicId, hrefs: ["#/topics/" + topicId] };
    }
    if (step.kind === "review" && step.id.indexOf("due-") === 0) {
      return { quizIds: [step.id.slice(4)], hrefs: href ? [href] : [] };
    }
    if (step.kind === "exam") {
      const prefixes = [];
      if (href.indexOf("/exam/mock") >= 0) prefixes.push("mock-");
      if (href.indexOf("schreiben") >= 0) prefixes.push("schreiben-");
      if (href.indexOf("sprechen") >= 0) prefixes.push("sprechen-");
      return { hrefs: href ? [href] : [], donePrefixes: prefixes };
    }
    return { hrefs: href ? [href] : [] };
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
    const d = Progress.parseYmd(c.today);
    const skill = skills[(d ? d.getDay() : 0) % skills.length];
    return {
      id: "exam-skill-" + skill.href,
      kind: "exam",
      title: skill.title,
      blurb: skill.blurb,
      href: skill.href
    };
  }

  function makeStep(partial) {
    const step = {
      id: partial.id,
      kind: partial.kind,
      title: partial.title,
      blurb: partial.blurb || "",
      href: partial.href,
      done: false
    };
    step.keys = keysFromStep(step);
    return step;
  }

  function buildSteps(c, state) {
    const steps = [];
    const seenHref = {};

    function add(partial) {
      if (!partial || !partial.href || seenHref[partial.href]) return;
      if (steps.length >= MAX_STEPS) return;
      seenHref[partial.href] = true;
      steps.push(makeStep(partial));
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
        blurb: "Say the chunks, then mark it done.",
        href: "#/topics/" + openTopic.id
      });
    }

    add(examSkillStep(c));
    return steps;
  }

  function saveSession(session) {
    Progress.setSession(session);
    return session;
  }

  function ensureSession() {
    const c = clock();
    const state = Progress.get();
    const saved = state.session;
    if (saved && saved.date === c.today && Array.isArray(saved.steps) && saved.steps.length) {
      let dirty = false;
      saved.steps.forEach(function (st) {
        if (st.keys) return;
        st.keys = keysFromStep(st);
        dirty = true;
      });
      if (dirty) saveSession(saved);
      return saved;
    }
    const session = {
      date: c.today,
      steps: buildSteps(c, state),
      started: false
    };
    return saveSession(session);
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

  function eventMatches(step, event) {
    const keys = step.keys || keysFromStep(step);

    if (event.type === "quiz") {
      if (step.kind === "review") {
        return !!(keys.quizIds && keys.quizIds.indexOf(event.id) >= 0);
      }
      if (step.kind === "exam") {
        const meta = describeSet(event.id);
        return !!(meta && meta.href && keys.hrefs && keys.hrefs.some(function (h) {
          return onHref(meta.href, h);
        }));
      }
      return false;
    }

    if (event.type === "check") {
      return step.kind === "plan" && keys.planId === event.id;
    }

    if (event.type === "done") {
      if (step.kind === "produce" && keys.topicId && event.id === "topic-" + keys.topicId) return true;
      if (step.kind === "exam" && keys.donePrefixes && keys.donePrefixes.some(function (prefix) {
        return event.id.indexOf(prefix) === 0;
      })) return true;
      return false;
    }

    return false;
  }

  function applyEvent(event) {
    const session = Progress.get().session;
    if (!session || session.date !== ymd() || !session.steps) return;
    const on = event.on !== false;
    let changed = false;
    session.steps.forEach(function (step) {
      if (!eventMatches(step, event)) return;
      if (step.done === on) return;
      step.done = on;
      changed = true;
    });
    if (changed) saveSession(session);
  }

  function start() {
    const session = ensureSession();
    session.started = true;
    saveSession(session);
    return firstOpen(session);
  }

  function lastingFor(step, on) {
    const keys = step.keys || keysFromStep(step);
    if (step.kind === "produce" && keys.topicId) {
      Progress.setDone("topic-" + keys.topicId, on);
    }
    if (step.kind === "plan" && keys.planId) {
      Progress.toggleCheck(keys.planId, on);
    }
  }

  function produceReady(topicId) {
    const t = (window.TOPICS || []).find(function (x) { return x.id === topicId; });
    if (!t || !t.chunks || !t.chunks.length) return true;
    const r = Progress.get().results["topic-" + topicId];
    return !!(r && r.total && Math.round((r.correct / r.total) * 100) >= PASS);
  }

  function produceQuizHref(topicId) {
    return "#/topics/" + topicId + "/quiz";
  }

  function shortTitle(step) {
    return String(step.title || "").replace(/^Produce\s+/, "");
  }

  function setStep(id, on) {
    const session = ensureSession();
    let step = null;
    session.steps.forEach(function (st) {
      if (st.id !== id) return;
      st.done = !!on;
      step = st;
    });
    if (!step) return firstOpen(session);
    if (on && step.kind === "produce") {
      const keys = step.keys || keysFromStep(step);
      if (keys.topicId && !produceReady(keys.topicId)) {
        step.done = false;
        saveSession(session);
        return firstOpen(session);
      }
    }
    session.started = true;
    saveSession(session);
    lastingFor(step, on);
    return firstOpen(ensureSession());
  }

  function completeOpen() {
    const step = firstOpen(ensureSession());
    if (!step) return null;
    setStep(step.id, true);
    return firstOpen(ensureSession());
  }

  function cta(here) {
    const step = firstOpen(ensureSession());
    if (!step) return null;
    const on = onHref(here, step.href);
    const keys = step.keys || keysFromStep(step);
    if (step.kind === "produce" && keys.topicId && !produceReady(keys.topicId)) {
      const quizHref = produceQuizHref(keys.topicId);
      return {
        on: on,
        href: quizHref,
        title: step.title,
        kind: step.kind,
        label: on ? "Quiz chunks" : "Open " + shortTitle(step)
      };
    }
    return {
      on: on,
      href: step.href,
      title: step.title,
      kind: step.kind,
      label: on ? "Mark done" : "Open " + shortTitle(step)
    };
  }

  function advance(here) {
    const session = ensureSession();
    session.started = true;
    saveSession(session);
    const step = firstOpen(session);
    if (!step) {
      return { mode: "home", href: "#/", toast: "That’s all for today." };
    }
    if (onHref(here, step.href)) {
      const keys = step.keys || keysFromStep(step);
      if (step.kind === "produce" && keys.topicId && !produceReady(keys.topicId)) {
        return {
          mode: "open",
          href: produceQuizHref(keys.topicId),
          toast: "Quiz the chunks to 80% first."
        };
      }
      const next = completeOpen();
      if (!next) {
        return { mode: "home", href: "#/", toast: "That’s all for today." };
      }
      return { mode: "next", href: next.href, toast: "Next: " + next.title };
    }
    return { mode: "open", href: step.href };
  }

  function pageStep(here) {
    const step = firstOpen(ensureSession());
    if (!step || !onHref(here, step.href)) return null;
    return step;
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
    let text = "No production yet. Start today’s list.";
    if (quizzes.length || produce) {
      if (weak.length || (topics.length && produce / topics.length < 0.5)) {
        level = "gap";
        text = "Not exam-ready yet. Clear due reviews and mark topics done.";
      } else if (mocks.length && mocksDone === 0) {
        level = "shape";
        text = "Topics and quizzes are holding. Sit a written mock before exam week.";
      } else if (topics.length && produce / topics.length >= 0.8 && weak.length === 0 && mocksDone >= 1) {
        level = "ready";
        text = "Pass map looks solid: most topics done, quizzes at 80%+, and a mock is done.";
      } else {
        level = "work";
        text = "Keep the 1/3/7 reviews. Mark a topic done when you can speak it cold.";
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

  if (window.Progress && Progress.subscribe) {
    Progress.subscribe(applyEvent);
  }

  window.Session = {
    PASS: PASS,
    DUE_CAP: DUE_CAP,
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
      return remaining(ensureSession()) > 0;
    },
    onHref: onHref,
    kindLabel: kindLabel,
    cta: cta,
    produceReady: produceReady,
    setStep: setStep,
    advance: advance,
    pageStep: pageStep,
    reviewVocab: function (topicId) {
      const id = "vocab-" + topicId;
      const row = (Progress.get().schedule || {})[id];
      const alreadyToday = row && row.lastAt && ymd(new Date(row.lastAt)) === ymd();
      if (!alreadyToday) Progress.review(id, 100);
    },
    passMap: passMap,
    rebuild: function () {
      Progress.setSession(null);
      return ensureSession();
    }
  };
})();
