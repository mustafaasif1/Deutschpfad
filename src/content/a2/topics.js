export default {
  examFormat: {
    name: "telc Deutsch A2 / Start Deutsch 2",
    notThisExam: "Classic adult A2 — not the scaled telc A2·B1 DTZ (that exam has a different Lesen/Hoeren-und-Schreiben booklet). Not Goethe-only branding; Start Deutsch 2 was jointly developed.",
    officialUrl: "https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/start-deutsch-2-/-telc-deutsch-a2/",
    passRule: "Total 60 points (Hoeren 15, Lesen 15, Schreiben 15, Sprechen 15). Pass is typically 60 percent overall (36/60). Confirm at your centre whether they also require a pass in each half. Aim 80 percent in this gym so exam day feels slow.",
    points: { hoeren: 15, lesen: 15, schreiben: 15, sprechen: 15, total: 60, passPercent: 60, passRaw: 36 },
    written: [
      { name: "Hören", parts: 3, minutes: 20, points: 15, items: "~15", note: "About 20 minutes, three parts. Announcements, short dialogues, a longer conversation. Train once vs twice like the real CD. 15 points." },
      { name: "Lesen", parts: 3, minutes: 50, points: 15, items: "short texts + ads + one longer text", note: "Same 50-minute booklet as Schreiben (Lesen + Schreiben together). Headlines or matching, notices/ads, a longer everyday text. A2 does NOT have a separate 90-minute Sprachbausteine paper like B1." },
      { name: "Schreiben", parts: 2, minutes: 0, points: 15, items: "note + short letter ~60–80 words", note: "Same 50-minute block as Lesen. A2 letters are shorter than B1 but still need all content points and the right register (du vs Sie)." }
    ],
    oral: {
      parts: 3,
      minutes: 15,
      prep: 0,
      points: 15,
      note: "Pair exam, about 15 minutes, typically no 20-minute B1 prep room. Teil 1: introduce yourselves. Teil 2: Alltag conversation with word or picture cards. Teil 3: negotiate a simple plan (time, place, what to bring) and actually agree."
    }
  },
  topics: [
    {
      id: "personal",
      title: "Biography and people",
      titleDe: "Person und Beziehungen",
      weight: "always",
      official: true,
      blurb: "A1 intro plus character, invitations, and a short life story in Perfekt.",
      exam: "Sprechen Teil 1. Informal messages. Lesen short bios.",
      canDo: [
        "I can introduce myself with origin, how long I have lived here, and what I do.",
        "I can tell a short life story in Perfekt: moved, started a course, met people.",
        "I can describe a person with two adjectives and one example.",
        "I can invite, accept, or decline with a weil-reason.",
        "I can ask follow-up questions so Teil 1 is a conversation, not a monologue.",
        "I can write a 60-word message about a visit or a party."
      ],
      examHow: [
        "Sprechen Teil 1: contact with your partner — not a memorised speech at the wall.",
        "Teil 2 cards: Familie, Freunde, Charakter.",
        "Schreiben: informal invitation or thanks.",
        "Lesen: a short biography with times and places.",
        "Hoeren: who is coming, when, and why someone cannot."
      ],
      subtopics: [
        "Name, Herkunft, Wohnort, seit wann",
        "Beruf oder Ausbildung in two sentences",
        "Familie und Freunde",
        "Charakter: freundlich, ruhig, stressig",
        "Einladung, Zusage, Absage",
        "Umzug und Kursbeginn im Perfekt",
        "du-Anrede in messages",
        "Fragen stellen in Teil 1"
      ],
      explain: "<p>A2 <span class=\"de\">Person</span> is A1 facts plus a past. Examiners want to hear <span class=\"de\">ich bin … gezogen / ich habe … angefangen / ich habe … getroffen</span>.</p><h3>Teil 1 spine</h3><p><span class=\"de\">Ich heiße … und komme aus … Ich wohne seit einem Jahr in … und mache eine Ausbildung / ich arbeite als … In der Freizeit … Und du? Wie lange wohnst du schon hier?</span> The last question is the difference between A1 and A2.</p><h3>A short life story</h3><p>Four Perfekt sentences are enough: <span class=\"de\">Ich bin 2023 nach Deutschland gekommen. Zuerst habe ich in einem Hotel gearbeitet. Dann habe ich einen Deutschkurs angefangen. Am Wochenende habe ich Freunde getroffen.</span> Use <span class=\"de\">sein</span> for come/go/move: <span class=\"de\">gekommen, gegangen, gezogen</span>.</p><h3>Invitations</h3><p><span class=\"de\">Hast du Lust, am Freitag mitzukommen? Leider kann ich nicht, weil ich arbeiten muss. Schade. Dann nächste Woche?</span> <span class=\"de\">weil</span> sends the verb to the end — that is the A2 mark.</p><ul><li>Do not recite a B1 biography with Konjunktiv II.</li><li>Character words: <span class=\"de\">freundlich, hilfsbereit, ungeduldig, zuverlässig</span> plus one example.</li></ul>",
      traps: [
        "Ich habe nach Berlin gegangen (wrong auxiliary). Say ich bin … gegangen / gezogen.",
        "A 90-second monologue with no question to the partner.",
        "Declining an invitation with no reason.",
        "Mixing Sie and du in a friend message."
      ],
      youMust: [
        "Tell who you are in Perfekt: moved, started a course, met people.",
        "Say seit + time for how long you have lived here.",
        "Ask two follow-up questions in Teil 1.",
        "Invite, accept, or decline with weil.",
        "Describe a person with two adjectives.",
        "Write a 60-word informal message with greeting and closing."
      ],
      chunks: [
        { de: "Ich wohne seit einem Jahr in … und mache eine Ausbildung.", en: "I have lived in … for a year and I am doing training." },
        { de: "Ich bin 2023 nach Deutschland gekommen.", en: "I came to Germany in 2023." },
        { de: "Am Wochenende habe ich Freunde getroffen.", en: "At the weekend I met friends." },
        { de: "Wir verstehen uns gut.", en: "We get on well." },
        { de: "Hast du Lust, am Freitag mitzukommen?", en: "Do you feel like coming along on Friday?" },
        { de: "Leider kann ich nicht, weil ich arbeiten muss.", en: "Unfortunately I cannot, because I have to work." },
        { de: "Und du? Wie lange wohnst du schon hier?", en: "And you? How long have you lived here?" },
        { de: "Meine Freundin ist hilfsbereit und oft zu beschäftigt.", en: "My friend is helpful and often too busy." },
        { de: "Früher habe ich in … gelebt.", en: "I used to live in …" },
        { de: "Danke für die Einladung. Ich komme gerne.", en: "Thanks for the invitation. I will gladly come." },
        { de: "Können wir uns am Sonntag treffen?", en: "Can we meet on Sunday?" },
        { de: "Ich erzähle kurz von mir, und dann bist du dran.", en: "I will say a bit about myself, then it is your turn." }
      ],
      vocab: ["people"],
      grammar: ["a2-perfekt"],
      schreiben: ["a2-invite"]
    },
    {
      id: "housing",
      title: "Housing",
      titleDe: "Wohnen und WG",
      weight: "exam-core",
      official: true,
      blurb: "Rent, furniture, neighbours, heating — the bridge to B1 complaint letters.",
      exam: "Schreiben landlord. Lesen WG ads. Sprechen: Wohnung beschreiben.",
      canDo: [
        "I can describe a flat: rooms, floor, rent, location.",
        "I can understand a WG or Zimmer ad: price, who they want, from when.",
        "I can report a problem: what, since when, what I want.",
        "I can write a polite Sie-message to a landlord.",
        "I can talk about neighbours and noise in simple terms.",
        "I can compare city vs countryside with one weil and one aber."
      ],
      examHow: [
        "Lesen: Zimmer frei, Miete inkl. Nebenkosten, Nichtraucher, ab 1. Mai.",
        "Schreiben: Heizung, Schimmel, or a broken fridge — short A2 letter.",
        "Sprechen Teil 2: Wohnen in der Stadt / auf dem Land.",
        "Hoeren: a caretaker says when the technician will come.",
        "Teil 3: plan a move or a WG party."
      ],
      subtopics: [
        "Wohnung, Haus, WG, Zimmer, Moebel",
        "Miete, Nebenkosten, Kaution (recognition)",
        "Etage, Lage, Balkon, ruhig / laut",
        "Heizung, Wasser, Licht, kaputt",
        "Nachbarn, Laerm, Hausmeister",
        "Anzeigen lesen",
        "Brief an den Vermieter (Sie)",
        "Umzug"
      ],
      explain: "<p>A2 housing is description plus one problem. You are not writing a B1 four-point complaint, but the same words start here.</p><h3>Describe the flat</h3><p><span class=\"de\">Ich wohne in einer Dreizimmerwohnung im dritten Stock. Die Miete ist 650 Euro inklusive Nebenkosten. Die Lage ist gut, nah an der Bahn. Die Wohnung ist hell, aber klein.</span> Floor trap: <span class=\"de\">Erdgeschoss</span> is the ground floor (US first). <span class=\"de\">dritter Stock</span> is not 13 — Hören loves that swap.</p><h3>Read an ad</h3><p>Scan: price, rooms, from when, who (student, quiet, no pets). Synonyms: <span class=\"de\">ruhig ≈ wenig Lärm, zentral ≈ in der Stadt, Warmmiete ≈ inklusive Nebenkosten</span>.</p><h3>The problem message</h3><p>Four lines: greeting, problem + since when, what you want, closing. <span class=\"de\">Sehr geehrte Frau Lang, die Heizung funktioniert seit Montag nicht. Könnten Sie bitte einen Techniker schicken? Ich bin nach 17 Uhr zu Hause. Mit freundlichen Grüßen</span> One polite <span class=\"de\">Könnten Sie bitte</span> is enough A2 politeness.</p><ul><li>seit + time is the exam fact: since Monday, not just kaputt.</li><li>Stay at 60–80 words. Do not invent legal German.</li></ul>",
      traps: [
        "Writing 120 B1 words and missing since when.",
        "du to the landlord.",
        "Reading inkl. Nebenkosten as extra costs on top.",
        "Hearing dritter Stock as 13, or mixing US and German floor numbers.",
        "Describing every piece of furniture instead of rooms + rent + problem."
      ],
      youMust: [
        "Describe a problem + since when + what you want.",
        "Say rooms, floor, rent, and location.",
        "Read a WG ad for price, start date, and who they want.",
        "Write a Sie-message with Koennten Sie bitte.",
        "Talk Stadt vs Land with weil and aber.",
        "Use mit dem Hausmeister / bei den Nachbarn (dative chunks)."
      ],
      chunks: [
        { de: "Die Heizung funktioniert seit Montag nicht.", en: "The heating has not worked since Monday." },
        { de: "Könnten Sie bitte einen Techniker schicken?", en: "Could you please send a technician?" },
        { de: "Die WG sucht eine ruhige Mitbewohnerin.", en: "The shared flat is looking for a quiet roommate." },
        { de: "Die Miete ist inklusive Nebenkosten.", en: "Rent includes utilities." },
        { de: "Ich wohne im dritten Stock, nah an der Bahn.", en: "I live on the third floor, near the train." },
        { de: "Die Nachbarn sind nach 22 Uhr sehr laut.", en: "The neighbours are very loud after 10 p.m." },
        { de: "Ich habe schon den Hausmeister informiert.", en: "I already informed the caretaker." },
        { de: "Das Zimmer ist ab dem ersten Juni frei.", en: "The room is free from 1 June." },
        { de: "In der Stadt ist alles nah, aber die Miete ist hoch.", en: "In the city everything is close, but rent is high." },
        { de: "Auf dem Land ist es ruhig, weil wenig Verkehr da ist.", en: "In the countryside it is quiet because there is little traffic." },
        { de: "Im Bad ist Schimmel. Das ist ungesund.", en: "There is mould in the bathroom. That is unhealthy." },
        { de: "Wäre ein Termin nach 17 Uhr möglich?", en: "Would an appointment after 5 p.m. be possible?" }
      ],
      vocab: ["home"],
      grammar: ["a2-dativ", "a2-letters"],
      schreiben: ["a2-problem", "a2-landlord"]
    },
    {
      id: "daily",
      title: "Daily life and free time",
      titleDe: "Alltag und Freizeit",
      weight: "high",
      official: true,
      blurb: "Routines, hobbies, cinema, sport, plans with weil.",
      exam: "Sprechen Teil 2 Alltag cards. Informal invitations. Hoeren: change of plan.",
      canDo: [
        "I can tell a weekday in the present and yesterday in Perfekt.",
        "I can talk about hobbies with a reason.",
        "I can make, accept, or change a plan with time and place.",
        "I can use separable verbs in both tenses (stehe auf / bin aufgestanden).",
        "I can understand a cinema or club notice.",
        "I can write a weekend story of 60–80 words."
      ],
      examHow: [
        "Sprechen Teil 2: Alltag conversation with cards (not a speech).",
        "Teil 3: plan an evening — you must agree.",
        "Schreiben: weekend, cinema, invitation.",
        "Hoeren: the meeting moved from 18 to 19 Uhr.",
        "Lesen: event ads — price, time, who it is for."
      ],
      subtopics: [
        "Tagesablauf mit Uhrzeiten",
        "trennbare Verben",
        "Wochenende im Perfekt",
        "Hobbys und Sport",
        "Kino, Verein, Party",
        "Einladung und Plan B",
        "Stress und Zeit",
        "weil / deshalb in plans"
      ],
      explain: "<p>A2 Alltag is the oral engine. Teil 2 is a conversation about everyday cards, not a B1 90-second topic talk.</p><h3>Two tenses</h3><p>Today: <span class=\"de\">Ich stehe um sieben auf und fahre zur Arbeit.</span> Yesterday: <span class=\"de\">Gestern bin ich um acht aufgestanden und habe bis 17 Uhr gearbeitet.</span> If you only use the present, you sound A1.</p><h3>Freizeit with a reason</h3><p><span class=\"de\">Am Samstag bin ich ins Kino gegangen, weil der Film gut war. Ich mache Sport, weil ich den Kopf frei bekommen möchte. Leider habe ich wenig Zeit, deshalb treffe ich Freunde nur am Wochenende.</span></p><h3>Teil 3 plan</h3><p>Suggest, react, decide: <span class=\"de\">Ich schlage vor, dass wir uns am Freitag treffen. Einverstanden. Dann um 19 Uhr vor dem Kino. Wenn es regnet, gehen wir ins Café.</span> A pair that never decides loses task points.</p><ul><li>Cards give you words — use them, then add one weil.</li><li>Do not lecture about work-life balance. Stay personal.</li></ul>",
      traps: [
        "Teil 2 as a monologue while the partner waits.",
        "Planning three options and agreeing on none.",
        "ich habe gegangen instead of ich bin gegangen.",
        "A weekend story with no time and no place."
      ],
      youMust: [
        "Weekend story in Perfekt + one reason with weil.",
        "Tell today in present and yesterday in Perfekt.",
        "Suggest, react, and decide in Teil 3.",
        "Use aufstehen / einkaufen / mitkommen in both tenses.",
        "Invite with day, time, place, and a Plan B for rain.",
        "Ask the partner Was machst du am Wochenende?"
      ],
      chunks: [
        { de: "Am Samstag bin ich ins Kino gegangen, weil der Film gut war.", en: "On Saturday I went to the cinema because the film was good." },
        { de: "Hast du Lust, am Freitag mitzukommen?", en: "Do you feel like coming along on Friday?" },
        { de: "Leider kann ich nicht, weil ich arbeiten muss.", en: "Unfortunately I cannot, because I have to work." },
        { de: "Gestern bin ich um sieben aufgestanden.", en: "Yesterday I got up at seven." },
        { de: "Ich schlage vor, dass wir uns am Samstag treffen.", en: "I suggest that we meet on Saturday." },
        { de: "Einverstanden. Dann machen wir das so.", en: "Agreed. Then let’s do it that way." },
        { de: "Wenn es regnet, gehen wir ins Museum.", en: "If it rains, we go to the museum." },
        { de: "In der Freizeit gehe ich schwimmen / in einen Verein.", en: "In my free time I go swimming / to a club." },
        { de: "Unter der Woche habe ich Stress, am Wochenende habe ich Zeit.", en: "On weekdays I have stress; at the weekend I have time." },
        { de: "Was machen wir, wenn das Kino voll ist?", en: "What do we do if the cinema is full?" },
        { de: "Ich habe gestern bis spaet gearbeitet und dann Pizza bestellt.", en: "Yesterday I worked late and then ordered pizza." },
        { de: "Sollen wir etwas zu essen mitbringen?", en: "Should we bring something to eat?" }
      ],
      vocab: ["daily"],
      grammar: ["a2-connectors", "a2-separable"],
      schreiben: ["a2-cinema", "a2-invite"]
    },
    {
      id: "food",
      title: "Food and restaurants",
      titleDe: "Essen und Restaurant",
      weight: "high",
      official: true,
      blurb: "Orders, reservations, likes and dislikes with reasons.",
      exam: "Hoeren restaurant. Short messages. Sprechen: Ernahrung, kochen.",
      canDo: [
        "I can reserve a table and order a meal.",
        "I can complain politely if something is wrong.",
        "I can say what I eat and why, including no meat / no pork.",
        "I can understand a simple menu and a bill.",
        "I can shop for food and talk about cooking at home.",
        "I can write a short message about a restaurant plan."
      ],
      examHow: [
        "Hoeren: reservation time, number of people, a wrong order.",
        "Sprechen cards: Restaurant, kochen, gesund, vegetarisch.",
        "Lesen: menu, Oeffnungszeiten, Tagesgericht.",
        "Schreiben: meet at a restaurant or cancel a dinner.",
        "Teil 3: plan a meal — who cooks, what to buy, allergy."
      ],
      subtopics: [
        "Reservierung und Bestellung",
        "Speisekarte, Rechnung, Trinkgeld (recognition)",
        "vegetarisch, kein Schwein, Allergie",
        "schmeckt, kalt, zu salzig",
        "zu Hause kochen vs Restaurant",
        "Markt und Supermarkt",
        "gesund / ungesund mit weil",
        "Einladung zum Essen"
      ],
      explain: "<p>A2 food adds reasons and a polite complaint. A1 was <span class=\"de\">ich möchte einen Kaffee</span>. A2 is <span class=\"de\">ich esse kein Fleisch, weil ich Vegetarier / Vegetarierin bin</span> and <span class=\"de\">die Suppe ist kalt</span>.</p><h3>Reserve and order</h3><p><span class=\"de\">Ich möchte einen Tisch für zwei Personen um 19 Uhr reservieren. Auf den Namen … Haben Sie einen Tisch am Fenster? Ich nehme die Suppe und den Salat.</span></p><h3>When something is wrong</h3><p>Stay polite: <span class=\"de\">Entschuldigung, die Suppe ist kalt. Könnten Sie sie bitte noch einmal warm machen? Danke.</span> That is enough. No B1 lawyer letter to the restaurant chain.</p><h3>Opinions</h3><p><span class=\"de\">Ich koche oft selbst, weil es billiger und gesünder ist. Im Restaurant esse ich gern, aber es ist teuer. Fast Food ist schnell, allerdings nicht gut für die Gesundheit.</span> One <span class=\"de\">weil</span> and one <span class=\"de\">aber / allerdings</span> is the A2 target.</p><ul><li>Allergies: <span class=\"de\">Ich vertrage kein … / Ich habe eine Allergie gegen …</span></li><li>Adjective endings appear on menus: <span class=\"de\">einen großen Salat, eine kleine Cola</span>.</li></ul>",
      traps: [
        "Ordering without a number of people or a time when reserving.",
        "A rude complaint (Das ist scheiße) — the exam wants polite A2.",
        "Listing 20 foods with no reason.",
        "Writing a B1 online-shop return instead of a dinner plan."
      ],
      youMust: [
        "Reserve a table. Complain politely if something is wrong.",
        "Give a food preference with weil.",
        "Order with einen / eine / ein and a simple adjective.",
        "Plan a meal: time, place, who brings what.",
        "Read a menu for price and one dish.",
        "Write a 60-word dinner invitation or cancellation."
      ],
      chunks: [
        { de: "Ich möchte einen Tisch für zwei Personen um 19 Uhr reservieren.", en: "I would like to book a table for two at 7 p.m." },
        { de: "Das Essen schmeckt gut, aber die Suppe ist kalt.", en: "The food tastes good, but the soup is cold." },
        { de: "Ich esse kein Fleisch, weil ich Vegetarier / Vegetarierin bin.", en: "I do not eat meat because I am vegetarian." },
        { de: "Könnten Sie die Suppe bitte noch einmal warm machen?", en: "Could you please heat the soup again?" },
        { de: "Ich koche oft selbst, weil es billiger ist.", en: "I often cook myself because it is cheaper." },
        { de: "Haben Sie etwas ohne Milch? Ich habe eine Allergie.", en: "Do you have something without milk? I have an allergy." },
        { de: "Die Rechnung, bitte. Wir zahlen getrennt / zusammen.", en: "The bill, please. We pay separately / together." },
        { de: "Am Markt ist das Obst frischer als im Supermarkt.", en: "At the market the fruit is fresher than in the supermarket." },
        { de: "Sollen wir am Freitag essen gehen?", en: "Shall we go out to eat on Friday?" },
        { de: "Ich bringe einen Salat mit.", en: "I will bring a salad." },
        { de: "Das Tagesgericht ist zu teuer für mich.", en: "The dish of the day is too expensive for me." },
        { de: "Ich hätte gern einen großen Tee, bitte.", en: "I would like a large tea, please." }
      ],
      vocab: ["food"],
      grammar: ["a2-adjectives"]
    },
    {
      id: "work",
      title: "Work and training",
      titleDe: "Arbeit und Ausbildung",
      weight: "exam-core",
      official: true,
      blurb: "Jobs, hours, simple CV facts, missing a day of work or course.",
      exam: "Lesen job ads. Schreiben course office. Sprechen: Beruf, Arbeitszeiten.",
      canDo: [
        "I can say what I do, when I work, and how I get there.",
        "I can understand a simple job or course ad: hours, start, place.",
        "I can write why I miss a day and how I can be reached.",
        "I can talk about Ausbildung vs job vs course.",
        "I can say what I like or do not like about work with weil.",
        "I can ask about times, tasks, or a part-time option in simple German."
      ],
      examHow: [
        "Lesen: Stellenanzeige — Teilzeit, Schicht, Deutsch A2, ab sofort.",
        "Schreiben: course office or workplace absence.",
        "Sprechen Teil 2: Arbeit, Kollegen, Homeoffice at A2 depth.",
        "Hoeren: a shift change or a cancelled class.",
        "Teil 3: plan who covers a shift or who brings materials."
      ],
      subtopics: [
        "Beruf, Stelle, Ausbildung, Praktikum",
        "Vollzeit, Teilzeit, Schicht, Pause",
        "Kollegen, Chef, Buero, Homeoffice",
        "Arbeitsweg",
        "Stellenanzeigen lesen",
        "Fehlen: krank, Termin, Kind",
        "Kursbuero-Nachricht",
        "Warum ich arbeite / lerne"
      ],
      explain: "<p>A2 work is hours and absence, not labour law. You describe a job and you write to the course office.</p><h3>What you do</h3><p><span class=\"de\">Ich mache eine Ausbildung zum / zur … Ich jobbe am Wochenende, weil die Miete hoch ist. Ich arbeite in Teilzeit von 9 bis 14 Uhr. Der Weg dauert 30 Minuten mit der Bahn.</span></p><h3>Read an ad</h3><p>Hunt: start date, hours, language level, place, pay if given. <span class=\"de\">ab sofort, Teilzeit möglich, Deutschkenntnisse, Erfahrung nicht nötig</span>.</p><h3>Missing a day</h3><p><span class=\"de\">Sehr geehrte Frau Lang, leider kann ich morgen nicht arbeiten / nicht zum Kurs kommen, weil ich zum Arzt muss. Könnten Sie mir bitte sagen, was ich nachholen muss? Meine Nummer ist … Mit freundlichen Grüßen</span> Cover reason, what you need, contact.</p><ul><li>Ausbildung is vocational training, not just any course.</li><li>Stay A2: no B1 Praktikum enquiry with four Leitpunkte unless you keep it short.</li></ul>",
      traps: [
        "A CV novel. Two sentences about the job are the oral task.",
        "Missing the reason in an absence message.",
        "Reading Teilzeit as full-time.",
        "du to the course office."
      ],
      youMust: [
        "Say what you do, when you work, why you miss a day.",
        "Read a job ad for hours, start, and place.",
        "Write a Sie-message to the course office.",
        "Use weil when you say why the job is good or hard.",
        "Name Vollzeit / Teilzeit / Schicht.",
        "Ask Welche Aufgaben habe ich? Ist Teilzeit moeglich?"
      ],
      chunks: [
        { de: "Ich mache eine Ausbildung zum / zur …", en: "I am training as a …" },
        { de: "Ich jobbe am Wochenende, weil die Miete hoch ist.", en: "I work weekends because the rent is high." },
        { de: "Leider kann ich morgen nicht arbeiten, weil ich zum Arzt muss.", en: "I cannot work tomorrow because I have to go to the doctor." },
        { de: "Ich arbeite in Teilzeit von 9 bis 14 Uhr.", en: "I work part-time from 9 to 2." },
        { de: "Der Arbeitsweg dauert 30 Minuten mit der Bahn.", en: "The commute takes 30 minutes by train." },
        { de: "Die Stelle ist ab sofort, Teilzeit ist möglich.", en: "The job is from now; part-time is possible." },
        { de: "Könnten Sie mir bitte sagen, welchen Stoff ich nachholen muss?", en: "Could you please tell me which material I have to catch up?" },
        { de: "Die Kollegen sind nett, aber die Arbeit ist stressig.", en: "The colleagues are nice, but the work is stressful." },
        { de: "Zu Hause spare ich Zeit, trotzdem brauche ich Kollegen.", en: "At home I save time; even so I need colleagues." },
        { de: "Ich suche ein Praktikum in einem Büro.", en: "I am looking for an internship in an office." },
        { de: "Welche Sprachen brauchen Sie?", en: "Which languages do you need?" },
        { de: "Meine Nummer ist 0176 … — bitte rufen Sie mich an.", en: "My number is … — please call me." }
      ],
      vocab: ["work"],
      grammar: ["a2-modals"],
      schreiben: ["a2-course"]
    },
    {
      id: "health",
      title: "Health",
      titleDe: "Gesundheit",
      weight: "high",
      official: true,
      blurb: "Symptoms, pharmacy, simple insurance words, appointments.",
      exam: "Hoeren doctor. Messages to cancel. Sprechen: gesund leben.",
      canDo: [
        "I can say what hurts, since when, and ask for an appointment.",
        "I can get a simple medicine at the pharmacy.",
        "I can cancel a course or a visit because I am ill.",
        "I can talk about healthy habits with weil.",
        "I can understand a reminder SMS or a practice notice.",
        "I can recognise Krankenkasse and Rezept without explaining them."
      ],
      examHow: [
        "Hoeren: doctor or pharmacy — time, medicine, closed at noon.",
        "Schreiben: cancel because of illness; ask about the next lesson.",
        "Sprechen: Sport, Essen, Schlaf — A2 opinions.",
        "Lesen: Praxis geschlossen, Vertretung, Notdienst.",
        "Teil 3: who takes the child to the doctor, who cooks soup."
      ],
      subtopics: [
        "Symptome und seit wann",
        "Termin vereinbaren oder absagen",
        "Apotheke und Medikament",
        "Krankschreibung (recognition)",
        "Krankenkasse, Rezept (recognition)",
        "gesund leben: Sport, Schlaf, Essen",
        "Kind ist krank",
        "Nachricht an Kurs oder Arbeit"
      ],
      explain: "<p>A2 health adds <span class=\"de\">seit wann</span>, a cancel message, and a tiny opinion about healthy living. Still not a B1 insurance letter.</p><h3>At the doctor</h3><p><span class=\"de\">Ich habe seit zwei Tagen Fieber und Husten. Kann ich bitte einen Termin heute Nachmittag bekommen? Brauche ich eine Krankschreibung?</span> Listen for the time they give you — that is the Hoeren item.</p><h3>Pharmacy</h3><p><span class=\"de\">Ich brauche ein Medikament gegen Kopfschmerzen. Ist das rezeptfrei? Wie oft soll ich das nehmen?</span></p><h3>Cancel in writing</h3><p><span class=\"de\">Liebe Sara, ich bin krank und kann am Freitag nicht kommen. Geht es dir gut, wenn wir uns nächste Woche treffen? Gute Besserung auch an dich, falls du etwas brauchst. Liebe Grüße</span> Or Sie to the course: reason + what you need + number.</p><h3>Opinion</h3><p><span class=\"de\">Ich finde Sport wichtig, weil ich dann besser schlafe. Allerdings habe ich unter der Woche wenig Zeit.</span></p><ul><li>Recognition only: <span class=\"de\">Krankenkasse, Überweisung, Rezept</span>.</li><li>Do not invent diagnoses.</li></ul>",
      traps: [
        "Missing since when — examiners listen for seit.",
        "A medical lecture. Name two symptoms and stop.",
        "Forgetting to propose a new time when you cancel.",
        "Mixing du and Sie in the cancel message."
      ],
      youMust: [
        "Symptoms + since when + ask for an appointment.",
        "Cancel a plan because you are ill and suggest a new time.",
        "Ask for medicine and how to take it.",
        "Give one healthy-living opinion with weil and allerdings.",
        "Read Praxis geschlossen / Notdienst.",
        "Recognise Krankenkasse and Rezept."
      ],
      chunks: [
        { de: "Ich habe seit zwei Tagen Fieber und Husten.", en: "I have had a fever and a cough for two days." },
        { de: "Kann ich bitte einen Termin heute Nachmittag bekommen?", en: "Can I please get an appointment this afternoon?" },
        { de: "Ich brauche ein Medikament gegen Kopfschmerzen.", en: "I need medicine for a headache." },
        { de: "Brauche ich eine Krankschreibung für die Arbeit?", en: "Do I need a sick note for work?" },
        { de: "Leider bin ich krank und kann nicht kommen.", en: "Unfortunately I am ill and cannot come." },
        { de: "Können wir uns nächste Woche treffen?", en: "Can we meet next week?" },
        { de: "Ich finde Sport wichtig, weil ich dann besser schlafe.", en: "I think sport is important because then I sleep better." },
        { de: "Allerdings habe ich unter der Woche wenig Zeit.", en: "However I have little time on weekdays." },
        { de: "Die Praxis ist von 12 bis 15 Uhr geschlossen.", en: "The practice is closed from 12 to 3." },
        { de: "Nehmen Sie meine Krankenkasse?", en: "Do you take my health insurance?" },
        { de: "Mein Kind ist krank. Ich muss zu Hause bleiben.", en: "My child is ill. I have to stay at home." },
        { de: "Wie oft soll ich die Tabletten nehmen?", en: "How often should I take the tablets?" }
      ],
      vocab: ["health"],
      grammar: ["a2-perfekt"]
    },
    {
      id: "travel",
      title: "Travel and holidays",
      titleDe: "Reisen und Urlaub",
      weight: "exam-core",
      official: true,
      blurb: "Tickets, hotels, delays, short holiday stories.",
      exam: "Hoeren station. Lesen hotel notices. Sprechen: Urlaub, Bahn vs Auto.",
      canDo: [
        "I can buy tickets and ask about platform, delay, and changes.",
        "I can tell a short trip in Perfekt.",
        "I can complain about a delay or a hotel problem in polite A2.",
        "I can understand a hotel notice or a booking confirmation.",
        "I can compare train vs car with weil and aber.",
        "I can plan a day trip with a partner (Teil 3)."
      ],
      examHow: [
        "Hoeren: Gleis, Verspaetung, faellt aus — often the one fact.",
        "Lesen: hotel rules, check-in, Fruehstueck von–bis.",
        "Schreiben: late train, hotel problem, or holiday invitation.",
        "Sprechen: last holiday; Bahn vs Auto.",
        "Teil 3: plan a weekend trip — cost, weather Plan B."
      ],
      subtopics: [
        "Fahrkarte, Gleis, Umsteigen, Verspaetung",
        "Hotel, Buchung, Check-in, Fruehstueck",
        "Urlaub im Perfekt",
        "Gepäck, verloren (simple)",
        "Bahn vs Auto vs Fahrrad",
        "Wetter und Plan B",
        "Staedtereise vs Meer",
        "kurze Beschwerde"
      ],
      explain: "<p>A2 travel is tickets plus a holiday story. Hören loves announcements; Schreiben loves a small problem.</p><h3>Station language</h3><p><span class=\"de\">Ich möchte eine Rückfahrkarte nach München. Von welchem Gleis? Der Zug hat 30 Minuten Verspätung. Muss ich umsteigen? Der Anschluss fällt aus.</span> Catch the number: minutes, platform, time.</p><h3>Holiday in Perfekt</h3><p><span class=\"de\">Im Urlaub sind wir an den See gefahren. Wir haben in einem kleinen Hotel gewohnt. Das Wetter war schlecht, trotzdem haben wir viel gemacht. Nächstes Jahr möchte ich an die Nordsee.</span></p><h3>Hotel problem</h3><p><span class=\"de\">Ich habe ein Zimmer vom 12. bis 14. Mai gebucht. Das Zimmer war unruhig / die Heizung war kaputt. Könnten Sie uns bitte ein anderes Zimmer geben?</span> Booking dates + problem + wish. That is A2, not a refund essay.</p><ul><li>sein with fahren, fliegen, gehen, kommen.</li><li>Compare: <span class=\"de\">Die Bahn ist entspannter, aber das Auto ist flexibler.</span></li></ul>",
      traps: [
        "Missing the platform number because you waited for a word you know.",
        "Holiday story only in the present.",
        "A B1 refund letter with Buchungsnummer and Teilerstattung unless the task asks.",
        "Teil 3 trip with no cost and no Plan B."
      ],
      youMust: [
        "Buy tickets, complain about a delay, tell a trip in Perfekt.",
        "Catch Gleis, minutes late, cancelled.",
        "Write booking dates + problem + what you want.",
        "Compare Bahn vs Auto with weil and aber.",
        "Plan a trip: day, place, cost, rain plan.",
        "Use ich bin gefahren / geflogen / gewesen."
      ],
      chunks: [
        { de: "Ich möchte eine Rückfahrkarte nach München.", en: "I would like a return ticket to Munich." },
        { de: "Der Zug hat 30 Minuten Verspätung.", en: "The train is 30 minutes late." },
        { de: "Im Urlaub sind wir an den See gefahren.", en: "On holiday we went to the lake." },
        { de: "Wir haben in einem kleinen Hotel gewohnt.", en: "We stayed in a small hotel." },
        { de: "Das Zimmer war unruhig. Könnten Sie uns ein anderes Zimmer geben?", en: "The room was noisy. Could you give us another room?" },
        { de: "Von welchem Gleis fährt der Zug nach Hamburg?", en: "Which platform does the train to Hamburg leave from?" },
        { de: "Leider ist mein Anschlusszug ausgefallen.", en: "Unfortunately my connecting train was cancelled." },
        { de: "Die Bahn ist besser für die Umwelt, aber auf dem Land braucht man oft ein Auto.", en: "The train is better for the environment, but in the countryside you often need a car." },
        { de: "Das Frühstück ist von 7 bis 10 Uhr.", en: "Breakfast is from 7 to 10." },
        { de: "Nächstes Jahr möchte ich an die Nordsee.", en: "Next year I would like to go to the North Sea." },
        { de: "Was machen wir, wenn es regnet?", en: "What do we do if it rains?" },
        { de: "Die Fahrt dauert zwei Stunden und kostet 29 Euro.", en: "The journey takes two hours and costs 29 euros." }
      ],
      vocab: ["travel"],
      grammar: ["a2-prepositions", "a2-perfekt"]
    },
    {
      id: "services",
      title: "Bank, post, Amt",
      titleDe: "Bank, Post, Amt",
      weight: "high",
      official: true,
      blurb: "Simple services: open an account, send a parcel, make an appointment.",
      exam: "Schreiben bank. Hoeren post office. Lesen Amt notices.",
      canDo: [
        "I can explain a simple problem and ask what to do.",
        "I can make or change an appointment at an office.",
        "I can talk about a parcel or a letter at the post office.",
        "I can ask about opening an account or a blocked card in simple German.",
        "I can understand Oeffnungszeiten and nur mit Termin.",
        "I can write a short Sie-message to a bank or office."
      ],
      examHow: [
        "Hoeren: parcel ready, bank closed, bring your ID.",
        "Lesen: Buergeramt hours, ohne Termin keine Beratung.",
        "Schreiben: bank or Amt — reason + request + phone number.",
        "Sprechen: Wo erledigen Sie Behoerdengaenge?",
        "Teil 3: who goes to the Amt, who waits for the parcel."
      ],
      subtopics: [
        "Post: Brief, Paket, abholen, schicken",
        "Bank: Konto, Karte, ueberweisen, sperren",
        "Amt: Termin, Ausweis, Unterlagen",
        "Oeffnungszeiten, nur mit Termin",
        "warten, Nummer, Schalter",
        "formelle Anrede",
        "Problem + Bitte",
        "Dokumente mitbringen"
      ],
      explain: "<p>A2 services are the same offices as A1, plus a written request. You still do not write legal German.</p><h3>Post</h3><p><span class=\"de\">Das Paket ist noch nicht da. Können Sie bitte nachschauen? Die Sendungsnummer ist … Wann sind Sie offen?</span></p><h3>Bank</h3><p><span class=\"de\">Ich möchte ein Konto eröffnen. Welche Unterlagen brauche ich? Meine Karte funktioniert nicht. Könnten Sie die Karte bitte sperren?</span> One problem, one request, your number.</p><h3>Amt</h3><p><span class=\"de\">Ich brauche einen Termin im Bürgeramt. Leider kann ich den Termin am Mittwoch nicht wahrnehmen. Wäre ein Termin nach 16 Uhr möglich? Ich bringe den Ausweis mit.</span> Recognise <span class=\"de\">Anmeldung, Meldebescheinigung</span> on signs; you do not explain residence law.</p><h3>Writing shape</h3><p>Sie-opening, why you write, what you want, how to reach you, <span class=\"de\">Mit freundlichen Grüßen</span>. 60–80 words.</p><ul><li>ohne Termin vs nur mit Termin is a classic Lesen trap.</li><li>Do not start a B1 four-Leitpunkt Amt letter unless you keep A2 length.</li></ul>",
      traps: [
        "Ignoring nur mit Termin on the notice.",
        "Writing to the bank with Hallo and Bis bald.",
        "Explaining the whole German bureaucracy. One Termin is the task.",
        "Forgetting a phone number when you ask them to call."
      ],
      youMust: [
        "Explain a simple problem and ask what to do.",
        "Make or change an Amt appointment.",
        "Ask about a parcel with a tracking number.",
        "Write a Sie-message: reason, request, number.",
        "Read Oeffnungszeiten and Termin rules.",
        "List Ausweis as a document you bring."
      ],
      chunks: [
        { de: "Ich möchte ein Konto eröffnen.", en: "I would like to open an account." },
        { de: "Das Paket ist noch nicht da. Können Sie bitte nachschauen?", en: "The parcel is not here yet. Can you please check?" },
        { de: "Ich brauche einen Termin im Bürgeramt.", en: "I need an appointment at the citizens’ office." },
        { de: "Welche Unterlagen muss ich mitbringen?", en: "Which documents do I have to bring?" },
        { de: "Leider kann ich den Termin am Mittwoch nicht wahrnehmen.", en: "Unfortunately I cannot keep Wednesday’s appointment." },
        { de: "Wäre ein Termin nach 16 Uhr möglich?", en: "Would an appointment after 4 p.m. be possible?" },
        { de: "Könnten Sie die Karte bitte sperren?", en: "Could you please block the card?" },
        { de: "Ohne Termin werden Sie heute nicht bedient.", en: "Without an appointment you will not be served today." },
        { de: "Die Sendungsnummer ist …", en: "The tracking number is …" },
        { de: "Ich bringe meinen Ausweis mit.", en: "I will bring my ID." },
        { de: "Wann hat die Post auf?", en: "When is the post office open?" },
        { de: "Meine Nummer ist … — bitte rufen Sie mich an.", en: "My number is … — please call me." }
      ],
      vocab: ["services"],
      grammar: ["a2-letters"],
      schreiben: ["a2-bank"]
    },
    {
      id: "opinions",
      title: "Opinions",
      titleDe: "Meinungen",
      weight: "exam-core",
      official: true,
      blurb: "finden, weil, aber — this is the jump from A1 to A2 speaking.",
      exam: "Sprechen Teil 2. Short comments in letters. Everyday cards need a reason.",
      canDo: [
        "I can give an opinion with finden / meiner Meinung nach + weil.",
        "I can add one aber or allerdings.",
        "I can agree, disagree, and ask the partner what they think.",
        "I can give a small personal example.",
        "I can keep the opinion at A2 — no B1 essay.",
        "I can use deshalb / trotzdem in one sentence each."
      ],
      examHow: [
        "Sprechen Teil 2: the card is useless without a reason.",
        "Teil 3: you must react, not only suggest.",
        "Schreiben: one sentence of opinion in a message.",
        "Lesen: a short comment in a forum or email.",
        "Examiners listen for verb-last after weil / dass."
      ],
      subtopics: [
        "Ich finde / Meiner Meinung nach",
        "weil vs denn vs deshalb",
        "aber, allerdings, trotzdem",
        "Das stimmt / Ich sehe das anders",
        "Beispiel aus dem Alltag",
        "Fragen an den Partner",
        "Stadt, Handy, Arbeit, Wohnen as opinion topics",
        "A2 vs B1 depth"
      ],
      explain: "<p>Opinions are how A2 speaking is marked. A1 said <span class=\"de\">Kino gut</span>. A2 says <span class=\"de\">Ich finde Kino gut, weil ich dann abschalten kann. Allerdings ist es teuer.</span></p><h3>The three-part turn</h3><p>1) Opinion: <span class=\"de\">Ich finde das gut / schlecht / wichtig.</span> 2) Reason: <span class=\"de\">weil …</span> (verb at the end). 3) Contrast or example: <span class=\"de\">Aber / Allerdings … Zum Beispiel …</span> Then: <span class=\"de\">Und du? Was meinst du?</span></p><h3>Connectors</h3><p><span class=\"de\">weil / dass / wenn</span> — verb last. <span class=\"de\">denn</span> — verb second (like <span class=\"de\">weil</span> in meaning, not in word order). <span class=\"de\">deshalb</span> — new sentence, verb second: <span class=\"de\">Die Stadt ist laut. Deshalb wohne ich lieber am Rand.</span></p><h3>Stay A2</h3><p>Topics: city vs countryside, phone, work hours, cooking, sport. Not politics, not climate science. One concrete example from your week beats an abstract noun pile.</p><ul><li>Word order errors after weil are the number-one A2 grammar miss.</li><li>Do not say <span class=\"de\">Ich bin einverstanden</span> ten times and add nothing.</li></ul>",
      traps: [
        "weil + verb in the English place: weil ich muss arbeiten.",
        "Opinion with no reason.",
        "A B1 speech with obwohl, damit, and relative clauses you cannot control.",
        "Never asking the partner — Teil 2 is a conversation."
      ],
      youMust: [
        "Opinion + weil + one example. Then one aber.",
        "Ask Was meinst du? / Siehst du das auch so?",
        "Use deshalb in a new sentence (verb second).",
        "Agree and disagree with a short reason.",
        "Keep topics everyday: Wohnen, Handy, Arbeit, Essen.",
        "Put the verb last after weil / dass / wenn."
      ],
      chunks: [
        { de: "Ich finde das gut, weil …", en: "I think that is good because …" },
        { de: "Meiner Meinung nach ist die Stadt zu laut.", en: "In my opinion the city is too loud." },
        { de: "Das stimmt, aber …", en: "That is true, but …" },
        { de: "Allerdings ist es auch teuer.", en: "However it is also expensive." },
        { de: "Deshalb fahre ich oft mit dem Rad.", en: "That is why I often cycle." },
        { de: "Trotzdem brauche ich manchmal das Auto.", en: "Even so I sometimes need the car." },
        { de: "Und du? Was meinst du?", en: "And you? What do you think?" },
        { de: "Ich sehe das anders, weil ich auf dem Land wohne.", en: "I see that differently because I live in the countryside." },
        { de: "Zum Beispiel koche ich unter der Woche selbst.", en: "For example I cook myself on weekdays." },
        { de: "Es ist wichtig, dass man Pausen macht.", en: "It is important that you take breaks." },
        { de: "Wenn ich Zeit habe, treffe ich Freunde.", en: "When I have time, I meet friends." },
        { de: "Ich bin einverstanden. Dann machen wir das so.", en: "I agree. Then let’s do it that way." }
      ],
      vocab: ["opinions", "connectors"],
      grammar: ["a2-connectors", "a2-speaking"]
    },
    {
      id: "media",
      title: "Media and weather",
      titleDe: "Medien und Wetter",
      weight: "medium",
      official: true,
      blurb: "Phone, internet, news headlines, weather for plans.",
      exam: "Lesen short news. Planning if it rains. Sprechen: Handy.",
      canDo: [
        "I can say how I use my phone and why.",
        "I can make a Plan B for rain.",
        "I can understand a simple weather line or a short news headline.",
        "I can give a small opinion about screens with weil and aber.",
        "I can write a message that changes a plan because of weather.",
        "I can talk about news at A2: I read / I watch / I do not have time."
      ],
      examHow: [
        "Sprechen: Handy, Nachrichten, Wetter.",
        "Teil 3: outdoor plan vs museum if it rains.",
        "Lesen: a short news box or a weather note in an email.",
        "Hoeren: tomorrow rain, take an umbrella; a train warning.",
        "Schreiben: we meet inside because of the weather."
      ],
      subtopics: [
        "Handy, Internet, WLAN",
        "Nachrichten, Radio, Fernsehen",
        "Wetterbericht",
        "Plan B bei Regen",
        "zu viel Bildschirmzeit (A2 depth)",
        "anrufen, schreiben, chatten",
        "falsche Nachrichten (recognition)",
        "Termin aendern wegen Wetter"
      ],
      explain: "<p>A2 media is the phone in your pocket and the weather in your plan. It is not a B1 privacy essay.</p><h3>Phone</h3><p><span class=\"de\">Ich schaue Nachrichten auf dem Handy. Ich telefoniere mit meiner Familie, weil sie weit weg wohnt. Das Handy ist praktisch, aber ich brauche Pausen.</span> Distinguish: <span class=\"de\">das Handy</span> (phone), <span class=\"de\">der Computer</span>, <span class=\"de\">das Fernsehen</span>. Hören often asks which one they use, not a speech about the internet.</p><h3>Weather and plans</h3><p><span class=\"de\">Wenn es regnet, gehen wir ins Museum. Nimm einen Schirm mit. Morgen soll es warm sein, deshalb treffen wir uns im Park.</span> <span class=\"de\">wenn</span> + verb last is the grammar you show. Change-of-plan SMS: <span class=\"de\">Hallo, es regnet. Treffen wir uns um 15 Uhr im Café statt im Park? Bis gleich</span> — new place + time.</p><h3>News at A2</h3><p>You can say you read headlines, you do not understand everything, you prefer short videos. Do not analyse politics. A Lesen text might be four lines about a festival or a storm — hunt the time and the place, not every noun.</p><ul><li>Change-of-plan messages are exam gold: weather + new place + time.</li><li>Stay personal: your habits, not society.</li></ul>",
      traps: [
        "A sociology talk about social media. One habit + one aber is enough.",
        "Forgetting Plan B when the card shows rain.",
        "wenn + verb second (English order).",
        "Inventing B1 words like Datenschutz if you cannot spell them."
      ],
      youMust: [
        "Make a Plan B for rain. Say how you use your phone.",
        "Give Handy opinion with weil and aber.",
        "Write a message that moves a meeting indoors.",
        "Understand a one-line forecast.",
        "Use wenn es regnet, … with the verb last in the wenn-clause.",
        "Ask the partner how they get the news."
      ],
      chunks: [
        { de: "Wenn es regnet, gehen wir ins Museum.", en: "If it rains, we go to the museum." },
        { de: "Ich schaue Nachrichten auf dem Handy.", en: "I watch news on my phone." },
        { de: "Das Handy ist praktisch, aber ich brauche Pausen.", en: "The phone is handy, but I need breaks." },
        { de: "Nimm einen Schirm mit. Morgen soll es regnen.", en: "Take an umbrella. Tomorrow it is supposed to rain." },
        { de: "Wir treffen uns im Café, weil das Wetter schlecht ist.", en: "We meet in the cafe because the weather is bad." },
        { de: "Ich telefoniere oft mit meiner Familie.", en: "I often phone my family." },
        { de: "Im Internet finde ich den Fahrplan.", en: "I find the timetable on the internet." },
        { de: "Ich habe nicht so viel Zeit für Nachrichten.", en: "I do not have that much time for news." },
        { de: "Können wir den Termin auf Sonntag ändern?", en: "Can we change the appointment to Sunday?" },
        { de: "Heute ist es warm und sonnig.", en: "Today it is warm and sunny." },
        { de: "Ich schreibe lieber eine Nachricht, als anzurufen.", en: "I prefer to write a message rather than call." },
        { de: "Was machst du, wenn das WLAN nicht geht?", en: "What do you do if the wifi does not work?" }
      ],
      vocab: ["media"],
      grammar: ["a2-wordorder"]
    },
    {
      id: "letters",
      title: "A2 messages and letters",
      titleDe: "Nachrichten und Briefe",
      weight: "exam-core",
      official: true,
      blurb: "Shorter than B1, same idea: all content points, right greeting, weil-sentences.",
      exam: "Schreiben in the 50-minute Lesen+Schreiben block. Train both du and Sie.",
      canDo: [
        "I can write an informal 60–80 word message covering every bullet.",
        "I can write a formal short request with Sie and Mit freundlichen Grüßen.",
        "I can open and close correctly for friend vs office.",
        "I can put a reason with weil in at least one sentence.",
        "I can include a time, a place, and a way to contact me when needed.",
        "I can finish in the shared 50-minute block without leaving Lesen empty."
      ],
      examHow: [
        "Schreiben shares 50 minutes with Lesen — budget about 20 minutes to write.",
        "Often two short tasks or one letter with guiding points.",
        "Register is marked: du vs Sie.",
        "Missing a Leitpunkt costs content even if the German is pretty.",
        "This is not the B1 30-minute 100-word four-Leitpunkt paper."
      ],
      subtopics: [
        "Informelle Anrede und Gruß",
        "Formelle Anrede und Gruß",
        "Alle Leitpunkte in ganzen Saetzen",
        "weil / deshalb in the letter",
        "Koennten Sie bitte …",
        "Absage, Einladung, Problem, Bank, Vermieter",
        "60–80 Woerter",
        "Zeitbudget neben Lesen"
      ],
      explain: "<p>A2 writing lives in the <strong>same 50 minutes as Lesen</strong>. There is no separate Sprachbausteine booklet. Grammar shows in the letter: articles, weil, Perfekt, polite <span class=\"de\">Könnten Sie</span>.</p><h3>Informal</h3><p><span class=\"de\">Liebe Sara, / Hallo Sara,</span> then the points in full sentences, then <span class=\"de\">Liebe Grüße</span> plus your first name. 60 words, four short points if the task has four.</p><h3>Formal</h3><p><span class=\"de\">Sehr geehrte Frau Lang, / Sehr geehrte Damen und Herren,</span> why you write, what you want, your number, <span class=\"de\">Mit freundlichen Grüßen</span> plus first and last name. One <span class=\"de\">Könnten Sie mir bitte sagen, …?</span></p><h3>Clock</h3><p>Read Lesen first or write first — but transfer Lesen answers and still finish the letter. A perfect first paragraph and no closing fails. A complete short letter passes.</p><ul><li>Tick the bullets in the margin before you write.</li><li>Do not copy B1 models of 120 words. A2 rewards completeness at 60–80.</li></ul>",
      traps: [
        "Spending 40 minutes on Lesen and writing five lines.",
        "Hallo to the landlord and Mit freundlichen Grüßen to your friend.",
        "A shopping list of words instead of sentences.",
        "Treating website SB drills as if they were the A2 exam paper."
      ],
      youMust: [
        "Informal: Hallo/Liebe, 60 words, four short points.",
        "Formal: Sehr geehrte …, Koennten Sie bitte …, Mit freundlichen Grüßen.",
        "Cover every Leitpunkt in a full sentence.",
        "Put one weil and one time or number in the text.",
        "Budget writing inside the 50-minute Lesen+Schreiben block.",
        "Write from memory — do not copy models on exam day."
      ],
      chunks: [
        { de: "Liebe Sara, danke für die Einladung.", en: "Dear Sara, thanks for the invitation." },
        { de: "Sehr geehrte Frau Lang, leider kann ich …", en: "Dear Ms Lang, unfortunately I cannot …" },
        { de: "Könnten Sie mir bitte sagen, …?", en: "Could you please tell me …?" },
        { de: "Mit freundlichen Grüßen", en: "Yours sincerely" },
        { de: "Liebe Grüße / Bis bald", en: "Informal closings" },
        { de: "ich schreibe Ihnen, weil …", en: "I am writing to you because …" },
        { de: "Ich bin von … bis … zu erreichen unter …", en: "I can be reached from … to … at …" },
        { de: "Wäre es möglich, den Termin zu ändern?", en: "Would it be possible to change the appointment?" },
        { de: "Vielen Dank im Voraus.", en: "Thank you in advance." },
        { de: "Ich freue mich auf Ihre Antwort.", en: "I look forward to your reply." },
        { de: "Leider hat das nicht funktioniert. Deshalb bitte ich um Hilfe.", en: "Unfortunately that did not work. That is why I am asking for help." },
        { de: "Anrede, alle Punkte, Gruß — dann ist der Brief fertig.", en: "Opening, all points, closing — then the letter is done." }
      ],
      vocab: ["connectors"],
      grammar: ["a2-letters", "a2-umzu", "a2-k2"],
      schreiben: ["a2-invite", "a2-course", "a2-problem", "a2-bank", "a2-landlord", "a2-termin", "a2-birthday"]
    },
    {
      id: "shopping",
      title: "Shopping and returns",
      titleDe: "Einkaufen und Umtausch",
      weight: "exam-core",
      official: true,
      blurb: "A1 shop talk plus A2: wrong size, online order, Öffnungszeiten, a short Sie-complaint. Official inventory: Einkaufen.",
      exam: "Schreiben wrong delivery. Lesen ads and hours. Hoeren: closed / only until 12. Sprechen: too expensive vs quality.",
      canDo: [
        "I can buy clothes with size, colour, and zu klein / zu teuer.",
        "I can understand Öffnungszeiten, Sonderangebot, and nur bar.",
        "I can write a 60-word Sie-message: order number, problem, wish, how to return.",
        "I can change a purchase plan with weil and deshalb.",
        "I can compare two shops with billiger / besser / allerdings.",
        "I can ask for an exchange or a refund in polite German."
      ],
      examHow: [
        "Schreiben: online order, wrong size, missing part — a2-shop in the gym.",
        "Lesen: ads with price, hours, delivery, who it is for.",
        "Hoeren: the shop is closed Monday / open only until 12.",
        "Sprechen Teil 2: Online einkaufen, Markt vs Supermarkt.",
        "Teil 3: who buys the gift, where, budget."
      ],
      subtopics: [
        "Groesse, Farbe, zu klein / zu gross",
        "Oeffnungszeiten und Feiertag",
        "Online bestellen: Bestellnummer",
        "Umtausch und Geld zurueck",
        "Kasse, Karte, Rechnung",
        "Markt vs Supermarkt vs Internet",
        "Garantie at word level",
        "Hoeefliche Beschwerde: Koennten Sie"
      ],
      explain: "<p>A1 Einkaufen was size and till. A2 Einkaufen is a short complaint you can write. The gym already has the letter <em>wrong delivery</em> — this topic is the production course for it.</p><h3>In the shop</h3><p><span class=\"de\">Ich brauche Größe 40 in Schwarz. Das ist zu klein. Haben Sie das in einer anderen Größe? Die rote ist schöner, aber sie ist teurer. Ich zahle mit Karte.</span></p><h3>Hours and ads</h3><p>Hunt: <span class=\"de\">Mo–Fr 9–18, Sa bis 14 Uhr, sonntags geschlossen, Feiertag, Abholung, Lieferung, nur mit Termin</span>. Hören loves “not today — tomorrow” and “only until twelve”.</p><h3>The return note (60–80 words)</h3><p><span class=\"de\">Sehr geehrte Damen und Herren, ich habe am 3. Mai Schuhe bestellt, Bestellnummer 5521. Die Schuhe sind eine Nummer zu klein. Ich möchte umtauschen. Könnten Sie mir bitte sagen, wie ich die Ware zurückschicke? Meine Nummer ist … Mit freundlichen Grüßen</span> Facts: number, fault, wish, contact. One <span class=\"de\">Könnten Sie</span>.</p><h3>Opinion</h3><p><span class=\"de\">Online ist praktisch, weil ich abends bestellen kann. Allerdings sehe ich die Qualität nicht. Deshalb kaufe ich Kleidung lieber im Geschäft, wenn ich Zeit habe.</span></p><ul><li>Invent a Bestellnummer if the task does not give one.</li><li>Stay A2: not a B1 lawyer letter about Gewährleistung.</li></ul>",
      traps: [
        "A return letter with no order number and no wish (exchange vs refund).",
        "du to the online shop.",
        "Matching an ad on the word Shop instead of the hours or the price.",
        "Writing only keywords: zu klein. Umtausch. instead of sentences."
      ],
      youMust: [
        "Ask for size, colour, and another size.",
        "Read opening hours including Sunday closed.",
        "Write: Bestellnummer + problem + Umtausch or Geld zurueck + how to send it back.",
        "Use Koennten Sie bitte in the Sie-letter.",
        "Compare online vs shop with weil and allerdings.",
        "In Teil 3: agree who buys the gift and the budget."
      ],
      chunks: [
        { de: "Die Schuhe sind eine Nummer zu klein.", en: "The shoes are one size too small." },
        { de: "Ich möchte den Artikel umtauschen oder das Geld zurück.", en: "I would like to exchange the item or get a refund." },
        { de: "Könnten Sie mir bitte sagen, wie ich die Ware zurückschicke?", en: "Could you please tell me how I send the goods back?" },
        { de: "Die Bestellnummer ist 5521.", en: "The order number is 5521." },
        { de: "Haben Sie das in einer anderen Größe / in Schwarz?", en: "Do you have that in another size / in black?" },
        { de: "Wann haben Sie auf? Sonntags sind Sie geschlossen.", en: "When are you open? You are closed on Sundays." },
        { de: "Online ist praktisch, allerdings sehe ich die Qualität nicht.", en: "Online is practical; however I do not see the quality." },
        { de: "Im Markt ist das Obst frischer als im Supermarkt.", en: "At the market the fruit is fresher than in the supermarket." },
        { de: "Ich zahle mit Karte. Kann ich die Rechnung bekommen?", en: "I pay by card. Can I have the receipt?" },
        { de: "Das Angebot gilt nur bis Freitag.", en: "The offer is only valid until Friday." },
        { de: "Leider haben wir das nicht mehr auf Lager.", en: "Unfortunately we do not have that in stock any more." },
        { de: "Was kostet die Lieferung, und wann kommt das Paket?", en: "What does delivery cost, and when does the parcel come?" }
      ],
      vocab: ["food", "shopping"],
      grammar: ["a2-comparative", "a2-adjectives", "a2-k2", "a2-letters"],
      schreiben: ["a2-shop", "a2-problem", "a2-hours", "a2-parcel"]
    },
    {
      id: "feste",
      title: "Celebrations and invitations",
      titleDe: "Feste und Einladungen",
      weight: "high",
      official: true,
      blurb: "Geburtstag, Hochzeit, Feiertag — invite, accept, decline with weil, and a rain Plan B. Official inventory: Feste.",
      exam: "Informal 60–80 word invite or thanks. Sprechen Teil 3: party. Hören: Saturday not Sunday.",
      canDo: [
        "I can invite someone with day, time, place, and what to bring.",
        "I can accept or decline with a weil-reason and suggest another time.",
        "I can thank someone after a party in Perfekt.",
        "I can plan a small celebration in Teil 3 and actually agree.",
        "I can name one German holiday at word level (Weihnachten, Ostern, Silvester).",
        "I can change the plan when it rains."
      ],
      examHow: [
        "Schreiben: a2-invite / a2-birthday / a2-thanks — all bullets, du.",
        "Sprechen Teil 2: Feste in meiner Familie.",
        "Teil 3: Geburtstagsbrunch — Tag, Ort, Geschenk, Plan B.",
        "Lesen: party notice with time and RSVP.",
        "Hoeren: the party is postponed, not cancelled."
      ],
      subtopics: [
        "Geburtstag und Alter",
        "Einladung, Zusage, Absage mit weil",
        "Was bringe ich mit?",
        "Hochzeit / Familienfeier at word level",
        "Weihnachten, Ostern, Silvester",
        "Danke nach der Feier (Perfekt)",
        "Regenplan: Cafe statt Park",
        "Budget for a gift"
      ],
      explain: "<p>A2 Feste is still not culture studies. It is a connected invite: reason, alternative time, what you bring. A1 wrote 30 words. A2 writes 60–80 with <span class=\"de\">weil</span> and one Perfekt.</p><h3>Invite</h3><p><span class=\"de\">Liebe Nora, am Samstag habe ich Geburtstag. Die Feier ist um 18 Uhr bei mir. Hast du Lust zu kommen? Du kannst gern einen Salat mitbringen. Wenn es regnet, treffen wir uns im Café Sonne. Schreib mir bitte bis Freitag.</span></p><h3>Yes / no</h3><p><span class=\"de\">Danke für die Einladung. Leider kann ich um 15 Uhr nicht, weil ich bis 18 Uhr arbeite. Ab 19 Uhr komme ich gerne. Soll ich einen Kuchen mitbringen?</span> That is the A2 mark: decline + reason + new time + question.</p><h3>After the party</h3><p><span class=\"de\">Gestern war die Feier wirklich schön. Ich habe mich sehr gefreut. Vielen Dank für das Geschenk.</span> Perfekt + feeling. Do not write a B1 essay about Traditionen.</p><ul><li>Always: Tag, Uhrzeit, Ort, mitbringen, Antwort.</li><li>One German holiday name is enough: <span class=\"de\">Weihnachten / Silvester / Ostern</span>.</li></ul>",
      traps: [
        "Invite with no time or no place.",
        "Decline with no weil.",
        "Sie to a close friend.",
        "Planning three open options in Teil 3 and never deciding."
      ],
      youMust: [
        "Write a 60–80 word invite with day, time, place, bring, question.",
        "Decline with weil and offer another time.",
        "Thank someone after a party in Perfekt.",
        "In Teil 3: agree Tag, Ort, Geschenk, Plan B.",
        "Say one holiday name.",
        "Change park to café when it rains."
      ],
      chunks: [
        { de: "Am Samstag habe ich Geburtstag. Die Feier ist um 18 Uhr bei mir.", en: "Saturday is my birthday. The party is at 6 p.m. at my place." },
        { de: "Hast du Lust zu kommen? Bring bitte einen Salat mit.", en: "Do you feel like coming? Please bring a salad." },
        { de: "Leider kann ich nicht, weil ich arbeiten muss. Wäre Sonntag möglich?", en: "Unfortunately I cannot because I have to work. Would Sunday be possible?" },
        { de: "Danke für die Einladung. Ich komme gerne.", en: "Thanks for the invitation. I will gladly come." },
        { de: "Gestern war die Feier schön. Ich habe mich sehr gefreut.", en: "Yesterday the party was nice. I was really pleased." },
        { de: "Wenn es regnet, treffen wir uns im Café.", en: "If it rains, we meet in the café." },
        { de: "Herzlichen Glückwunsch! Alles Gute zum Geburtstag!", en: "Congratulations! Happy birthday!" },
        { de: "Wir feiern Weihnachten / Silvester in der Familie.", en: "We celebrate Christmas / New Year’s Eve with the family." },
        { de: "Was sollen wir schenken? Maximal 15 Euro.", en: "What should we give? Maximum 15 euros." },
        { de: "Schreib mir bitte bis Freitag, ob du kommst.", en: "Please write by Friday whether you are coming." },
        { de: "Die Hochzeit ist am 12. Juni in der Stadt.", en: "The wedding is on 12 June in town." },
        { de: "Also, dann sind wir uns einig: Samstag 18 Uhr bei dir.", en: "So then we agree: Saturday 6 p.m. at yours." }
      ],
      vocab: ["people", "daily"],
      grammar: ["a2-connectors", "a2-perfekt", "a2-k2", "a2-letters"],
      schreiben: ["a2-invite", "a2-birthday", "a2-thanks"]
    }
  ]
};
