/* Social Media Campus: Routing über den Hash, Rendering der Seiten, Quiz-Logik und Fortschritt (localStorage). */
(function () {
  "use strict";

  var COURSE = window.COURSE;
  var MODULES = COURSE.modules;
  var STORAGE_KEY = "smc-progress-v1";
  var FINAL_COUNT = 12;

  var content = document.getElementById("content");
  var sidenav = document.getElementById("sidenav");

  /* ---------- Fortschritt ---------- */
  function loadProgress() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }
  function saveProgress(p) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch (e) { /* Speicher nicht verfügbar */ }
  }
  var progress = loadProgress();

  function recordResult(id, score, total) {
    var prev = progress[id] || { best: 0, total: total, attempts: 0 };
    progress[id] = {
      best: Math.max(prev.best || 0, score),
      total: total,
      attempts: (prev.attempts || 0) + 1,
      last: score
    };
    saveProgress(progress);
  }
  function isDone(id) {
    var p = progress[id];
    return !!p && p.total > 0 && p.best / p.total >= 0.7;
  }
  function doneCount() {
    return MODULES.filter(function (m) { return isDone(m.id); }).length;
  }

  /* ---------- Hilfen ---------- */
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "class") node.className = attrs[k];
        else if (k === "html") node.innerHTML = attrs[k];
        else if (k === "text") node.textContent = attrs[k];
        else if (k.indexOf("on") === 0) node.addEventListener(k.slice(2), attrs[k]);
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) {
      if (c == null) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }

  /* ---------- Navigation ---------- */
  function renderNav(route) {
    sidenav.innerHTML = "";
    sidenav.appendChild(el("a", { class: "nav-item" + (route === "start" ? " active" : ""), href: "#start" }, [
      el("span", { class: "nav-num", text: "⌂" }),
      el("span", { class: "nav-label", text: "Übersicht" })
    ]));
    sidenav.appendChild(el("div", { class: "sidenav-heading", text: "Lernmodule" }));
    MODULES.forEach(function (m) {
      var p = progress[m.id];
      var cls = "nav-item" + (route === m.id ? " active" : "") + (isDone(m.id) ? " done" : "");
      sidenav.appendChild(el("a", { class: cls, href: "#" + m.id }, [
        el("span", { class: "nav-num", text: isDone(m.id) ? "✓" : String(m.number) }),
        el("span", { class: "nav-label", text: m.title }),
        el("span", { class: "nav-score", text: p ? p.best + "/" + p.total : "" })
      ]));
    });
    sidenav.appendChild(el("div", { class: "nav-sep" }));
    var ft = progress.final;
    sidenav.appendChild(el("a", { class: "nav-item" + (route === "test" ? " active" : "") + (isDone("final") ? " done" : ""), href: "#test" }, [
      el("span", { class: "nav-num", text: isDone("final") ? "✓" : "★" }),
      el("span", { class: "nav-label", text: "Abschlusstest" }),
      el("span", { class: "nav-score", text: ft ? ft.best + "/" + ft.total : "" })
    ]));
    sidenav.appendChild(el("a", { class: "nav-item" + (route === "glossar" ? " active" : ""), href: "#glossar" }, [
      el("span", { class: "nav-num", text: "A" }),
      el("span", { class: "nav-label", text: "Glossar" })
    ]));
  }

  function renderTopbar() {
    var n = doneCount();
    document.getElementById("topbar-progress-label").textContent = n + " von " + MODULES.length + " Modulen";
    document.getElementById("topbar-progress-fill").style.width = pct(n, MODULES.length) + "%";
  }

  /* ---------- Startseite ---------- */
  function renderStart() {
    var n = doneCount();
    var totalQ = MODULES.reduce(function (a, m) { return a + m.quiz.length; }, 0);
    var totalMin = MODULES.reduce(function (a, m) { return a + m.minutes; }, 0);
    var next = MODULES.filter(function (m) { return !isDone(m.id); })[0];

    var hero = el("section", { class: "hero" }, [
      el("p", { class: "eyebrow", text: "Lernportal" }),
      el("h1", { class: "page-title", text: "Social Media verstehen, planen und messen" }),
      el("p", { class: "lead", text: "Acht Module führen dich von den Plattform-Grundlagen über Content und Algorithmus bis zu Werbung, Kennzahlen und Recht. Jedes Modul hat eine kompakte Lektion, Praxisbeispiele und ein Quiz. Ein Modul gilt als bestanden, wenn du mindestens 70 Prozent der Fragen richtig hast." }),
      el("div", { class: "hero-actions" }, [
        el("a", { class: "btn btn-primary", href: "#" + (next ? next.id : "test"), text: next ? (n === 0 ? "Mit Modul 1 starten" : "Weiter mit Modul " + next.number) : "Zum Abschlusstest" }),
        el("a", { class: "btn btn-secondary", href: "#glossar", text: "Glossar öffnen" })
      ]),
      el("div", { class: "stat-row" }, [
        el("div", {}, [el("b", { text: String(MODULES.length) }), "Module"]),
        el("div", {}, [el("b", { text: String(totalQ) }), "Quizfragen"]),
        el("div", {}, [el("b", { text: "ca. " + totalMin + " Min" }), "Lernzeit gesamt"]),
        el("div", {}, [el("b", { text: n + "/" + MODULES.length }), "bestanden"])
      ])
    ]);

    var grid = el("div", { class: "module-grid" }, MODULES.map(function (m) {
      var p = progress[m.id];
      var pill;
      if (isDone(m.id)) pill = el("span", { class: "pill done", text: "Bestanden " + p.best + "/" + p.total });
      else if (p) pill = el("span", { class: "pill partial", text: "Versucht " + p.best + "/" + p.total });
      else pill = el("span", { class: "pill", text: "Offen" });
      return el("a", { class: "module-card", href: "#" + m.id }, [
        el("div", { class: "module-card-head" }, [
          el("span", { class: "eyebrow", text: "Modul " + m.number }),
          pill
        ]),
        el("h3", { text: m.title }),
        el("p", { text: m.teaser }),
        el("div", { class: "module-card-meta" }, [
          el("span", { text: "ca. " + m.minutes + " Min" }),
          el("span", { text: m.quiz.length + " Fragen" })
        ])
      ]);
    }));

    var finalP = progress.final;
    var finalCard = el("section", { class: "hero" }, [
      el("p", { class: "eyebrow", text: "Abschlusstest" }),
      el("h2", { class: "section-title", text: finalP ? "Bestes Ergebnis: " + finalP.best + " von " + finalP.total : FINAL_COUNT + " zufällige Fragen aus allen Modulen" }),
      el("p", { class: "section-sub", text: "Der Abschlusstest mischt Fragen aus allen acht Modulen. Du kannst ihn beliebig oft wiederholen, die Fragen werden jedes Mal neu gezogen." }),
      el("div", { class: "hero-actions" }, [
        el("a", { class: "btn btn-primary", href: "#test", text: finalP ? "Test wiederholen" : "Abschlusstest starten" })
      ])
    ]);

    content.innerHTML = "";
    content.appendChild(hero);
    content.appendChild(el("section", {}, [
      el("h2", { class: "section-title", text: "Alle Module" }),
      el("p", { class: "section-sub", text: "Die Reihenfolge ist eine Empfehlung. Du kannst jederzeit springen." }),
      el("div", { style: "height:16px" }),
      grid
    ]));
    content.appendChild(finalCard);
  }

  /* ---------- Modulseite ---------- */
  function renderModule(m) {
    var idx = MODULES.indexOf(m);
    var prev = MODULES[idx - 1];
    var next = MODULES[idx + 1];

    content.innerHTML = "";
    content.appendChild(el("header", { class: "module-header" }, [
      el("p", { class: "eyebrow", text: "Modul " + m.number + " von " + MODULES.length }),
      el("h1", { class: "page-title", text: m.title }),
      el("p", { class: "lead", text: m.teaser }),
      el("div", { class: "module-meta" }, [
        el("span", { text: "Lesezeit ca. " + m.minutes + " Minuten" }),
        el("span", { text: m.examples.length + " Beispiele" }),
        el("span", { text: m.quiz.length + " Quizfragen" })
      ])
    ]));

    content.appendChild(el("section", {}, [
      el("h2", { class: "section-title", text: "Worum es geht" }),
      el("div", { style: "height:12px" }),
      el("div", { class: "prose" }, m.intro.map(function (p) { return el("p", { text: p }); }))
    ]));

    content.appendChild(el("section", {}, [
      el("h2", { class: "section-title", text: "Das Wichtigste" }),
      el("div", { style: "height:12px" }),
      el("ul", { class: "keypoints" }, m.keypoints.map(function (k) { return el("li", { html: "<span>" + k + "</span>" }); }))
    ]));

    content.appendChild(el("section", {}, [
      el("h2", { class: "section-title", text: "Beispiele aus der Praxis" }),
      el("p", { class: "section-sub", text: "Konstruierte, aber typische Situationen. Die Zahlen sind Beispielwerte." }),
      el("div", { style: "height:12px" }),
      el("div", { class: "examples" }, m.examples.map(function (ex, i) {
        var kids = [
          el("span", { class: "example-label", text: "Beispiel " + (i + 1) }),
          el("h3", { text: ex.title })
        ];
        if (ex.body) kids.push(el("p", { text: ex.body }));
        if (ex.mock) kids.push(el("div", { class: "post-mock", text: ex.mock }));
        if (ex.compare) {
          kids.push(el("div", { class: "compare" }, [
            el("div", { class: "compare-box bad" }, [el("span", { class: "tag", text: ex.compare.bad.label }), el("p", { text: ex.compare.bad.text })]),
            el("div", { class: "compare-box good" }, [el("span", { class: "tag", text: ex.compare.good.label }), el("p", { text: ex.compare.good.text })])
          ]));
        }
        if (ex.takeaway) kids.push(el("p", { class: "takeaway", text: ex.takeaway }));
        return el("article", { class: "example" }, kids);
      }))
    ]));

    var quizSection = el("section", { id: "quiz-section" }, [
      el("h2", { class: "section-title", text: "Quiz: Teste dein Wissen" }),
      el("p", { class: "section-sub", text: "Eine Antwort ist richtig. Nach jeder Frage siehst du eine Erklärung." }),
      el("div", { style: "height:12px" })
    ]);
    content.appendChild(quizSection);
    renderQuiz(quizSection, m.quiz, {
      id: m.id,
      title: m.title,
      shuffleQuestions: false,
      nextHref: next ? "#" + next.id : "#test",
      nextLabel: next ? "Weiter zu Modul " + next.number : "Zum Abschlusstest"
    });

    content.appendChild(el("nav", { class: "pager" }, [
      prev ? el("a", { class: "btn btn-secondary", href: "#" + prev.id, text: "← Modul " + prev.number }) : el("a", { class: "btn btn-secondary", href: "#start", text: "← Übersicht" }),
      next ? el("a", { class: "btn btn-secondary", href: "#" + next.id, text: "Modul " + next.number + " →" }) : el("a", { class: "btn btn-secondary", href: "#test", text: "Abschlusstest →" })
    ]));
  }

  /* ---------- Quiz ---------- */
  function renderQuiz(container, questions, opts) {
    var qs = opts.shuffleQuestions ? shuffle(questions) : questions.slice();
    var results = qs.map(function () { return null; });
    var current = 0;
    var box = el("div", { class: "quiz" });
    container.appendChild(box);

    function dots() {
      return el("div", { class: "quiz-progress", "aria-hidden": "true" }, qs.map(function (_, i) {
        var cls = "quiz-dot";
        if (results[i] === true) cls += " right";
        else if (results[i] === false) cls += " wrong";
        else if (i === current) cls += " current";
        return el("span", { class: cls });
      }));
    }

    function showQuestion() {
      var q = qs[current];
      var selected = null;
      var checked = false;
      box.innerHTML = "";

      var head = el("div", { class: "quiz-head" }, [
        dots(),
        el("span", { class: "quiz-counter", text: "Frage " + (current + 1) + " von " + qs.length })
      ]);
      var question = el("p", { class: "question", text: q.q });
      var optionBtns = [];
      var checkBtn = el("button", { class: "btn btn-primary", type: "button", disabled: "true", text: "Antwort prüfen" });
      var feedbackSlot = el("div");
      var actions = el("div", { class: "quiz-actions" }, [checkBtn]);

      var options = el("div", { class: "options", role: "group", "aria-label": "Antwortmöglichkeiten" }, q.options.map(function (opt, i) {
        var b = el("button", { class: "option", type: "button" }, [
          el("span", { class: "option-key", text: String.fromCharCode(65 + i) }),
          el("span", { text: opt })
        ]);
        b.addEventListener("click", function () {
          if (checked) return;
          selected = i;
          optionBtns.forEach(function (ob, j) { ob.classList.toggle("selected", j === i); });
          checkBtn.removeAttribute("disabled");
        });
        optionBtns.push(b);
        return b;
      }));

      checkBtn.addEventListener("click", function () {
        if (selected === null || checked) return;
        checked = true;
        var right = selected === q.answer;
        results[current] = right;
        optionBtns.forEach(function (ob, j) {
          ob.setAttribute("disabled", "true");
          ob.classList.remove("selected");
          if (j === q.answer) ob.classList.add("correct");
          else if (j === selected) ob.classList.add("incorrect");
        });
        feedbackSlot.appendChild(el("div", { class: "feedback " + (right ? "right" : "wrong"), role: "status" }, [
          el("b", { text: right ? "Richtig." : "Leider falsch. Richtig ist " + String.fromCharCode(65 + q.answer) + "." }),
          el("span", { text: q.why })
        ]));
        head.replaceChild(dots(), head.firstChild);
        actions.innerHTML = "";
        var isLast = current === qs.length - 1;
        var nextBtn = el("button", { class: "btn btn-primary", type: "button", text: isLast ? "Ergebnis anzeigen" : "Nächste Frage" });
        nextBtn.addEventListener("click", function () {
          if (isLast) showResult();
          else { current++; showQuestion(); }
          box.scrollIntoView({ block: "nearest", behavior: "smooth" });
        });
        actions.appendChild(nextBtn);
        nextBtn.focus();
      });

      box.appendChild(head);
      box.appendChild(question);
      box.appendChild(options);
      box.appendChild(feedbackSlot);
      box.appendChild(actions);
    }

    function showResult() {
      var score = results.filter(Boolean).length;
      var total = qs.length;
      recordResult(opts.id, score, total);
      renderNav(opts.id === "final" ? "test" : opts.id);
      renderTopbar();

      var p = pct(score, total);
      var passed = p >= 70;
      var msg;
      if (p === 100) msg = "Alles richtig. Du hast dieses Thema sicher drauf.";
      else if (passed) msg = "Bestanden. Schau dir die Erklärungen zu den falschen Fragen noch einmal an, dann sitzt es.";
      else msg = "Noch nicht bestanden (ab 70 Prozent). Lies die markierten Punkte oben noch einmal und versuch es gleich erneut.";

      box.innerHTML = "";
      var ring = el("div", { class: "result-ring", style: "--pct:" + p }, [
        el("span", {}, [el("div", { class: "result-score" }, [String(score), el("small", { text: "/" + total })])])
      ]);
      var review = el("div", { class: "review" }, qs.map(function (q, i) {
        return el("div", { class: "review-item " + (results[i] ? "right" : "wrong") }, [
          el("span", { class: "mark", text: results[i] ? "✓" : "✗" }),
          el("span", {}, [q.q, results[i] ? null : el("small", { text: "Richtig: " + q.options[q.answer] })])
        ]);
      }));
      var actions = el("div", { class: "quiz-actions", style: "justify-content:center" }, [
        el("button", { class: "btn btn-secondary", type: "button", text: "Quiz wiederholen", onclick: function () {
          qs = opts.shuffleQuestions ? shuffle(questions) : questions.slice();
          results = qs.map(function () { return null; });
          current = 0;
          showQuestion();
        } }),
        el("a", { class: "btn " + (passed ? "btn-primary" : "btn-secondary"), href: opts.nextHref, text: opts.nextLabel })
      ]);
      box.appendChild(el("div", { class: "result" }, [
        el("p", { class: "eyebrow", text: passed ? "Bestanden" : "Nicht bestanden" }),
        ring,
        el("h3", { class: "section-title", text: opts.title }),
        el("p", { text: msg }),
        actions,
        review
      ]));
    }

    showQuestion();
  }

  /* ---------- Abschlusstest ---------- */
  function renderFinal() {
    var pool = [];
    MODULES.forEach(function (m) {
      m.quiz.forEach(function (q) { pool.push(q); });
    });
    // Aus jedem Modul mindestens eine Frage, Rest zufällig aufgefüllt.
    var picked = [];
    MODULES.forEach(function (m) { picked.push(shuffle(m.quiz)[0]); });
    var rest = shuffle(pool.filter(function (q) { return picked.indexOf(q) === -1; }));
    while (picked.length < FINAL_COUNT && rest.length) picked.push(rest.shift());
    picked = shuffle(picked);

    var p = progress.final;
    content.innerHTML = "";
    content.appendChild(el("header", { class: "module-header" }, [
      el("p", { class: "eyebrow", text: "Abschlusstest" }),
      el("h1", { class: "page-title", text: "Alles auf einmal" }),
      el("p", { class: "lead", text: FINAL_COUNT + " Fragen, quer durch alle acht Module, in zufälliger Reihenfolge. Aus jedem Modul ist mindestens eine Frage dabei." }),
      el("div", { class: "module-meta" }, [
        el("span", { text: p ? "Bestes Ergebnis: " + p.best + " von " + p.total : "Noch kein Versuch" }),
        el("span", { text: p ? p.attempts + (p.attempts === 1 ? " Versuch" : " Versuche") : "" })
      ])
    ]));
    var section = el("section", { id: "quiz-section" });
    content.appendChild(section);
    renderQuiz(section, picked, {
      id: "final",
      title: "Abschlusstest",
      shuffleQuestions: false,
      nextHref: "#start",
      nextLabel: "Zur Übersicht"
    });
  }

  /* ---------- Glossar ---------- */
  function renderGlossary() {
    var terms = COURSE.glossary.slice().sort(function (a, b) { return a.term.localeCompare(b.term, "de"); });
    content.innerHTML = "";
    content.appendChild(el("header", { class: "module-header" }, [
      el("p", { class: "eyebrow", text: "Nachschlagen" }),
      el("h1", { class: "page-title", text: "Glossar" }),
      el("p", { class: "lead", text: terms.length + " Begriffe, die dir in den Modulen und im Alltag begegnen, kurz erklärt." })
    ]));
    content.appendChild(el("dl", { class: "glossary" }, terms.map(function (t) {
      return el("div", { class: "term" }, [el("dt", { text: t.term }), el("dd", { text: t.def })]);
    })));
  }

  /* ---------- Router ---------- */
  function route() {
    var hash = (location.hash || "#start").replace("#", "");
    var m = MODULES.filter(function (x) { return x.id === hash; })[0];
    var key = m ? m.id : (hash === "test" || hash === "glossar") ? hash : "start";
    renderNav(key);
    renderTopbar();
    if (m) renderModule(m);
    else if (key === "test") renderFinal();
    else if (key === "glossar") renderGlossary();
    else renderStart();
    window.scrollTo({ top: 0, behavior: "auto" });
    document.title = (m ? m.title : key === "test" ? "Abschlusstest" : key === "glossar" ? "Glossar" : "Übersicht") + " · Social Media Campus";
  }

  window.addEventListener("hashchange", route);
  document.getElementById("reset-progress").addEventListener("click", function () {
    var btn = this;
    if (btn.dataset.confirm !== "1") {
      btn.dataset.confirm = "1";
      btn.textContent = "Wirklich zurücksetzen? Noch einmal klicken.";
      setTimeout(function () { btn.dataset.confirm = "0"; btn.textContent = "Fortschritt zurücksetzen"; }, 4000);
      return;
    }
    progress = {};
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* ignorieren */ }
    btn.dataset.confirm = "0";
    btn.textContent = "Fortschritt zurücksetzen";
    route();
  });

  route();
})();
