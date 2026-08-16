registerPack("a1", {
  exam: {
  "lesen": [
    {
      "id": "lesen-1",
      "title": "A1 Lesen 1 — Nachrichten, Anzeigen, Schilder",
      "timeMin": 25,
      "parts": [
        {
          "kind": "tf",
          "instruction": "Lesen Sie die Nachrichten. Sind die Aussagen richtig oder falsch?",
          "items": [
            {
              "text": "Hallo Lisa, hast du am Samstag Zeit? Wir können um 15 Uhr Kaffee trinken. Liebe Grüße, Tom",
              "q": "Tom möchte am Samstag Kaffee trinken.",
              "answer": true
            },
            {
              "text": "Liebe Frau Meier, ich bin krank. Morgen komme ich nicht zum Kurs. Omar",
              "q": "Omar kommt morgen zum Kurs.",
              "answer": false
            },
            {
              "text": "Hallo, die Bäckerei ist heute zu. Wir öffnen morgen um 7 Uhr.",
              "q": "Die Bäckerei öffnet heute um 7 Uhr.",
              "answer": false
            },
            {
              "text": "Anna, der Bus fährt um 8:15 vom Hauptbahnhof. Bis bald, Paul",
              "q": "Der Bus fährt um Viertel nach acht.",
              "answer": true
            },
            {
              "text": "Guten Tag, Ihr Termin beim Arzt ist Dienstag, 10 Uhr.",
              "q": "Der Termin ist am Dienstag.",
              "answer": true
            }
          ]
        },
        {
          "kind": "ads",
          "instruction": "Welche Anzeige passt? Zwei Anzeigen bleiben übrig.",
          "people": [
            {
              "id": "1",
              "text": "Tom sucht ein billiges Mittagessen."
            },
            {
              "id": "2",
              "text": "Mia braucht einen Deutschkurs für Anfänger."
            },
            {
              "id": "3",
              "text": "Omar sucht ein Zimmer in Bahnhofsnähe."
            },
            {
              "id": "4",
              "text": "Sara möchte am Abend schwimmen."
            },
            {
              "id": "5",
              "text": "Ben sucht ein gebrauchtes Fahrrad unter 100 Euro."
            }
          ],
          "ads": [
            {
              "id": "A",
              "text": "Deutsch A1, VHS, Mo+Mi 18 Uhr, Anfänger."
            },
            {
              "id": "B",
              "text": "Mittagstisch 5 €, Kantine Uni, 12–14 Uhr."
            },
            {
              "id": "C",
              "text": "Yoga für Fortgeschrittene, 20 €."
            },
            {
              "id": "D",
              "text": "Zimmer am Bahnhof, 350 €, ab sofort."
            },
            {
              "id": "E",
              "text": "Stadtbad, Bahn 19:30–21:00, Eintritt 4 €."
            },
            {
              "id": "F",
              "text": "Fahrrad 80 €, gebraucht, Abholung Samstag."
            },
            {
              "id": "G",
              "text": "Klavierunterricht, 40 €/Stunde."
            }
          ],
          "answer": {
            "1": "B",
            "2": "A",
            "3": "D",
            "4": "E",
            "5": "F"
          }
        },
        {
          "kind": "signs",
          "instruction": "Lesen Sie die Schilder. Richtig oder falsch?",
          "items": [
            {
              "sign": "Heute geschlossen. Morgen wieder ab 9 Uhr.",
              "q": "Das Geschäft ist heute offen.",
              "answer": false
            },
            {
              "sign": "Rauchen verboten.",
              "q": "Hier darf man nicht rauchen.",
              "answer": true
            },
            {
              "sign": "Eintritt frei.",
              "q": "Man muss bezahlen.",
              "answer": false
            },
            {
              "sign": "Bitte warten.",
              "q": "Man soll hier warten.",
              "answer": true
            },
            {
              "sign": "Sonntag geöffnet 10–16 Uhr.",
              "q": "Am Sonntag ist das Museum zu.",
              "answer": false
            }
          ]
        }
      ]
    },
    {
      "id": "lesen-2",
      "title": "A1 Lesen 2 — Arzt, Bus, Einladung",
      "timeMin": 25,
      "parts": [
        {
          "kind": "tf",
          "instruction": "Lesen Sie die Nachrichten. Richtig oder falsch?",
          "items": [
            {
              "text": "Hallo Ken, die Party ist am Samstag um 20 Uhr bei mir. Nora",
              "q": "Die Party ist am Freitag.",
              "answer": false
            },
            {
              "text": "Der Bus 12 hat 10 Minuten Verspätung.",
              "q": "Der Bus kommt später.",
              "answer": true
            },
            {
              "text": "Bibliothek heute geschlossen.",
              "q": "Man kann heute in der Bibliothek lernen.",
              "answer": false
            },
            {
              "text": "Supermarkt sucht Aushilfe an der Kasse, Abend.",
              "q": "Der Job ist am Abend.",
              "answer": true
            },
            {
              "text": "Arzttermin: Dienstag, 10 Uhr, bitte 10 Minuten früher kommen.",
              "q": "Der Termin ist um zehn Uhr.",
              "answer": true
            }
          ]
        },
        {
          "kind": "ads",
          "instruction": "Welche Anzeige passt? Zwei Anzeigen bleiben übrig.",
          "people": [
            {
              "id": "1",
              "text": "Lena sucht Schwimmen für Anfänger."
            },
            {
              "id": "2",
              "text": "Ben möchte ein gebrauchtes Fahrrad unter 100 Euro."
            },
            {
              "id": "3",
              "text": "Aya braucht einen Supermarkt, der abends lange offen ist."
            },
            {
              "id": "4",
              "text": "Paul sucht Arbeit an der Kasse am Abend."
            },
            {
              "id": "5",
              "text": "Nora möchte am Samstag feiern gehen."
            }
          ],
          "ads": [
            {
              "id": "A",
              "text": "Schwimmkurs Anfänger, Mi 18 Uhr, 6 €."
            },
            {
              "id": "B",
              "text": "Rad 90 €, Abholung heute."
            },
            {
              "id": "C",
              "text": "Markt bis 22 Uhr, auch Sonntag."
            },
            {
              "id": "D",
              "text": "Kasse Abendschicht, 18–22 Uhr, ab sofort."
            },
            {
              "id": "E",
              "text": "Disco Samstag 21 Uhr, Eintritt 8 €."
            },
            {
              "id": "F",
              "text": "Museum montags geschlossen."
            },
            {
              "id": "G",
              "text": "Zahnarzt nur mit Termin."
            }
          ],
          "answer": {
            "1": "A",
            "2": "B",
            "3": "C",
            "4": "D",
            "5": "E"
          }
        },
        {
          "kind": "signs",
          "instruction": "Schilder. Richtig oder falsch?",
          "items": [
            {
              "sign": "Parken verboten.",
              "q": "Hier darf man parken.",
              "answer": false
            },
            {
              "sign": "Bitte warten. Nächste Nummer: 12.",
              "q": "Man soll warten.",
              "answer": true
            },
            {
              "sign": "WLAN frei für Gäste.",
              "q": "Das Internet kostet extra.",
              "answer": false
            },
            {
              "sign": "Nur Personal.",
              "q": "Kunden dürfen hier nicht rein.",
              "answer": true
            },
            {
              "sign": "Geöffnet bis 20 Uhr.",
              "q": "Um 21 Uhr ist noch offen.",
              "answer": false
            }
          ]
        }
      ]
    },
    {
      "id": "lesen-3",
      "title": "A1 Lesen 3 — Stadt, Kurs, Wohnung",
      "timeMin": 25,
      "parts": [
        {
          "kind": "tf",
          "instruction": "Kurze Texte. Richtig oder falsch?",
          "items": [
            {
              "text": "Hallo Sam, der A1-Kurs beginnt am Montag um 18 Uhr, Raum 4. VHS",
              "q": "Der Kurs ist am Montag Abend.",
              "answer": true
            },
            {
              "text": "Zimmer frei ab 1. Mai, Nähe Bahnhof, 380 €.",
              "q": "Das Zimmer ist am Flughafen.",
              "answer": false
            },
            {
              "text": "Mittagstisch heute 6,50 €, inkl. Wasser.",
              "q": "Das Mittagessen kostet unter 7 Euro.",
              "answer": true
            },
            {
              "text": "Katze entlaufen, grau, Name Mimi, Tel. 0151 222.",
              "q": "Jemand sucht eine Katze.",
              "answer": true
            },
            {
              "text": "Sonntag geschlossen.",
              "q": "Am Sonntag kann man einkaufen.",
              "answer": false
            }
          ]
        },
        {
          "kind": "ads",
          "instruction": "Welche Anzeige passt? Zwei bleiben übrig.",
          "people": [
            {
              "id": "1",
              "text": "Sam sucht einen A1-Kurs."
            },
            {
              "id": "2",
              "text": "Yara möchte zu Mittag essen, maximal 7 Euro."
            },
            {
              "id": "3",
              "text": "Paul sucht ein Zimmer am Bahnhof."
            },
            {
              "id": "4",
              "text": "Ana braucht kostenloses WLAN."
            },
            {
              "id": "5",
              "text": "Leo möchte bis 20 Uhr einkaufen."
            }
          ],
          "ads": [
            {
              "id": "A",
              "text": "Deutsch A1, Di+Do 18 Uhr, VHS."
            },
            {
              "id": "B",
              "text": "Kantinenessen 6 €, 12–14 Uhr."
            },
            {
              "id": "C",
              "text": "Zimmer Bahnhof, 380 €, Küche mitbenutzen."
            },
            {
              "id": "D",
              "text": "Café: WLAN frei, Kaffee 2,50 €."
            },
            {
              "id": "E",
              "text": "Supermarkt täglich 7–22 Uhr."
            },
            {
              "id": "F",
              "text": "Hunde verboten im Park."
            },
            {
              "id": "G",
              "text": "Klavier zu verkaufen, 400 €."
            }
          ],
          "answer": {
            "1": "A",
            "2": "B",
            "3": "C",
            "4": "D",
            "5": "E"
          }
        },
        {
          "kind": "signs",
          "instruction": "Schilder. Richtig oder falsch?",
          "items": [
            {
              "sign": "Ausfahrt freihalten.",
              "q": "Man darf hier nicht parken.",
              "answer": true
            },
            {
              "sign": "Kinderwagen: bitte Aufzug benutzen.",
              "q": "Mit Kinderwagen soll man die Treppe nehmen.",
              "answer": false
            },
            {
              "sign": "Fundbüro 1. Stock.",
              "q": "Verlorene Sachen sind im ersten Stock.",
              "answer": true
            },
            {
              "sign": "Kartenzahlung ab 10 €.",
              "q": "Mit 5 Euro kann man mit Karte zahlen.",
              "answer": false
            },
            {
              "sign": "Ruhe bitte. Prüfung.",
              "q": "Hier ist eine Prüfung. Man soll leise sein.",
              "answer": true
            }
          ]
        }
      ]
    },
    {
      "id": "lesen-4",
      "title": "A1 Lesen 4 — Einkaufen, Gesundheit, Freizeit",
      "timeMin": 25,
      "parts": [
        {
          "kind": "tf",
          "instruction": "E-Mails und Zettel. Richtig oder falsch?",
          "items": [
            {
              "text": "Liebe Mira, das Kino beginnt um 19:30. Ich warte vor der Tür. Ali",
              "q": "Der Film beginnt um halb acht.",
              "answer": false
            },
            {
              "text": "Apotheke Notdienst heute Nacht.",
              "q": "Die Apotheke hat heute Nacht auf.",
              "answer": true
            },
            {
              "text": "Kurs fällt aus. Nächste Stunde: Donnerstag.",
              "q": "Heute ist Deutschunterricht.",
              "answer": false
            },
            {
              "text": "Markt: Tomaten 1,50 € / kg.",
              "q": "Die Tomaten kosten eineinhalb Euro pro Kilo.",
              "answer": true
            },
            {
              "text": "Schwimmbad: montags geschlossen.",
              "q": "Am Montag kann man schwimmen.",
              "answer": false
            }
          ]
        },
        {
          "kind": "ads",
          "instruction": "Welche Anzeige passt? Zwei bleiben übrig.",
          "people": [
            {
              "id": "1",
              "text": "Mia darf hier nicht parken und sucht einen Parkplatz."
            },
            {
              "id": "2",
              "text": "Omar möchte abends an der Kasse jobben."
            },
            {
              "id": "3",
              "text": "Ken braucht Infos, wenn der Bus Verspätung hat."
            },
            {
              "id": "4",
              "text": "Frau Klein sucht den Notdienst der Apotheke."
            },
            {
              "id": "5",
              "text": "Leila möchte am Abend ins Kino."
            }
          ],
          "ads": [
            {
              "id": "A",
              "text": "Parkhaus Bahnhof, 1 € / Stunde, bis 23 Uhr."
            },
            {
              "id": "B",
              "text": "Supermarkt: Kassierer/in Abend, 18–22 Uhr."
            },
            {
              "id": "C",
              "text": "Fahrplanänderungen: App oder Lautsprecher am Steig."
            },
            {
              "id": "D",
              "text": "Notdienst-Apotheke: Liste an der Tür / 0800-Notdienst."
            },
            {
              "id": "E",
              "text": "Kino: Vorstellungen 17:00, 19:30, 22:00."
            },
            {
              "id": "F",
              "text": "Hundesalon, nur mit Termin."
            },
            {
              "id": "G",
              "text": "Klavierkonzert 80 €."
            }
          ],
          "answer": {
            "1": "A",
            "2": "B",
            "3": "C",
            "4": "D",
            "5": "E"
          }
        },
        {
          "kind": "signs",
          "instruction": "Schilder. Richtig oder falsch?",
          "items": [
            {
              "sign": "Bargeld only / Nur bar.",
              "q": "Man kann mit Karte zahlen.",
              "answer": false
            },
            {
              "sign": "Ziehen / Push — Ziehen.",
              "q": "Man soll die Tür ziehen.",
              "answer": true
            },
            {
              "sign": "WC 2. Stock.",
              "q": "Die Toilette ist im zweiten Stock.",
              "answer": true
            },
            {
              "sign": "Kein Durchgang.",
              "q": "Man darf hier durchgehen.",
              "answer": false
            },
            {
              "sign": "Kinder bis 12 Jahre frei.",
              "q": "Ein Kind von 10 Jahren muss bezahlen.",
              "answer": false
            }
          ]
        }
      ]
    },
    {
      "id": "lesen-5",
      "title": "A1 Lesen 5 — Arbeit, Treffen, Wetter",
      "timeMin": 25,
      "parts": [
        {
          "kind": "tf",
          "instruction": "Nachrichten. Richtig oder falsch?",
          "items": [
            {
              "text": "Hallo, morgen Regen. Das Fußballspiel fällt aus. Trainer",
              "q": "Das Spiel ist morgen.",
              "answer": false
            },
            {
              "text": "Café Sonne: Kaffee und Kuchen 6 €.",
              "q": "Kaffee und Kuchen zusammen kosten 6 Euro.",
              "answer": true
            },
            {
              "text": "Ich warte um 12 Uhr am Eingang vom Museum. Aya",
              "q": "Aya wartet vor dem Museum.",
              "answer": true
            },
            {
              "text": "Deutschkurs: bitte Heft und Stift mitbringen.",
              "q": "Man braucht ein Buch über Geschichte.",
              "answer": false
            },
            {
              "text": "Der Zug nach Köln fährt von Gleis 3.",
              "q": "Der Zug fährt von Gleis drei.",
              "answer": true
            }
          ]
        },
        {
          "kind": "ads",
          "instruction": "Welche Anzeige passt? Zwei bleiben übrig.",
          "people": [
            {
              "id": "1",
              "text": "Omar sucht einen Abendjob an der Kasse."
            },
            {
              "id": "2",
              "text": "Nora möchte am Samstag zu einer Party."
            },
            {
              "id": "3",
              "text": "Ken braucht aktuelle Infos zur Busverspätung."
            },
            {
              "id": "4",
              "text": "Sara sucht ein Café mit Kuchen."
            },
            {
              "id": "5",
              "text": "Luis möchte nach Köln fahren."
            }
          ],
          "ads": [
            {
              "id": "A",
              "text": "Abendkasse Supermarkt, Mo–Fr 17–21 Uhr."
            },
            {
              "id": "B",
              "text": "Geburtstagsparty Samstag 20 Uhr, Café Dach."
            },
            {
              "id": "C",
              "text": "Bus 5: Verspätungen heute auf der Anzeige am Steig."
            },
            {
              "id": "D",
              "text": "Café Sonne, Kuchen täglich, WLAN frei."
            },
            {
              "id": "E",
              "text": "RE nach Köln, Gleis 3, stündlich."
            },
            {
              "id": "F",
              "text": "Klavier zu verschenken, nur Abholung."
            },
            {
              "id": "G",
              "text": "Hundeschule, 90 €."
            }
          ],
          "answer": {
            "1": "A",
            "2": "B",
            "3": "C",
            "4": "D",
            "5": "E"
          }
        },
        {
          "kind": "signs",
          "instruction": "Schilder. Richtig oder falsch?",
          "items": [
            {
              "sign": "Gleisänderung: Zug nach Hamburg jetzt Gleis 7.",
              "q": "Der Zug nach Hamburg fährt von Gleis 7.",
              "answer": true
            },
            {
              "sign": "Nicht betreten. Frisch gestrichen.",
              "q": "Man darf die Bank benutzen.",
              "answer": false
            },
            {
              "sign": "Fundbüro neben der Information.",
              "q": "Verlorene Sachen sind bei der Information / daneben.",
              "answer": true
            },
            {
              "sign": "Pause 13–14 Uhr.",
              "q": "Um 13:30 bekommt man Hilfe an diesem Schalter.",
              "answer": false
            },
            {
              "sign": "Hunde anleinen.",
              "q": "Hunde müssen an der Leine sein.",
              "answer": true
            }
          ]
        }
      ]
    }
  ],
  "sprachbausteine": [
    {
      "id": "sb-1",
      "title": "A1 cloze — introduction",
      "kind": "cloze",
      "text": "Hallo, ich (1) Marta. Ich (2) aus Polen und (3) in München. Ich (4) 22 Jahre alt. Ich (5) Deutsch.",
      "gaps": [
        {
          "options": [
            "heiße",
            "heißen",
            "heißt"
          ],
          "answer": "heiße"
        },
        {
          "options": [
            "komme",
            "kommen",
            "kommst"
          ],
          "answer": "komme"
        },
        {
          "options": [
            "wohne",
            "wohnen",
            "wohnst"
          ],
          "answer": "wohne"
        },
        {
          "options": [
            "bin",
            "habe",
            "ist"
          ],
          "answer": "bin"
        },
        {
          "options": [
            "lerne",
            "lernt",
            "lernen"
          ],
          "answer": "lerne"
        }
      ]
    },
    {
      "id": "sb-2",
      "title": "A1 cloze — café",
      "kind": "cloze",
      "text": "Guten Tag! Ich möchte (1) Kaffee und (2) Wasser. Was (3) das? Die Rechnung (4). Danke (5)!",
      "gaps": [
        {
          "options": [
            "einen",
            "ein",
            "eine"
          ],
          "answer": "einen"
        },
        {
          "options": [
            "ein",
            "eine",
            "einen"
          ],
          "answer": "ein"
        },
        {
          "options": [
            "kostet",
            "kosten",
            "kostest"
          ],
          "answer": "kostet"
        },
        {
          "options": [
            "bitte",
            "bittschön",
            "bitten"
          ],
          "answer": "bitte"
        },
        {
          "options": [
            "schön",
            "schönen",
            "schöner"
          ],
          "answer": "schön"
        }
      ]
    },
    {
      "id": "sb-3",
      "title": "A1 word bank — daily",
      "kind": "bank",
      "bank": [
        "Arbeit",
        "Bus",
        "Frühstück",
        "Pause",
        "Uhr",
        "gehe",
        "trinke",
        "aufe"
      ],
      "text": "Um 7 (1) esse ich (2). Dann (3) ich mit dem (4) zur (5). Um 12 Uhr habe ich (6).",
      "answer": [
        "Uhr",
        "Frühstück",
        "gehe",
        "Bus",
        "Arbeit",
        "Pause"
      ]
    },
    {
      "id": "sb-4",
      "title": "A1 cloze — shopping",
      "kind": "cloze",
      "text": "Ich möchte (1) Apfel und (2) Brot. Was (3) das? Ich (4) bar. (5)!",
      "gaps": [
        {
          "options": [
            "einen",
            "ein",
            "eine"
          ],
          "answer": "einen"
        },
        {
          "options": [
            "ein",
            "eine",
            "einen"
          ],
          "answer": "ein"
        },
        {
          "options": [
            "kostet",
            "kosten",
            "kostest"
          ],
          "answer": "kostet"
        },
        {
          "options": [
            "zahle",
            "zahlen",
            "zahlst"
          ],
          "answer": "zahle"
        },
        {
          "options": [
            "Danke",
            "Danken",
            "Dank"
          ],
          "answer": "Danke"
        }
      ]
    },
    {
      "id": "sb-5",
      "title": "A1 cloze — time",
      "kind": "cloze",
      "text": "Der Kurs beginnt um (1) Uhr. Ich (2) um acht auf. Dann (3) ich. Am (4) habe ich frei. (5) wir uns treffen?",
      "gaps": [
        {
          "options": [
            "neun",
            "neunter",
            "neuns"
          ],
          "answer": "neun"
        },
        {
          "options": [
            "stehe",
            "stehst",
            "steht"
          ],
          "answer": "stehe"
        },
        {
          "options": [
            "esse",
            "isst",
            "essen"
          ],
          "answer": "esse"
        },
        {
          "options": [
            "Sonntag",
            "Sonntags",
            "sonntage"
          ],
          "answer": "Sonntag"
        },
        {
          "options": [
            "Können",
            "Muss",
            "Seid"
          ],
          "answer": "Können"
        }
      ]
    },
    {
      "id": "sb-6",
      "title": "A1 bank — intro",
      "kind": "bank",
      "bank": [
        "heiße",
        "komme",
        "wohne",
        "bin",
        "lerne",
        "Arbeit"
      ],
      "text": "Ich (1) Leila. Ich (2) aus Ägypten. Ich (3) in Köln. Ich (4) 25. Ich (5) Deutsch.",
      "answer": [
        "heiße",
        "komme",
        "wohne",
        "bin",
        "lerne"
      ]
    },
    {
      "id": "sb-7",
      "title": "A1 cloze — café",
      "kind": "cloze",
      "text": "Guten Tag! Einen (1) bitte. Mit (2)? Ja. Die (3) bitte. (4) schön!",
      "gaps": [
        {
          "options": [
            "Kaffee",
            "Kaffees",
            "kaffee"
          ],
          "answer": "Kaffee"
        },
        {
          "options": [
            "Milch",
            "Milchen",
            "milchig"
          ],
          "answer": "Milch"
        },
        {
          "options": [
            "Rechnung",
            "Rechnungen",
            "rechnen"
          ],
          "answer": "Rechnung"
        },
        {
          "options": [
            "Danke",
            "Bitten",
            "Nein"
          ],
          "answer": "Danke"
        }
      ]
    },
    {
      "id": "sb-8",
      "title": "A1 bank — directions",
      "kind": "bank",
      "bank": [
        "links",
        "rechts",
        "Bahnhof",
        "Bus",
        "geradeaus",
        "Wo"
      ],
      "text": "(1) ist der (2)? Gehen Sie (3), dann (4). Nehmen Sie den (5).",
      "answer": [
        "Wo",
        "Bahnhof",
        "geradeaus",
        "links",
        "Bus"
      ]
    }
  ],
  "hoeren": [
    {
      "id": "h-1",
      "title": "A1 Hören 1 — short announcements (once)",
      "once": true,
      "paper": 1,
      "teil": 1,
      "items": [
        {
          "audio": "Der Zug nach Köln fährt von Gleis 3.",
          "statement": "Der Zug fährt von Gleis 5.",
          "answer": false
        },
        {
          "audio": "Das Café ist heute bis 18 Uhr geöffnet.",
          "statement": "Das Café schließt um 18 Uhr.",
          "answer": true
        },
        {
          "audio": "Frau Becker kommt um 10 Uhr, nicht um 9.",
          "statement": "Frau Becker kommt um 9 Uhr.",
          "answer": false
        },
        {
          "audio": "Bitte nehmen Sie einen Termin online.",
          "statement": "Man braucht einen Termin.",
          "answer": true
        },
        {
          "audio": "Der Kurs beginnt am Montag um 17:30.",
          "statement": "Der Kurs ist am Montag Abend.",
          "answer": true
        }
      ]
    },
    {
      "id": "h-2",
      "title": "A1 Hören 2 — dialogue shop",
      "once": false,
      "paper": 1,
      "teil": 2,
      "intro": "In a shop.",
      "audio": "Guten Tag. Ich suche eine Jacke, Größe 38, bitte. Die blaue kostet 40 Euro, die rote 55. Ich nehme die blaue. Zahle ich bar oder mit Karte? Beides ist möglich.",
      "turns": [
        { "role": "announcer", "text": "Guten Tag. Was darf es sein?" },
        { "role": "guest", "text": "Ich suche eine Jacke, Größe 38, bitte." },
        { "role": "announcer", "text": "Die blaue kostet 40 Euro, die rote 55." },
        { "role": "guest", "text": "Ich nehme die blaue. Zahle ich bar oder mit Karte?" },
        { "role": "announcer", "text": "Beides ist möglich." }
      ],
      "items": [
        {
          "statement": "Sie sucht Schuhe.",
          "answer": false
        },
        {
          "statement": "Größe 38.",
          "answer": true
        },
        {
          "statement": "Die blaue Jacke ist billiger.",
          "answer": true
        },
        {
          "statement": "Sie nimmt die rote.",
          "answer": false
        },
        {
          "statement": "Man kann mit Karte zahlen.",
          "answer": true
        }
      ]
    },
    {
      "id": "h-3",
      "title": "A1 Hören 3 — messages",
      "once": false,
      "paper": 1,
      "teil": 3,
      "items": [
        {
          "audio": "Hallo Tim, ich bin 10 Minuten zu spät. Warte bitte im Café.",
          "statement": "Tim soll im Café warten.",
          "answer": true
        },
        {
          "audio": "Die Apotheke hat mittwochs nur bis 13 Uhr auf.",
          "statement": "Mittwochs ist lange geöffnet.",
          "answer": false
        },
        {
          "audio": "Dein Paket ist da. Bitte Ausweis mitbringen.",
          "statement": "Ohne Ausweis kein Paket.",
          "answer": true
        },
        {
          "audio": "Morgen fällt der Deutschkurs aus.",
          "statement": "Der Kurs ist morgen.",
          "answer": false
        },
        {
          "audio": "Wir treffen uns um 8 Uhr am Bahnhof.",
          "statement": "Treffpunkt ist der Bahnhof.",
          "answer": true
        }
      ]
    },
    {
      "id": "h-4",
      "title": "A1 Hören 4 (once)",
      "once": true,
      "paper": 2,
      "teil": 1,
      "items": [
        {
          "audio": "Bus nach Köln Haltestelle 2.",
          "statement": "Haltestelle 5.",
          "answer": false
        },
        {
          "audio": "Museum heute bis 18 Uhr.",
          "statement": "Schließt um 18.",
          "answer": true
        },
        {
          "audio": "Frau Klein kommt um 11, nicht um 10.",
          "statement": "Kommt um 10.",
          "answer": false
        },
        {
          "audio": "Nehmen Sie eine Nummer und warten Sie.",
          "statement": "Warten nötig.",
          "answer": true
        },
        {
          "audio": "Kurs montags 9 Uhr.",
          "statement": "Montag morgen.",
          "answer": true
        }
      ]
    },
    {
      "id": "h-5",
      "title": "A1 Hören 5 — café",
      "once": false,
      "paper": 2,
      "teil": 2,
      "intro": "Short café order.",
      "audio": "Guten Tag. Einen Kaffee und ein Wasser bitte. Mit Milch? Ja. Das macht 4 Euro 50. Bar oder Karte? Bar.",
      "turns": [
        { "role": "announcer", "text": "Guten Tag. Was möchten Sie?" },
        { "role": "guest", "text": "Einen Kaffee und ein Wasser bitte." },
        { "role": "announcer", "text": "Mit Milch?" },
        { "role": "guest", "text": "Ja." },
        { "role": "announcer", "text": "Das macht 4 Euro 50. Bar oder Karte?" },
        { "role": "guest", "text": "Bar." }
      ],
      "items": [
        {
          "statement": "Bestellt Tee.",
          "answer": false
        },
        {
          "statement": "Kaffee mit Milch.",
          "answer": true
        },
        {
          "statement": "Kostet 4,50.",
          "answer": true
        },
        {
          "statement": "Zahlt mit Karte.",
          "answer": false
        }
      ]
    },
    {
      "id": "h-6",
      "title": "A1 Hören 6 — messages",
      "once": false,
      "paper": 2,
      "teil": 3,
      "items": [
        {
          "audio": "Ich bin 5 Minuten zu spät.",
          "statement": "Person kommt später.",
          "answer": true
        },
        {
          "audio": "Apotheke sonntags zu.",
          "statement": "Sonntags offen.",
          "answer": false
        },
        {
          "audio": "Paket da. Ausweis mitbringen.",
          "statement": "Ausweis nötig.",
          "answer": true
        },
        {
          "audio": "Morgen fällt der Kurs aus.",
          "statement": "Kurs ist morgen.",
          "answer": false
        },
        {
          "audio": "Treffen 7 Uhr Bahnhof.",
          "statement": "Bahnhof um 7.",
          "answer": true
        }
      ]
    },
    {
      "id": "h-7",
      "title": "A1 Hören 7 (once)",
      "once": true,
      "paper": 3,
      "teil": 1,
      "items": [
        {
          "audio": "Zug nach Mainz jetzt Gleis 6.",
          "statement": "Gleis 6.",
          "answer": true
        },
        {
          "audio": "Kein Warmwasser 10–14 Uhr.",
          "statement": "Warmwasser-Problem vormittag.",
          "answer": true
        },
        {
          "audio": "Filiale öffnet erst um 10.",
          "statement": "Öffnet um 8.",
          "answer": false
        },
        {
          "audio": "Bitte Abstand halten.",
          "statement": "Abstand halten.",
          "answer": true
        },
        {
          "audio": "Aufzug wieder in Betrieb.",
          "statement": "Aufzug geht wieder.",
          "answer": true
        }
      ]
    },
    {
      "id": "h-8",
      "title": "A1 Hören 8 — shop",
      "once": false,
      "paper": 3,
      "teil": 2,
      "intro": "Buying a jacket.",
      "audio": "Ich suche eine Jacke Größe M. Die blaue kostet 40 Euro. Ich nehme sie. Zahle ich bar? Beides geht.",
      "items": [
        {
          "statement": "Sucht Schuhe.",
          "answer": false
        },
        {
          "statement": "Größe M.",
          "answer": true
        },
        {
          "statement": "Blaue Jacke 40€.",
          "answer": true
        },
        {
          "statement": "Nur Karte möglich.",
          "answer": false
        }
      ]
    },
    {
      "id": "h-9",
      "title": "A1 Hören 9",
      "once": false,
      "paper": 3,
      "teil": 3,
      "items": [
        {
          "audio": "Termin verschoben auf 15 Uhr.",
          "statement": "Neuer Termin 15 Uhr.",
          "answer": true
        },
        {
          "audio": "Heute kein Unterricht.",
          "statement": "Unterricht wie immer.",
          "answer": false
        },
        {
          "audio": "Wasser bitte nur still.",
          "statement": "Person will stilles Wasser.",
          "answer": true
        },
        {
          "audio": "Der Aufzug ist defekt.",
          "statement": "Aufzug kaputt.",
          "answer": true
        },
        {
          "audio": "Wir öffnen um 9 Uhr.",
          "statement": "Öffnung 9 Uhr.",
          "answer": true
        }
      ]
    }
  ],
  "schreiben": [
    {
      "id": "a1-form-kurs",
      "kind": "form",
      "register": "Sie",
      "title": "A1 Schreiben Teil 1 — Formular: Deutschkurs",
      "situation": "Sie möchten einen Deutschkurs machen. Füllen Sie das Formular aus.",
      "situationEn": "You want to take a German course. Fill in the form.",
      "fields": [
        {
          "id": "name",
          "label": "Name"
        },
        {
          "id": "vorname",
          "label": "Vorname"
        },
        {
          "id": "land",
          "label": "Land"
        },
        {
          "id": "telefon",
          "label": "Telefon"
        },
        {
          "id": "kurs",
          "label": "Welcher Kurs? (A1 / Abend / Samstag)"
        }
      ],
      "points": [
        "Name",
        "Vorname",
        "Land",
        "Telefon",
        "Kurs"
      ],
      "model": "Mustafa Asif · Land: Pakistan · Tel. 0151 000000 · Kurs: A1 Abend"
    },
    {
      "id": "a1-form-arzt",
      "kind": "form",
      "register": "Sie",
      "title": "A1 Schreiben Teil 1 — Formular: Arzttermin",
      "situation": "Sie möchten einen Termin beim Arzt. Füllen Sie das Formular aus.",
      "situationEn": "You want a doctor’s appointment. Fill in the form.",
      "fields": [
        {
          "id": "name",
          "label": "Name, Vorname"
        },
        {
          "id": "geburt",
          "label": "Geburtsdatum"
        },
        {
          "id": "krankenkasse",
          "label": "Krankenkasse"
        },
        {
          "id": "problem",
          "label": "Was ist das Problem?"
        },
        {
          "id": "zeit",
          "label": "Wann können Sie? (Tag / Uhrzeit)"
        }
      ],
      "points": [
        "Name",
        "Datum",
        "Kasse",
        "Problem",
        "Zeit"
      ],
      "model": "Mustafa Asif · 01.01.1994 · AOK · Kopfschmerzen seit gestern · Dienstag Nachmittag"
    },

    {
      "id": "a1-cafe",
      "register": "Sie",
      "title": "A1: order in a café (write)",
      "situation": "Write what you say in a café.",
      "points": [
        "Greet",
        "Order drink + food",
        "Ask the price",
        "Say thank you"
      ],
      "model": "Guten Tag! Ich möchte einen Kaffee und ein Stück Kuchen. Was kostet das? Danke schön!"
    },
    {
      "id": "a1-friend",
      "register": "du",
      "title": "A1: short message to a friend",
      "situation": "Invite a friend for coffee.",
      "points": [
        "Hello",
        "Suggest day/time",
        "Place",
        "Ask for answer"
      ],
      "model": "Hallo Anna, hast du am Samstag Zeit? Wir können um 15 Uhr Kaffee trinken im Café Sonne. Schreib mir bitte. Bis bald"
    },
    {
      "id": "a1-shop",
      "register": "Sie",
      "title": "A1: shop problem",
      "situation": "The T-shirt is too small.",
      "points": [
        "Explain problem",
        "Give size",
        "Ask for another",
        "Thank"
      ],
      "model": "Guten Tag, das T-Shirt ist zu klein. Ich brauche Größe L. Haben Sie eine andere Größe? Vielen Dank."
    },
    {
      "id": "a1-form",
      "register": "Sie",
      "title": "A1: course registration note",
      "situation": "You want an A1 evening course.",
      "points": [
        "Who you are",
        "What course",
        "Which days",
        "Phone number"
      ],
      "model": "Guten Tag, ich heiße Omar Hassan. Ich möchte einen A1-Abendkurs. Geht das am Montag und Mittwoch? Meine Nummer: 0151 000000. Mit freundlichen Grüßen"
    },
    {
      "id": "a1-doctor",
      "register": "Sie",
      "title": "A1: at the doctor",
      "situation": "You have a headache.",
      "points": [
        "Greet",
        "Say what hurts",
        "Since when",
        "Ask for help"
      ],
      "model": "Guten Tag, ich habe seit gestern Kopfschmerzen. Können Sie mir bitte helfen?"
    },
    {
      "id": "a1-intro",
      "register": "du",
      "title": "A1: introduce yourself in writing",
      "situation": "Write a short self-introduction.",
      "points": [
        "Name",
        "Where from",
        "Where you live",
        "Job/course"
      ],
      "model": "Hallo, ich heiße Leila. Ich komme aus Ägypten und wohne in Köln. Ich lerne Deutsch im A1-Kurs."
    },
    {
      "id": "a1-form2",
      "register": "Sie",
      "title": "A1: hotel note",
      "situation": "Short stay info.",
      "points": [
        "Name",
        "Dates",
        "Room",
        "Breakfast",
        "Phone"
      ],
      "model": "Name: Sara Ali. 2.–4. Mai. Einzelzimmer. Frühstück ja. Tel. 0151 444444."
    },
    {
      "id": "a1-late",
      "register": "du",
      "title": "A1: I am late",
      "situation": "Message.",
      "points": [
        "Sorry",
        "Minutes",
        "Where",
        "Wait"
      ],
      "model": "Hallo Tim, sorry, 10 Minuten zu spät. Ich bin im Bus. Warte bitte."
    },
    {
      "id": "a1-address",
      "register": "Sie",
      "title": "A1: new address",
      "situation": "Tell course office.",
      "points": [
        "Address",
        "Since",
        "Update",
        "Thanks"
      ],
      "model": "Guten Tag, neue Adresse: Bahnhofstraße 12, Köln. Bitte ändern. Danke."
    },
    {
      "id": "a1-invite",
      "register": "du",
      "title": "A1: tea invite",
      "situation": "Invite.",
      "points": [
        "Day",
        "Time",
        "Place",
        "Ask"
      ],
      "model": "Hallo Mira, Sonntag 15 Uhr Tee bei mir? Schreib mir."
    },
    {
      "id": "a1-absent",
      "register": "Sie",
      "title": "A1: miss one class",
      "situation": "Short formal.",
      "points": [
        "Why",
        "Which day",
        "Ask homework",
        "Contact"
      ],
      "model": "Guten Tag, ich kann Montag nicht kommen, ich bin krank. Gibt es Hausaufgaben? Tel. 0151 555."
    }
  ],
  "sprechen": {
    "intro": "Hallo, ich heiße … Ich komme aus … Ich wohne in … Ich bin … Jahre alt. Ich lerne Deutsch. Und du?",
    "questions": [
      "Wie heißt du?",
      "Woher kommst du?",
      "Wo wohnst du?",
      "Was machst du?",
      "Hast du Geschwister?",
      "Was isst du gern?"
    ],
    "topics": [
      {
        "t": "Meine Familie",
        "spine": "Ich habe einen Bruder und eine Schwester. Wir wohnen in…"
      },
      {
        "t": "Mein Tag",
        "spine": "Am Morgen stehe ich auf. Dann gehe ich zur Arbeit / zum Kurs."
      },
      {
        "t": "Essen und Trinken",
        "spine": "Ich esse gern … Ich trinke gern …"
      },
      {
        "t": "In der Stadt",
        "spine": "In meiner Stadt gibt es … Ich gehe oft …"
      }
    ],
    "planning": [
      {
        "t": "Kaffee treffen",
        "points": [
          "Tag",
          "Uhrzeit",
          "Ort",
          "wer zahlt"
        ]
      },
      {
        "t": "Einkaufen",
        "points": [
          "Supermarkt oder Markt",
          "was kaufen",
          "wann"
        ]
      }
    ],
    "engine": [
      {
        "role": "suggest",
        "de": "Sollen wir…?"
      },
      {
        "role": "agree",
        "de": "Ja, gerne."
      },
      {
        "role": "time",
        "de": "Um wie viel Uhr?"
      },
      {
        "role": "place",
        "de": "Wo treffen wir uns?"
      },
      {
        "role": "close",
        "de": "Okay, bis dann!"
      }
    ]
  },
  "mocks": [
    {
      "id": "mock-1",
      "title": "A1 mock A",
      "blurb": "Lesen 1 + SB + Hören + short writing.",
      "lesen": "lesen-1",
      "sb": [
        "sb-1",
        "sb-2"
      ],
      "hoeren": [
        "h-1",
        "h-2"
      ],
      "schreiben": "a1-friend"
    },
    {
      "id": "mock-2",
      "title": "A1 mock B",
      "blurb": "Second training paper.",
      "lesen": "lesen-2",
      "sb": [
        "sb-3",
        "sb-1"
      ],
      "hoeren": [
        "h-3",
        "h-1"
      ],
      "schreiben": "a1-form"
    },
    {
      "id": "mock-3",
      "title": "A1 mock C",
      "blurb": "Lesen 3 + cloze + Hören + writing.",
      "lesen": "lesen-3",
      "sb": [
        "sb-4",
        "sb-5"
      ],
      "hoeren": [
        "h-4",
        "h-5"
      ],
      "schreiben": "a1-late"
    },
    {
      "id": "mock-4",
      "title": "A1 mock D",
      "blurb": "Lesen 4 + bank + Hören + form.",
      "lesen": "lesen-4",
      "sb": [
        "sb-6",
        "sb-1"
      ],
      "hoeren": [
        "h-6",
        "h-7"
      ],
      "schreiben": "a1-form2"
    },
    {
      "id": "mock-5",
      "title": "A1 mock E",
      "blurb": "Lesen 5 + more practice.",
      "lesen": "lesen-5",
      "sb": [
        "sb-7",
        "sb-8"
      ],
      "hoeren": [
        "h-8",
        "h-9"
      ],
      "schreiben": "a1-invite"
    },
    {
      "id": "mock-6",
      "title": "A1 mock F",
      "blurb": "Stamina mix.",
      "lesen": "lesen-2",
      "sb": [
        "sb-2",
        "sb-4"
      ],
      "hoeren": [
        "h-1",
        "h-5",
        "h-7"
      ],
      "schreiben": "a1-absent"
    }
  ],
  "tips": [
    "Official telc A1: Hören ~20 min (15 items), Lesen+Schreiben 45 min (form + ~30-word message), group Sprechen ~15. No Sprachbausteine paper.",
    "Always learn article + noun: der Tisch, not just Tisch.",
    "Speak every day for 5 minutes — intro + 5 questions.",
    "Pass both written and oral halves (check your centre's rules).",
    "Use official telc A1 audio before exam day.",
    "Official A1: Hören ~20 min, Lesen+Schreiben ~45, group Sprechen ~15.",
    "Practise forms + ~30-word messages with greeting and closing."
  ]
}
});
