#!/usr/bin/env python3
"""One-shot: German exam language + A1 Lesen shape closer to telc Start Deutsch 1."""
from __future__ import annotations

import json
import pathlib
import re

ROOT = pathlib.Path("/Users/mustafa/Documents/Deutschpfad/site/data")


def dump_array(data) -> str:
    body = json.dumps(data, ensure_ascii=False, indent=2)
    return "\n".join(("  " + line if line else line) for line in body.splitlines())


def replace_key_array(text: str, key: str, new_list) -> str:
    token = f'"{key}":'
    start = text.find(token)
    if start < 0:
        raise SystemExit(f"missing key {key}")
    i = text.find("[", start)
    depth = 0
    for j in range(i, len(text)):
        if text[j] == "[":
            depth += 1
        elif text[j] == "]":
            depth -= 1
            if depth == 0:
                return text[:i] + dump_array(new_list).lstrip() + text[j + 1 :]
    raise SystemExit(f"unclosed array {key}")


def apply_map(text: str, mapping: dict[str, str]) -> str:
    for old, new in mapping.items():
        if old not in text:
            print("  missing:", old[:80])
        else:
            text = text.replace(old, new)
    return text


A1_LESEN = [
    {
        "id": "lesen-1",
        "title": "A1 Lesen 1 — Nachrichten, Anzeigen, Schilder",
        "timeMin": 25,
        "parts": [
            {
                "kind": "tf",
                "instruction": "Lesen Sie die Nachrichten. Sind die Aussagen richtig oder falsch?",
                "items": [
                    {"text": "Hallo Lisa, hast du am Samstag Zeit? Wir können um 15 Uhr Kaffee trinken. Liebe Grüße, Tom", "q": "Tom möchte am Samstag Kaffee trinken.", "answer": True},
                    {"text": "Liebe Frau Meier, ich bin krank. Morgen komme ich nicht zum Kurs. Omar", "q": "Omar kommt morgen zum Kurs.", "answer": False},
                    {"text": "Hallo, die Bäckerei ist heute zu. Wir öffnen morgen um 7 Uhr.", "q": "Die Bäckerei öffnet heute um 7 Uhr.", "answer": False},
                    {"text": "Anna, der Bus fährt um 8:15 vom Hauptbahnhof. Bis bald, Paul", "q": "Der Bus fährt um Viertel nach acht.", "answer": True},
                    {"text": "Guten Tag, Ihr Termin beim Arzt ist Dienstag, 10 Uhr.", "q": "Der Termin ist am Dienstag.", "answer": True},
                ],
            },
            {
                "kind": "ads",
                "instruction": "Welche Anzeige passt? Zwei Anzeigen bleiben übrig.",
                "people": [
                    {"id": "1", "text": "Tom sucht ein billiges Mittagessen."},
                    {"id": "2", "text": "Mia braucht einen Deutschkurs für Anfänger."},
                    {"id": "3", "text": "Omar sucht ein Zimmer in Bahnhofsnähe."},
                    {"id": "4", "text": "Sara möchte am Abend schwimmen."},
                    {"id": "5", "text": "Ben sucht ein gebrauchtes Fahrrad unter 100 Euro."},
                ],
                "ads": [
                    {"id": "A", "text": "Deutsch A1, VHS, Mo+Mi 18 Uhr, Anfänger."},
                    {"id": "B", "text": "Mittagstisch 5 €, Kantine Uni, 12–14 Uhr."},
                    {"id": "C", "text": "Yoga für Fortgeschrittene, 20 €."},
                    {"id": "D", "text": "Zimmer am Bahnhof, 350 €, ab sofort."},
                    {"id": "E", "text": "Stadtbad, Bahn 19:30–21:00, Eintritt 4 €."},
                    {"id": "F", "text": "Fahrrad 80 €, gebraucht, Abholung Samstag."},
                    {"id": "G", "text": "Klavierunterricht, 40 €/Stunde."},
                ],
                "answer": {"1": "B", "2": "A", "3": "D", "4": "E", "5": "F"},
            },
            {
                "kind": "signs",
                "instruction": "Lesen Sie die Schilder. Richtig oder falsch?",
                "items": [
                    {"sign": "Heute geschlossen. Morgen wieder ab 9 Uhr.", "q": "Das Geschäft ist heute offen.", "answer": False},
                    {"sign": "Rauchen verboten.", "q": "Hier darf man nicht rauchen.", "answer": True},
                    {"sign": "Eintritt frei.", "q": "Man muss bezahlen.", "answer": False},
                    {"sign": "Bitte warten.", "q": "Man soll hier warten.", "answer": True},
                    {"sign": "Sonntag geöffnet 10–16 Uhr.", "q": "Am Sonntag ist das Museum zu.", "answer": False},
                ],
            },
        ],
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
                    {"text": "Hallo Ken, die Party ist am Samstag um 20 Uhr bei mir. Nora", "q": "Die Party ist am Freitag.", "answer": False},
                    {"text": "Der Bus 12 hat 10 Minuten Verspätung.", "q": "Der Bus kommt später.", "answer": True},
                    {"text": "Bibliothek heute geschlossen.", "q": "Man kann heute in der Bibliothek lernen.", "answer": False},
                    {"text": "Supermarkt sucht Aushilfe an der Kasse, Abend.", "q": "Der Job ist am Abend.", "answer": True},
                    {"text": "Arzttermin: Dienstag, 10 Uhr, bitte 10 Minuten früher kommen.", "q": "Der Termin ist um zehn Uhr.", "answer": True},
                ],
            },
            {
                "kind": "ads",
                "instruction": "Welche Anzeige passt? Zwei Anzeigen bleiben übrig.",
                "people": [
                    {"id": "1", "text": "Lena sucht Schwimmen für Anfänger."},
                    {"id": "2", "text": "Ben möchte ein gebrauchtes Fahrrad unter 100 Euro."},
                    {"id": "3", "text": "Aya braucht einen Supermarkt, der abends lange offen ist."},
                    {"id": "4", "text": "Paul sucht Arbeit an der Kasse am Abend."},
                    {"id": "5", "text": "Nora möchte am Samstag feiern gehen."},
                ],
                "ads": [
                    {"id": "A", "text": "Schwimmkurs Anfänger, Mi 18 Uhr, 6 €."},
                    {"id": "B", "text": "Rad 90 €, Abholung heute."},
                    {"id": "C", "text": "Markt bis 22 Uhr, auch Sonntag."},
                    {"id": "D", "text": "Kasse Abendschicht, 18–22 Uhr, ab sofort."},
                    {"id": "E", "text": "Disco Samstag 21 Uhr, Eintritt 8 €."},
                    {"id": "F", "text": "Museum montags geschlossen."},
                    {"id": "G", "text": "Zahnarzt nur mit Termin."},
                ],
                "answer": {"1": "A", "2": "B", "3": "C", "4": "D", "5": "E"},
            },
            {
                "kind": "signs",
                "instruction": "Schilder. Richtig oder falsch?",
                "items": [
                    {"sign": "Parken verboten.", "q": "Hier darf man parken.", "answer": False},
                    {"sign": "Bitte warten. Nächste Nummer: 12.", "q": "Man soll warten.", "answer": True},
                    {"sign": "WLAN frei für Gäste.", "q": "Das Internet kostet extra.", "answer": False},
                    {"sign": "Nur Personal.", "q": "Kunden dürfen hier nicht rein.", "answer": True},
                    {"sign": "Geöffnet bis 20 Uhr.", "q": "Um 21 Uhr ist noch offen.", "answer": False},
                ],
            },
        ],
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
                    {"text": "Hallo Sam, der A1-Kurs beginnt am Montag um 18 Uhr, Raum 4. VHS", "q": "Der Kurs ist am Montag Abend.", "answer": True},
                    {"text": "Zimmer frei ab 1. Mai, Nähe Bahnhof, 380 €.", "q": "Das Zimmer ist am Flughafen.", "answer": False},
                    {"text": "Mittagstisch heute 6,50 €, inkl. Wasser.", "q": "Das Mittagessen kostet unter 7 Euro.", "answer": True},
                    {"text": "Katze entlaufen, grau, Name Mimi, Tel. 0151 222.", "q": "Jemand sucht eine Katze.", "answer": True},
                    {"text": "Sonntag geschlossen.", "q": "Am Sonntag kann man einkaufen.", "answer": False},
                ],
            },
            {
                "kind": "ads",
                "instruction": "Welche Anzeige passt? Zwei bleiben übrig.",
                "people": [
                    {"id": "1", "text": "Sam sucht einen A1-Kurs."},
                    {"id": "2", "text": "Yara möchte zu Mittag essen, maximal 7 Euro."},
                    {"id": "3", "text": "Paul sucht ein Zimmer am Bahnhof."},
                    {"id": "4", "text": "Ana braucht kostenloses WLAN."},
                    {"id": "5", "text": "Leo möchte bis 20 Uhr einkaufen."},
                ],
                "ads": [
                    {"id": "A", "text": "Deutsch A1, Di+Do 18 Uhr, VHS."},
                    {"id": "B", "text": "Kantinenessen 6 €, 12–14 Uhr."},
                    {"id": "C", "text": "Zimmer Bahnhof, 380 €, Küche mitbenutzen."},
                    {"id": "D", "text": "Café: WLAN frei, Kaffee 2,50 €."},
                    {"id": "E", "text": "Supermarkt täglich 7–22 Uhr."},
                    {"id": "F", "text": "Hunde verboten im Park."},
                    {"id": "G", "text": "Klavier zu verkaufen, 400 €."},
                ],
                "answer": {"1": "A", "2": "B", "3": "C", "4": "D", "5": "E"},
            },
            {
                "kind": "signs",
                "instruction": "Schilder. Richtig oder falsch?",
                "items": [
                    {"sign": "Ausfahrt freihalten.", "q": "Man darf hier nicht parken.", "answer": True},
                    {"sign": "Kinderwagen: bitte Aufzug benutzen.", "q": "Mit Kinderwagen soll man die Treppe nehmen.", "answer": False},
                    {"sign": "Fundbüro 1. Stock.", "q": "Verlorene Sachen sind im ersten Stock.", "answer": True},
                    {"sign": "Kartenzahlung ab 10 €.", "q": "Mit 5 Euro kann man mit Karte zahlen.", "answer": False},
                    {"sign": "Ruhe bitte. Prüfung.", "q": "Hier ist eine Prüfung. Man soll leise sein.", "answer": True},
                ],
            },
        ],
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
                    {"text": "Liebe Mira, das Kino beginnt um 19:30. Ich warte vor der Tür. Ali", "q": "Der Film beginnt um halb acht.", "answer": False},
                    {"text": "Apotheke Notdienst heute Nacht.", "q": "Die Apotheke hat heute Nacht auf.", "answer": True},
                    {"text": "Kurs fällt aus. Nächste Stunde: Donnerstag.", "q": "Heute ist Deutschunterricht.", "answer": False},
                    {"text": "Markt: Tomaten 1,50 € / kg.", "q": "Die Tomaten kosten eineinhalb Euro pro Kilo.", "answer": True},
                    {"text": "Schwimmbad: montags geschlossen.", "q": "Am Montag kann man schwimmen.", "answer": False},
                ],
            },
            {
                "kind": "ads",
                "instruction": "Welche Anzeige passt? Zwei bleiben übrig.",
                "people": [
                    {"id": "1", "text": "Mia darf hier nicht parken und sucht einen Parkplatz."},
                    {"id": "2", "text": "Omar möchte abends an der Kasse jobben."},
                    {"id": "3", "text": "Ken braucht Infos, wenn der Bus Verspätung hat."},
                    {"id": "4", "text": "Frau Klein sucht den Notdienst der Apotheke."},
                    {"id": "5", "text": "Leila möchte am Abend ins Kino."},
                ],
                "ads": [
                    {"id": "A", "text": "Parkhaus Bahnhof, 1 € / Stunde, bis 23 Uhr."},
                    {"id": "B", "text": "Supermarkt: Kassierer/in Abend, 18–22 Uhr."},
                    {"id": "C", "text": "Fahrplanänderungen: App oder Lautsprecher am Steig."},
                    {"id": "D", "text": "Notdienst-Apotheke: Liste an der Tür / 0800-Notdienst."},
                    {"id": "E", "text": "Kino: Vorstellungen 17:00, 19:30, 22:00."},
                    {"id": "F", "text": "Hundesalon, nur mit Termin."},
                    {"id": "G", "text": "Klavierkonzert 80 €."},
                ],
                "answer": {"1": "A", "2": "B", "3": "C", "4": "D", "5": "E"},
            },
            {
                "kind": "signs",
                "instruction": "Schilder. Richtig oder falsch?",
                "items": [
                    {"sign": "Bargeld only / Nur bar.", "q": "Man kann mit Karte zahlen.", "answer": False},
                    {"sign": "Ziehen / Push — Ziehen.", "q": "Man soll die Tür ziehen.", "answer": True},
                    {"sign": "WC 2. Stock.", "q": "Die Toilette ist im zweiten Stock.", "answer": True},
                    {"sign": "Kein Durchgang.", "q": "Man darf hier durchgehen.", "answer": False},
                    {"sign": "Kinder bis 12 Jahre frei.", "q": "Ein Kind von 10 Jahren muss bezahlen.", "answer": False},
                ],
            },
        ],
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
                    {"text": "Hallo, morgen Regen. Das Fußballspiel fällt aus. Trainer", "q": "Das Spiel ist morgen.", "answer": False},
                    {"text": "Café Sonne: Kaffee und Kuchen 6 €.", "q": "Kaffee und Kuchen zusammen kosten 6 Euro.", "answer": True},
                    {"text": "Ich warte um 12 Uhr am Eingang vom Museum. Aya", "q": "Aya wartet vor dem Museum.", "answer": True},
                    {"text": "Deutschkurs: bitte Heft und Stift mitbringen.", "q": "Man braucht ein Buch über Geschichte.", "answer": False},
                    {"text": "Der Zug nach Köln fährt von Gleis 3.", "q": "Der Zug fährt von Gleis drei.", "answer": True},
                ],
            },
            {
                "kind": "ads",
                "instruction": "Welche Anzeige passt? Zwei bleiben übrig.",
                "people": [
                    {"id": "1", "text": "Omar sucht einen Abendjob an der Kasse."},
                    {"id": "2", "text": "Nora möchte am Samstag zu einer Party."},
                    {"id": "3", "text": "Ken braucht aktuelle Infos zur Busverspätung."},
                    {"id": "4", "text": "Sara sucht ein Café mit Kuchen."},
                    {"id": "5", "text": "Luis möchte nach Köln fahren."},
                ],
                "ads": [
                    {"id": "A", "text": "Abendkasse Supermarkt, Mo–Fr 17–21 Uhr."},
                    {"id": "B", "text": "Geburtstagsparty Samstag 20 Uhr, Café Dach."},
                    {"id": "C", "text": "Bus 5: Verspätungen heute auf der Anzeige am Steig."},
                    {"id": "D", "text": "Café Sonne, Kuchen täglich, WLAN frei."},
                    {"id": "E", "text": "RE nach Köln, Gleis 3, stündlich."},
                    {"id": "F", "text": "Klavier zu verschenken, nur Abholung."},
                    {"id": "G", "text": "Hundeschule, 90 €."},
                ],
                "answer": {"1": "A", "2": "B", "3": "C", "4": "D", "5": "E"},
            },
            {
                "kind": "signs",
                "instruction": "Schilder. Richtig oder falsch?",
                "items": [
                    {"sign": "Gleisänderung: Zug nach Hamburg jetzt Gleis 7.", "q": "Der Zug nach Hamburg fährt von Gleis 7.", "answer": True},
                    {"sign": "Nicht betreten. Frisch gestrichen.", "q": "Man darf die Bank benutzen.", "answer": False},
                    {"sign": "Fundbüro neben der Information.", "q": "Verlorene Sachen sind bei der Information / daneben.", "answer": True},
                    {"sign": "Pause 13–14 Uhr.", "q": "Um 13:30 bekommt man Hilfe an diesem Schalter.", "answer": False},
                    {"sign": "Hunde anleinen.", "q": "Hunde müssen an der Leine sein.", "answer": True},
                ],
            },
        ],
    },
]

