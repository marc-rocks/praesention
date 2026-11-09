/* Inhalte des Lernportals: Module mit Lektion, Beispielen und Quizfragen.
   Jede Frage: { q, options[], answer (Index), why } */
window.COURSE = {
  modules: [
    {
      id: "m1",
      number: 1,
      title: "Grundlagen & Plattformen",
      short: "Plattformen",
      minutes: 10,
      teaser: "Was Social Media von klassischen Medien unterscheidet und welche Plattform zu welchem Ziel passt.",
      intro: [
        "Social Media sind digitale Plattformen, auf denen Menschen Inhalte erstellen, teilen und miteinander kommunizieren. Der entscheidende Unterschied zu Fernsehen, Print oder Radio: Kommunikation läuft in beide Richtungen. Wer postet, bekommt Reaktionen, und Nutzer produzieren selbst Inhalte (User Generated Content).",
        "Für Unternehmen und Creator heißt das: Du sendest nicht nur, du führst Gespräche. Außerdem entscheidet nicht eine Redaktion, sondern ein Algorithmus, wer deinen Beitrag sieht. Jede Plattform hat dabei ihre eigene Kultur, ihre eigenen Formate und ihr eigenes Publikum."
      ],
      keypoints: [
        "<b>Instagram:</b> visuell, Reels und Stories dominieren, Kernzielgruppe etwa 18 bis 40 Jahre. Gut für Marken, Lifestyle, Gastronomie, Handel.",
        "<b>TikTok:</b> Kurzvideo und Unterhaltung, sehr starke Entdeckung neuer Accounts über die For-You-Page, jüngste Zielgruppe. Authentizität schlägt Hochglanz.",
        "<b>LinkedIn:</b> Business-Netzwerk für B2B, Recruiting und Personal Branding. Fachliche Beiträge, Erfahrungsberichte und Karrierethemen funktionieren.",
        "<b>Facebook:</b> ältere Zielgruppe, starke Gruppen, lokale Veranstaltungen und Marktplatz. Wichtig für regionale Unternehmen und Vereine.",
        "<b>YouTube:</b> zweitgrößte Suchmaschine der Welt, Langform-Videos und Tutorials, Inhalte bleiben jahrelang auffindbar.",
        "<b>Pinterest:</b> eher Suchmaschine als Netzwerk. Inspiration für Wohnen, Rezepte, DIY, Mode. Pins bringen lange Traffic auf Webseiten.",
        "<b>X (Twitter) und Threads:</b> Echtzeit, Nachrichten, Meinungen, kurze Texte. Stark bei Medien, Politik, Tech und Kundenservice."
      ],
      examples: [
        {
          title: "Die Bäckerei um die Ecke",
          body: "Eine Bäckerei mit zwei Filialen will mehr Laufkundschaft. Sie wählt Instagram (Fotos und Reels vom frischen Brot, Stories mit Tagesangebot) und Facebook (lokale Reichweite, Öffnungszeiten, Events). TikTok wäre möglich, LinkedIn wäre Zeitverschwendung, weil dort niemand nach Brötchen sucht.",
          takeaway: "Plattformwahl folgt der Frage: Wo ist meine Zielgruppe, und was tut sie dort?"
        },
        {
          title: "Die IT-Beratung",
          body: "Eine Beratung für Cloud-Sicherheit sucht Geschäftskunden und neue Mitarbeiter. Die Geschäftsführerin postet auf LinkedIn zwei Mal pro Woche: ein Fachbeitrag zu einem aktuellen Sicherheitsvorfall, ein Einblick ins Team. Auf YouTube erscheint monatlich ein ausführliches Tutorial, das über Google gefunden wird.",
          takeaway: "B2B-Entscheidungen brauchen Vertrauen und Fachwissen. LinkedIn und YouTube liefern beides."
        },
        {
          title: "Gleicher Inhalt, drei Plattformen",
          compare: {
            bad: { label: "Falsch", text: "Ein 10-Minuten-Interview wird unverändert auf YouTube, Instagram und TikTok hochgeladen. Auf Instagram und TikTok wird es kaum angeschaut, weil niemand dort 10 Minuten im Hochformat durchhält." },
            good: { label: "Richtig", text: "YouTube bekommt das volle Interview. Für Instagram und TikTok werden drei Ausschnitte von 30 bis 45 Sekunden mit Untertiteln geschnitten, jeweils mit der stärksten Aussage als Einstieg." }
          },
          takeaway: "Ein Inhalt, viele Formate: Jede Plattform bekommt ihre eigene Version."
        }
      ],
      quiz: [
        {
          q: "Was unterscheidet Social Media grundsätzlich von klassischen Medien wie Fernsehen oder Zeitung?",
          options: [
            "Social Media sind immer kostenlos, klassische Medien kosten Geld.",
            "Kommunikation läuft in beide Richtungen und Nutzer erstellen selbst Inhalte.",
            "Social Media erreichen nur junge Menschen.",
            "Auf Social Media gibt es keine Werbung."
          ],
          answer: 1,
          why: "Der Kern von Social Media ist der Dialog: Nutzer reagieren, kommentieren und produzieren eigene Inhalte. Alter, Kosten und Werbung sind kein Unterscheidungsmerkmal."
        },
        {
          q: "Ein Hersteller von Industrie-Software möchte Einkäufer in mittelständischen Unternehmen erreichen. Welche Plattform passt am besten?",
          options: ["TikTok", "Pinterest", "LinkedIn", "Snapchat"],
          answer: 2,
          why: "LinkedIn ist das Netzwerk für geschäftliche Kontakte und B2B-Entscheider. Die anderen Plattformen sind auf Unterhaltung oder private Inspiration ausgerichtet."
        },
        {
          q: "Welche Plattform wird oft als 'zweitgrößte Suchmaschine der Welt' bezeichnet?",
          options: ["Instagram", "YouTube", "Facebook", "X (Twitter)"],
          answer: 1,
          why: "YouTube gehört zu Google und wird massiv zur Suche nach Anleitungen und Erklärungen genutzt. Videos dort bleiben jahrelang auffindbar."
        },
        {
          q: "Was bedeutet 'User Generated Content' (UGC)?",
          options: [
            "Inhalte, die ein Unternehmen über seine Nutzer veröffentlicht.",
            "Inhalte, die von Nutzern selbst erstellt werden, etwa Bewertungen, Fotos oder Videos.",
            "Automatisch vom Algorithmus erzeugte Inhalte.",
            "Bezahlte Beiträge von Influencern."
          ],
          answer: 1,
          why: "UGC sind Inhalte, die Nutzer freiwillig über eine Marke oder ein Thema erstellen. Sie wirken glaubwürdig, weil sie nicht vom Unternehmen stammen."
        },
        {
          q: "Ein regionaler Sportverein will Eltern über Trainingszeiten und Veranstaltungen informieren. Welche Plattform ist dafür besonders geeignet?",
          options: ["Facebook mit Gruppen und Veranstaltungen", "Pinterest", "LinkedIn", "Twitch"],
          answer: 0,
          why: "Facebook hat eine ältere Nutzerschaft und mit Gruppen und Veranstaltungen genau die Funktionen, die lokale Vereine brauchen."
        },
        {
          q: "Was ist auf TikTok typischerweise erfolgreicher?",
          options: [
            "Perfekt ausgeleuchtete Hochglanz-Werbespots",
            "Authentische, direkt gefilmte Kurzvideos mit schnellem Einstieg",
            "Lange Texte mit vielen Hashtags",
            "Statische Bilder mit Firmenlogo"
          ],
          answer: 1,
          why: "TikTok belohnt Authentizität und Tempo. Inhalte, die wie Werbung aussehen, werden schnell weggewischt."
        }
      ]
    },
    {
      id: "m2",
      number: 2,
      title: "Ziele, Zielgruppe & Strategie",
      short: "Strategie",
      minutes: 12,
      teaser: "Ohne klares Ziel postest du ins Leere. Hier lernst du SMART-Ziele, Personas und Content-Säulen.",
      intro: [
        "Die häufigste Ursache für erfolglose Social-Media-Arbeit ist nicht schlechter Content, sondern fehlende Richtung. Wer nicht weiß, was ein Beitrag erreichen soll, kann auch nicht beurteilen, ob er funktioniert hat.",
        "Eine Strategie beantwortet drei Fragen: Was will ich erreichen (Ziel)? Wen will ich erreichen (Zielgruppe)? Was biete ich dieser Zielgruppe regelmäßig (Content-Säulen)? Erst danach geht es um Plattformen, Formate und Posting-Zeiten."
      ],
      keypoints: [
        "<b>SMART-Ziele:</b> spezifisch, messbar, attraktiv, realistisch, terminiert. 'Mehr Reichweite' ist ein Wunsch, '20 Prozent mehr Profilbesuche bis Ende Q2' ist ein Ziel.",
        "<b>Typische Ziele:</b> Bekanntheit (Awareness), Vertrauen und Community, Traffic auf die Webseite, Leads oder Verkäufe, Recruiting, Kundenservice.",
        "<b>Persona:</b> ein konkretes Bild der Zielperson mit Alter, Beruf, Zielen, Problemen und Mediennutzung. Du schreibst für eine Person, nicht für 'alle'.",
        "<b>Content-Säulen:</b> drei bis fünf wiederkehrende Themenbereiche, die deine Marke abdeckt. Sie machen Planung leichter und das Profil wiedererkennbar.",
        "<b>Markenstimme (Tone of Voice):</b> Duzt oder siezt du? Humorvoll oder sachlich? Die Stimme bleibt über alle Beiträge gleich.",
        "<b>Redaktionsplan:</b> Wochen- oder Monatsübersicht mit Datum, Plattform, Format, Thema und Ziel pro Beitrag. Verhindert Lücken und Panik-Posts.",
        "<b>Wettbewerbsanalyse:</b> Schau dir drei bis fünf vergleichbare Accounts an. Was funktioniert dort, welche Lücke lassen sie offen?"
      ],
      examples: [
        {
          title: "Vom Wunsch zum SMART-Ziel",
          compare: {
            bad: { label: "Unklar", text: "\"Wir wollen auf Instagram mehr Follower und mehr Engagement.\"" },
            good: { label: "SMART", text: "\"Wir steigern unsere Instagram-Follower von 1.200 auf 2.000 bis zum 30. Juni, indem wir drei Reels pro Woche zu Pflege-Tipps veröffentlichen. Messung: wöchentlich über Instagram Insights.\"" }
          },
          takeaway: "Ein SMART-Ziel sagt dir am Stichtag eindeutig, ob du es erreicht hast."
        },
        {
          title: "Persona für ein Yoga-Studio",
          mock: "Name: Sandra, 38, Projektleiterin in einer Agentur\nSituation: sitzt 9 Stunden am Tag, Rückenschmerzen, wenig Zeit\nZiel: Ausgleich finden, ohne Leistungsdruck\nSorgen: \"Bin ich zu unbeweglich? Passe ich da rein?\"\nMediennutzung: Instagram abends auf dem Sofa, folgt Ernährungs- und Achtsamkeits-Accounts\nWas sie überzeugt: ehrliche Einblicke, Anfänger-Kurse, kein Perfektionismus",
          takeaway: "Mit dieser Persona weißt du sofort: Posts über Anfängerfreundlichkeit und Rückengesundheit, am Abend veröffentlicht."
        },
        {
          title: "Content-Säulen eines Cafés",
          body: "1. Produkt: neue Kuchen, Kaffeesorten, Saisonkarte. 2. Hinter den Kulissen: Team, Lieferanten, Rösterei-Besuch. 3. Tipps: Kaffee zu Hause richtig zubereiten. 4. Community: Gäste-Fotos, Veranstaltungen, lokale Partner. Jede Woche bekommt jede Säule mindestens einen Beitrag.",
          takeaway: "Säulen verhindern, dass nur noch Produktwerbung erscheint, die auf Dauer niemand sehen will."
        }
      ],
      quiz: [
        {
          q: "Welches dieser Ziele ist ein SMART-Ziel?",
          options: [
            "Wir wollen bekannter werden.",
            "Wir wollen mehr Interaktionen auf TikTok.",
            "Wir erhöhen die Klicks von LinkedIn auf unsere Karriereseite von 300 auf 500 pro Monat bis zum 31. Dezember.",
            "Wir posten ab jetzt öfter."
          ],
          answer: 2,
          why: "Nur diese Option ist spezifisch, messbar (300 auf 500 Klicks), realistisch und terminiert. Die anderen sind Absichten ohne Messgröße oder Frist."
        },
        {
          q: "Was ist eine Persona?",
          options: [
            "Der offizielle Account-Name eines Unternehmens.",
            "Ein konkretes, halbfiktives Profil einer typischen Zielperson mit Bedürfnissen und Mediennutzung.",
            "Eine Liste aller Follower eines Accounts.",
            "Eine Werbefigur im Firmenlogo."
          ],
          answer: 1,
          why: "Eine Persona macht die Zielgruppe greifbar. Statt 'Frauen 25 bis 45' schreibst du für 'Sandra, 38, Rückenschmerzen, wenig Zeit'."
        },
        {
          q: "Wozu dienen Content-Säulen?",
          options: [
            "Sie legen die Posting-Uhrzeit fest.",
            "Sie bestimmen, welche Hashtags verwendet werden.",
            "Sie definieren drei bis fünf wiederkehrende Themenbereiche für planbaren, wiedererkennbaren Content.",
            "Sie sind die bezahlten Werbeanzeigen im Feed."
          ],
          answer: 2,
          why: "Content-Säulen strukturieren die Themen. Sie sorgen für Abwechslung und machen den Redaktionsplan einfach zu füllen."
        },
        {
          q: "Ein Unternehmen postet ausschließlich Produktangebote. Was ist das wahrscheinliche Problem?",
          options: [
            "Keins, Produkte sind das, was die Leute sehen wollen.",
            "Follower verlieren das Interesse, weil der Account nur verkauft und keinen Mehrwert bietet.",
            "Der Algorithmus bevorzugt Produktposts, der Account wächst zu schnell.",
            "Produktposts sind auf Social Media verboten."
          ],
          answer: 1,
          why: "Reine Werbe-Accounts bieten keinen Grund zu folgen. Eine Faustregel ist 80 Prozent Mehrwert und Unterhaltung, 20 Prozent Verkauf."
        },
        {
          q: "Was gehört in einen Redaktionsplan?",
          options: [
            "Nur die Posting-Termine.",
            "Datum, Plattform, Format, Thema und Ziel jedes geplanten Beitrags.",
            "Die Liste der Konkurrenten.",
            "Die Passwörter aller Social-Media-Accounts."
          ],
          answer: 1,
          why: "Ein Redaktionsplan macht die Strategie konkret: Was erscheint wann, wo, in welchem Format und warum."
        },
        {
          q: "Was ist mit 'Tone of Voice' gemeint?",
          options: [
            "Die Lautstärke von Videos.",
            "Die gleichbleibende Art, wie eine Marke spricht: etwa locker und duzend oder sachlich und siezend.",
            "Die Sprache der Untertitel.",
            "Der Musiktitel im Reel."
          ],
          answer: 1,
          why: "Tone of Voice ist die Persönlichkeit der Marke in Worten. Sie sollte über alle Beiträge und Antworten hinweg konsistent sein."
        }
      ]
    },
    {
      id: "m3",
      number: 3,
      title: "Content erstellen",
      short: "Content",
      minutes: 14,
      teaser: "Hooks, Formate, Captions und Hashtags: Wie ein Beitrag aufgebaut ist, der gesehen und gelesen wird.",
      intro: [
        "Im Feed entscheidet sich in unter einer Sekunde, ob jemand stehen bleibt oder weiterwischt. Guter Content beginnt daher mit einem Hook: dem ersten Bild, dem ersten Satz oder den ersten drei Sekunden eines Videos.",
        "Danach zählt die Struktur. Ein Beitrag hat eine Aufgabe (unterhalten, erklären, inspirieren, verkaufen), ein passendes Format und am Ende eine klare Handlungsaufforderung. Technische Perfektion ist zweitrangig, Verständlichkeit nicht."
      ],
      keypoints: [
        "<b>Hook:</b> Die ersten drei Sekunden oder die erste Textzeile müssen Neugier wecken. Frage, überraschende Zahl, Versprechen oder Widerspruch funktionieren.",
        "<b>Formate:</b> Reel/Kurzvideo (Reichweite), Carousel (Wissen, Speichern), Story (Nähe, Umfragen), Live (Interaktion), Einzelbild (Ankündigung), Textpost (LinkedIn, X).",
        "<b>Caption-Aufbau:</b> Hook in Zeile 1, dann Mehrwert in kurzen Absätzen, am Schluss ein Call to Action (CTA). Nicht alles muss im Text stehen, was im Video gesagt wird.",
        "<b>Call to Action:</b> Sag konkret, was passieren soll: 'Speichern für später', 'Schreib mir deine Frage', 'Link in der Bio'. Ein CTA pro Beitrag.",
        "<b>Hashtags:</b> drei bis acht relevante Hashtags, die dein Thema beschreiben, statt 30 generische wie #love oder #instagood. Auf LinkedIn und TikTok reichen drei.",
        "<b>Untertitel und Alt-Text:</b> Die meisten Videos werden ohne Ton geschaut. Untertitel erhöhen die Watchtime. Alt-Texte machen Bilder für Screenreader zugänglich.",
        "<b>Plattform-nativ:</b> Hochformat 9:16 für Reels und TikTok, kein fremdes Wasserzeichen, Trend-Sounds nur, wenn sie zur Marke passen.",
        "<b>Wiederverwertung (Repurposing):</b> Ein Blogartikel wird zum Carousel, der Carousel zum Reel-Skript, das Reel zur Story. Spart Zeit und hält die Botschaft konsistent."
      ],
      examples: [
        {
          title: "Caption vorher und nachher",
          compare: {
            bad: { label: "Vorher", text: "\"Heute haben wir wieder einen tollen Tag im Studio gehabt! Unser Team hat viel Spaß und wir freuen uns auf euch 😊 #fitness #gym #motivation #love #instagood #fit #happy #sport #training #life\"" },
            good: { label: "Nachher", text: "\"3 Fehler, die fast jeder beim Kreuzheben macht (Nummer 2 kostet dich den unteren Rücken).\n\n1. Stange zu weit vom Körper\n2. Rundrücken beim Anheben\n3. Blick nach oben statt neutral\n\nSpeicher dir den Post fürs nächste Training. Welche Übung soll ich als nächstes zerlegen?\n\n#kreuzheben #krafttraining #techniktipps\"" }
          },
          takeaway: "Hook mit Zahl und Versprechen, klarer Mehrwert, ein CTA, wenige passende Hashtags."
        },
        {
          title: "Fünf Hooks für denselben Inhalt",
          mock: "Thema: Warum Pflanzen im Büro die Produktivität steigern\n\n1. Frage: \"Warum sind Büros mit Pflanzen produktiver?\"\n2. Zahl: \"15 % mehr Leistung durch eine einzige Änderung im Büro.\"\n3. Widerspruch: \"Dein Büro braucht keinen neuen Stuhl. Es braucht eine Pflanze.\"\n4. Du-Ansprache: \"Du bist nachmittags müde? Schau mal auf deinen Schreibtisch.\"\n5. Story: \"Wir haben 20 Pflanzen ins Büro gestellt. Das ist passiert.\"",
          takeaway: "Teste verschiedene Hooks. Der Inhalt bleibt, der Einstieg entscheidet über die Reichweite."
        },
        {
          title: "Aufbau eines Carousels",
          body: "Folie 1: Hook und Versprechen ('5 Tools, die dir pro Woche 2 Stunden sparen'). Folien 2 bis 6: je ein Tool mit einem Satz Nutzen und einem Screenshot. Folie 7: Zusammenfassung aller fünf. Folie 8: CTA ('Speichern und an Kollegen schicken'). Jede Folie hat dieselbe Schrift, dieselben Farben und eine Seitenzahl.",
          takeaway: "Carousels werden häufig gespeichert, und Speichern ist eines der stärksten Signale für den Algorithmus."
        }
      ],
      quiz: [
        {
          q: "Was ist ein 'Hook' im Social-Media-Content?",
          options: [
            "Der Link in der Bio.",
            "Der Einstieg in den ersten Sekunden oder der erste Satz, der Aufmerksamkeit erzeugt.",
            "Ein Hashtag, der besonders oft gesucht wird.",
            "Die Musik unter einem Reel."
          ],
          answer: 1,
          why: "Der Hook entscheidet, ob jemand stehen bleibt. Fragen, Zahlen, Versprechen oder Widersprüche sind bewährte Einstiege."
        },
        {
          q: "Welche Hashtag-Strategie ist empfehlenswert?",
          options: [
            "30 der beliebtesten Hashtags wie #love und #instagood unter jeden Post.",
            "Gar keine Hashtags, sie sind veraltet.",
            "Drei bis acht Hashtags, die das konkrete Thema des Beitrags beschreiben.",
            "Nur den Markennamen als Hashtag."
          ],
          answer: 2,
          why: "Hashtags helfen der Plattform, den Beitrag einzuordnen. Generische Massen-Hashtags bringen keine relevante Zielgruppe."
        },
        {
          q: "Warum sind Untertitel in Videos wichtig?",
          options: [
            "Sie sind auf allen Plattformen Pflicht.",
            "Viele Nutzer schauen ohne Ton, und Untertitel erhöhen Verständnis und Watchtime.",
            "Der Algorithmus zählt Untertitel als Kommentare.",
            "Untertitel ersetzen die Caption."
          ],
          answer: 1,
          why: "Ein großer Teil der Videos wird stumm geschaut, etwa unterwegs. Ohne Untertitel wird weitergewischt."
        },
        {
          q: "Welches Format eignet sich am besten, um Schritt-für-Schritt-Wissen zu vermitteln, das Nutzer speichern?",
          options: ["Story", "Carousel", "Live-Video", "Einzelbild mit Logo"],
          answer: 1,
          why: "Carousels erlauben mehrere Folien mit Struktur und werden überdurchschnittlich oft gespeichert und geteilt."
        },
        {
          q: "Was ist ein guter Call to Action (CTA)?",
          options: [
            "\"Folgen, liken, teilen, kommentieren, speichern und Link in Bio klicken!\"",
            "Gar keiner, die Leute wissen schon, was zu tun ist.",
            "Eine konkrete Aufforderung, zum Beispiel \"Speicher dir den Post fürs nächste Training\".",
            "Ein Hinweis auf das Impressum."
          ],
          answer: 2,
          why: "Ein CTA pro Beitrag, konkret formuliert. Fünf Aufforderungen auf einmal führen dazu, dass niemand etwas tut."
        },
        {
          q: "Du willst ein YouTube-Video für Instagram Reels nutzen. Was ist richtig?",
          options: [
            "Das Querformat-Video einfach hochladen.",
            "Einen 30- bis 60-Sekunden-Ausschnitt im Hochformat 9:16 mit Untertiteln schneiden und mit der stärksten Aussage beginnen.",
            "Nur den Link zum YouTube-Video als Bild posten.",
            "Das Video mit TikTok-Wasserzeichen hochladen, damit man die Quelle erkennt."
          ],
          answer: 1,
          why: "Reels brauchen Hochformat, Tempo und einen starken Einstieg. Fremde Wasserzeichen werden von Plattformen tendenziell abgestraft."
        }
      ]
    },
    {
      id: "m4",
      number: 4,
      title: "Algorithmus & Reichweite",
      short: "Algorithmus",
      minutes: 10,
      teaser: "Wie Plattformen entscheiden, wer deinen Beitrag sieht, und welche Signale du beeinflussen kannst.",
      intro: [
        "Kein Algorithmus ist öffentlich, aber alle verfolgen dasselbe Ziel: Nutzer so lange wie möglich auf der Plattform halten. Beiträge, die dazu beitragen, werden mehr Menschen gezeigt. Beiträge, die weggewischt werden, verschwinden.",
        "Das heißt für dich: Du optimierst nicht für den Algorithmus, sondern für echte Menschen. Wenn Menschen länger schauen, speichern, teilen und kommentieren, folgt die Reichweite. Trotzdem lohnt es sich, die wichtigsten Signale zu kennen."
      ],
      keypoints: [
        "<b>Watchtime und Verweildauer:</b> Wie viel Prozent eines Videos werden angeschaut? Wird es wiederholt? Das stärkste Signal bei Reels und TikTok.",
        "<b>Interaktionen gewichtet:</b> Teilen und Speichern wiegen meist mehr als Likes. Kommentare zählen mehr, wenn du antwortest und so Gespräche entstehen.",
        "<b>Die erste Stunde:</b> Viele Plattformen testen einen Beitrag zuerst bei einem kleinen Teil der Follower. Läuft er dort gut, wird er weiter ausgespielt.",
        "<b>Konsistenz:</b> Regelmäßiges Posten (etwa drei Mal pro Woche) schlägt zehn Posts an einem Tag und dann drei Wochen Pause.",
        "<b>Posting-Zeit:</b> Poste dann, wenn deine Zielgruppe online ist. Die Insights zeigen es dir. Die 'beste Zeit' ist für jeden Account anders.",
        "<b>Nische und Relevanz:</b> Die Plattform lernt, wofür dein Account steht. Wer heute Rezepte und morgen Autos postet, verwirrt das System und die Follower.",
        "<b>Shadowban-Mythen:</b> Reichweiteneinbrüche haben meist einfache Ursachen: schwächerer Content, geänderte Formate, saisonale Effekte. Gegen echte Verstöße helfen nur die Richtlinien.",
        "<b>Follower sind nicht Reichweite:</b> Auf TikTok und zunehmend Instagram sehen viele Nicht-Follower deinen Beitrag. Jeder Post kann der erste Kontakt sein."
      ],
      examples: [
        {
          title: "Zwei Reels, gleicher Account",
          compare: {
            bad: { label: "Reel A", text: "Beginnt mit 5 Sekunden Logo-Animation, dann spricht die Inhaberin 60 Sekunden frontal in die Kamera. Durchschnittliche Watchtime: 18 Prozent. Nach 2.000 Views stoppt die Ausspielung." },
            good: { label: "Reel B", text: "Beginnt mitten in der Handlung: \"Das hier ist der Fehler, den 90 Prozent machen.\" Schnitt alle 3 Sekunden, Untertitel, 28 Sekunden lang, Ende mit Frage. Watchtime 74 Prozent, viele Kommentare. 45.000 Views." }
          },
          takeaway: "Die Plattform zeigt das, was Menschen zu Ende schauen. Logo-Intros kosten Reichweite."
        },
        {
          title: "Das Posting-Zeit-Experiment",
          body: "Ein Online-Shop für Babykleidung postete immer um 9 Uhr, weil das Team dann im Büro war. Die Insights zeigten jedoch: Die Zielgruppe ist zwischen 20 und 22 Uhr aktiv, wenn die Kinder schlafen. Nach dem Wechsel auf 20:30 Uhr stieg die Reichweite der ersten Stunde um fast die Hälfte.",
          takeaway: "Richte dich nach deiner Zielgruppe, nicht nach deinem Kalender. Planungstools erlauben Vorab-Terminierung."
        },
        {
          title: "Reichweiteneinbruch richtig deuten",
          body: "Ein Reiseblog verliert im Januar 40 Prozent Reichweite und vermutet einen Shadowban. Ein Blick in die Daten zeigt: Im Dezember liefen Weihnachtsmarkt-Reels, die stark geteilt wurden. Im Januar folgten Texteposts ohne Video. Nach Rückkehr zu Reels erholten sich die Zahlen in drei Wochen.",
          takeaway: "Bevor du den Algorithmus beschuldigst, vergleiche Formate, Themen und Saison."
        }
      ],
      quiz: [
        {
          q: "Welches Ziel verfolgen die Algorithmen aller großen Plattformen im Kern?",
          options: [
            "Möglichst vielen Unternehmen Reichweite zu geben.",
            "Nutzer möglichst lange auf der Plattform zu halten.",
            "Beiträge in chronologischer Reihenfolge zu zeigen.",
            "Follower-Zahlen gerecht zu verteilen."
          ],
          answer: 1,
          why: "Plattformen verdienen mit Aufmerksamkeit. Inhalte, die Menschen länger halten, werden häufiger ausgespielt."
        },
        {
          q: "Welches Signal gilt bei Kurzvideos als besonders wichtig?",
          options: [
            "Die Anzahl der Hashtags",
            "Die Watchtime, also wie lange und wie oft das Video angeschaut wird",
            "Die Länge der Caption",
            "Die Uhrzeit der Erstellung"
          ],
          answer: 1,
          why: "Watchtime zeigt der Plattform direkt, ob das Video Menschen fesselt. Sie gilt als stärkstes Signal bei Reels und TikTok."
        },
        {
          q: "Welche Interaktion wiegt für die Reichweite in der Regel am schwersten?",
          options: ["Ein Like", "Ein Profilbesuch", "Teilen oder Speichern", "Das Anschauen des Profilbilds"],
          answer: 2,
          why: "Teilen und Speichern sind aufwendiger als ein Like und signalisieren echten Wert. Sie werden entsprechend höher gewichtet."
        },
        {
          q: "Was ist die beste Posting-Zeit?",
          options: [
            "Immer montags um 9 Uhr.",
            "Nachts, weil dann weniger Konkurrenz ist.",
            "Dann, wenn laut den eigenen Insights die Zielgruppe am aktivsten ist.",
            "Die Uhrzeit spielt keine Rolle."
          ],
          answer: 2,
          why: "Es gibt keine allgemein beste Zeit. Die Insights jedes Accounts zeigen, wann die eigenen Follower online sind."
        },
        {
          q: "Was passiert, wenn du zwei Wochen lang täglich zehn Posts veröffentlichst und dann drei Monate nichts?",
          options: [
            "Die Plattform speichert die Reichweite für später.",
            "Der Account wird dauerhaft gepusht.",
            "Die Reichweite bricht ein, weil Konsistenz fehlt und Follower den Account vergessen.",
            "Nichts, nur die Gesamtzahl der Posts zählt."
          ],
          answer: 2,
          why: "Regelmäßigkeit ist wichtiger als Masse. Follower und Algorithmus brauchen einen verlässlichen Rhythmus."
        },
        {
          q: "Deine Reichweite ist plötzlich um 40 Prozent gefallen. Was solltest du zuerst tun?",
          options: [
            "Den Account löschen und neu anlegen.",
            "Sofort einen Shadowban annehmen und den Support anschreiben.",
            "Formate, Themen und Saison der letzten Wochen mit den Vormonaten vergleichen.",
            "Alle alten Beiträge löschen."
          ],
          answer: 2,
          why: "Die meisten Einbrüche haben erklärbare Ursachen in Content und Timing. Daten anschauen kommt vor Spekulation."
        }
      ]
    },
    {
      id: "m5",
      number: 5,
      title: "Community Management",
      short: "Community",
      minutes: 10,
      teaser: "Kommentare, Kritik und Krisen: Wie du mit deiner Community sprichst, damit sie bleibt.",
      intro: [
        "Social Media endet nicht mit dem Posten. Was danach in den Kommentaren und Nachrichten passiert, entscheidet, ob aus Reichweite eine Beziehung wird. Community Management ist Kundenservice, Markenpflege und Content-Quelle zugleich.",
        "Dabei gilt: Alles, was du öffentlich schreibst, lesen tausende Menschen mit. Deine Antwort auf eine Beschwerde ist nie nur eine Antwort an eine Person, sondern ein Statement an alle, die zuschauen."
      ],
      keypoints: [
        "<b>Antwortzeit:</b> Reagiere innerhalb weniger Stunden, idealerweise in der ersten Stunde nach dem Posten. Schnelle Antworten fördern Gespräche und damit Reichweite.",
        "<b>Jeden Kommentar wertschätzen:</b> Ein kurzes 'Danke, freut uns!' ist besser als Schweigen. Fragen beantwortest du vollständig und persönlich.",
        "<b>Kritik annehmen:</b> Berechtigte Kritik beantwortest du öffentlich, sachlich und lösungsorientiert. Details klärst du dann privat per Direktnachricht.",
        "<b>Trolle erkennen:</b> Wer nur provozieren will, bekommt eine kurze sachliche Antwort oder gar keine. Beleidigungen und Hass darfst du löschen und melden. Eine Netiquette im Profil macht die Regeln transparent.",
        "<b>Nie löschen, was berechtigt ist:</b> Gelöschte Kritik wird fotografiert und geteilt. Das verschlimmert jede Situation.",
        "<b>Krisenkommunikation:</b> Schnell reagieren, Fehler eingestehen, konkrete Schritte nennen, nicht rechtfertigen. Ein vorbereiteter Krisenplan mit Ansprechpartnern spart im Ernstfall Stunden.",
        "<b>Community aktiv einbinden:</b> Fragen stellen, Umfragen nutzen, UGC teilen, Stammkunden sichtbar machen. Menschen bleiben, wo sie gesehen werden.",
        "<b>Direktnachrichten:</b> Viele Kaufentscheidungen und Beschwerden laufen über DMs. Behandle sie wie E-Mails an den Kundenservice."
      ],
      examples: [
        {
          title: "Antwort auf eine Beschwerde",
          body: "Kommentar unter dem Post eines Möbelhändlers: \"Vor drei Wochen bestellt, keine Lieferung, keine Antwort vom Support. Nie wieder!\"",
          compare: {
            bad: { label: "Schlecht", text: "\"Bitte wenden Sie sich an unseren Kundenservice.\" (oder der Kommentar wird gelöscht)" },
            good: { label: "Gut", text: "\"Das tut uns leid, Frau Berger, drei Wochen ohne Rückmeldung sind nicht okay. Ich habe Ihnen gerade eine Nachricht geschickt und kümmere mich persönlich um Ihre Bestellung. Lisa aus dem Team\"" }
          },
          takeaway: "Öffentlich Verantwortung übernehmen, privat lösen, mit Namen unterschreiben. Alle Mitlesenden sehen: Hier wird sich gekümmert."
        },
        {
          title: "Troll oder Kritiker?",
          mock: "Kommentar 1: \"Euer Preis ist mir ehrlich zu hoch, warum kostet das Set 89 Euro?\"\n→ Kritiker. Antwort mit Erklärung (Material, Herstellung, Garantie). Mitlesende lernen etwas.\n\nKommentar 2: \"Abzocke, Betrüger, alle Firmen wie ihr gehören verboten!!!\"\n→ Wahrscheinlich Troll. Eine kurze, sachliche Antwort (\"Wenn du ein konkretes Problem hast, schreib uns gern per DM\"), dann nicht weiter diskutieren.\n\nKommentar 3: Beleidigungen gegen eine Mitarbeiterin\n→ Löschen, melden, bei Wiederholung blockieren. Netiquette verweist auf diese Regel.",
          takeaway: "Konkrete Kritik bekommt eine echte Antwort, Provokation bekommt Grenzen."
        },
        {
          title: "Krisenablauf in vier Schritten",
          body: "Ein Café postet ein Reel, in dem ein Mitarbeiter einen Gast nachäfft. Der Clip wird geteilt, hunderte wütende Kommentare. Schritt 1 (innerhalb einer Stunde): Reel löschen, kurzes Statement: 'Wir haben das Video entfernt. Das war respektlos und das tut uns leid. Wir melden uns heute noch ausführlich.' Schritt 2: intern klären. Schritt 3 (am selben Tag): ausführliche Stellungnahme mit konkreten Konsequenzen. Schritt 4: Kommentare weiter beantworten, nicht abschalten.",
          takeaway: "Tempo, Ehrlichkeit und konkrete Schritte beruhigen. Schweigen und Rechtfertigen heizen an."
        }
      ],
      quiz: [
        {
          q: "Ein Kunde beschwert sich öffentlich und berechtigt über eine verspätete Lieferung. Was ist die beste Reaktion?",
          options: [
            "Den Kommentar löschen, damit andere ihn nicht sehen.",
            "Öffentlich entschuldigen, Lösung ankündigen und Details per Direktnachricht klären.",
            "Nicht reagieren, das beruhigt sich von selbst.",
            "Dem Kunden öffentlich erklären, dass er selbst schuld ist."
          ],
          answer: 1,
          why: "Öffentlich Verantwortung zeigen und privat lösen. So sehen alle Mitlesenden, dass Probleme ernst genommen werden."
        },
        {
          q: "Warum ist das Löschen berechtigter Kritik riskant?",
          options: [
            "Die Plattform sperrt dafür den Account.",
            "Gelöschte Kritik wird oft per Screenshot geteilt und verschlimmert die Situation.",
            "Löschen kostet Gebühren.",
            "Es ist nicht riskant, sondern Standard."
          ],
          answer: 1,
          why: "Der Streisand-Effekt: Der Versuch, etwas zu verbergen, lenkt erst recht Aufmerksamkeit darauf."
        },
        {
          q: "Woran erkennst du einen Troll im Unterschied zu einem Kritiker?",
          options: [
            "Trolle schreiben immer in Großbuchstaben.",
            "Kritiker nennen ein konkretes Problem, Trolle wollen provozieren ohne Interesse an einer Lösung.",
            "Trolle haben kein Profilbild.",
            "Es gibt keinen Unterschied."
          ],
          answer: 1,
          why: "Konkrete, sachliche Kritik verdient eine echte Antwort. Reine Provokation bekommt eine kurze Grenze oder keine Reaktion."
        },
        {
          q: "Was ist der wichtigste erste Schritt in einer Social-Media-Krise?",
          options: [
            "Alle Kommentare deaktivieren.",
            "Abwarten, bis man alle Fakten kennt, auch wenn das Tage dauert.",
            "Schnell ein kurzes, ehrliches Statement geben und ankündigen, wann eine ausführliche Antwort folgt.",
            "Einen Anwalt alle Kommentare beantworten lassen."
          ],
          answer: 2,
          why: "In Krisen zählt Tempo. Ein kurzes ehrliches erstes Statement nimmt Druck raus und kauft Zeit für die interne Klärung."
        },
        {
          q: "Warum lohnt es sich, Kommentare in der ersten Stunde nach dem Posten zu beantworten?",
          options: [
            "Nur dann werden Kommentare überhaupt angezeigt.",
            "Antworten erzeugen Gespräche, die der Algorithmus als positives Signal wertet, und die Community fühlt sich gesehen.",
            "Danach ist das Antworten kostenpflichtig.",
            "Es lohnt sich nicht, Kommentare beantworten sich selbst."
          ],
          answer: 1,
          why: "Schnelle Antworten verlängern Gespräche und zeigen Wertschätzung. Beides stärkt Reichweite und Bindung."
        },
        {
          q: "Was sollte eine Netiquette enthalten?",
          options: [
            "Die Preisliste des Unternehmens.",
            "Klare Regeln für den Umgang miteinander und welche Inhalte gelöscht werden, etwa Beleidigungen oder Spam.",
            "Die Lebensläufe des Teams.",
            "Eine Liste der blockierten Nutzer."
          ],
          answer: 1,
          why: "Eine Netiquette macht Moderation transparent und nachvollziehbar. Wer gegen klare Regeln verstößt, kann sich nicht über Löschung beschweren."
        }
      ]
    },
    {
      id: "m6",
      number: 6,
      title: "Paid Social & Anzeigen",
      short: "Anzeigen",
      minutes: 12,
      teaser: "Wenn organische Reichweite nicht reicht: Kampagnenziele, Targeting, Budget und die wichtigsten Kennzahlen.",
      intro: [
        "Organische Reichweite ist begrenzt. Bezahlte Anzeigen (Paid Social) erlauben dir, gezielt Menschen zu erreichen, die dir noch nicht folgen, und messbar auf ein Ziel hinzuarbeiten: Webseitenbesuche, Anmeldungen, Käufe.",
        "Die großen Werbesysteme (Meta Ads für Facebook und Instagram, TikTok Ads, LinkedIn Ads) funktionieren ähnlich: Du wählst ein Ziel, definierst eine Zielgruppe, legst Budget und Laufzeit fest und lieferst Creatives. Das System spielt dann aus und optimiert auf dein Ziel."
      ],
      keypoints: [
        "<b>Kampagnenziele im Funnel:</b> Awareness (Bekanntheit), Consideration (Interesse, Traffic, Video-Views), Conversion (Kauf, Lead). Das Ziel bestimmt, auf wen das System optimiert.",
        "<b>Targeting:</b> Demografie (Alter, Ort), Interessen und Verhalten, Custom Audiences (eigene Kundenlisten, Webseitenbesucher), Lookalike Audiences (ähnliche Menschen wie deine Kunden).",
        "<b>Retargeting:</b> Menschen, die deine Seite besucht oder ein Video gesehen haben, erneut ansprechen. Meist die günstigsten Conversions.",
        "<b>CPM:</b> Kosten pro 1.000 Impressionen. <b>CPC:</b> Kosten pro Klick. <b>CTR:</b> Klickrate (Klicks geteilt durch Impressionen). <b>CPA:</b> Kosten pro Abschluss. <b>ROAS:</b> Umsatz geteilt durch Werbeausgaben.",
        "<b>A/B-Tests:</b> Immer nur eine Variable ändern (Bild, Text oder Zielgruppe), sonst weißt du nicht, was den Unterschied gemacht hat.",
        "<b>Budget und Lernphase:</b> Werbesysteme brauchen einige Tage und eine Mindestzahl an Ergebnissen (oft etwa 50 pro Woche), um zu optimieren. Ständige Änderungen setzen die Lernphase zurück.",
        "<b>Boosten vs. Werbeanzeigenmanager:</b> 'Beitrag bewerben' ist einfach, aber begrenzt. Der Werbeanzeigenmanager bietet Ziele, Zielgruppen und Platzierungen im Detail.",
        "<b>Tracking:</b> Pixel oder Conversion API auf der Webseite und UTM-Parameter in Links, sonst siehst du nur Klicks, aber keine Ergebnisse."
      ],
      examples: [
        {
          title: "Rechenbeispiel Kennzahlen",
          mock: "Kampagne: Online-Kurs für Fotografie, Laufzeit 2 Wochen\nAusgaben: 500 €\nImpressionen: 100.000  → CPM = 500 € / 100 × 1.000 = 5,00 €\nKlicks: 2.000       → CTR = 2.000 / 100.000 = 2,0 %\n                      CPC = 500 € / 2.000 = 0,25 €\nKäufe: 20 à 79 €    → CPA = 500 € / 20 = 25,00 €\n                      Umsatz = 1.580 €\n                      ROAS = 1.580 € / 500 € = 3,16",
          takeaway: "Ein ROAS von 3,16 heißt: Jeder Werbe-Euro bringt 3,16 Euro Umsatz. Ob das profitabel ist, hängt von deiner Marge ab."
        },
        {
          title: "A/B-Test richtig aufgesetzt",
          compare: {
            bad: { label: "Unsauber", text: "Anzeige A: Foto, Text \"Jetzt buchen\", Zielgruppe Frauen 25 bis 34. Anzeige B: Video, Text \"Nur noch 3 Plätze\", Zielgruppe Männer 35 bis 44. B gewinnt. Aber warum? Video, Text oder Zielgruppe?" },
            good: { label: "Sauber", text: "Anzeige A und B: gleiche Zielgruppe, gleicher Text, gleiches Budget. Einziger Unterschied: A hat ein Foto, B ein Video. Nach 7 Tagen hat B eine 40 Prozent höhere Klickrate. Ergebnis: Video funktioniert für diese Zielgruppe besser." }
          },
          takeaway: "Eine Variable pro Test. Sonst ist das Ergebnis nicht interpretierbar."
        },
        {
          title: "Funnel einer Möbelmarke",
          body: "Stufe 1 (Awareness): Reels mit Einrichtungstipps an eine Interessen-Zielgruppe, Ziel Video-Views, günstiger CPM. Stufe 2 (Consideration): Wer 50 Prozent eines Videos gesehen hat, bekommt eine Carousel-Anzeige mit Produkten und Link zum Shop. Stufe 3 (Conversion): Wer im Shop war, aber nicht gekauft hat, bekommt eine Anzeige mit Bewertungen und kostenlosem Versand.",
          takeaway: "Kalte Zielgruppen kaufen selten sofort. Ein Funnel wärmt sie Schritt für Schritt auf."
        }
      ],
      quiz: [
        {
          q: "Eine Kampagne kostet 400 Euro und erzielt 80.000 Impressionen. Wie hoch ist der CPM?",
          options: ["0,50 €", "5,00 €", "50,00 €", "200,00 €"],
          answer: 1,
          why: "CPM sind die Kosten pro 1.000 Impressionen: 400 € geteilt durch 80 (Tausender) ergibt 5,00 €."
        },
        {
          q: "Was ist eine Lookalike Audience?",
          options: [
            "Menschen, die deinem Profilbild ähnlich sehen.",
            "Eine vom Werbesystem erstellte Zielgruppe aus Menschen, die deinen bestehenden Kunden ähneln.",
            "Alle Follower deiner Konkurrenz.",
            "Nutzer, die deine Anzeige bereits geklickt haben."
          ],
          answer: 1,
          why: "Lookalike Audiences nutzen eine Quellgruppe (etwa Käufer) und finden statistisch ähnliche Menschen. Gut, um neue Kunden zu erreichen."
        },
        {
          q: "Was bedeutet ein ROAS von 4?",
          options: [
            "Die Anzeige wurde viermal geschaltet.",
            "Vier Prozent der Nutzer haben geklickt.",
            "Jeder investierte Werbe-Euro hat vier Euro Umsatz gebracht.",
            "Die Kampagne hat vier Tage gedauert."
          ],
          answer: 2,
          why: "ROAS (Return on Ad Spend) ist Umsatz geteilt durch Werbeausgaben. Ein ROAS von 4 heißt 4 Euro Umsatz pro Werbe-Euro."
        },
        {
          q: "Du willst testen, ob ein Video oder ein Foto in deiner Anzeige besser funktioniert. Wie setzt du den Test korrekt auf?",
          options: [
            "Video an Frauen, Foto an Männer ausspielen.",
            "Beide Varianten identisch in Text, Zielgruppe und Budget, nur das Medium unterscheidet sich.",
            "Erst eine Woche Video, dann eine Woche Foto mit anderem Text.",
            "Das Video mit doppeltem Budget laufen lassen."
          ],
          answer: 1,
          why: "Nur wenn sich genau eine Variable unterscheidet, lässt sich das Ergebnis eindeutig auf sie zurückführen."
        },
        {
          q: "Was ist Retargeting?",
          options: [
            "Das erneute Ansprechen von Menschen, die bereits mit dir interagiert haben, etwa Webseitenbesucher.",
            "Das Ändern der Zielgruppe nach jedem Tag.",
            "Das Löschen und Neuanlegen einer Kampagne.",
            "Werbung ausschließlich an bestehende Follower."
          ],
          answer: 0,
          why: "Retargeting erreicht warme Zielgruppen, die dich schon kennen. Diese konvertieren meist deutlich günstiger als kalte Zielgruppen."
        },
        {
          q: "Warum solltest du eine laufende Kampagne nicht täglich umstellen?",
          options: [
            "Jede Änderung kostet eine Gebühr.",
            "Das Werbesystem braucht eine Lernphase mit stabilen Einstellungen, um optimieren zu können.",
            "Änderungen sind nur montags erlaubt.",
            "Es gibt keinen Grund, tägliche Änderungen sind empfehlenswert."
          ],
          answer: 1,
          why: "Jede größere Änderung setzt die Lernphase zurück. Das System braucht Daten und Zeit, um die richtigen Menschen zu finden."
        }
      ]
    },
    {
      id: "m7",
      number: 7,
      title: "Analytics & KPIs",
      short: "Analytics",
      minutes: 10,
      teaser: "Reichweite, Impressionen, Engagement-Rate: Welche Zahlen zählen und welche nur gut aussehen.",
      intro: [
        "Jede Plattform liefert kostenlose Statistiken (Insights). Die Kunst liegt nicht darin, Zahlen zu sammeln, sondern die richtigen auszuwählen. Welche KPI (Key Performance Indicator) relevant ist, hängt vom Ziel aus Modul 2 ab.",
        "Eine Zahl, die beeindruckend aussieht, aber nichts über den Erfolg aussagt, nennt man Vanity Metric. Follower-Zahlen sind das klassische Beispiel: 50.000 Follower, von denen niemand kauft oder kommentiert, sind weniger wert als 2.000 aktive."
      ],
      keypoints: [
        "<b>Reichweite vs. Impressionen:</b> Reichweite zählt Personen, Impressionen zählen Anzeigen. Eine Person, die den Post dreimal sieht, ist 1 Reichweite und 3 Impressionen.",
        "<b>Engagement-Rate:</b> Interaktionen (Likes, Kommentare, Shares, Saves) geteilt durch Reichweite (oder Follower), mal 100. Vergleichbar über Posts und Accounts hinweg.",
        "<b>Klickrate (CTR) und Link-Klicks:</b> Wie viele Menschen folgen deinem Link? Wichtig bei Traffic-Zielen.",
        "<b>Conversion:</b> Die gewünschte Handlung (Kauf, Anmeldung, Download). Die Zahl, die am Ende zählt, wenn es ums Geschäft geht.",
        "<b>Follower-Wachstum netto:</b> Neue Follower minus Entfolgungen. Ein Spike mit vielen Entfolgungen danach ist ein Warnsignal.",
        "<b>Vanity Metrics:</b> Follower, Likes und Impressionen allein sagen wenig. Setze sie immer ins Verhältnis zu deinem Ziel.",
        "<b>UTM-Parameter:</b> Anhängsel an Links (utm_source, utm_medium, utm_campaign), damit du in der Webanalyse siehst, welcher Post den Traffic gebracht hat.",
        "<b>Reporting-Rhythmus:</b> Wöchentlich kurz prüfen, monatlich auswerten, quartalsweise Strategie anpassen. Einzelne Posts nicht überbewerten, Trends anschauen."
      ],
      examples: [
        {
          title: "Engagement-Rate ausrechnen",
          mock: "Post: Carousel \"5 Fehler beim Hausverkauf\"\nReichweite: 5.000 Personen\nLikes: 180, Kommentare: 25, Shares: 15, Saves: 30\nInteraktionen gesamt: 250\n\nEngagement-Rate = 250 / 5.000 × 100 = 5,0 %\n\nZum Vergleich: Ein Foto vom Bürogebäude mit 4.800 Reichweite und 60 Interaktionen hat 1,25 %.",
          takeaway: "Die Rate macht Posts mit unterschiedlicher Reichweite vergleichbar. Hier hat das Carousel viermal so gut funktioniert."
        },
        {
          title: "Vanity Metric entlarvt",
          compare: {
            bad: { label: "Sieht gut aus", text: "Account A: 48.000 Follower, im Schnitt 150 Likes pro Post, kaum Kommentare, 12 Link-Klicks pro Monat. Engagement-Rate unter 0,4 Prozent. Viele Follower stammen aus einem Gewinnspiel vor zwei Jahren." },
            good: { label: "Funktioniert", text: "Account B: 2.300 Follower, 90 Likes und 20 Kommentare pro Post, 400 Link-Klicks pro Monat, 15 Anfragen über das Kontaktformular. Engagement-Rate über 4 Prozent." }
          },
          takeaway: "Account B erzeugt Geschäft, Account A erzeugt eine Zahl. Bewerte nach dem Ziel, nicht nach der Größe."
        },
        {
          title: "Welcher Post hat den Traffic gebracht?",
          body: "Ein Verlag postet denselben Link zu einem neuen Buch auf Instagram, LinkedIn und im Newsletter. In der Webanalyse steht nur 'Direkt / Sonstige'. Nach dem Umstieg auf Links mit UTM-Parametern (utm_source=instagram, utm_medium=social, utm_campaign=buch-herbst) zeigt sich: 70 Prozent der Käufe kamen über LinkedIn, obwohl Instagram viel mehr Klicks hatte.",
          takeaway: "Ohne Tracking optimierst du blind. Klicks sind nicht Käufe."
        }
      ],
      quiz: [
        {
          q: "Ein Beitrag wurde 12.000 Mal angezeigt und von 8.000 verschiedenen Personen gesehen. Was stimmt?",
          options: [
            "Reichweite 12.000, Impressionen 8.000",
            "Reichweite 8.000, Impressionen 12.000",
            "Reichweite und Impressionen sind beide 12.000",
            "Reichweite 4.000, Impressionen 8.000"
          ],
          answer: 1,
          why: "Reichweite zählt einzelne Personen (8.000), Impressionen zählen alle Anzeigen inklusive Wiederholungen (12.000)."
        },
        {
          q: "Ein Post erreicht 4.000 Personen und bekommt 120 Likes, 20 Kommentare, 10 Shares und 10 Saves. Wie hoch ist die Engagement-Rate bezogen auf die Reichweite?",
          options: ["1,6 %", "3,0 %", "4,0 %", "16 %"],
          answer: 2,
          why: "Interaktionen gesamt: 160. 160 geteilt durch 4.000 mal 100 ergibt 4,0 Prozent."
        },
        {
          q: "Was ist eine Vanity Metric?",
          options: [
            "Eine Kennzahl, die beeindruckend aussieht, aber wenig über den tatsächlichen Erfolg aussagt.",
            "Eine Kennzahl, die nur für Beauty-Accounts gilt.",
            "Die wichtigste Kennzahl im Reporting.",
            "Eine Kennzahl aus bezahlten Anzeigen."
          ],
          answer: 0,
          why: "Follower-Zahlen oder Likes ohne Bezug zum Ziel sind typische Vanity Metrics. Sie schmeicheln, aber steuern nicht."
        },
        {
          q: "Wozu dienen UTM-Parameter?",
          options: [
            "Sie verkürzen Links.",
            "Sie machen in der Webanalyse sichtbar, aus welcher Quelle und Kampagne ein Besucher kam.",
            "Sie erhöhen die Reichweite eines Posts.",
            "Sie verschlüsseln den Link."
          ],
          answer: 1,
          why: "UTM-Parameter sind Anhängsel am Link, die Quelle, Medium und Kampagne kennzeichnen. So siehst du, welcher Post Ergebnisse bringt."
        },
        {
          q: "Dein Ziel ist es, Anmeldungen für einen Newsletter zu gewinnen. Welche Kennzahl ist am wichtigsten?",
          options: [
            "Anzahl der Likes",
            "Anzahl der Follower",
            "Anzahl der Newsletter-Anmeldungen über Social-Media-Links",
            "Anzahl der Impressionen"
          ],
          answer: 2,
          why: "Die KPI folgt dem Ziel. Bei einem Conversion-Ziel zählt die Conversion, alles andere sind Hilfsgrößen."
        },
        {
          q: "Wie oft solltest du deine Strategie auf Basis der Zahlen grundlegend anpassen?",
          options: [
            "Nach jedem einzelnen Post.",
            "Täglich.",
            "Etwa quartalsweise, nach Auswertung von Trends über mehrere Wochen.",
            "Nie, die Strategie steht fest."
          ],
          answer: 2,
          why: "Einzelne Posts schwanken stark. Strategische Entscheidungen brauchen Trends über Wochen, nicht Tagesdaten."
        }
      ]
    },
    {
      id: "m8",
      number: 8,
      title: "Recht, Ethik & Sicherheit",
      short: "Recht",
      minutes: 12,
      teaser: "Werbekennzeichnung, Urheberrecht, Datenschutz und Account-Sicherheit: Was du wissen musst, um keine Abmahnung zu riskieren.",
      intro: [
        "Wer geschäftlich postet, bewegt sich in einem rechtlichen Rahmen. Die häufigsten Fehler: fehlende Werbekennzeichnung, fremde Musik oder Bilder ohne Lizenz, Fotos von Personen ohne Einwilligung und fehlendes Impressum. Jeder dieser Fehler kann zu Abmahnungen führen.",
        "Dieses Modul gibt eine Orientierung für Deutschland. Es ersetzt keine Rechtsberatung. Im Zweifel fragst du eine Anwältin oder einen Anwalt für Medienrecht."
      ],
      keypoints: [
        "<b>Werbekennzeichnung:</b> Bekommst du Geld, Produkte oder andere Vorteile für einen Beitrag, muss er klar als Werbung erkennbar sein: 'Werbung' oder 'Anzeige' am Anfang, nicht versteckt zwischen Hashtags. Plattform-Funktionen wie 'Bezahlte Partnerschaft' ergänzen das.",
        "<b>Urheberrecht:</b> Musik, Fotos, Videos und Texte anderer darfst du nur mit Lizenz nutzen. Plattform-Musikbibliotheken sind für private Accounts gedacht, Business-Accounts haben oft nur eingeschränkte Auswahl. Memes und Screenshots sind nicht automatisch frei.",
        "<b>Recht am eigenen Bild:</b> Erkennbare Personen brauchen eine Einwilligung, bevor du sie postest. Das gilt für Kunden, Gäste und auch Mitarbeiter. Am besten schriftlich.",
        "<b>Impressumspflicht:</b> Geschäftliche Profile brauchen ein leicht erreichbares Impressum, etwa per Link in der Bio. Das gilt auch für Influencer.",
        "<b>Datenschutz (DSGVO):</b> Bei Gewinnspielen, Kontaktformularen und Pixel-Tracking brauchst du eine Datenschutzerklärung und eine Rechtsgrundlage. Gewinnspiele brauchen außerdem Teilnahmebedingungen und müssen die Plattformregeln beachten.",
        "<b>Marken und Wettbewerb:</b> Fremde Marken nicht als Hashtag für eigene Produkte missbrauchen, keine irreführenden Aussagen ('Nummer 1', 'klinisch getestet' ohne Beleg).",
        "<b>KI-Inhalte:</b> Viele Plattformen verlangen eine Kennzeichnung von KI-generierten realistischen Bildern und Videos. Transparenz schützt vor Vertrauensverlust.",
        "<b>Account-Sicherheit:</b> Zwei-Faktor-Authentifizierung aktivieren, starke eigene Passwörter pro Plattform, Zugriffsrechte über Business-Tools statt Passwort-Weitergabe, ausgeschiedenen Mitarbeitern Rechte entziehen."
      ],
      examples: [
        {
          title: "Gratis-Produkt, trotzdem Werbung",
          body: "Eine Food-Creatorin bekommt von einem Hersteller ein Set Gewürze geschenkt, ohne Bezahlung und ohne Vertrag. Sie postet ein Rezept damit und markiert die Marke. Auch ohne Geld liegt ein geldwerter Vorteil vor. Der Beitrag muss als Werbung gekennzeichnet werden.",
          compare: {
            bad: { label: "Unzureichend", text: "Kennzeichnung nur als #ad ganz am Ende zwischen 20 anderen Hashtags, auf Deutsch sprechende Zielgruppe." },
            good: { label: "Korrekt", text: "\"Werbung\" als erstes Wort der Caption, zusätzlich die Funktion \"Bezahlte Partnerschaft mit [Marke]\" aktiviert." }
          },
          takeaway: "Im Zweifel kennzeichnen. Eine überflüssige Kennzeichnung schadet nie, eine fehlende kann teuer werden."
        },
        {
          title: "Foto aus dem Restaurant",
          body: "Ein Restaurant fotografiert den vollen Gastraum am Samstagabend und postet das Bild. Mehrere Gäste sind deutlich erkennbar. Eine Gästin verlangt die Löschung und droht mit Anwalt. Sie ist im Recht: Erkennbare Personen brauchen eine Einwilligung. Besser: Gäste vorher fragen, Fotos aus einer Perspektive machen, in der Gesichter nicht erkennbar sind, oder Mitarbeiter und Freunde mit schriftlicher Einwilligung fotografieren.",
          takeaway: "Erkennbar heißt einwilligungspflichtig. Das gilt auch für Hintergrundpersonen."
        },
        {
          title: "Gewinnspiel sauber aufgesetzt",
          mock: "Checkliste Gewinnspiel auf Instagram:\n☐ Teilnahmebedingungen verlinkt (Zeitraum, Gewinn, Teilnahmeberechtigte, Auslosung)\n☐ Datenschutzhinweis: welche Daten wofür verarbeitet werden\n☐ Hinweis: \"Dieses Gewinnspiel steht in keiner Verbindung zu Instagram\"\n☐ Keine Teilnahmebedingung, die gegen Plattformregeln verstößt (z. B. \"markiere dich selbst auf fremden Fotos\")\n☐ Gewinner transparent ermitteln und benachrichtigen\n☐ Falls Kooperation: Werbekennzeichnung",
          takeaway: "Gewinnspiele sind beliebt, aber ohne Bedingungen und Datenschutzhinweis ein Abmahnrisiko."
        }
      ],
      quiz: [
        {
          q: "Eine Influencerin bekommt ein Produkt kostenlos zugeschickt und zeigt es in einem Reel. Muss sie den Beitrag kennzeichnen?",
          options: [
            "Nein, sie wurde ja nicht bezahlt.",
            "Ja, ein kostenloses Produkt ist ein geldwerter Vorteil, der Beitrag ist als Werbung zu kennzeichnen.",
            "Nur, wenn das Produkt mehr als 100 Euro wert ist.",
            "Nur bei mehr als 10.000 Followern."
          ],
          answer: 1,
          why: "Jede Gegenleistung, auch Sachleistungen, macht den Beitrag zu Werbung. Die Kennzeichnung muss klar und am Anfang stehen."
        },
        {
          q: "Wo sollte die Werbekennzeichnung stehen?",
          options: [
            "Versteckt zwischen den Hashtags am Ende.",
            "Nur in den Kommentaren.",
            "Deutlich erkennbar am Anfang des Beitrags, zum Beispiel 'Werbung' als erstes Wort.",
            "Gar nicht, die Markierung der Marke reicht."
          ],
          answer: 2,
          why: "Die Kennzeichnung muss auf den ersten Blick erkennbar sein. Ein verstecktes #ad gilt nicht als ausreichend."
        },
        {
          q: "Du willst einen aktuellen Chart-Hit unter das Reel deines Unternehmens legen. Was gilt?",
          options: [
            "Alles, was in der Musikbibliothek steht, darf jeder frei nutzen.",
            "Für geschäftliche Accounts ist kommerzielle Musik meist nicht lizenziert, du brauchst lizenzfreie Musik oder eine Lizenz.",
            "Musik ist auf Social Media immer frei.",
            "Nur die ersten 15 Sekunden sind frei."
          ],
          answer: 1,
          why: "Plattform-Bibliotheken richten sich an private Nutzer. Business-Accounts nutzen lizenzfreie Bibliotheken oder erwerben Lizenzen."
        },
        {
          q: "Du postest ein Foto von einem Event, auf dem drei Gäste klar erkennbar sind. Was brauchst du?",
          options: [
            "Nichts, auf Events darf man fotografieren.",
            "Die Einwilligung der erkennbaren Personen.",
            "Nur einen Hinweis in der Caption.",
            "Eine Genehmigung der Plattform."
          ],
          answer: 1,
          why: "Das Recht am eigenen Bild schützt erkennbare Personen. Ohne Einwilligung drohen Löschforderung und Schadensersatz."
        },
        {
          q: "Was braucht ein geschäftlich genutztes Social-Media-Profil in Deutschland?",
          options: [
            "Ein leicht erreichbares Impressum, zum Beispiel per Link in der Bio.",
            "Eine Gewerbeanmeldung pro Plattform.",
            "Eine Mindestanzahl an Followern.",
            "Nichts, Impressumspflicht gilt nur für Webseiten."
          ],
          answer: 0,
          why: "Die Impressumspflicht gilt für geschäftsmäßige Online-Angebote, also auch für Social-Media-Profile."
        },
        {
          q: "Welche Maßnahme schützt deinen Account am wirksamsten vor Übernahme?",
          options: [
            "Ein kurzes, leicht merkbares Passwort für alle Plattformen.",
            "Zwei-Faktor-Authentifizierung und eigene starke Passwörter pro Plattform.",
            "Das Passwort per Chat an alle Teammitglieder schicken.",
            "Den Account auf privat stellen."
          ],
          answer: 1,
          why: "Zwei-Faktor-Authentifizierung stoppt die meisten Übernahmen, selbst wenn das Passwort geleakt wurde. Zugriffe für Teams laufen besser über Rollen in Business-Tools."
        }
      ]
    }
  ],

  glossary: [
    { term: "Algorithmus", def: "Das Regelwerk, mit dem eine Plattform entscheidet, welche Beiträge wem in welcher Reihenfolge gezeigt werden." },
    { term: "Awareness", def: "Erste Stufe im Funnel: Menschen lernen deine Marke überhaupt kennen." },
    { term: "Call to Action (CTA)", def: "Konkrete Handlungsaufforderung am Ende eines Beitrags, zum Beispiel 'Speichern' oder 'Link in Bio'." },
    { term: "Carousel", def: "Beitrag mit mehreren Bildern oder Folien zum Durchwischen. Gut für Wissen und Anleitungen." },
    { term: "Conversion", def: "Die gewünschte Zielhandlung: Kauf, Anmeldung, Download, Anfrage." },
    { term: "CPC / CPM / CPA", def: "Kosten pro Klick, pro 1.000 Impressionen, pro Abschluss. Die Grundkennzahlen bezahlter Werbung." },
    { term: "CTR (Klickrate)", def: "Klicks geteilt durch Impressionen. Zeigt, wie gut Anzeige oder Beitrag zum Klicken anregt." },
    { term: "Custom Audience", def: "Zielgruppe aus eigenen Daten, zum Beispiel Kundenliste oder Webseitenbesucher." },
    { term: "Engagement-Rate", def: "Interaktionen geteilt durch Reichweite oder Follower, mal 100. Macht Beiträge vergleichbar." },
    { term: "Feed", def: "Der Hauptstrom an Beiträgen, den Nutzer beim Öffnen der App sehen." },
    { term: "For-You-Page (FYP)", def: "Die personalisierte Startseite auf TikTok, auf der auch Beiträge von Accounts erscheinen, denen man nicht folgt." },
    { term: "Funnel", def: "Stufenmodell vom ersten Kontakt bis zum Kauf: Awareness, Consideration, Conversion." },
    { term: "Hook", def: "Der Einstieg, der in den ersten Sekunden Aufmerksamkeit erzeugt." },
    { term: "Impressionen", def: "Wie oft ein Beitrag angezeigt wurde, Mehrfachansichten mitgezählt." },
    { term: "Insights", def: "Die eingebauten Statistiken einer Plattform für Business- oder Creator-Accounts." },
    { term: "KPI", def: "Key Performance Indicator: die Kennzahl, an der du den Erfolg eines Ziels misst." },
    { term: "Lookalike Audience", def: "Vom Werbesystem gebildete Zielgruppe aus Menschen, die deinen Kunden ähneln." },
    { term: "Netiquette", def: "Veröffentlichte Regeln für den Umgang in deiner Community und für Moderation." },
    { term: "Persona", def: "Halbfiktives Profil einer typischen Zielperson mit Zielen, Problemen und Mediennutzung." },
    { term: "Reel", def: "Kurzvideo im Hochformat auf Instagram oder Facebook, meist 15 bis 90 Sekunden." },
    { term: "Reichweite", def: "Anzahl der einzelnen Personen, die einen Beitrag gesehen haben." },
    { term: "Retargeting", def: "Erneute Ansprache von Menschen, die bereits mit dir interagiert haben." },
    { term: "ROAS", def: "Return on Ad Spend: Umsatz geteilt durch Werbeausgaben." },
    { term: "Shadowban", def: "Vermutete, von der Plattform nicht bestätigte Einschränkung der Reichweite. Oft eine Fehldeutung normaler Schwankungen." },
    { term: "SMART-Ziel", def: "Spezifisch, messbar, attraktiv, realistisch, terminiert." },
    { term: "Story", def: "Vertikaler Beitrag, der nach 24 Stunden verschwindet. Gut für Nähe, Umfragen und Alltag." },
    { term: "Tone of Voice", def: "Die gleichbleibende Art, wie eine Marke spricht." },
    { term: "UGC", def: "User Generated Content: Inhalte, die Nutzer selbst über eine Marke erstellen." },
    { term: "UTM-Parameter", def: "Anhängsel an Links, die Quelle, Medium und Kampagne in der Webanalyse sichtbar machen." },
    { term: "Vanity Metric", def: "Kennzahl, die gut aussieht, aber nichts über das Ziel aussagt, etwa reine Follower-Zahlen." },
    { term: "Watchtime", def: "Wie lange und zu welchem Anteil ein Video angeschaut wird. Wichtigstes Signal bei Kurzvideos." }
  ]
};
