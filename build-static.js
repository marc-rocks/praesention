/* Erzeugt dist/social-media-campus.html: eine Einzeldatei ohne JavaScript.
   Alle Module stehen untereinander, das Quiz funktioniert über CSS (Radio-Buttons).
   Aufruf: node build-static.js */
const fs = require("fs");
global.window = {};
require("./js/data.js");
const COURSE = window.COURSE;
const M = COURSE.modules;

const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const nl = s => esc(s).replace(/\n/g, "<br>");
const L = "ABCD";

let css = fs.readFileSync("css/style.css", "utf8");
css = css.replace(/^\/\*[\s\S]*?\*\/\n/, "");
css += `
/* Statische Version: Layout und CSS-Quiz */
body { font-family: var(--font-body); }
.shell { display: block; }
.static-nav { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px; }
.static-nav a { display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px 6px 6px; border-radius: 999px; background: var(--surface); border: 1px solid var(--line); color: var(--fg); text-decoration: none; font-size: 0.88rem; font-weight: 600; }
.module-section { padding-top: 24px; margin-top: 24px; border-top: 1px solid var(--line); display: flex; flex-direction: column; gap: 28px; scroll-margin-top: 80px; }
.q { display: flex; flex-direction: column; gap: 10px; padding: 18px 0; border-top: 1px solid var(--line); position: relative; }
.q:first-of-type { border-top: 0; }
.q .qnum { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); font-weight: 700; }
.q input { position: absolute; opacity: 0; width: 1px; height: 1px; margin: 0; pointer-events: none; }
.q label.option { display: grid; }
.q .feedback { display: none; }
.q input:checked ~ .options label.option { cursor: default; }
.q input:checked ~ .options label.option.is-correct { border-color: var(--ok); background: var(--ok-soft); }
.q input:checked ~ .options label.option.is-correct .option-key { background: var(--ok); color: #fff; border-color: var(--ok); }
${["a","b","c","d"].map(k => `.q input.in-${k}:checked ~ .options label.opt-${k}:not(.is-correct) { border-color: var(--bad); background: var(--bad-soft); }
.q input.in-${k}:checked ~ .options label.opt-${k}:not(.is-correct) .option-key { background: var(--bad); color: #fff; border-color: var(--bad); }
.q input.in-${k}:checked ~ .feedback.fb-${k} { display: flex; }`).join("\n")}
.quiz { counter-reset: right answered; }
.q input.is-right:checked { counter-increment: right answered; }
.q input:not(.is-right):checked { counter-increment: answered; }
.score { display: flex; flex-wrap: wrap; gap: 8px 20px; align-items: baseline; padding-top: 16px; border-top: 2px solid var(--line); }
.score .score-num { font-family: var(--font-display); font-weight: 800; font-size: 1.6rem; font-variant-numeric: tabular-nums; }
.score .score-num::before { content: counter(right); }
.score .score-sub { color: var(--muted); font-size: 0.9rem; }
.score .score-sub::before { content: counter(answered); font-weight: 700; color: var(--fg); }
.score .reset { font-size: 0.85rem; color: var(--muted); }
.topbar-progress { display: none; }
`;

function quizHtml(id, questions, title) {
  const qs = questions.map((q, qi) => {
    const name = `${id}q${qi}`;
    const inputs = q.options.map((_, oi) =>
      `<input type="radio" name="${name}" id="${name}${L[oi].toLowerCase()}" class="in-${L[oi].toLowerCase()}${oi === q.answer ? " is-right" : ""}">`).join("");
    const labels = q.options.map((opt, oi) =>
      `<label class="option opt-${L[oi].toLowerCase()}${oi === q.answer ? " is-correct" : ""}" for="${name}${L[oi].toLowerCase()}"><span class="option-key">${L[oi]}</span><span>${esc(opt)}</span></label>`).join("");
    const fbs = q.options.map((_, oi) => {
      const right = oi === q.answer;
      return `<div class="feedback fb-${L[oi].toLowerCase()} ${right ? "right" : "wrong"}"><b>${right ? "Richtig." : "Leider falsch. Richtig ist " + L[q.answer] + "."}</b><span>${esc(q.why)}</span></div>`;
    }).join("");
    return `<div class="q"><span class="qnum">Frage ${qi + 1} von ${questions.length}</span><p class="question">${esc(q.q)}</p>${inputs}<div class="options">${labels}</div>${fbs}</div>`;
  }).join("");
  return `<form class="quiz"><h3 class="section-title">${esc(title)}</h3><p class="section-sub">Tippe eine Antwort an. Die Erklärung erscheint sofort. Die Zählung unten aktualisiert sich mit jeder Antwort.</p>${qs}
<div class="score"><span class="score-num"> von ${questions.length} richtig</span><span class="score-sub"> beantwortet · bestanden ab ${Math.ceil(questions.length * 0.7)} richtigen</span><button type="reset" class="link-button reset">Antworten löschen</button></div></form>`;
}

function exampleHtml(ex, i) {
  let h = `<article class="example"><span class="example-label">Beispiel ${i + 1}</span><h3>${esc(ex.title)}</h3>`;
  if (ex.body) h += `<p>${esc(ex.body)}</p>`;
  if (ex.mock) h += `<div class="post-mock">${nl(ex.mock)}</div>`;
  if (ex.compare) h += `<div class="compare"><div class="compare-box bad"><span class="tag">${esc(ex.compare.bad.label)}</span><p>${nl(ex.compare.bad.text)}</p></div><div class="compare-box good"><span class="tag">${esc(ex.compare.good.label)}</span><p>${nl(ex.compare.good.text)}</p></div></div>`;
  if (ex.takeaway) h += `<p class="takeaway">${esc(ex.takeaway)}</p>`;
  return h + `</article>`;
}

const totalQ = M.reduce((a, m) => a + m.quiz.length, 0);
const totalMin = M.reduce((a, m) => a + m.minutes, 0);

const nav = `<nav class="static-nav" aria-label="Module">${M.map(m => `<a href="#${m.id}"><span class="nav-num">${m.number}</span>${esc(m.short)}</a>`).join("")}<a href="#test"><span class="nav-num">★</span>Abschlusstest</a><a href="#glossar"><span class="nav-num">A</span>Glossar</a></nav>`;

const hero = `<section class="hero" id="start"><p class="eyebrow">Lernportal</p><h1 class="page-title">Social Media verstehen, planen und messen</h1><p class="lead">Acht Module führen dich von den Plattform-Grundlagen über Content und Algorithmus bis zu Werbung, Kennzahlen und Recht. Jedes Modul hat eine kompakte Lektion, Praxisbeispiele und ein Quiz mit sofortiger Erklärung. Ein Modul gilt als bestanden, wenn du mindestens 70 Prozent der Fragen richtig hast.</p><div class="hero-actions"><a class="btn btn-primary" href="#m1">Mit Modul 1 starten</a><a class="btn btn-secondary" href="#glossar">Glossar öffnen</a></div><div class="stat-row"><div><b>${M.length}</b>Module</div><div><b>${totalQ}</b>Quizfragen</div><div><b>ca. ${totalMin} Min</b>Lernzeit gesamt</div></div></section>`;

const grid = `<section><h2 class="section-title">Alle Module</h2><p class="section-sub">Die Reihenfolge ist eine Empfehlung. Du kannst jederzeit springen.</p><div style="height:16px"></div><div class="module-grid">${M.map(m => `<a class="module-card" href="#${m.id}"><div class="module-card-head"><span class="eyebrow">Modul ${m.number}</span></div><h3>${esc(m.title)}</h3><p>${esc(m.teaser)}</p><div class="module-card-meta"><span>ca. ${m.minutes} Min</span><span>${m.quiz.length} Fragen</span></div></a>`).join("")}</div></section>`;

const modules = M.map((m, idx) => `<section class="module-section" id="${m.id}">
<header class="module-header"><p class="eyebrow">Modul ${m.number} von ${M.length}</p><h2 class="page-title">${esc(m.title)}</h2><p class="lead">${esc(m.teaser)}</p><div class="module-meta"><span>Lesezeit ca. ${m.minutes} Minuten</span><span>${m.examples.length} Beispiele</span><span>${m.quiz.length} Quizfragen</span></div></header>
<section><h3 class="section-title">Worum es geht</h3><div style="height:12px"></div><div class="prose">${m.intro.map(p => `<p>${esc(p)}</p>`).join("")}</div></section>
<section><h3 class="section-title">Das Wichtigste</h3><div style="height:12px"></div><ul class="keypoints">${m.keypoints.map(k => `<li><span>${k}</span></li>`).join("")}</ul></section>
<section><h3 class="section-title">Beispiele aus der Praxis</h3><p class="section-sub">Konstruierte, aber typische Situationen. Die Zahlen sind Beispielwerte.</p><div style="height:12px"></div><div class="examples">${m.examples.map(exampleHtml).join("")}</div></section>
${quizHtml(m.id, m.quiz, "Quiz: Teste dein Wissen")}
<nav class="pager">${idx > 0 ? `<a class="btn btn-secondary" href="#${M[idx - 1].id}">← Modul ${M[idx - 1].number}</a>` : `<a class="btn btn-secondary" href="#start">← Übersicht</a>`}${idx < M.length - 1 ? `<a class="btn btn-secondary" href="#${M[idx + 1].id}">Modul ${M[idx + 1].number} →</a>` : `<a class="btn btn-secondary" href="#test">Abschlusstest →</a>`}</nav>
</section>`).join("");

// Abschlusstest: feste Auswahl, aus jedem Modul mindestens eine Frage.
const finalQs = [];
M.forEach(m => finalQs.push(m.quiz[1]));
M.slice(0, 4).forEach(m => finalQs.push(m.quiz[4]));
const finalSection = `<section class="module-section" id="test"><header class="module-header"><p class="eyebrow">Abschlusstest</p><h2 class="page-title">Alles auf einmal</h2><p class="lead">${finalQs.length} Fragen quer durch alle acht Module. Aus jedem Modul ist mindestens eine dabei.</p></header>${quizHtml("final", finalQs, "Abschlusstest")}</section>`;

const terms = COURSE.glossary.slice().sort((a, b) => a.term.localeCompare(b.term, "de"));
const glossar = `<section class="module-section" id="glossar"><header class="module-header"><p class="eyebrow">Nachschlagen</p><h2 class="page-title">Glossar</h2><p class="lead">${terms.length} Begriffe, die dir in den Modulen und im Alltag begegnen, kurz erklärt.</p></header><dl class="glossary">${terms.map(t => `<div class="term"><dt>${esc(t.term)}</dt><dd>${esc(t.def)}</dd></div>`).join("")}</dl></section>`;

const html = `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Social Media Campus</title>
<meta name="description" content="Lernportal für Social Media Marketing mit Lektionen, Praxisbeispielen und Multiple-Choice-Quiz. Läuft ohne JavaScript.">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Manrope:wght@400;500;600;700&display=swap">
<style>
${css}
</style>
</head>
<body>
<header class="topbar"><div class="topbar-inner"><a class="brand" href="#start"><span class="brand-mark" aria-hidden="true"></span><span class="brand-name">Social Media Campus</span></a></div></header>
<div class="shell"><main class="content">
${nav}
${hero}
${grid}
${modules}
${finalSection}
${glossar}
</main></div>
<footer class="footer"><div class="footer-inner"><p>Dieses Lernportal fasst gängige Praxis im Social-Media-Marketing zusammen. Die Angaben zu Recht und Kennzeichnung sind eine Orientierung für Deutschland und ersetzen keine Rechtsberatung. Diese Version läuft ohne JavaScript, die Quiz-Ergebnisse werden nicht gespeichert.</p></div></footer>
</body>
</html>
`;
fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/social-media-campus.html", html);
console.log("geschrieben:", html.length, "Bytes,", M.length, "Module,", totalQ + finalQs.length, "Fragen");