A1_FORMS = [
    {
        "id": "a1-form-kurs",
        "kind": "form",
        "register": "Sie",
        "title": "A1 Schreiben Teil 1 — Formular: Deutschkurs",
        "situation": "Sie möchten einen Deutschkurs machen. Füllen Sie das Formular aus.",
        "situationEn": "You want to take a German course. Fill in the form.",
        "fields": [
            {"id": "name", "label": "Name"},
            {"id": "vorname", "label": "Vorname"},
            {"id": "land", "label": "Land"},
            {"id": "telefon", "label": "Telefon"},
            {"id": "kurs", "label": "Welcher Kurs? (A1 / Abend / Samstag)"},
        ],
        "points": ["Name", "Vorname", "Land", "Telefon", "Kurs"],
        "model": "Mustafa Asif · Land: Pakistan · Tel. 0151 000000 · Kurs: A1 Abend",
    },
    {
        "id": "a1-form-arzt",
        "kind": "form",
        "register": "Sie",
        "title": "A1 Schreiben Teil 1 — Formular: Arzttermin",
        "situation": "Sie möchten einen Termin beim Arzt. Füllen Sie das Formular aus.",
        "situationEn": "You want a doctor’s appointment. Fill in the form.",
        "fields": [
            {"id": "name", "label": "Name, Vorname"},
            {"id": "geburt", "label": "Geburtsdatum"},
            {"id": "krankenkasse", "label": "Krankenkasse"},
            {"id": "problem", "label": "Was ist das Problem?"},
            {"id": "zeit", "label": "Wann können Sie? (Tag / Uhrzeit)"},
        ],
        "points": ["Name", "Datum", "Kasse", "Problem", "Zeit"],
        "model": "Mustafa Asif · 01.01.1994 · AOK · Kopfschmerzen seit gestern · Dienstag Nachmittag",
    },
]

