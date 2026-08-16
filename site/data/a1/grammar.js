registerPack("a1", {
  grammar: [
  {
    id: "a1-alphabet",
    title: "Alphabet and sounds",
    level: "a1",
    minutes: 28,
    html: `
      <p>telc A1 Sprechen starts with you: name, spelling, origin. Examiners listen for clear letters, especially <span class="de">ä ö ü ß</span> and the difference between <span class="de">W / V / B / P</span>. If they cannot write your name, you lose easy points. This is survival German, not literature.</p>
      <p>German uses the same A–Z as English, plus umlauts and ß. Spell slowly. Pause after every two or three letters. Say <span class="de">Bindestrich</span> for a hyphen and <span class="de">Leerzeichen</span> for a space.</p>
      <h3>Letters that trip English speakers</h3>
      <table>
        <tr><th>Letter</th><th>Say</th><th>Example</th></tr>
        <tr><td>W</td><td>like English v</td><td><span class="de">Wasser, wohnen, wie</span></td></tr>
        <tr><td>V</td><td>often like f</td><td><span class="de">Vater, viel, von</span></td></tr>
        <tr><td>Z</td><td>ts</td><td><span class="de">Zug, Zeit, zehn</span></td></tr>
        <tr><td>J</td><td>like English y</td><td><span class="de">ja, Jahr, jetzt</span></td></tr>
        <tr><td>R</td><td>soft in the throat, not rolled hard</td><td><span class="de">rot, Berlin, Lehrer</span></td></tr>
        <tr><td>ch after e/i</td><td>soft (ich-Laut)</td><td><span class="de">ich, nicht, Milch, Licht</span></td></tr>
        <tr><td>ch after a/o/u</td><td>harder (ach-Laut)</td><td><span class="de">auch, Buch, Nacht, machen</span></td></tr>
        <tr><td>ß</td><td>ss (never at the start of a word)</td><td><span class="de">Straße, heißen, groß</span></td></tr>
        <tr><td>ä / ö / ü</td><td>fronted vowels — do not say a / o / u</td><td><span class="de">Mädchen, schön, fünf</span></td></tr>
        <tr><td>ei / ie</td><td>ei = English “eye”; ie = English “ee”</td><td><span class="de">mein, Zeit · sie, Liebe</span></td></tr>
        <tr><td>eu /äu</td><td>like English “oy”</td><td><span class="de">neu, Deutsch, Häuser</span></td></tr>
      </table>
      <p>Letter names you will say in the exam: <span class="de">A ah, B be, C tse, D de, E eh, F ef, G ge, H ha, I ih, J jot, K ka, L el, M em, N en, O oh, P pe, Q ku, R er, S es, T te, U uh, V fau, W we, X iks, Y ypsilon, Z tset</span>.</p>
      <h3>Examples — say them aloud</h3>
      <ul>
        <li><span class="de">Ich heiße Müller. Das schreibt man: M-ü-l-l-e-r.</span></li>
        <li><span class="de">Mein Vorname ist Youssef. Y-o-u-s-s-e-f.</span></li>
        <li><span class="de">Ich wohne in der Kirchstraße. K-i-r-c-h-s-t-r-a-ß-e.</span></li>
        <li><span class="de">Meine E-Mail ist sara.k@web.de.</span></li>
        <li><span class="de">Wie bitte? Können Sie das bitte buchstabieren?</span></li>
        <li><span class="de">Langsamer bitte. Ich verstehe das nicht.</span></li>
        <li><span class="de">Das ist ein ß, nicht ein B.</span></li>
        <li><span class="de">Mein Name hat ein ü: Jürgen.</span></li>
        <li><span class="de">Die Hausnummer ist vierzehn, nicht vierzig.</span></li>
        <li><span class="de">Ich komme aus Österreich. Ö wie Köln.</span></li>
      </ul>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">Ich heiße … Das schreibt man … Wie bitte? Langsamer bitte. Ich verstehe das nicht. Können Sie das bitte wiederholen? Buchstabieren Sie bitte. Meine Telefonnummer ist …</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        Hören mixes similar sounds: <span class="de">drei / zwei</span>, <span class="de">vierzehn / vierzig</span>, <span class="de">sechs / sechsund</span>. Names with <span class="de">ä/ö/ü</span> are often the answer, not the easy English-looking spelling. If you hear <span class="de">ß</span>, write ß or ss — never a B. Do not rush your own name; one wrong letter and the partner writes the wrong person.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Spell your first and last name slowly, letter by letter.</li>
        <li>Spell your street and house number.</li>
        <li>Ask someone to speak more slowly and repeat.</li>
        <li>Give a phone number digit by digit.</li>
        <li>Say that your name has an umlaut and show which letter.</li>
      </ol>
    `,
  },
  {
    id: "a1-sein-haben",
    title: "sein and haben",
    level: "a1",
    minutes: 32,
    html: `
      <p>telc A1 Hören, Lesen, Sprechen and Schreiben all start from these two verbs. Almost every personal sentence needs <span class="de">sein</span> (who you are, where you are, how you feel, how old you are) or <span class="de">haben</span> (family, things, time, appointments). If these forms are slow, the whole exam is slow.</p>
      <p>Memorise the table until you can say it in both directions: pronoun → form, and form → pronoun. There is no shortcut. These are irregular and they never follow the regular present pattern.</p>
      <h3>Full paradigm</h3>
      <table>
        <tr><th></th><th>sein (to be)</th><th>haben (to have)</th></tr>
        <tr><td>ich</td><td><span class="de">bin</span></td><td><span class="de">habe</span></td></tr>
        <tr><td>du</td><td><span class="de">bist</span></td><td><span class="de">hast</span></td></tr>
        <tr><td>er / sie / es</td><td><span class="de">ist</span></td><td><span class="de">hat</span></td></tr>
        <tr><td>wir</td><td><span class="de">sind</span></td><td><span class="de">haben</span></td></tr>
        <tr><td>ihr</td><td><span class="de">seid</span></td><td><span class="de">habt</span></td></tr>
        <tr><td>sie / Sie</td><td><span class="de">sind</span></td><td><span class="de">haben</span></td></tr>
      </table>
      <p>Use <span class="de">sein</span> for identity, origin, location, profession, age, and many feelings. Use <span class="de">haben</span> for possessions, family members, appointments, hunger/thirst, and “I have time / a problem / a question”.</p>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Ich bin Studentin. Ich bin 24 Jahre alt.</span></li>
        <li><span class="de">Du bist aus Spanien. Du hast eine Schwester.</span></li>
        <li><span class="de">Er ist Lehrer. Er hat zwei Kinder.</span></li>
        <li><span class="de">Sie ist in Berlin. Sie hat heute keine Zeit.</span></li>
        <li><span class="de">Wir sind im Kurs. Wir haben eine Pause um zehn.</span></li>
        <li><span class="de">Ihr seid müde. Ihr habt Hunger.</span></li>
        <li><span class="de">Die Kinder sind zu Hause. Sie haben Hausaufgaben.</span></li>
        <li><span class="de">Haben Sie eine Frage? — Ja, ich habe eine Frage.</span></li>
        <li><span class="de">Ich habe Kopfschmerzen. Ich bin krank.</span></li>
        <li><span class="de">Wir haben einen Termin am Montag. Der Termin ist um 9 Uhr.</span></li>
        <li><span class="de">Das ist mein Freund. Er hat ein Auto, aber ich habe keins.</span></li>
        <li><span class="de">Bist du verheiratet? — Nein, ich bin ledig. Ich habe einen Freund.</span></li>
      </ul>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">Ich bin … Jahre alt. Ich bin aus … Ich bin verheiratet / ledig / Student. Ich habe Zeit / keine Zeit. Ich habe Hunger / Durst. Ich habe eine Frage. Wir sind in … Haben Sie …?</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        Age uses <strong>sein</strong>, not haben: <span class="de">Ich bin 25 Jahre alt</span> — never <em>Ich habe 25 Jahre</em>. Hunger and thirst use <strong>haben</strong>: <span class="de">Ich habe Hunger</span>, not <em>Ich bin Hunger</em>. Location is sein: <span class="de">Ich bin in Köln</span>. Possession is haben: <span class="de">Ich habe eine Wohnung in Köln</span>. Hören often swaps <span class="de">ist / hat</span> in similar-looking statements. <span class="de">Sie</span> can mean she or formal you — look at the verb: <span class="de">sie ist</span> = she; <span class="de">Sie sind</span> = you formal / they.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Say your age, job, and city.</li>
        <li>Say that you have two children and no car.</li>
        <li>Ask a classmate if they have time tomorrow.</li>
        <li>Say you are tired and you have a headache.</li>
        <li>Introduce your partner: name, origin, and what they have (family or job).</li>
      </ol>
    `,
  },
  {
    id: "a1-articles",
    title: "der die das / ein eine",
    level: "a1",
    minutes: 38,
    html: `
      <p>telc A1 Lesen and Schreiben punish missing articles. German does not let you say “table” alone. You need <span class="de">der Tisch</span> or <span class="de">ein Tisch</span>. In the oral exam, “I have apartment” sounds A0. Learn <strong>article + noun</strong> as one chunk from day one.</p>
      <p>There are three genders: masculine <span class="de">der</span>, feminine <span class="de">die</span>, neuter <span class="de">das</span>. Plural nominative is always <span class="de">die</span>. Gender is grammatical, not biological: <span class="de">das Mädchen</span> is a girl, but the word is neuter.</p>
      <h3>Nominative: the and a</h3>
      <table>
        <tr><th></th><th>Masculine</th><th>Feminine</th><th>Neuter</th><th>Plural</th></tr>
        <tr><td>the</td><td><span class="de">der Mann</span></td><td><span class="de">die Frau</span></td><td><span class="de">das Kind</span></td><td><span class="de">die Kinder</span></td></tr>
        <tr><td>a</td><td><span class="de">ein Mann</span></td><td><span class="de">eine Frau</span></td><td><span class="de">ein Kind</span></td><td>—</td></tr>
        <tr><td>no / not a</td><td><span class="de">kein Mann</span></td><td><span class="de">keine Frau</span></td><td><span class="de">kein Kind</span></td><td><span class="de">keine Kinder</span></td></tr>
        <tr><td>my</td><td><span class="de">mein Bruder</span></td><td><span class="de">meine Schwester</span></td><td><span class="de">mein Kind</span></td><td><span class="de">meine Kinder</span></td></tr>
      </table>
      <p><span class="de">ein</span> has no plural. For “some children / no children” you use the noun in plural, often with <span class="de">keine</span> or a number: <span class="de">zwei Kinder, keine Kinder</span>.</p>
      <h3>Useful gender patterns (helpful, not 100%)</h3>
      <table>
        <tr><th>Often</th><th>Ending / group</th><th>Examples</th></tr>
        <tr><td>die</td><td><span class="de">-ung, -heit, -keit, -tion, -schaft</span></td><td><span class="de">die Wohnung, die Krankheit, die Möglichkeit, die Nation, die Freundschaft</span></td></tr>
        <tr><td>das</td><td><span class="de">-chen, -lein</span>, many infinitives as nouns</td><td><span class="de">das Mädchen, das Brötchen, das Essen</span></td></tr>
        <tr><td>der</td><td>days, months, seasons, many -er jobs</td><td><span class="de">der Montag, der Juli, der Sommer, der Lehrer</span></td></tr>
      </table>
      <p>This table is <strong>nominative</strong> — the form for the subject and after <span class="de">sein</span>: <span class="de">Das ist ein Tisch. Der Tisch ist groß.</span> Accusative (the object) comes in a later lesson and only changes masculine.</p>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Das ist der Bahnhof. Der Bahnhof ist nicht weit.</span></li>
        <li><span class="de">Das ist die Schule. Die Schule beginnt um acht.</span></li>
        <li><span class="de">Das ist das Amt. Das Amt ist heute zu.</span></li>
        <li><span class="de">Ich habe eine Wohnung. Die Wohnung ist klein, aber schön.</span></li>
        <li><span class="de">Mein Bruder ist Arzt. Meine Schwester ist Krankenschwester.</span></li>
        <li><span class="de">Das Kind heißt Ali. Die Kinder sind im Garten.</span></li>
        <li><span class="de">Ein Kaffee kostet drei Euro. Der Kaffee ist heiß.</span></li>
        <li><span class="de">Hast du ein Handy? — Ja, ich habe ein Handy.</span></li>
        <li><span class="de">Das ist kein Problem. Das ist eine gute Idee.</span></li>
        <li><span class="de">Wir haben einen Kurs am Abend. Der Kurs ist auf A1.</span></li>
        <li><span class="de">Die Milch ist im Kühlschrank. Das Brot ist alt.</span></li>
        <li><span class="de">Ist das der Bus nach Köln? — Nein, das ist die Bahn.</span></li>
      </ul>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p>Never store a bare noun. Drill: <span class="de">der Tisch, die Lampe, das Bett, die Küche, der Kühlschrank, die Wohnung, das Zimmer, der Kurs, die Pause, das Formular, der Termin, die Adresse, das Handy, der Ausweis</span>.</p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        <span class="de">das Mädchen</span> takes <span class="de">es</span>, not sie, when you replace the noun: <span class="de">Das Mädchen ist klein. Es heißt Lena.</span> (People still sometimes say sie in speech; the exam prefers grammar match.) Do not guess gender from English. <span class="de">das Auto, die Stadt, der Computer</span> must be learned. Hören items often hinge on <span class="de">ein / eine / keinen</span>. In Schreiben, missing articles look like A0 even if the rest is fine.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Name five things in your kitchen with der/die/das.</li>
        <li>Say “This is a … / That is not a …” for three objects near you.</li>
        <li>Introduce your family with mein/meine.</li>
        <li>Describe your flat: rooms and furniture with articles.</li>
        <li>Ask “Is that the bus / the school / the office?”</li>
      </ol>
    `,
  },
  {
    id: "a1-pronouns",
    title: "Personal pronouns",
    level: "a1",
    minutes: 26,
    html: `
      <p>telc A1 Sprechen is a conversation with a partner you may have just met, plus an examiner. Choosing <span class="de">du</span> or <span class="de">Sie</span> is not decoration — it is politeness and exam register. In shops, at the Amt, and with the examiner, you almost always need <span class="de">Sie</span>.</p>
      <p>Pronouns replace names. The verb must match. <span class="de">sie</span> is three different people depending on the verb and the capital letter.</p>
      <h3>Nominative pronouns</h3>
      <table>
        <tr><th>Pronoun</th><th>Use</th><th>Verb hint</th></tr>
        <tr><td><span class="de">ich</span></td><td>I</td><td><span class="de">bin, habe, wohne</span></td></tr>
        <tr><td><span class="de">du</span></td><td>you — friends, family, children, classmates if invited</td><td><span class="de">bist, hast, wohnst</span></td></tr>
        <tr><td><span class="de">er</span></td><td>he / masculine noun</td><td><span class="de">ist, hat, wohnt</span></td></tr>
        <tr><td><span class="de">sie</span></td><td>she / feminine noun</td><td><span class="de">ist, hat, wohnt</span></td></tr>
        <tr><td><span class="de">es</span></td><td>it / neuter noun</td><td><span class="de">ist, hat</span></td></tr>
        <tr><td><span class="de">wir</span></td><td>we</td><td><span class="de">sind, haben, wohnen</span></td></tr>
        <tr><td><span class="de">ihr</span></td><td>you plural — a group of friends</td><td><span class="de">seid, habt, wohnt</span></td></tr>
        <tr><td><span class="de">sie</span></td><td>they</td><td><span class="de">sind, haben, wohnen</span></td></tr>
        <tr><td><span class="de">Sie</span></td><td>you formal — one person or a group</td><td><span class="de">sind, haben, wohnen</span></td></tr>
      </table>
      <p>Quick test: <span class="de">sie ist</span> = she. <span class="de">sie sind</span> = they. <span class="de">Sie sind</span> (capital S, often in the middle of a letter to one person) = formal you.</p>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Ich heiße Sara. Und du? Wie heißt du?</span></li>
        <li><span class="de">Wie heißen Sie? — Ich heiße Herr Klein.</span></li>
        <li><span class="de">Das ist mein Bruder. Er wohnt in Hamburg.</span></li>
        <li><span class="de">Das ist meine Kollegin. Sie arbeitet im Büro.</span></li>
        <li><span class="de">Das ist das Formular. Es ist auf dem Tisch.</span></li>
        <li><span class="de">Wir lernen Deutsch. Kommt ihr mit?</span></li>
        <li><span class="de">Die Nachbarn sind nett. Sie haben einen Hund.</span></li>
        <li><span class="de">Haben Sie Zeit? Können Sie mir helfen?</span></li>
        <li><span class="de">Seid ihr müde? Wollt ihr eine Pause?</span></li>
        <li><span class="de">Entschuldigung, sprechen Sie Deutsch?</span></li>
        <li><span class="de">Ich bin neu hier. Und Sie? Wohnen Sie auch in dieser Straße?</span></li>
        <li><span class="de">Das Kind ist klein. Es heißt Omar.</span></li>
      </ul>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">Wie heißen Sie? Und Sie? Wohnen Sie hier? Haben Sie Zeit? Entschuldigung. Sprechen Sie …? In A1 Sprechen with a partner: Und du? Wo wohnst du? Hast du Kinder?</span> — only if the task is informal (friends, classmates).</p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        In A1 Sprechen, use <span class="de">Sie</span> with the examiner unless the task clearly says friends. In shops, doctors, and letters to an office always Sie. Mixing <span class="de">du</span> and <span class="de">Sie</span> in one dialogue loses register points. Do not use <span class="de">ihr</span> for one person. Hören: <span class="de">sie hat</span> vs <span class="de">Sie haben</span> changes who is meant. Never start a formal letter with <span class="de">Hallo du</span>.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Greet an examiner and ask their name with Sie.</li>
        <li>Ask a friend three questions with du.</li>
        <li>Point at a man, a woman, and a form and replace each with er/sie/es.</li>
        <li>Invite a group of classmates using ihr.</li>
        <li>Ask in a shop: Do you have this in blue?</li>
      </ol>
    `,
  },
  {
    id: "a1-present",
    title: "Regular present tense",
    level: "a1",
    minutes: 36,
    html: `
      <p>telc A1 is almost entirely present tense. You describe your day, your family, your course, and what you want now. If the verb is not in position 2, the sentence sounds wrong even when every word is known. Examiners hear word order faster than vocabulary.</p>
      <p>Take the infinitive, drop <span class="de">-en</span> (sometimes <span class="de">-n</span>), add the ending. The verb is usually <strong>second</strong> in a statement. Position 1 can be the subject or a time phrase — the verb still comes next.</p>
      <h3>Endings with wohnen</h3>
      <table>
        <tr><th></th><th>wohnen (stem: wohn-)</th><th>lernen</th><th>arbeiten (stem + e before st/t)</th></tr>
        <tr><td>ich</td><td><span class="de">wohne</span></td><td><span class="de">lerne</span></td><td><span class="de">arbeite</span></td></tr>
        <tr><td>du</td><td><span class="de">wohnst</span></td><td><span class="de">lernst</span></td><td><span class="de">arbeitest</span></td></tr>
        <tr><td>er/sie/es</td><td><span class="de">wohnt</span></td><td><span class="de">lernt</span></td><td><span class="de">arbeitet</span></td></tr>
        <tr><td>wir</td><td><span class="de">wohnen</span></td><td><span class="de">lernen</span></td><td><span class="de">arbeiten</span></td></tr>
        <tr><td>ihr</td><td><span class="de">wohnt</span></td><td><span class="de">lernt</span></td><td><span class="de">arbeitet</span></td></tr>
        <tr><td>sie/Sie</td><td><span class="de">wohnen</span></td><td><span class="de">lernen</span></td><td><span class="de">arbeiten</span></td></tr>
      </table>
      <p>If the stem ends in <span class="de">-t, -d, -n, -m</span> after another consonant, add <span class="de">e</span> before <span class="de">-st / -t</span>: <span class="de">du arbeitest, er arbeitet, du findest, ihr redet</span>.</p>
      <h3>Stem-changing verbs you must own at A1</h3>
      <table>
        <tr><th>Infinitive</th><th>ich</th><th>du</th><th>er/sie</th></tr>
        <tr><td><span class="de">sprechen</span></td><td><span class="de">spreche</span></td><td><span class="de">sprichst</span></td><td><span class="de">spricht</span></td></tr>
        <tr><td><span class="de">fahren</span></td><td><span class="de">fahre</span></td><td><span class="de">fährst</span></td><td><span class="de">fährt</span></td></tr>
        <tr><td><span class="de">essen</span></td><td><span class="de">esse</span></td><td><span class="de">isst</span></td><td><span class="de">isst</span></td></tr>
        <tr><td><span class="de">sehen</span></td><td><span class="de">sehe</span></td><td><span class="de">siehst</span></td><td><span class="de">sieht</span></td></tr>
        <tr><td><span class="de">lesen</span></td><td><span class="de">lese</span></td><td><span class="de">liest</span></td><td><span class="de">liest</span></td></tr>
        <tr><td><span class="de">geben</span></td><td><span class="de">gebe</span></td><td><span class="de">gibst</span></td><td><span class="de">gibt</span></td></tr>
        <tr><td><span class="de">nehmen</span></td><td><span class="de">nehme</span></td><td><span class="de">nimmst</span></td><td><span class="de">nimmt</span></td></tr>
        <tr><td><span class="de">schlafen</span></td><td><span class="de">schlafe</span></td><td><span class="de">schläfst</span></td><td><span class="de">schläft</span></td></tr>
      </table>
      <p>ich / wir / sie / Sie keep the basic vowel. Only du and er/sie/es change.</p>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Ich wohne in Berlin. Ich lerne Deutsch.</span></li>
        <li><span class="de">Heute arbeite ich zu Hause.</span></li>
        <li><span class="de">Am Montag beginnt der Kurs um acht.</span></li>
        <li><span class="de">Wohnst du auch hier? — Ja, ich wohne nebenan.</span></li>
        <li><span class="de">Mein Mann arbeitet im Krankenhaus.</span></li>
        <li><span class="de">Wir kaufen Brot und Milch.</span></li>
        <li><span class="de">Du sprichst gut Deutsch. Er spricht Arabisch und Deutsch.</span></li>
        <li><span class="de">Sie fährt mit dem Bus zur Arbeit.</span></li>
        <li><span class="de">Das Kind isst um zwölf. Ich esse später.</span></li>
        <li><span class="de">Ich lese die E-Mail. Liest du sie auch?</span></li>
        <li><span class="de">Es gibt einen Supermarkt um die Ecke.</span></li>
        <li><span class="de">Nimmst du Zucker? — Nein, ich nehme den Kaffee schwarz.</span></li>
        <li><span class="de">Abends schlafen die Kinder um neun. Ich schlafe um elf.</span></li>
      </ul>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">Ich wohne in … Ich arbeite bei / als … Ich lerne Deutsch, weil … Heute mache ich … Am Wochenende besuche ich … Es gibt … hier.</span> Drill du/er of: <span class="de">sprechen, fahren, essen, sehen, lesen, geben, nehmen</span>.</p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        Verb stays second even if time comes first: <span class="de">Heute arbeite ich</span>, never <em>Heute ich arbeite</em>. <span class="de">du</span> needs <span class="de">-st</span>: <span class="de">du wohnst</span>, not wohn. After a stem in s/ß/z, du often has only <span class="de">-t</span>: <span class="de">du heißt, du sitzt</span>. Hören: one wrong person ending changes the whole statement (ich vs er). Do not put the infinitive in position 2: <span class="de">Ich wohne</span>, not <em>Ich wohnen</em>.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Describe a normal weekday in five present-tense sentences.</li>
        <li>Start three sentences with a time (today / on Monday / in the evening).</li>
        <li>Ask a partner what they do at the weekend (du-form).</li>
        <li>Say what your colleague does at work (er/sie stem-changing verb).</li>
        <li>Use es gibt to name two things in your neighbourhood.</li>
      </ol>
    `,
  },
  {
    id: "a1-questions",
    title: "Questions: W-words and yes/no",
    level: "a1",
    minutes: 32,
    html: `
      <p>telc A1 Sprechen is not a monologue. You must ask the partner back. Hören Teil 1 is built from short questions: times, prices, places. If you cannot hear or form W-questions, you miss the easiest marks on the paper.</p>
      <p>Two patterns only. <strong>Yes/no:</strong> conjugated verb first. <strong>W-question:</strong> question word, then verb, then the rest. Do not copy English “do you”.</p>
      <h3>Question words</h3>
      <table>
        <tr><th>Word</th><th>Means</th><th>Example</th></tr>
        <tr><td><span class="de">Wo?</span></td><td>where (location)</td><td><span class="de">Wo wohnst du?</span></td></tr>
        <tr><td><span class="de">Woher?</span></td><td>from where</td><td><span class="de">Woher kommst du?</span></td></tr>
        <tr><td><span class="de">Wohin?</span></td><td>to where</td><td><span class="de">Wohin gehst du?</span></td></tr>
        <tr><td><span class="de">Was?</span></td><td>what</td><td><span class="de">Was machst du?</span></td></tr>
        <tr><td><span class="de">Wer?</span></td><td>who (subject)</td><td><span class="de">Wer ist das?</span></td></tr>
        <tr><td><span class="de">Wen?</span></td><td>who (object)</td><td><span class="de">Wen besuchst du?</span></td></tr>
        <tr><td><span class="de">Wie?</span></td><td>how / what … like</td><td><span class="de">Wie heißt du? Wie geht es Ihnen?</span></td></tr>
        <tr><td><span class="de">Wie alt?</span></td><td>how old</td><td><span class="de">Wie alt bist du?</span></td></tr>
        <tr><td><span class="de">Wann?</span></td><td>when</td><td><span class="de">Wann beginnt der Kurs?</span></td></tr>
        <tr><td><span class="de">Warum?</span></td><td>why</td><td><span class="de">Warum lernst du Deutsch?</span></td></tr>
        <tr><td><span class="de">Wie viel?</span></td><td>how much (uncountable / price)</td><td><span class="de">Wie viel kostet das?</span></td></tr>
        <tr><td><span class="de">Wie viele?</span></td><td>how many</td><td><span class="de">Wie viele Kinder haben Sie?</span></td></tr>
        <tr><td><span class="de">Welcher / welche / welches?</span></td><td>which</td><td><span class="de">Welcher Bus fährt zum Markt?</span></td></tr>
      </table>
      <p>Yes/no answers: <span class="de">Ja. / Nein. / Doch.</span> Use <span class="de">doch</span> when you contradict a negative question: <span class="de">Hast du keine Zeit? — Doch, ich habe Zeit.</span></p>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Wohnst du in Berlin? — Ja, ich wohne in Berlin.</span></li>
        <li><span class="de">Haben Sie Zeit? — Nein, heute nicht.</span></li>
        <li><span class="de">Woher kommen Sie? — Ich komme aus Polen.</span></li>
        <li><span class="de">Wohin fährst du? — Ich fahre zur Arbeit.</span></li>
        <li><span class="de">Was kostet der Kaffee? — Drei Euro fünfzig.</span></li>
        <li><span class="de">Wann haben Sie geöffnet? — Von 9 bis 18 Uhr.</span></li>
        <li><span class="de">Wie viele Personen? — Zwei Erwachsene und ein Kind.</span></li>
        <li><span class="de">Welches Gleis? — Gleis fünf.</span></li>
        <li><span class="de">Wer ist Ihr Arzt? — Frau Dr. Stein.</span></li>
        <li><span class="de">Warum bist du zu spät? — Der Bus kommt nicht.</span></li>
        <li><span class="de">Sprechen Sie Englisch? — Ein bisschen.</span></li>
        <li><span class="de">Ist das weit? — Nein, nur fünf Minuten zu Fuß.</span></li>
        <li><span class="de">Und Sie? Wo wohnen Sie?</span></li>
      </ul>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p>Always throw one question back: <span class="de">Und du? Und Sie? Wo wohnen Sie? Was machen Sie beruflich? Haben Sie Kinder? Wann passt es Ihnen?</span> Shop/Amt: <span class="de">Was kostet das? Wann sind Sie da? Wo ist … bitte?</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        <span class="de">Wo / woher / wohin</span> are not interchangeable. <span class="de">Wo wohnst du?</span> = location. <span class="de">Woher kommst du?</span> = origin. <span class="de">Wohin gehst du?</span> = destination. <span class="de">Wie</span> is not only “how”: <span class="de">Wie heißt du?</span> = what is your name. Do not use <span class="de">was</span> for names. Hören loves number questions: write digits the second you hear them. In Sprechen, answering without asking back looks like you cannot hold a dialogue.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Ask five personal questions with different W-words (Sie-form).</li>
        <li>Turn “You live in Cologne” into a yes/no question.</li>
        <li>Ask the price, the time, and the place of a course.</li>
        <li>Answer a negative question with doch.</li>
        <li>In a pair task, ask one question back after every answer.</li>
      </ol>
    `,
  },
  {
    id: "a1-negation",
    title: "nicht and kein",
    level: "a1",
    minutes: 30,
    html: `
      <p>telc A1 Hören is built on negation traps. The recording often sounds like the statement, then adds <span class="de">nicht, kein, nur, schon, erst</span>. If you tick “true” because you heard the noun, you fail the item. Lesen does the same with opening hours and “no parking / no appointments today”.</p>
      <p><strong>kein</strong> replaces <em>ein</em> (and also works in plural) before a noun: no / not a / not any. <strong>nicht</strong> negates verbs, adjectives, adverbs, names, and whole ideas. You cannot say <em>ich kein wohne</em>.</p>
      <h3>kein follows ein-endings</h3>
      <table>
        <tr><th></th><th>M</th><th>F</th><th>N</th><th>Pl</th></tr>
        <tr><td>Nominative</td><td><span class="de">kein Bruder</span></td><td><span class="de">keine Schwester</span></td><td><span class="de">kein Kind</span></td><td><span class="de">keine Kinder</span></td></tr>
        <tr><td>Accusative</td><td><span class="de">keinen Bruder</span></td><td><span class="de">keine Schwester</span></td><td><span class="de">kein Kind</span></td><td><span class="de">keine Kinder</span></td></tr>
      </table>
      <table>
        <tr><th>Use</th><th>Rule</th><th>Example</th></tr>
        <tr><td>kein + noun</td><td>there is not a / I have no</td><td><span class="de">Ich habe kein Auto. Ich habe keine Zeit.</span></td></tr>
        <tr><td>nicht + verb idea</td><td>usually near the end, before the second verb or at the end</td><td><span class="de">Ich wohne nicht hier. Ich verstehe das nicht.</span></td></tr>
        <tr><td>nicht + adjective / adverb</td><td>right before the word</td><td><span class="de">Das ist nicht gut. Der Kaffee ist nicht heiß.</span></td></tr>
        <tr><td>nicht + place / time / name</td><td>before that element</td><td><span class="de">Ich arbeite nicht am Samstag. Ich heiße nicht Anna.</span></td></tr>
      </table>
      <p>Positive vs negative pairs to drill: <span class="de">ein / kein · eine / keine · jemals / nie · immer / nicht immer · alle / niemand · etwas / nichts · schon / noch nicht</span>.</p>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Ich habe kein Auto. Ich fahre mit dem Bus.</span></li>
        <li><span class="de">Wir haben keine Kinder. Wir haben eine Katze.</span></li>
        <li><span class="de">Das ist kein Problem. Ich kann später kommen.</span></li>
        <li><span class="de">Ich wohne nicht in der Stadt. Ich wohne in einem Dorf.</span></li>
        <li><span class="de">Der Laden ist heute nicht auf. Er ist geschlossen.</span></li>
        <li><span class="de">Ich trinke keinen Kaffee. Ich trinke Tee.</span></li>
        <li><span class="de">Sie spricht nicht gut Deutsch, aber sie versteht viel.</span></li>
        <li><span class="de">Ich bin nicht krank. Ich bin nur müde.</span></li>
        <li><span class="de">Wir haben noch keinen Termin. Erst nächste Woche.</span></li>
        <li><span class="de">Hier darf man nicht parken. Nur für Kunden.</span></li>
        <li><span class="de">Ich kenne niemanden in diesem Kurs.</span></li>
        <li><span class="de">Hast du keinen Hunger? — Doch, ich habe Hunger.</span></li>
      </ul>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">Ich habe keine Zeit. Das ist kein Problem. Ich verstehe das nicht. Ich wohne nicht weit. Der Kurs ist nicht teuer. Ich bin nicht sicher. Noch nicht. Nicht heute. Nur am Montag.</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        Hören loves the swap: you hear the topic word, then <span class="de">nicht / kein / nur / schon / erst / nie</span>. Read the statement first so you know what would make it false. <span class="de">kein</span> is for nouns; <span class="de">nicht</span> is not a second article. <span class="de">nicht ein</span> is almost always wrong at A1 — use kein. <span class="de">schon</span> vs <span class="de">erst</span>: <span class="de">Der Kurs beginnt schon um 8</span> (as early as) vs <span class="de">erst um 8</span> (not until). <span class="de">nur</span> limits: <span class="de">nur am Montag</span> makes “every day” false.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Say three things you do not have (kein + noun).</li>
        <li>Say three things you do not do (nicht).</li>
        <li>Correct someone: That is not my name / not my street.</li>
        <li>Explain a closed shop and an appointment you do not have yet.</li>
        <li>Answer “Don’t you have time?” with doch or nein, clearly.</li>
      </ol>
    `,
  },
  {
    id: "a1-akkusativ",
    title: "Accusative (ein/einen)",
    level: "a1",
    minutes: 36,
    html: `
      <p>telc A1 Schreiben (forms, short notes) and Sprechen (shopping, café) need the masculine object form. <span class="de">Ich möchte ein Kaffee</span> is a classic fail. The examiner hears <span class="de">einen</span> as a signal that you control the case system — even at A1.</p>
      <p>The accusative is the direct object. Ask <span class="de">wen?</span> (whom) or <span class="de">was?</span> (what). Only <strong>masculine</strong> articles change. Feminine, neuter, and plural look like nominative.</p>
      <h3>Nominative vs accusative</h3>
      <table>
        <tr><th></th><th>M</th><th>F</th><th>N</th><th>Pl</th></tr>
        <tr><td>the (Nom)</td><td><span class="de">der</span></td><td>die</td><td>das</td><td>die</td></tr>
        <tr><td>the (Akk)</td><td><span class="de">den</span></td><td>die</td><td>das</td><td>die</td></tr>
        <tr><td>a (Nom)</td><td><span class="de">ein</span></td><td>eine</td><td>ein</td><td>—</td></tr>
        <tr><td>a (Akk)</td><td><span class="de">einen</span></td><td>eine</td><td>ein</td><td>—</td></tr>
        <tr><td>my (Akk)</td><td><span class="de">meinen</span></td><td>meine</td><td>mein</td><td>meine</td></tr>
        <tr><td>no (Akk)</td><td><span class="de">keinen</span></td><td>keine</td><td>kein</td><td>keine</td></tr>
      </table>
      <p>Always accusative (A1 list): <span class="de">durch, für, gegen, ohne, um</span>. Learn them as a chant. After these, masculine nouns take den/einen even if they are not “objects” in the English sense.</p>
      <p>Typical A1 verbs with accusative: <span class="de">haben, suchen, kaufen, brauchen, sehen, finden, nehmen, trinken, essen, lernen, machen, möchten</span>.</p>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Ich sehe den Mann. Ich kenne die Frau. Ich habe das Formular.</span></li>
        <li><span class="de">Ich habe einen Bruder und eine Schwester.</span></li>
        <li><span class="de">Ich trinke einen Kaffee und ein Wasser.</span></li>
        <li><span class="de">Ich möchte eine Banane und ein Brot.</span></li>
        <li><span class="de">Ich suche einen Arzt. Ich brauche einen Termin.</span></li>
        <li><span class="de">Das Geschenk ist für den Lehrer. Es ist für die Kollegin.</span></li>
        <li><span class="de">Ich kaufe das ohne eine Tüte. Ich habe keinen Beutel.</span></li>
        <li><span class="de">Wir gehen durch den Park. Der Park ist schön.</span></li>
        <li><span class="de">Der Kurs beginnt um acht Uhr. Ich lerne den Text.</span></li>
        <li><span class="de">Hast du meinen Ausweis gesehen? — Ja, er liegt auf dem Tisch.</span></li>
        <li><span class="de">Ich nehme den blauen Pullover. Den roten nicht.</span></li>
        <li><span class="de">Können Sie mir einen Kugelschreiber geben?</span></li>
      </ul>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">Ich hätte gerne einen Kaffee. Ich suche einen Termin. Ich brauche einen Ausweis. Das ist für den Arzt. ohne Milch / ohne Zucker. durch die Stadt. um 8 Uhr. Ich habe keinen Hunger.</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        After <span class="de">sein</span> you stay in nominative: <span class="de">Das ist ein Tisch</span>, not einen Tisch. Accusative starts when someone <em>does something to</em> the noun. Masculine is the only change — do not invent <em>einen Frau</em>. <span class="de">um</span> + time is accusative but you will usually just say <span class="de">um 8 Uhr</span> with no article. Hören: <span class="de">für den Sohn / für die Tochter</span> can decide the person. In the café, masculine drinks need einen: <span class="de">einen Tee, einen Saft, einen Kaffee</span>.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Order two masculine drinks and one feminine or neuter food.</li>
        <li>Say what you are looking for at the doctor and at the shop.</li>
        <li>Give three “this is for …” sentences (für + masculine and feminine).</li>
        <li>Name two things you have and two you do not have (keinen/keine/kein).</li>
        <li>Describe walking through a place (durch) and a meeting at a time (um).</li>
      </ol>
    `,
  },
  {
    id: "a1-modals",
    title: "Modal verbs (want/can/must)",
    level: "a1",
    minutes: 36,
    html: `
      <p>telc A1 survival is modal verbs: can you, must you, would you like. Café, doctor, Amt, and the oral exam all run on <span class="de">möchten, können, müssen, wollen</span>. A full sentence with a modal plus infinitive at the end already sounds like real German.</p>
      <p>The modal is conjugated in position 2. The second verb stays as <strong>infinitive at the end</strong>. No <span class="de">zu</span>. You can also use a modal alone if the action is obvious: <span class="de">Ich möchte einen Tee.</span></p>
      <h3>Core A1 modals</h3>
      <table>
        <tr><th></th><th>können (can)</th><th>müssen (must)</th><th>wollen (want)</th><th>möchten (would like)</th></tr>
        <tr><td>ich</td><td><span class="de">kann</span></td><td><span class="de">muss</span></td><td><span class="de">will</span></td><td><span class="de">möchte</span></td></tr>
        <tr><td>du</td><td><span class="de">kannst</span></td><td><span class="de">musst</span></td><td><span class="de">willst</span></td><td><span class="de">möchtest</span></td></tr>
        <tr><td>er/sie/es</td><td><span class="de">kann</span></td><td><span class="de">muss</span></td><td><span class="de">will</span></td><td><span class="de">möchte</span></td></tr>
        <tr><td>wir</td><td><span class="de">können</span></td><td><span class="de">müssen</span></td><td><span class="de">wollen</span></td><td><span class="de">möchten</span></td></tr>
        <tr><td>ihr</td><td><span class="de">könnt</span></td><td><span class="de">müsst</span></td><td><span class="de">wollt</span></td><td><span class="de">möchtet</span></td></tr>
        <tr><td>sie/Sie</td><td><span class="de">können</span></td><td><span class="de">müssen</span></td><td><span class="de">wollen</span></td><td><span class="de">möchten</span></td></tr>
      </table>
      <p>A1 also needs <span class="de">dürfen</span> (be allowed) and <span class="de">sollen</span> (be supposed to) in signs and doctor talk: <span class="de">ich darf, du darfst, er darf · ich soll, du sollst, er soll</span>.</p>
      <p>Meanings: <span class="de">können</span> ability or possibility. <span class="de">müssen</span> necessity. <span class="de">wollen</span> strong want (can sound pushy). <span class="de">möchten</span> polite want — default in shops. <span class="de">nicht müssen</span> = do not have to. <span class="de">nicht dürfen</span> = must not.</p>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Ich kann Deutsch sprechen, aber nur ein bisschen.</span></li>
        <li><span class="de">Können Sie das bitte wiederholen?</span></li>
        <li><span class="de">Ich muss morgen arbeiten. Ich muss um sechs aufstehen.</span></li>
        <li><span class="de">Ich möchte einen Tee mit Milch.</span></li>
        <li><span class="de">Wir wollen nach Hause gehen. Es ist spät.</span></li>
        <li><span class="de">Möchten Sie noch etwas? — Nein, danke. Die Rechnung bitte.</span></li>
        <li><span class="de">Hier darf man nicht rauchen. Hier darf man nicht parken.</span></li>
        <li><span class="de">Sie sollen viel Wasser trinken. Das sagt der Arzt.</span></li>
        <li><span class="de">Ich will nicht warten. Ich habe keine Zeit.</span></li>
        <li><span class="de">Muss ich das Formular ausfüllen? — Ja, bitte.</span></li>
        <li><span class="de">Wir können mit der Bahn fahren oder mit dem Bus.</span></li>
        <li><span class="de">Du musst nicht kommen, wenn du krank bist.</span></li>
      </ul>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">Ich möchte … Ich hätte gerne … Ich kann nicht … Können Sie mir helfen? Ich muss … Hier darf man nicht … Was soll ich machen? Ich will nach Hause.</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        Infinitive at the end, not after the modal: <span class="de">Ich kann Deutsch sprechen</span>, never <em>Ich kann sprechen Deutsch</em>. No zu: not <em>zu sprechen</em> after a modal. ich/er forms look the same: <span class="de">kann, muss, will, möchte, darf, soll</span> — the pronoun tells you the person. <span class="de">wollen</span> in a café can sound rude; prefer möchten. Hören: <span class="de">muss nicht</span> (not necessary) vs <span class="de">darf nicht</span> (forbidden) is a favourite swap. <span class="de">möchten</span> is already “would like”; do not add würde.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Order in a café with möchten (drink + food).</li>
        <li>Say two things you can do and two you cannot do in German.</li>
        <li>Say what you must do tomorrow morning.</li>
        <li>Read a sign aloud: no parking / no smoking / please wait.</li>
        <li>Ask for help politely with können Sie.</li>
        <li>Tell a friend they do not have to come (nicht müssen).</li>
      </ol>
    `,
  },
  {
    id: "a1-time",
    title: "Time, days, word order",
    level: "a1",
    minutes: 32,
    html: `
      <p>telc A1 Hören lives on times and days. You will hear <span class="de">halb, Viertel, um, am, von … bis</span> once, sometimes fast. Schreiben wants “Monday 9 o’clock”, not a vague “later”. Word order is part of the same skill: when a time starts the sentence, the verb still comes second.</p>
      <h3>Clock language</h3>
      <table>
        <tr><th>You hear / say</th><th>Meaning</th></tr>
        <tr><td><span class="de">Es ist drei Uhr.</span></td><td>3:00</td></tr>
        <tr><td><span class="de">Es ist Viertel nach drei.</span></td><td>3:15</td></tr>
        <tr><td><span class="de">Es ist halb vier.</span></td><td>3:30 (half before 4)</td></tr>
        <tr><td><span class="de">Es ist Viertel vor vier.</span></td><td>3:45</td></tr>
        <tr><td><span class="de">um 8 Uhr / um acht</span></td><td>at 8:00</td></tr>
        <tr><td><span class="de">gegen 8 Uhr</span></td><td>around 8</td></tr>
        <tr><td><span class="de">von 9 bis 17 Uhr</span></td><td>from 9 to 17</td></tr>
        <tr><td><span class="de">am Morgen / Vormittag / Mittag / Nachmittag / Abend</span></td><td>parts of the day</td></tr>
        <tr><td><span class="de">in der Nacht / um Mitternacht</span></td><td>night / midnight</td></tr>
      </table>
      <table>
        <tr><th>English</th><th>German</th></tr>
        <tr><td>Monday–Sunday</td><td><span class="de">Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag</span></td></tr>
        <tr><td>on Monday</td><td><span class="de">am Montag</span> (all days: am + day)</td></tr>
        <tr><td>at the weekend</td><td><span class="de">am Wochenende</span></td></tr>
        <tr><td>today / tomorrow / yesterday</td><td><span class="de">heute / morgen / gestern</span></td></tr>
        <tr><td>this morning / this evening</td><td><span class="de">heute Morgen / heute Abend</span></td></tr>
      </table>
      <p>Time often comes early. Verb stays second: <span class="de">Am Montag gehe ich zur Schule. Um 17 Uhr beginnt der Kurs.</span> Official times in announcements are 24-hour: <span class="de">17 Uhr 30</span>.</p>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Wie spät ist es? — Es ist halb neun.</span></li>
        <li><span class="de">Der Zug fährt um 14 Uhr 10. Gleis drei.</span></li>
        <li><span class="de">Am Dienstag habe ich Deutsch. Der Kurs geht von 18 bis 20 Uhr.</span></li>
        <li><span class="de">Heute kann ich nicht. Morgen habe ich Zeit.</span></li>
        <li><span class="de">Gestern war ich beim Arzt. Heute arbeite ich.</span></li>
        <li><span class="de">Am Wochenende besuche ich meine Eltern.</span></li>
        <li><span class="de">Wir treffen uns um Viertel nach sechs vor dem Kino.</span></li>
        <li><span class="de">Der Laden ist von 9 bis 18 Uhr auf. Montags erst ab 10.</span></li>
        <li><span class="de">Ich stehe um sechs auf. Um sieben frühstücke ich.</span></li>
        <li><span class="de">Wann passt es Ihnen? — Am Freitag Nachmittag.</span></li>
        <li><span class="de">Die Pause ist um halb elf. Zehn Minuten.</span></li>
        <li><span class="de">Abends koche ich. Nachts schlafen die Kinder.</span></li>
      </ul>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">Wie spät ist es? Um … Uhr. am Montag. am Wochenende. heute / morgen / gestern. von … bis … Wann beginnt …? Wann haben Sie Zeit? Es ist halb … Viertel nach / Viertel vor.</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        <span class="de">halb vier</span> is 3:30, not 4:30. Hören: 13 vs 30, 16 vs 60, 2 vs 5 if mumbled. Write digits immediately. <span class="de">am</span> + day, <span class="de">um</span> + clock time, <span class="de">im</span> + month: <span class="de">am Freitag, um 8 Uhr, im Mai</span>. Do not say <em>in Montag</em>. Word order: not <em>Morgen ich komme</em>. Official audio often uses 24-hour time; convert if the statement says 5 pm.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Say the time in two ways: digital (17:30) and halb/Viertel.</li>
        <li>Give your weekly course times with am + day and um.</li>
        <li>Invite someone: day, time, place.</li>
        <li>Start three sentences with a time phrase (verb second).</li>
        <li>Explain shop hours with von … bis and one exception (erst ab …).</li>
      </ol>
    `,
  },
  {
    id: "a1-prepositions",
    title: "Simple prepositions",
    level: "a1",
    minutes: 32,
    html: `
      <p>telc A1 is full of place chunks: where you live, how you travel, where you go after class. Examiners do not need a full case lecture yet, but they do need the right preposition. Mixing <span class="de">nach Hause</span> and <span class="de">zu Hause</span> is an instant giveaway.</p>
      <p>Learn each preposition as a ready-made phrase, not as a dictionary word. Case details grow at A2; at A1 own the chunks below.</p>
      <h3>High-frequency map</h3>
      <table>
        <tr><th>Prep</th><th>Job</th><th>Chunk to memorise</th></tr>
        <tr><td><span class="de">in</span></td><td>in a country, city, or room (often location)</td><td><span class="de">in Deutschland, in Berlin, in der Küche</span></td></tr>
        <tr><td><span class="de">aus</span></td><td>origin / out of</td><td><span class="de">aus Spanien, aus der Türkei, aus dem Haus</span></td></tr>
        <tr><td><span class="de">nach</span></td><td>to a city/country without article; also “after”</td><td><span class="de">nach Hause, nach Berlin, nach der Arbeit</span></td></tr>
        <tr><td><span class="de">zu</span></td><td>to a person or a place with an article</td><td><span class="de">zu Hause, zum Arzt, zur Arbeit, zu mir</span></td></tr>
        <tr><td><span class="de">mit</span></td><td>with / by (transport)</td><td><span class="de">mit dem Bus, mit der Bahn, mit dir, mit Karte</span></td></tr>
        <tr><td><span class="de">von … bis</span></td><td>from … to (time or range)</td><td><span class="de">von 9 bis 17 Uhr, von Montag bis Freitag</span></td></tr>
        <tr><td><span class="de">bei</span></td><td>at someone’s / at a company</td><td><span class="de">bei mir, bei meinen Eltern, bei Siemens</span></td></tr>
        <tr><td><span class="de">an</span></td><td>days; at the counter / window</td><td><span class="de">am Montag, am Fenster, an der Haltestelle</span></td></tr>
        <tr><td><span class="de">auf</span></td><td>on a surface; some public places</td><td><span class="de">auf dem Tisch, auf Arbeit, auf die Post</span></td></tr>
        <tr><td><span class="de">um</span></td><td>at a clock time; around</td><td><span class="de">um 8 Uhr, um die Ecke</span></td></tr>
      </table>
      <p>Contractions you will hear constantly: <span class="de">zum = zu dem, zur = zu der, am = an dem, im = in dem, ins = in das</span>.</p>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Ich komme aus Italien und wohne in Köln.</span></li>
        <li><span class="de">Nach der Arbeit gehe ich nach Hause.</span></li>
        <li><span class="de">Am Abend bin ich zu Hause. Ich koche.</span></li>
        <li><span class="de">Ich fahre mit dem Bus zur Schule.</span></li>
        <li><span class="de">Wir gehen zum Arzt. Der Arzt ist in der Bahnhofstraße.</span></li>
        <li><span class="de">Kann ich mit Karte zahlen? — Ja, natürlich.</span></li>
        <li><span class="de">Der Kurs geht von 18 bis 20 Uhr.</span></li>
        <li><span class="de">Ich arbeite bei einer Firma in der Stadt.</span></li>
        <li><span class="de">Wir treffen uns an der Haltestelle.</span></li>
        <li><span class="de">Die Schlüssel liegen auf dem Tisch.</span></li>
        <li><span class="de">Ich muss auf die Post. Dann gehe ich ins Amt.</span></li>
        <li><span class="de">Kommst du zu mir? Ich bin bei meinen Eltern.</span></li>
      </ul>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">in Berlin / in Deutschland · aus … · nach Hause · zu Hause · zum Arzt · zur Arbeit · mit dem Bus · von … bis · bei mir · am Montag · um 8 Uhr · auf dem Tisch · ins Kino</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        <span class="de">nach Hause</span> = going home. <span class="de">zu Hause</span> = at home. Mixing these loses easy points. Cities and most countries take <span class="de">nach</span> with no article: <span class="de">nach Spanien</span>, but <span class="de">in die Schweiz, in die Türkei, in die USA</span> (they have an article). People take <span class="de">zu</span>: <span class="de">zum Arzt, zu Anna</span>, not nach Arzt. Transport is <span class="de">mit</span>, not in: <span class="de">mit dem Zug</span>. Hören often contrasts <span class="de">im Büro / zu Hause / beim Arzt</span>.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Say where you are from and where you live now.</li>
        <li>Describe your trip to work (mit + zu/zur).</li>
        <li>Contrast: I go home / I am at home.</li>
        <li>Give opening hours with von … bis.</li>
        <li>Say you are at your parents’ / at the doctor’s / at the bus stop.</li>
      </ol>
    `,
  },
  {
    id: "a1-survival",
    title: "Survival dialogues",
    level: "a1",
    minutes: 35,
    html: `
      <p>telc A1 Sprechen and Schreiben live in four rooms: café, shop, doctor/Amt, and a short personal chat. Grammar without these lines is unused knowledge. Say them aloud until they are automatic. Then swap one detail (size, time, symptom) so you are not reciting a script.</p>
      <p>Keep the frame: greeting → what you want → a question → thanks / goodbye. If you freeze, repair phrases are worth as much as content.</p>
      <h3>Café</h3>
      <ul>
        <li><span class="de">Guten Tag. Ich hätte gerne einen Kaffee und ein Wasser.</span></li>
        <li><span class="de">Mit Milch? — Ja, bitte. Ohne Zucker.</span></li>
        <li><span class="de">Für hier oder zum Mitnehmen? — Zum Mitnehmen bitte.</span></li>
        <li><span class="de">Das macht 4 Euro 50. Kann ich mit Karte zahlen?</span></li>
        <li><span class="de">Die Rechnung bitte. Danke, wiedersehen.</span></li>
      </ul>
      <h3>Shop</h3>
      <ul>
        <li><span class="de">Guten Tag. Ich suche eine Jacke, Größe 38.</span></li>
        <li><span class="de">Was kostet das? Das ist ein bisschen teuer.</span></li>
        <li><span class="de">Haben Sie das auch in Blau? Ich nehme die blaue.</span></li>
        <li><span class="de">Kann ich die anprobieren? Wo ist die Kabine?</span></li>
        <li><span class="de">Ich nehme das. Gibt es eine Tüte?</span></li>
      </ul>
      <h3>Doctor / Amt</h3>
      <ul>
        <li><span class="de">Guten Tag. Ich habe Kopfschmerzen. Wo tut es weh? Hier.</span></li>
        <li><span class="de">Ich brauche einen Termin. Haben Sie heute noch Zeit?</span></li>
        <li><span class="de">Ich bin neu hier. Ich brauche ein Formular.</span></li>
        <li><span class="de">Können Sie das bitte langsam ausfüllen helfen?</span></li>
        <li><span class="de">Wann kann ich wiederkommen? — Am Donnerstag um zehn.</span></li>
      </ul>
      <h3>Personal chat (oral exam)</h3>
      <ul>
        <li><span class="de">Hallo, ich heiße Mina. Und du?</span></li>
        <li><span class="de">Ich wohne in Mainz. Ich lerne Deutsch im Abendkurs.</span></li>
        <li><span class="de">Ich arbeite im Hotel. Was machst du beruflich?</span></li>
        <li><span class="de">Am Wochenende spiele ich Fußball. Und du?</span></li>
      </ul>
      <h3>Repair lines</h3>
      <ul>
        <li><span class="de">Wie bitte? Können Sie das bitte wiederholen?</span></li>
        <li><span class="de">Langsamer bitte. Ich verstehe das nicht.</span></li>
        <li><span class="de">Was bedeutet das? Können Sie das aufschreiben?</span></li>
        <li><span class="de">Einen Moment bitte. Ich überlege.</span></li>
      </ul>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">Guten Tag. Ich hätte gerne … Ich suche … Was kostet das? Ich nehme das. Ich brauche einen Termin. Haben Sie noch Zeit? Die Rechnung bitte. Wie bitte? Langsamer bitte. Danke, auf Wiedersehen.</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        Do not answer only “ja/nein” in Sprechen — add a sentence. Do not mix du and Sie in a shop. Prices: listen for <span class="de">Euro</span> and the decimal: <span class="de">vier fünfzig</span> is 4.50, not 450. Hören café dialogues often change the drink or “here / to go”. At the Amt, <span class="de">Formular, Ausweis, Termin, öffnungszeiten</span> decide true/false. If you invent English words, pause and use a repair line instead.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Play both roles in a café: order, pay, goodbye.</li>
        <li>Buy clothes: size, colour, too expensive, I’ll take it.</li>
        <li>Book a doctor’s appointment: symptom + day + time.</li>
        <li>Introduce yourself in 40 seconds, then ask two questions back.</li>
        <li>Use three repair phrases when you “don’t understand” a partner.</li>
      </ol>
    `,
  }
]
});
