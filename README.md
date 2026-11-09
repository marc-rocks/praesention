# Social Media Campus

Ein Lernportal für Social-Media-Marketing: acht Module mit kompakten Lektionen, Praxisbeispielen und Multiple-Choice-Quiz, dazu ein Abschlusstest und ein Glossar. Reines HTML, CSS und JavaScript ohne Build-Schritt.

## Starten

`index.html` im Browser öffnen oder lokal ausliefern, zum Beispiel:

```bash
python3 -m http.server 8000
```

Dann http://localhost:8000 aufrufen.

## Aufbau

- `index.html` – Seitengerüst (Topbar, Navigation, Inhaltsbereich)
- `css/style.css` – Design-Tokens, Layout, Light- und Dark-Mode
- `js/data.js` – alle Inhalte: Module, Beispiele, Quizfragen, Glossar
- `js/app.js` – Routing über den URL-Hash, Rendering, Quiz-Logik, Fortschritt

## Inhalte ändern

Alle Texte liegen in `js/data.js`. Ein Modul besteht aus `intro` (Absätze), `keypoints` (Liste), `examples` (mit `body`, `mock` oder `compare`) und `quiz`. Eine Quizfrage hat vier `options`, den Index der richtigen Antwort in `answer` und eine Erklärung in `why`.

## Fortschritt

Ergebnisse werden im `localStorage` des Browsers gespeichert. Ein Modul gilt ab 70 Prozent richtigen Antworten als bestanden. Der Fortschritt lässt sich über den Link im Footer zurücksetzen.

## Einzeldatei-Version

`dist/social-media-campus.html` enthält CSS und JavaScript eingebettet und läuft ohne Webserver, zum Beispiel direkt vom Tablet oder per Mail verschickt. Nach Änderungen an den Quelldateien neu erzeugen:

```bash
node -e 'const fs=require("fs");let h=fs.readFileSync("index.html","utf8");h=h.replace(`<link rel="stylesheet" href="css/style.css">`,"<style>\n"+fs.readFileSync("css/style.css","utf8")+"\n</style>");h=h.replace(`<script src="js/data.js"></script>\n<script src="js/app.js"></script>`,"<script>\n"+fs.readFileSync("js/data.js","utf8")+"\n</script>\n<script>\n"+fs.readFileSync("js/app.js","utf8")+"\n</script>");fs.writeFileSync("dist/social-media-campus.html",h)'
```
