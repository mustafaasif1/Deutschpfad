(function () {
  const view = document.getElementById("view");
  const crumb = document.getElementById("crumb");
  const statsEl = document.getElementById("top-stats");
  const sidebar = document.getElementById("sidebar");

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
      if (el.closest("button, a.card, a[href^='#']")) return;
      if (el.closest(".speak-wrap") && el.parentNode.classList.contains("speak-wrap") && el.parentNode.querySelector(".speak-btn")) return;
      if (el.querySelector(".speak-btn")) return;
      const text = (el.textContent || "").replace(/\s+/g, " ").trim();
      if (!text || text.length < 2 || text.length > 400) return;
      const wrap = document.createElement("span");
      wrap.className = "speak-wrap";
      el.parentNode.insertBefore(wrap, el);
      wrap.appendChild(el);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "speak-btn";
      btn.setAttribute("data-speak", text);
      btn.title = "Speak German";
      btn.setAttribute("aria-label", "Speak German");
      btn.innerHTML = SPEAK_SVG;
      wrap.appendChild(btn);
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
    if (goal) goal.innerHTML = "Pass <strong>" + esc(m.exam) + "</strong>. Progress for this level is saved separately.";
    if (bookOpen) {
      bookOpen.hidden = false;
      bookOpen.href = m.book;
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
      return;
    }
    const s = Progress.get();
    const done = Object.keys(s.done).length;
    statsEl.innerHTML =
      '<span class="stat-pill">' + (DP.level || "").toUpperCase() + "</span>" +
      '<span class="stat-pill">' + s.xp + " XP</span>" +
      '<span class="stat-pill">Streak ' + (s.streak.count || 0) + "</span>" +
      '<span class="stat-pill">' + done + " done</span>";
  }

  function setNav(id) {
    document.querySelectorAll(".nav a").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("data-nav") === id);
    });
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

  function stopHoerenRun() {
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
    sidebar.classList.remove("open");
    stopHoerenRun();
    const p = hashParts();
    const a = p[0] || "home";
    if (a === "levels" || a === "level") {
      paintChrome();
      refreshStats();
      renderLevels();
      enhanceGerman(view);
      return;
    }
    if (!DP.level) {
      ensureLevel();
      if (!DP.level) {
        paintChrome();
        refreshStats();
        renderLevels();
        enhanceGerman(view);
        return;
      }
    }
    paintChrome();
    refreshStats();
    if (a === "plan") renderPlan();
    else if (a === "grammar" && p[1]) renderGrammarLesson(p[1]);
    else if (a === "grammar") renderGrammar();
    else if (a === "vocab" && p[1] && p[2] === "quiz") startVocabQuiz(p[1]);
    else if (a === "vocab" && p[1]) renderVocabTopic(p[1]);
    else if (a === "vocab") renderVocab();
    else if (a === "drill" && p[1]) startDrill(p[1]);
    else if (a === "exam" && p[1] === "lesen" && p[2]) renderLesen(p[2]);
    else if (a === "exam" && p[1] === "lesen") renderLesenList();
    else if (a === "exam" && p[1] === "sprachbausteine") renderSB();
    else if (a === "exam" && p[1] === "hoeren" && p[2]) renderHoerenPaper(p[2], p[3]);
    else if (a === "exam" && p[1] === "hoeren") renderHoeren();
    else if (a === "exam" && p[1] === "schreiben") renderSchreibenList();
    else if (a === "exam" && p[1] === "sprechen") renderSprechen();
    else if (a === "exam" && p[1] === "mock" && p[2]) renderMock(p[2]);
    else if (a === "exam" && p[1] === "mock") renderMockList();
    else if (a === "exam") renderExamHub();
    else if (a === "schreiben" && p[1]) renderSchreiben(p[1]);
    else if (a === "b2") renderB2();
    else if (a === "progress") renderProgress();
    else renderHome();
    enhanceGerman(view);
  }

  function renderLevels() {
    setNav("levels");
    crumb.textContent = "Choose level";
    const summaries = Progress.summaryAll();
    view.innerHTML = '<p class="kicker">Deutschpfad</p>' +
      "<h1>Which telc exam are you aiming for?</h1>" +
      '<p class="lead">Each level has its own 8-week plan, vocabulary, grammar, exam gym, printable book, and saved progress. Start at your true level — A1 if you are new, A2 if you can survive daily life, B1 to pass the classic certificate.</p>' +
      '<div class="grid grid-3">' +
      LEVEL_META.map(function (lv) {
        const sum = summaries.find(function (s) { return s.id === lv.id; }) || { xp: 0, checks: 0 };
        return '<button type="button" class="card clickable level-card" data-pick="' + lv.id + '">' +
          "<h3>" + esc(lv.title) + " " + badge(lv.id) + "</h3>" +
          "<p><strong>" + esc(lv.subtitle) + "</strong></p>" +
          "<p>" + esc(lv.blurb) + "</p>" +
          '<p class="q-meta">' + sum.xp + " XP · " + sum.checks + " plan ticks</p></button>";
      }).join("") + "</div>" +
      '<div class="card" style="margin-top:1rem"><h3>Structure (yes, this is right)</h3><ol>' +
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
    crumb.textContent = "Today";
    const m = meta();
    const s = Progress.get();
    const start = new Date(s.started + "T12:00:00");
    const day = Math.min(56, Math.max(1, Math.floor((Date.now() - start.getTime()) / 86400000) + 1));
    const weekN = Math.min(8, Math.ceil(day / 7));
    const week = (WEEKS && WEEKS[weekN - 1]) || { title: "Your plan", goal: "Pick a task from the plan.", tasks: [] };
    const openTasks = week.tasks.filter(function (t) { return !s.checks[t.id]; });
    const pack = getPack();
    view.innerHTML =
      '<p class="kicker">8 weeks · ' + esc(m.exam) + "</p>" +
      "<h1>" + esc(m.subtitle) + "</h1>" +
      '<p class="lead">Day <strong>' + day + "</strong> (week " + weekN + "). This level has <strong>" +
      (pack.vocab || []).length + " vocab</strong>, <strong>" + (pack.grammar || []).length + " grammar lessons</strong>, <strong>" +
      ((pack.exam && pack.exam.lesen) || []).length + " Lesen papers</strong>, <strong>" +
      ((pack.exam && pack.exam.schreiben) || []).length + " writing tasks</strong>. Progress is tracked only for " + m.title + ".</p>" +
      '<div class="grid grid-2">' +
        '<div class="card"><h3>This week</h3><p><strong>' + esc(week.title) + "</strong><br>" + esc(week.goal) + "</p>" +
        pctBar(week.tasks.filter(function (t) { return s.checks[t.id]; }).length, week.tasks.length) +
        '<div class="btn-row"><a class="btn btn-primary" href="#/plan">Open plan</a></div></div>' +
        '<div class="card"><h3>Continue</h3><p>' + (openTasks[0] ? esc(openTasks[0].label) : "Week complete. Do a mock or switch level when ready.") + "</p>" +
        '<div class="btn-row">' + (openTasks[0] ? '<a class="btn btn-warm" href="' + openTasks[0].href + '">Start task</a>' : '<a class="btn btn-warm" href="#/exam/mock">Mocks</a>') + "</div></div>" +
      "</div>" +
      "<h2>Jump in</h2>" +
      '<div class="grid grid-3">' +
        '<a class="card clickable" href="#/grammar"><h3>Grammar</h3><p>Lessons + quizzes for ' + m.title + ".</p></a>" +
        '<a class="card clickable" href="#/vocab"><h3>Vocabulary</h3><p>Flashcards with articles + quizzes.</p></a>' +
        '<a class="card clickable" href="#/exam"><h3>Exam gym</h3><p>Lesen, Hören exam sitting (German audio), letters, speaking.</p></a>' +
      "</div>" +
      "<h2>Daily minimum</h2>" +
      '<div class="card"><ol>' +
        "<li>One grammar quiz until 80%.</li>" +
        "<li>20–25 vocabulary cards — always with the article.</li>" +
        "<li>Letter, listening, or 10 minutes speaking aloud.</li>" +
      "</ol><p>Weeks 7–8: official telc sample audio for your level on telc.net. Browser voice trains method; exam audio trains ears.</p></div>";
  }

  function renderPlan() {
    setNav("plan");
    crumb.textContent = "8-week plan";
    const m = meta();
    const s = Progress.get();
    view.innerHTML = "<h1>Eight weeks · " + esc(m.exam) + "</h1>" +
      '<p class="lead">Ticks save under <strong>' + m.title + "</strong> only. Switching levels does not erase other levels.</p>" +
      WEEKS.map(function (w) {
        const n = w.tasks.filter(function (t) { return s.checks[t.id]; }).length;
        return '<section class="card" style="margin-bottom:0.8rem">' +
          "<h3>Week " + w.id + " · " + esc(w.title) + " " + badge(m.id) + "</h3>" +
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
  }

  function renderGrammar() {
    setNav("grammar");
    crumb.textContent = "Grammar";
    const m = meta();
    view.innerHTML = "<h1>Grammar academy</h1>" +
      '<p class="lead">Do the lesson, then the quiz until 80%. Every example has a speaker — tap it and repeat aloud. This is ' + esc(m.title) + " grammar only.</p>" +
      '<div class="grid grid-2">' +
      GRAMMAR.map(function (g) {
        const qs = Engine.bySet(g.id);
        const extra = { wordorder: "wordorder", konjunktiv2: "konjunktiv2" }[g.id];
        const n = qs.length;
        return '<a class="card clickable" href="#/grammar/' + g.id + '">' +
          "<h3>" + esc(g.title) + " " + badge(g.level) + "</h3>" +
          "<p>" + g.minutes + " min" + (n ? " · " + n + " quiz items" : "") + "</p></a>";
      }).join("") + "</div>" +
      "<h2>Mixed drills</h2>" +
      '<div class="grid grid-2">' +
      DRILLS.map(function (d) {
        return '<a class="card clickable" href="#/drill/' + d.id + '"><h3>' + esc(d.title) + "</h3><p>" + esc(d.blurb) + "</p></a>";
      }).join("") + "</div>";
  }

  function renderGrammarLesson(id) {
    setNav("grammar");
    const g = GRAMMAR.find(function (x) { return x.id === id; });
    if (!g) { view.innerHTML = "<p>Lesson not found.</p>"; return; }
    crumb.textContent = g.title;
    const n = Engine.bySet(g.id).length;
    view.innerHTML = '<p class="kicker">Grammar · ' + g.level.toUpperCase() + "</p>" +
      "<h1>" + esc(g.title) + "</h1>" +
      '<article class="lesson">' + g.html + "</article>" +
      '<div class="btn-row">' +
        (n ? '<button class="btn btn-primary" id="start-q">Quiz this topic (' + n + ")</button>" : "") +
        '<a class="btn" href="#/grammar">All lessons</a></div>';
    const btn = document.getElementById("start-q");
    if (btn) btn.onclick = function () {
      Progress.markDone("lesson-" + id);
      beginQuiz(Engine.shuffle(Engine.bySet(id)), g.title + " quiz", "g-" + id);
    };
  }

  function renderVocab() {
    setNav("vocab");
    crumb.textContent = "Vocabulary";
    const m = meta();
    view.innerHTML = "<h1>Vocabulary trainer</h1>" +
      '<p class="lead">Always learn <strong>article + word</strong>. Tap the speaker next to every German word. ' + esc(m.title) + " words only — do not skip to another level’s list.</p>" +
      '<div class="grid grid-2">' +
      VOCAB_TOPICS.map(function (t) {
        const n = Engine.vocabByTopic(t.id).length;
        return '<a class="card clickable" href="#/vocab/' + t.id + '"><h3>' + esc(t.title) + "</h3><p>" + esc(t.blurb) + " · " + n + " words</p></a>";
      }).join("") + "</div>";
  }

  function renderVocabTopic(id) {
    setNav("vocab");
    const topic = VOCAB_TOPICS.find(function (t) { return t.id === id; });
    const words = Engine.vocabByTopic(id);
    if (!topic) { view.innerHTML = "<p>Topic not found.</p>"; return; }
    crumb.textContent = topic.title;
    let i = 0;
    let front = true;
    function cardHtml() {
      const w = words[i];
      const label = (w.art ? w.art + " " : "") + w.de;
      return '<div class="card flash" id="flash">' +
        (front
          ? '<div class="flash-head"><div class="big de">' + esc(label) + "</div></div><div class=\"sub\">Tap card for English · tap speaker to hear it" + (w.pl ? " · " + esc(w.pl) : "") + "</div>"
          : '<div><div class="big">' + esc(w.en) + '</div><div class="sub"><span class="de">' + esc(label) + "</span></div></div>") +
        "</div>" +
        '<p class="q-meta">' + (i + 1) + " / " + words.length + " " + badge(w.level) + "</p>";
    }
    function listHtml() {
      return '<h2>All words in this topic</h2><p class="lead">Speaker beside each German word. Learn article + noun as one chunk.</p>' +
        words.map(function (w) {
          const label = (w.art ? w.art + " " : "") + w.de;
          return '<div class="vocab-row">' +
            '<span class="de">' + esc(label) + "</span>" +
            '<span class="vocab-en">' + esc(w.en) + (w.pl ? " · " + esc(w.pl) : "") + "</span></div>";
        }).join("");
    }
    view.innerHTML = "<h1>" + esc(topic.title) + "</h1>" +
      '<p class="lead">Tap the card to flip. Tap the speaker to hear German. Then quiz yourself by typing.</p>' +
      '<div id="flash-wrap">' + cardHtml() + "</div>" +
      '<div class="btn-row">' +
        '<button class="btn" id="prev">Previous</button>' +
        '<button class="btn" id="next">Next</button>' +
        '<button class="btn btn-primary" id="quiz">Quiz 12</button>' +
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
    document.getElementById("next").onclick = function () { i = (i + 1) % words.length; front = true; Progress.markVocab(words[i].id); paint(); };
    document.getElementById("prev").onclick = function () { i = (i - 1 + words.length) % words.length; front = true; paint(); };
    document.getElementById("quiz").onclick = function () { location.hash = "#/vocab/" + id + "/quiz"; };
  }

  function startVocabQuiz(topic) {
    const words = Engine.vocabByTopic(topic);
    beginQuiz(Engine.makeVocabQuiz(words, 12), "Vocab quiz", "vocab-" + topic);
  }

  function startDrill(id) {
    const d = DRILLS.find(function (x) { return x.id === id; });
    if (!d) { view.innerHTML = "<p>Drill not found.</p>"; return; }
    beginQuiz(Engine.shuffle(Engine.forDrill(d)), d.title, "drill-" + id);
  }

  function beginQuiz(questions, title, setId) {
    if (!questions.length) {
      view.innerHTML = "<p>No questions in this set yet.</p>";
      return;
    }
    quiz = { questions: questions, i: 0, correct: 0, title: title, setId: setId, locked: false };
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
    setNav("grammar");
    const q = quiz.questions[quiz.i];
    crumb.textContent = quiz.title;
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
    view.innerHTML = '<div class="card q-card">' + body + "</div>";

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
        (ok ? "" : '<p class="explain-answer">Correct answer: <strong class="de">' + esc(answerLabel(q)) + "</strong></p>") +
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
    enhanceGerman(view);
  }

  function renderQuizDone() {
    Progress.record(quiz.setId, quiz.correct, quiz.questions.length);
    Progress.markDone(quiz.setId);
    refreshStats();
    const p = Math.round((quiz.correct / quiz.questions.length) * 100);
    view.innerHTML = '<div class="card"><h1>' + (p >= 80 ? "Strong." : p >= 60 ? "Passable — drill again." : "Repeat this set today.") + "</h1>" +
      "<p>You scored <strong>" + quiz.correct + " / " + quiz.questions.length + "</strong> (" + p + "%).</p>" +
      pctBar(quiz.correct, quiz.questions.length) +
      '<div class="btn-row"><button class="btn btn-primary" id="again">Retry missed-style shuffle</button>' +
      '<a class="btn" href="#/grammar">Grammar</a><a class="btn" href="#/plan">Plan</a></div></div>';
    document.getElementById("again").onclick = function () {
      beginQuiz(Engine.shuffle(quiz.questions), quiz.title, quiz.setId);
    };
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
        lesenMin: 25,
        sbMin: 15,
        writeMin: 15,
        mockMin: 80,
        lead: "telc A1 Hörverstehen is about 20 minutes: short announcements, a shop/café dialogue, then messages. Read the statement first. Some texts play once.",
      };
    }
    if (id === "a2") {
      return {
        minutes: 25,
        lesenMin: 30,
        sbMin: 20,
        writeMin: 30,
        mockMin: 100,
        lead: "telc A2 Hörverstehen is about 20–25 minutes: announcements plus a longer conversation. Teil 1 is often once; Teil 2 and 3 play twice.",
      };
    }
    return {
      minutes: 30,
      lesenMin: 45,
      sbMin: 20,
      writeMin: 30,
      mockMin: 150,
      lead: "telc B1 Hörverstehen is about 30 minutes and 20 items. Teil 1 plays once. Teil 2 (interview) twice. Teil 3 (everyday scenes) twice.",
    };
  }

  function hoerenRate() {
    if (DP.level === "a1") return 0.82;
    if (DP.level === "a2") return 0.88;
    return 0.95;
  }

  function officialTelcUrl() {
    const id = DP.level || "b1";
    return "https://www.telc.net/en/language-examinations/certificate-exams/german/certificate-german-telc-german-" + id + "/";
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
    crumb.textContent = "Exam gym";
    const m = meta();
    const hm = hoerenMeta();
    const papers = groupHoerenPapers();
    const tips = (EXAM.tips || []).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
    const mix = mixDrill();
    view.innerHTML = "<h1>" + esc(m.exam) + " exam gym</h1>" +
      '<p class="lead">Same shape as the real ' + esc(m.title) + " exam: Lesen, Hören with German audio (exam sitting), Schreiben, Sprechen. Writing and speaking still decide the pass line.</p>" +
      '<div class="grid grid-2">' +
        '<a class="card clickable" href="#/exam/mock"><h3>Timed mocks</h3><p>' + (EXAM.mocks || []).length + " training papers (Lesen + SB + Hören + letter).</p></a>" +
        '<a class="card clickable" href="#/exam/lesen"><h3>Lesen</h3><p>' + (EXAM.lesen || []).length + " papers.</p></a>" +
        '<a class="card clickable" href="#/exam/sprachbausteine"><h3>Sprachbausteine</h3><p>' + (EXAM.sprachbausteine || []).length +
          (DP.level === "a1" ? " extra grammar drills (not a separate A1 exam part)." : " cloze / bank sets.") + "</p></a>" +
        '<a class="card clickable" href="#/exam/hoeren"><h3>Hören</h3><p>' + papers.length + " full papers · ~" + hm.minutes + " min · exam-mode audio.</p></a>" +
        '<a class="card clickable" href="#/exam/schreiben"><h3>Schreiben</h3><p>' + (EXAM.schreiben || []).length + " guided letters with models.</p></a>" +
        '<a class="card clickable" href="#/exam/sprechen"><h3>Sprechen</h3><p>Intro, Teil 2 spines, Teil 3 engine.</p></a>' +
        (mix ? '<a class="card clickable" href="#/drill/' + mix.id + '"><h3>' + esc(mix.title) + "</h3><p>" + esc(mix.blurb || "Mixed grammar.") + "</p></a>" : "") +
      "</div>" +
      '<div class="card" style="margin-top:1rem"><h3>Pass smarter</h3><ul>' + tips + "</ul>" +
      '<p>Official sample audio (real exam acoustics): <a href="' + officialTelcUrl() + '" target="_blank" rel="noopener">telc.net ' + esc(m.title) + "</a></p></div>";
  }

  function renderMockList() {
    setNav("exam");
    crumb.textContent = "Mocks";
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
    crumb.textContent = m.title;
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
      "<h2>Run order</h2><ol>" +
        '<li><a href="#/exam/lesen/' + m.lesen + '">Lesen</a> (~' + hm.lesenMin + " min)</li>" +
        "<li>Sprachbausteine: " + m.sb.map(function (s) { return esc(s); }).join(" + ") + ' → <a href="#/exam/sprachbausteine">open SB gym</a> (~' + hm.sbMin + " min)</li>" +
        "<li>Hören" + (hPaper ? " paper " + hPaper.id : "") + ' → <a href="#/exam/hoeren/' + (hPaper ? hPaper.id : "") + '">exam sitting with audio</a> (~' + hm.minutes + " min)</li>" +
        '<li><a href="#/schreiben/' + m.schreiben + '">Schreiben letter</a> (' + hm.writeMin + " min)</li>" +
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

  function renderLesenList() {
    setNav("exam");
    crumb.textContent = "Lesen";
    view.innerHTML = "<h1>Lesen papers</h1>" +
      '<p class="lead">' + EXAM.lesen.length + " training papers. Aim for 80%+ before exam week.</p>" +
      '<div class="grid grid-2">' +
      EXAM.lesen.map(function (set) {
        const n = Object.keys(set.parts[0].answer).length + set.parts[1].items.length + Object.keys(set.parts[2].answer).length;
        return '<a class="card clickable" href="#/exam/lesen/' + set.id + '"><h3>' + esc(set.title) + "</h3><p>~" +
          (set.timeMin || 45) + " min · " + n + " items</p></a>";
      }).join("") + "</div>";
  }

  function renderLesen(id) {
    setNav("exam");
    const set = EXAM.lesen.find(function (x) { return x.id === id; }) || EXAM.lesen[0];
    crumb.textContent = set.title;
    let html = '<p class="kicker">Lesen · ~' + (set.timeMin || 45) + " min</p><h1>" + esc(set.title) + "</h1>" +
      '<div class="btn-row"><a class="btn" href="#/exam/lesen">All papers</a></div>';
    set.parts.forEach(function (part, pi) {
      html += '<section class="card" style="margin-bottom:1rem"><h3>Teil ' + (pi + 1) + "</h3><p>" + esc(part.instruction) + "</p>";
      if (part.kind === "headlines") {
        html += "<ol>" + part.headlines.map(function (h) { return "<li>" + esc(h.id) + " · " + esc(h.text) + "</li>"; }).join("") + "</ol>";
        part.texts.forEach(function (t) {
          html += "<p><strong>" + t.id + ".</strong> " + esc(t.text) + "</p>";
          html += '<p>Headline for ' + t.id + ': <select data-lesen="' + t.id + '"><option value="">—</option>' +
            part.headlines.map(function (h) { return '<option value="' + h.id + '">' + h.id + "</option>"; }).join("") +
            "</select></p>";
        });
      }
      if (part.kind === "detail") {
        html += '<div class="ex">' + esc(part.text) + "</div>";
        part.items.forEach(function (it, ii) {
          html += "<p><strong>" + (ii + 1) + ".</strong> " + esc(it.q) + "</p><div class='options'>";
          it.options.forEach(function (o, oi) {
            html += '<label class="opt" style="display:block;margin-bottom:0.35rem"><input type="radio" name="d' + ii + '" value="' + oi + '" /> ' + esc(o) + "</label>";
          });
          html += "</div>";
        });
      }
      if (part.kind === "ads") {
        html += "<p><strong>People</strong></p>" + part.people.map(function (p) { return "<p>" + p.id + ". " + esc(p.text) + "</p>"; }).join("");
        html += "<p><strong>Notices</strong></p>" + part.ads.map(function (a) { return "<p>" + a.id + ". " + esc(a.text) + "</p>"; }).join("");
        part.people.forEach(function (p) {
          html += '<p>' + p.id + ' → <select data-ad="' + p.id + '"><option value="">—</option>' +
            part.ads.map(function (a) { return '<option value="' + a.id + '">' + a.id + "</option>"; }).join("") + "</select></p>";
        });
      }
      html += "</section>";
    });
    html += '<button class="btn btn-primary" id="mark-lesen">Mark paper</button><div id="lesen-res"></div>';
    view.innerHTML = html;
    document.getElementById("mark-lesen").onclick = function () {
      let right = 0, total = 0;
      const part0 = set.parts[0];
      Object.keys(part0.answer).forEach(function (k) {
        total++;
        const sel = view.querySelector('[data-lesen="' + k + '"]');
        if (sel && sel.value === part0.answer[k]) right++;
      });
      const part1 = set.parts[1];
      part1.items.forEach(function (it, ii) {
        total++;
        const r = view.querySelector('input[name="d' + ii + '"]:checked');
        if (r && Number(r.value) === it.answer) right++;
      });
      const part2 = set.parts[2];
      Object.keys(part2.answer).forEach(function (k) {
        total++;
        const sel = view.querySelector('[data-ad="' + k + '"]');
        if (sel && sel.value === part2.answer[k]) right++;
      });
      const unusedH = unusedKeys(part0.headlines.map(function (h) { return h.id; }), part0.answer);
      const unusedA = unusedKeys(part2.ads.map(function (a) { return a.id; }), part2.answer);
      Progress.record(set.id, right, total);
      document.getElementById("lesen-res").innerHTML = '<div class="explain">Score: <strong>' + right + " / " + total +
        "</strong>. Unused headlines: " + unusedH.join(", ") + ". Unused ads: " + unusedA.join(", ") + ".</div>";
      refreshStats();
    };
  }

  function renderSB() {
    setNav("exam");
    crumb.textContent = "Sprachbausteine";
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
          set.gaps.forEach(function (g, gi) {
            const sel = view.querySelector('[data-sb="' + si + '-' + gi + '"]');
            if (sel && sel.value === g.answer) right++;
          });
          Progress.record(set.id, right, set.gaps.length);
          document.getElementById("sb-res-" + si).innerHTML = "<div class='explain'>" + right + " / " + set.gaps.length + "</div>";
        } else {
          set.answer.forEach(function (a, gi) {
            const inp = view.querySelector('[data-bank="' + si + '-' + gi + '"]');
            if (inp && Engine.answersMatch(inp.value, a)) right++;
          });
          Progress.record(set.id, right, set.answer.length);
          document.getElementById("sb-res-" + si).innerHTML = "<div class='explain'>" + right + " / " + set.answer.length +
            "<br>Key: " + set.answer.join(", ") + "</div>";
        }
        refreshStats();
      };
    });
  }

  function renderHoeren() {
    setNav("exam");
    crumb.textContent = "Hören";
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
        "<li>You read the Richtig/Falsch lines first (timed pause).</li>" +
        "<li>A German announcer says Teil and Text numbers, then the clip plays.</li>" +
        "<li>Teil 1 with “once” cannot be replayed in exam mode.</li>" +
        "<li>Longer talks and Teil 3 play twice, with a pause, like telc.</li>" +
      "</ul><p>Browser voice trains method. In weeks 7–8 add the official telc MP3 for room acoustics: <a href=\"" + officialTelcUrl() + "\" target=\"_blank\" rel=\"noopener\">telc.net " + esc(m.title) + "</a></p></div>" +
      '<div class="btn-row"><a class="btn" href="#/exam">Back to exam gym</a></div>';
  }

  function hoerenItemBlock(set, ii, practice) {
    const it = set.items[ii];
    const name = "h-" + set.id + "-" + ii;
    let html = '<div class="hoeren-item" data-h="' + esc(set.id) + "-" + ii + '">';
    html += '<p class="hoeren-q"><span class="hoeren-num">' + (ii + 1) + ".</span> <span class=\"de\">" + esc(it.statement) + "</span></p>";
    html += '<div class="rf-row">' +
      '<label class="rf"><input type="radio" name="' + name + '" value="true" /> Richtig</label>' +
      '<label class="rf"><input type="radio" name="' + name + '" value="false" /> Falsch</label>' +
      "</div>";
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
    crumb.textContent = "Hören · Paper " + paper.id;
    let html = '<p class="kicker">' + esc(m.exam) + " · Hörverstehen · ~" + hm.minutes + " min</p>";
    html += "<h1>" + esc(paper.title) + "</h1>";
    html += '<p class="lead">' + (practice
      ? "Practice mode: replay clips as you like. Switch to exam sitting for real rules."
      : "Exam sitting: read the statements, then let the audio run. Do not replay Teil 1. Mark Richtig or Falsch as you hear each text.") + "</p>";
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
          const r = view.querySelector('input[name="h-' + set.id + "-" + ii + '"]:checked');
          if (r && (r.value === "true") === it.answer) right += 1;
        });
        Progress.record(set.id, set.items.filter(function (it, ii) {
          const r = view.querySelector('input[name="h-' + set.id + "-" + ii + '"]:checked');
          return r && (r.value === "true") === it.answer;
        }).length, set.items.length);
      });
      Progress.record("hoeren-paper-" + paper.id, right, total);
      view.querySelectorAll(".transcript").forEach(function (el) { el.hidden = false; });
      const p = total ? Math.round((right / total) * 100) : 0;
      document.getElementById("h-paper-res").innerHTML = '<div class="explain">Score: <strong>' + right + " / " + total +
        "</strong> (" + p + "%). " + (p >= 80 ? "Exam-ready method." : p >= 60 ? "Passable — repeat this paper." : "Do this paper again today.") +
        " Transcripts are now visible.</div>";
      refreshStats();
    };
  }

  function renderSchreibenList() {
    setNav("exam");
    crumb.textContent = "Schreiben";
    const hm = hoerenMeta();
    const aim = DP.level === "a1" ? "about 30 words, greeting + closing" : DP.level === "a2" ? "about 60–80 words, all points" : "30 minutes, four Leitpunkte, 100–120 words";
    view.innerHTML = "<h1>Schreiben — " + aim + "</h1>" +
      '<p class="lead">Open a task, write in the box, then tick the checklist and compare the model. Aim ~' + hm.writeMin + " minutes.</p>" +
      '<div class="grid grid-2">' +
      EXAM.schreiben.map(function (t) {
        const lv = t.register === "Sie" ? (DP.level === "a1" ? "a1" : DP.level) : "a2";
        return '<a class="card clickable" href="#/schreiben/' + t.id + '"><h3>' + esc(t.title) + "</h3><p>" + badge(lv) + " " + esc(t.register) + "</p></a>";
      }).join("") + "</div>";
  }

  function renderSchreiben(id) {
    setNav("exam");
    const t = EXAM.schreiben.find(function (x) { return x.id === id; });
    if (!t) { view.innerHTML = "<p>Task not found.</p>"; return; }
    crumb.textContent = t.title;
    const wordAim = DP.level === "a1" ? "Aim ~30 words. Timer is on you: about 15–20 minutes." : DP.level === "a2" ? "Aim ~60–80 words. Timer is on you: about 25–30 minutes." : "Aim 100–120 words. Timer is on you: 30 minutes.";
    const checks = DP.level === "a1"
      ? ["Greeting + closing", "Every content point in a short sentence", "sein / haben / present tense", "Nouns capitalised", "du or Sie — pick one and stay"]
      : DP.level === "a2"
      ? ["Greeting + closing match " + t.register, "All points covered in full sentences", "At least one weil or dann", "At least one Perfekt sentence", "Nouns capitalised, du/Sie consistent"]
      : ["Greeting + closing match " + t.register, "All four Leitpunkte are full sentences", "At least one weil / dass / wenn", "Formal letters: one Könnten / würde / wäre", "Nouns capitalised, Sie/du consistent"];
    view.innerHTML = '<p class="kicker">' + esc(t.register) + "</p><h1>" + esc(t.title) + "</h1>" +
      "<p>" + esc(t.situation) + "</p>" +
      "<ol>" + t.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ol>" +
      '<p class="q-meta">' + wordAim + "</p>" +
      '<textarea id="letter" placeholder="Write the letter here…"></textarea>' +
      '<p id="wc" class="q-meta">0 words</p>' +
      '<div class="checklist card">' +
        checks.map(function (c) { return '<label><input type="checkbox" /> ' + esc(c) + "</label>"; }).join("") +
      "</div>" +
      '<div class="btn-row"><button class="btn" id="show-model">Show model</button>' +
      '<button class="btn btn-primary" id="save-letter">Mark task done</button></div>' +
      '<div class="ex" id="model" hidden><span class="label-s">Model — do not copy blindly</span><p class="de">' + esc(t.model) + "</p></div>";
    const ta = document.getElementById("letter");
    ta.addEventListener("input", function () {
      const n = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
      document.getElementById("wc").textContent = n + " words";
    });
    document.getElementById("show-model").onclick = function () {
      document.getElementById("model").hidden = false;
      enhanceGerman(document.getElementById("model"));
    };
    document.getElementById("save-letter").onclick = function () {
      Progress.markDone("schreiben-" + id);
      toast("Letter task saved on your plan.");
      refreshStats();
    };
  }

  function renderSprechen() {
    setNav("exam");
    crumb.textContent = "Sprechen";
    const sp = EXAM.sprechen;
    view.innerHTML = "<h1>Sprechen</h1>" +
      '<p class="lead">Talk to a partner if you can. If not, record both roles on your phone.</p>' +
      '<div class="card"><h3>Teil 1 — intro (memorise, then throw the paper away)</h3>' +
      '<p class="de">' + esc(sp.intro) + "</p>" +
      "<p>Follow-up questions — tap the speaker, then answer aloud.</p><ul>" + sp.questions.map(function (q) {
        return "<li><span class=\"de\">" + esc(q) + "</span></li>";
      }).join("") + "</ul></div>" +
      '<div class="card" style="margin-top:0.8rem"><h3>Teil 2 — 90-second spine</h3>' +
      "<ol>" +
        '<li><span class="de">Hier geht es um…</span></li>' +
        '<li><span class="de">Meiner Meinung nach…, weil…</span></li>' +
        '<li><span class="de">Zum Beispiel…</span></li>' +
        '<li><span class="de">Allerdings…</span></li>' +
        '<li><span class="de">Deshalb… Und du?</span></li>' +
      "</ol>" +
      sp.topics.map(function (t) {
        return "<p><strong>" + esc(t.t) + "</strong> — <span class='de'>" + esc(t.spine) + "</span></p>";
      }).join("") + "</div>" +
      '<div class="card" style="margin-top:0.8rem"><h3>Teil 3 — plan and agree</h3>' +
      "<p>You must reach a decision in the last 45 seconds.</p>" +
      '<div class="phrase-list">' + sp.engine.map(function (e) {
        return '<div class="phrase-line"><span class="de">' + esc(e.de) + "</span></div>";
      }).join("") + "</div>" +
      '<p id="said" class="de"></p>' +
      "<h4>Practice cards</h4>" +
      sp.planning.map(function (p) {
        return "<p><strong>" + esc(p.t) + "</strong> — " + p.points.map(esc).join(" · ") + "</p>";
      }).join("") + "</div>";
  }

  function renderB2() {
    setNav("b2");
    crumb.textContent = "B2 stretch";
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
    crumb.textContent = "Progress";
    const s = Progress.get();
    const m = meta();
    const rows = Object.keys(s.results).map(function (k) {
      const r = s.results[k];
      const p = Math.round((r.correct / r.total) * 100);
      return "<tr><td>" + esc(k) + "</td><td>" + r.correct + "/" + r.total + "</td><td>" + p + "%</td></tr>";
    }).join("");
    const all = Progress.summaryAll().map(function (row) {
      return "<tr><td>" + row.id.toUpperCase() + "</td><td>" + row.xp + "</td><td>" + row.checks + "</td><td>" + row.done + "</td><td>" + row.streak + "</td></tr>";
    }).join("");
    view.innerHTML = "<h1>Progress · " + esc(m.title) + "</h1>" +
      "<p>Started " + esc(s.started) + " · " + s.xp + " XP · streak " + (s.streak.count || 0) + "</p>" +
      "<h2>All levels</h2>" +
      '<table class="table"><tr><th>Level</th><th>XP</th><th>Plan ticks</th><th>Done</th><th>Streak</th></tr>' + all + "</table>" +
      "<h2>Scores in " + esc(m.title) + "</h2>" +
      (rows ? '<table class="table"><tr><th>Set</th><th>Score</th><th>%</th></tr>' + rows + "</table>" : "<p>No quizzes yet in this level.</p>") +
      '<div class="btn-row"><button class="btn" id="reset-level">Reset ' + esc(m.title) + " progress</button>" +
      '<button class="btn" id="reset">Reset all levels</button></div>' +
      '<p class="lead">Redo any set under 80% before exam week.</p>';
    document.getElementById("reset-level").onclick = function () {
      if (confirm("Erase XP, ticks, and scores for " + m.title + " only?")) {
        Progress.resetLevel();
        refreshStats();
        renderProgress();
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

  document.getElementById("menu-btn").onclick = function () {
    sidebar.classList.toggle("open");
  };

  document.addEventListener("click", function (e) {
    const a = e.target.closest("a[href^='#/']");
    if (!a || a.getAttribute("target") === "_blank") return;
    const href = a.getAttribute("href");
    if (!href) return;
    e.preventDefault();
    sidebar.classList.remove("open");
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