A2_FORMS = [
    {
        "id": "a2-form-konto",
        "kind": "form",
        "register": "Sie",
        "title": "A2 Schreiben Teil 1 — Formular: Bankkonto",
        "situation": "Sie möchten ein Konto eröffnen. Füllen Sie das Formular aus.",
        "situationEn": "You want to open a bank account. Fill in the form.",
        "fields": [
            {"id": "name", "label": "Name, Vorname"},
            {"id": "adresse", "label": "Adresse"},
            {"id": "geburt", "label": "Geburtsdatum"},
            {"id": "ausweis", "label": "Ausweisnummer"},
            {"id": "termin", "label": "Wunschtermin"},
        ],
        "points": ["Name", "Adresse", "Datum", "Ausweis", "Termin"],
        "model": "Mustafa Asif · Musterstraße 1, 50667 Köln · 01.01.1994 · Ausweis … · Dienstag 16 Uhr",
    }
]


def insert_forms(text: str, forms: list) -> str:
    token = '"schreiben":'
    i = text.find(token)
    j = text.find("[", i)
    blob = ",\n".join(json.dumps(f, ensure_ascii=False, indent=2) for f in forms)
    blob = "\n".join("    " + line if line else line for line in blob.splitlines())
    # json.dumps of several objects joined with comma — wrap as objects already dumped
    pieces = []
    for f in forms:
        dumped = json.dumps(f, ensure_ascii=False, indent=2)
        dumped = "\n".join("    " + line if idx == 0 else "    " + line for idx, line in enumerate(dumped.splitlines()))
        pieces.append(dumped)
    insert = "\n" + ",\n".join(pieces) + ",\n"
    return text[: j + 1] + insert + text[j + 1 :]


