(function () {
  const view = document.getElementById("view");
  const crumb = document.getElementById("crumb");
  const statsEl = document.getElementById("top-stats");
  const sidebar = document.getElementById("sidebar");
  const menuBtn = document.getElementById("menu-btn");
  const navBackdrop = document.getElementById("nav-backdrop");
  const sidebarClose = document.getElementById("sidebar-close");
  const MQ_NAV = "(max-width: 860px)";

  function setNavOpen(open) {
    if (!sidebar) return;
    sidebar.classList.toggle("open", !!open);
    document.body.classList.toggle("nav-open", !!open);
    if (navBackdrop) navBackdrop.hidden = !open;
    if (menuBtn) {
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }
    const dockMenu = document.getElementById("dock-menu");
    if (dockMenu) {
      dockMenu.setAttribute("aria-expanded", open ? "true" : "false");
    }
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;");
  }

  const SPEAK_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M3 10v4h4l5 5V5L7 10H3zm13.5 2a4.5 4.5 0 0 0-2.3-3.9v7.8A4.5 4.5 0 0 0 16.5 12zM14 3.2v2.1A7.8 7.8 0 0 1 19.8 12 7.8 7.8 0 0 1 14 18.7v2.1A9.9 9.9 0 0 0 21.9 12 9.9 9.9 0 0 0 14 3.2z"/></svg>';

  function enhanceGerman(root) {
    root = root || view;
    if (!root) return;
    root.querySelectorAll(".de").forEach(function (el) {
      el.setAttribute("lang", "de");
      if (el.closest("button, a.card, a[href^='#']")) return;
      if (el.closest(".speak-wrap") && el.parentNode.classList.contains("speak-wrap") && el.parentNode.querySelector(".speak-btn")) return;
      if (el.querySelector(".speak-btn")) return;
      const text = (el.textContent || "").replace(/\s+/g, " ").trim();
      if (!text || text.length < 2 || text.length > 400) return;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "speak-btn";
      btn.setAttribute("data-speak", text);
      btn.title = "Speak German";
      btn.setAttribute("aria-label", "Speak German");
      btn.innerHTML = SPEAK_SVG;
      const block = /^(DIV|P|LI|TD|H1|H2|H3|DT|DD)$/.test(el.tagName);
      if (block) {
        if (el.querySelector(":scope > .speak-btn")) return;
        el.appendChild(btn);
      } else {
        const wrap = document.createElement("span");
        wrap.className = "speak-wrap";
        el.parentNode.insertBefore(wrap, el);
        wrap.appendChild(el);
        wrap.appendChild(btn);
      }
    });
    root.querySelectorAll("[data-speak]").forEach(function (b) {
      if (b.getAttribute("data-speak-bound") === "1") return;
      b.setAttribute("data-speak-bound", "1");
      b.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        const t = b.getAttribute("data-speak");
        if (t && Engine.speak) Engine.speak(t);
      });
    });
    wrapTables(root);
  }

  function wrapTables(root) {
    if (!root || !root.querySelectorAll) return;
    root.querySelectorAll("table").forEach(function (t) {
      if (t.parentElement && t.parentElement.classList.contains("table-scroll")) return;
      const w = document.createElement("div");
      w.className = "table-scroll";
      t.parentNode.insertBefore(w, t);
      w.appendChild(t);
    });
  }

  function toast(msg) {
    const t = document.getElementById("toast");
    t.hidden = false;
    t.textContent = msg;
    setTimeout(function () { t.hidden = true; }, 2200);
  }

  function meta() {
    return getMeta() || LEVEL_META[2];
  }

  function paintChrome() {
    const m = getMeta();
    const brand = document.getElementById("brand-sub");
    const goal = document.getElementById("goal-text");
    const sw = document.getElementById("level-switch");
    const navB2 = document.getElementById("nav-b2");
    const bookOpen = document.getElementById("btn-book-open");
    const voiceMeta = document.getElementById("voice-meta");
    if (!m) {
      if (brand) brand.textContent = "Choose your level";
      if (sw) sw.hidden = true;
      if (navB2) navB2.style.display = "none";
      if (bookOpen) bookOpen.hidden = true;
      return;
    }
    if (brand) brand.textContent = m.exam + " · 8 weeks";
    if (goal) {
      const extra = window.Session ? Session.leadCopy(Session.clock()) : "";
      goal.innerHTML = "Pass <strong>" + esc(m.exam) + "</strong>. " + esc(extra || "Cover the official topics, then drill the real paper shape.");
    }
    if (bookOpen) {
      bookOpen.hidden = false;
      bookOpen.href = bookHrefForRoute();
    }
    if (navB2) navB2.style.display = m.id === "b1" ? "" : "none";
    if (sw) {
      sw.hidden = false;
      sw.innerHTML = LEVEL_META.map(function (lv) {
        return '<button type="button" data-level="' + lv.id + '" class="' + (lv.id === m.id ? "active" : "") + '">' + lv.title + "</button>";
      }).join("");
      sw.querySelectorAll("[data-level]").forEach(function (btn) {
        btn.onclick = function () { switchToLevel(btn.getAttribute("data-level")); };
      });
    }
    if (voiceMeta && Engine.germanVoiceName) {
      const pair = Engine.germanVoicePair && Engine.germanVoicePair();
      const vn = pair || Engine.germanVoiceName();
      voiceMeta.textContent = vn ? "Voice: " + vn : "No German voice yet — install one in system settings.";
    }
  }

  function switchToLevel(id) {
    if (!activateLevel(id)) return;
    paintChrome();
    refreshStats();
    toast("Switched to " + id.toUpperCase());
    if ((location.hash || "").indexOf("levels") >= 0) location.hash = "#/";
    else route();
  }

  function refreshStats() {
    if (!DP.level) {
      statsEl.innerHTML = "";
      paintSessionRail();
      return;
    }
    const c = window.Session ? Session.clock() : null;
    const weekLabel = c ? "week " + c.weekN : "";
    let extra = "";
    if (c && c.daysLeft != null && c.daysLeft >= 0) {
      extra = c.daysLeft === 0 ? " · sitting today" : " · " + c.daysLeft + "d";
    }
    statsEl.innerHTML =
      '<span class="stat-pill">' + (DP.level || "").toUpperCase() +
      (weekLabel ? " · " + weekLabel : "") + extra + "</span>";
    paintSessionRail();
  }

  function setNav(id) {
    const practice = { practice: 1, grammar: 1, vocab: 1, plan: 1, drill: 1 };
    const sideId = practice[id] ? "practice" : id;
    document.querySelectorAll(".nav a").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("data-nav") === sideId);
    });
    const dockId = practice[id] ? "practice" : id;
    document.querySelectorAll(".dock a").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("data-nav") === dockId);
    });
  }

  function setTrail(parts) {
    const items = (parts || []).filter(Boolean);
    const last = items[items.length - 1];
    const page = last && last.label ? last.label : "Deutschpfad";
    const m = getMeta();
    document.title = (m ? page + " · " + m.title : page + " · Deutschpfad");
    if (!crumb) return;
    crumb.innerHTML = items.map(function (p, i) {
      const isLast = i === items.length - 1;
      if (isLast || !p.href) {
        return '<span class="crumb-current"' + (isLast ? ' aria-current="page"' : "") + ">" + esc(p.label) + "</span>";
      }
      return '<a href="' + p.href + '">' + esc(p.label) + "</a>";
    }).join('<span class="crumb-sep" aria-hidden="true">›</span>');
  }

  function bookHrefForRoute() {
    const m = getMeta();
    if (!m) return "/books/b1.html";
    const p = hashParts();
    const a = p[0] || "home";
    const b = p[1] || "";
    const anchors = {
      a1: { home: "toc", plan: "ch-01", grammar: "ch-04", vocab: "ch-05", topics: "ch-05b", exam: "ch-02", lesen: "ch-06", hoeren: "ch-07", ears: "ch-07", schreiben: "ch-08", sprechen: "ch-09", practice: "ch-11", progress: "toc" },
      a2: { home: "toc", plan: "ch-01", grammar: "ch-03", vocab: "ch-07", topics: "ch-07b", exam: "ch-02", lesen: "ch-08", hoeren: "ch-09", ears: "ch-09", schreiben: "ch-10", sprechen: "ch-11", practice: "ch-13", progress: "toc" },
      b1: { home: "toc", plan: "ch-01", grammar: "ch-04", vocab: "ch-09", topics: "ch-09d", exam: "ch-02", lesen: "ch-10", hoeren: "ch-12", ears: "ch-12", schreiben: "ch-13", sprechen: "ch-14", sprachbausteine: "ch-11", practice: "ch-17", progress: "toc" }
    };
    const map = anchors[m.id] || anchors.b1;
    let key = a;
    if (a === "exam") key = b || "exam";
    if (a === "schreiben") key = "schreiben";
    if (a === "drill") key = "grammar";
    return m.book + "#" + (map[key] || map.home || "toc");
  }

  function bindListFilter(inputId) {
    const input = document.getElementById(inputId);
    if (!input || !view) return;
    input.addEventListener("input", function () {
      const q = (input.value || "").toLowerCase().trim();
      view.querySelectorAll(".filter-item").forEach(function (el) {
        el.hidden = !!(q && (el.getAttribute("data-filter") || el.textContent || "").toLowerCase().indexOf(q) < 0);
      });
    });
  }

  function practiceTabs(active) {
    const tabs = [
      { id: "grammar", href: "#/grammar", label: "Grammar" },
      { id: "vocab", href: "#/vocab", label: "Vocabulary" },
      { id: "plan", href: "#/plan", label: "Plan" }
    ];
    return '<nav class="seg" aria-label="Practice">' + tabs.map(function (t) {
      return '<a href="' + t.href + '"' + (t.id === active ? ' aria-current="page"' : "") + ">" + t.label + "</a>";
    }).join("") + "</nav>";
  }

  function paintSessionRail() {
    const rail = document.getElementById("session-rail");
    if (!rail || !window.Session) return;
    const p = hashParts();
    const a = p[0] || "home";
    const hide = !DP.level || a === "home" || a === "levels" || a === "level" || (quiz && !quiz.done);
    if (hide || !Session.isActive()) {
      rail.hidden = true;
      rail.innerHTML = "";
      return;
    }
    const session = Session.ensure();
    const next = Session.next();
    const total = session.steps.length;
    const doneN = total - Session.remaining();
    rail.hidden = false;
    rail.innerHTML = "<p>Today’s session · <strong>" + doneN + " of " + total + "</strong> done</p>" +
      (next ? '<a class="btn btn-primary" href="' + next.href + '">Continue</a>' : "");
  }

  function focusMainHeading() {
    if (!view) return;
    if (quiz && !quiz.done) return;
    const h = view.querySelector("h1");
    if (!h) return;
    h.setAttribute("tabindex", "-1");
    try { h.focus({ preventScroll: true }); }
    catch (e) { h.focus(); }
  }

  function afterPaint() {
    enhanceGerman(view);
    paintSessionRail();
    focusMainHeading();
  }

  function bindExamDate(inputId, clearId) {
    const input = document.getElementById(inputId);
    if (!input) return;
    input.addEventListener("change", function () {
      Progress.setExamDate(input.value || null);
      route();
    });
    const clear = document.getElementById(clearId);
    if (clear) {
      clear.onclick = function () {
        Progress.setExamDate(null);
        route();
      };
    }
  }

  function examDateRow() {
    const c = Session.clock();
    return '<div class="exam-date-row">' +
      '<label for="exam-date">Exam date</label>' +
      '<input id="exam-date" type="date" value="' + esc(c.examDate || "") + '" />' +
      (c.examDate ? '<button type="button" class="btn" id="exam-date-clear">Clear</button>' : "") +
      '<span class="pass-meta">Optional. Sets week from the sitting, not from first visit.</span></div>';
  }

  function exitQuiz() {
    if (!quiz) return;
    if (!quiz.done && quiz.i > 0 && !window.confirm("Leave this quiz? Score so far will not be saved.")) return;
    const dest = quiz.exitHash || "#/grammar";
    quiz = null;
    if (location.hash === dest) route();
    else location.hash = dest;
  }

  function badge(level) {
    return '<span class="badge badge-' + esc(level) + '">' + esc(level) + "</span>";
  }

  function pctBar(n, d) {
    const p = d ? Math.round((n / d) * 100) : 0;
    return '<div class="progress-bar" title="' + p + '%"><span style="width:' + p + '%"></span></div>';
  }

  let quiz = null;
  let hoerenRun = null;
  let drillClock = null;
  let extraInterval = null;
  let localEars = { url: null, name: "" };

  function stopDrillClock() {
    if (drillClock) {
      clearInterval(drillClock);
      drillClock = null;
    }
    if (extraInterval) {
      clearInterval(extraInterval);
      extraInterval = null;
    }
  }

  function formatClock(sec) {
    const n = Math.max(0, sec);
    const mm = Math.floor(n / 60);
    const ss = n % 60;
    return mm + ":" + (ss < 10 ? "0" : "") + ss;
  }

  function startDrillClock(sec, onTick, onEnd) {
    stopDrillClock();
    let left = sec;
    onTick(left);
    drillClock = setInterval(function () {
      left -= 1;
      onTick(left);
      if (left <= 0) {
        stopDrillClock();
        if (onEnd) onEnd();
      }
    }, 1000);
  }

  function stopHoerenRun() {
    stopDrillClock();
    if (hoerenRun) {
      hoerenRun.aborted = true;
      if (hoerenRun.timer) clearInterval(hoerenRun.timer);
      if (hoerenRun.skipRead) hoerenRun.skipRead();
      hoerenRun = null;
    }
    if (Engine.stopSpeak) Engine.stopSpeak();
  }

  function hashParts() {
    const h = (location.hash || "#/").replace(/^#/, "");
    return h.split("/").filter(Boolean);
  }

  function route() {
    try {
      routeInner();
    } catch (err) {
      console.error(err);
      if (view) {
        view.innerHTML = "<h1>Could not open this page</h1>" +
          '<p class="lead">' + esc(err && err.message ? err.message : err) + "</p>" +
          '<div class="btn-row"><a class="btn" href="#/">Back to Today</a></div>';
      }
    }
  }

  function routeInner() {
    setNavOpen(false);
    stopHoerenRun();
    const p = hashParts();
    const a = p[0] || "home";
    if (quiz && !quiz.done) {
      const keepVocab = a === "vocab" && p[2] === "quiz" && quiz.setId === "vocab-" + p[1];
      const keepTopic = a === "topics" && p[2] === "quiz" && quiz.setId === "topic-" + p[1];
      const keepGrammar = a === "grammar" && p[1] && quiz.setId === "g-" + p[1];
      const keepDrill = a === "drill" && p[1] && quiz.setId === "drill-" + p[1];
      if (keepVocab || keepTopic || keepGrammar || keepDrill) return;
      quiz = null;
    }
    if (a === "levels" || a === "level") {
      paintChrome();
      refreshStats();
      renderLevels();
      afterPaint();
      return;
    }
    if (!DP.level) {
      ensureLevel();
      if (!DP.level) {
        paintChrome();
        refreshStats();
        renderLevels();
        afterPaint();
        return;
      }
    }
    paintChrome();
    refreshStats();
    if (a === "plan") renderPlan();
    else if (a === "practice") renderGrammar();
    else if (a === "grammar" && p[1]) renderGrammarLesson(p[1]);
    else if (a === "grammar") renderGrammar();
    else if (a === "vocab" && p[1] && p[2] === "quiz") startVocabQuiz(p[1]);
    else if (a === "vocab" && p[1]) renderVocabTopic(p[1]);
    else if (a === "vocab") renderVocab();
    else if (a === "topics" && p[1] && p[2] === "quiz") startTopicChunkQuiz(p[1]);
    else if (a === "topics" && p[1]) renderTopic(p[1]);
    else if (a === "topics") renderTopics();
    else if (a === "drill" && p[1]) startDrill(p[1]);
    else if (a === "exam" && p[1] === "lesen" && p[2]) renderLesen(p[2]);
    else if (a === "exam" && p[1] === "lesen") renderLesenList();
    else if (a === "exam" && p[1] === "sprachbausteine") renderSB();
    else if (a === "exam" && p[1] === "hoeren" && p[2]) renderHoerenPaper(p[2], p[3]);
    else if (a === "exam" && p[1] === "hoeren") renderHoeren();
    else if (a === "exam" && p[1] === "ears") renderExamEars();
    else if (a === "exam" && p[1] === "schreiben") renderSchreibenList();
    else if (a === "exam" && p[1] === "sprechen" && p[2] === "run") renderSprechenRun();
    else if (a === "exam" && p[1] === "sprechen") renderSprechen();
    else if (a === "exam" && p[1] === "mock" && p[2]) renderMock(p[2]);
    else if (a === "exam" && p[1] === "mock") renderMockList();
    else if (a === "exam") renderExamHub();
    else if (a === "schreiben" && p[1]) renderSchreiben(p[1], p[2]);
    else if (a === "b2") renderB2();
    else if (a === "progress") renderProgress();
    else renderHome();
    afterPaint();
  }

  function renderLevels() {
    setNav("levels");
    setTrail([{ label: "Choose level" }]);
    document.title = "Choose level · Deutschpfad";
    const summaries = Progress.summaryAll();
    view.innerHTML = '<p class="kicker">Deutschpfad</p>' +
      "<h1>Which telc exam are you aiming for?</h1>" +
      '<p class="lead">Each level has its own 8-week plan, vocabulary, grammar, exam gym, printable book, and saved progress. Start at your true level — A1 if you are new, A2 if you can survive daily life, B1 to pass the classic certificate.</p>' +
      '<div class="level-picks">' +
      LEVEL_META.map(function (lv) {
        const sum = summaries.find(function (s) { return s.id === lv.id; }) || { checks: 0, topics: 0 };
        return '<button type="button" class="level-pick" data-pick="' + lv.id + '">' +
          "<h3>" + esc(lv.title) + " " + badge(lv.id) + "</h3>" +
          "<p><strong>" + esc(lv.subtitle) + "</strong></p>" +
          "<p>" + esc(lv.blurb) + "</p>" +
          '<p class="q-meta">' + sum.topics + " topics ticked · " + sum.checks + " plan ticks</p></button>";
      }).join("") + "</div>" +
      '<div class="structure-note"><h3>Structure (yes, this is right)</h3><ol>' +
        "<li><strong>Pick one level</strong> and stay there until mocks feel easy.</li>" +
        "<li><strong>Book</strong> = knowledge tables. <strong>Site</strong> = drills + exam shape.</li>" +
        "<li><strong>A1 → A2 → B1</strong> is the normal path. B2 stretch lives inside B1 for overshoot.</li>" +
        "<li>Full <strong>telc B2 exam gym</strong> can come later — not required to ace B1.</li>" +
      "</ol></div>";
    view.querySelectorAll("[data-pick]").forEach(function (btn) {
      btn.onclick = function () {
        switchToLevel(btn.getAttribute("data-pick"));
        location.hash = "#/";
      };
    });
  }

  function renderHome() {
    setNav("home");
    setTrail([{ label: "Today" }]);
    const m = meta();
    const c = Session.clock();
    const session = Session.ensure();
    const w = Session.week(c);
    const s = Progress.get();
    const open = Session.next();
    const complete = Session.isComplete();
    const started = !!(session.started && open);
    let cta;
    if (!session.steps.length) {
      cta = '<a class="btn btn-warm" href="#/exam/mock">Sit a mock</a>';
    } else if (complete) {
      cta = '<a class="btn" href="#/progress">Open pass map</a>';
    } else {
      cta = '<button type="button" class="btn btn-warm" id="start-session">' +
        (started ? "Continue session" : "Start session") + "</button>";
    }
    const stepsHtml = session.steps.length
      ? '<ol class="session-steps">' + session.steps.map(function (st, i) {
          const current = open && st.id === open.id;
          return '<li class="' + (st.done ? "is-done" : current ? "is-current" : "") + '">' +
            "<div><span class=\"session-title\">" + esc(st.title) + "</span>" +
            '<span class="session-blurb">' + esc(st.blurb) + "</span></div></li>";
        }).join("") + "</ol>"
      : "<p>Nothing is due. Optional: a mock, or rest.</p>";
    const status = complete
      ? "<p>Today is done. Reviews come back on a 1-, 3-, or 7-day list — not because one score was weak, but because that box is due.</p>"
      : "<p>Due reviews first, then this week’s next task, then production. One button. Stop when the list is empty.</p>";
    view.innerHTML =
      '<p class="kicker">' + esc(m.exam) + "</p>" +
      "<h1>Today</h1>" +
      '<p class="lead">' + Session.leadCopy(c) + "</p>" +
      '<div class="session-card">' +
        "<h2>Today’s session</h2>" +
        '<p class="session-week"><strong>' + esc(w.title) + "</strong> — " + esc(w.goal) +
        " · " + w.tasks.filter(function (t) { return s.checks[t.id]; }).length + "/" + w.tasks.length + " ticks this week.</p>" +
        stepsHtml + status +
        '<div class="btn-row">' + cta +
        '<a class="btn" href="#/plan">Full plan</a></div>' +
      "</div>" +
      examDateRow();
    bindExamDate("exam-date", "exam-date-clear");
    const startBtn = document.getElementById("start-session");
    if (startBtn) {
      startBtn.onclick = function () {
        const step = Session.start();
        if (!step) {
          location.hash = "#/exam/mock";
          return;
        }
        if (location.hash === step.href) route();
        else location.hash = step.href;
      };
    }
  }

  function renderPlan() {
    setNav("practice");
    setTrail([{ label: "Practice", href: "#/grammar" }, { label: "Plan" }]);
    const m = meta();
    const s = Progress.get();
    const c = Session.clock();
    const weekN = c.weekN;
    view.innerHTML = practiceTabs("plan") +
      "<h1>Eight weeks · " + esc(m.exam) + "</h1>" +
      '<p class="lead">' + Session.leadCopy(c) + " Ticks save under <strong>" + m.title + "</strong> only.</p>" +
      WEEKS.map(function (w) {
        const n = w.tasks.filter(function (t) { return s.checks[t.id]; }).length;
        const current = w.id === weekN;
        return '<section class="week-block' + (current ? " is-current" : "") + '" id="week-' + w.id + '">' +
          "<h3>Week " + w.id + " · " + esc(w.title) + (current ? " · this week" : "") + " " + badge(m.id) + "</h3>" +
          "<p>" + esc(w.goal) + "</p>" + pctBar(n, w.tasks.length) +
          w.tasks.map(function (t) {
            return '<div class="week-item">' +
              '<input class="check" type="checkbox" data-check="' + t.id + '"' + (s.checks[t.id] ? " checked" : "") + " />" +
              "<div><a href=\"" + t.href + "\">" + esc(t.label) + "</a></div>" +
              "<div>" + (s.checks[t.id] ? "✓" : "") + "</div></div>";
          }).join("") +
          "</section>";
      }).join("");
    view.querySelectorAll("[data-check]").forEach(function (box) {
      box.addEventListener("change", function () {
        Progress.toggleCheck(box.getAttribute("data-check"), box.checked);
        refreshStats();
      });
    });
    const currentEl = document.getElementById("week-" + weekN);
    if (currentEl && currentEl.scrollIntoView) {
      const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      currentEl.scrollIntoView({ block: "nearest", behavior: reduce ? "auto" : "smooth" });
    }
  }

  function grammarCoverageHtml() {
    const id = (meta() && meta().id) || "";
    const blocks = {
      a1: {
        kicker: "A1 coverage (Start Deutsch 1)",
        text: "This academy now covers the full A1 grammar set used in telc/Goethe Start Deutsch 1: articles and plurals, sein/haben plus war/hatte, present + verb second, questions, negation including doch, accusative and dative (mir helfen, mit dem Bus), possessives, modals (mögen vs möchten), separable verbs, imperative, time and ordinals, prepositions, und/aber/denn/dann/wenn, adjectives (zu teuer, billiger als), dieser/man/etwas/welche, and survival dialogues. Grammar is tested through the four skills — there is no Sprachbausteine paper at A1."
      },
      a2: {
        kicker: "A2 coverage (Start Deutsch 2)",
        text: "This academy covers the A2 grammar you must control for Start Deutsch 2: Perfekt, dative, Wechselpräpositionen, connectors with verb-last, separable verbs, adjective endings, comparatives, modal Präteritum, reflexives, verbs with prepositions, ja/nein/doch, zu / um … zu, polite Könnten/würde/wäre, and letter/speaking patterns. Official themes include Wohnen, Arbeit, Gesundheit, Reisen, Bank/Post/Amt, Einkaufen/Umtausch, Feste, Medien, and Meinungen. Relative clauses and passive are here for recognition on signs and ads — do not force them in a 60-word letter. Not DTZ."
      },
      b1: {
        kicker: "B1 coverage (Zertifikat Deutsch)",
        text: "This academy covers the full telc A1–B1 grammar set used in Zertifikat Deutsch: cases and adjective endings, connectors including two-part pairs (zwar … aber, weder … noch), Konjunktiv II, relatives, zu / um zu / ohne zu, passive, reflexives, Plusquamperfekt, Futur I and the three jobs of werden, n-declension, genitive, da-/wo-compounds, Präteritum, lassen / brauchen zu / als ob, imperative, indefinites (man / jemand / irgend-), stellen/liegen pairs, modal particles, pronouns (ihn/ihm, dieser, meiner), negation (kein vs nicht), comparatives and ordinals, and questions (W-words, ob/wann, worauf vs auf wen). Packed participles are taught for Lesen unpack. Konjunktiv I, nominalisation, and rumour-modals stay recognition-first (B2 stretch). Vocabulary follows the official theme groups (housing, Amt, work, health, feelings, body, clothes, letter formulas, function words) — original exam sentences, not a copied wordlist."
      }
    };
    const b = blocks[id];
    if (!b) return "";
    return '<div class="card" style="margin-bottom:1rem"><p class="kicker">' + b.kicker + "</p><p>" + b.text + "</p></div>";
  }

  function renderPractice() {
    renderGrammar();
  }

  function renderGrammar() {
    setNav("practice");
    setTrail([{ label: "Practice" }]);
    const m = meta();
    view.innerHTML = practiceTabs("grammar") +
      "<h1>Grammar academy</h1>" +
      '<p class="lead">These are full lessons — tables, traps, and a produce list. Do the lesson, say every German example, then the quiz until 80%. This is ' + esc(m.title) + " grammar only.</p>" +
      grammarCoverageHtml() +
      '<label class="filter-label" for="list-filter">Filter lessons</label>' +
      '<input class="list-filter" id="list-filter" type="search" placeholder="Filter lessons…" autocomplete="off" />' +
      '<div class="grid grid-2">' +
      GRAMMAR.map(function (g) {
        const qs = Engine.bySet(g.id);
        const n = qs.length;
        return '<a class="card clickable filter-item" data-filter="' + esc(g.title) + '" href="#/grammar/' + g.id + '">' +
          "<h3>" + esc(g.title) + " " + badge(g.level) + "</h3>" +
          "<p>" + g.minutes + " min" + (n ? " · " + n + " quiz items" : "") + "</p></a>";
      }).join("") + "</div>" +
      "<h2>Mixed drills</h2>" +
      '<div class="grid grid-2">' +
      DRILLS.map(function (d) {
        return '<a class="card clickable filter-item" data-filter="' + esc(d.title + " " + (d.blurb || "")) + '" href="#/drill/' + d.id + '"><h3>' + esc(d.title) + "</h3><p>" + esc(d.blurb) + "</p></a>";
      }).join("") + "</div>";
    bindListFilter("list-filter");
  }

  function renderGrammarLesson(id) {
    setNav("practice");
    const g = GRAMMAR.find(function (x) { return x.id === id; });
    if (!g) { view.innerHTML = "<p>Lesson not found.</p>"; return; }
    setTrail([{ label: "Practice", href: "#/grammar" }, { label: g.title }]);
    const n = Engine.bySet(g.id).length;
    view.innerHTML = '<p class="kicker">Grammar · ' + g.level.toUpperCase() + " · ~" + g.minutes + " min</p>" +
      "<h1>" + esc(g.title) + "</h1>" +
      '<p class="lead">Read the whole lesson, say every <span class="de">grey German</span> example aloud, then take the quiz to 80%. This is the grammar telc ' + esc(meta().title) + " actually uses.</p>" +
      '<article class="lesson">' + g.html + "</article>" +
      '<div class="btn-row">' +
        (n ? '<button class="btn btn-primary" id="start-q">Quiz this topic (' + n + ")</button>" : "") +
        '<a class="btn" href="#/grammar">All lessons</a></div>';
    const btn = document.getElementById("start-q");
    if (btn) btn.onclick = function () {
      Progress.markDone("lesson-" + id);
      beginQuiz(Engine.shuffle(Engine.bySet(id)), g.title + " quiz", "g-" + id, {
        exitHash: "#/grammar/" + id,
        parentLabel: g.title,
        navId: "practice"
      });
    };
  }

  function renderVocab() {
    setNav("practice");
    setTrail([{ label: "Practice", href: "#/grammar" }, { label: "Vocabulary" }]);
    const m = meta();
    view.innerHTML = practiceTabs("vocab") +
      "<h1>Vocabulary trainer</h1>" +
      '<p class="lead">Always learn <strong>article + word</strong>. Tap the speaker. This list is built around official telc ' + esc(m.title) + " topic areas — " +
      (VOCAB || []).length + " words and phrases. Do not skip to another level.</p>" +
      '<label class="filter-label" for="list-filter">Filter packs</label>' +
      '<input class="list-filter" id="list-filter" type="search" placeholder="Filter packs…" autocomplete="off" />' +
      '<div class="grid grid-2">' +
      VOCAB_TOPICS.map(function (t) {
        const n = Engine.vocabByTopic(t.id).length;
        return '<a class="card clickable filter-item" data-filter="' + esc(t.title + " " + (t.blurb || "")) + '" href="#/vocab/' + t.id + '"><h3>' + esc(t.title) + "</h3><p>" + esc(t.blurb) + " · " + n + " words</p></a>";
      }).join("") + "</div>";
    bindListFilter("list-filter");
  }

  function renderVocabTopic(id) {
    setNav("practice");
    const topic = VOCAB_TOPICS.find(function (t) { return t.id === id; });
    const words = Engine.vocabByTopic(id);
    if (!topic) { view.innerHTML = "<p>Topic not found.</p>"; return; }
    setTrail([{ label: "Practice", href: "#/vocab" }, { label: topic.title }]);
    let i = 0;
    let front = true;
    function cardHtml() {
      const w = words[i];
      const label = (w.art ? w.art + " " : "") + w.de;
      const ex = w.ex ? '<p class="vocab-ex de">' + esc(w.ex) + "</p>" : "";
      const note = w.note ? '<p class="q-meta">' + esc(w.note) + "</p>" : "";
      return '<div class="card flash" id="flash">' +
        (front
          ? '<div class="flash-head"><div class="big de">' + esc(label) + "</div></div><div class=\"sub\">Tap card for English · tap speaker to hear it" + (w.pl ? " · plural: " + esc(w.pl) : "") + "</div>" + ex + note
          : '<div><div class="big">' + esc(w.en) + '</div><div class="sub"><span class="de">' + esc(label) + "</span>" + (w.pl ? " · " + esc(w.pl) : "") + "</div>" + ex + note + "</div>") +
        "</div>" +
        '<p class="q-meta">' + (i + 1) + " / " + words.length + " " + badge(w.level) + "</p>";
    }
    function listHtml() {
      return '<h2>All words in this topic</h2><p class="lead">Speaker beside each German word. Learn article + noun as one chunk.</p>' +
        words.map(function (w) {
          const label = (w.art ? w.art + " " : "") + w.de;
          return '<div class="vocab-row">' +
            '<span class="de">' + esc(label) + "</span>" +
            '<span class="vocab-en">' + esc(w.en) + (w.pl ? " · " + esc(w.pl) : "") +
            (w.ex ? "<br><em class=\"de\">" + esc(w.ex) + "</em>" : "") +
            "</span></div>";
        }).join("");
    }
    view.innerHTML = "<h1>" + esc(topic.title) + "</h1>" +
      '<p class="lead">Tap the card to flip. Tap the speaker to hear German. Then quiz yourself by typing.</p>' +
      '<div id="flash-wrap">' + cardHtml() + "</div>" +
      '<div class="btn-row">' +
        '<button class="btn" id="prev">Previous</button>' +
        '<button class="btn" id="next">Next</button>' +
        '<button class="btn btn-primary" id="quiz">Quiz ' + Math.min(20, words.length) + "</button>" +
        '<a class="btn" href="#/vocab">All packs</a>' +
      "</div>" +
      '<div class="card" style="margin-top:1.2rem" id="word-list">' + listHtml() + "</div>";
    function paint() {
      document.getElementById("flash-wrap").innerHTML = cardHtml();
      document.getElementById("flash").onclick = function (e) {
        if (e.target.closest(".speak-btn")) return;
        front = !front;
        paint();
      };
      enhanceGerman(document.getElementById("flash-wrap"));
    }
    paint();
    document.getElementById("next").onclick = function () {
      const last = i === words.length - 1;
      i = (i + 1) % words.length;
      front = true;
      Progress.markVocab(words[i].id);
      if (last && window.Session) Session.reviewVocab(id);
      paint();
    };
    document.getElementById("prev").onclick = function () { i = (i - 1 + words.length) % words.length; front = true; paint(); };
    document.getElementById("quiz").onclick = function () { location.hash = "#/vocab/" + id + "/quiz"; };
  }

  function topicList() {
    return window.TOPICS || [];
  }

  function formatCardHtml() {
    const fmt = window.EXAM_FORMAT;
    if (!fmt) return "";
    const rows = (fmt.written || []).map(function (p) {
      return "<tr><td data-label=\"Subtest\"><strong>" + esc(p.name) + "</strong><br><span class='q-meta'>" + (p.parts || "") + " parts · " + (p.items || "") + "</span></td>" +
        "<td data-label=\"Time\">" + (p.minutes ? p.minutes + " min" : "—") + "</td>" +
        "<td data-label=\"Points\">" + (p.points != null ? p.points : "—") + "</td>" +
        "<td data-label=\"What it looks like\">" + esc(p.note || "") + "</td></tr>";
    }).join("");
    const oral = fmt.oral || {};
    return '<div class="card" style="margin-bottom:1rem"><p class="kicker">Official format</p><h3>' + esc(fmt.name) + "</h3>" +
      "<p>" + esc(fmt.passRule || "") + "</p>" +
      (fmt.notThisExam ? "<p class='q-meta'>" + esc(fmt.notThisExam) + "</p>" : "") +
      '<table class="format-table"><tr><th>Subtest</th><th>Time</th><th>Points</th><th>What it looks like</th></tr>' +
      rows +
      "<tr><td data-label=\"Subtest\"><strong>Sprechen</strong><br><span class='q-meta'>" + (oral.parts || 3) + " parts" + (oral.prep ? " · " + oral.prep + " min prep" : "") + "</span></td>" +
      "<td data-label=\"Time\">~" + (oral.minutes || 15) + " min</td><td data-label=\"Points\">" + (oral.points != null ? oral.points : "—") + "</td>" +
      "<td data-label=\"What it looks like\">" + esc(oral.note || "") + "</td></tr></table>" +
      (fmt.officialUrl ? '<p style="margin-top:0.7rem"><a href="' + fmt.officialUrl + '" target="_blank" rel="noopener">telc.net — official page + Modelltest</a></p>' : "") +
      "</div>";
  }

  function renderTopics() {
    setNav("topics");
    setTrail([{ label: "Topics" }]);
    const m = meta();
    const list = topicList();
    view.innerHTML = "<h1>Official " + esc(m.title) + " topics</h1>" +
      '<p class="lead">These are the official theme areas ' + esc(m.exam) + " tests (GER inventories used by telc). Each topic is a short course: can-do statements, how the paper tests it, traps, chunks, then vocab/grammar/letters. Tick a topic only when you can produce it without English notes.</p>" +
      formatCardHtml() +
      '<label class="filter-label" for="list-filter">Filter topics</label>' +
      '<input class="list-filter" id="list-filter" type="search" placeholder="Filter topics…" autocomplete="off" />' +
      '<div class="grid grid-2">' +
      list.map(function (t) {
        const done = Progress.isDone("topic-" + t.id);
        const core = t.weight === "exam-core" || t.weight === "always";
        return '<a class="card clickable filter-item" data-filter="' + esc((t.titleDe || "") + " " + (t.title || "") + " " + (t.blurb || "")) + '" href="#/topics/' + t.id + '">' +
          '<p class="kicker"><span class="weight-pill' + (core ? " is-core" : "") + '">' + esc(t.weight || "topic") + "</span>" +
          (done ? " · can produce" : "") + "</p>" +
          "<h3>" + esc(t.titleDe) + "</h3><p>" + esc(t.title) + " — " + esc(t.blurb) + "</p></a>";
      }).join("") + "</div>";
    bindListFilter("list-filter");
  }

  function renderTopic(id) {
    const t = topicList().find(function (x) { return x.id === id; });
    if (!t) { view.innerHTML = "<p>Topic not found. <a href='#/topics'>All topics</a></p>"; return; }
    setNav("topics");
    setTrail([{ label: "Topics", href: "#/topics" }, { label: t.titleDe }]);
    const m = meta();
    const gById = {};
    (GRAMMAR || []).forEach(function (g) { gById[g.id] = g; });
    const vById = {};
    (VOCAB_TOPICS || []).forEach(function (v) { vById[v.id] = v; });
    const writeById = {};
    ((EXAM && EXAM.schreiben) || []).forEach(function (w) { writeById[w.id] = w; });
    function linkCard(href, title, blurb) {
      return '<a class="card clickable" href="' + href + '"><h3>' + esc(title) + "</h3><p>" + esc(blurb || "") + "</p></a>";
    }
    const vocabHtml = (t.vocab || []).map(function (vid) {
      const v = vById[vid];
      return linkCard("#/vocab/" + vid, v ? v.title : vid, v ? v.blurb : "Vocabulary");
    }).join("");
    const grammarHtml = (t.grammar || []).map(function (gid) {
      const g = gById[gid];
      if (!g) return "";
      return linkCard("#/grammar/" + gid, g.title, "Lesson + quiz");
    }).join("");
    const writeHtml = (t.schreiben || []).map(function (wid) {
      const w = writeById[wid];
      return linkCard("#/schreiben/" + wid, w ? w.title : wid, w ? (w.register + " · " + (w.situationEn || "letter")) : "Writing task");
    }).join("");
    const lesenHtml = (t.lesen || []).map(function (lid) {
      return linkCard("#/exam/lesen/" + lid, "Lesen " + lid, "Paper in exam shape");
    }).join("");
    view.innerHTML = '<p class="kicker">' + esc(t.weight || "topic") + (t.official ? " · official inventory" : "") + "</p>" +
      "<h1>" + esc(t.titleDe) + "</h1>" +
      "<p class='lead'>" + esc(t.blurb) + "</p>" +
      (t.exam ? "<p><strong>In the exam:</strong> " + esc(t.exam) + "</p>" : "") +
      (t.explain ? '<article class="lesson topic-explain">' + t.explain + "</article>" : "") +
      ((t.canDo && t.canDo.length) ? "<h2>GER / telc can-do (this topic)</h2><ul>" + t.canDo.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "") +
      ((t.examHow && t.examHow.length) ? "<h2>How it appears in telc " + esc(m.title) + "</h2><ul>" + t.examHow.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "") +
      ((t.subtopics && t.subtopics.length) ? "<h2>Cover these subtopics</h2><ul>" + t.subtopics.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "") +
      "<h2>You must be able to</h2><ul>" + (t.youMust || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" +
      ((t.traps && t.traps.length) ? '<div class="warn" style="margin:1rem 0"><span class="label-s">Exam traps</span><ul>' + t.traps.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>" : "") +
      "<h2>Say these without looking</h2>" +
      (t.chunks || []).map(function (c) {
        return '<div class="chunk-row"><div class="de">' + esc(c.de) + '</div><div class="en-hint">' + esc(c.en || "") + "</div></div>";
      }).join("") +
      '<div class="btn-row" style="margin-top:1rem">' +
        ((t.chunks && t.chunks.length) ? '<a class="btn btn-primary" href="#/topics/' + t.id + '/quiz">Quiz these chunks</a>' : "") +
        (t.sprechen ? '<a class="btn" href="#/exam/sprechen/run">Oral run</a>' : "") +
      "</div>" +
      (vocabHtml ? "<h2>Vocabulary</h2><div class='grid grid-2'>" + vocabHtml + "</div>" : "") +
      (grammarHtml ? "<h2>Grammar that unlocks this topic</h2><div class='grid grid-2'>" + grammarHtml + "</div>" : "") +
      (writeHtml ? "<h2>Write it</h2><div class='grid grid-2'>" + writeHtml + "</div>" : "") +
      (lesenHtml ? "<h2>Read it</h2><div class='grid grid-2'>" + lesenHtml + "</div>" : "") +
      '<div class="card" style="margin-top:1.2rem"><p>Tick only when you can speak and write this topic without English notes.</p>' +
      '<div class="btn-row"><button class="btn btn-warm" id="topic-done">' + (Progress.isDone("topic-" + t.id) ? "Ticked — I can produce this" : "I can produce this topic") + "</button>" +
      '<a class="btn" href="#/topics">All topics</a></div></div>';
    enhanceGerman(view);
    document.getElementById("topic-done").onclick = function () {
      Progress.markDone("topic-" + t.id);
      toast("Topic ticked. Next: a letter or oral run on the same theme.");
      refreshStats();
      renderTopic(id);
    };
  }

  function startTopicChunkQuiz(id) {
    const t = topicList().find(function (x) { return x.id === id; });
    if (!t || !t.chunks || !t.chunks.length) {
      view.innerHTML = "<p>No chunks to quiz. <a href='#/topics/" + esc(id) + "'>Back</a></p>";
      return;
    }
    const qs = t.chunks.map(function (c, i) {
      const others = t.chunks.filter(function (x) { return x.de !== c.de; });
      const opts = Engine.shuffle([c.de].concat(Engine.shuffle(others).slice(0, 2).map(function (x) { return x.de; })));
      return {
        id: "chunk-" + id + "-" + i,
        set: "topic-" + id,
        type: "mcq",
        prompt: c.en || "Choose the German sentence.",
        options: opts,
        answer: c.de,
        explain: c.de,
        level: DP.level
      };
    });
    beginQuiz(Engine.shuffle(qs), (t.titleDe || t.title) + " — chunks", "topic-" + id, {
      exitHash: "#/topics/" + id,
      parentLabel: t.titleDe || t.title,
      navId: "topics"
    });
  }

  function startVocabQuiz(topic) {
    const words = Engine.vocabByTopic(topic);
    beginQuiz(Engine.makeVocabQuiz(words, Math.min(20, Math.max(12, words.length))), "Vocab quiz", "vocab-" + topic, {
      exitHash: "#/vocab/" + topic,
      parentLabel: "Vocabulary",
      navId: "practice"
    });
  }

  function startDrill(id) {
    const d = DRILLS.find(function (x) { return x.id === id; });
    if (!d) { view.innerHTML = "<p>Drill not found.</p>"; return; }
    beginQuiz(Engine.shuffle(Engine.forDrill(d)), d.title, "drill-" + id, {
      exitHash: "#/grammar",
      parentLabel: "Practice",
      navId: "practice"
    });
  }

  function beginQuiz(questions, title, setId, opts) {
    if (!questions.length) {
      view.innerHTML = "<p>No questions in this set yet.</p>";
      return;
    }
    opts = opts || {};
    quiz = {
      questions: questions,
      i: 0,
      correct: 0,
      title: title,
      setId: setId,
      locked: false,
      done: false,
      missed: [],
      exitHash: opts.exitHash || "#/grammar",
      parentLabel: opts.parentLabel || "Practice",
      navId: opts.navId || "practice"
    };
    renderQuiz();
  }

  function formatPrompt(text) {
    return esc(text).replace(/_{2,}/g, '<span class="blank" aria-label="blank">______</span>');
  }

  function answerLabel(q) {
    if (q.type === "tf") return q.answer ? "True / Richtig" : "False / Falsch";
    if (Array.isArray(q.answer)) return q.answer[0];
    return String(q.answer);
  }

  function renderQuiz() {
    paintSessionRail();
    setNav(quiz.navId || "practice");
    setTrail([
      { label: quiz.parentLabel || "Practice", href: quiz.exitHash || "#/grammar" },
      { label: quiz.title }
    ]);
    const q = quiz.questions[quiz.i];
    const n = quiz.questions.length;
    const step = quiz.i + 1;
    let hint = "Choose one answer.";
    if (q.type === "tf") hint = "True or false?";
    else if (q.type === "order") hint = "Tap the words in the correct order, then Check.";
    else if (q.type === "gap" || q.type === "type") hint = "Type your answer, then Check.";

    let body = '<p class="q-meta">Question <strong>' + step + "</strong> of " + n +
      " · score so far " + quiz.correct + " " + (q.level ? badge(q.level) : "") + "</p>" +
      pctBar(step - 1, n) +
      '<p class="q-hint">' + hint + "</p>" +
      '<h2 class="q-prompt">' + (q.de ? '<span class="de">' + esc(q.de) + "</span><br>" : "") + formatPrompt(q.prompt) + "</h2>";

    if (q.type === "mcq") {
      body += '<div class="options">' + q.options.map(function (o, oi) {
        return '<button type="button" class="opt" data-v="' + esc(o) + '"><span class="opt-letter">' +
          String.fromCharCode(97 + oi) + "</span> " + esc(o) + "</button>";
      }).join("") + "</div>";
    } else if (q.type === "tf") {
      body += '<div class="options">' +
        '<button type="button" class="opt" data-v="true">a · True / Richtig</button>' +
        '<button type="button" class="opt" data-v="false">b · False / Falsch</button></div>';
    } else if (q.type === "order") {
      body += '<div class="chips" id="bank">' + q.words.map(function (w, idx) {
        return '<button type="button" class="chip" data-i="' + idx + '">' + esc(w) + "</button>";
      }).join("") + '</div><p id="built" class="de built-line"></p><div class="btn-row"><button type="button" class="btn" id="undo">Undo</button><button type="button" class="btn btn-primary" id="submit">Check answer</button></div>';
    } else {
      body += '<div class="gap-row"><input type="text" id="typed" placeholder="Type the German answer…" autocomplete="off" spellcheck="false" />' +
        '<button type="button" class="btn btn-primary" id="submit">Check answer</button></div>';
    }
    body += '<div id="explain" class="explain-wrap" hidden></div>';
    view.innerHTML = '<div class="quiz-toolbar"><button type="button" class="btn" id="quiz-exit">Exit quiz</button></div>' +
      '<div class="card q-card">' + body + "</div>";

    quiz.locked = false;
    quiz.built = [];

    function goNext() {
      quiz.i += 1;
      if (quiz.i >= quiz.questions.length) renderQuizDone();
      else renderQuiz();
    }

    function finishQ(ok, picked) {
      if (quiz.locked) return;
      quiz.locked = true;
      if (ok) quiz.correct += 1;
      else {
        if (!quiz.missed) quiz.missed = [];
        quiz.missed.push({ prompt: q.de || q.prompt, answer: answerLabel(q), explain: q.explain || "" });
      }

      const typed = document.getElementById("typed");
      if (typed) typed.disabled = true;
      const submit = document.getElementById("submit");
      if (submit) submit.disabled = true;
      const undo = document.getElementById("undo");
      if (undo) undo.disabled = true;

      view.querySelectorAll(".opt").forEach(function (b) {
        b.disabled = true;
        if (q.type === "mcq" && b.getAttribute("data-v") === q.answer) b.classList.add("correct");
        if (q.type === "tf" && String(q.answer) === b.getAttribute("data-v")) b.classList.add("correct");
        if (!ok && b.getAttribute("data-v") === String(picked)) b.classList.add("wrong");
      });
      view.querySelectorAll(".chip").forEach(function (c) { c.disabled = true; });

      const box = document.getElementById("explain");
      box.hidden = false;
      box.className = "explain-wrap " + (ok ? "is-correct" : "is-wrong");
      const why = (q.explain && String(q.explain).trim())
        ? esc(q.explain)
        : "Remember this pattern for the exam — then continue when you are ready.";
      box.innerHTML =
        '<div class="explain-result">' + (ok ? "Correct" : "Not quite") + "</div>" +
        '<p class="explain-answer">Answer: <strong class="de">' + esc(answerLabel(q)) + "</strong></p>" +
        '<p class="explain-why"><span class="explain-label">Explanation</span> ' + why + "</p>" +
        '<div class="btn-row">' +
          '<button type="button" class="btn btn-primary" id="next-q">' +
            (quiz.i + 1 >= quiz.questions.length ? "See results" : "Next question") +
          "</button>" +
        "</div>";
      const nextBtn = document.getElementById("next-q");
      nextBtn.focus();
      nextBtn.onclick = goNext;
      enhanceGerman(box);
    }

    view.querySelectorAll(".opt").forEach(function (b) {
      b.onclick = function () {
        let val = b.getAttribute("data-v");
        if (q.type === "tf") val = val === "true";
        finishQ(Engine.check(q, val), val);
      };
    });
    const submit = document.getElementById("submit");
    if (submit && q.type !== "order") {
      const typed = document.getElementById("typed");
      const go = function () {
        if (quiz.locked) return;
        finishQ(Engine.check(q, typed.value), typed.value);
      };
      submit.onclick = go;
      typed.addEventListener("keydown", function (e) {
        if (e.key === "Enter") go();
      });
      typed.focus();
    }
    if (q.type === "order") {
      const bank = document.getElementById("bank");
      const builtEl = document.getElementById("built");
      function paintBuilt() {
        builtEl.textContent = quiz.built.length ? quiz.built.join(" ") : "Your sentence appears here…";
        builtEl.classList.toggle("muted", !quiz.built.length);
      }
      paintBuilt();
      bank.querySelectorAll(".chip").forEach(function (ch) {
        ch.onclick = function () {
          if (quiz.locked || ch.classList.contains("used")) return;
          ch.classList.add("used");
          quiz.built.push(q.words[Number(ch.getAttribute("data-i"))]);
          paintBuilt();
        };
      });
      document.getElementById("undo").onclick = function () {
        if (quiz.locked) return;
        quiz.built.pop();
        paintBuilt();
        bank.querySelectorAll(".chip").forEach(function (ch) { ch.classList.remove("used"); });
        quiz.built.forEach(function (word) {
          const ch = Array.from(bank.querySelectorAll(".chip")).find(function (c) {
            return !c.classList.contains("used") && c.textContent === word;
          });
          if (ch) ch.classList.add("used");
        });
      };
      document.getElementById("submit").onclick = function () {
        if (quiz.locked) return;
        finishQ(Engine.check(q, quiz.built.join(" ")), quiz.built.join(" "));
      };
    }
    const exitBtn = document.getElementById("quiz-exit");
    if (exitBtn) exitBtn.onclick = function () { exitQuiz(); };
    enhanceGerman(view);
  }

  function renderQuizDone() {
    quiz.done = true;
    Progress.record(quiz.setId, quiz.correct, quiz.questions.length);
    Progress.markDone(quiz.setId);
    refreshStats();
    const p = Math.round((quiz.correct / quiz.questions.length) * 100);
    const backHref = quiz.exitHash || "#/grammar";
    const backLabel = quiz.parentLabel || "Back";
    setNav(quiz.navId || "practice");
    setTrail([
      { label: backLabel, href: backHref },
      { label: "Results" }
    ]);
    const missed = quiz.missed || [];
    let missedHtml = "";
    if (missed.length) {
      missedHtml = "<h2>Answers you missed</h2><ul class=\"missed-list\">" +
        missed.map(function (m) {
          return "<li><span class=\"q-meta\">" + esc(m.prompt) + "</span><br><strong class=\"de\">" + esc(m.answer) + "</strong>" +
            (m.explain ? "<br>" + esc(m.explain) : "") + "</li>";
        }).join("") + "</ul>";
    } else {
      missedHtml = "<p>Every item was right. The answer was the one marked green on each question.</p>";
    }
    const sessionNext = window.Session && Session.isActive() ? Session.next() : null;
    const sessionCta = sessionNext
      ? '<button type="button" class="btn btn-primary" id="session-next">Continue session</button>'
      : (window.Session && Session.isComplete()
        ? '<a class="btn btn-primary" href="#/">Today — session complete</a>'
        : "");
    view.innerHTML = '<div class="card"><h1>' + (p >= 80 ? "Strong." : p >= 60 ? "Passable — drill again." : "Repeat this set today.") + "</h1>" +
      "<p>You scored <strong>" + quiz.correct + " / " + quiz.questions.length + "</strong> (" + p + "%). " +
      (p >= 80 ? "This set returns in 3 days, then 7 if it holds." : "This set returns tomorrow on the 1-day list.") + "</p>" +
      pctBar(quiz.correct, quiz.questions.length) +
      missedHtml +
      '<div class="btn-row">' + sessionCta +
      '<button class="btn' + (sessionCta ? "" : " btn-primary") + '" id="again">Retry missed-style shuffle</button>' +
      '<a class="btn" href="' + backHref + '">' + esc(backLabel) + "</a></div></div>";
    document.getElementById("again").onclick = function () {
      beginQuiz(Engine.shuffle(quiz.questions), quiz.title, quiz.setId, {
        exitHash: quiz.exitHash,
        parentLabel: quiz.parentLabel,
        navId: quiz.navId
      });
    };
    const sessionBtn = document.getElementById("session-next");
    if (sessionBtn && sessionNext) {
      sessionBtn.onclick = function () {
        if (location.hash === sessionNext.href) route();
        else location.hash = sessionNext.href;
      };
    }
    afterPaint();
  }

  function markChoice(name, correctVal) {
    view.querySelectorAll('input[name="' + name + '"]').forEach(function (r) {
      r.disabled = true;
      const hit = String(r.value) === String(correctVal);
      if (hit) r.parentNode.classList.add("key-ok");
      if (r.checked && !hit) r.parentNode.classList.add("key-bad");
    });
  }

  function appendKey(el, text, ok) {
    if (!el) return;
    const note = document.createElement("p");
    note.className = "answer-key " + (ok ? "is-ok" : "is-bad");
    note.textContent = (ok ? "Correct. Answer: " : "Answer: ") + text;
    if (el.tagName === "SELECT" || el.tagName === "INPUT") el.parentNode.appendChild(note);
    else el.appendChild(note);
  }
  function unusedKeys(allIds, usedMap) {
    const used = {};
    Object.keys(usedMap).forEach(function (k) { used[usedMap[k]] = true; });
    return allIds.filter(function (id) { return !used[id]; });
  }

  function deNumWord(n) {
    return ["eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn"][n - 1] || String(n);
  }

  function hoerenMeta() {
    const id = DP.level;
    if (id === "a1") {
      return {
        minutes: 20,
        lesenMin: 45,
        sbMin: 0,
        writeMin: 20,
        mockMin: 65,
        lead: "telc A1 Hörverstehen is about 20 minutes: short announcements, a shop/café dialogue, then messages. Some centres use picture matching. Read first. Teil 1 often plays once.",
      };
    }
    if (id === "a2") {
      return {
        minutes: 20,
        lesenMin: 50,
        sbMin: 0,
        writeMin: 25,
        mockMin: 70,
        lead: "telc A2 Hörverstehen is about 20 minutes: announcements plus a longer conversation. Teil 1 is often once; Teil 2 and 3 play twice. Lesen and Schreiben share one ~50-minute booklet — no Sprachbausteine paper.",
      };
    }
    return {
      minutes: 30,
      lesenMin: 90,
      sbMin: 0,
      writeMin: 30,
      mockMin: 150,
      lead: "telc B1 Hörverstehen is about 30 minutes and 20 items. Teil 1 plays once. Teil 2 (interview) twice. Teil 3 (everyday scenes) twice. Lesen + Sprachbausteine share one 90-minute booklet.",
    };
  }

  function hoerenRate() {
    if (DP.level === "a1") return 0.82;
    if (DP.level === "a2") return 0.88;
    return 0.95;
  }

  function officialTelcUrl() {
    const fmt = window.EXAM_FORMAT;
    if (fmt && fmt.officialUrl) return fmt.officialUrl;
    const id = DP.level || "b1";
    return "https://www.telc.net/en/language-examinations/certificate-exams/german/certificate-german-telc-german-" + id + "/";
  }

  function coverageHonestyHtml() {
    const id = DP.level || "";
    const lines = {
      a1: "This pack covers the official Start Deutsch 1 themes, the grammar you must produce, and the booklet shape (Hören, Lesen+Schreiben form + ~30-word note, group oral). Browser voice trains method only. Before exam day you still need the official telc A1 Modelltest PDF + MP3, and a human partner for the oral. There is no Sprachbausteine paper at A1.",
      a2: "This pack covers official Start Deutsch 2 themes (including Einkaufen and Feste), A2 grammar you must produce (Perfekt, dative, weil, polite Könnten), and the exam shape. Relatives and passive are recognition-only. Not DTZ. Lesen and Schreiben share one ~50-minute booklet — no Sprachbausteine paper. Official telc A2 MP3 still required for real ears.",
      b1: "This pack covers Zertifikat Deutsch / telc B1 themes, the A1–B1 grammar set, Sprachbausteine, and the 225+75 point shape. You must pass written and oral separately. Browser voice is not exam acoustics — sit the official telc B1 MP3 once in weeks 7–8. Konjunktiv I stays B2 stretch."
    };
    const t = lines[id];
    if (!t) return "";
    return '<div class="card" style="margin-top:1rem"><p class="kicker">What this gym covers — and what it cannot replace</p><p>' + t + "</p></div>";
  }

  function highMarksCardHtml() {
    const trap = { a1: "4", a2: "5", b1: "7" }[DP.level] || "1";
    const oralN = DP.level === "b1" ? "6 timed pair runs (20 min prep, then live Teil 1)" : DP.level === "a2" ? "6 pair runs — weil + agree in Teil 3" : "6 group-style runs — cards, then one plan";
    const writeN = DP.level === "a1" ? "form (Straße, PLZ, Ort) + ~30-word notes with the model locked" : DP.level === "a2" ? "forms + du/Sie letters at 60–80 words, model locked" : "8+ letters, four Leitpunkte, 100–120 words, Könnten once in Sie letters";
    return '<div class="card" style="margin-top:1rem"><p class="kicker">High marks path</p><h3>Train like the booklet, then go past pass</h3>' +
      "<p>Pass is 60 percent. High marks come from doing the same tasks until they feel slow — not from longer grammar lessons.</p><ol>" +
      "<li><a href='#/exam/sprechen/run'>Oral</a> — " + esc(oralN) + ". New card each time. Teil 3 only counts if you actually decide.</li>" +
      "<li><a href='#/exam/schreiben'>Schreiben from memory</a> — " + esc(writeN) + ".</li>" +
      "<li><a href='#/exam/hoeren/" + trap + "'>Hören trap paper " + trap + "</a> — hunt <span class='de'>nicht / kein / erst / schon / halb / Gleis / 14 vs 40</span>. Guess every item. Teil 1 once.</li>" +
      "<li><a href='#/exam/ears'>Official telc MP3</a> — required, not optional. TTS only trains the question type.</li>" +
      "<li><a href='#/exam/mock'>Mocks</a> — sit them in official order until you are at 80 percent. Leave no blanks.</li>" +
      "</ol></div>";
  }

  function groupHoerenPapers() {
    const sets = (EXAM && EXAM.hoeren) || [];
    const papers = [];
    const byId = {};
    let loose = [];

    function pushLoose() {
      if (!loose.length) return;
      let n = papers.length + 1;
      let key = String(n);
      while (byId[key]) {
        n += 1;
        key = String(n);
      }
      const paper = { id: key, title: "Hören paper " + key, sets: loose.slice() };
      byId[key] = paper;
      papers.push(paper);
      loose = [];
    }

    sets.forEach(function (set) {
      if (set.paper != null && set.paper !== "") {
        pushLoose();
        const key = String(set.paper);
        if (!byId[key]) {
          const paper = { id: key, title: "Hören paper " + key, sets: [] };
          byId[key] = paper;
          papers.push(paper);
        }
        byId[key].sets.push(set);
      } else {
        loose.push(set);
        if (loose.length >= 3) pushLoose();
      }
    });
    pushLoose();
    papers.forEach(function (p) {
      p.sets.sort(function (a, b) { return (a.teil || 99) - (b.teil || 99); });
      p.itemCount = p.sets.reduce(function (acc, s) { return acc + ((s.items && s.items.length) || 0); }, 0);
    });
    return papers;
  }

  function paperForHoerenIds(ids) {
    const papers = groupHoerenPapers();
    return papers.find(function (p) {
      return p.sets.some(function (s) { return ids.indexOf(s.id) >= 0; });
    }) || papers[0];
  }

  function mixDrill() {
    return (window.DRILLS || []).find(function (d) {
      return d.id && d.id.indexOf("mix") >= 0 && d.id.indexOf("b2") < 0;
    }) || null;
  }

  function renderExamHub() {
    setNav("exam");
    setTrail([{ label: "Exam" }]);
    const m = meta();
    const hm = hoerenMeta();
    const papers = groupHoerenPapers();
    const tips = (EXAM.tips || []).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
    const mix = mixDrill();
    const fmt = window.EXAM_FORMAT;
    view.innerHTML = "<h1>" + esc(m.exam) + " exam gym</h1>" +
      '<p class="lead">Same task types as the real ' + esc(m.title) + " paper. Use <a href='#/topics'>official topics</a> for what to say; use this gym for how the booklet looks.</p>" +
      formatCardHtml() +
      "<h2>Write &amp; speak</h2>" +
      '<nav class="jump-list">' +
        '<a href="#/exam/schreiben"><span class="jump-mark" aria-hidden="true">&raquo;</span><span><strong>Schreiben from memory</strong><span class="jump-blurb">' +
          (EXAM.schreiben || []).length + " tasks · hide the model · " + hm.writeMin + " min" +
          (DP.level === "a1" ? " · form + short message" : DP.level === "a2" ? " · form + short letter" : " · four Leitpunkte") +
          ".</span></span></a>" +
        '<a href="#/exam/sprechen/run"><span class="jump-mark" aria-hidden="true">&raquo;</span><span><strong>Oral run (~' +
          ((fmt && fmt.oral && fmt.oral.minutes) || 15) +
          ' min)</strong><span class="jump-blurb">' +
          (fmt && fmt.oral ? esc(fmt.oral.note) : "Teil 1–3 with a clock.") +
          "</span></span></a>" +
        '<a href="#/exam/sprechen"><span class="jump-mark" aria-hidden="true">&raquo;</span><span><strong>Sprechen phrases</strong><span class="jump-blurb">Intro, cards, Teil 3 engine — then do the timed run.</span></span></a>' +
      "</nav>" +
      "<h2>The booklet</h2>" +
      '<nav class="jump-list">' +
        '<a href="#/exam/lesen"><span class="jump-mark" aria-hidden="true">&raquo;</span><span><strong>Lesen</strong><span class="jump-blurb">' +
          (EXAM.lesen || []).length + " papers · " +
          ((fmt && fmt.written && fmt.written[0] && fmt.written[0].items) || "exam shape") +
          ".</span></span></a>" +
        ((DP.level === "a1" || DP.level === "a2")
          ? '<a href="#/exam/sprachbausteine"><span class="jump-mark" aria-hidden="true">&raquo;</span><span><strong>Extra grammar cloze</strong><span class="jump-blurb">Not a separate ' + DP.level.toUpperCase() + " exam part — useful practice only.</span></span></a>"
          : '<a href="#/exam/sprachbausteine"><span class="jump-mark" aria-hidden="true">&raquo;</span><span><strong>Sprachbausteine</strong><span class="jump-blurb">' + (EXAM.sprachbausteine || []).length + " cloze / bank sets (same 90-min booklet as Lesen).</span></span></a>") +
        '<a href="#/exam/hoeren"><span class="jump-mark" aria-hidden="true">&raquo;</span><span><strong>Hören (method)</strong><span class="jump-blurb">' +
          papers.length + " full papers · ~" + hm.minutes + " min · exam-mode TTS.</span></span></a>" +
        '<a href="#/exam/ears"><span class="jump-mark" aria-hidden="true">&raquo;</span><span><strong>Official exam ears</strong><span class="jump-blurb">Play your telc MP3 on this device. Browser voice trains method; this trains acoustics.</span></span></a>' +
        (mix
          ? '<a href="#/drill/' + mix.id + '"><span class="jump-mark" aria-hidden="true">&raquo;</span><span><strong>' +
            esc(mix.title) + '</strong><span class="jump-blurb">' + esc(mix.blurb || "Mixed grammar.") + "</span></span></a>"
          : "") +
      "</nav>" +
      "<h2>Full sitting</h2>" +
      '<nav class="jump-list">' +
        '<a href="#/exam/mock"><span class="jump-mark" aria-hidden="true">&raquo;</span><span><strong>Timed mocks</strong><span class="jump-blurb">' +
          (EXAM.mocks || []).length + " training papers in official order.</span></span></a>" +
      "</nav>" +
      highMarksCardHtml() +
      coverageHonestyHtml() +
      '<div class="card" style="margin-top:1rem"><h3>Pass smarter</h3><ul>' + tips + "</ul>" +
      '<p>Official sample audio (real exam acoustics): <a href="' + officialTelcUrl() + '" target="_blank" rel="noopener">telc.net ' + esc(m.title) + "</a></p></div>";
  }

  function renderMockList() {
    setNav("exam");
    setTrail([{ label: "Exam", href: "#/exam" }, { label: "Mocks" }]);
    view.innerHTML = "<h1>Written training mocks</h1>" +
      '<p class="lead">Do one paper in a single sitting. Pause only between parts. Score each section as you go.</p>' +
      '<div class="grid grid-2">' +
      EXAM.mocks.map(function (m) {
        return '<a class="card clickable" href="#/exam/mock/' + m.id + '"><h3>' + esc(m.title) + "</h3><p>" + esc(m.blurb) + "</p></a>";
      }).join("") + "</div>" +
      '<div class="btn-row"><a class="btn" href="#/exam">Back to exam gym</a></div>';
  }

  function renderMock(id) {
    setNav("exam");
    const m = EXAM.mocks.find(function (x) { return x.id === id; });
    if (!m) { view.innerHTML = "<p>Mock not found.</p>"; return; }
    setTrail([{ label: "Exam", href: "#/exam" }, { label: "Mocks", href: "#/exam/mock" }, { label: m.title }]);
    const hm = hoerenMeta();
    const hPaper = paperForHoerenIds(m.hoeren || []);
    let left = hm.mockMin * 60;
    function clock(sec) {
      const mm = Math.floor(sec / 60);
      const ss = sec % 60;
      return mm + ":" + (ss < 10 ? "0" : "") + ss;
    }
    view.innerHTML = '<p class="kicker">Training mock · ~' + hm.mockMin + " minutes</p>" +
      "<h1>" + esc(m.title) + "</h1>" +
      "<p>" + esc(m.blurb) + "</p>" +
      '<div class="card"><p class="q-meta">Timer (optional)</p><p id="mock-timer" class="de" style="font-size:1.6rem">' + clock(left) + "</p>" +
      '<div class="btn-row"><button class="btn btn-primary" id="mock-start">Start / resume</button>' +
      '<button class="btn" id="mock-pause">Pause</button></div></div>' +
      "<h2>Run order (same as the real booklet)</h2><ol>" +
        (DP.level === "b1"
          ? '<li><a href="#/exam/lesen/' + m.lesen + '">Lesen</a> + Sprachbausteine ' + (m.sb || []).map(function (s) { return esc(s); }).join(" + ") + ' <a href="#/exam/sprachbausteine">(SB gym)</a> — one 90-minute block, no break</li>' +
            "<li>Hören" + (hPaper ? " paper " + hPaper.id : "") + ' → <a href="#/exam/hoeren/' + (hPaper ? hPaper.id : "") + '">exam sitting with audio</a> (~' + hm.minutes + " min)</li>" +
            '<li><a href="#/schreiben/' + m.schreiben + '">Schreiben</a> (30 min · four Leitpunkte · 100–120 words)</li>'
          : "<li>Hören" + (hPaper ? " paper " + hPaper.id : "") + ' → <a href="#/exam/hoeren/' + (hPaper ? hPaper.id : "") + '">exam sitting</a> (~' + hm.minutes + " min). Then the official telc MP3 once before exam day.</li>" +
            '<li><a href="#/exam/lesen/' + m.lesen + '">Lesen</a> + <a href="#/schreiben/' + m.schreiben + '">Schreiben</a> — one ' +
            (DP.level === "a1" ? "45" : "50") + "-minute booklet. No Sprachbausteine paper at this level.</li>") +
      "</ol>" +
      '<div class="btn-row"><button class="btn btn-warm" id="mock-done">Mark mock session done</button>' +
      '<a class="btn" href="#/exam/mock">All mocks</a></div>';
    let ticking = null;
    function paint() {
      const mm = Math.floor(left / 60);
      const ss = left % 60;
      document.getElementById("mock-timer").textContent = mm + ":" + (ss < 10 ? "0" : "") + ss;
    }
    document.getElementById("mock-start").onclick = function () {
      if (ticking) return;
      ticking = setInterval(function () {
        if (left <= 0) { clearInterval(ticking); ticking = null; toast("Time is up."); return; }
        left -= 1;
        paint();
      }, 1000);
    };
    document.getElementById("mock-pause").onclick = function () {
      if (ticking) { clearInterval(ticking); ticking = null; }
    };
    document.getElementById("mock-done").onclick = function () {
      if (ticking) clearInterval(ticking);
      Progress.markDone("mock-" + id);
      toast("Mock marked done. Check section scores under Progress.");
      refreshStats();
    };
  }

  function countLesenItems(set) {
    let n = 0;
    (set.parts || []).forEach(function (part) {
      if (part.kind === "headlines" || part.kind === "ads") n += Object.keys(part.answer || {}).length;
      else if (part.items) n += part.items.length;
    });
    return n;
  }

  function renderLesenList() {
    setNav("exam");
    setTrail([{ label: "Exam", href: "#/exam" }, { label: "Lesen" }]);
    const fmt = window.EXAM_FORMAT;
    const shape = fmt && fmt.written && fmt.written[0] ? fmt.written[0].note : "Aim for 80%+ before exam week.";
    view.innerHTML = "<h1>Lesen papers</h1>" +
      '<p class="lead">' + EXAM.lesen.length + " training papers. " + esc(shape) + "</p>" +
      '<div class="grid grid-2">' +
      EXAM.lesen.map(function (set) {
        const n = countLesenItems(set);
        return '<a class="card clickable" href="#/exam/lesen/' + set.id + '"><h3>' + esc(set.title) + "</h3><p>~" +
          (set.timeMin || 45) + " min · " + n + " items</p></a>";
      }).join("") + "</div>";
  }

  function renderLesen(id) {
    setNav("exam");
    const set = EXAM.lesen.find(function (x) { return x.id === id; }) || EXAM.lesen[0];
    setTrail([{ label: "Exam", href: "#/exam" }, { label: "Lesen", href: "#/exam/lesen" }, { label: set.title }]);
    let html = '<p class="kicker">Lesen · ~' + (set.timeMin || 45) + " min</p><h1>" + esc(set.title) + "</h1>" +
      '<div class="btn-row"><a class="btn" href="#/exam/lesen">All papers</a></div>';
    set.parts.forEach(function (part, pi) {
      html += '<section class="card" style="margin-bottom:1rem"><h3>Teil ' + (pi + 1) + "</h3><p>" + esc(part.instruction) + "</p>";
      if (part.kind === "headlines") {
        html += "<ol>" + part.headlines.map(function (h) { return "<li>" + esc(h.text) + "</li>"; }).join("") + "</ol>";
        part.texts.forEach(function (t) {
          html += "<p><strong>" + t.id + ".</strong> " + esc(t.text) + "</p>";
          html += '<p>Überschrift zu ' + t.id + ': <select data-lesen="' + t.id + '"><option value="">—</option>' +
            part.headlines.map(function (h) { return '<option value="' + h.id + '">' + h.id + "</option>"; }).join("") +
            "</select></p>";
        });
      }
      if (part.kind === "detail") {
        html += '<div class="ex">' + esc(part.text) + "</div>";
        part.items.forEach(function (it, ii) {
          html += "<p><strong>" + (ii + 1) + ".</strong> " + esc(it.q) + "</p><div class='options'>";
          it.options.forEach(function (o, oi) {
            html += '<label class="opt" style="display:block;margin-bottom:0.35rem"><input type="radio" name="d' + pi + '-' + ii + '" value="' + oi + '" /> ' + esc(o) + "</label>";
          });
          html += "</div>";
        });
      }
      if (part.kind === "ads") {
        html += "<p><strong>Personen</strong></p>" + part.people.map(function (p) { return "<p>" + p.id + ". " + esc(p.text) + "</p>"; }).join("");
        html += "<p><strong>Anzeigen</strong></p>" + part.ads.map(function (a) { return "<p>" + a.id + ". " + esc(a.text) + "</p>"; }).join("");
        part.people.forEach(function (p) {
          html += '<p>' + p.id + ' → <select data-ad="' + p.id + '"><option value="">—</option>' +
            part.ads.map(function (a) { return '<option value="' + a.id + '">' + a.id + "</option>"; }).join("") + "</select></p>";
        });
      }
      if (part.kind === "tf" || part.kind === "signs") {
        part.items.forEach(function (it, ii) {
          html += '<div class="tf-item">';
          if (it.sign) html += '<div class="sign-box de">' + esc(it.sign) + "</div>";
          if (it.text) html += '<p class="de">' + esc(it.text) + "</p>";
          html += "<p><strong>" + (ii + 1) + ".</strong> " + esc(it.q) + "</p>";
          html += '<div class="rf-row">' +
            '<label class="rf"><input type="radio" name="tf' + pi + '-' + ii + '" value="true" /> Richtig</label>' +
            '<label class="rf"><input type="radio" name="tf' + pi + '-' + ii + '" value="false" /> Falsch</label>' +
            "</div></div>";
        });
      }
      html += "</section>";
    });
    html += '<button class="btn btn-primary" id="mark-lesen">Mark paper</button><div id="lesen-res"></div>';
    view.innerHTML = html;
    document.getElementById("mark-lesen").onclick = function () {
      let right = 0, total = 0;
      const unusedBits = [];
      set.parts.forEach(function (part, pi) {
        if (part.kind === "headlines") {
          Object.keys(part.answer || {}).forEach(function (k) {
            total++;
            const sel = view.querySelector('[data-lesen="' + k + '"]');
            const ok = !!(sel && sel.value === part.answer[k]);
            if (ok) right++;
            if (sel) {
              sel.disabled = true;
              appendKey(sel, String(part.answer[k]), ok);
            }
          });
          unusedBits.push("Unused headlines: " + unusedKeys(part.headlines.map(function (h) { return h.id; }), part.answer).join(", "));
        } else if (part.kind === "detail") {
          part.items.forEach(function (it, ii) {
            total++;
            const r = view.querySelector('input[name="d' + pi + '-' + ii + '"]:checked');
            const ok = !!(r && Number(r.value) === it.answer);
            if (ok) right++;
            markChoice("d" + pi + "-" + ii, it.answer);
            const host = view.querySelector('input[name="d' + pi + '-' + ii + '"]');
            appendKey(host && host.closest(".options"), (it.options && it.options[it.answer]) || String(it.answer), ok);
          });
        } else if (part.kind === "ads") {
          Object.keys(part.answer || {}).forEach(function (k) {
            total++;
            const sel = view.querySelector('[data-ad="' + k + '"]');
            const ok = !!(sel && sel.value === part.answer[k]);
            if (ok) right++;
            if (sel) {
              sel.disabled = true;
              appendKey(sel, String(part.answer[k]), ok);
            }
          });
          unusedBits.push("Unused ads: " + unusedKeys(part.ads.map(function (a) { return a.id; }), part.answer).join(", "));
        } else if (part.kind === "tf" || part.kind === "signs") {
          part.items.forEach(function (it, ii) {
            total++;
            const name = "tf" + pi + "-" + ii;
            const r = view.querySelector('input[name="' + name + '"]:checked');
            const ok = !!(r && (r.value === "true") === !!it.answer);
            if (ok) right++;
            markChoice(name, it.answer ? "true" : "false");
            const host = view.querySelector('input[name="' + name + '"]');
            appendKey(host && host.closest(".tf-item") || host, it.answer ? "Richtig" : "Falsch", ok);
          });
        }
      });
      Progress.record(set.id, right, total);
      document.getElementById("lesen-res").innerHTML = '<div class="explain">Score: <strong>' + right + " / " + total +
        "</strong>" + (unusedBits.length ? ". " + unusedBits.join(". ") : "") + ". Answers are marked on the paper.</div>";
      this.disabled = true;
      refreshStats();
    };
  }

  function renderSB() {
    setNav("exam");
    setTrail([{ label: "Exam", href: "#/exam" }, { label: "Sprachbausteine" }]);
    let html = "<h1>Sprachbausteine</h1><p class='lead'>Read the whole letter first. Verb position tells you weil vs denn vs deshalb.</p>";
    EXAM.sprachbausteine.forEach(function (set, si) {
      html += '<section class="card" style="margin-bottom:1rem"><h3>' + esc(set.title) + "</h3>";
      if (set.kind === "cloze") {
        html += "<p>" + esc(set.text) + "</p>";
        set.gaps.forEach(function (g, gi) {
          html += '<p>(' + (gi + 1) + ') <select data-sb="' + si + '-' + gi + '">' +
            g.options.map(function (o) { return '<option value="' + esc(o) + '">' + esc(o) + "</option>"; }).join("") +
            "</select></p>";
        });
      } else {
        html += "<p>Bank: " + set.bank.map(esc).join(" · ") + "</p><p>" + esc(set.text) + "</p>";
        set.answer.forEach(function (_, gi) {
          html += '<p>(' + (gi + 1) + ') <input data-bank="' + si + '-' + gi + '" type="text" /></p>';
        });
      }
      html += '<button class="btn btn-primary" data-mark-sb="' + si + '">Mark</button><div id="sb-res-' + si + '"></div></section>';
    });
    view.innerHTML = html;
    view.querySelectorAll("[data-mark-sb]").forEach(function (btn) {
      btn.onclick = function () {
        const si = Number(btn.getAttribute("data-mark-sb"));
        const set = EXAM.sprachbausteine[si];
        let right = 0;
        if (set.kind === "cloze") {
          const keys = [];
          set.gaps.forEach(function (g, gi) {
            const sel = view.querySelector('[data-sb="' + si + '-' + gi + '"]');
            const ok = !!(sel && sel.value === g.answer);
            if (ok) right++;
            keys.push(g.answer);
            if (sel) {
              sel.disabled = true;
              appendKey(sel, g.answer, ok);
            }
          });
          Progress.record(set.id, right, set.gaps.length);
          document.getElementById("sb-res-" + si).innerHTML = "<div class='explain'>" + right + " / " + set.gaps.length +
            "<br>Key: " + keys.map(esc).join(", ") + "</div>";
        } else {
          set.answer.forEach(function (a, gi) {
            const inp = view.querySelector('[data-bank="' + si + '-' + gi + '"]');
            const ok = !!(inp && Engine.answersMatch(inp.value, a));
            if (ok) right++;
            if (inp) {
              inp.disabled = true;
              appendKey(inp, a, ok);
            }
          });
          Progress.record(set.id, right, set.answer.length);
          document.getElementById("sb-res-" + si).innerHTML = "<div class='explain'>" + right + " / " + set.answer.length +
            "<br>Key: " + set.answer.map(esc).join(", ") + "</div>";
        }
        btn.disabled = true;
        refreshStats();
      };
    });
  }

  function renderHoeren() {
    setNav("exam");
    setTrail([{ label: "Exam", href: "#/exam" }, { label: "Hören" }]);
    const m = meta();
    const hm = hoerenMeta();
    const papers = groupHoerenPapers();
    view.innerHTML = "<h1>Hörverstehen · " + esc(m.title) + "</h1>" +
      '<p class="lead">' + esc(hm.lead) + " Start a paper in exam mode — German voice, reading time, then audio in order. Transcripts stay hidden until you mark.</p>" +
      '<div class="grid grid-2">' +
      papers.map(function (p) {
        const teile = p.sets.map(function (s) {
          const t = s.teil || "?";
          return "Teil " + t + (s.once ? " once" : " twice");
        }).join(" · ");
        return '<a class="card clickable" href="#/exam/hoeren/' + p.id + '"><h3>' + esc(p.title) + "</h3><p>~" +
          hm.minutes + " min · " + p.itemCount + " items · " + esc(teile) + "</p></a>";
      }).join("") + "</div>" +
      '<div class="card" style="margin-top:1rem"><h3>How this copies the exam</h3><ul>' +
        "<li>You read the Richtig/Falsch lines first (timed pause). A1 also has picture-matching items — pick A, B or C.</li>" +
        "<li>A German announcer says Teil and Text numbers, then the clip plays.</li>" +
        "<li>Teil 1 with “once” cannot be replayed in exam mode.</li>" +
        "<li>Longer talks and Teil 3 play twice, with a pause, like telc.</li>" +
      "</ul><p>Browser voice trains <strong>method</strong>. For exam ears, play the official telc MP3 on this device: <a href=\"#/exam/ears\">Official exam ears</a> · <a href=\"" + officialTelcUrl() + "\" target=\"_blank\" rel=\"noopener\">telc.net " + esc(m.title) + "</a></p></div>" +
      '<div class="btn-row"><a class="btn" href="#/exam">Back to exam gym</a></div>';
  }

  function hoerenItemCorrect(it, radio) {
    if (!radio) return false;
    if (it.options && it.options.length) return radio.value === String(it.answer);
    return (radio.value === "true") === it.answer;
  }

  function hoerenItemBlock(set, ii, practice) {
    const it = set.items[ii];
    const name = "h-" + set.id + "-" + ii;
    let html = '<div class="hoeren-item" data-h="' + esc(set.id) + "-" + ii + '">';
    html += '<p class="hoeren-q"><span class="hoeren-num">' + (ii + 1) + ".</span> <span class=\"de\">" + esc(it.statement) + "</span></p>";
    if (it.options && it.options.length) {
      html += '<div class="pic-choices">';
      it.options.forEach(function (opt) {
        html += '<label class="pic-choice"><input type="radio" name="' + name + '" value="' + esc(opt) + '" /> <span class="pic-box">' + esc(opt) + "</span></label>";
      });
      html += "</div>";
    } else {
      html += '<div class="rf-row">' +
        '<label class="rf"><input type="radio" name="' + name + '" value="true" /> Richtig</label>' +
        '<label class="rf"><input type="radio" name="' + name + '" value="false" /> Falsch</label>' +
        "</div>";
    }
    if (practice && it.audio) {
      html += '<button type="button" class="btn" data-practice-clip="' + esc(set.id) + '" data-ii="' + ii + '"' +
        (set.once ? ' data-once="1"' : "") + ">Play" + (set.once ? " (once)" : "") + "</button>";
    }
    if (it.audio) html += '<p class="transcript" hidden><span class="label-s">Transcript</span>' + esc(it.audio) + "</p>";
    html += "</div>";
    return html;
  }

  function renderHoerenPaper(paperId, mode) {
    setNav("exam");
    const papers = groupHoerenPapers();
    const paper = papers.find(function (p) { return String(p.id) === String(paperId); });
    if (!paper) {
      view.innerHTML = "<p>Paper not found.</p><a class='btn' href='#/exam/hoeren'>All Hören papers</a>";
      return;
    }
    const m = meta();
    const hm = hoerenMeta();
    const practice = mode === "practice";
    setTrail([{ label: "Exam", href: "#/exam" }, { label: "Hören", href: "#/exam/hoeren" }, { label: "Paper " + paper.id }]);
    let html = '<p class="kicker">' + esc(m.exam) + " · Hörverstehen · ~" + hm.minutes + " min</p>";
    html += "<h1>" + esc(paper.title) + "</h1>";
    html += '<p class="lead">' + (practice
      ? "Practice mode: replay clips as you like. Switch to exam sitting for real rules."
      : "Exam sitting: read the statements, then let the audio run. Do not replay Teil 1. Mark Richtig/Falsch or the matching picture as you hear each text.") + "</p>";
    html += '<div class="btn-row">' +
      '<a class="btn" href="#/exam/hoeren">All papers</a>' +
      (practice
        ? '<a class="btn btn-primary" href="#/exam/hoeren/' + paper.id + '">Exam sitting</a>'
        : '<a class="btn" href="#/exam/hoeren/' + paper.id + '/practice">Practice / replay</a>') +
      "</div>";

    if (!practice) {
      html += '<div class="exam-player" id="exam-player">' +
        '<div class="exam-player-top"><p class="kicker" id="exam-kicker">Bereit</p>' +
        '<p id="exam-status" class="exam-status">Lautsprecher an. Aussagen lesen, dann Start.</p>' +
        '<p id="exam-sub" class="exam-sub"></p>' +
        '<div class="progress-bar exam-readbar"><span id="exam-bar"></span></div></div>' +
        '<div class="btn-row">' +
          '<button type="button" class="btn btn-primary" id="hoeren-start">Start exam audio</button>' +
          '<button type="button" class="btn" id="hoeren-skip" hidden>Skip wait</button>' +
          '<button type="button" class="btn" id="hoeren-stop">Stop</button>' +
        "</div></div>";
    }

    paper.sets.forEach(function (set, si) {
      const teil = set.teil || (si + 1);
      const once = !!set.once;
      const isLong = !!(set.audio || (set.turns && set.turns.length));
      html += '<section class="card teil-block" data-teil-block="' + si + '" style="margin-top:1rem">' +
        "<h3>Teil " + teil + (once ? " · einmal" : " · zweimal") + "</h3>";
      if (set.intro) html += "<p>" + esc(set.intro) + "</p>";
      html += "<p class='q-meta'>" + (once
        ? "Sie hören jeden Text nur einmal."
        : (isLong ? "Sie hören den Text zweimal." : "Sie hören jeden Text zweimal.")) + "</p>";
      if (practice && isLong) {
        html += '<div class="audio-box"><button type="button" class="btn btn-primary" data-practice-long="' + si + '">Play interview</button></div>';
      }
      set.items.forEach(function (it, ii) {
        html += hoerenItemBlock(set, ii, practice && !isLong);
      });
      if (isLong && (set.audio || set.turns)) {
        const trans = set.turns
          ? set.turns.map(function (t) { return (t.role ? t.role + ": " : "") + t.text; }).join(" ")
          : set.audio;
        html += '<p class="transcript" hidden><span class="label-s">Transcript</span>' + esc(trans) + "</p>";
      }
      html += "</section>";
    });

    html += '<div class="btn-row"><button type="button" class="btn btn-warm" id="mark-hoeren-paper"' +
      (practice ? "" : " disabled") + '>Mark paper</button></div><div id="h-paper-res"></div>';
    view.innerHTML = html;

    function setStatus(title, sub) {
      const a = document.getElementById("exam-status");
      const b = document.getElementById("exam-sub");
      const k = document.getElementById("exam-kicker");
      if (k) k.textContent = title;
      if (a) a.textContent = title;
      if (b) b.textContent = sub || "";
    }

    function highlight(setId, itemIdx) {
      view.querySelectorAll(".hoeren-item").forEach(function (el) {
        const key = setId + "-" + itemIdx;
        el.classList.toggle("is-live", el.getAttribute("data-h") === key);
      });
      view.querySelectorAll("[data-teil-block]").forEach(function (el) {
        const set = paper.sets[Number(el.getAttribute("data-teil-block"))];
        el.classList.toggle("is-active-teil", set && set.id === setId);
      });
    }

    function readCountdown(sec, token) {
      return new Promise(function (resolve) {
        let left = sec;
        let settled = false;
        const bar = document.getElementById("exam-bar");
        const skip = document.getElementById("hoeren-skip");
        function done() {
          if (settled) return;
          settled = true;
          if (token.timer) clearInterval(token.timer);
          token.timer = null;
          if (skip) skip.hidden = true;
          resolve();
        }
        if (skip) skip.hidden = false;
        if (bar) bar.style.width = "0%";
        setStatus("Aussagen lesen", left + " s");
        token.timer = setInterval(function () {
          if (token.aborted) { done(); return; }
          left -= 1;
          if (bar) bar.style.width = Math.max(0, (1 - left / sec) * 100) + "%";
          setStatus("Aussagen lesen", left + " s");
          if (left <= 0) done();
        }, 1000);
        token.skipRead = function () {
          if (bar) bar.style.width = "100%";
          done();
        };
      });
    }

    function startExam() {
      stopHoerenRun();
      const token = { aborted: false };
      hoerenRun = token;
      const rate = hoerenRate();
      const startBtn = document.getElementById("hoeren-start");
      const markBtn = document.getElementById("mark-hoeren-paper");
      if (startBtn) { startBtn.disabled = true; startBtn.textContent = "Running…"; }
      if (markBtn) markBtn.disabled = true;

      function still() { return hoerenRun === token && !token.aborted; }

      function finishRun(label) {
        if (hoerenRun !== token && hoerenRun !== null) return;
        if (hoerenRun === token) hoerenRun = null;
        if (startBtn) { startBtn.disabled = false; startBtn.textContent = "Start exam audio"; }
        if (markBtn) markBtn.disabled = false;
        const skip = document.getElementById("hoeren-skip");
        if (skip) skip.hidden = true;
        highlight("", "");
        if (label) setStatus(label, "Jetzt auswerten.");
      }

      (async function run() {
        setStatus("Prüfung startet", "Bitte nicht unterbrechen.");
        await Engine.pauseMs(150);
        if (!still()) return finishRun("Gestoppt");
        await Engine.speakAsync("Hörverstehen.", { rate: 0.92, role: "announcer" });
        if (!still()) return finishRun("Gestoppt");

        for (let si = 0; si < paper.sets.length; si++) {
          const set = paper.sets[si];
          const teil = set.teil || (si + 1);
          const once = !!set.once;
          const plays = once ? 1 : 2;
          const nAudio = set.items.filter(function (it) { return it.audio; }).length;
          const isLong = !!(set.audio || (set.turns && set.turns.length));
          const readSec = set.items.length >= 8 ? 45 : 30;

          view.querySelectorAll("[data-teil-block]").forEach(function (el) {
            el.classList.toggle("is-active-teil", Number(el.getAttribute("data-teil-block")) === si);
          });

          let intro;
          if (isLong) {
            intro = "Teil " + teil + ". Sie hören jetzt ein Gespräch. Sie hören den Text " +
              (plays === 1 ? "nur einmal" : "zweimal") + ". Lesen Sie zuerst die Aussagen.";
          } else if (once) {
            intro = "Teil " + teil + ". Sie hören jetzt " + nAudio + " kurze Texte. Sie hören jeden Text nur einmal. Lesen Sie zuerst die Aussagen.";
          } else {
            intro = "Teil " + teil + ". Sie hören jetzt " + nAudio + " kurze Texte. Sie hören jeden Text zweimal. Lesen Sie zuerst die Aussagen.";
          }

          await Engine.speakAsync(intro, { rate: 0.92, role: "announcer" });
          if (!still()) return finishRun("Gestoppt");
          await Engine.speakAsync("Sie haben " + (readSec === 45 ? "fünfundvierzig" : "dreißig") + " Sekunden Zeit.", { rate: 0.92, role: "announcer" });
          if (!still()) return finishRun("Gestoppt");
          await readCountdown(readSec, token);
          if (!still()) return finishRun("Gestoppt");

          if (isLong) {
            for (let p = 1; p <= plays; p++) {
              const line = plays === 2
                ? (p === 1 ? "Sie hören den Text jetzt zum ersten Mal." : "Sie hören den Text jetzt zum zweiten Mal.")
                : "Sie hören den Text jetzt.";
              setStatus("Teil " + teil + " · Hören", plays === 1 ? "einmal" : (p + ". Mal"));
              highlight(set.id, 0);
              await Engine.speakAsync(line, { rate: 0.92, role: "announcer" });
              if (!still()) return finishRun("Gestoppt");
              if (set.turns && set.turns.length) {
                for (let t = 0; t < set.turns.length; t++) {
                  const turn = set.turns[t];
                  await Engine.speakLong(turn.text, { rate: rate, role: turn.role || (t % 2 ? "guest" : "announcer") });
                  if (!still()) return finishRun("Gestoppt");
                  await Engine.pauseMs(280);
                }
              } else {
                await Engine.speakLong(set.audio, { rate: rate, role: "guest" });
              }
              if (!still()) return finishRun("Gestoppt");
              await Engine.pauseMs(2000);
            }
          } else {
            for (let ii = 0; ii < set.items.length; ii++) {
              const it = set.items[ii];
              if (!it.audio) continue;
              highlight(set.id, ii);
              for (let p = 1; p <= plays; p++) {
                if (p === 1) {
                  await Engine.speakAsync("Text " + deNumWord(ii + 1) + ".", { rate: 0.92, role: "announcer" });
                  if (!still()) return finishRun("Gestoppt");
                }
                setStatus("Teil " + teil + " · Text " + (ii + 1), plays === 1 ? "nur einmal" : ("Wiedergabe " + p + "/" + plays));
                await Engine.speakLong(it.audio, { rate: rate, role: "announcer" });
                if (!still()) return finishRun("Gestoppt");
                if (plays === 2 && p === 1) await Engine.pauseMs(800);
              }
              const el = view.querySelector('[data-h="' + set.id + "-" + ii + '"]');
              if (el) { el.classList.remove("is-live"); el.classList.add("is-heard"); }
              await Engine.pauseMs(3500);
              if (!still()) return finishRun("Gestoppt");
            }
          }
        }

        await Engine.speakAsync("Das war der Prüfungsteil Hörverstehen. Übertragen Sie jetzt Ihre Lösungen auf den Antwortbogen.", { rate: 0.92, role: "announcer" });
        finishRun("Fertig");
      })();
    }

    const startBtn = document.getElementById("hoeren-start");
    if (startBtn) startBtn.onclick = startExam;
    const stopBtn = document.getElementById("hoeren-stop");
    if (stopBtn) {
      stopBtn.onclick = function () {
        stopHoerenRun();
        setStatus("Gestoppt", "Sie können neu starten oder in Practice einzelne Clips hören.");
        const sb = document.getElementById("hoeren-start");
        if (sb) { sb.disabled = false; sb.textContent = "Start exam audio"; }
        const mb = document.getElementById("mark-hoeren-paper");
        if (mb) mb.disabled = false;
        const skip = document.getElementById("hoeren-skip");
        if (skip) skip.hidden = true;
      };
    }
    const skipBtn = document.getElementById("hoeren-skip");
    if (skipBtn) {
      skipBtn.onclick = function () {
        if (hoerenRun && hoerenRun.skipRead) hoerenRun.skipRead();
      };
    }

    view.querySelectorAll("[data-practice-clip]").forEach(function (b) {
      b.onclick = function () {
        const sid = b.getAttribute("data-practice-clip");
        const ii = Number(b.getAttribute("data-ii"));
        const set = paper.sets.find(function (s) { return s.id === sid; });
        if (!set || !set.items[ii] || !set.items[ii].audio) return;
        Engine.speak(set.items[ii].audio, { rate: hoerenRate(), role: "announcer" });
        if (b.getAttribute("data-once") === "1") {
          b.disabled = true;
          b.textContent = "Played";
        }
      };
    });
    view.querySelectorAll("[data-practice-long]").forEach(function (b) {
      b.onclick = function () {
        const set = paper.sets[Number(b.getAttribute("data-practice-long"))];
        if (!set) return;
        Engine.stopSpeak();
        if (set.turns && set.turns.length) {
          let chain = Promise.resolve();
          set.turns.forEach(function (turn, t) {
            chain = chain.then(function () {
              return Engine.speakLong(turn.text, { rate: hoerenRate(), role: turn.role || (t % 2 ? "guest" : "announcer") });
            });
          });
        } else if (set.audio) {
          Engine.speakLong(set.audio, { rate: hoerenRate(), role: "guest" });
        }
      };
    });

    document.getElementById("mark-hoeren-paper").onclick = function () {
      let right = 0;
      let total = 0;
      paper.sets.forEach(function (set) {
        set.items.forEach(function (it, ii) {
          total += 1;
          const name = "h-" + set.id + "-" + ii;
          const r = view.querySelector('input[name="' + name + '"]:checked');
          const ok = hoerenItemCorrect(it, r);
          if (ok) right += 1;
          const key = (it.options && it.options.length)
            ? String(it.answer)
            : (it.answer ? "Richtig" : "Falsch");
          markChoice(name, (it.options && it.options.length) ? String(it.answer) : (it.answer ? "true" : "false"));
          const itemEl = view.querySelector('[data-h="' + set.id + "-" + ii + '"]');
          appendKey(itemEl, key, ok);
        });
        Progress.record(set.id, set.items.filter(function (it, ii) {
          const r = view.querySelector('input[name="h-' + set.id + "-" + ii + '"]:checked');
          return hoerenItemCorrect(it, r);
        }).length, set.items.length);
      });
      Progress.record("hoeren-paper-" + paper.id, right, total);
      view.querySelectorAll(".transcript").forEach(function (el) { el.hidden = false; });
      const p = total ? Math.round((right / total) * 100) : 0;
      document.getElementById("h-paper-res").innerHTML = '<div class="explain">Score: <strong>' + right + " / " + total +
        "</strong> (" + p + "%). " + (p >= 80 ? "Exam-ready method." : p >= 60 ? "Passable — repeat this paper." : "Do this paper again today.") +
        " Answers and transcripts are now visible.</div>";
      this.disabled = true;
      refreshStats();
    };
  }

  function renderSchreibenList() {
    setNav("exam");
    setTrail([{ label: "Exam", href: "#/exam" }, { label: "Schreiben" }]);
    const hm = hoerenMeta();
    const aim = DP.level === "a1" ? "Teil 1 form (5 fields) + Teil 2 ~30 words, greeting + closing" : DP.level === "a2" ? "form or note + short letter, all points" : "30 minutes, four Leitpunkte, 100–120 words";
    view.innerHTML = "<h1>Schreiben from memory</h1>" +
      '<p class="lead">The model stays locked until you finish or the timer ends. Cover all points, then compare. Aim ~' + hm.writeMin + " min · " + aim + ".</p>" +
      '<div class="grid grid-2">' +
      (EXAM.schreiben || []).map(function (t) {
        const lv = t.register === "Sie" ? (DP.level === "a1" ? "a1" : DP.level) : "a2";
        const kind = t.kind === "form" ? "form" : "memory";
        return '<a class="card clickable" href="#/schreiben/' + t.id + '"><h3>' + esc(t.title) + "</h3><p>" + badge(lv) + " " + esc(t.register) + " · " + kind + "</p></a>";
      }).join("") + "</div>";
  }

  function renderSchreibenForm(t) {
    const fields = t.fields || [];
    view.innerHTML = '<p class="kicker">' + esc(t.register) + " · Formular</p>" +
      "<h1>" + esc(t.title) + "</h1>" +
      "<p>" + esc(t.situation) + "</p>" +
      (t.situationEn ? '<p class="en-hint">' + esc(t.situationEn) + "</p>" : "") +
      '<div class="card form-grid">' +
      fields.map(function (f) {
        return '<label>' + esc(f.label) + '<input data-field="' + f.id + '" autocomplete="off" /></label>';
      }).join("") + "</div>" +
      '<div class="btn-row"><button class="btn btn-primary" id="save-form" disabled>Mark form done</button>' +
      '<button class="btn" id="show-form-model">Show sample</button></div>' +
      (t.model ? '<div class="ex" id="form-model" hidden><span class="label-s">Sample — yours will be your own details</span><p class="de">' + esc(t.model) + "</p></div>" : "");
    function filled() {
      return fields.every(function (f) {
        const el = view.querySelector('[data-field="' + f.id + '"]');
        return el && el.value.trim();
      });
    }
    view.querySelectorAll("[data-field]").forEach(function (inp) {
      inp.addEventListener("input", function () {
        document.getElementById("save-form").disabled = !filled();
      });
    });
    document.getElementById("save-form").onclick = function () {
      if (!filled()) return;
      Progress.markDone("schreiben-" + t.id);
      toast("Form ticked. Now write the short message too.");
      refreshStats();
    };
    const show = document.getElementById("show-form-model");
    if (show) show.onclick = function () {
      const el = document.getElementById("form-model");
      if (el) el.hidden = false;
    };
  }

  function renderSchreiben(id, mode) {
    setNav("exam");
    const t = (EXAM.schreiben || []).find(function (x) { return x.id === id; });
    if (!t) { view.innerHTML = "<p>Task not found.</p>"; return; }
    setTrail([{ label: "Exam", href: "#/exam" }, { label: "Schreiben", href: "#/exam/schreiben" }, { label: t.title }]);
    if (t.kind === "form") {
      renderSchreibenForm(t);
      return;
    }
    const hm = hoerenMeta();
    const minWords = DP.level === "a1" ? 20 : DP.level === "a2" ? 50 : 80;
    const wordAim = DP.level === "a1" ? "Aim ~30 words." : DP.level === "a2" ? "Aim ~60–80 words." : "Aim 100–120 words.";
    const peek = mode === "model";
    let unlocked = peek;
    const formal = t.register === "Sie" && DP.level === "b1";
    view.innerHTML = '<p class="kicker">' + esc(t.register) + " · " + (peek ? "model allowed" : "memory") + "</p>" +
      '<div class="exam-player" id="letter-player">' +
        '<div class="exam-player-top"><p class="kicker">Timer</p>' +
        '<p class="exam-status exam-clock" id="letter-clock">' + formatClock(hm.writeMin * 60) + "</p>" +
        '<p class="exam-sub" id="letter-sub">' + wordAim + " Model locked until you finish.</p></div>" +
      "</div>" +
      "<h1>" + esc(t.title) + "</h1>" +
      "<p>" + esc(t.situation) + "</p>" +
      (t.situationEn ? '<p class="en-hint">' + esc(t.situationEn) + "</p>" : "") +
      "<ol>" + t.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ol>" +
      '<p class="letter-lock" id="letter-lock">Write from memory. Do not open the model until the four points are in the letter.</p>' +
      '<textarea id="letter" placeholder="Write the letter here…"></textarea>' +
      '<p id="wc" class="q-meta">0 words · need at least ' + minWords + "</p>" +
      '<div class="checklist card" id="lp-checks">' +
        t.points.map(function (p, i) {
          return '<label><input type="checkbox" data-lp="' + i + '" /> Leitpunkt ' + (i + 1) + " is a full sentence in my letter</label>";
        }).join("") +
        (formal ? '<label><input type="checkbox" id="chk-k2" /> I used Könnten / würde / wäre once</label>' : "") +
        '<label><input type="checkbox" id="chk-reg" /> Greeting and closing match ' + esc(t.register) + "</label>" +
      "</div>" +
      '<div class="btn-row">' +
        '<button class="btn btn-warm" id="finish-letter">I am finished — unlock model</button>' +
        '<button class="btn" id="show-model" ' + (unlocked ? "" : "disabled") + ">Show model</button>" +
        '<button class="btn btn-primary" id="save-letter" disabled>Mark task done</button>' +
        (peek ? "" : '<a class="btn btn-ghost" href="#/schreiben/' + id + '/model">Practice with model</a>') +
      "</div>" +
      '<div class="ex" id="model" hidden><span class="label-s">Model — compare, do not copy</span><p class="de">' + esc(t.model) + "</p></div>";

    const ta = document.getElementById("letter");
    const clockEl = document.getElementById("letter-clock");
    const subEl = document.getElementById("letter-sub");
    const showBtn = document.getElementById("show-model");
    const saveBtn = document.getElementById("save-letter");

    function wordCount() {
      return ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
    }
    function hasK2() {
      return /könnten|würde|wäre|hätte/i.test(ta.value);
    }
    function allLp() {
      const boxes = view.querySelectorAll("[data-lp]");
      for (let i = 0; i < boxes.length; i++) if (!boxes[i].checked) return false;
      if (document.getElementById("chk-reg") && !document.getElementById("chk-reg").checked) return false;
      if (formal && document.getElementById("chk-k2") && !document.getElementById("chk-k2").checked) return false;
      return true;
    }
    function refreshLetterUi() {
      const n = wordCount();
      document.getElementById("wc").textContent = n + " words · need at least " + minWords;
      const k2 = document.getElementById("chk-k2");
      if (k2 && hasK2()) k2.checked = true;
      saveBtn.disabled = !(unlocked && n >= minWords && allLp());
      showBtn.disabled = !unlocked;
    }
    function unlock(why) {
      unlocked = true;
      showBtn.disabled = false;
      if (subEl) subEl.textContent = why || "Model unlocked. Compare, then tick the points you actually wrote.";
      refreshLetterUi();
    }

    ta.addEventListener("input", refreshLetterUi);
    view.querySelectorAll("#lp-checks input").forEach(function (box) {
      box.addEventListener("change", refreshLetterUi);
    });
    document.getElementById("finish-letter").onclick = function () {
      stopDrillClock();
      unlock("Finished. Unlock the model and tick only what is really in the letter.");
    };
    showBtn.onclick = function () {
      if (!unlocked) return;
      document.getElementById("model").hidden = false;
      enhanceGerman(document.getElementById("model"));
    };
    saveBtn.onclick = function () {
      if (saveBtn.disabled) return;
      Progress.markDone("schreiben-" + id);
      toast("Letter saved. Redo it later with the model still hidden.");
      refreshStats();
    };
    startDrillClock(hm.writeMin * 60, function (left) {
      if (!clockEl) return;
      clockEl.textContent = formatClock(left);
      clockEl.classList.toggle("is-low", left <= 120);
    }, function () {
      unlock("Time. Unlock the model. Missing Leitpunkte can zero the letter in telc.");
    });
    refreshLetterUi();
  }

  function renderExamEars() {
    setNav("exam");
    setTrail([{ label: "Exam", href: "#/exam" }, { label: "Official ears" }]);
    const m = meta();
    const hm = hoerenMeta();
    view.innerHTML = "<h1>Official exam ears</h1>" +
      '<p class="lead"><strong>Required before exam day.</strong> Browser TTS only trains the question type. The real paper is a room, a loudspeaker, and one play for Teil 1. Download the official ' +
      esc(m.title) + " sample from telc, then play the MP3 here — it never leaves this device. People who skip this often fail Hören.</p>" +
      '<div class="warn"><span class="label-s">Do not skip</span> We cannot ship telc’s audio. The Modelltest PDF + MP3 on telc.net is the acoustics drill. Tick this only after a full sitting with no pause on Teil 1.</div>' +
      '<div class="card"><h3>Do this in weeks 7–8</h3><ol>' +
        "<li>Open <a href=\"" + officialTelcUrl() + "\" target=\"_blank\" rel=\"noopener\">telc.net · " + esc(m.title) + "</a> and download the Modelltest PDF + MP3.</li>" +
        "<li>Print or screenshot the Hören questions. Sit ~" + hm.minutes + " minutes. Do not pause Teil 1.</li>" +
        "<li>Load the MP3 below and start the timer. Mark answers on the official paper, not on this site.</li>" +
      "</ol></div>" +
      '<div class="exam-player" style="margin-top:1rem">' +
        '<p class="kicker">Local MP3</p>' +
        '<p class="exam-status exam-clock" id="ears-clock">' + formatClock(hm.minutes * 60) + "</p>" +
        '<p class="exam-sub" id="ears-file">' + (localEars.name ? esc(localEars.name) : "No file yet.") + "</p>" +
        '<input type="file" id="ears-input" accept="audio/*" />' +
        '<audio id="ears-audio" controls style="width:100%;margin-top:0.7rem"></audio>' +
        '<div class="btn-row">' +
          '<button type="button" class="btn btn-primary" id="ears-start">Start ' + hm.minutes + " min</button>" +
          '<button type="button" class="btn" id="ears-done">Mark ears practice done</button>' +
        "</div></div>" +
      '<div class="btn-row"><a class="btn" href="#/exam/hoeren">Back to method papers</a></div>';

    const audio = document.getElementById("ears-audio");
    if (localEars.url) audio.src = localEars.url;
    document.getElementById("ears-input").onchange = function (ev) {
      const file = ev.target.files && ev.target.files[0];
      if (!file) return;
      if (localEars.url) URL.revokeObjectURL(localEars.url);
      localEars.url = URL.createObjectURL(file);
      localEars.name = file.name;
      audio.src = localEars.url;
      document.getElementById("ears-file").textContent = file.name;
    };
    document.getElementById("ears-start").onclick = function () {
      const clockEl = document.getElementById("ears-clock");
      startDrillClock(hm.minutes * 60, function (left) {
        clockEl.textContent = formatClock(left);
        clockEl.classList.toggle("is-low", left <= 120);
      }, function () {
        clockEl.textContent = "0:00";
        toast("Listening time is up. Mark the official paper.");
      });
      if (audio.src) audio.play().catch(function () {});
    };
    document.getElementById("ears-done").onclick = function () {
      Progress.markDone("official-ears");
      toast("Official ears ticked. Repeat if under 80% on the sample.");
      refreshStats();
    };
  }

  function pickOralItem(arr, avoid) {
    if (!arr || !arr.length) return null;
    if (arr.length === 1) return arr[0];
    let x;
    let n = 0;
    do {
      x = arr[Math.floor(Math.random() * arr.length)];
      n += 1;
    } while (avoid && x === avoid && n < 12);
    return x;
  }

  function renderSprechen() {
    setNav("exam");
    setTrail([{ label: "Exam", href: "#/exam" }, { label: "Sprechen" }]);
    const sp = EXAM.sprechen;
    const fmt = window.EXAM_FORMAT;
    const oral = (fmt && fmt.oral) || {};
    if (!sp) {
      view.innerHTML = "<h1>Sprechen</h1><p>No speaking pack for this level yet.</p>";
      return;
    }
    const t2title = sp.teil2Title || "Teil 2";
    const t2lead = sp.teil2Lead || "Speak, then ask your partner.";
    const t2steps = sp.teil2Steps || [];
    const t3title = sp.teil3Title || "Teil 3 — plan and agree";
    const t3lead = sp.teil3Lead || "You must reach a decision.";
    view.innerHTML = "<h1>Sprechen</h1>" +
      '<p class="lead">' + esc(sp.lead || ("Phrases first, then a timed ~" + (oral.minutes || 15) + "-minute run. A human partner beats both roles on your phone.")) + "</p>" +
      (oral.note ? '<p class="q-meta">' + esc(oral.note) + "</p>" : "") +
      '<div class="btn-row"><a class="btn btn-primary" href="#/exam/sprechen/run">Start oral run</a></div>' +
      '<div class="card" style="margin-top:1rem"><h3>Teil 1 — intro (memorise, then throw the paper away)</h3>' +
      '<p class="de">' + esc(sp.intro) + "</p>" +
      "<p>Follow-up questions — tap the speaker, then answer aloud.</p><ul>" + (sp.questions || []).map(function (q) {
        return "<li><span class=\"de\">" + esc(q) + "</span></li>";
      }).join("") + "</ul></div>" +
      '<div class="card" style="margin-top:0.8rem"><h3>' + esc(t2title) + "</h3>" +
      "<p>" + esc(t2lead) + "</p>" +
      (t2steps.length ? "<ol>" + t2steps.map(function (s) { return "<li><span class=\"de\">" + esc(s) + "</span></li>"; }).join("") + "</ol>" : "") +
      (sp.topics || []).map(function (t) {
        const asks = (t.ask || []).map(function (q) { return "<span class='de'>" + esc(q) + "</span>"; }).join(" · ");
        return "<p><strong>" + esc(t.t) + "</strong> — <span class='de'>" + esc(t.spine) + "</span>" +
          (asks ? "<br><span class='q-meta'>Ask: " + asks + "</span>" : "") + "</p>";
      }).join("") + "</div>" +
      '<div class="card" style="margin-top:0.8rem"><h3>' + esc(t3title) + "</h3>" +
      "<p>" + esc(t3lead) + "</p>" +
      '<div class="phrase-list">' + (sp.engine || []).map(function (e) {
        return '<div class="phrase-line"><span class="de">' + esc(e.de) + "</span></div>";
      }).join("") + "</div>" +
      '<p id="said" class="de"></p>' +
      "<h4>Practice cards — draw a new one in the timed run</h4>" +
      (sp.planning || []).map(function (p) {
        return "<p><strong>" + esc(p.t) + "</strong> — " + p.points.map(esc).join(" · ") + "</p>";
      }).join("") + "</div>";
  }

  function renderSprechenRun() {
    setNav("exam");
    setTrail([{ label: "Exam", href: "#/exam" }, { label: "Sprechen", href: "#/exam/sprechen" }, { label: "Oral run" }]);
    const sp = EXAM.sprechen;
    const fmt = window.EXAM_FORMAT;
    const oral = (fmt && fmt.oral) || {};
    if (!sp) {
      view.innerHTML = "<h1>Oral run</h1><p>No speaking pack for this level yet.</p>";
      return;
    }
    const minutes = oral.minutes || 15;
    const t2title = sp.teil2Title || "Teil 2";
    const t2lead = sp.teil2Lead || "Speak, then ask your partner.";
    const t3title = sp.teil3Title || "Teil 3 — plan and agree";
    const t3lead = sp.teil3Lead || "You must reach a decision.";
    const timerSec = sp.teil2Timer == null ? 90 : Number(sp.teil2Timer);
    let topic = pickOralItem(sp.topics) || { t: "Freizeit", spine: "Hier geht es um Freizeit." };
    let plan = pickOralItem(sp.planning) || { t: "Wochenende", points: ["Wann?", "Wo?", "Kosten?"] };

    function topicInner() {
      const asks = topic.ask || [];
      return "<p><strong>" + esc(topic.t) + "</strong></p>" +
        '<p class="de">' + esc(topic.spine) + "</p>" +
        "<p>" + esc(t2lead) + "</p>" +
        (asks.length ? "<p>Ask your partner:</p><ul>" + asks.map(function (q) {
          return '<li><span class="de">' + esc(q) + "</span></li>";
        }).join("") + "</ul>" : "") +
        (timerSec > 0
          ? '<button type="button" class="btn" id="oral-90">Start ' + timerSec + "s</button> <span id=\"oral-90c\" class=\"q-meta\"></span>"
          : '<p class="q-meta">No 90-second speech at this level. Two or three short sentences, then a question back.</p>') +
        '<div class="btn-row" style="margin-top:0.6rem"><button type="button" class="btn" id="oral-new-topic">Andere Karte</button></div>';
    }
    function planInner() {
      return "<p>" + esc(t3lead) + "</p>" +
        "<p><strong>" + esc(plan.t) + "</strong> — " + (plan.points || []).map(esc).join(" · ") + "</p>" +
        '<div class="phrase-list">' + (sp.engine || []).map(function (e) {
          return '<div class="phrase-line"><span class="de">' + esc(e.de) + "</span></div>";
        }).join("") + "</div>" +
        '<div class="btn-row"><button type="button" class="btn" id="oral-new-plan">Andere Planung</button></div>' +
        '<label class="q-meta" for="oral-decision">Unsere Entscheidung (required)</label>' +
        '<textarea id="oral-decision" placeholder="z.B. Wir treffen uns am Samstag um 15 Uhr im Park. Jeder bringt etwas zu essen mit."></textarea>' +
        '<p class="q-meta">If this box is empty, Teil 3 did not happen. Examiners listen for a clear plan.</p>';
    }

    view.innerHTML = '<p class="kicker">' + esc((fmt && fmt.name) || "telc") + " · ~" + minutes + " minutes" + (oral.prep ? " · " + oral.prep + " min prep for Teil 2–3" : " · no prep") + "</p>" +
      '<div class="exam-player"><p class="kicker">Clock</p>' +
        '<p class="exam-status exam-clock" id="oral-clock">' + formatClock(minutes * 60) + "</p>" +
        '<p class="exam-sub" id="oral-phase">Teil 1 — Kontakt. Answer out loud. A partner is better.</p>' +
        '<div class="btn-row">' +
          '<button type="button" class="btn btn-primary" id="oral-start">Start ' + formatClock(minutes * 60) + "</button>" +
          '<button type="button" class="btn" data-oral-teil="1">Teil 1</button>' +
          '<button type="button" class="btn" data-oral-teil="2">Teil 2</button>' +
          '<button type="button" class="btn" data-oral-teil="3">Teil 3</button>' +
        "</div></div>" +
      '<section class="card teil-block is-active-teil" id="oral-t1" style="margin-top:1rem"><h3>Teil 1 · 3–4 min</h3>' +
        '<p class="de">' + esc(sp.intro) + "</p>" +
        "<p>Questions — hear, then speak. Do not read a speech at the wall.</p><ul>" +
        (sp.questions || []).map(function (q, i) {
          return '<li><button type="button" class="btn" data-ask="' + i + '">Ask</button> <span class="de">' + esc(q) + "</span></li>";
        }).join("") + "</ul></section>" +
      '<section class="card teil-block" id="oral-t2" style="margin-top:0.8rem"><h3>' + esc(t2title) + "</h3>" +
        '<div id="oral-topic">' + topicInner() + "</div>" +
      "</section>" +
      '<section class="card teil-block" id="oral-t3" style="margin-top:0.8rem"><h3>' + esc(t3title) + "</h3>" +
        '<div id="oral-plan">' + planInner() + "</div>" +
      "</section>" +
      '<div class="btn-row"><button type="button" class="btn btn-primary" id="oral-save" disabled>Mark oral run done</button>' +
      '<a class="btn" href="#/exam/sprechen">Phrases</a></div>';

    function showTeil(n) {
      ["1", "2", "3"].forEach(function (k) {
        const el = document.getElementById("oral-t" + k);
        if (el) el.classList.toggle("is-active-teil", k === String(n));
      });
      const labels = {
        1: "Teil 1 — Kontakt. Answer out loud.",
        2: t2lead,
        3: t3lead
      };
      document.getElementById("oral-phase").textContent = labels[n] || "";
    }
    function refreshOral() {
      const box = document.getElementById("oral-decision");
      const d = box ? (box.value || "").trim() : "";
      document.getElementById("oral-save").disabled = d.length < 20;
    }
    function bindDecision() {
      const box = document.getElementById("oral-decision");
      if (box) box.addEventListener("input", refreshOral);
      refreshOral();
    }
    function bindTimer() {
      const btn = document.getElementById("oral-90");
      if (!btn) return;
      btn.onclick = function () {
        if (extraInterval) {
          clearInterval(extraInterval);
          extraInterval = null;
        }
        const c = document.getElementById("oral-90c");
        let n = timerSec;
        if (c) c.textContent = formatClock(n);
        extraInterval = setInterval(function () {
          n -= 1;
          if (c) c.textContent = formatClock(n);
          if (n <= 0) {
            clearInterval(extraInterval);
            extraInterval = null;
            if (c) c.textContent = "Stop. Ask: Und du?";
          }
        }, 1000);
      };
    }
    function bindCards() {
      const nt = document.getElementById("oral-new-topic");
      if (nt) nt.onclick = function () {
        topic = pickOralItem(sp.topics, topic) || topic;
        const el = document.getElementById("oral-topic");
        if (el) {
          el.innerHTML = topicInner();
          enhanceGerman(el);
          bindTimer();
          bindCards();
        }
      };
      const np = document.getElementById("oral-new-plan");
      if (np) np.onclick = function () {
        const keep = document.getElementById("oral-decision") ? document.getElementById("oral-decision").value : "";
        plan = pickOralItem(sp.planning, plan) || plan;
        const el = document.getElementById("oral-plan");
        if (el) {
          el.innerHTML = planInner();
          const box = document.getElementById("oral-decision");
          if (box) box.value = keep;
          enhanceGerman(el);
          bindDecision();
          bindCards();
        }
      };
    }
    bindDecision();
    bindTimer();
    bindCards();
    document.querySelectorAll("[data-oral-teil]").forEach(function (btn) {
      btn.onclick = function () { showTeil(btn.getAttribute("data-oral-teil")); };
    });
    document.querySelectorAll("[data-ask]").forEach(function (btn) {
      btn.onclick = function () {
        const q = sp.questions[Number(btn.getAttribute("data-ask"))];
        if (q && Engine.speak) Engine.speak(q, { role: "announcer" });
      };
    });
    document.getElementById("oral-start").onclick = function () {
      showTeil(1);
      startDrillClock(minutes * 60, function (left) {
        const el = document.getElementById("oral-clock");
        if (!el) return;
        el.textContent = formatClock(left);
        el.classList.toggle("is-low", left <= 60);
        if (left === (minutes - 4) * 60) showTeil(2);
        if (left === (minutes - 9) * 60) showTeil(3);
      }, function () {
        toast(minutes + " minutes. If the decision box is empty, run Teil 3 again.");
        refreshOral();
      });
    };
    document.getElementById("oral-save").onclick = function () {
      if (document.getElementById("oral-save").disabled) return;
      Progress.markDone("sprechen-run");
      toast("Oral run saved. Do this 6 times with a human if you can — new cards each time.");
      refreshStats();
    };
  }

  function renderB2() {
    setNav("b2");
    setTrail([{ label: "B2 stretch" }]);
    if (DP.level !== "b1") {
      view.innerHTML = "<h1>B2 stretch lives in the B1 track</h1>" +
        '<p class="lead">Finish A1/A2 first. Switch to B1 when mocks feel easy — B2 recognition material is there so telc B1 feels slow. A full telc B2 exam gym can be added later.</p>' +
        '<div class="btn-row"><a class="btn btn-primary" href="#/levels">Switch level</a></div>';
      return;
    }
    const lessons = GRAMMAR.filter(function (g) { return g.level === "b2"; });
    view.innerHTML = "<h1>B2 stretch — so B1 feels easy</h1>" +
      '<p class="lead">You do not need perfect B2 to pass telc B1. You need denser Lesen recognition and extra words for speaking. Do these after week 6. This is not a full B2 exam course.</p>' +
      '<div class="grid grid-2">' +
      lessons.map(function (g) {
        return '<a class="card clickable" href="#/grammar/' + g.id + '"><h3>' + esc(g.title) + "</h3><p>" + g.minutes + " min</p></a>";
      }).join("") +
      '<a class="card clickable" href="#/vocab/b2-abstract"><h3>B2 abstract vocab</h3><p>Society, law, science, AI.</p></a>' +
      '<a class="card clickable" href="#/vocab/b2-society"><h3>B2 society vocab</h3><p>News German: Rente, Energiewende, Inflation.</p></a>' +
      '<a class="card clickable" href="#/drill/b2-mix"><h3>B2 quiz mix</h3><p>Konjunktiv I, rumours, participles.</p></a>' +
      '<a class="card clickable" href="#/exam/lesen/lesen-3"><h3>Harder B1 Lesen</h3><p>Paper 3 — denser everyday German.</p></a>' +
      "</div>";
  }

  function renderProgress() {
    setNav("progress");
    setTrail([{ label: "Progress" }]);
    const m = meta();
    const map = Session.passMap();
    const c = map.clock;
    const r = map.readiness;
    function rows(list, okLabel, openLabel, weak) {
      if (!list.length) return "<p class=\"pass-meta\">None yet.</p>";
      return '<div class="pass-list">' + list.map(function (item) {
        const st = weak ? "is-weak" : (item.done ? "is-ok" : "is-open");
        const label = weak
          ? item.pct + "%" + (item.due && item.due <= c.today ? " · due" : item.due ? " · due " + item.due : "")
          : (item.done ? okLabel : openLabel);
        return '<a class="pass-row" href="' + item.href + '"><span>' + esc(item.title) +
          (item.core ? ' <span class="pass-meta">core</span>' : "") +
          "</span><span class=\"pass-status " + st + "\">" + esc(label) + "</span></a>";
      }).join("") + "</div>";
    }
    const dueHtml = map.due.length
      ? '<div class="pass-list">' + map.due.map(function (d) {
          const weak = d.lastPct != null && d.lastPct < Session.PASS;
          const label = weak
            ? d.lastPct + "% · 1-day"
            : (d.interval || 3) + "-day box";
          return '<a class="pass-row" href="' + d.href + '"><span>' + esc(d.title) +
            "</span><span class=\"pass-status " + (weak ? "is-weak" : "is-ok") + "\">" + esc(label) + "</span></a>";
        }).join("") + "</div>"
      : "<p>Nothing due. Passed quizzes return in 3 days, then 7 if they hold at 80%.</p>";
    view.innerHTML = "<h1>Pass map · " + esc(m.title) + "</h1>" +
      '<p class="lead">' + Session.leadCopy(c) + (c.examDate ? "" : " Add an exam date on Today so this week matches the sitting.") + "</p>" +
      '<div class="readiness" data-level="' + r.level + '"><h2>' +
      (r.level === "ready" ? "Ready enough to sit." : r.level === "gap" ? "Gaps before the paper." : r.level === "shape" ? "Shape is forming." : "Will you pass?") +
      "</h2><p>" + esc(r.text) + "</p>" +
      "<p class=\"pass-meta\">" + map.produce + " / " + map.topics.length + " topics you can produce · " +
      map.weak.length + " quiz" + (map.weak.length === 1 ? "" : "zes") + " under 80% · " +
      map.mocksDone + " / " + map.mocks.length + " mocks · " +
      (map.oral ? "oral run done" : "no oral run yet") +
      " · streak " + ((Progress.get().streak && Progress.get().streak.count) || 0) + "</p></div>" +
      "<h2>Topics you can produce</h2>" +
      rows(map.topics, "can produce", "open", false) +
      "<h2>Due review (1 / 3 / 7)</h2>" + dueHtml +
      "<h2>Weak quizzes</h2>" +
      (map.weak.length
        ? rows(map.weak.map(function (q) { return { title: q.title, href: q.href, done: false, pct: q.pct, due: q.due }; }), "", "", true)
        : "<p>No scored set is under 80%.</p>") +
      "<h2>Mocks</h2>" +
      (map.mocks.length ? rows(map.mocks, "done", "not sat", false) : "<p>No mocks in this level pack.</p>") +
      examDateRow() +
      '<div class="btn-row"><button class="btn" id="reset-level">Reset ' + esc(m.title) + " progress</button>" +
      '<button class="btn" id="reset">Reset all levels</button></div>' +
      '<p class="lead">Reset keeps the exam date. Scores, ticks, and the due list are erased for this level.</p>';
    bindExamDate("exam-date", "exam-date-clear");
    document.getElementById("reset-level").onclick = function () {
      if (confirm("Erase ticks, scores, and the due list for " + m.title + " only? The exam date stays.")) {
        Progress.resetLevel();
        Session.rebuild();
        refreshStats();
        renderProgress();
        afterPaint();
      }
    };
    document.getElementById("reset").onclick = function () {
      if (confirm("Erase progress for A1, A2, and B1 on this browser?")) {
        Progress.reset();
        DP.level = null;
        location.hash = "#/levels";
      }
    };
  }

  if (menuBtn) {
    menuBtn.onclick = function () {
      setNavOpen(!sidebar.classList.contains("open"));
    };
  }
  const dockMenu = document.getElementById("dock-menu");
  if (dockMenu) {
    dockMenu.onclick = function () { setNavOpen(true); };
  }
  if (sidebarClose) sidebarClose.onclick = function () { setNavOpen(false); };
  if (navBackdrop) navBackdrop.onclick = function () { setNavOpen(false); };
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setNavOpen(false);
  });
  window.addEventListener("resize", function () {
    if (!window.matchMedia(MQ_NAV).matches) setNavOpen(false);
  });

  document.addEventListener("click", function (e) {
    const a = e.target.closest("a[href^='#/']");
    if (!a || a.getAttribute("target") === "_blank") return;
    const href = a.getAttribute("href");
    if (!href) return;
    if (quiz && !quiz.done && quiz.i > 0) {
      if (!window.confirm("Leave this quiz? Score so far will not be saved.")) {
        e.preventDefault();
        return;
      }
      quiz = null;
    }
    e.preventDefault();
    setNavOpen(false);
    if (location.hash === href) route();
    else location.hash = href;
  });

  const styleBoost = document.createElement("style");
  styleBoost.textContent = "button.card { font: inherit; text-align: left; width: 100%; border: 1px solid var(--line); background: var(--paper); }";
  document.head.appendChild(styleBoost);

  window.addEventListener("hashchange", route);
  window.speechSynthesis && window.speechSynthesis.getVoices();
  Engine.warmVoices && Engine.warmVoices();
  ensureLevel();
  paintChrome();
  route();
})();
