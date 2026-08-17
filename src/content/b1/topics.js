export default {
  examFormat: {
    name: "Zertifikat Deutsch / telc Deutsch B1",
    notThisExam: "This is the classic adult B1 paper — not telc A2·B1 DTZ (different Lesen/Hoeren shape). Do not mix DTZ tasks into this gym.",
    officialUrl: "https://www.telc.net/en/language-examinations/certificate-exams/german/certificate-german-telc-german-b1/",
    passRule: "You must score at least 60 percent in the written exam (135 of 225) AND 60 percent in the oral (45 of 75). The oral cannot rescue a failed written paper. Written 225 = Lesen 75 + Sprachbausteine 30 + Hoeren 75 + Schreiben 45.",
    points: { written: 225, oral: 75, passWritten: 135, passOral: 45, lesen: 75, sprachbausteine: 30, hoeren: 75, schreiben: 45 },
    written: [
      { name: "Lesen", parts: 3, minutes: 90, points: 75, items: "20 (5 + 5 + 10)", note: "One booklet with Sprachbausteine. No break. Teil 1: 5 short texts, 7 headlines (2 unused). Teil 2: one longer text, 5 multiple choice. Teil 3: 10 people, 12 notices (2 unused)." },
      { name: "Sprachbausteine", parts: 2, minutes: 0, points: 30, items: "20 (10 + 10)", note: "Same 90 minutes as Lesen. Teil 1: letter cloze, 3 options each. Teil 2: word bank, extra words unused. A2 does not have this 90-minute SB block — only B1 does." },
      { name: "Hören", parts: 3, minutes: 30, points: 75, items: "20 (5 + 10 + 5)", note: "Teil 1: 5 announcements, heard once. Teil 2: interview, 10 statements, heard twice. Teil 3: 5 short scenes, heard twice." },
      { name: "Schreiben", parts: 1, minutes: 30, points: 45, items: "1 letter · 4 Leitpunkte", note: "du or Sie. Cover every content point in a full sentence. Formal letters need one polite Koennten / wuerde / waere. Aim 100–120 words." }
    ],
    oral: {
      parts: 3,
      minutes: 15,
      prep: 20,
      points: 75,
      note: "Pair exam. About 20 minutes preparation with notes (Teil 2 and 3 only). Teil 1: contact (~3 min), no prep. Teil 2: speak about a topic (~6 min, ~90 seconds each). Teil 3: plan something together and decide (~6 min)."
    }
  },
  topics: [
    {
      id: "personal",
      title: "Personal identity",
      titleDe: "Person und Lebenslauf",
      weight: "always",
      official: true,
      blurb: "Who you are, where you live, why you are in Germany, and a short biography. Opens every oral exam.",
      exam: "Sprechen Teil 1 every time. Also Lesen biographies and informal letters.",
      canDo: [
        "I can introduce myself with origin, length of stay, job or course, family, and free time.",
        "I can tell a short life story in Perfekt and say what I want next.",
        "I can explain why I need the B1 certificate.",
        "I can ask the partner follow-up questions so Teil 1 is a dialogue.",
        "I can write an informal letter about a visit or a move.",
        "I can understand a Lesen biography and match it to a headline."
      ],
      examHow: [
        "Sprechen Teil 1: live small talk, no prep notes.",
        "Teil 2 sometimes: Leben in Deutschland, Heimat.",
        "Lesen Teil 1: short bios — main message, not one date.",
        "Schreiben: informal visit, thanks, or news.",
        "Hoeren Teil 2: an interview about someone's path."
      ],
      subtopics: [
        "Name, Herkunft, Wohnort, seit wann",
        "Beruf, Ausbildung, Kurs",
        "Familie in two sentences",
        "Freizeit",
        "Warum B1 / warum Deutschland",
        "Lebenslauf im Perfekt",
        "Plaene nach der Pruefung",
        "Fragen an den Partner"
      ],
      explain: "<p>Every telc B1 oral starts with <span class=\"de\">Person</span>. You already did this at A1 and A2. At B1 the examiner wants connected speech: how long, why, what next.</p><h3>Teil 1 spine (about 90 seconds, then questions)</h3><p><span class=\"de\">Ich heiße … und komme aus … Ich wohne seit drei Jahren in … Beruflich arbeite ich als … / Ich mache eine Ausbildung. Ich lerne Deutsch, weil ich die B1-Prüfung brauche. In meiner Freizeit … Früher habe ich in … gelebt und als … gearbeitet. Nach der Prüfung möchte ich … Und du? Wie lange wohnst du schon hier?</span></p><h3>Past without a novel</h3><p>Four Perfekt verbs are enough: come, work, learn, move. <span class=\"de\">sein</span> with <span class=\"de\">gekommen, gezogen, gegangen</span>. Then one future wish: <span class=\"de\">Ich möchte eine Stelle finden / die Familie nachholen / studieren</span>.</p><h3>Why B1</h3><p>Have one honest sentence ready: job, Ausbildung, residence paperwork, or study. Do not invent a legal lecture. Do not recite a memorised paragraph so fast that you cannot answer <span class=\"de\">Warum?</span></p><ul><li>Look at your partner. Teil 1 is contact, not a speech to the examiner.</li><li>If you freeze: <span class=\"de\">Wie bitte? Können Sie die Frage bitte wiederholen?</span></li></ul>",
      traps: [
        "A memorised monologue with no question to the partner.",
        "Ich habe nach Deutschland gekommen.",
        "Explaining immigration law. One reason for B1 is enough.",
        "Answering only with ja/nein when the partner asks a follow-up."
      ],
      youMust: [
        "Say name, origin, how long you have lived here, job or course, family, free time, why you need B1.",
        "Tell a short life story in Perfekt: came, worked, learned, moved.",
        "Ask two follow-up questions in Teil 1.",
        "Say what you want after the exam.",
        "Write an informal letter about a visit or news.",
        "Keep Teil 1 under two minutes, then listen."
      ],
      chunks: [
        { de: "Ich heiße … und komme aus …", en: "My name is … and I come from …" },
        { de: "Ich wohne seit drei Jahren in …", en: "I have lived in … for three years." },
        { de: "Beruflich arbeite ich als … / Ich mache eine Ausbildung.", en: "I work as … / I am doing vocational training." },
        { de: "Ich lerne Deutsch, weil ich die B1-Prüfung brauche.", en: "I am learning German because I need the B1 exam." },
        { de: "In meiner Freizeit …", en: "In my free time …" },
        { de: "Früher habe ich in … gelebt und als … gearbeitet.", en: "I used to live in … and work as …" },
        { de: "Nach der Prüfung möchte ich …", en: "After the exam I would like to …" },
        { de: "Und du? Wie lange wohnst du schon hier?", en: "And you? How long have you lived here already?" },
        { de: "Ich bin 2022 nach Deutschland gekommen.", en: "I came to Germany in 2022." },
        { de: "Zuerst habe ich in einem Lager gearbeitet, dann habe ich den Kurs angefangen.", en: "First I worked in a warehouse, then I started the course." },
        { de: "Wir verstehen uns gut, obwohl wir wenig Zeit haben.", en: "We get on well even though we have little time." },
        { de: "Können Sie die Frage bitte wiederholen?", en: "Can you please repeat the question?" }
      ],
      vocab: ["people"],
      grammar: ["perfekt", "wordorder", "pronouns"],
      sprechen: true,
      schreiben: ["visit-city"]
    },
    {
      id: "family",
      title: "Family and relationships",
      titleDe: "Familie und Beziehungen",
      weight: "high",
      official: true,
      blurb: "Family, friends, neighbours, invitations, visits, and simple conflicts.",
      exam: "Informal letters, Sprechen Teil 1–2, Lesen about living with others.",
      canDo: [
        "I can describe family members and how often I see them.",
        "I can accept, decline, or postpone an invitation with a reason.",
        "I can talk about living alone, with family, or in a WG.",
        "I can describe a small conflict and a solution.",
        "I can write an informal letter about a visit, a party, or help.",
        "I can use one polite Konjunktiv II when I ask a favour."
      ],
      examHow: [
        "Schreiben: informal invite, cancel, or ask to stay.",
        "Sprechen Teil 2: Familie, Freunde, Nachbarn.",
        "Teil 3: plan a party or a visit — who brings what.",
        "Lesen: ads for WG, babysitting, clubs.",
        "Hoeren: a family changes a Sunday plan."
      ],
      subtopics: [
        "Familienmitglieder und Wohnform",
        "Wie oft sehen wir uns",
        "Einladung, Zusage, Absage, Verschieben",
        "Besuch: mitbringen, schlafen, Stadt zeigen",
        "Streit und Kompromiss",
        "Nachbarn",
        "Kinderbetreuung (recognition)",
        "du-Briefe"
      ],
      explain: "<p>B1 family language is invitations and living together, not a psychology essay.</p><h3>Who you live with</h3><p><span class=\"de\">Ich wohne mit meiner Familie / allein / in einer WG. Wir verstehen uns gut, aber manchmal gibt es Streit, zum Beispiel wegen der Hausarbeit. Dann sprechen wir darüber und teilen die Aufgaben.</span></p><h3>Invitations</h3><p>Accept: <span class=\"de\">Danke für die Einladung. Ich komme gerne. Soll ich etwas mitbringen?</span> Decline: <span class=\"de\">Leider kann ich nicht kommen, weil ich arbeiten muss. Wäre es möglich, dass wir uns am Sonntag treffen?</span> The last sentence is Konjunktiv II — one is enough for a high Schreiben score.</p><h3>Visit letter</h3><p>Four Leitpunkte often: when you arrive, how long you stay, what you want to do, what to bring. Write four full paragraphs or four fat sentences with reasons. Greeting and closing in <span class=\"de\">du</span>.</p><ul><li>Neighbour noise can sit here or under Wohnen — use the same polite request.</li><li>Stay concrete: Sunday, cake, two days, the zoo. Not “relationships in modern society”.</li></ul>",
      traps: [
        "Declining with no alternative time.",
        "Sie in a letter to a close friend.",
        "A conflict story with no solution.",
        "Missing a Leitpunkt about what to bring or when you arrive."
      ],
      youMust: [
        "Describe family members and how often you see them.",
        "Accept, decline, or postpone an invitation with a reason.",
        "Ask Soll ich etwas mitbringen? and Wäre es möglich, dass …?",
        "Write a du-letter covering four visit points.",
        "Talk WG vs family vs alone with one advantage and one problem.",
        "Plan a party in Teil 3 and actually decide."
      ],
      chunks: [
        { de: "Ich wohne mit meiner Familie / allein / in einer WG.", en: "I live with my family / alone / in a shared flat." },
        { de: "Wir verstehen uns gut, aber manchmal gibt es Streit.", en: "We get on well, but sometimes there are arguments." },
        { de: "Leider kann ich nicht kommen, weil ich arbeiten muss.", en: "Unfortunately I cannot come because I have to work." },
        { de: "Wäre es möglich, dass wir uns am Sonntag treffen?", en: "Would it be possible to meet on Sunday?" },
        { de: "Soll ich etwas mitbringen?", en: "Should I bring something?" },
        { de: "Ich komme am Freitag um 18 Uhr und bleibe bis Sonntag.", en: "I arrive Friday at 6 p.m. and stay until Sunday." },
        { de: "Dann sprechen wir darüber und suchen einen Kompromiss.", en: "Then we talk about it and look for a compromise." },
        { de: "Die Nachbarn sind freundlich, aber abends oft laut.", en: "The neighbours are friendly but often loud in the evening." },
        { de: "Danke für die Einladung. Ich freue mich schon.", en: "Thanks for the invitation. I am already looking forward to it." },
        { de: "Kannst du mich vom Bahnhof abholen?", en: "Can you pick me up from the station?" },
        { de: "Wir teilen uns die Hausarbeit.", en: "We share the housework." },
        { de: "Ich helfe gerne, wenn du am Wochenende umziehst.", en: "I am happy to help if you move at the weekend." }
      ],
      vocab: ["people"],
      grammar: ["connectors", "konjunktiv2"],
      schreiben: ["informal-invite", "visit-city"]
    },
    {
      id: "housing",
      title: "Housing",
      titleDe: "Wohnen und Nachbarschaft",
      weight: "exam-core",
      official: true,
      blurb: "The number-one B1 letter topic: rent, repairs, noise, mould, moving, WG.",
      exam: "Schreiben complaints, Lesen ads (rooms, furniture), Sprechen Stadt vs Land / Miete.",
      canDo: [
        "I can describe a flat: rooms, floor, rent, Nebenkosten, furniture, location.",
        "I can write a Sie-letter: problem, since when, what I tried, what I want, a time I am home.",
        "I can talk about neighbours, moving, and expensive rent with examples.",
        "I can match people to housing ads in Lesen Teil 3.",
        "I can compare city vs countryside and renting vs buying at B1 depth.",
        "I can use dative after mit / bei / zu and one polite Koennten Sie."
      ],
      examHow: [
        "Schreiben: Heizung, Schimmel, Laerm, Kaution, Umzug — four Leitpunkte.",
        "Lesen Teil 3: Zimmer, Wohnung, Moebel, Lage, Nichtraucher, Haustiere.",
        "Lesen Teil 1: headlines about rent or neighbours.",
        "Sprechen Teil 2: Wohnen in der Stadt, Mieten, WG.",
        "Hoeren: Hausmeister, technician coming at 14 Uhr not 16."
      ],
      subtopics: [
        "Wohnungsbeschreibung",
        "Miete, Nebenkosten, Kaution, Mietvertrag",
        "Reparaturen: Heizung, Wasser, Strom, Schimmel",
        "Laerm und Nachbarn",
        "WG-Regeln",
        "Umzug und Kuendigung (recognition)",
        "Stadt vs Land",
        "Anzeigen: Wer sucht was"
      ],
      explain: "<p>If you can write one clean housing letter, you can pass Schreiben. This topic is a mini-course: describe, complain, compare.</p><h3>Describe (oral and Lesen)</h3><p><span class=\"de\">Die Wohnung hat 70 Quadratmeter, zwei Zimmer, Küche und Bad. Ich wohne im zweiten Stock ohne Aufzug. Die Miete beträgt 650 Euro plus Nebenkosten. Die Lage ist ruhig, aber der Weg zur Arbeit dauert 40 Minuten.</span> Ads hide the same facts behind synonyms: <span class=\"de\">Warmmiete, zentral, hell, möbliert, Zwischenmiete</span>.</p><h3>The complaint letter (memorise the spine)</h3><p>1) Why you write. 2) Problem + <span class=\"de\">seit</span>. 3) What you already did. 4) What you want + a time you are available. <span class=\"de\">Sehr geehrte Frau Lang, ich schreibe Ihnen, weil die Heizung seit Montag nicht funktioniert. Ich habe schon den Hausmeister informiert, aber es hat nicht geholfen. In der Wohnung ist es sehr kalt. Könnten Sie bitte einen Techniker schicken, am besten nach 17 Uhr? Mit freundlichen Grüßen</span></p><h3>Noise and mould</h3><p>Same spine. Noise: after 22 Uhr, sleep, ask them to be quieter or ask the landlord to speak to them. Mould: bathroom, health, ask for a repair, you air the room daily. Add one Konjunktiv II.</p><h3>Oral 90 seconds</h3><p>Opinion + example + contrast: city is practical but expensive; countryside is quiet but you need a car. End with <span class=\"de\">Was meinst du?</span></p><ul><li>Four Leitpunkte = four full sentences with reasons, not four nouns.</li><li>Never mix du and Sie. Landlord is Sie.</li></ul>",
      traps: [
        "Missing seit wann — the letter sounds like a mood, not a report.",
        "No polite request, only Das geht nicht.",
        "Matching an ad that allows pets to a person who needs a quiet no-pet house.",
        "Talking for 90 seconds only about furniture brands.",
        "Warmmiete read as cold rent plus extras."
      ],
      youMust: [
        "Describe a flat: rooms, floor, rent, Nebenkosten, furniture.",
        "Write a Sie-letter: problem, since when, what you tried, what you want, a time.",
        "Talk about neighbours, moving, and expensive rent.",
        "Scan ads for price, start date, location, and rules (pets, smoking).",
        "Compare Stadt vs Land with besser fuer / allerdings.",
        "Use Koennten Sie bitte / Waere es moeglich once in every formal letter.",
        "Name Schimmel, Heizung, Hausmeister, Kaution at production level."
      ],
      chunks: [
        { de: "Die Miete beträgt 650 Euro plus Nebenkosten.", en: "The rent is 650 euros plus utilities." },
        { de: "Die Heizung funktioniert seit Montag nicht.", en: "The heating has not worked since Monday." },
        { de: "In der Wohnung ist Schimmel im Bad.", en: "There is mould in the bathroom." },
        { de: "Die Nachbarn sind nach 22 Uhr sehr laut.", en: "The neighbours are very loud after 10 p.m." },
        { de: "Könnten Sie bitte einen Techniker schicken, am besten nach 17 Uhr?", en: "Could you please send a technician, preferably after 5 p.m.?" },
        { de: "Ich habe schon den Hausmeister informiert, aber es hat nicht geholfen.", en: "I already informed the caretaker, but it did not help." },
        { de: "Ich suche eine ruhige Wohnung näher an der Arbeit.", en: "I am looking for a quiet flat closer to work." },
        { de: "Die Wohnung ist 70 Quadratmeter groß und im zweiten Stock.", en: "The flat is 70 square metres and on the second floor." },
        { de: "In der Stadt ist alles nah, allerdings ist die Miete sehr hoch.", en: "In the city everything is close; however rent is very high." },
        { de: "Auf dem Land braucht man oft ein Auto, dafür ist es ruhiger.", en: "In the countryside you often need a car; on the other hand it is quieter." },
        { de: "Die Anzeige sucht Nichtraucher, das Zimmer ist möbliert.", en: "The ad wants non-smokers; the room is furnished." },
        { de: "Ich möchte die Wohnung zum 30. Juni kündigen.", en: "I would like to give notice for 30 June." },
        { de: "Wäre es möglich, die Kaution in Raten zu zahlen?", en: "Would it be possible to pay the deposit in instalments?" }
      ],
      vocab: ["home"],
      grammar: ["dativ", "prepositions", "konjunktiv2", "position", "nogen"],
      lesen: ["lesen-1"],
      schreiben: ["complaint", "neighbour-noise", "b1-mould"]
    },
    {
      id: "daily",
      title: "Daily life and time",
      titleDe: "Alltag, Termine, Zeit",
      weight: "high",
      official: true,
      blurb: "Routines, appointments, being late, opening hours, stress.",
      exam: "Hoeren announcements (times!), Lesen signs, Sprechen daily routine.",
      canDo: [
        "I can tell a full weekday in the present and yesterday in Perfekt.",
        "I can catch trap times in Hoeren: 8:15 vs 8:50, Montag vs Dienstag.",
        "I can make, change, or cancel an appointment politely.",
        "I can talk about stress and time pressure with an example.",
        "I can read Oeffnungszeiten and Feiertag notices.",
        "I can write a message that I will be late, with a new time."
      ],
      examHow: [
        "Hoeren Teil 1 and 3: the item is almost always a time or a day.",
        "Lesen: signs — geschlossen wegen Feiertag, nur vormittags.",
        "Sprechen Teil 2: Alltag, Stress, Work-Life at B1 (still personal).",
        "Schreiben: change a meeting, apologise for being late.",
        "SB: am / um / seit / von–bis prepositions."
      ],
      subtopics: [
        "Tagesablauf und trennbare Verben",
        "Uhrzeiten: halb, Viertel, digital",
        "Termine verschieben",
        "Verspaetung und Entschuldigung",
        "Oeffnungszeiten, Feiertage",
        "Stress, Pausen, Schlaf",
        "Haushalt",
        "seit / vor / in + time"
      ],
      explain: "<p>Alltag supplies the numbers that fail people in Hören. Grammar here is separable verbs, time prepositions, and a late message.</p><h3>Two days</h3><p>Today: <span class=\"de\">Ich stehe um halb sieben auf und fahre mit der Bahn zur Arbeit. In der Pause esse ich schnell etwas. Am Abend kaufe ich ein und lerne Deutsch.</span> Yesterday: same story in Perfekt. If you cannot flip tenses, drill that before new vocabulary.</p><h3>Hoeren times</h3><p>Read the statement first. Hunt <span class=\"de\">erst, schon, nicht vor, erst ab, statt um acht um zehn</span>. <span class=\"de\">halb acht</span> is 7:30. Digital <span class=\"de\">acht Uhr fünfzehn</span> is 8:15, not 8:50. Mark immediately; Teil 1 plays once.</p><h3>Appointments</h3><p><span class=\"de\">Haben Sie heute Nachmittag noch einen Termin frei? Leider kann ich den Termin am Dienstag nicht wahrnehmen. Wäre ein Termin nach 16 Uhr möglich?</span></p><h3>Stress talk (90 seconds)</h3><p>One cause, one example, one thing you do: <span class=\"de\">Unter der Woche habe ich Zeitdruck, weil ich Arbeit und Kurs kombiniere. Gestern bin ich zu spät gekommen, weil der Zug Verspätung hatte. Deshalb plane ich jetzt 15 Minuten extra.</span></p><ul><li>am + day, um + clock, seit + duration, von … bis …</li><li>Do not give a 4-minute day list in Teil 2. Structure it.</li></ul>",
      traps: [
        "halb acht = 8:30 in your head. Wrong.",
        "Hearing Montag and marking Dienstag because both were said (old vs new time).",
        "A stress rant with no example and no deshalb.",
        "am acht Uhr / um Montag."
      ],
      youMust: [
        "Tell the time, days, and a full weekday in present + Perfekt for yesterday.",
        "Catch trap times in Hoeren: 8:15 vs 8:50, Montag vs Dienstag.",
        "Change an appointment with Waere ein Termin … moeglich?",
        "Write a late message with reason and new arrival time.",
        "Read Oeffnungszeiten including Feiertag exceptions.",
        "Talk 90 seconds about Alltag with one deshalb."
      ],
      chunks: [
        { de: "Ich stehe um halb sieben auf und fahre mit der Bahn zur Arbeit.", en: "I get up at 6:30 and take the train to work." },
        { de: "Der Termin ist am Dienstag um Viertel nach zehn.", en: "The appointment is on Tuesday at 10:15." },
        { de: "Leider komme ich zu spät, weil der Zug Verspätung hat.", en: "I am late because the train is delayed." },
        { de: "Haben Sie heute Nachmittag noch einen Termin frei?", en: "Do you still have an appointment free this afternoon?" },
        { de: "Leider kann ich den Termin am Dienstag nicht wahrnehmen.", en: "Unfortunately I cannot keep Tuesday’s appointment." },
        { de: "Wäre ein Termin nach 16 Uhr möglich?", en: "Would an appointment after 4 p.m. be possible?" },
        { de: "Unter der Woche habe ich Zeitdruck, am Wochenende hole ich Schlaf nach.", en: "On weekdays I have time pressure; at the weekend I catch up on sleep." },
        { de: "Die Praxis ist montags bis freitags von 8 bis 12 Uhr geöffnet.", en: "The practice is open Monday to Friday from 8 to 12." },
        { de: "Gestern bin ich um acht aufgestanden und habe bis 17 Uhr gearbeitet.", en: "Yesterday I got up at eight and worked until 5 p.m." },
        { de: "Ich plane 15 Minuten extra, damit ich nicht zu spät komme.", en: "I plan 15 extra minutes so that I am not late." },
        { de: "Am Feiertag bleibt das Amt geschlossen.", en: "On the public holiday the office stays closed." },
        { de: "Seit einem Monat habe ich einen festen Tagesablauf.", en: "For a month I have had a fixed daily routine." }
      ],
      vocab: ["daily", "function"],
      grammar: ["separable", "modals", "particles"],
      lesen: ["lesen-1"],
      schreiben: ["b1-late", "course-office"]
    },
    {
      id: "food",
      title: "Food, shopping, consumption",
      titleDe: "Essen, Einkaufen, Konsum",
      weight: "high",
      official: true,
      blurb: "Cafés, quality, returns, online shops, healthy eating — common Lesen ads and letters.",
      exam: "Schreiben online-shop / wrong size. Sprechen Ernahrung, Online einkaufen. Lesen Teil 3 ads.",
      canDo: [
        "I can order, complain about food, and return goods with an order number.",
        "I can give an opinion: cheap vs quality, supermarket vs market, online vs shop.",
        "I can write a Sie-letter to a shop: what is wrong, what I want, how to reach me.",
        "I can match people to food or shop ads in Lesen Teil 3.",
        "I can talk 90 seconds about healthy eating with one example and one allerdings.",
        "I can use accusative and adjective endings on shop phrases."
      ],
      examHow: [
        "Schreiben: online shop, wrong size, missing part, refund or exchange.",
        "Lesen Teil 3: restaurants, courses, shops with times and prices.",
        "Sprechen Teil 2: Ernahrung, Online-Shopping, Plastik.",
        "Hoeren: a delivery window or a closed bakery.",
        "SB: articles and adjectives in a shop letter."
      ],
      subtopics: [
        "Restaurant und Beschwerde",
        "Supermarkt vs Markt vs Bio",
        "Online bestellen und zurueckschicken",
        "Groesse, Qualitaet, Garantie",
        "Ernahrung: selbst kochen, wenig Fleisch",
        "Geld, Rabatt, Rechnung",
        "Allergien",
        "Werbung vs Realitaet in ads"
      ],
      explain: "<p>Food at B1 is consumption: what you buy, what you return, what you think is healthy. Lesen Teil 3 loves shop and course ads.</p><h3>Return letter</h3><p><span class=\"de\">Sehr geehrte Damen und Herren, ich habe am 3. Mai eine Jacke bestellt, Bestellnummer 45821. Die Jacke ist eine Nummer zu klein, und ein Knopf fehlt. Ich möchte den Artikel umtauschen oder das Geld zurück. Könnten Sie mir bitte sagen, wie ich die Ware zurückschicke? Mit freundlichen Grüßen</span> Facts first: date, number, fault, wish.</p><h3>Oral spine</h3><p><span class=\"de\">Ich koche oft selbst, weil es billiger und gesünder ist. Im Supermarkt ist alles schnell, am Markt ist das Obst frischer. Online ist praktisch, allerdings sieht man die Qualität nicht. Deshalb bestelle ich Kleidung nur, wenn ich sie zurueckschicken kann.</span></p><h3>Ads</h3><p>Match hard facts: vegetarian, evenings only, under 10 euros, delivery, no car needed. Do not match a person who wants cheap lunch to a fine-dining ad because both say <span class=\"de\">Restaurant</span>.</p><ul><li>Order number and size are content points — invent them if the task does not give numbers, or copy them if it does.</li><li>Stay B1: advantages/disadvantages, not a nutrition degree.</li></ul>",
      traps: [
        "A return letter with no Bestellnummer or no wish (exchange vs refund).",
        "Matching on one shared word instead of the constraint (price, time, diet).",
        "Oral that only lists foods.",
        "du to the online shop."
      ],
      youMust: [
        "Order, complain about food, return goods with order number.",
        "Give an opinion: cheap vs quality, supermarket vs market.",
        "Write: fault + what you want + how to send it back.",
        "Talk 90 seconds on Ernährung or Online-Shopping with allerdings.",
        "Scan ads for price, diet, and opening hours.",
        "Use eine Nummer zu klein / ein Knopf fehlt / das Geld zurueck."
      ],
      chunks: [
        { de: "Die Jacke ist eine Nummer zu klein, und ein Knopf fehlt.", en: "The jacket is one size too small and a button is missing." },
        { de: "Ich möchte den Artikel umtauschen oder das Geld zurück.", en: "I would like to exchange the item or get a refund." },
        { de: "Könnten Sie mir bitte sagen, wie ich die Ware zurückschicke?", en: "Could you please tell me how to send the goods back?" },
        { de: "Ich koche oft selbst, weil es billiger und gesünder ist.", en: "I often cook myself because it is cheaper and healthier." },
        { de: "Die Bestellnummer ist 45821.", en: "The order number is 45821." },
        { de: "Am Markt ist das Obst frischer, im Supermarkt spare ich Zeit.", en: "At the market the fruit is fresher; in the supermarket I save time." },
        { de: "Online ist praktisch, allerdings sieht man die Qualität nicht.", en: "Online is practical; however you do not see the quality." },
        { de: "Entschuldigung, das Essen ist kalt. Könnten Sie das bitte ändern?", en: "Excuse me, the food is cold. Could you please change that?" },
        { de: "Ich esse wenig Fleisch, weil das besser für die Gesundheit ist.", en: "I eat little meat because that is better for health." },
        { de: "Das Angebot gilt nur bis Freitag und nur ab 20 Euro.", en: "The offer is only until Friday and only from 20 euros." },
        { de: "Ich vertrage keine Nüsse. Steht das auf der Speisekarte?", en: "I cannot tolerate nuts. Is that on the menu?" },
        { de: "Die Lieferung sollte gestern ankommen, sie ist aber nicht da.", en: "The delivery was supposed to arrive yesterday, but it is not here." }
      ],
      vocab: ["food", "clothing"],
      grammar: ["akkusativ", "adjectives", "compare"],
      schreiben: ["online-shop"],
      lesen: ["lesen-1"]
    },
    {
      id: "work",
      title: "Work and internships",
      titleDe: "Arbeit, Praktikum, Bewerbung",
      weight: "exam-core",
      official: true,
      blurb: "Jobs, shifts, applications, internships, colleagues, home office — B1 work life, not B2 labour law.",
      exam: "Lesen job texts, Schreiben Praktikum enquiry, Sprechen Homeoffice / Arbeit.",
      canDo: [
        "I can describe my job: hours, tasks, boss, commute.",
        "I can write why I am writing, hours/dates, tasks/pay, and a phone number.",
        "I can talk 90 seconds: office vs home office, with one example and one drawback.",
        "I can understand a job ad: Teilzeit, Schicht, Deutsch B1, Fuehrerschein.",
        "I can ask polite questions about an internship or a course at work.",
        "I can use relative clauses at recognition and one in production (die Stelle, die …)."
      ],
      examHow: [
        "Schreiben: Praktikum or Stelleninformation — four Leitpunkte.",
        "Lesen Teil 1–2: work-life texts; Teil 3: job and course ads.",
        "Sprechen Teil 2: Homeoffice, Schichtarbeit, Kollegen.",
        "Hoeren: a boss changes a shift.",
        "SB: sich bewerben um, sich interessieren fuer."
      ],
      subtopics: [
        "Arbeitszeiten und Aufgaben",
        "Ausbildung, Stelle, Praktikum, Minijob",
        "Bewerbung, Lebenslauf, Gespraech (recognition)",
        "Homeoffice vs Buero",
        "Kollegen, Chef, Stress",
        "Gehalt, Vertrag, Probezeit (recognition)",
        "Stellenanzeigen matchen",
        "Anfrage-Brief"
      ],
      explain: "<p>Work is exam-core because it appears in every skill. You need a job description, an enquiry letter, and a 90-second opinion.</p><h3>Describe the job</h3><p><span class=\"de\">Ich arbeite in Teilzeit / in Vollzeit / in Schichten. Meine Aufgaben sind … Der Weg dauert … Mit den Kollegen verstehe ich mich gut, aber der Chef hat wenig Zeit. Die Stelle, die ich suche, soll näher an der Wohnung sein.</span> One relative clause is a bonus, not a requirement for every sentence.</p><h3>Praktikum / info letter</h3><p>Leitpunkte are usually: why you write, when you can start / hours, what you would do / pay, how to contact you. <span class=\"de\">Ich interessiere mich für ein Praktikum in Ihrer Firma. Könnten Sie mir bitte mitteilen, wie lange es dauert und ob Teilzeit möglich ist? Welche Aufgaben würde ich übernehmen, und ist eine Vergütung vorgesehen? Meine Nummer ist …</span></p><h3>Homeoffice talk</h3><p>Advantage, example, drawback, deshalb: <span class=\"de\">Zu Hause spart man Zeit, zum Beispiel keine Bahn. Trotzdem braucht man Kollegen, weil man sonst allein entscheidet. Deshalb finde ich zwei Tage Homeoffice ideal.</span></p><h3>Ads</h3><p>Hard filters: evenings, driving licence, German B1, weekend work, unpaid internship. A person with a child and no car will not match a night shift outside town.</p><ul><li>This is not B2: no Tarifvertrag speeches.</li><li>Formal register: Sie, Konjunktiv II, no emoji.</li></ul>",
      traps: [
        "A letter that forgets dates or a phone number.",
        "Matching a parent to night shifts because the ad says flexibel.",
        "Oral that only lists job titles.",
        "ich interessiere mich um (wrong prep). Say fuer / sich bewerben um."
      ],
      youMust: [
        "Describe your job: hours, tasks, boss, commute.",
        "Write: why you are writing, hours/dates, tasks/pay, phone number.",
        "Talk 90 seconds: office vs home office, with one example and one drawback.",
        "Read ads for hours, language, licence, start date.",
        "Use sich interessieren fuer and Koennten Sie mir bitte mitteilen.",
        "Name Ausbildung, Praktikum, Teilzeit, Schicht in production.",
        "Stay personal — your week, not German labour politics."
      ],
      chunks: [
        { de: "Ich arbeite in Teilzeit / in Vollzeit / in Schichten.", en: "I work part-time / full-time / in shifts." },
        { de: "Ich interessiere mich für ein Praktikum in Ihrer Firma.", en: "I am interested in an internship at your company." },
        { de: "Könnten Sie mir bitte mitteilen, wie lange es dauert und ob Teilzeit möglich ist?", en: "Could you please tell me how long it lasts and whether part-time is possible?" },
        { de: "Welche Aufgaben würde ich übernehmen, und ist eine Vergütung vorgesehen?", en: "What tasks would I take on, and is there pay?" },
        { de: "Meine Nummer ist 0176 000000.", en: "My number is …" },
        { de: "Zu Hause spart man Zeit, trotzdem braucht man Kollegen.", en: "At home you save time; even so you need colleagues." },
        { de: "Die Stelle, die ich suche, soll näher an der Wohnung sein.", en: "The job I am looking for should be closer to the flat." },
        { de: "Ich bewerbe mich um die Stelle als …", en: "I am applying for the position as …" },
        { de: "Der Arbeitsweg dauert 40 Minuten, das ist anstrengend.", en: "The commute takes 40 minutes; that is tiring." },
        { de: "In der Anzeige steht: Deutsch B1 und Führerschein nötig.", en: "The ad says: German B1 and a driving licence required." },
        { de: "Zwei Tage Homeoffice sind ideal, weil ich dann die Bahn spare.", en: "Two days of home office are ideal because then I save the train." },
        { de: "In der Probezeit möchte ich zuverlässig und pünktlich sein.", en: "In the probation period I want to be reliable and on time." },
        { de: "Leider kann ich keine Nachtschicht machen, weil ich ein Kind habe.", en: "Unfortunately I cannot do night shifts because I have a child." }
      ],
      vocab: ["work"],
      grammar: ["konjunktiv2", "relative", "futur"],
      schreiben: ["info-job"],
      lesen: ["lesen-1"]
    },
    {
      id: "education",
      title: "Courses, school, exams",
      titleDe: "Bildung, VHS, Prüfungen",
      weight: "exam-core",
      official: true,
      blurb: "VHS, missed lessons, tests, certificates, learning methods.",
      exam: "Schreiben to the course office. Lesen course ads. Sprechen Kurs vs App.",
      canDo: [
        "I can write why I miss class, ask about material, ask to sit the test later, and how to contact me.",
        "I can talk about how I learn vocabulary and why I need the certificate.",
        "I can compare a course, an app, and a tandem at B1 depth.",
        "I can understand a course ad: level, days, price, childcare, exam.",
        "I can describe school or Ausbildung in my country vs here in simple terms.",
        "I can use um … zu and damit when I say why I learn."
      ],
      examHow: [
        "Schreiben: VHS / Kursbuero — four Leitpunkte, Sie.",
        "Lesen Teil 3: evening courses, exam dates, prices.",
        "Sprechen Teil 2: Sprachenlernen, Pruefungen, Schule.",
        "Hoeren: class cancelled, room change, exam at 9 not 10.",
        "SB: zu + infinitive, connectors in a course letter."
      ],
      subtopics: [
        "VHS, Integrationskurs, Abendkurs",
        "Fehlstunden und Stoff nachholen",
        "Pruefungstermin verschieben",
        "Zertifikat, Niveau, Einstufung",
        "Lernmethoden: Karteikarten, App, Tandem",
        "Schule und Ausbildung",
        "Kosten und Foerderung (recognition)",
        "Kurs vs Selbstlernen"
      ],
      explain: "<p>Education is exam-core because every candidate sits in a course. The letter to the office is as common as the housing complaint.</p><h3>Course-office letter</h3><p><span class=\"de\">Sehr geehrte Frau Lang, leider kann ich nächste Woche nicht zum Kurs kommen, weil ich krank bin. Könnten Sie mir bitte sagen, welchen Stoff ich nachholen muss? Wäre es möglich, den Test in der folgenden Woche zu schreiben? Sie erreichen mich unter … Mit freundlichen Grüßen</span> Four points: reason, material, test, contact.</p><h3>How you learn (oral)</h3><p><span class=\"de\">Ein Kurs gibt Struktur. Eine App ist praktisch im Bus. Sprechen muss man mit Menschen. Ich lerne Vokabeln mit Karteikarten, damit ich die Artikel nicht vergesse. Nach der Prüfung möchte ich …</span></p><h3>Ads</h3><p>Match: evenings only, exam included, under 100 euros, with childcare, B1 not A2, starts in March. Two unused ads are traps with almost the same words.</p><h3>Grammar that scores</h3><p><span class=\"de\">um Deutsch zu lernen, um die Prüfung zu bestehen, damit ich den Stoff nachholen kann</span>. One of each in a letter is plenty.</p><ul><li>Register is Sie even if your teacher says du in class — the office is Sie unless the task says otherwise.</li><li>Do not write a B2 essay on the school system.</li></ul>",
      traps: [
        "Missing the test-date request when it is a Leitpunkt.",
        "Matching a morning course to someone who works until 16 Uhr.",
        "Oral that only says Lernen ist wichtig with no method.",
        "du to the Kursbuero."
      ],
      youMust: [
        "Write: why you miss class, ask about material, ask to sit the test later, how to contact you.",
        "Talk about how you learn vocabulary and why you need the certificate.",
        "Compare Kurs vs App vs Tandem with one deshalb.",
        "Read course ads for level, days, price, and extras.",
        "Use um … zu or damit once in the letter.",
        "Say Nach der Pruefung moechte ich …",
        "Name VHS, Stoff, Einstufungstest, Zertifikat."
      ],
      chunks: [
        { de: "Leider kann ich nächste Woche nicht zum Kurs kommen, weil ich krank bin.", en: "Unfortunately I cannot come to class next week because I am ill." },
        { de: "Könnten Sie mir bitte sagen, welchen Stoff ich nachholen muss?", en: "Could you please tell me which material I have to catch up?" },
        { de: "Wäre es möglich, den Test in der folgenden Woche zu schreiben?", en: "Would it be possible to take the test the following week?" },
        { de: "Ein Kurs gibt Struktur. Eine App ist praktisch im Bus. Sprechen muss man mit Menschen.", en: "A course gives structure. An app is handy on the bus. Speaking needs people." },
        { de: "Nach der Prüfung möchte ich …", en: "After the exam I would like to …" },
        { de: "Ich lerne Vokabeln mit Karteikarten, damit ich die Artikel behalte.", en: "I learn vocabulary with cards so that I keep the articles." },
        { de: "Der Kurs ist dienstags und donnerstags von 18 bis 21 Uhr.", en: "The course is Tuesdays and Thursdays from 6 to 9 p.m." },
        { de: "Die Gebühr beträgt 80 Euro, die Prüfung ist inklusive.", en: "The fee is 80 euros; the exam is included." },
        { de: "Ich lerne Deutsch, um eine bessere Stelle zu finden.", en: "I am learning German in order to find a better job." },
        { de: "Gestern ist der Kurs ausgefallen, wir treffen uns in Raum 4.", en: "Yesterday the course was cancelled; we meet in room 4." },
        { de: "Ein Tandem hilft beim Sprechen, aber man braucht Disziplin.", en: "A tandem helps with speaking, but you need discipline." },
        { de: "Könnten Sie mir die Hausaufgaben per E-Mail schicken?", en: "Could you please send me the homework by email?" },
        { de: "Ich habe den Einstufungstest gemacht und bin in B1.", en: "I took the placement test and I am in B1." }
      ],
      vocab: ["school", "examday"],
      grammar: ["connectors", "zu"],
      schreiben: ["course-office", "b1-vhs"]
    },
    {
      id: "health",
      title: "Health",
      titleDe: "Gesundheit und Krankenkasse",
      weight: "exam-core",
      official: true,
      blurb: "Doctor, pharmacy, insurance, sick notes, appointments — very frequent Hoeren and letters.",
      exam: "Hoeren doctor/pharmacy. Schreiben sick / appointment. Sprechen healthy living.",
      canDo: [
        "I can say what hurts, since when, ask for an appointment, and ask about a sick note.",
        "I can recognise Krankenkasse, Rezept, Ueberweisung, Arbeitsunfaehigkeit.",
        "I can write a letter: I am ill, I miss work or course, I need a new date, contact me.",
        "I can talk 90 seconds about healthy living with an example and a limit.",
        "I can understand pharmacy and clinic audio for times and instructions.",
        "I can explain a simple insurance or prescription problem without medical jargon."
      ],
      examHow: [
        "Hoeren: doctor, pharmacy, Krankenkasse hotline — times and einmal vs zweimal.",
        "Schreiben: sick to boss or course; appointment change.",
        "Sprechen Teil 2: gesunde Ernaehrung, Sport, Stress.",
        "Lesen: Praxis notices, insurance ads, sport clubs.",
        "SB: seit, gegen, brauchen + noun."
      ],
      subtopics: [
        "Symptome und Dauer",
        "Termin, Ueberweisung, Facharzt (recognition)",
        "Rezept und Apotheke",
        "Krankschreibung / AU",
        "Krankenkasse, Karte, Beitrag (recognition)",
        "Gesund leben",
        "Kind krank, Arbeit fehlen",
        "Notdienst"
      ],
      explain: "<p>Health is exam-core because Hören and letters love clinics. You need symptoms, appointments, and a handful of system words at recognition level.</p><h3>At the doctor (say and hear)</h3><p><span class=\"de\">Ich habe seit gestern starke Kopfschmerzen. Könnte ich bitte einen Termin noch diese Woche bekommen? Brauche ich eine Krankschreibung für die Arbeit? Nehmen Sie meine Krankenkasse?</span> The audio will answer with a day and a time — that is the item.</p><h3>Pharmacy</h3><p><span class=\"de\">Das Rezept kann ich in der Apotheke um die Ecke einlösen. Ist das rezeptfrei? Wie oft soll ich das nehmen? Darf ich das mit Alkohol nehmen?</span></p><h3>Sick letter</h3><p>Four points often: why you write, how long you are out, what happens to work/course, how to reach you. <span class=\"de\">Leider kann ich von Montag bis Mittwoch nicht kommen, weil ich krank bin. Einen Arzttermin habe ich morgen. Könnten Sie mir bitte den Stoff / die Aufgaben schicken?</span></p><h3>Oral: healthy living</h3><p>Two actions + one limit: cook, walk, sleep; <span class=\"de\">allerdings</span> little time. Do not give medical advice to the examiner.</p><ul><li>System words: recognise them, do not define German insurance law.</li><li>seit + time is content, not decoration.</li></ul>",
      traps: [
        "Missing the appointment time in Hoeren because you waited for the illness word.",
        "A letter with no duration (how many days out).",
        "Oral that becomes a hospital story.",
        "Inventing specialist vocabulary you cannot pronounce."
      ],
      youMust: [
        "Say what hurts, since when, ask for an appointment, ask about a sick note.",
        "Know Krankenkasse, Rezept, Ueberweisung, Arbeitsunfaehigkeit at recognition level.",
        "Write: days you miss + reason + what you need + number.",
        "Talk healthy living with weil and allerdings.",
        "Catch pharmacy instructions: how often, with food, closed at noon.",
        "Read Notdienst / Vertretung on a practice door.",
        "Use Koennte ich bitte einen Termin … bekommen?"
      ],
      chunks: [
        { de: "Ich habe seit gestern starke Kopfschmerzen.", en: "I have had a bad headache since yesterday." },
        { de: "Könnte ich bitte einen Termin noch diese Woche bekommen?", en: "Could I please get an appointment still this week?" },
        { de: "Brauche ich eine Krankschreibung für die Arbeit?", en: "Do I need a sick note for work?" },
        { de: "Nehmen Sie meine Krankenkasse?", en: "Do you take my health insurance?" },
        { de: "Das Rezept kann ich in der Apotheke um die Ecke einlösen.", en: "I can fill the prescription at the pharmacy around the corner." },
        { de: "Leider kann ich von Montag bis Mittwoch nicht kommen, weil ich krank bin.", en: "Unfortunately I cannot come from Monday to Wednesday because I am ill." },
        { de: "Wie oft soll ich das Medikament nehmen?", en: "How often should I take the medicine?" },
        { de: "Die Praxis hat heute Nachmittag geschlossen, der Notdienst ist in der Stadt.", en: "The practice is closed this afternoon; emergency cover is in town." },
        { de: "Ich bewege mich jeden Tag, allerdings esse ich unter Stress zu schnell.", en: "I move every day; however when I am stressed I eat too fast." },
        { de: "Mein Kind ist krank, deshalb muss ich zu Hause bleiben.", en: "My child is ill, so I have to stay at home." },
        { de: "Ich brauche eine Überweisung zum Facharzt.", en: "I need a referral to a specialist." },
        { de: "Die Krankenkassenkarte habe ich vergessen. Geht das trotzdem?", en: "I forgot the insurance card. Is it still possible?" },
        { de: "Könnten Sie mir bitte die Aufgaben per E-Mail schicken?", en: "Could you please email me the tasks?" }
      ],
      vocab: ["health", "body"],
      grammar: ["modals", "perfekt", "negation"],
      schreiben: ["doctor-sick"],
      lesen: ["lesen-2"]
    },
    {
      id: "travel",
      title: "Travel and transport",
      titleDe: "Reisen, Bahn, Hotel",
      weight: "exam-core",
      official: true,
      blurb: "Tickets, delays, hotels, lost luggage — classic Hoeren Teil 1 and complaint letters.",
      exam: "Hoeren Bahnhof/Flughafen once. Schreiben hotel / lost item. Sprechen Bahn vs Auto.",
      canDo: [
        "I can understand platform, delay, cancelled, delay minutes, Gleiswechsel.",
        "I can write: booking number, what went wrong, what I want (new room / refund).",
        "I can tell a trip in Perfekt and compare transport options.",
        "I can report a lost item with where, when, and a description.",
        "I can plan a trip in Teil 3: cost, weather, who books.",
        "I can read hotel rules and ticket conditions in Lesen."
      ],
      examHow: [
        "Hoeren Teil 1: announcements once — Gleis, Minuten, faellt aus.",
        "Schreiben: hotel, lost bag, delayed trip.",
        "Sprechen: Bahn vs Auto, Urlaub, nachhaltig reisen at B1.",
        "Lesen: hotel notices, Fahrkartenregeln, Reiseangebote.",
        "Teil 3: weekend trip."
      ],
      subtopics: [
        "Fahrkarten und Gleise",
        "Verspaetung, Anschluss, Streik (recognition)",
        "Hotel: Buchung, Laerm, Heizung",
        "Gepäck verloren",
        "Urlaub erzaehlen",
        "Bahn vs Auto vs Flug",
        "Staedtereise planen",
        "Erstattung / Umbuchung"
      ],
      explain: "<p>Travel is exam-core for Hören Teil 1. You get one play. The statement is true or false because of a number.</p><h3>Announcement method</h3><p>Read the statement. Hunt one fact. <span class=\"de\">Der Zug nach Hamburg hat 20 Minuten Verspätung und fährt von Gleis 4. Leider ist der Anschlusszug ausgefallen. Bitte gehen Sie zu Gleis 7.</span> If the statement says Gleis 4 and the audio changes to 7, the answer is false. Do not freeze on unknown words.</p><h3>Hotel / lost-item letter</h3><p><span class=\"de\">Ich habe ein Zimmer vom 12. bis 14. Mai gebucht, Buchungsnummer … Das Zimmer war unruhig / die Heizung war kaputt. Ich bitte um eine Teilerstattung / um ein anderes Zimmer.</span> Lost: where, when, what it looks like, where to send it, phone number.</p><h3>Oral</h3><p>Bahn is relaxing and better for the environment; car is flexible on the land; flying is fast but expensive. One trip you actually took in Perfekt. Plan B if it rains.</p><ul><li>Booking number and dates are content. Copy them from the task.</li><li>Do not write a travel blog. Four points, 100–120 words.</li></ul>",
      traps: [
        "Teil 1: you wait for a word you know and miss the Gleiswechsel.",
        "Hotel letter with no Buchungsnummer.",
        "Oral with no real example trip.",
        "Matching a family with a baby to a youth hostel with no quiet hours."
      ],
      youMust: [
        "Understand platform, delay, cancelled, delay minutes, Gleiswechsel.",
        "Write: booking number, what went wrong, what you want (new room / refund).",
        "Tell one real trip in Perfekt.",
        "Compare Bahn vs Auto with besser fuer / allerdings.",
        "Report a lost item: where, when, description, contact.",
        "Plan Teil 3: date, budget, weather, who books.",
        "Catch erst / schon / nicht in announcements."
      ],
      chunks: [
        { de: "Der Zug nach Hamburg hat 20 Minuten Verspätung und fährt von Gleis 4.", en: "The train to Hamburg is 20 minutes late and leaves from platform 4." },
        { de: "Leider ist mein Anschlusszug ausgefallen.", en: "Unfortunately my connecting train was cancelled." },
        { de: "Ich habe ein Zimmer vom 12. bis 14. Mai gebucht, Buchungsnummer …", en: "I booked a room from 12 to 14 May, booking number …" },
        { de: "Das Zimmer war unruhig / die Heizung war kaputt.", en: "The room was noisy / the heating was broken." },
        { de: "Ich bitte um eine Teilerstattung.", en: "I request a partial refund." },
        { de: "Bitte gehen Sie zu Gleis 7, es gab einen Gleiswechsel.", en: "Please go to platform 7; there was a platform change." },
        { de: "Ich habe meine Tasche in der Bahn liegen lassen, gestern gegen 18 Uhr.", en: "I left my bag on the train yesterday around 6 p.m." },
        { de: "Die Bahn ist entspannter, allerdings braucht man auf dem Land oft ein Auto.", en: "The train is more relaxing; however in the countryside you often need a car." },
        { de: "Im Urlaub sind wir an die See gefahren und haben viel gewandert.", en: "On holiday we went to the sea and hiked a lot." },
        { de: "Könnten Sie das Gepäck bitte an diese Adresse schicken?", en: "Could you please send the luggage to this address?" },
        { de: "Das Frühstück ist nur bis 9:30 Uhr, nicht bis 11.", en: "Breakfast is only until 9:30, not until 11." },
        { de: "Wenn es regnet, besuchen wir ein Museum statt des Parks.", en: "If it rains, we visit a museum instead of the park." },
        { de: "Die Fahrkarte gilt nicht im ICE, nur im Regionalzug.", en: "The ticket is not valid on the ICE, only on the regional train." }
      ],
      vocab: ["travel", "world"],
      grammar: ["perfekt", "prepositions", "position"],
      schreiben: ["b1-lost", "hotel-problem"],
      lesen: ["lesen-1"]
    },
    {
      id: "amt",
      title: "Authorities and the city",
      titleDe: "Amt, Behörde, Stadt",
      weight: "exam-core",
      official: true,
      blurb: "Appointments, documents, Anmeldung, library, swimming pool — German bureaucracy at B1, not legal German.",
      exam: "Lesen notices. Hoeren town-hall announcements. Letters to offices.",
      canDo: [
        "I can make or change an appointment and list documents (Ausweis, Meldebescheinigung).",
        "I can understand Oeffnungszeiten and ohne Termin vs nur mit Termin.",
        "I can write a polite letter to an office: reason, new time, documents, phone.",
        "I can talk about city services: library, pool, Amt — what you use and why.",
        "I can match people to official notices in Lesen Teil 3.",
        "I can recognise Anmeldung, Buergerservice, Frist without giving legal advice."
      ],
      examHow: [
        "Lesen Teil 3: Amt notices, library rules, pool hours, documents required.",
        "Hoeren: town hall — closed Friday, bring your ID, number system.",
        "Schreiben: change a Termin, ask which Unterlagen.",
        "Sprechen: Leben in der Stadt, Behoerden, Nachbarn.",
        "SB: passive recognition (Sie werden aufgerufen)."
      ],
      subtopics: [
        "Termin vereinbaren und aendern",
        "Unterlagen: Ausweis, Pass, Meldebescheinigung",
        "Anmeldung / Ummeldung (recognition)",
        "Oeffnungszeiten, Feiertag, ohne Termin",
        "Bibliothek, Schwimmbad, Buergerservice",
        "Fristen und Formulare",
        "hoefliche Beschwerde oder Bitte",
        "Stadt vs Amt as oral topics"
      ],
      explain: "<p>Amt is exam-core because German everyday life runs on appointments and notices. B1 tests whether you can act, not whether you are a lawyer.</p><h3>The appointment chunk</h3><p><span class=\"de\">Ich möchte einen Termin im Bürgeramt vereinbaren. Welche Unterlagen muss ich mitbringen? Leider kann ich den Termin am Mittwoch nicht wahrnehmen. Wäre ein Termin nach 16 Uhr möglich? Ich bringe den Ausweis und die Meldebescheinigung mit.</span></p><h3>Notices (Lesen)</h3><p>Hard facts: <span class=\"de\">nur mit Termin, ohne Termin keine Beratung, geschlossen wegen Brückentag, bitte Nummer ziehen, Ausweis mitbringen, Frist 14 Tage</span>. A person who can only come after work will not match a notice that says mornings only and no evening appointments.</p><h3>Letter</h3><p>Same four-point machine as housing: why, what went wrong or what you need, what you want, contact. Stay polite. <span class=\"de\">Ohne Termin werden Sie heute nicht bedient</span> is a sentence to understand, not to argue with in five pages.</p><h3>Oral</h3><p>You can say the Amt takes time, you book online, you take a day off, the library is useful, the pool is expensive but good for the children. One example from your month.</p><ul><li>Do not invent asylum or tax law. Stay at Termin + documents + hours.</li><li>Passive appears on signs: <span class=\"de\">Sie werden aufgerufen</span> — recognise it.</li></ul>",
      traps: [
        "Matching a no-appointment person to nur mit Termin.",
        "A legal essay. The task is a new time and a document list.",
        "Forgetting a phone number on an Amt letter.",
        "Hearing geschlossen am Freitag and marking the whole week closed."
      ],
      youMust: [
        "Make or change an appointment, list documents (Ausweis, Meldebescheinigung).",
        "Understand Oeffnungszeiten and ohne Termin vs nur mit Termin.",
        "Write a Sie-letter: reason, new slot, documents, number.",
        "Scan notices for Frist, Feiertag, and required ID.",
        "Talk about one city service you actually use.",
        "Recognise Anmeldung, Buergerservice, Sie werden aufgerufen.",
        "Use Waere ein Termin nach … moeglich?"
      ],
      chunks: [
        { de: "Ich möchte einen Termin im Bürgeramt vereinbaren.", en: "I would like to make an appointment at the citizens’ office." },
        { de: "Welche Unterlagen muss ich mitbringen?", en: "Which documents do I have to bring?" },
        { de: "Leider kann ich den Termin am Mittwoch nicht wahrnehmen.", en: "Unfortunately I cannot keep Wednesday’s appointment." },
        { de: "Wäre ein Termin nach 16 Uhr möglich?", en: "Would an appointment after 4 p.m. be possible?" },
        { de: "Ohne Termin werden Sie heute nicht bedient.", en: "Without an appointment you will not be served today." },
        { de: "Ich bringe den Ausweis und die Meldebescheinigung mit.", en: "I will bring the ID and the registration certificate." },
        { de: "Das Amt ist freitags nur bis 12 Uhr geöffnet.", en: "The office is open on Fridays only until 12." },
        { de: "Bitte ziehen Sie eine Nummer und warten Sie im Flur.", en: "Please take a number and wait in the corridor." },
        { de: "Die Frist endet in 14 Tagen.", en: "The deadline ends in 14 days." },
        { de: "In der Stadtbibliothek kann ich ruhig lernen, das Schwimmbad ist teuer, aber gut für die Kinder.", en: "In the city library I can study quietly; the pool is expensive but good for the children." },
        { de: "Könnten Sie mir bitte schriftlich mitteilen, welche Formulare fehlen?", en: "Could you please tell me in writing which forms are missing?" },
        { de: "Wegen des Feiertags bleibt die Behörde geschlossen.", en: "Because of the public holiday the authority stays closed." },
        { de: "Ich habe den Termin online gebucht, die Bestätigung habe ich per E-Mail.", en: "I booked the appointment online; I have the confirmation by email." }
      ],
      vocab: ["services", "examday", "civic"],
      grammar: ["konjunktiv2", "passive", "imperative", "dacom", "nogen"],
      lesen: ["lesen-3"],
      schreiben: ["b1-amt"]
    },
    {
      id: "money",
      title: "Money, bank, post",
      titleDe: "Geld, Bank, Post",
      weight: "high",
      official: true,
      blurb: "Account, transfer, card blocked, parcel, post office hours.",
      exam: "Hoeren bank/post. Schreiben bank letter. Lesen ads.",
      canDo: [
        "I can explain a card problem, ask to block it, and ask about fees.",
        "I can track a parcel and ask when the post office is open.",
        "I can write a Sie-letter to a bank: what happened, what I want, my number.",
        "I can talk about saving, rent, and expensive life with one example.",
        "I can understand a bank or post announcement for times and documents.",
        "I can recognise Ueberweisung, Lastschrift, Dispo without teaching banking."
      ],
      examHow: [
        "Hoeren: card blocked, parcel ready, bank closed at 12:30.",
        "Schreiben: bank letter — lost card, wrong booking, fees.",
        "Lesen: post hours, bank ads, payment conditions.",
        "Sprechen: Geld, Sparen, online bezahlen.",
        "SB: verbs with prepositions (sich beschweren bei, ueberweisen auf)."
      ],
      subtopics: [
        "Konto, Karte, PIN, sperren",
        "Ueberweisung, Bargeld, Gebuehren",
        "Paket, Sendungsnummer, Packstation",
        "Post-Oeffnungszeiten",
        "Miete und sparen",
        "Online-Banking (B1 depth)",
        "falsche Abbuchung",
        "formeller Bankbrief"
      ],
      explain: "<p>Money and post are the service topic at B1: one problem, one request, documents, hours.</p><h3>Card and account</h3><p><span class=\"de\">Meine EC-Karte funktioniert nicht / ist verloren gegangen. Könnten Sie die Karte bitte sperren? Ich möchte Geld auf ein anderes Konto überweisen. Welche Gebühren fallen an? Ich habe eine Abbuchung, die ich nicht kenne.</span></p><h3>Parcel</h3><p><span class=\"de\">Das Paket ist noch nicht angekommen. Die Sendungsnummer ist … Kann ich es in der Filiale abholen? Wann hat die Post auf?</span></p><h3>Bank letter</h3><p>Facts: date, last four digits or account, what you already did in the app, what you want (block, new card, reverse a booking), phone number. Polite Konjunktiv II. 100–120 words.</p><h3>Oral</h3><p>Rent is high, you cook, you compare prices, cash vs card. One concrete month. Do not lecture on the European Central Bank.</p><ul><li>Hours and nur bar / nur Karte are Lesen traps.</li><li>Never write your real PIN in a practice letter — invent a situation, not secrets.</li></ul>",
      traps: [
        "A bank letter with no date and no request.",
        "Hearing the parcel is ready tomorrow and marking today.",
        "Oral that only says Alles ist teuer.",
        "Mixing Post (mail) with Paket and Konto."
      ],
      youMust: [
        "Explain a card problem, ask to block it, ask about fees.",
        "Track a parcel and ask when the post office is open.",
        "Write a Sie-letter with date, problem, wish, number.",
        "Talk about rent and saving with one example.",
        "Read payment and opening-hour constraints in ads.",
        "Use Koennten Sie die Karte bitte sperren?",
        "Recognise Ueberweisung, Lastschrift, Sendungsnummer."
      ],
      chunks: [
        { de: "Meine EC-Karte funktioniert nicht / ist verloren gegangen.", en: "My debit card does not work / has been lost." },
        { de: "Könnten Sie die Karte bitte sperren?", en: "Could you please block the card?" },
        { de: "Ich möchte Geld auf ein anderes Konto überweisen.", en: "I would like to transfer money to another account." },
        { de: "Das Paket ist noch nicht angekommen. Die Sendungsnummer ist …", en: "The parcel has not arrived yet. The tracking number is …" },
        { de: "Welche Gebühren fallen für eine neue Karte an?", en: "What fees apply for a new card?" },
        { de: "Ich kenne diese Abbuchung nicht. Könnten Sie das bitte prüfen?", en: "I do not recognise this debit. Could you please check that?" },
        { de: "Die Post hat samstags nur bis 12 Uhr auf.", en: "The post office is open on Saturdays only until 12." },
        { de: "Die Miete ist hoch, deshalb koche ich oft selbst und fahre mit dem Rad.", en: "Rent is high, so I often cook and cycle." },
        { de: "Kann ich das Paket in der Filiale abholen?", en: "Can I collect the parcel at the branch?" },
        { de: "Bar oder mit Karte? Diese Kasse nimmt nur Karte.", en: "Cash or card? This till takes card only." },
        { de: "Ich habe schon in der App nachgeschaut, es hat nicht geholfen.", en: "I already checked in the app; it did not help." },
        { de: "Bitte rufen Sie mich unter … an, ich bin nach 17 Uhr erreichbar.", en: "Please call me at …; I can be reached after 5 p.m." }
      ],
      vocab: ["services"],
      grammar: ["perfekt", "konjunktiv2"],
      schreiben: ["b1-bank"]
    },
    {
      id: "media",
      title: "Media and internet",
      titleDe: "Medien, Handy, Internet",
      weight: "high",
      official: true,
      blurb: "Phones, social media, news, data privacy — favourite Sprechen Teil 2 topic.",
      exam: "Sprechen Handy / Kinder und Bildschirmzeit. Lesen short news.",
      canDo: [
        "I can give an opinion with weil + one example + one Allerdings.",
        "I can stay B1: advantages and disadvantages, not a sociology essay.",
        "I can talk about news habits and false information in simple terms.",
        "I can plan Teil 3: a digital-free evening or a film night.",
        "I can understand a short news box in Lesen.",
        "I can use deshalb / trotzdem / obwohl once each in a talk."
      ],
      examHow: [
        "Sprechen Teil 2: Handy, Internet, Nachrichten, Kinder.",
        "Lesen Teil 1–2: short media or tech texts.",
        "Teil 3: organise an evening without phones, or a film.",
        "Hoeren: an interview about screen time.",
        "SB: abstract nouns (Vorteil, Nachteil, Meinung)."
      ],
      subtopics: [
        "Handy im Alltag",
        "Soziale Medien",
        "Nachrichten und Fake News (B1)",
        "Datenschutz at opinion level",
        "Kinder und Bildschirmzeit",
        "Vorteile / Nachteile",
        "Abend ohne Handy planen",
        "Redemittel: meiner Meinung nach"
      ],
      explain: "<p>Media is a favourite Teil 2 card. The mark is structure, not vocabulary fireworks.</p><h3>90-second spine</h3><p><span class=\"de\">Das Handy ist nützlich zum Kontakt, aber man braucht Pausen. Meiner Meinung nach verbringen viele Leute zu viel Zeit online, weil alles schnell geht. Allerdings kann man auch viel lernen, zum Beispiel Sprachen. Deshalb schalte ich abends den Flugmodus ein. Und du?</span> Four moves: plus, minus, example, deshalb. Then a question.</p><h3>Children / news</h3><p>Same spine. Children: useful for school, bad for sleep, parents need rules. News: fast, but you should check two sources. Do not start a B2 speech on democracy.</p><h3>Teil 3</h3><p>Suggest a film, a walk, a no-phone dinner. React. Decide the time. Plan B if someone must be reachable for work.</p><ul><li>Memorise 8 opinion chunks, not 40 media nouns.</li><li>If you forget a word: <span class=\"de\">das Ding zum Fotografieren — ich meine die Kamera</span>.</li></ul>",
      traps: [
        "A two-minute rant with no example and no question.",
        "Only listing apps.",
        "obwohl / trotzdem used, but the rest is A2 lists.",
        "Teil 3 with no decision."
      ],
      youMust: [
        "Give an opinion with weil + one example + one Allerdings.",
        "Stay B1: advantages/disadvantages, not a sociology essay.",
        "End Teil 2 with a question to the partner.",
        "Use deshalb or trotzdem once.",
        "Plan a no-phone evening and agree.",
        "Name Kontakt, Pausen, Nachrichten, Flugmodus in production.",
        "Read a short news box for the main message, not every word."
      ],
      chunks: [
        { de: "Das Handy ist nützlich zum Kontakt, aber man braucht Pausen.", en: "The phone is useful for contact, but you need breaks." },
        { de: "Meiner Meinung nach verbringen viele Leute zu viel Zeit online, weil …", en: "In my opinion many people spend too much time online because …" },
        { de: "Allerdings kann man auch viel lernen, zum Beispiel Sprachen.", en: "However you can also learn a lot, for example languages." },
        { de: "Deshalb schalte ich abends den Flugmodus ein.", en: "That is why I turn on flight mode in the evening." },
        { de: "Nachrichten sind schnell, trotzdem sollte man zwei Quellen prüfen.", en: "News is fast; even so you should check two sources." },
        { de: "Für Kinder ist das Handy praktisch für die Schule, aber schlecht für den Schlaf.", en: "For children the phone is handy for school but bad for sleep." },
        { de: "Ich schlage vor, dass wir einen Abend ohne Handy machen.", en: "I suggest that we do an evening without phones." },
        { de: "Was meinst du? Siehst du das auch so?", en: "What do you think? Do you see it that way too?" },
        { de: "Im Internet finde ich Kurse, aber ich verliere leicht Zeit.", en: "On the internet I find courses, but I easily lose time." },
        { de: "Datenschutz ist wichtig, deshalb stelle ich die Einstellungen enger.", en: "Privacy is important, so I tighten the settings." },
        { de: "Trotzdem muss ich für die Arbeit erreichbar bleiben.", en: "Even so I have to stay reachable for work." },
        { de: "Ein Film im Kino ist schöner als das Handy auf der Couch.", en: "A film at the cinema is nicer than the phone on the sofa." }
      ],
      vocab: ["media", "opinions"],
      grammar: ["connectors", "advconn"],
      schreiben: ["b1-media"]
    },
    {
      id: "leisure",
      title: "Leisure, sport, culture",
      titleDe: "Freizeit, Sport, Kultur",
      weight: "high",
      official: true,
      blurb: "Hobbies, clubs, cinema, volunteering, parties — Sprechen Teil 2 and Teil 3 planning.",
      exam: "Sprechen Teil 2 spines. Teil 3: plan a party / trip / course outing.",
      canDo: [
        "I can talk 90 seconds about a hobby with reasons.",
        "I can in Teil 3 suggest, react, and decide (Tag, Ort, Kosten, Plan B).",
        "I can write an informal invitation or a club enquiry.",
        "I can understand event ads: price, time, age, weather.",
        "I can compare sport vs screen time with allerdings.",
        "I can use Ich schlage vor, dass … and Einverstanden."
      ],
      examHow: [
        "Sprechen Teil 2: Freizeit, Sport, Kultur, Verein.",
        "Teil 3: party, outing, gift, course trip — you must agree.",
        "Lesen Teil 3: clubs, cinema, concerts.",
        "Schreiben: informal invite or club membership.",
        "Hoeren: event moved to Sunday, hall 2 not hall 1."
      ],
      subtopics: [
        "Hobbys mit Gruenden",
        "Sport und Verein",
        "Kino, Museum, Konzert",
        "Party planen",
        "Kosten und Wetter",
        "Ehrenamt light (see Gesellschaft)",
        "Einladungsbrief",
        "Redemittel Teil 3"
      ],
      explain: "<p>Freizeit is how Teil 3 is won. Examiners listen for interaction and a decision, not a perfect hobby vocabulary list.</p><h3>Teil 2 hobby</h3><p><span class=\"de\">In meiner Freizeit gehe ich schwimmen / ins Kino / in einen Verein. Ich mache das, weil ich den Kopf frei bekomme. Zum Beispiel schwimme ich dienstags nach der Arbeit. Allerdings habe ich im Winter weniger Zeit. Trotzdem versuche ich, einmal pro Woche Sport zu machen.</span></p><h3>Teil 3 machine</h3><p>Suggest: <span class=\"de\">Ich schlage vor, dass wir uns am Samstag treffen.</span> React: <span class=\"de\">Gute Idee, aber Sonntag ist besser, weil …</span> Details: place, cost, who brings food, rain plan. Close: <span class=\"de\">Einverstanden. Dann machen wir das so.</span> If you never decide, you lose task points even if your German is fine.</p><h3>Ads and invites</h3><p>Match age, price, evening vs morning. Write: when, where, what to bring, how to answer.</p><ul><li>Three hobbies maximum in Teil 2. Depth beats lists.</li><li>Cost and Plan B are the details weak pairs forget.</li></ul>",
      traps: [
        "Teil 3: two people saying ja genau for six minutes.",
        "A hobby list with no weil.",
        "Planning a trip with no price and no rain plan.",
        "Writing an invite without a time."
      ],
      youMust: [
        "Talk 90 seconds about a hobby with reasons.",
        "In Teil 3: suggest, react, decide (Tag, Ort, Kosten, Plan B).",
        "Use Ich schlage vor, dass … and Einverstanden.",
        "Write an invite with when, where, what to bring.",
        "Read event ads for price, age, and time.",
        "Compare one active hobby and one quiet hobby.",
        "Ask the partner Was meinst du? after every suggestion."
      ],
      chunks: [
        { de: "In meiner Freizeit gehe ich schwimmen / ins Kino / in einen Verein.", en: "In my free time I go swimming / to the cinema / to a club." },
        { de: "Ich schlage vor, dass wir uns am Samstag treffen.", en: "I suggest that we meet on Saturday." },
        { de: "Einverstanden. Dann machen wir das so.", en: "Agreed. Then let’s do it that way." },
        { de: "Was machen wir, wenn es regnet?", en: "What do we do if it rains?" },
        { de: "Gute Idee, aber Sonntag ist besser, weil ich samstags arbeite.", en: "Good idea, but Sunday is better because I work on Saturday." },
        { de: "Was kostet das, und wer bringt das Essen mit?", en: "What does that cost, and who brings the food?" },
        { de: "Ich mache Sport, weil ich den Kopf frei bekomme.", en: "I do sport because I clear my head." },
        { de: "Allerdings habe ich im Winter weniger Zeit.", en: "However I have less time in winter." },
        { de: "Das Konzert ist um 20 Uhr, Karten kosten 15 Euro.", en: "The concert is at 8 p.m.; tickets cost 15 euros." },
        { de: "Soll ich etwas mitbringen?", en: "Should I bring something?" },
        { de: "Wir können uns vor dem Kino treffen, Plan B ist das Café nebenan.", en: "We can meet in front of the cinema; plan B is the cafe next door." },
        { de: "Was meinst du? Sollen wir das so machen?", en: "What do you think? Shall we do it that way?" }
      ],
      vocab: ["daily", "function"],
      grammar: ["wordorder", "connectors", "imperative"],
      schreiben: ["informal-invite", "club-membership", "b1-feste"]
    },
    {
      id: "environment",
      title: "Environment",
      titleDe: "Umwelt und Nachhaltigkeit",
      weight: "high",
      official: true,
      blurb: "Recycling, bikes vs cars, less plastic, energy at home — B1 opinions, not climate science.",
      exam: "Lesen supermarket/plastic texts. Sprechen Umweltschutz / Bahn vs Auto.",
      canDo: [
        "I can name three everyday actions and say why they help.",
        "I can compare two options with besser fuer / allerdings.",
        "I can talk 90 seconds without becoming a B2 lecture.",
        "I can understand a Lesen text about packaging or energy.",
        "I can plan Teil 3: a car-free day or a repair cafe visit.",
        "I can connect Umwelt to Wohnen, Reisen, and Essen."
      ],
      examHow: [
        "Sprechen Teil 2: Umwelt, Bahn vs Auto, Plastik, Energie.",
        "Lesen Teil 1–2: supermarket, recycling, local projects.",
        "Teil 3: plan a clean-up or a bike outing.",
        "Hoeren: a city announcement about a car-free Sunday.",
        "SB: abstract nouns (Umwelt, Vorteil, Moeglichkeit)."
      ],
      subtopics: [
        "Muell trennen",
        "Rad, Bahn, Auto",
        "weniger Plastik und weniger Fleisch",
        "Energie zu Hause",
        "Stadt vs Land",
        "Alltagsbeispiele",
        "Reparieren statt neu kaufen",
        "Meinung mit allerdings"
      ],
      explain: "<p>Umwelt at B1 is your week, not the IPCC. Examiners reward three actions and a fair contrast.</p><h3>Three actions</h3><p><span class=\"de\">Ich trenne den Müll und fahre oft mit dem Rad. Zu Hause mache ich das Licht aus und lüfte kurz statt die Heizung hochzudrehen. Beim Einkaufen nehme ich eine Tasche mit.</span> Then why: <span class=\"de\">weil das besser für die Umwelt ist und oft Geld spart</span>.</p><h3>Fair contrast</h3><p><span class=\"de\">Bus und Bahn sind besser für die Umwelt. Auf dem Land braucht man oft ein Auto. Weniger Fleisch ist besser für das Klima und oft gesünder. Allerdings ist Bio manchmal teuer.</span> The word <span class=\"de\">allerdings</span> shows B1 balance.</p><h3>Do not</h3><p>Do not invent chemistry. Do not talk for three minutes about world conferences. If you lack a word: describe it. <span class=\"de\">die Tonne für das Papier</span>.</p><ul><li>Link to other topics: Wohnen (Heizung), Reisen (Bahn), Essen (Fleisch), Geld (sparen).</li><li>Teil 3 still needs a decision: Saturday, park, bags, if rain — indoor repair cafe.</li></ul>",
      traps: [
        "A climate speech with no personal example.",
        "Pretending nobody ever needs a car — examiners like honesty + allerdings.",
        "Matching a rural worker to a car-free city ad.",
        "Only listing Muell, Plastik, Auto as nouns."
      ],
      youMust: [
        "Name 3 everyday actions and say why they help.",
        "Compare two options with besser fuer / allerdings.",
        "Give one honest limit (land, night shift, kids, cost).",
        "Talk 90 seconds and then ask the partner.",
        "Read a packaging or energy text for the main message.",
        "Plan a concrete action in Teil 3.",
        "Link Umwelt to Bahn, Heizung, or Essen."
      ],
      chunks: [
        { de: "Ich trenne den Müll und fahre oft mit dem Rad.", en: "I sort rubbish and often cycle." },
        { de: "Bus und Bahn sind besser für die Umwelt. Auf dem Land braucht man oft ein Auto.", en: "Bus and train are better for the environment. In the countryside you often need a car." },
        { de: "Weniger Fleisch ist besser für das Klima und oft gesünder.", en: "Less meat is better for the climate and often healthier." },
        { de: "Allerdings ist Bio manchmal teuer.", en: "However organic is sometimes expensive." },
        { de: "Zu Hause mache ich das Licht aus und lüfte kurz.", en: "At home I switch off the light and air the room briefly." },
        { de: "Beim Einkaufen nehme ich eine Tasche mit, damit ich weniger Plastik brauche.", en: "When shopping I take a bag so that I need less plastic." },
        { de: "Reparieren ist besser als immer neu zu kaufen.", en: "Repairing is better than always buying new." },
        { de: "Ich schlage vor, dass wir am Samstag Müll im Park sammeln. Bei Regen gehen wir ins Repair-Café.", en: "I suggest we collect rubbish in the park on Saturday. If it rains we go to the repair cafe." },
        { de: "Die Heizung runterdrehen spart Geld und Energie.", en: "Turning the heating down saves money and energy." },
        { de: "Was kannst du im Alltag konkret ändern?", en: "What can you change concretely in everyday life?" },
        { de: "Ein Auto brauche ich nachts, trotzdem fahre ich tagsüber mit der Bahn.", en: "I need a car at night; even so I take the train during the day." },
        { de: "Meiner Meinung nach beginnt Umweltschutz in der Küche und im Keller, nicht nur in Reden.", en: "In my opinion environmental protection starts in the kitchen and the cellar, not only in speeches." }
      ],
      vocab: ["media"],
      grammar: ["connectors", "partizip"],
      lesen: ["lesen-1"],
      schreiben: ["b1-umwelt"]
    },
    {
      id: "society",
      title: "Society and volunteering",
      titleDe: "Gesellschaft und Ehrenamt",
      weight: "medium",
      official: true,
      blurb: "Helping neighbours, language tandems, clubs — keep it personal, not political theory.",
      exam: "Lesen volunteering ads. Sprechen Ehrenamt.",
      canDo: [
        "I can describe one concrete voluntary activity and one benefit plus one time problem.",
        "I can understand a Lesen ad for a club, tandem, or neighbourhood help.",
        "I can talk about living with other cultures at B1: neighbours, course, work.",
        "I can write a short enquiry about volunteering: when, tasks, contact.",
        "I can plan Teil 3: a charity sale or a tandem evening.",
        "I can stay personal and avoid political speeches."
      ],
      examHow: [
        "Lesen Teil 3: Ehrenamt, Verein, Tandem, Nachbarschaftshilfe.",
        "Sprechen Teil 2: Ehrenamt, Zusammenleben, Hilfe.",
        "Schreiben: b1-volunteer style enquiry.",
        "Hoeren: a club meeting moved to another hall.",
        "Teil 3: organise a small event for the course."
      ],
      subtopics: [
        "Ehrenamt im Verein oder in der Schule",
        "Sprachtandem",
        "Nachbarn helfen",
        "Zeitproblem",
        "Was man lernt",
        "Anzeigen: wer wird gesucht",
        "Zusammenleben in der Stadt",
        "Keine Politik-Essays"
      ],
      explain: "<p>Gesellschaft at B1 is neighbours and clubs. It is not a civics exam. One activity you do or would do is enough.</p><h3>The oral spine</h3><p><span class=\"de\">Ich helfe ehrenamtlich beim Deutschlernen / im Sportverein. Man lernt Leute kennen, aber man muss die Zeit einplanen. Zum Beispiel helfe ich samstags eine Stunde. Allerdings kann ich nicht jedes Wochenende, weil ich arbeite. Trotzdem finde ich das wichtig, weil ich selbst Hilfe bekommen habe.</span></p><h3>Ads</h3><p>Match: evenings, with children, German B1 needed, no car, two hours a week. A full-time night-shift worker will not match a Monday-morning library project.</p><h3>Letter</h3><p>Why you write, when you are free, what you can do, phone number. Sie if it is an organisation. Keep 100–120 words.</p><ul><li>If you do not volunteer, say what you would do and why you cannot yet (time, language, children).</li><li>Avoid party politics, religion arguments, and news-anchor German.</li></ul>",
      traps: [
        "A politics lecture. The card says Ehrenamt, not Bundestag.",
        "Matching a person with no evenings free to a club that meets at 19 Uhr only.",
        "Oral with no example hour or place.",
        "Forgetting a contact number on the enquiry letter."
      ],
      youMust: [
        "Describe one concrete activity and one benefit + one time problem.",
        "Read volunteer ads for when, who, and language level.",
        "Write an enquiry: when you can come, what you can do, number.",
        "Talk Zusammenleben with one neighbour or course example.",
        "Plan a small event in Teil 3 and decide.",
        "Use man lernt … aber man muss …",
        "Stay at B1: personal, not theoretical."
      ],
      chunks: [
        { de: "Ich helfe ehrenamtlich beim Deutschlernen / im Sportverein.", en: "I volunteer helping with German / at the sports club." },
        { de: "Man lernt Leute kennen, aber man muss die Zeit einplanen.", en: "You meet people, but you have to plan the time." },
        { de: "Zum Beispiel helfe ich samstags eine Stunde.", en: "For example I help for an hour on Saturdays." },
        { de: "Allerdings kann ich nicht jedes Wochenende, weil ich arbeite.", en: "However I cannot do every weekend because I work." },
        { de: "Ich interessiere mich für die Nachbarschaftshilfe in Ihrem Verein.", en: "I am interested in the neighbourhood help in your club." },
        { de: "Könnten Sie mir bitte sagen, wann Sie mich brauchen und welche Aufgaben ich hätte?", en: "Could you please tell me when you would need me and what tasks I would have?" },
        { de: "In unserem Haus helfen wir uns, zum Beispiel mit Paketen oder den Kindern.", en: "In our building we help each other, for example with parcels or the children." },
        { de: "Ein Tandem nützt beiden: ich übe Deutsch, mein Partner übt meine Sprache.", en: "A tandem helps both: I practise German, my partner practises my language." },
        { de: "Die Anzeige sucht Leute am Abend mit B1, zwei Stunden pro Woche.", en: "The ad is looking for people in the evening with B1, two hours a week." },
        { de: "Ich würde gerne helfen, sobald die Prüfung vorbei ist.", en: "I would like to help as soon as the exam is over." },
        { de: "Zusammenleben heißt für mich: Hallo sagen, leise sein, und einmal helfen.", en: "Living together means for me: say hello, be quiet, and help once." },
        { de: "Was könnten wir als Kurs für das Stadtteilfest machen?", en: "What could we as a course do for the neighbourhood festival?" }
      ],
      vocab: ["opinions", "civic", "feelings"],
      grammar: ["relative", "indef", "advconn", "compare"],
      lesen: ["lesen-2"],
      schreiben: ["b1-volunteer"]
    },
    {
      id: "letters",
      title: "Exam letters (skill)",
      titleDe: "Formelle und informelle Briefe",
      weight: "exam-core",
      official: true,
      blurb: "The writing paper is one letter. Missing a Leitpunkt can fail the task even if the German is good.",
      exam: "Schreiben 30 minutes, 45 points. Train every topic above as a letter.",
      canDo: [
        "I can memorise Sie vs du openings and closings and never mix them.",
        "I can turn four Leitpunkte into four full sentences with reasons.",
        "I can write a formal letter with one Koennten Sie bitte / Waere es moeglich.",
        "I can finish 100–120 words in 30 minutes from memory.",
        "I can choose the right situation: landlord, course, shop, bank, friend.",
        "I can check greeting, all points, closing, and my name before time ends."
      ],
      examHow: [
        "One task, 30 minutes, 45 of 225 written points.",
        "Four Leitpunkte — skip one and you lose content marks.",
        "Register is marked: du or Sie consistently.",
        "Wrong text type (a list, a story, the wrong person) can zero the paper.",
        "This is not A2 60–80 words in a shared 50-minute booklet — B1 is a dedicated half hour."
      ],
      subtopics: [
        "Formelle Anrede und Gruß",
        "Informelle Anrede und Gruß",
        "Vier Leitpunkte = vier Saetze mit Grund",
        "Konjunktiv II einmal",
        "Zahlen: Datum, Bestellnummer, Telefon",
        "Uhr im Raum: 5 min plan, 20 write, 5 check",
        "Themen: Wohnen, Amt, Arbeit, Gesundheit, Shop, Bank",
        "Modell weg, aus dem Gedaechtnis"
      ],
      explain: "<p>Schreiben is a skill topic that sits on top of Wohnen, Amt, Arbeit, Gesundheit, and Geld. The paper is one letter. Pretty German with three points covered can score worse than plain German with four.</p><h3>Openings and closings</h3><p>Formal: <span class=\"de\">Sehr geehrte Damen und Herren, / Sehr geehrte Frau …, / Sehr geehrter Herr …,</span> then <span class=\"de\">Mit freundlichen Grüßen</span> and your first and last name. Informal: <span class=\"de\">Liebe / Lieber …,</span> then <span class=\"de\">Liebe Grüße / Bis bald</span> and your first name. No <span class=\"de\">ich verbleibe</span> needed.</p><h3>The four-point machine</h3><p>Underline the bullets. Each bullet becomes a sentence with a reason or a detail (date, number, time you are home). Add <span class=\"de\">ich schreibe Ihnen, weil …</span> and one <span class=\"de\">Könnten Sie bitte …? Wäre es möglich, dass …?</span> in formal letters.</p><h3>Clock</h3><p>Minute 0–5: register + tick bullets. 5–25: write. 25–30: count points, add a missing sentence, check du/Sie. Aim 100–120 words. A complete short letter beats a perfect first paragraph and nothing else.</p><h3>Train from memory</h3><p>Hide the model. Write housing, course office, shop, bank, doctor, neighbour, informal invite. Then compare. Exam day you will not have this site.</p><ul><li>Invent a phone number and a date if the task does not give them — empty contact loses a point.</li><li>Do not copy official Modelltest letters. Original sentences only.</li></ul>",
      traps: [
        "Missing a Leitpunkt because you wrote a long greeting.",
        "du to the landlord or Sie to your friend in the same sitting.",
        "A shopping list of nouns instead of sentences.",
        "No polite request in a formal letter.",
        "Spending 20 minutes planning and 8 minutes writing."
      ],
      youMust: [
        "Memorise Sie vs du openings and closings.",
        "Four Leitpunkte = four full sentences with reasons.",
        "Formal: one Koennten Sie bitte / Waere es moeglich.",
        "Write from memory against the clock — do not copy models.",
        "Include a number: date, order number, or phone.",
        "Check register and all bullets in the last five minutes.",
        "Practise housing, Amt, work, health, shop, and invite as letters.",
        "Stop at 120 words and fix content, not decoration."
      ],
      chunks: [
        { de: "Sehr geehrte Damen und Herren, / Sehr geehrte Frau …, / Sehr geehrter Herr …,", en: "Formal openings." },
        { de: "Mit freundlichen Grüßen", en: "Formal closing (no ich verbleibe needed)." },
        { de: "Liebe / Lieber …,  Liebe Grüße / Bis bald", en: "Informal opening and closing." },
        { de: "ich schreibe Ihnen, weil …", en: "I am writing to you because …" },
        { de: "Könnten Sie bitte …? Wäre es möglich, dass …?", en: "Could you please …? Would it be possible that …?" },
        { de: "Ich habe schon …, aber es hat nicht geholfen.", en: "I already …, but it did not help." },
        { de: "Sie erreichen mich unter …, am besten nach 17 Uhr.", en: "You can reach me at …, preferably after 5 p.m." },
        { de: "Vielen Dank im Voraus. Ich freue mich auf Ihre Antwort.", en: "Thank you in advance. I look forward to your reply." },
        { de: "Danke für deine Nachricht. Leider kann ich nicht, weil …", en: "Thanks for your message. Unfortunately I cannot, because …" },
        { de: "Anrede, vier Punkte, Gruß — dann ist der Brief fertig.", en: "Opening, four points, closing — then the letter is done." },
        { de: "Bitte nennen Sie mir ein Datum und eine Uhrzeit.", en: "Please give me a date and a time." },
        { de: "Falls Sie noch Fragen haben, rufen Sie mich an.", en: "If you have more questions, call me." },
        { de: "Ich bitte um Verständnis und um eine kurze Rückmeldung.", en: "I ask for understanding and for a short reply." }
      ],
      vocab: ["examday", "function", "letters"],
      grammar: ["konjunktiv2", "wordorder", "imperative", "verbplus", "negation", "questions", "pronouns"],
      schreiben: ["complaint", "course-office", "online-shop", "info-job", "b1-bank", "b1-vhs", "b1-lost", "neighbour-noise", "doctor-sick", "informal-invite"]
    },
    {
      id: "feste",
      title: "Festivals, holidays, traditions",
      titleDe: "Feste, Feiertage, Traditionen",
      weight: "high",
      official: true,
      blurb: "Geburtstag, Weihnachten, Feiertage in Deutschland — favourite Sprechen Teil 2 and informal letters.",
      exam: "Sprechen: Feste in Ihrem Land / in Deutschland. Schreiben: party invite or thanks. Lesen: event ads.",
      canDo: [
        "I can talk 90 seconds about a celebration with because, example, and allerdings.",
        "I can compare a feast in my country with one in Germany without a culture lecture.",
        "I can write an informal invitation or a thank-you after a party.",
        "I can plan Teil 3: a birthday, a picnic, a course party — Tag, Ort, Kosten, Plan B.",
        "I can understand event notices: date, rain plan, bring food.",
        "I can name public holidays at word level: Weihnachten, Ostern, Silvester, Tag der Deutschen Einheit."
      ],
      examHow: [
        "Sprechen Teil 2: Feste, Traditionen, Geburtstag, Weihnachten.",
        "Teil 3: plan a party or a gift — you must agree.",
        "Schreiben: informal invite, thanks, or postpone a celebration.",
        "Lesen Teil 3: festivals, markets, club parties.",
        "Hoeren: the party moved from Saturday to Sunday."
      ],
      subtopics: [
        "Geburtstag: einladen, danken, schenken",
        "Weihnachten, Ostern, Silvester",
        "Feiertage in Deutschland (recognition)",
        "Feste in meinem Land",
        "Was man isst und mitbringt",
        "Oeffentliche Feste: Markt, Feuerwerk",
        "Teil 3 Party: Budget und Plan B",
        "Religioese Details — keep light and personal"
      ],
      explain: "<p>telc B1 oral cards love <span class=\"de\">Feste</span>. Leisure already trains the Teil 3 machine. This topic is the content: what you celebrate, why it matters to you, one contrast with Germany.</p><h3>90-second spine</h3><p><span class=\"de\">In meiner Familie ist das wichtigste Fest … Wir feiern das, weil die Verwandten zusammenkommen. Zum Beispiel essen wir … und schenken uns kleine Dinge. In Deutschland finde ich Weihnachten / den Weihnachtsmarkt interessant. Allerdings arbeite ich an manchen Feiertagen, deshalb feiere ich oft am Wochenende danach. Und du? Welches Fest magst du?</span> Four moves: what, why, example, allerdings, question.</p><h3>Germany at B1 depth</h3><p>Recognise <span class=\"de\">Weihnachten, Heiligabend, Ostern, Silvester, der 3. Oktober, der 1. Mai, Karneval/Fasching</span> in Lesen. You do not need a history essay. One honest sentence: <span class=\"de\">Am 3. Oktober haben viele Leute frei. Am Weihnachtsmarkt trinke ich Glühwein, obwohl es kalt ist.</span></p><h3>Letters</h3><p>Invite: when, where, what to bring, how to answer. Thanks: what you liked, a photo, a next date. Postpone: reason + new suggestion + <span class=\"de\">Wäre … möglich?</span></p><h3>Teil 3</h3><p>Budget, vegetarian food, rain plan, who buys the cake. Close with <span class=\"de\">Einverstanden</span>.</p><ul><li>Stay personal. Do not preach religion or politics.</li><li>If you do not celebrate: say so and describe a family meal or a public market instead.</li></ul>",
      traps: [
        "A Wikipedia talk on German history with no Ich.",
        "Teil 3: listing cakes for six minutes and never deciding the time.",
        "An invite with no Uhrzeit.",
        "Mixing Sie and du in a friend thank-you."
      ],
      youMust: [
        "Talk 90 seconds: what, why, example, allerdings, Und du?",
        "Name one German holiday and one from your country.",
        "Write an invite with Tag, Ort, mitbringen.",
        "In Teil 3: budget + Plan B + Einverstanden.",
        "Thank someone after a party in 80–100 words.",
        "Read an event ad for date, price, and weather note."
      ],
      chunks: [
        { de: "Das wichtigste Fest in meiner Familie ist …", en: "The most important celebration in my family is …" },
        { de: "Wir feiern das, weil die Verwandten zusammenkommen.", en: "We celebrate that because the relatives get together." },
        { de: "In Deutschland finde ich den Weihnachtsmarkt interessant.", en: "In Germany I find the Christmas market interesting." },
        { de: "Allerdings arbeite ich an manchen Feiertagen.", en: "However I work on some public holidays." },
        { de: "Am 3. Oktober haben viele Leute frei.", en: "On 3 October many people have the day off." },
        { de: "Hast du Lust, am Samstag zu meiner Geburtstagsfeier zu kommen?", en: "Do you feel like coming to my birthday party on Saturday?" },
        { de: "Bring bitte etwas zu essen mit. Vegetarisch wäre super.", en: "Please bring something to eat. Vegetarian would be great." },
        { de: "Was machen wir, wenn es regnet — Wohnung oder Café?", en: "What do we do if it rains — flat or café?" },
        { de: "Vielen Dank für die Einladung. Die Feier war wirklich schön.", en: "Thanks a lot for the invitation. The party was really nice." },
        { de: "Leider kann ich nicht, weil ich arbeiten muss. Wäre Sonntag möglich?", en: "Unfortunately I cannot because I have to work. Would Sunday be possible?" },
        { de: "Silvester feiern wir mit Freunden und einem Spaziergang.", en: "We celebrate New Year’s Eve with friends and a walk." },
        { de: "Und du? Welches Fest magst du besonders?", en: "And you? Which celebration do you especially like?" }
      ],
      vocab: ["daily", "world"],
      grammar: ["connectors", "konjunktiv2", "imperative"],
      schreiben: ["informal-invite", "b1-feste", "b1-weather", "b1-neighbour"]
    }
  ]
};