B1_PEOPLE = {
    "Marta: used sofa, max 80 €, pickup this weekend.": "Marta sucht ein gebrauchtes Sofa, maximal 80 Euro. Abholung am Wochenende ist möglich.",
    "Kenji: beginner swimming after 19:00, north of the city.": "Kenji sucht einen Schwimmkurs für Anfänger nach 19 Uhr, im Norden der Stadt.",
    "Frau Otto: piano teacher who comes home, 30-minute lessons.": "Frau Otto sucht eine Klavierlehrerin, die nach Hause kommt. Unterricht: 30 Minuten.",
    "Ali & Noor: vegan lunch on Monday, city centre.": "Ali und Noor möchten am Montag vegan zu Mittag essen, in der Innenstadt.",
    "Laura: free German conversation, not a paid course.": "Laura sucht kostenloses Deutschsprechen, keinen bezahlten Kurs.",
    "Pavel: bike repair on Saturday morning.": "Pavel braucht eine Fahrradreparatur am Samstag Vormittag.",
    "Sofia: cheap room for two weeks while she looks for a flat.": "Sofia sucht ein günstiges Zimmer für zwei Wochen, bis sie eine Wohnung findet.",
    "Jonas: evening yoga for beginners, max 10 €.": "Jonas sucht Yoga für Anfänger am Abend, maximal 10 Euro.",
    "Elena: dog-sitting this weekend, needs a garden.": "Elena braucht Hundesitting am Wochenende, am besten mit Garten.",
    "Hassan: working washing machine, max 100 €, weekend pickup.": "Hassan sucht eine funktionierende Waschmaschine, maximal 100 Euro, Abholung am Wochenende.",
    "Elena: needs a cheap used laptop for school, under 200 €.": "Elena braucht ein günstiges gebrauchtes Laptop für die Schule, unter 200 Euro.",
    "Mark: wants a dog-sitting weekend while he travels.": "Mark braucht Hundesitting am Wochenende, weil er verreist.",
    "Yara: looking for a German tandem partner evenings.": "Yara sucht abends eine Tandem-Partnerin / einen Tandem-Partner für Deutsch.",
    "Herr Berg: needs help carrying furniture on Saturday morning.": "Herr Berg braucht Hilfe beim Möbeltragen am Samstag Vormittag.",
    "Lina: wants an outdoor swimming pool open late.": "Lina sucht ein Freibad, das abends lange geöffnet hat.",
    "Omar: needs a photocopier / print shop near the station.": "Omar braucht ein Copyshop / einen Drucker in Bahnhofsnähe.",
    "Nina: vegetarian cooking class on a weekday evening.": "Nina sucht einen vegetarischen Kochkurs an einem Wochentagabend.",
    "Paul: free legal advice for tenants.": "Paul sucht kostenlose Rechtsberatung für Mieter.",
    "Rita: first-aid course on a weekday evening.": "Rita sucht einen Erste-Hilfe-Kurs an einem Wochentagabend.",
    "Samir: used city bike under 120 €, pickup in town.": "Samir sucht ein gebrauchtes Stadtrad unter 120 Euro, Abholung in der Stadt.",
    "Sara: evening bus from airport after 22:00.": "Sara braucht einen Bus vom Flughafen nach 22 Uhr.",
    "Leo: second-hand children’s bike, under 60 €.": "Leo sucht ein gebrauchtes Kinderfahrrad unter 60 Euro.",
    "Mrs. Klein: someone to walk her dog weekday mornings.": "Frau Klein sucht jemanden, der unter der Woche morgens mit dem Hund Gassi geht.",
    "Diego: cheap double room near university for exam week.": "Diego sucht ein günstiges Doppelzimmer in Uninähe in der Prüfungswoche.",
    "Anika: beginner guitar lessons on Saturday.": "Anika sucht Gitarrenunterricht für Anfänger am Samstag.",
    "Farid: needs a tool library / drill for one day.": "Farid braucht eine Bohr-Maschine / Werkzeugverleih für einen Tag.",
    "Ben: indoor climbing for beginners this evening.": "Ben möchte heute Abend Indoorklettern für Anfänger.",
    "Clara: piano teacher who comes home, 30-minute lessons.": "Clara sucht Klavierunterricht zu Hause, 30 Minuten.",
    "Oleg: vegan lunch on Monday, city centre.": "Oleg möchte am Montag vegan in der Innenstadt essen.",
    "Marta: evening yoga under 12€": "Marta sucht Yoga am Abend unter 12 Euro.",
    "Ken: used desk max 50€ weekend": "Ken sucht einen gebrauchten Schreibtisch, maximal 50 Euro, Abholung am Wochenende.",
    "Ali: vegan café Mondays": "Ali sucht ein veganes Café, das montags geöffnet hat.",
    "Sofia: cheap hostel near station": "Sofia sucht ein günstiges Hostel in Bahnhofsnähe.",
    "Paul: Saturday bike repair": "Paul braucht am Samstag eine Fahrradreparatur.",
    "Nina: free tenant legal advice": "Nina sucht kostenlose Mietrechtsberatung.",
    "Omar: beginner swim after 19:00": "Omar sucht Schwimmen für Anfänger nach 19 Uhr.",
    "Lea: photocopies and passport photos near the station": "Lea braucht Kopien und Passfotos in Bahnhofsnähe.",
    "Yara: cheap DZ exam week near uni": "Yara sucht ein günstiges Doppelzimmer in der Prüfungswoche, Nähe Uni.",
    "Leo: kids bike under 60€": "Leo sucht ein Kinderfahrrad unter 60 Euro.",
    "Mrs Klein: dog walking weekday mornings": "Frau Klein sucht Gassi-Service unter der Woche morgens.",
    "Anika: beginner guitar Saturday": "Anika sucht Gitarre für Anfänger am Samstag.",
    "Pia: free German conversation, not a paid course": "Pia sucht kostenloses Deutschsprechen, keinen bezahlten Kurs.",
    "Nico: evening yoga for beginners, max 10 €": "Nico sucht Yoga für Anfänger am Abend, maximal 10 Euro.",
    "Tom: free first-aid": "Tom sucht einen kostenlosen Erste-Hilfe-Kurs.",
    "Maya: evening photo course": "Maya sucht einen Fotokurs am Abend.",
    "Jonas: free tenant advice": "Jonas sucht kostenlose Beratung für Mieter.",
    "Ruth: quiet room 2 weeks": "Ruth sucht ein ruhiges Zimmer für zwei Wochen.",
    "Omar: beginner swim after 19:00, north pool": "Omar sucht Schwimmen für Anfänger nach 19 Uhr im Nordbad.",
    "Sara: vegan lunch Monday, city centre": "Sara möchte am Montag vegan in der Innenstadt essen.",
}

