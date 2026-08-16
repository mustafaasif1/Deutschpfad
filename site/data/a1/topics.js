registerPack("a1", {
  examFormat: {
    name: "telc Deutsch A1 / Start Deutsch 1",
    notThisExam: "This is general adult A1 — not A1 fuer Zuwanderer (that paper has extra orientation tasks) and not Goethe-only branding. Start Deutsch 1 was jointly developed; train the telc sitting.",
    officialUrl: "https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/start-deutsch-1-/-telc-deutsch-a1/",
    passRule: "Typical adult sitting: about 60 of 100 scaled points overall. Raw skills are often 15 points each (Hoeren, Lesen, Schreiben, Sprechen = 60 raw). Unlike B1, there is normally no separate written/oral 60 percent hurdle — confirm the rule on your invitation.",
    points: { hoeren: 15, lesen: 15, schreiben: 15, sprechen: 15, rawTotal: 60, scaledTotal: 100, passTotal: 60 },
    written: [
      { name: "Hören", parts: 3, minutes: 20, points: 15, items: "15", note: "About 20 minutes, three parts. Short everyday audio: announcements, a short dialogue, messages. Some parts twice; announcements often once. Picture matching or Richtig/Falsch. No Sprachbausteine paper at A1." },
      { name: "Lesen", parts: 3, minutes: 45, points: 15, items: "15", note: "Same 45-minute booklet as Schreiben (Lesen 3 + Schreiben 2). Short emails and notes (Richtig/Falsch), small ads, everyday signs. Total written sitting is about 65 minutes with Hoeren." },
      { name: "Schreiben", parts: 2, minutes: 0, points: 15, items: "form + ~30-word message", note: "Same 45-minute block as Lesen. Teil 1: fill a form (name, address, phone, date of birth, age). Teil 2: short message about 30 words, three content points, greeting and closing. Not a B1 letter." }
    ],
    oral: {
      parts: 3,
      minutes: 15,
      prep: 0,
      points: 15,
      note: "Usually a small group, about 15 minutes, no prep room. Teil 1: introduce yourself. Teil 2: ask and answer with word cards. Teil 3: a tiny plan with pictures (when, where, what) plus short requests (Können Sie mir bitte…?). Not A2 negotiation. No 20-minute B1 prep."
    }
  },
  topics: [
    {
      id: "personal",
      title: "Personal details",
      titleDe: "Person",
      weight: "always",
      official: true,
      blurb: "Name, address, phone, date of birth, age, origin, languages. This is Sprechen Teil 1 and every form.",
      exam: "Oral intro every sitting. Schreiben Teil 1 forms. Short emails that ask who you are.",
      canDo: [
        "I can say my first name, surname, and how I spell them.",
        "I can give my address, phone number, and date of birth.",
        "I can say where I come from, where I live, and how old I am.",
        "I can say which languages I speak and that I am learning German.",
        "I can ask another person the same questions with du or Sie.",
        "I can fill a simple form with these facts without English notes."
      ],
      examHow: [
        "Sprechen Teil 1: 20–30 seconds about yourself, then one question to a partner.",
        "Schreiben Teil 1: form fields — Name, Vorname, Adresse, Telefon, Geburtsdatum, Alter, Nationalitaet.",
        "Lesen: a short email that states who is writing and why.",
        "Hoeren: a person spells a name or says a phone number once.",
        "Cards in Teil 2 often show Name / Wohnort / Sprachen."
      ],
      subtopics: [
        "Vorname und Nachname (spelling aloud)",
        "Adresse und Wohnort",
        "Telefonnummer",
        "Geburtsdatum und Alter",
        "Herkunftsland und Nationalitaet",
        "Sprachen",
        "Beruf oder Kurs in one sentence",
        "du vs Sie in first contact",
        "Aussehen in two words (groß, schwarze Haare — official Person)"
      ],
      explain: "<p>telc A1 always starts with <span class=\"de\">Person</span>. Examiners do not want a speech. They want five clean facts you can also write on a form. Official inventories also list <span class=\"de\">Aussehen</span> — two adjectives, not a portrait.</p><h3>Say this spine</h3><p><span class=\"de\">Guten Tag. Ich heiße … Ich komme aus … Ich wohne in … Ich bin … Jahre alt. Ich lerne Deutsch im A1-Kurs.</span> That is enough for Teil 1. Then ask: <span class=\"de\">Und Sie? Woher kommen Sie?</span></p><h3>Forms are the same words</h3><p>On paper you will see <span class=\"de\">Name, Vorname, Straße, PLZ, Ort, Telefon, Geburtsdatum, Geschlecht, Nationalität</span>. Write dates as the form asks, often <span class=\"de\">TT.MM.JJJJ</span>. Age is <span class=\"de\">Ich bin 28 Jahre alt</span> — never <em>Ich habe 28 Jahre</em>.</p><h3>Spelling and numbers</h3><p>Practise the alphabet for your own name. Phone numbers are read digit by digit: <span class=\"de\">null eins sieben sechs …</span> Listen for <span class=\"de\">doppelt</span> (double). If you miss a number, say <span class=\"de\">Wie bitte? Können Sie das bitte wiederholen?</span></p><h3>du or Sie</h3><p>In the group oral, candidates often use <span class=\"de\">du</span> with each other and <span class=\"de\">Sie</span> with the examiner. A form and a course office use <span class=\"de\">Sie</span>. Do not mix them in one message.</p><h3>Aussehen (two words)</h3><p>Official Person includes appearance. One sentence is enough: <span class=\"de\">Ich bin groß. Ich habe schwarze Haare und eine Brille.</span> Hair and glasses are the usual card. Do not describe a stranger in five colours.</p><ul><li>Keep sentences short. One fact per sentence.</li><li>Learn <span class=\"de\">Ich heiße / Ich komme aus / Ich wohne in / Ich spreche</span> as chunks, not word by word.</li></ul>",
      traps: [
        "Ich habe 25 Jahre (wrong). Say Ich bin 25 Jahre alt.",
        "Writing the surname in the Vorname box on the form.",
        "Spelling with English letter names (double-u vs we).",
        "Giving a long life story. A1 wants facts, not a biography.",
        "Mixing du and Sie in the same turn."
      ],
      youMust: [
        "Say: Ich heiße … Ich komme aus … Ich wohne in … Ich bin … Jahre alt. Ich lerne Deutsch.",
        "Spell your name and street aloud.",
        "Give a phone number slowly, digit by digit.",
        "Fill Name, Vorname, Adresse, Telefon, Geburtsdatum without looking.",
        "Ask: Wie heißen Sie? Woher kommen Sie? Wo wohnen Sie?",
        "Use Guten Tag / Hallo and Tschüss / Auf Wiedersehen."
      ],
      chunks: [
        { de: "Guten Tag. Ich heiße … und komme aus …", en: "Hello. My name is … and I come from …" },
        { de: "Ich wohne in … Ich bin … Jahre alt.", en: "I live in … I am … years old." },
        { de: "Meine Adresse ist … Meine Telefonnummer ist …", en: "My address is … My phone number is …" },
        { de: "Mein Geburtsdatum ist der …", en: "My date of birth is …" },
        { de: "Ich spreche … und ein bisschen Deutsch.", en: "I speak … and a little German." },
        { de: "Ich lerne Deutsch im A1-Kurs.", en: "I am learning German in the A1 course." },
        { de: "Wie heißen Sie? / Wie heißt du?", en: "What is your name? (Sie / du)" },
        { de: "Woher kommen Sie? Wo wohnen Sie?", en: "Where do you come from? Where do you live?" },
        { de: "Können Sie das bitte buchstabieren?", en: "Can you please spell that?" },
        { de: "Wie bitte? Können Sie das bitte wiederholen?", en: "Pardon? Can you please repeat that?" },
        { de: "Freut mich. / Angenehm.", en: "Pleased to meet you." },
        { de: "Ich bin Student / ich arbeite als …", en: "I am a student / I work as …" },
        { de: "Ich bin groß / klein. Ich habe dunkle Haare.", en: "I am tall / short. I have dark hair." },
        { de: "Ich trage eine Brille.", en: "I wear glasses." }
      ],
      vocab: ["people", "greetings"],
      grammar: ["a1-alphabet", "a1-sein-haben", "a1-pronouns", "a1-adjectives"],
      sprechen: true,
      schreiben: ["a1-intro", "a1-form"]
    },
    {
      id: "family",
      title: "Family and relationships",
      titleDe: "Familie und Beziehungen",
      weight: "high",
      official: true,
      blurb: "Parents, siblings, children, partner, pets — simple present only.",
      exam: "Sprechen questions and cards. Lesen short bios. Forms that ask Familienstand.",
      canDo: [
        "I can name close family members with the correct article.",
        "I can say how many brothers, sisters, or children I have.",
        "I can say if I am single, married, or have a partner.",
        "I can say where my family lives.",
        "I can ask a partner about their family in short questions.",
        "I can understand a three-sentence family bio in Lesen."
      ],
      examHow: [
        "Sprechen Teil 2 cards: Familie, Kinder, Geschwister.",
        "Lesen: a short text about who lives in a house.",
        "Schreiben: a note that mentions visiting family or a birthday.",
        "Forms: Familienstand — ledig, verheiratet, geschieden.",
        "Hoeren: someone says how many children they have."
      ],
      subtopics: [
        "Eltern, Mutter, Vater",
        "Geschwister: Bruder, Schwester",
        "Kinder, Sohn, Tochter",
        "Partner, Freund, Freundin",
        "Familienstand",
        "Großeltern, Onkel, Tante (recognition)",
        "Haustiere",
        "Wer wohnt wo"
      ],
      explain: "<p>Official A1 inventories list <span class=\"de\">Familie und Beziehungen</span> next to Person. You do not need a family tree. You need articles and three true sentences.</p><h3>Articles first</h3><p>Learn <span class=\"de\">der Vater, die Mutter, das Kind, der Bruder, die Schwester, der Sohn, die Tochter, der Freund, die Freundin, die Eltern</span> (plural, always <span class=\"de\">die</span>). Accusative appears as soon as you say <span class=\"de\">Ich habe einen Bruder und eine Schwester</span>.</p><h3>What to say</h3><p><span class=\"de\">Ich habe zwei Kinder. Meine Familie wohnt in … Ich bin verheiratet / ledig. Wir haben eine Katze.</span> If you live alone: <span class=\"de\">Ich wohne allein. Meine Eltern wohnen in …</span></p><h3>Questions you will get</h3><p><span class=\"de\">Haben Sie Geschwister? Sind Sie verheiratet? Haben Sie Kinder? Wo wohnt Ihre Familie?</span> Answer, then ask back. That is the oral game.</p><ul><li>Do not invent a huge family to sound interesting. True and short scores.</li><li><span class=\"de\">Freund</span> can mean friend or boyfriend — context tells you. At A1, <span class=\"de\">mein Freund / meine Freundin</span> is enough.</li></ul>",
      traps: [
        "Dropping the article: Ich habe Bruder.",
        "Ich habe 2 Kind (wrong plural). Say zwei Kinder.",
        "Using English family words mid-sentence.",
        "A long story about cousins. Stay with parents, siblings, children, partner."
      ],
      youMust: [
        "Name family members with articles: der Bruder, die Schwester, das Kind.",
        "Say Ich habe einen / eine / zwei …",
        "Say ledig, verheiratet, or ich habe einen Partner / eine Partnerin.",
        "Say where your family lives.",
        "Ask Haben Sie Geschwister? Haben Sie Kinder?",
        "Write three sentences about your family."
      ],
      chunks: [
        { de: "Ich habe einen Bruder und eine Schwester.", en: "I have a brother and a sister." },
        { de: "Ich habe keine Geschwister.", en: "I have no siblings." },
        { de: "Meine Familie wohnt in …", en: "My family lives in …" },
        { de: "Ich bin verheiratet / ledig / ich habe Kinder.", en: "I am married / single / I have children." },
        { de: "Mein Sohn ist fünf Jahre alt. Meine Tochter geht zur Schule.", en: "My son is five. My daughter goes to school." },
        { de: "Ich wohne mit meiner Familie / allein.", en: "I live with my family / alone." },
        { de: "Wir haben einen Hund / eine Katze.", en: "We have a dog / a cat." },
        { de: "Haben Sie Geschwister?", en: "Do you have siblings?" },
        { de: "Wo wohnt Ihre Familie?", en: "Where does your family live?" },
        { de: "Meine Eltern sind in Rente.", en: "My parents are retired." },
        { de: "Am Wochenende besuche ich meine Mutter.", en: "At the weekend I visit my mother." },
        { de: "Das ist mein Freund / meine Freundin.", en: "This is my friend / partner." }
      ],
      vocab: ["people"],
      grammar: ["a1-articles", "a1-akkusativ", "a1-possessives"]
    },
    {
      id: "home",
      title: "Home and city",
      titleDe: "Wohnen",
      weight: "high",
      official: true,
      blurb: "Rooms, furniture, places in town, simple directions. Official inventory: Wohnen.",
      exam: "Signs, ads for rooms, asking the way, Sprechen cards about your flat.",
      canDo: [
        "I can say whether I live in a flat, a house, or a shared flat.",
        "I can name the main rooms and a few pieces of furniture.",
        "I can name eight places in town (station, shop, bank, post, doctor).",
        "I can ask where something is and understand left / right / straight on.",
        "I can say which floor I live on and whether I have a balcony.",
        "I can understand a short room ad: rent, rooms, location."
      ],
      examHow: [
        "Lesen: small ads — Zimmer frei, Miete, Zentrum, ruhig.",
        "Sprechen: Wo wohnen Sie? Wie ist Ihre Wohnung?",
        "Hoeren: a person says they live near the station or on the third floor.",
        "Signs: Ausgang, Eingang, Aufzug, Toilette.",
        "Teil 3 pictures: ask the way to the bakery or pharmacy."
      ],
      subtopics: [
        "Wohnung, Haus, WG, Zimmer",
        "Raeume: Kueche, Bad, Wohnzimmer, Schlafzimmer",
        "Moebel: Tisch, Stuhl, Bett, Schrank",
        "Etage, Balkon, Garten",
        "Stadt: Bahnhof, Markt, Park, Schule",
        "Wegbeschreibung: links, rechts, geradeaus",
        "Miete at word level",
        "Nachbar (recognition)"
      ],
      explain: "<p><span class=\"de\">Wohnen</span> is an official A1 theme. You describe where you live and you find places in town. Keep it in the present tense.</p><h3>Your home in four sentences</h3><p><span class=\"de\">Ich wohne in einer Wohnung / in einem Haus / in einer WG. Die Wohnung hat zwei Zimmer, eine Küche und ein Bad. Ich wohne im zweiten Stock. Die Wohnung ist klein, aber schön.</span> Learn <span class=\"de\">im Erdgeschoss, im ersten Stock, im zweiten Stock</span>. German counting is not US counting: <span class=\"de\">Erdgeschoss</span> is the ground floor (US first floor). <span class=\"de\">erster Stock</span> is one floor up (US second). Hören loves <span class=\"de\">dritter Stock</span> vs 13.</p><h3>Town places</h3><p>You must recognise and say: <span class=\"de\">der Bahnhof, die Haltestelle, der Supermarkt, die Bäckerei, die Apotheke, die Bank, die Post, das Rathaus, der Park, das Krankenhaus</span>. Ask: <span class=\"de\">Wo ist der Bahnhof, bitte? Wie komme ich zur Post?</span> Answer pattern: <span class=\"de\">Gehen Sie geradeaus, dann links / rechts. Es ist dort.</span></p><h3>Ads and signs</h3><p>A room ad at A1 is tiny: <span class=\"de\">Zimmer frei, 350 Euro, nah am Bahnhof, ab 1. Mai</span>. Signs: <span class=\"de\">Eingang, Ausgang, geöffnet, geschlossen, Aufzug außer Betrieb</span>.</p><ul><li>in einer Wohnung (feminine), in einem Haus (neuter) — the article changes after <span class=\"de\">in</span> here; at A1 memorise the chunks.</li><li>Do not write a B1 complaint about mould. A1 is rooms and the way.</li></ul>",
      traps: [
        "Ich wohne in Wohnung (missing article).",
        "Confusing zu Hause (location) with nach Hause (direction home).",
        "Hearing dritter Stock as 13, or translating US second floor as zweiter Stock.",
        "Giving a 2-minute furniture catalogue. Name rooms, then stop.",
        "Reading Zimmer frei as a hotel when it is a private room ad."
      ],
      youMust: [
        "Name rooms, eight city places, and Erdgeschoss vs Stock.",
        "Ask: Wo ist …? Wie komme ich zum / zur …?",
        "Say: Gehen Sie geradeaus, dann links / rechts.",
        "Describe your home in four short sentences.",
        "Recognise Miete, Zimmer frei, Stock, Balkon in ads.",
        "Use zu Hause vs nach Hause correctly."
      ],
      chunks: [
        { de: "Ich wohne in einer Wohnung / in einem Haus / in einer WG.", en: "I live in a flat / in a house / in a shared flat." },
        { de: "Die Wohnung hat zwei Zimmer, eine Küche und ein Bad.", en: "The flat has two rooms, a kitchen and a bathroom." },
        { de: "Ich wohne im zweiten Stock.", en: "I live on the second floor (UK) / third floor (US) — two up from the ground." },
        { de: "Die Wohnung ist klein, aber schön.", en: "The flat is small but nice." },
        { de: "Wo ist der Bahnhof, bitte?", en: "Where is the station, please?" },
        { de: "Wie komme ich zur Post / zur Bank?", en: "How do I get to the post office / the bank?" },
        { de: "Gehen Sie geradeaus, dann links.", en: "Go straight on, then left." },
        { de: "Es ist dort / hier in der Nähe.", en: "It is there / near here." },
        { de: "Ich bin zu Hause. / Ich gehe nach Hause.", en: "I am at home. / I am going home." },
        { de: "Im Wohnzimmer steht ein Tisch.", en: "There is a table in the living room." },
        { de: "Das Zimmer ist frei ab dem ersten Mai.", en: "The room is free from the first of May." },
        { de: "Die Miete ist 400 Euro.", en: "The rent is 400 euros." }
      ],
      vocab: ["home", "travel"],
      grammar: ["a1-prepositions", "a1-articles"]
    },
    {
      id: "food",
      title: "Food and café",
      titleDe: "Essen und Trinken",
      weight: "exam-core",
      official: true,
      blurb: "Ordering drinks and food, prices, likes. Official inventory: Essen/Trinken.",
      exam: "Hoeren cafe. Schreiben cafe order or invitation. Sprechen: Was isst du gern?",
      canDo: [
        "I can order a drink and a snack in a cafe.",
        "I can ask the price and ask for the bill.",
        "I can say what I like to eat and drink, and what I do not eat.",
        "I can name common meals: breakfast, lunch, dinner.",
        "I can understand a short menu or a cafe sign.",
        "I can write a 30-word note suggesting coffee at a time and place."
      ],
      examHow: [
        "Hoeren: a waiter and a guest; you catch the drink or the price.",
        "Sprechen Teil 2–3: cards with Kaffee, Wasser, Kuchen, Restaurant.",
        "Schreiben: meet at Cafe Sonne at 15 Uhr.",
        "Lesen: a menu snippet or Oeffnungszeiten of a bakery.",
        "Pictures: point and say Ich moechte das."
      ],
      subtopics: [
        "Getraenke: Kaffee, Tee, Wasser, Saft, Bier",
        "Essen: Brot, Broetchen, Kuchen, Suppe, Salat",
        "Mahlzeiten: Fruehstueck, Mittagessen, Abendessen",
        "Bestellen und zahlen",
        "Preise und Euro",
        "gern / nicht gern / kein Fleisch",
        "Im Cafe vs im Supermarkt",
        "Einladung zum Kaffee"
      ],
      explain: "<p><span class=\"de\">Essen und Trinken</span> is official A1 and it is everywhere in the oral. The exam cafe is small: one drink, one snack, a price, the bill.</p><h3>The order chunk</h3><p><span class=\"de\">Guten Tag, ich möchte einen Kaffee und ein Stück Kuchen, bitte. Was kostet das? Zahlen, bitte.</span> Masculine accusative is the grammar point: <span class=\"de\">einen Kaffee, einen Tee, einen Apfel</span> but <span class=\"de\">eine Cola, ein Wasser, ein Brötchen</span>.</p><h3>Likes</h3><p><span class=\"de\">Ich esse gern Pizza. Ich trinke gern Tee. Ich esse kein Fleisch. Ich trinke keinen Alkohol.</span> <span class=\"de\">kein</span> takes the article shape: <span class=\"de\">kein / keine / keinen</span>.</p><h3>Meals and times</h3><p><span class=\"de\">Zum Frühstück esse ich Brot. Zu Mittag esse ich in der Kantine. Am Abend koche ich.</span> An invitation note: <span class=\"de\">Hallo Anna, hast du am Samstag Zeit? Wir können um 15 Uhr im Café Sonne Kaffee trinken. Schreib mir bitte. Bis bald</span></p><ul><li>Learn 12 food words with articles, not 80 without.</li><li>Zahlen, bitte is enough. You do not need a tipping speech at A1.</li></ul>",
      traps: [
        "Ich moechte ein Kaffee (wrong article). Say einen Kaffee.",
        "Answering Was isst du gern? with only a noun and no verb.",
        "Writing a restaurant review. A1 is order + like + time.",
        "Missing the three content points in the cafe invitation note."
      ],
      youMust: [
        "Order: Ich moechte … Was kostet das? Zahlen, bitte.",
        "Use einen / eine / ein correctly on three drinks or foods.",
        "Say Ich esse gern … Ich trinke gern … Ich esse kein …",
        "Name Fruehstueck, Mittagessen, Abendessen.",
        "Write a 30-word cafe invitation with day, time, place.",
        "Ask Was moechtest du trinken?"
      ],
      chunks: [
        { de: "Guten Tag, ich möchte einen Kaffee und ein Stück Kuchen.", en: "Hello, I would like a coffee and a piece of cake." },
        { de: "Für mich ein Wasser, bitte. Ohne Eis.", en: "For me a water, please. No ice." },
        { de: "Was kostet das?", en: "How much is that?" },
        { de: "Zahlen, bitte.", en: "The bill, please." },
        { de: "Ich esse gern … Ich trinke gern …", en: "I like to eat … I like to drink …" },
        { de: "Ich esse kein Fleisch. / Ich trinke keinen Kaffee.", en: "I do not eat meat. / I do not drink coffee." },
        { de: "Zum Frühstück esse ich Brot und trinke Tee.", en: "For breakfast I eat bread and drink tea." },
        { de: "Hast du am Samstag Zeit? Wir können Kaffee trinken.", en: "Do you have time on Saturday? We can have coffee." },
        { de: "Das Café ist um die Ecke.", en: "The cafe is around the corner." },
        { de: "Die Speisekarte, bitte. / Haben Sie einen Tisch frei?", en: "The menu, please. / Do you have a table free?" },
        { de: "Das schmeckt gut. / Das ist zu teuer.", en: "That tastes good. / That is too expensive." },
        { de: "Ich möchte noch einen Tee.", en: "I would like another tea." }
      ],
      vocab: ["food"],
      grammar: ["a1-akkusativ", "a1-negation"],
      schreiben: ["a1-cafe"]
    },
    {
      id: "shopping",
      title: "Shopping and clothes",
      titleDe: "Einkaufen",
      weight: "high",
      official: true,
      blurb: "Sizes, colours, too big or small, supermarket. Official inventory: Einkaufen.",
      exam: "Shop dialogues. Short complaints. Lesen ads and price signs.",
      canDo: [
        "I can say what I need and ask if a shop has it.",
        "I can name size, colour, and price.",
        "I can say something is too small, too big, or too expensive.",
        "I can ask where the till is and how I can pay.",
        "I can understand a simple supermarket sign or flyer.",
        "I can write a short shop message: I need X, when are you open?"
      ],
      examHow: [
        "Sprechen Teil 2–3: clothes or supermarket picture cards.",
        "Hoeren: a shop assistant says a price or a size.",
        "Lesen: Oeffnungszeiten, Sonderangebot, nur heute.",
        "Schreiben: a note that you will buy something or cannot come.",
        "Signs: Kasse, Ausgang, Probekabine."
      ],
      subtopics: [
        "Supermarkt und Baeckerei",
        "Kleidung: Jacke, Hose, T-Shirt, Schuhe",
        "Groesse und Farbe",
        "Preis, billig, teuer, Rabatt",
        "zu klein / zu groß / zu teuer",
        "Kasse, Karte, bar",
        "Oeffnungszeiten",
        "Umtausch at word level"
      ],
      explain: "<p><span class=\"de\">Einkaufen</span> is official A1. Two scenes: the supermarket (things + prices) and the clothes shop (size + colour).</p><h3>Clothes shop</h3><p><span class=\"de\">Ich brauche Größe M. Haben Sie das in Blau? Das T-Shirt ist zu klein / zu groß / zu teuer. Haben Sie das in einer anderen Größe?</span> Colours: <span class=\"de\">schwarz, weiß, rot, blau, grün, gelb, grau, braun</span>. Sizes: <span class=\"de\">S, M, L, 38, 40, 42</span>.</p><h3>Supermarket</h3><p><span class=\"de\">Wo ist die Milch? Wo ist die Kasse? Ich zahle bar / mit Karte.</span> Understand <span class=\"de\">geöffnet, geschlossen, Sonderangebot, 1 Kilo, das Angebot gilt bis …</span></p><h3>A short written note</h3><p><span class=\"de\">Hallo, ich brauche eine Jacke, Größe M, in Schwarz. Haben Sie die Jacke noch? Bis wann sind Sie offen? Danke</span> — greeting, need, question, closing. That is A1 Schreiben, not a complaint essay.</p><ul><li>zu + adjective is high-value: <span class=\"de\">zu teuer, zu klein, zu spaet</span>.</li><li>Pay phrases: <span class=\"de\">bar, mit Karte, die Kasse</span>.</li></ul>",
      traps: [
        "Forgetting size or colour when the card shows both.",
        "Saying Das ist teuer when the task is to ask for another size.",
        "Writing a B1 return letter with order numbers. A1 is need + size + open?",
        "Confusing Kasse (till) with Karte (ticket or card)."
      ],
      youMust: [
        "Say size, colour, too expensive, another one please.",
        "Ask Haben Sie das in …?",
        "Ask Wo ist die Kasse? Kann ich mit Karte zahlen?",
        "Read Oeffnungszeiten on a door sign.",
        "Write a 30-word shop note with what you need.",
        "Use zu klein / zu groß / zu teuer."
      ],
      chunks: [
        { de: "Ich brauche Größe M. Haben Sie das in Blau?", en: "I need size M. Do you have that in blue?" },
        { de: "Das T-Shirt ist zu klein / zu groß / zu teuer.", en: "The T-shirt is too small / too big / too expensive." },
        { de: "Haben Sie das in einer anderen Größe?", en: "Do you have that in another size?" },
        { de: "Wo ist die Kasse?", en: "Where is the till?" },
        { de: "Ich zahle bar / mit Karte.", en: "I pay cash / by card." },
        { de: "Was kostet die Jacke?", en: "How much is the jacket?" },
        { de: "Das ist ein Sonderangebot.", en: "That is a special offer." },
        { de: "Wann sind Sie offen? / Bis wann haben Sie auf?", en: "When are you open?" },
        { de: "Ich suche Brot, Milch und Äpfel.", en: "I am looking for bread, milk and apples." },
        { de: "Die Probekabine ist dort.", en: "The changing room is there." },
        { de: "Leider haben wir das nicht mehr.", en: "Unfortunately we do not have that any more." },
        { de: "Kann ich das umtauschen?", en: "Can I exchange that?" }
      ],
      vocab: ["shopping"],
      grammar: ["a1-akkusativ", "a1-articles", "a1-adjectives", "a1-dieser"],
      schreiben: ["a1-shop", "a1-parcel"]
    },
    {
      id: "time",
      title: "Time, days, calendar",
      titleDe: "Zeit und Kalender",
      weight: "exam-core",
      official: true,
      blurb: "Clock times and days appear in almost every Hoeren item and every form.",
      exam: "Hoeren appointments. Forms (date). Invitations with day and time.",
      canDo: [
        "I can tell the time with Uhr, halb, and Viertel.",
        "I can name the days and say today, tomorrow, yesterday.",
        "I can say on Monday, at 8 o'clock, at the weekend.",
        "I can write a date in German form.",
        "I can understand an appointment time in audio.",
        "I can invite someone with day, time, and place."
      ],
      examHow: [
        "Hoeren: the one fact is often the time — 8:15 vs 8:50.",
        "Schreiben Teil 1: Datum field.",
        "Schreiben Teil 2: meet on Saturday at 15 Uhr.",
        "Sprechen cards: Uhrzeit, Wochentag, Wochenende.",
        "Lesen: Oeffnungszeiten Mo–Fr 9–18."
      ],
      subtopics: [
        "Uhrzeiten: Punkt, halb, Viertel nach, Viertel vor",
        "Wochentage",
        "heute, morgen, gestern, jetzt",
        "am Montag, um acht Uhr, am Wochenende",
        "Datum TT.MM.JJJJ",
        "Monate (recognition)",
        "Oeffnungszeiten",
        "Termin, Einladung"
      ],
      explain: "<p>Time is not a separate official theme name, but every official theme uses it. If you miss <span class=\"de\">halb acht</span>, you miss the Hoeren item.</p><h3>Clock</h3><p><span class=\"de\">Es ist acht Uhr. Es ist halb acht</span> (7:30 — not 8:30). <span class=\"de\">Es ist Viertel nach zehn</span> (10:15). <span class=\"de\">Es ist Viertel vor drei</span> (14:45 in a 24-hour announcement). Digital times in announcements are often <span class=\"de\">acht Uhr fünfzehn</span>. Train both. Contrast <span class=\"de\">vierzehn / vierzig</span> and <span class=\"de\">dreizehn / dreißig</span> until they feel different.</p><h3>Days and prepositions</h3><p><span class=\"de\">am Montag, am Dienstag … am Sonntag. am Wochenende. am Morgen, am Abend. um acht Uhr. heute, morgen, gestern.</span> <span class=\"de\">Am</span> + day. <span class=\"de\">Um</span> + clock time.</p><h3>Dates</h3><p>Forms: <span class=\"de\">16.08.2026</span>. Spoken: <span class=\"de\">der sechzehnte August</span>. You do not need every ordinal at A1, but you must write the digits correctly.</p><ul><li>Hoeren trap: <span class=\"de\">erst um zehn</span> vs <span class=\"de\">schon um acht</span>.</li><li>Invitation: always day + time + place or the note is incomplete.</li></ul>",
      traps: [
        "halb acht heard as 8:30. It is 7:30.",
        "am acht Uhr (wrong). Say um acht Uhr.",
        "um Montag (wrong). Say am Montag.",
        "Writing 08/16 US-style on a German form.",
        "Leaving the date blank on Schreiben Teil 1."
      ],
      youMust: [
        "halb, Viertel, days, heute / morgen / gestern.",
        "Say am Montag um acht Uhr.",
        "Write a date as TT.MM.JJJJ.",
        "Catch a time in Hoeren and mark it immediately.",
        "Invite with day, time, and place.",
        "Read Mo–Fr 9–18 on a sign."
      ],
      chunks: [
        { de: "Es ist halb acht. / Es ist Viertel nach zehn.", en: "It is 7:30 / 10:15." },
        { de: "Es ist acht Uhr fünfzehn.", en: "It is 8:15 (digital style)." },
        { de: "Am Montag und Mittwoch gehe ich zum Kurs.", en: "On Monday and Wednesday I go to the course." },
        { de: "Hast du am Samstag Zeit?", en: "Do you have time on Saturday?" },
        { de: "Der Termin ist am Dienstag um zehn Uhr.", en: "The appointment is Tuesday at ten." },
        { de: "Heute / morgen / gestern", en: "today / tomorrow / yesterday" },
        { de: "Am Wochenende habe ich Zeit.", en: "I have time at the weekend." },
        { de: "Von neun bis achtzehn Uhr.", en: "From 9 to 18." },
        { de: "Das Datum ist der 16. August.", en: "The date is 16 August." },
        { de: "Wann beginnt der Kurs?", en: "When does the course start?" },
        { de: "Um wie viel Uhr treffen wir uns?", en: "At what time do we meet?" },
        { de: "Leider habe ich dann keine Zeit.", en: "Unfortunately I do not have time then." }
      ],
      vocab: ["numbers"],
      grammar: ["a1-time"]
    },
    {
      id: "daily",
      title: "Daily routine",
      titleDe: "Tagesablauf",
      weight: "high",
      official: true,
      blurb: "Get up, eat, work or course, free time — present tense verbs. Bridges Alltag and Freizeit.",
      exam: "Sprechen Mein Tag. Lesen short bios. Hoeren: when someone starts work.",
      canDo: [
        "I can tell my weekday in five present-tense sentences.",
        "I can use common separable verbs: aufstehen, einkaufen, fernsehen.",
        "I can say when I work, when I have a course, when I am free.",
        "I can understand a short text about another person's day.",
        "I can ask Was machst du am Morgen / am Wochenende?",
        "I can write a short plan for Saturday."
      ],
      examHow: [
        "Sprechen: Erzaehlen Sie von Ihrem Tag.",
        "Lesen: a bio with times (steht um 6 auf, arbeitet bis 16 Uhr).",
        "Hoeren: a change of plan — the course starts later.",
        "Schreiben: I cannot come because I work / I have a course.",
        "Cards: aufstehen, arbeiten, kochen, schlafen."
      ],
      subtopics: [
        "aufstehen, fruehstuecken, zur Arbeit / zum Kurs gehen",
        "Pausen, Mittagessen",
        "einkaufen, kochen, aufräumen",
        "fernsehen, Handy, treffen",
        "schlafen gehen",
        "Wochenende vs Werktag",
        "trennbare Verben in the present",
        "Uhrzeiten in the day"
      ],
      explain: "<p>A1 <span class=\"de\">Tagesablauf</span> is present tense only. You are not telling yesterday (that is A2 Perfekt). You are listing a normal day with times.</p><h3>A five-sentence day</h3><p><span class=\"de\">Am Morgen stehe ich um sieben auf. Dann frühstücke ich. Um acht gehe ich zur Arbeit / zum Kurs. Am Nachmittag kaufe ich ein. Am Abend koche ich und sehe fern.</span> Separable verbs split: <span class=\"de\">ich stehe … auf, ich kaufe … ein, ich sehe … fern</span>.</p><h3>Weekend</h3><p><span class=\"de\">Am Wochenende schlafe ich länger. Ich treffe Freunde. Ich gehe ins Kino oder in den Park.</span> That already touches Freizeit — keep hobbies short here; the leisure topic goes deeper.</p><h3>Why this is on the exam</h3><p>Examiners use the day to test verbs, times, and <span class=\"de\">am Morgen / am Abend</span>. A cancel note needs a reason: safest A1 is <span class=\"de\">Leider kann ich nicht kommen, denn ich muss arbeiten</span> (verb stays second). <span class=\"de\">weil ich arbeiten muss</span> is also fine if the verb is last — do not write <em>weil ich muss arbeiten</em>.</p><ul><li>Do not mix Perfekt into A1 production unless a task forces a single phrase.</li><li>Learn 10 daily verbs with their present forms, not 40 weakly.</li></ul>",
      traps: [
        "Using English word order: Ich aufstehe um sieben.",
        "Telling yesterday in broken Perfekt when the card says Mein Tag.",
        "A 20-sentence day. Five clear sentences beat a list of 15 verbs.",
        "Forgetting a time — the examiner is listening for um / am."
      ],
      youMust: [
        "A 5-sentence day with separable verbs: aufstehen, einkaufen, fernsehen.",
        "Say am Morgen / am Nachmittag / am Abend + time.",
        "Ask Was machst du am Wochenende?",
        "Write why you cannot come: arbeiten / Kurs / Arzt.",
        "Use gehen zur Arbeit / zum Kurs / nach Hause.",
        "Keep the story in the present tense."
      ],
      chunks: [
        { de: "Am Morgen stehe ich um sieben auf.", en: "In the morning I get up at seven." },
        { de: "Dann frühstücke ich und gehe zur Arbeit / zum Kurs.", en: "Then I have breakfast and go to work / to the course." },
        { de: "Am Nachmittag kaufe ich ein.", en: "In the afternoon I do the shopping." },
        { de: "Am Abend koche ich und sehe fern.", en: "In the evening I cook and watch TV." },
        { de: "Um zehn gehe ich schlafen.", en: "At ten I go to sleep." },
        { de: "Am Wochenende schlafe ich länger.", en: "At the weekend I sleep longer." },
        { de: "Was machst du am Morgen?", en: "What do you do in the morning?" },
        { de: "Leider kann ich nicht kommen, denn ich muss arbeiten.", en: "Unfortunately I cannot come, because I have to work (denn: verb stays second)." },
        { de: "Nach der Arbeit gehe ich nach Hause.", en: "After work I go home." },
        { de: "Ich habe um drei Uhr eine Pause.", en: "I have a break at three." },
        { de: "Unter der Woche habe ich wenig Zeit.", en: "On weekdays I have little time." },
        { de: "Samstag kaufe ich ein und treffe Freunde.", en: "On Saturday I shop and meet friends." }
      ],
      vocab: ["daily", "verbs"],
      grammar: ["a1-present", "a1-separable", "a1-connectors"]
    },
    {
      id: "travel",
      title: "Travel and traffic",
      titleDe: "Reisen und Verkehr",
      weight: "high",
      official: true,
      blurb: "Bus, train, tickets, delays at A1 word level. Official inventory: Reisen/Verkehr.",
      exam: "Hoeren announcements. Signs at the station. Ticket dialogues.",
      canDo: [
        "I can buy a single or return ticket to a city.",
        "I can ask when the next bus or train leaves.",
        "I can understand Gleis, Verspaetung, Umsteigen at recognition level.",
        "I can ask the way to the station or the stop.",
        "I can say how I travel to work or the course.",
        "I can read a simple departure sign."
      ],
      examHow: [
        "Hoeren Teil 1: platform, delay, cancelled — often once.",
        "Lesen: Fahrplan snippet, Gleis 4, Einfahrt 12:10.",
        "Sprechen: Wie kommen Sie zur Arbeit? Mit dem Bus / mit der Bahn.",
        "Teil 3: ask for a ticket or the way to the Haltestelle.",
        "Schreiben: I am late because the train has a delay."
      ],
      subtopics: [
        "Bus, Bahn, U-Bahn, Straßenbahn, Taxi, Fahrrad, Auto",
        "Fahrkarte: einfach, hin und zurueck",
        "Bahnhof, Haltestelle, Gleis",
        "Abfahrt, Ankunft, Verspaetung",
        "Umsteigen (recognition)",
        "links, rechts, geradeaus zur Haltestelle",
        "mit dem Bus / mit der Bahn",
        "Ich bin zu spaet"
      ],
      explain: "<p>Official A1 <span class=\"de\">Reisen und Verkehr</span> is survival at the station, not holiday essays.</p><h3>Buy a ticket</h3><p><span class=\"de\">Eine Fahrkarte nach Köln, bitte. Einfach. / Hin und zurück. Zweite Klasse.</span> Ask: <span class=\"de\">Wann fährt der nächste Bus? Von welchem Gleis fährt der Zug?</span></p><h3>How you travel</h3><p><span class=\"de\">Ich fahre mit dem Bus / mit der Bahn / mit dem Auto / mit dem Fahrrad. Ich gehe zu Fuß.</span> <span class=\"de\">Mit</span> takes dative: memorise <span class=\"de\">mit dem Bus, mit der Bahn</span> as chunks.</p><h3>Announcements</h3><p>Train your ear for <span class=\"de\">Gleis, Verspätung, fällt aus, heute nur bis …, umsteigen in …</span> You will not understand every word. You need the one fact: which platform, how many minutes late, go or no-go.</p><h3>Late message</h3><p><span class=\"de\">Hallo, ich komme zu spät. Der Zug hat Verspätung. Ich bin um 10:20 da. Bis gleich</span> — that is a complete A1 note.</p><ul><li>Do not write a B1 hotel complaint here.</li><li>Numbers in announcements are the exam, not the word Fahrkartenautomat.</li></ul>",
      traps: [
        "Hearing Gleis 4 and marking Gleis 14 because vierzehn sounded similar.",
        "Buying a ticket without saying the city.",
        "Ich fahre mit Bus (missing article). Say mit dem Bus.",
        "Writing a long travel story. A1 is ticket + time + late."
      ],
      youMust: [
        "Buy a ticket: Eine Fahrkarte nach …, bitte. Einfach / hin und zurueck.",
        "Ask Wann faehrt der naechste Bus? Von welchem Gleis?",
        "Understand Gleis, Verspaetung, Umsteigen at recognition level.",
        "Say Ich fahre mit dem Bus / mit der Bahn.",
        "Write a late note: Verspaetung + new time.",
        "Ask Wo ist die Haltestelle?"
      ],
      chunks: [
        { de: "Eine Fahrkarte nach Köln, bitte. Einfach.", en: "A ticket to Cologne, please. Single." },
        { de: "Hin und zurück, zweite Klasse.", en: "Return, second class." },
        { de: "Wann fährt der nächste Bus?", en: "When does the next bus leave?" },
        { de: "Von welchem Gleis fährt der Zug?", en: "Which platform does the train leave from?" },
        { de: "Der Zug hat Verspätung.", en: "The train is delayed." },
        { de: "Ich fahre mit dem Bus / mit der Bahn zur Arbeit.", en: "I go to work by bus / by train." },
        { de: "Wo ist die Haltestelle, bitte?", en: "Where is the stop, please?" },
        { de: "Ich komme zu spät. Der Bus hat Verspätung.", en: "I am late. The bus is delayed." },
        { de: "Muss ich umsteigen?", en: "Do I have to change?" },
        { de: "Der Zug fällt heute aus.", en: "The train is cancelled today." },
        { de: "Ich gehe zu Fuß. Es ist nicht weit.", en: "I walk. It is not far." },
        { de: "Ein Ticket zum Hauptbahnhof, bitte.", en: "A ticket to the main station, please." }
      ],
      vocab: ["travel"],
      grammar: ["a1-questions", "a1-prepositions"]
    },
    {
      id: "health",
      title: "Body and doctor",
      titleDe: "Körper und Arzt",
      weight: "high",
      official: true,
      blurb: "Simple pain and pharmacy — not insurance essays. Often sits under Person / Alltag in inventories.",
      exam: "Doctor dialogue. Appointment reminder texts. Pharmacy pictures.",
      canDo: [
        "I can say what hurts and since when in a simple way.",
        "I can ask for an appointment or for help at the pharmacy.",
        "I can name basic body parts used in pain phrases.",
        "I can understand a reminder: Termin am Dienstag um zehn.",
        "I can write a short absent note: I am ill, I cannot come.",
        "I can say I need a tablet or a plaster."
      ],
      examHow: [
        "Sprechen cards: Kopf, Bauch, Arzt, Apotheke.",
        "Hoeren: a clinic gives a time.",
        "Schreiben: absent from the course because you are ill.",
        "Lesen: a notice — Praxis geschlossen, Vertretung.",
        "Teil 3: ask where the pharmacy is."
      ],
      subtopics: [
        "Koerper: Kopf, Bauch, Ruecken, Zahn, Hals",
        "Schmerzen, Fieber, Schnupfen, Husten",
        "Arzt, Aerztin, Termin",
        "Apotheke, Tablette, Pflaster",
        "seit wann",
        "krank / gesund",
        "Ich kann nicht kommen",
        "Notfall / Krankenhaus (recognition)"
      ],
      explain: "<p>A1 health is pain + appointment + pharmacy. You are not discussing the Krankenkasse (that is B1).</p><h3>What hurts</h3><p><span class=\"de\">Ich habe Kopfschmerzen. Ich habe Bauchschmerzen. Ich habe Schnupfen und Husten. Ich habe Fieber. Seit wann? — Seit gestern / seit zwei Tagen.</span> Natural order: <span class=\"de\">Ich habe seit zwei Tagen Fieber und Husten.</span> Pattern: <span class=\"de\">Ich habe + pain word</span>, not <em>Ich bin Schmerz</em>.</p><h3>At the doctor or pharmacy</h3><p><span class=\"de\">Ich brauche einen Termin, bitte. Können Sie mir helfen? Ich brauche eine Tablette / ein Pflaster.</span> Understand <span class=\"de\">Wartezimmer, Rezept, geöffnet, Notdienst</span> at sign level.</p><h3>Absent note</h3><p><span class=\"de\">Hallo, ich bin krank. Ich kann heute nicht zum Kurs kommen. Bis bald</span> — greeting, reason, closing. Add a day if the task asks when you return.</p><ul><li>Keep vocabulary small: 8 body/pain words beat a medical dictionary.</li><li>Termin + weekday + time is the Hoeren fact more often than the illness name.</li></ul>",
      traps: [
        "Inventing insurance or specialist vocabulary.",
        "Ich bin Schmerz (wrong). Say Ich habe Schmerzen / Kopfschmerzen.",
        "Missing the day of the appointment in Hoeren.",
        "Writing a long hospital story instead of krank + cannot come."
      ],
      youMust: [
        "Ich habe Kopfschmerzen / Schnupfen. Seit wann?",
        "Ask for a Termin with a day and a time.",
        "Ask for a Tablette or Pflaster at the pharmacy.",
        "Write an absent note: krank, cannot come, greeting, closing.",
        "Name Arzt, Apotheke, Krankenhaus as places.",
        "Understand Praxis geschlossen on a door."
      ],
      chunks: [
        { de: "Ich habe Kopfschmerzen. Können Sie mir helfen?", en: "I have a headache. Can you help me?" },
        { de: "Ich habe seit zwei Tagen Fieber und Husten.", en: "I have had a fever and a cough for two days." },
        { de: "Ich brauche eine Tablette / ein Pflaster.", en: "I need a tablet / a plaster." },
        { de: "Ich brauche einen Termin, bitte.", en: "I need an appointment, please." },
        { de: "Der Termin ist am Dienstag um zehn Uhr.", en: "The appointment is Tuesday at ten." },
        { de: "Wo ist die Apotheke, bitte?", en: "Where is the pharmacy, please?" },
        { de: "Ich bin krank. Ich kann heute nicht kommen.", en: "I am ill. I cannot come today." },
        { de: "Geht es Ihnen gut? / Mir geht es nicht gut.", en: "Are you well? / I am not well." },
        { de: "Die Praxis ist heute geschlossen.", en: "The practice is closed today." },
        { de: "Haben Sie etwas gegen Schnupfen?", en: "Do you have something for a cold?" },
        { de: "Ich muss zum Arzt.", en: "I have to go to the doctor." },
        { de: "Gute Besserung!", en: "Get well soon!" }
      ],
      vocab: ["health"],
      grammar: ["a1-survival", "a1-dative", "a1-modals"],
      schreiben: ["a1-doctor", "a1-absent"]
    },
    {
      id: "work",
      title: "Work, course, learning",
      titleDe: "Arbeit, Beruf, Erziehung",
      weight: "high",
      official: true,
      blurb: "Job titles, classroom language, course forms. Official inventories: Arbeit/Beruf and Erziehung/Lernen.",
      exam: "Forms: which course? Sprechen: Was machen Sie beruflich? Classroom phrases.",
      canDo: [
        "I can say my job or that I am a student / in a course.",
        "I can say where I work or study and if I work full-time or part-time at word level.",
        "I can ask for an evening course or a beginner course.",
        "I can use classroom phrases: How do you say … in German?",
        "I can fill a course form: name, course, days, beginner or not.",
        "I can understand a short course notice: start date, room, time."
      ],
      examHow: [
        "Sprechen Teil 1: Was machen Sie beruflich?",
        "Schreiben Teil 1: Kurs, Niveau, Tage.",
        "Lesen: Kurs beginnt am …, Raum 3, 18:00 Uhr.",
        "Hoeren: the course is cancelled or starts later.",
        "Classroom language during the oral if you freeze."
      ],
      subtopics: [
        "Beruf: Lehrer, Arzt, Verkaeufer, Student, Rentner",
        "arbeiten als / ich bin …",
        "Firma, Buero, Schule, Universitaet, Kurs",
        "A1-Kurs, Abendkurs, VHS (recognition)",
        "Klassenzimmer: Wie sagt man …? Ich verstehe nicht.",
        "lernen, sprechen, schreiben, lesen, hoeren",
        "Form: welcher Kurs?",
        "Ich kann heute nicht zum Kurs"
      ],
      explain: "<p>Official lists split <span class=\"de\">Arbeit und Beruf</span> from <span class=\"de\">Erziehung und Lernen</span>. At A1 they share the same sentences: who you are in the daytime, and the German course you sit in.</p><h3>Job in one line</h3><p><span class=\"de\">Ich bin Student. / Ich arbeite als Koch. / Ich arbeite in einem Büro. / Ich bin Rentner. / Ich suche Arbeit.</span> Do not explain your whole career. One noun is enough.</p><h3>The course</h3><p><span class=\"de\">Ich lerne Deutsch im A1-Kurs. Ich möchte einen Abendkurs. Der Kurs ist am Montag und Mittwoch von 18 bis 20 Uhr.</span> Forms ask <span class=\"de\">Anfänger? ja/nein</span> and which days you can come.</p><h3>Classroom survival</h3><p>These phrases save the oral: <span class=\"de\">Wie sagt man … auf Deutsch? Ich verstehe das nicht. Können Sie das bitte wiederholen? Langsamer, bitte. Wie schreibt man das?</span></p><ul><li>Beruf nouns have gender: <span class=\"de\">der Lehrer, die Lehrerin</span>. At A1, one form is acceptable if you are consistent.</li><li>A1 Schreiben to a course office is a form or a 30-word absent note, not a B1 VHS letter.</li></ul>",
      traps: [
        "A long job history. One title is the task.",
        "Leaving the Kurs field empty on the form.",
        "Using English job titles when a simple German noun exists.",
        "Writing a B1 excuse letter with four Leitpunkte."
      ],
      youMust: [
        "Ich bin Student / ich arbeite als … / ich lerne Deutsch im A1-Kurs.",
        "Ask for an Abendkurs or say your course days.",
        "Use Wie sagt man … auf Deutsch? Ich verstehe nicht.",
        "Fill a course form: name, course, days.",
        "Write I cannot come to the course today.",
        "Understand Kurs, Raum, Beginn on a notice."
      ],
      chunks: [
        { de: "Ich arbeite als … / Ich bin Schüler / Student.", en: "I work as … / I am a pupil / student." },
        { de: "Ich arbeite in einem Büro / in einem Restaurant.", en: "I work in an office / in a restaurant." },
        { de: "Ich suche Arbeit. / Ich bin Rentner.", en: "I am looking for work. / I am retired." },
        { de: "Ich lerne Deutsch im A1-Kurs.", en: "I am learning German in the A1 course." },
        { de: "Ich möchte einen Abendkurs.", en: "I would like an evening course." },
        { de: "Der Kurs ist am Montag und Mittwoch.", en: "The course is on Monday and Wednesday." },
        { de: "Wie sagt man … auf Deutsch?", en: "How do you say … in German?" },
        { de: "Ich verstehe das nicht. Langsamer, bitte.", en: "I do not understand that. Slower, please." },
        { de: "Können Sie das bitte wiederholen?", en: "Can you please repeat that?" },
        { de: "Ich kann heute nicht zum Kurs kommen.", en: "I cannot come to the course today." },
        { de: "Wo ist Raum drei, bitte?", en: "Where is room three, please?" },
        { de: "Was machen Sie beruflich?", en: "What do you do for a living?" }
      ],
      vocab: ["work"],
      grammar: ["a1-modals", "a1-dative"],
      schreiben: ["a1-form", "a1-absent"]
    },
    {
      id: "weather-free",
      title: "Environment and weather",
      titleDe: "Umwelt und Wetter",
      weight: "medium",
      official: true,
      blurb: "Sun, rain, seasons, simple nature words. Official inventory: Umwelt/Wetter. Hobbies moved to Freizeit.",
      exam: "Small talk in Sprechen. Invitations that depend on weather. Short weather lines in Hoeren.",
      canDo: [
        "I can say what the weather is like today.",
        "I can name hot, cold, rain, sun, snow, wind.",
        "I can say a simple season sentence.",
        "I can suggest an indoor plan if it rains.",
        "I can understand a one-line weather forecast.",
        "I can name sun, park, and simple Umwelt words at A1 level."
      ],
      examHow: [
        "Sprechen small talk: Wie ist das Wetter?",
        "Schreiben: if it rains we go to the cafe, not the park.",
        "Hoeren: tomorrow it will rain — take a jacket.",
        "Lesen: a park notice or a weather line in an email.",
        "Cards: Sonne, Regen, Schnee."
      ],
      subtopics: [
        "Sonne, Regen, Schnee, Wind, Wolken",
        "warm, kalt, heiß, kuehl",
        "Jahreszeiten: Fruehling, Sommer, Herbst, Winter",
        "Heute scheint die Sonne / Es regnet",
        "Jacke mitnehmen",
        "Park, Baum, Fluss (recognition)",
        "Muell, sauber at word level",
        "Plan B when it rains"
      ],
      explain: "<p>Official A1 lists <span class=\"de\">Umwelt und Wetter</span>. At this level Umwelt is tiny: park, clean, rubbish bin. Weather is the productive half.</p><h3>Today</h3><p><span class=\"de\">Heute scheint die Sonne. Es ist warm. / Es regnet. Es ist kalt. / Es schneit. / Es ist windig.</span> Question: <span class=\"de\">Wie ist das Wetter?</span></p><h3>Seasons</h3><p><span class=\"de\">Im Sommer ist es heiß. Im Winter schneit es oft. Im Herbst ist es kühl.</span> One season sentence is enough for the oral.</p><h3>Plans</h3><p>Two short sentences are enough: <span class=\"de\">Es regnet. Wir gehen ins Café, nicht in den Park. Nimm eine Jacke mit.</span> If you already own verb-last from the connectors lesson, one <span class=\"de\">wenn</span> is a bonus: <span class=\"de\">Wenn es regnet, gehen wir ins Café.</span></p><h3>Umwelt at word level</h3><p>Recognise <span class=\"de\">der Park, der Baum, der Fluss, der Müll, die Tonne, bitte nicht rauchen</span>. Do not write a climate essay. That is B1 Umwelt.</p><ul><li>Weather adjectives: <span class=\"de\">schön, schlecht, warm, kalt</span>.</li><li>Freizeit (hobbies) is its own topic — do not dump your whole hobby list here.</li></ul>",
      traps: [
        "A climate speech. A1 weather is four words and a jacket.",
        "Es ist Regen (wrong). Say Es regnet.",
        "Forgetting a Plan B in an invitation when the card shows rain.",
        "Mixing English Fahrenheit talk. Use warm / kalt."
      ],
      youMust: [
        "Heute ist es warm / kalt / es regnet.",
        "Ask Wie ist das Wetter?",
        "Name four seasons with one sentence each.",
        "Say Nimm eine Jacke mit if it is cold or raining.",
        "Suggest cafe or cinema if the park is wet.",
        "Recognise Park, Muell, Sonne on signs and cards."
      ],
      chunks: [
        { de: "Heute scheint die Sonne. / Es regnet.", en: "The sun is shining. / It is raining." },
        { de: "Es ist warm / kalt / windig.", en: "It is warm / cold / windy." },
        { de: "Es schneit. Nimm eine Jacke mit.", en: "It is snowing. Take a jacket." },
        { de: "Wie ist das Wetter heute?", en: "What is the weather like today?" },
        { de: "Im Sommer ist es heiß. Im Winter ist es kalt.", en: "In summer it is hot. In winter it is cold." },
        { de: "Es regnet. Wir gehen ins Café, nicht in den Park.", en: "It is raining. We go to the cafe, not the park." },
        { de: "Das Wetter ist schön / schlecht.", en: "The weather is nice / bad." },
        { de: "Morgen soll es regnen.", en: "Tomorrow it is supposed to rain." },
        { de: "Der Park ist schön, aber heute ist es zu kalt.", en: "The park is nice, but today it is too cold." },
        { de: "Wo ist der Mülleimer?", en: "Where is the bin?" },
        { de: "Hier darf man nicht rauchen.", en: "You must not smoke here." },
        { de: "Je nach Wetter: bei Regen gehen wir ins Museum.", en: "Depending on the weather: if it rains, we go to the museum." }
      ],
      vocab: ["daily"],
      grammar: ["a1-negation"],
      schreiben: ["a1-friend", "a1-invite", "a1-rain"]
    },
    {
      id: "forms",
      title: "Forms and short messages",
      titleDe: "Formulare und Nachrichten",
      weight: "exam-core",
      official: true,
      blurb: "A1 Schreiben is a form plus a ~30-word note — not a B1 letter.",
      exam: "Schreiben Teil 1 and 2 every sitting.",
      canDo: [
        "I can fill a form: name, address, phone, date of birth, course, nationality.",
        "I can write a 30-word message with greeting, three facts, and closing.",
        "I can choose Hallo + first name or Sehr geehrte … for a course office.",
        "I can write why I am late or absent.",
        "I can invite someone with day, time, and place.",
        "I can check that every content point is a full short sentence."
      ],
      examHow: [
        "Schreiben Teil 1: 5 form fields. Empty fields lose easy points.",
        "Schreiben Teil 2: ~30 words, usually three Leitpunkte.",
        "Typical situations: invite a friend, cancel, ask a shop, write to the course.",
        "Register: du to a friend, Sie to an office — even at A1.",
        "Handwriting must be readable; dates as the form asks."
      ],
      subtopics: [
        "Form fields: Name, Vorname, Adresse, Telefon, Geburtsdatum",
        "Kurs, Nationalitaet, Geschlecht",
        "Anrede: Hallo / Liebe / Sehr geehrte",
        "Gruß: Bis bald / Viele Grüße / Mit freundlichen Grüßen",
        "Drei Inhaltspunkte in whole sentences",
        "Einladung, Absage, Verspaetung",
        "ca. 30 Woerter",
        "du vs Sie"
      ],
      explain: "<p>This is the A1 writing paper. There is <strong>no Sprachbausteine</strong> and no 100-word letter. You fill a form, then you write a tiny message.</p><h3>Teil 1 — the form</h3><p>Copy from your ID in your head: <span class=\"de\">Name, Vorname, Straße, PLZ, Ort, Telefon, Geburtsdatum, Nationalität, Kurs</span>. Write neatly. Dates: <span class=\"de\">16.08.2026</span>. Do not leave boxes blank if you know the answer.</p><h3>Teil 2 — the note</h3><p>Pattern: greeting + three short sentences (the three points) + closing. About 30 words is enough. Example: <span class=\"de\">Hallo Anna, hast du am Samstag Zeit? Wir können um 15 Uhr im Café Sonne Kaffee trinken. Schreib mir bitte. Bis bald</span></p><h3>Register</h3><p>Friend: <span class=\"de\">Hallo / Liebe Anna, … Viele Grüße / Bis bald</span>. Course office: <span class=\"de\">Sehr geehrte Frau Lang, … Mit freundlichen Grüßen</span> plus your full name. Do not mix.</p><ul><li>Cover every bullet. A pretty sentence that ignores a point scores worse than three plain sentences.</li><li>Do not open a B1 letter with four Leitpunkte and Konjunktiv II.</li></ul>",
      traps: [
        "Writing 80 words and missing a content point.",
        "No greeting or no closing.",
        "du to the course office or Sie to a close friend in the same paper.",
        "Blank form fields you could have filled.",
        "US date order on a German form."
      ],
      youMust: [
        "Fill: Name, Vorname, Land, Telefon, Datum, Kurs.",
        "Message: greeting, three facts, closing. About 30 words.",
        "Invite with day, time, place.",
        "Write late / absent with a reason.",
        "Use Mit freundlichen Grüßen to an office.",
        "Count the Leitpunkte before you stop writing."
      ],
      chunks: [
        { de: "Hallo Anna, hast du am Samstag Zeit?", en: "Hi Anna, do you have time on Saturday?" },
        { de: "Wir können um 15 Uhr im Café Sonne Kaffee trinken.", en: "We can have coffee at 3 p.m. at Cafe Sonne." },
        { de: "Schreib mir bitte. Bis bald", en: "Please write to me. See you soon" },
        { de: "Liebe Grüße / Viele Grüße", en: "Best wishes (informal)" },
        { de: "Sehr geehrte Frau Lang, leider kann ich heute nicht kommen.", en: "Dear Ms Lang, unfortunately I cannot come today." },
        { de: "Mit freundlichen Grüßen", en: "Yours sincerely" },
        { de: "Ich bin krank. / Der Zug hat Verspätung.", en: "I am ill. / The train is delayed." },
        { de: "Können wir den Termin auf Montag ändern?", en: "Can we change the appointment to Monday?" },
        { de: "Meine Telefonnummer ist …", en: "My phone number is …" },
        { de: "Danke für die Einladung. Ich komme gerne.", en: "Thanks for the invitation. I will gladly come." },
        { de: "Leider habe ich keine Zeit.", en: "Unfortunately I have no time." },
        { de: "Bitte schreiben Sie mir eine E-Mail.", en: "Please write me an email." }
      ],
      vocab: ["greetings", "numbers"],
      grammar: ["a1-questions"],
      schreiben: ["a1-form", "a1-friend", "a1-late", "a1-absent", "a1-invite"]
    },
    {
      id: "services",
      title: "Services: post, bank, police",
      titleDe: "Dienstleistungen",
      weight: "high",
      official: true,
      blurb: "Post, bank, police — official A1 Dienstleistungen. Simple requests, not bureaucracy essays.",
      exam: "Signs, short dialogues, forms that ask for an account or a parcel. Sprechen cards: Post, Bank.",
      canDo: [
        "I can say I want to send a letter or a parcel.",
        "I can ask where the post office or the bank is.",
        "I can say I need money or I want to open an account at word level.",
        "I can ask for help at the police in a very simple way.",
        "I can understand open / closed and a queue sign.",
        "I can fill name and address on a simple service form."
      ],
      examHow: [
        "Sprechen Teil 3 pictures: Post, Bank, Polizei.",
        "Lesen: Oeffnungszeiten of a bank or post office.",
        "Hoeren: your parcel is ready / the bank is closed at 12.",
        "Forms: Adresse, Ausweis, Kontonummer at recognition.",
        "Signs: bitte warten, nur mit Nummer, geschlossen."
      ],
      subtopics: [
        "die Post, der Brief, das Paket, die Briefmarke",
        "schicken, abholen",
        "die Bank, das Geld, das Konto, die Karte",
        "abheben, einzahlen (recognition)",
        "die Polizei, der Ausweis, verloren",
        "Termin, warten, Nummer ziehen",
        "Oeffnungszeiten",
        "Koennen Sie mir bitte helfen?"
      ],
      explain: "<p>Official Start Deutsch 1 inventories include <span class=\"de\">Dienstleistungen</span>: post, bank, police. A1 is the request, not the contract.</p><h3>Post</h3><p><span class=\"de\">Ich möchte einen Brief / ein Paket schicken. Was kostet das? Wo ist die Post, bitte? Ich möchte ein Paket abholen.</span> Recognise <span class=\"de\">Briefmarke, Einschreiben, Packstation</span> on signs; you do not need to explain them.</p><h3>Bank</h3><p><span class=\"de\">Ich möchte Geld abheben. Ich möchte ein Konto eröffnen. Meine Karte funktioniert nicht.</span> Keep it to one problem + one request. <span class=\"de\">Haben Sie einen Ausweis?</span> is a sentence you will hear, not write an essay about.</p><h3>Police and help</h3><p><span class=\"de\">Entschuldigung, können Sie mir bitte helfen? Ich habe meinen Ausweis / meine Tasche verloren. Wo ist die Polizei?</span> Emergency number recognition: <span class=\"de\">110, 112</span> — you do not role-play a crime report at A1.</p><ul><li>The oral wants <span class=\"de\">Ich möchte … Wo ist …? Können Sie mir helfen?</span></li><li>Do not start a B1 bank letter about a blocked card with four Leitpunkte.</li></ul>",
      traps: [
        "A long bank complaint. A1 is Ich moechte + place + help.",
        "Confusing Post (office / mail) with Paket (parcel).",
        "Ignoring Oeffnungszeiten on the Lesen sign.",
        "Using English please-help instead of Koennen Sie mir bitte helfen?"
      ],
      youMust: [
        "Say Ich moechte einen Brief / ein Paket schicken.",
        "Ask Wo ist die Post / die Bank / die Polizei?",
        "Say Ich moechte ein Konto eroeffnen / Geld abheben.",
        "Ask Koennen Sie mir bitte helfen? plus what is lost.",
        "Read geschlossen / bitte warten on a service door.",
        "Fill name and address on a simple form."
      ],
      chunks: [
        { de: "Wo ist die Post, bitte?", en: "Where is the post office, please?" },
        { de: "Ich möchte einen Brief / ein Paket schicken.", en: "I would like to send a letter / a parcel." },
        { de: "Was kostet das Porto?", en: "How much is the postage?" },
        { de: "Ich möchte ein Paket abholen.", en: "I would like to collect a parcel." },
        { de: "Ich möchte ein Konto eröffnen.", en: "I would like to open an account." },
        { de: "Ich möchte Geld abheben. / Die Karte funktioniert nicht.", en: "I would like to withdraw money. / The card does not work." },
        { de: "Wo ist die Bank, bitte?", en: "Where is the bank, please?" },
        { de: "Können Sie mir bitte helfen?", en: "Can you please help me?" },
        { de: "Ich habe meinen Ausweis verloren.", en: "I have lost my ID card." },
        { de: "Wo ist die Polizei?", en: "Where is the police?" },
        { de: "Die Bank ist heute geschlossen.", en: "The bank is closed today." },
        { de: "Bitte warten. Ziehen Sie eine Nummer.", en: "Please wait. Take a number." }
      ],
      vocab: ["home", "shopping"],
      grammar: ["a1-survival", "a1-modals", "a1-dative"],
      schreiben: ["a1-form", "a1-address", "a1-parcel"]
    },
    {
      id: "leisure",
      title: "Leisure and hobbies",
      titleDe: "Freizeit",
      weight: "high",
      official: true,
      blurb: "Hobbies, sport, cinema, meeting friends. Official inventory: Freizeit — its own theme, not only weather.",
      exam: "Sprechen cards and Teil 3 plans. Invitations. Lesen: cinema or club notices.",
      canDo: [
        "I can say what I like to do in my free time.",
        "I can name sport, cinema, music, reading, and meeting friends.",
        "I can invite someone to the cinema or a cafe with day and time.",
        "I can accept or say I have no time.",
        "I can understand a short event notice: film, time, price.",
        "I can make a simple plan: where, when, what."
      ],
      examHow: [
        "Sprechen: Was machen Sie in der Freizeit?",
        "Teil 3: plan cinema, park, or a party with picture cards.",
        "Schreiben: invitation to a friend.",
        "Lesen: Kino, Verein, Konzert — time and price.",
        "Hoeren: the film starts at 20 Uhr, not 18."
      ],
      subtopics: [
        "Hobbys: Sport, Musik, Lesen, Kochen, Tanzen",
        "Kino, Theater, Museum, Park",
        "Freunde treffen",
        "fernsehen, Handy, Computer",
        "Einladung und Absage",
        "Tag, Uhrzeit, Treffpunkt",
        "Was machst du gern?",
        "Verein / Kurs (recognition)",
        "Geburtstag und Einladung (see Feste)"
      ],
      explain: "<p><span class=\"de\">Freizeit</span> is its own official A1 theme. Weather is Umwelt/Wetter. Here you talk about hobbies and small plans.</p><h3>What you like</h3><p><span class=\"de\">In der Freizeit treffe ich Freunde. Ich spiele gern Fußball. Ich gehe gern ins Kino. Ich höre gern Musik. Ich lese gern. Ich koche gern.</span> Pattern: <span class=\"de\">ich + verb + gern</span> or <span class=\"de\">ich gehe gern + place</span>.</p><h3>Plan something (telc Teil 3 is a tiny plan)</h3><p>Not an A2 negotiation. It is: <span class=\"de\">Wir können am Samstag ins Kino gehen. Um 19 Uhr. Vor dem Kino. Ist das okay? Super.</span> If the partner says no: <span class=\"de\">Okay, dann am Sonntag. Oder wir gehen in den Park.</span> Picture cards can also be requests: <span class=\"de\">Können Sie mir bitte die Karte geben?</span></p><h3>Invitation note</h3><p><span class=\"de\">Hallo Tim, hast du am Freitag Zeit? Das Kino zeigt um 20 Uhr einen Film. Wir können uns um 19:45 vor dem Kino treffen. Schreib mir. Bis bald</span></p><ul><li>Three hobbies are enough. A list of twelve looks like a vocabulary dump.</li><li>Always add when and where or the plan is not a plan.</li></ul>",
      traps: [
        "Listing 15 hobbies with no time or place.",
        "Planning in English words (weekend, movie) instead of Wochenende, Kino.",
        "Forgetting to ask the partner Ist das okay?",
        "Writing a B1 opinion on screens and children."
      ],
      youMust: [
        "Say In der Freizeit … Ich … gern …",
        "Name cinema, sport, friends, music.",
        "Invite with day, time, meeting point.",
        "Accept or decline: Ich komme gern / Leider habe ich keine Zeit.",
        "Ask Was machst du gern in der Freizeit?",
        "Agree on one plan in Teil 3, not three open options."
      ],
      chunks: [
        { de: "In der Freizeit treffe ich Freunde.", en: "In my free time I meet friends." },
        { de: "Ich spiele gern Fußball. / Ich gehe gern schwimmen.", en: "I like playing football. / I like going swimming." },
        { de: "Ich gehe gern ins Kino / in den Park.", en: "I like going to the cinema / to the park." },
        { de: "Ich höre gern Musik und ich lese gern.", en: "I like listening to music and I like reading." },
        { de: "Was machst du gern in der Freizeit?", en: "What do you like doing in your free time?" },
        { de: "Wir können am Samstag ins Kino gehen.", en: "We can go to the cinema on Saturday." },
        { de: "Treffen wir uns um 19 Uhr vor dem Kino?", en: "Shall we meet at 7 p.m. in front of the cinema?" },
        { de: "Ist das okay? / Super, dann machen wir das.", en: "Is that okay? / Great, then let’s do that." },
        { de: "Leider kann ich nicht, ich habe keine Zeit.", en: "Unfortunately I cannot, I have no time." },
        { de: "Hast du Lust auf einen Kaffee?", en: "Do you feel like a coffee?" },
        { de: "Der Film beginnt um 20 Uhr. Die Karte kostet 8 Euro.", en: "The film starts at 8 p.m. The ticket costs 8 euros." },
        { de: "Am Wochenende mache ich Sport.", en: "At the weekend I do sport." },
        { de: "Heute ist mein Geburtstag. Ich habe eine kleine Party.", en: "Today is my birthday. I am having a small party." },
        { de: "Herzlichen Glückwunsch! Alles Gute zum Geburtstag!", en: "Congratulations! Happy birthday!" }
      ],
      vocab: ["daily"],
      grammar: ["a1-present", "a1-modals", "a1-connectors"],
      sprechen: true,
      schreiben: ["a1-invite", "a1-friend"]
    },
    {
      id: "feste",
      title: "Birthdays and invitations",
      titleDe: "Feste und Einladungen",
      weight: "high",
      official: true,
      blurb: "Birthday, party, congratulations. Official Freizeit includes Feste; A1 Schreiben loves a 30-word invite.",
      exam: "Schreiben Teil 2 invitation. Sprechen Teil 3 party pictures. Lesen: party notice.",
      canDo: [
        "I can say when my birthday is and how old I will be.",
        "I can invite someone with day, time, and place.",
        "I can congratulate someone in one sentence.",
        "I can accept or decline a party with a short reason.",
        "I can say what I will bring.",
        "I can understand a short party notice: time, address, RSVP."
      ],
      examHow: [
        "Schreiben: Hallo … Geburtstag / Kaffee … Tag, Uhrzeit, Ort.",
        "Sprechen Teil 3: party pictures — agree on one plan.",
        "Lesen: Einladung, ab 18 Uhr, bitte absagen.",
        "Hoeren: the party is Saturday, not Sunday.",
        "Cards: Geschenk, Kuchen, kommen."
      ],
      subtopics: [
        "Geburtstag und Alter",
        "Party, Feier, Einladung",
        "Herzlichen Glueckwunsch",
        "Tag, Uhrzeit, Adresse",
        "Was bringe ich mit?",
        "Zusage und Absage",
        "Weihnachten / Fest at word level",
        "Bitte antworte mir"
      ],
      explain: "<p>A1 Feste is not culture studies. It is one invitation you can write from memory.</p><h3>Birthday facts</h3><p><span class=\"de\">Mein Geburtstag ist am 12. März. Ich werde 30. Ich mache eine kleine Party bei mir.</span> Date as the form asks. Age with <span class=\"de\">werden</span> for the next birthday is optional; <span class=\"de\">Ich bin … Jahre alt</span> is enough.</p><h3>The 30-word invite</h3><p><span class=\"de\">Hallo Sara, am Samstag habe ich Geburtstag. Die Party ist um 18 Uhr bei mir, Kirchstraße 12. Kannst du kommen? Bring bitte einen Salat mit. Bis bald</span> — greeting, what, when, where, question, closing.</p><h3>Yes / no</h3><p><span class=\"de\">Danke für die Einladung. Ich komme gern. / Leider kann ich nicht, denn ich muss arbeiten. Alles Gute!</span> One <span class=\"de\">denn</span> is the safest A1 reason (verb stays second). <span class=\"de\">weil ich arbeiten muss</span> is also correct if the verb is last.</p><ul><li>Always include time and place or the letter misses a Leitpunkt.</li><li>Do not write a B1 party-planning letter with four Konjunktiv wishes.</li></ul>",
      traps: [
        "Invite with no time or no address.",
        "Mixing Sie and du in a friend invite.",
        "A long food menu instead of one bring-item.",
        "Forgetting to ask Kannst du kommen?"
      ],
      youMust: [
        "Write a 30-word birthday invite: day, time, place, question.",
        "Say Herzlichen Glueckwunsch / Alles Gute zum Geburtstag.",
        "Accept or decline with denn.",
        "Say what you will bring.",
        "Agree on one party plan in Teil 3.",
        "Read a notice for Uhrzeit and Adresse."
      ],
      chunks: [
        { de: "Mein Geburtstag ist am …", en: "My birthday is on …" },
        { de: "Am Samstag habe ich eine kleine Party.", en: "On Saturday I am having a small party." },
        { de: "Die Feier ist um 18 Uhr bei mir.", en: "The party is at 6 p.m. at my place." },
        { de: "Kannst du kommen? Bitte antworte mir.", en: "Can you come? Please reply." },
        { de: "Bring bitte einen Salat / einen Kuchen mit.", en: "Please bring a salad / a cake." },
        { de: "Herzlichen Glückwunsch! Alles Gute zum Geburtstag!", en: "Congratulations! Happy birthday!" },
        { de: "Danke für die Einladung. Ich komme gern.", en: "Thanks for the invitation. I will gladly come." },
        { de: "Leider kann ich nicht, denn ich muss arbeiten.", en: "Unfortunately I cannot, because I have to work." },
        { de: "Wo ist die Party? In welcher Straße?", en: "Where is the party? In which street?" },
        { de: "Wir feiern Weihnachten / Silvester in der Familie.", en: "We celebrate Christmas / New Year’s Eve with the family." },
        { de: "Was soll ich mitbringen?", en: "What should I bring?" },
        { de: "Super, dann sehen wir uns am Samstag.", en: "Great, then we will see each other on Saturday." }
      ],
      vocab: ["daily", "people"],
      grammar: ["a1-connectors", "a1-time", "a1-modals"],
      schreiben: ["a1-invite", "a1-friend", "a1-party"]
    }
  ]
});