A2_MAP = {
    "Evening German course for parents": "Abend-Deutschkurs für Eltern",
    "Free museum Sunday": "Museum sonntags kostenlos",
    "Flatshare seeks quiet roommate": "WG sucht ruhige Mitbewohnerin",
    "Train strike tomorrow": "Bahnstreik morgen",
    "Cheap bikes for students": "Günstige Fahrräder für Studierende",
    "Hospital needs blood donors": "Krankenhaus sucht Blutspender",
    "New supermarket opens 24/7": "Neuer Supermarkt rund um die Uhr",
    "Pharmacy Sunday service": "Apotheke mit Sonntagsdienst",
    "Lost phone at station": "Handy am Bahnhof verloren",
    "Cooking class for students": "Kochkurs für Studierende",
    "City bikes now electric": "Stadträder jetzt elektrisch",
    "Night bus every hour": "Nachtbus stündlich",
    "Job in supermarket warehouse": "Job im Supermarkt-Lager",
    "Park closed for storm": "Park wegen Sturm geschlossen",
    "Sara: used sofa under 100€, weekend pickup": "Sara sucht ein gebrauchtes Sofa unter 100 Euro, Abholung am Wochenende.",
    "Leo: beginner swimming after 18:00": "Leo sucht Schwimmen für Anfänger nach 18 Uhr.",
    "Nora: free conversation meetup": "Nora sucht ein kostenloses Sprachcafé.",
    "Paul: bike repair Saturday morning": "Paul braucht am Samstag Vormittag eine Fahrradreparatur.",
    "Yara: vegetarian lunch downtown": "Yara möchte vegetarisch in der Innenstadt zu Mittag essen.",
    "Ken: guitar lessons Saturday": "Ken sucht Gitarrenunterricht am Samstag.",
    "Amina: room for 2 weeks near uni": "Amina sucht ein Zimmer für zwei Wochen in Uninähe.",
    "Joel: dog walking weekday mornings": "Joel sucht Gassi-Service unter der Woche morgens.",
    "Eva: print shop near station": "Eva braucht ein Copyshop in Bahnhofsnähe.",
    "Omar: organic veg box delivery": "Omar möchte eine Bio-Gemüsekiste geliefert bekommen.",
    "Igor: weekend café job": "Igor sucht einen Café-Job am Wochenende.",
    "Sara: free Sunday tour": "Sara sucht eine kostenlose Stadtführung am Sonntag.",
    "Lena: quiet study WLAN": "Lena sucht einen ruhigen Lernplatz mit WLAN.",
    "Tom: swim while hall closed": "Tom möchte schwimmen, während die Halle zu ist.",
    "Aya: Friday market": "Aya möchte am Freitag auf den Markt.",
    "Nina: free furniture Sat": "Nina sucht kostenlose Möbel, Abholung Samstag.",
    "Paul: free gym trial": "Paul möchte ein kostenloses Probetraining im Fitnessstudio.",
    "Rita: emergency pharmacy": "Rita braucht eine Notdienst-Apotheke.",
    "Ken: quiet WG": "Ken sucht eine ruhige WG.",
    "Mila: doctor via app": "Mila möchte einen Arzttermin über eine App.",
    "Sam: Sunday hike": "Sam möchte sonntags wandern.",
    "Ola: cheap Tuesday cinema": "Ola möchte dienstags günstig ins Kino.",
    "Ben: free language meetup": "Ben sucht ein kostenloses Sprachtreffen.",
    "Ira: museum not Monday": "Ira möchte ins Museum, aber nicht montags.",
    "Gus: cheaper train tickets": "Gus sucht günstigere Zugtickets.",
}

A1_HEAD_PEOPLE = {}  # A1 lesen replaced wholesale

B1_INSTR = {
    "Match texts A–E to five headlines. Two headlines are unused.": "Ordnen Sie den Texten A–E die passende Überschrift zu. Zwei Überschriften bleiben übrig.",
    "Read the text. Choose a, b or c.": "Lesen Sie den Text. Wählen Sie a, b oder c.",
    "Match each person to one notice. Two notices are unused.": "Welche Anzeige passt zu welcher Person? Zwei Anzeigen bleiben übrig.",
}

B1_WRITE = [
    (
        "informal-invite",
        "Deine Freundin Julia lädt dich zum Grillen am Samstag ein.",
        ["Danke sagen.", "Sag, ob du kommen kannst, und warum / warum nicht.", "Schlage eine andere Zeit vor, wenn nötig.", "Frag, was du mitbringen sollst."],
    ),
    (
        "course-office",
        "Sie können nächste Woche nicht zum Abendkurs kommen.",
        ["Erklären Sie warum.", "Fragen Sie nach dem Stoff.", "Fragen Sie, ob Sie den Test später schreiben können.", "Sagen Sie, wie man Sie erreichen kann."],
    ),
    (
        "complaint",
        "Die Waschmaschine in Ihrer Mietwohnung ist kaputt.",
        ["Beschreiben Sie das Problem.", "Seit wann?", "Was haben Sie schon versucht?", "Was soll der Vermieter tun — mit einer Uhrzeit."],
    ),
    (
        "info-job",
        "Sie haben eine Anzeige für ein Praktikum gelesen.",
        ["Sagen Sie, warum Sie schreiben.", "Fragen Sie nach Zeiten und Dauer.", "Fragen Sie nach Aufgaben und Bezahlung.", "Geben Sie eine Telefonnummer."],
    ),
    (
        "online-shop",
        "Sie haben eine Jacke bestellt. Die Größe stimmt nicht, ein Knopf fehlt.",
        ["Nennen Sie eine Bestellnummer (erfinden Sie eine).", "Beschreiben Sie beide Probleme.", "Sagen Sie, was Sie möchten (Umtausch oder Geld zurück).", "Fragen Sie, wie Sie den Artikel zurückschicken."],
    ),
    (
        "visit-city",
        "Ein Freund / eine Freundin möchte dich in deiner Stadt besuchen.",
        ["Wann soll die Person kommen?", "Was soll man sehen?", "Wo kann man schlafen?", "Wie trefft ihr euch?"],
    ),
    (
        "doctor-sick",
        "Sie waren krank und haben zwei Tage im Sprachkurs / in der Ausbildung gefehlt.",
        ["Erklären Sie die Abwesenheit.", "Von wann bis wann?", "Fragen Sie, was Sie verpasst haben.", "Bieten Sie an nachzuarbeiten und geben Sie Kontakt."],
    ),
    (
        "neighbour-noise",
        "Die Nachbarn hören nach 22 Uhr laute Musik.",
        ["Beschreiben Sie das Problem und die Uhrzeiten.", "Seit wann passiert das?", "Was haben Sie schon gemacht (mit den Nachbarn gesprochen)?", "Was soll die Hausverwaltung tun?"],
    ),
    (
        "friend-move",
        "Du ziehst nächsten Samstag um und brauchst Hilfe.",
        ["Wann und wo?", "Wobei brauchst du Hilfe?", "Essen / Danke anbieten.", "Fragen, ob die Person kommen kann und bis wann."],
    ),
    (
        "club-membership",
        "Sie möchten in einen Sportverein.",
        ["Warum schreiben Sie?", "Fragen Sie nach Zeiten und Niveau.", "Fragen Sie nach Preis und Probetraining.", "Geben Sie Ihre Telefonnummer."],
    ),
    (
        "hotel-problem",
        "In Ihrer Hotelbuchung stehen die falschen Daten.",
        ["Nennen Sie die Buchungsnummer.", "Erklären Sie den Fehler.", "Welche Daten brauchen Sie?", "Bitten Sie um eine schriftliche Bestätigung."],
    ),
    (
        "exam-thanks",
        "Ein Mitschüler / eine Mitschülerin hat dir bei der B1-Vorbereitung geholfen.",
        ["Danke sagen.", "Was hat am meisten geholfen?", "Nach der Prüfung etwas unternehmen.", "Nach den Plänen der anderen Person fragen."],
    ),
    (
        "b1-bank",
        "Sie möchten einen Termin, um ein Girokonto zu eröffnen.",
        ["Warum Sie schreiben.", "Welche Zeiten möglich sind.", "Welche Unterlagen nötig sind.", "Telefonnummer."],
    ),
    (
        "b1-vhs",
        "Sie müssen vom Morgenkurs in einen Abendkurs wechseln.",
        ["Ihre Situation.", "Um den Wechsel bitten.", "Nach Kosten fragen.", "Kontakt angeben."],
    ),
    (
        "b1-party",
        "Du kannst die Party nicht bei dir machen.",
        ["Entschuldigung.", "Grund.", "Neuer Termin.", "Wer hat Platz?"],
    ),
    (
        "b1-lost",
        "Sie haben im Zug eine Tasche verloren.",
        ["Wann und welcher Zug?", "Was war in der Tasche?", "Wohin soll man sie schicken?", "Telefonnummer."],
    ),
    (
        "b1-volunteer",
        "Sie möchten im Sprachcafé ehrenamtlich helfen.",
        ["Warum Sie schreiben.", "Wann Sie Zeit haben.", "Welche Sprachen Sie sprechen.", "Kontakt."],
    ),
    (
        "b1-mould",
        "Im Bad Ihrer Mietwohnung ist Schimmel.",
        ["Problem beschreiben.", "Seit wann?", "Was Sie schon getan haben.", "Was Sie vom Vermieter wollen."],
    ),
]


def patch_schreiben_block(text: str, task_id: str, situation: str, points: list[str]) -> str:
    m = re.search(rf'"id": "{re.escape(task_id)}",[\s\S]*?"situation": "([^"]*)"', text)
    if not m:
        print("  no schreiben", task_id)
        return text
    old_sit = m.group(1)
    block_start = text.rfind("{", 0, m.start())
    # insert situationEn after situation line if missing
    sit_line = f'"situation": "{old_sit}"'
    if f'"id": "{task_id}"' in text and "situationEn" not in text[m.start(): m.start() + 800]:
        text = text.replace(
            sit_line,
            f'"situation": "{situation}",\n      "situationEn": "{old_sit}"',
            1,
        )
    else:
        text = text.replace(f'"situation": "{old_sit}"', f'"situation": "{situation}"', 1)
    # replace points array immediately after
    pm = re.search(
        rf'"id": "{re.escape(task_id)}"[\s\S]*?"points":\s*\[(.*?)\]',
        text,
        re.S,
    )
    if pm:
        new_pts = ",\n        ".join(json.dumps(p, ensure_ascii=False) for p in points)
        text = text[: pm.start(1)] + "\n        " + new_pts + "\n      " + text[pm.end(1) :]
    return text


EXTRA_SPRECHEN = """
      {
        "t": "Bewerbung und Praktikum",
        "spine": "Ein Praktikum zeigt den Betrieb. Man muss pünktlich sein und Fragen stellen."
      },
      {
        "t": "Beim Amt Termine machen",
        "spine": "Ohne Termin wartet man lange. Online buchen spart Zeit, aber nicht jeder kann das."
      },
      {
        "t": "Arztbesuch und Krankenkasse",
        "spine": "Man braucht einen Termin und die Versichertenkarte. Prävention ist günstiger als spät zum Arzt."
      },
      {
        "t": "Wohnung suchen in der Stadt",
        "spine": "Die Mieten sind hoch. WG, Stadtrand oder mehr Pendeln — man muss entscheiden."
      },
"""

EXTRA_PLANNING = """
      {
        "t": "Wohnungsbesichtigung zu zweit",
        "points": ["Tag und Uhrzeit", "Wer fragt den Vermieter", "Checkliste (Schimmel, Lärm, Küche)", "Anfahrt", "Plan B wenn die Wohnung weg ist"]
      },
      {
        "t": "Ausflug der Deutschklasse",
        "points": ["Ziel", "Bahn oder Bus", "Kosten", "Essen", "Treffpunkt", "Wetterplan"]
      },
"""


def main() -> None:
    a1 = (ROOT / "a1" / "exam.js").read_text()
    a1 = replace_key_array(a1, "lesen", A1_LESEN)
    if "a1-form-kurs" not in a1:
        a1 = insert_forms(a1, A1_FORMS)
    a1 = a1.replace(
        "telc A1 is short and practical: survival German, not essays.",
        "Official telc A1: Hören ~20 min (15 items), Lesen+Schreiben 45 min (form + ~30-word message), group Sprechen ~15. No Sprachbausteine paper.",
    )
    (ROOT / "a1" / "exam.js").write_text(a1)
    print("a1 exam patched")

    a2 = (ROOT / "a2" / "exam.js").read_text()
    a2 = apply_map(a2, A2_MAP)
    a2 = apply_map(
        a2,
        {
            "Match A–E. Two unused.": "Ordnen Sie A–E zu. Zwei Überschriften bleiben übrig.",
            "Read. Choose a/b/c.": "Lesen Sie den Text. Wählen Sie a, b oder c.",
            "Match person → notice.": "Welche Anzeige passt zu welcher Person?",
        },
    )
    if "a2-form-konto" not in a2:
        a2 = insert_forms(a2, A2_FORMS)
    a2 = a2.replace(
        "A2 pass still needs both written and oral halves — check telc rules at your centre.",
        "Official telc A2: Hören ~20 min, Lesen 3 parts (~50 min with language elements), Schreiben 2 parts, pair Sprechen ~15. Not the DTZ A2·B1 paper.",
    )
    (ROOT / "a2" / "exam.js").write_text(a2)
    print("a2 exam patched")

    b1 = (ROOT / "b1" / "exam.js").read_text()
    b1 = apply_map(b1, B1_PEOPLE)
    b1 = apply_map(b1, B1_INSTR)
    for task_id, sit, pts in B1_WRITE:
        b1 = patch_schreiben_block(b1, task_id, sit, pts)
    if "Bewerbung und Praktikum" not in b1:
        b1 = b1.replace(
            '        "t": "Fleisch oder vegetarisch"',
            EXTRA_SPRECHEN.rstrip() + '\n      {\n        "t": "Fleisch oder vegetarisch"',
            1,
        )
    if "Wohnungsbesichtigung zu zweit" not in b1:
        # insert before closing of planning array — find first planning item end is messy; insert after first planning object opener
        needle = '"t": "Abschiedsfest für eine Kollegin"'
        if needle in b1:
            b1 = b1.replace(
                '      {\n        "t": "Abschiedsfest für eine Kollegin"',
                EXTRA_PLANNING.rstrip() + '\n      {\n        "t": "Abschiedsfest für eine Kollegin"',
                1,
            )
    b1 = b1.replace(
        "Pass rule: at least 60% of the written total AND 60% of the oral. Strong Lesen cannot save a failed letter.",
        "telc B1 pass: 135/225 written AND 45/75 oral. Lesen 5+5+10, SB 10+10, Hören 5 (once)+10+5, one letter with 4 Leitpunkte. The oral cannot save a failed written paper.",
    )
    (ROOT / "b1" / "exam.js").write_text(b1)
    print("b1 exam patched")


if __name__ == "__main__":
    main()
