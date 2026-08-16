registerPack("b1", {
  grammar: [
  {
    id: "gender",
    level: "a2",
    title: "Gender and articles",
    minutes: 50,
    html: `
      <p>telc B1 Sprachbausteine still starts with articles. A wrong <span class="de">der/die/das</span> poisons adjective endings, relative pronouns, and preposition contractions in the same sentence. Schreiben letters that skip articles look A2. Learn gender with the noun; never store a bare word.</p>
      <p>Every noun has a gender. In plural nominative, all nouns take <span class="de">die</span>. <span class="de">ein</span> has no plural. <span class="de">kein</span> and possessives (<span class="de">mein, dein, sein, ihr, unser, euer, Ihr</span>) use ein-endings.</p>
      <h3>How it works, step by step</h3>
      <ol>
        <li>Store the article with the noun: not <em>Wohnung</em>, but <span class="de">die Wohnung</span>. Gender is a property of the word, not of the thing in the world.</li>
        <li>Decide number: singular or plural. Plural nominative/accusative is always <span class="de">die</span> for der-words. There is no <span class="de">ein</span> in the plural; use <span class="de">keine / meine / unsere</span>.</li>
        <li>Decide case from the job in the sentence: subject = Nom, direct object / always-Akk preposition = Akk, “to whom / with / at” = Dat, “of the …” = Gen.</li>
        <li>Pick the article from the paradigm. Then, if an adjective follows, its ending depends on this article (see the adjectives lesson).</li>
        <li>In a letter, read the finished sentence aloud. A missing article (<span class="de">Ich habe Termin</span>) sounds like a telegram, not like Zertifikat Deutsch.</li>
      </ol>
      <h3>English vs German</h3>
      <p>English <em>the / a</em> do not show gender or case. German articles do both. English “of the course” is a preposition; German often uses genitive <span class="de">des Kurses</span> in careful B1 writing. English “it” for a girl is wrong in German: <span class="de">das Mädchen</span> is neuter, so <span class="de">es</span> (or later <span class="de">sie</span> when you mean the person). English speakers also drop articles after “need / have”: <em>I need appointment</em> — German must keep <span class="de">Ich brauche einen Termin</span>.</p>
      <h3>der-word paradigm</h3>
      <table>
        <tr><th></th><th>M</th><th>F</th><th>N</th><th>Pl</th></tr>
        <tr><td>Nom</td><td><span class="de">der</span></td><td><span class="de">die</span></td><td><span class="de">das</span></td><td><span class="de">die</span></td></tr>
        <tr><td>Akk</td><td><span class="de">den</span></td><td><span class="de">die</span></td><td><span class="de">das</span></td><td><span class="de">die</span></td></tr>
        <tr><td>Dat</td><td><span class="de">dem</span></td><td><span class="de">der</span></td><td><span class="de">dem</span></td><td><span class="de">den</span> (+n on noun)</td></tr>
        <tr><td>Gen</td><td><span class="de">des</span> (+s)</td><td><span class="de">der</span></td><td><span class="de">des</span> (+s)</td><td><span class="de">der</span></td></tr>
      </table>
      <p>Same endings on <span class="de">dieser, jeder, welcher, solcher, mancher</span>. ein-words differ where masculine/neuter nominative (and neuter accusative) have no extra -er/-es on the article itself: <span class="de">ein, mein, kein</span>.</p>
      <h3>ein-word paradigm (the missing half)</h3>
      <table>
        <tr><th></th><th>M</th><th>F</th><th>N</th><th>Pl</th></tr>
        <tr><td>Nom</td><td><span class="de">ein / mein / kein</span></td><td><span class="de">eine / meine / keine</span></td><td><span class="de">ein / mein / kein</span></td><td>— / <span class="de">meine / keine</span></td></tr>
        <tr><td>Akk</td><td><span class="de">einen / meinen / keinen</span></td><td><span class="de">eine / meine / keine</span></td><td><span class="de">ein / mein / kein</span></td><td>— / <span class="de">meine / keine</span></td></tr>
        <tr><td>Dat</td><td><span class="de">einem / meinem / keinem</span></td><td><span class="de">einer / meiner / keiner</span></td><td><span class="de">einem / meinem / keinem</span></td><td>— / <span class="de">meinen / keinen</span> (+n)</td></tr>
        <tr><td>Gen</td><td><span class="de">eines / meines / keines</span> (+s)</td><td><span class="de">einer / meiner / keiner</span></td><td><span class="de">eines / meines / keines</span> (+s)</td><td>— / <span class="de">meiner / keiner</span></td></tr>
      </table>
      <p>Possessives follow ein-endings: <span class="de">mein, dein, sein, ihr, unser, euer, Ihr</span>. <span class="de">unser</span> and <span class="de">euer</span> keep the -er in the stem: <span class="de">unserem Kurs, eure Wohnung</span> (euer often drops e: <span class="de">eure, eurem</span>).</p>
      <h3>Patterns (useful, not laws)</h3>
      <table>
        <tr><th>Often</th><th>Signal</th><th>Examples</th></tr>
        <tr><td>die</td><td><span class="de">-ung, -heit, -keit, -schaft, -tion, -tät, -ik</span></td><td><span class="de">die Entscheidung, die Möglichkeit, die Qualität</span></td></tr>
        <tr><td>das</td><td><span class="de">-chen, -lein, -ment, -um</span>, infinitives as nouns</td><td><span class="de">das Mädchen, das Instrument, das Leben</span></td></tr>
        <tr><td>der</td><td>days, months, seasons, -ling, many -er jobs, -ismus</td><td><span class="de">der Dienstag, der Frühling, der Lehrling, der Tourismus</span></td></tr>
      </table>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Die Wohnung ist klein, aber die Lage ist gut.</span></li>
        <li><span class="de">Ich habe einen Termin im Amt. Das Formular liegt auf dem Tisch.</span></li>
        <li><span class="de">Meiner Meinung nach ist der Kurs zu teuer.</span></li>
        <li><span class="de">Wir sprechen über die Probleme der Stadt.</span></li>
        <li><span class="de">Das Mädchen heißt Lara. Es geht in den Kindergarten.</span></li>
        <li><span class="de">Kein Problem: ich schicke Ihnen die Unterlagen.</span></li>
        <li><span class="de">Am Montag beginnt der neue Abschnitt. Im Mai haben wir Prüfung.</span></li>
        <li><span class="de">Die Qualität des Kurses ist in Ordnung. Der Preis nicht.</span></li>
        <li><span class="de">Ich brauche die Nummer des Hausmeisters. Wissen Sie die?</span></li>
        <li><span class="de">Unsere Nachbarn sind nett. Ihre Kinder spielen im Hof.</span></li>
        <li><span class="de">Welcher Zug fährt nach Mainz? Welches Gleis?</span></li>
        <li><span class="de">Jeder Teilnehmer braucht einen Ausweis und das Anmeldeformular.</span></li>
        <li><span class="de">Die Anmeldung des Kindes dauert länger als gedacht.</span></li>
        <li><span class="de">Im Keller der Nachbarn steht ein altes Fahrrad.</span></li>
        <li><span class="de">Welches Formular meinen Sie — das gelbe oder das weiße?</span></li>
        <li><span class="de">Keiner der Kollegen hatte die Nummer des Hausmeisters.</span></li>
        <li><span class="de">Unser Sohn geht in den Kindergarten. Seine Jacke hängt an der Tür.</span></li>
      </ul>
      <h3>Worked examples</h3>
      <ul>
        <li><span class="de">Ich schicke Ihnen die Unterlagen des Kurses.</span> — I am sending you the documents of the course. — <span class="de">des Kurses</span> is genitive masculine: article <span class="de">des</span> + -s on the noun.</li>
        <li><span class="de">Mit der Entscheidung bin ich nicht einverstanden.</span> — I do not agree with the decision. — <span class="de">mit</span> forces dative; feminine dative article is <span class="de">der</span>, not die.</li>
        <li><span class="de">Kein Kollege hatte Zeit. Meine Kollegin schon.</span> — No colleague had time. My (female) colleague did. — <span class="de">kein</span> is ein-word masculine nominative; <span class="de">meine</span> is feminine nominative.</li>
        <li><span class="de">Das Problem der Nachbarn ist der Lärm.</span> — The neighbours’ problem is the noise. — <span class="de">der Nachbarn</span> is genitive plural (looks like feminine dative — check the meaning “of the …”).</li>
      </ul>
      <h3>Right vs wrong</h3>
      <table>
        <tr><th>Wrong</th><th>Right</th><th>Why</th></tr>
        <tr><td><span class="de">Ich habe Termin im Amt.</span></td><td><span class="de">Ich habe einen Termin im Amt.</span></td><td>Masculine accusative needs einen.</td></tr>
        <tr><td><span class="de">Die Qualität von der Kurs ist gut.</span></td><td><span class="de">Die Qualität des Kurses ist gut.</span></td><td>B1 writing prefers genitive “of the course”.</td></tr>
        <tr><td><span class="de">Das Mädchen, sie heißt Lara.</span></td><td><span class="de">Das Mädchen heißt Lara. Es / Sie geht in den Kindergarten.</span></td><td>Grammatical gender is das; many speakers later switch to sie for a person.</td></tr>
        <tr><td><span class="de">mit die Eltern</span></td><td><span class="de">mit den Eltern</span></td><td>Plural dative = den + noun that already ends in n.</td></tr>
      </table>
      <h3>Mini letter — Amt</h3>
      <p><span class="de">Sehr geehrte Damen und Herren, ich schreibe wegen der Anmeldung meines Kindes. Das Formular liegt bei. Die Geburtsurkunde schicke ich nächste Woche. Mit freundlichen Grüßen</span></p>
      <p>Gloss: I am writing because of my child’s registration. The form is enclosed. I will send the birth certificate next week. — Watch <span class="de">der Anmeldung</span> (wegen + genitive, feminine) and <span class="de">meines Kindes</span> (genitive neuter).</p>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">der Termin, die Wohnung, das Formular, die Möglichkeit, die Entscheidung, das Problem, der Kollege, die Kollegin, am Montag, im Mai, des Kurses, der Stadt, meiner Meinung nach, kein Problem</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        Sprachbausteine: the gap is often an article whose gender you only know if you learned the noun. Feminine dative <span class="de">der</span> looks like masculine nominative — check the preposition. Plural dative <span class="de">den Eltern</span> already has n; still <span class="de">den</span>. Genitive <span class="de">des Problems</span> needs -s on the noun. Hören negation with <span class="de">kein</span> vs <span class="de">nicht der</span> is not the same: kein = none at all. Schreiben: skipping articles in a Bewerbung (<span class="de">Ich habe Erfahrung in Verkauf</span>) looks A2; write <span class="de">im Verkauf / in dem Verkauf</span>. Sprechen: if you cannot remember gender, use a plural (<span class="de">die Unterlagen</span>) rather than guessing das. Contractions hide gender: <span class="de">im = in dem, zur = zu der, am = an dem</span> — unpack them in Sprachbausteine before you choose.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>List 12 exam nouns with der/die/das and put each into a sentence.</li>
        <li>Decline der Kurs and die Wohnung through all four cases.</li>
        <li>Write two genitive phrases: the price of the course / the problems of the city.</li>
        <li>Use dieser and mein in nominative and dative.</li>
        <li>Correct a paragraph that is missing articles.</li>
        <li>Write four Amt sentences using des/der/den + noun (genitive or dative plural).</li>
        <li>Turn “I have no time / no form / no neighbours” into kein-sentences with mixed genders.</li>
        <li>In speaking, describe your street using der/die/das for building, shop, and office.</li>
      </ol>
    `,
  },
  {
    id: "akkusativ",
    level: "a2",
    title: "Accusative — the direct object",
    minutes: 48,
    html: `
      <p>B1 letters still die on masculine accusative: <span class="de">Ich suche eine neuen Job</span> is two mistakes in four words. Sprachbausteine tests <span class="de">für den / durch die / ohne einen</span>. Oral exam: what you want, what you saw, what you will take.</p>
      <p>Ask <span class="de">wen?</span> / <span class="de">was?</span> Only masculine articles change from nominative: der → <strong>den</strong>, ein → <strong>einen</strong>. After <span class="de">sein, werden, bleiben</span> you usually stay nominative (the “same thing” as the subject).</p>
      <h3>How it works, step by step</h3>
      <ol>
        <li>Find the verb. Ask <span class="de">wen?</span> (person) or <span class="de">was?</span> (thing). That noun phrase is accusative — unless the verb is a known dative verb (helfen, danken, gefallen).</li>
        <li>Check for an always-Akk preposition: <span class="de">durch, für, gegen, ohne, um</span>. The whole phrase after it is accusative, even if English says “through the / for the”.</li>
        <li>Check Wechselpräpositionen. If the meaning is <span class="de">wohin?</span> (motion onto/into a place), take accusative: <span class="de">Ich hänge das Bild an die Wand.</span></li>
        <li>Only masculine singular articles change their shape: <span class="de">der → den, ein → einen, mein → meinen</span>. Feminine, neuter, and plural look like nominative.</li>
        <li>Replace the noun with a pronoun only after you know gender: Job → <span class="de">ihn</span>, Stelle → <span class="de">sie</span>, Formular → <span class="de">es</span>.</li>
      </ol>
      <h3>English vs German</h3>
      <p>English “I look for a new job” hides case. German must show masculine accusative on both article and adjective: <span class="de">Ich suche einen neuen Job</span>. English “This is a problem” and “I need a problem” look the same; German splits them: after <span class="de">sein</span> stay nominative (<span class="de">Das ist ein Problem</span>), after brauchen take accusative (<span class="de">Ich brauche einen Termin</span>). English “every day” has no case; German time-how-often is accusative: <span class="de">jeden Tag, nächsten Monat</span>.</p>
      <h3>Core table</h3>
      <table>
        <tr><th></th><th>M</th><th>F</th><th>N</th><th>Pl</th></tr>
        <tr><td>der-words Akk</td><td><span class="de">den</span></td><td>die</td><td>das</td><td>die</td></tr>
        <tr><td>ein-words Akk</td><td><span class="de">einen</span></td><td>eine</td><td>ein</td><td>keine / meine</td></tr>
        <tr><td>Pronouns</td><td><span class="de">mich / dich / ihn</span></td><td><span class="de">sie</span></td><td><span class="de">es</span></td><td><span class="de">uns / euch / sie / Sie</span></td></tr>
      </table>
      <p>Always accusative: <span class="de">durch, für, gegen, ohne, um</span> (plus <span class="de">bis, entlang</span> in many uses). Wechselpräpositionen take Akk for motion into a place: <span class="de">Ich gehe in die Stadt. Ich hänge das Bild an die Wand.</span></p>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Ich sehe den Mann. Ich kaufe einen Tisch. Ich habe keine Zeit.</span></li>
        <li><span class="de">Ich suche einen neuen Job. Ich habe schon mehrere Bewerbungen geschickt.</span></li>
        <li><span class="de">Das Geschenk ist für den Hausmeister, nicht für die Nachbarin.</span></li>
        <li><span class="de">Wir gehen durch den Park und um den See.</span></li>
        <li><span class="de">Ohne einen Ausweis kommst du nicht ins Amt.</span></li>
        <li><span class="de">Ich lege das Formular auf den Schreibtisch.</span></li>
        <li><span class="de">Hast du meinen Brief bekommen? Ich habe ihn gestern abgeschickt.</span></li>
        <li><span class="de">Die Firma sucht eine Kollegin, die gut Deutsch spricht.</span></li>
        <li><span class="de">Ich treffe ihn um 8 vor dem Bahnhof.</span></li>
        <li><span class="de">Gegen den Lärm können wir leider wenig machen.</span></li>
        <li><span class="de">Nimmst du den Zug oder den Bus? Ich nehme den früheren Zug.</span></li>
        <li><span class="de">Bitte schicken Sie uns die Unterlagen bis Freitag.</span></li>
        <li><span class="de">Ich brauche einen neuen Ausweis, eine Meldebescheinigung und das Passfoto.</span></li>
        <li><span class="de">Haben Sie meinen Anruf gehört? Ich habe ihn zweimal versucht.</span></li>
        <li><span class="de">Wir nehmen den späteren Bus. Den früheren haben wir verpasst.</span></li>
        <li><span class="de">Ohne Ihre Unterschrift können wir den Vertrag nicht schicken.</span></li>
        <li><span class="de">Jeden Morgen kaufe ich eine Zeitung und lese sie im Zug.</span></li>
      </ul>
      <h3>Worked examples</h3>
      <ul>
        <li><span class="de">Ich suche einen neuen Job in der Nähe.</span> — I am looking for a new job nearby. — <span class="de">suchen</span> + what? → Akk; Job is masculine, so einen neuen.</li>
        <li><span class="de">Das Geschenk ist für den Hausmeister.</span> — The present is for the caretaker. — <span class="de">für</span> always Akk; Hausmeister masculine → den.</li>
        <li><span class="de">Es gibt einen Fehler auf der Rechnung.</span> — There is a mistake on the bill. — <span class="de">es gibt</span> takes Akk, never nominative.</li>
        <li><span class="de">Nächsten Montag schicke ich den Vertrag.</span> — Next Monday I will send the contract. — time expression Akk (nächsten Montag) + object Akk (den Vertrag).</li>
      </ul>
      <h3>Right vs wrong</h3>
      <table>
        <tr><th>Wrong</th><th>Right</th><th>Why</th></tr>
        <tr><td><span class="de">Ich suche eine neuen Job.</span></td><td><span class="de">Ich suche einen neuen Job.</span></td><td>Gender + case: Job is masculine Akk.</td></tr>
        <tr><td><span class="de">Das ist einen Fehler.</span></td><td><span class="de">Das ist ein Fehler. / Es gibt einen Fehler.</span></td><td>sein → Nom; es gibt → Akk.</td></tr>
        <tr><td><span class="de">Ich helfe den Mann.</span></td><td><span class="de">Ich helfe dem Mann. / Ich sehe den Mann.</span></td><td>helfen is dative; sehen is accusative.</td></tr>
        <tr><td><span class="de">Ich gehe in der Stadt (meaning: I go into town).</span></td><td><span class="de">Ich gehe in die Stadt.</span></td><td>wohin? = Akk after Wechselpräposition.</td></tr>
      </table>
      <h3>Mini letter — Bewerbung</h3>
      <p><span class="de">Sehr geehrte Frau Lang, ich suche eine Teilzeitstelle in Ihrem Haus. Ich schicke Ihnen meinen Lebenslauf und ein kurzes Anschreiben. Könnten Sie mir den Termin für ein Gespräch nennen?</span></p>
      <p>Gloss: I am looking for a part-time post in your company. I am sending you my CV and a short cover letter. Could you give me the appointment for an interview? — <span class="de">eine Stelle</span> (f Akk), <span class="de">meinen Lebenslauf</span> (m Akk), <span class="de">den Termin</span> (m Akk).</p>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">Ich suche einen … Ich habe keine Zeit. für den / für die · durch den Park · ohne Ausweis · um 8 Uhr · auf den Tisch · Ich habe ihn / sie / es gesehen. Bitte schicken Sie uns …</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        After sein stay nominative: <span class="de">Das ist ein Problem</span>, not einen. <span class="de">es gibt</span> takes accusative: <span class="de">Es gibt einen Fehler</span>. Time: <span class="de">jeden Tag, nächsten Monat, letzten Freitag</span> are accusative time expressions — no preposition. Hören: <span class="de">für den Sohn / für die Tochter</span> changes the person. Do not “double accusative” with dative verbs: helfen takes dative. Sprachbausteine: <span class="de">ohne</span> + Akk even when English wants “without a”: <span class="de">ohne einen Ausweis</span>. Schreiben: <span class="de">Ich möchte Sie um einen Termin bitten</span> — um + Akk. Sprechen: if you say <span class="de">ich nehme der Zug</span>, the partner hears the wrong case immediately; drill <span class="de">den Zug / den Bus / den früheren Termin</span>.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Write five “I am looking for …” sentences with mixed genders.</li>
        <li>Use all five always-Akk prepositions once.</li>
        <li>Replace three nouns with ihn/sie/es/uns.</li>
        <li>Contrast: Das ist ein Termin. vs Ich brauche einen Termin.</li>
        <li>Describe putting two objects onto surfaces (Wechsel + Akk).</li>
        <li>Write a Bewerbung line with einen Lebenslauf, eine Stelle, das Anschreiben.</li>
        <li>Build three time-Akk sentences (jeden Tag / nächsten Monat / letzten Freitag).</li>
        <li>Correct: Ich suche eine neuen Job. / Das ist einen Fehler. / Ich gehe in der Stadt (wohin).</li>
      </ol>
    `,
  },
  {
    id: "dativ",
    level: "a2",
    title: "Dative — to/for whom, location",
    minutes: 54,
    html: `
      <p>B1 Sprachbausteine loves dative after <span class="de">mit, zu, bei, seit, aus, von</span> and after verbs like <span class="de">helfen, gefallen, gehören</span>. Letters need <span class="de">Könnten Sie mir …? Es wäre mir wichtig …</span>. If dative is weak, prepositions and adjective endings collapse with it.</p>
      <p>Ask <span class="de">wem?</span> Indirect object: person who receives. Thing given = accusative. Location after Wechselpräpositionen = dative (<span class="de">wo?</span>).</p>
      <h3>How it works, step by step</h3>
      <ol>
        <li>Ask <span class="de">wem?</span> If the answer is a person who receives, benefits, or is affected, that phrase is dative.</li>
        <li>If there are two objects, the person is usually dative and the thing accusative: <span class="de">Ich gebe der Frau das Buch.</span></li>
        <li>Scan for always-dative prepositions: <span class="de">aus, bei, mit, nach, seit, von, zu</span>. No thinking about motion — the case is fixed.</li>
        <li>For Wechselpräpositionen ask <span class="de">wo?</span> (location, no change of place) → dative: <span class="de">Das Formular liegt auf dem Tisch.</span></li>
        <li>Check the verb list. If it is helfen/danken/gefallen/gehören/… the person is dative even when English uses a direct object.</li>
        <li>Plural dative: article <span class="de">den</span> and add <span class="de">-n</span> to the noun if it does not already end in n: <span class="de">mit den Kindern, bei den Nachbarn</span>.</li>
      </ol>
      <h3>English vs German</h3>
      <p>English “help me / thank her / I like the offer” treats the person as a normal object. German does not: <span class="de">hilf mir, ich danke ihr, das Angebot gefällt mir</span>. English “I am cold” uses “I”; German feeling-of-temperature uses dative: <span class="de">Mir ist kalt</span> (not <em>ich bin kalt</em>, which means you are an unfriendly person). English “to the doctor” is a to-phrase; German uses <span class="de">zum Arzt</span> (zu + dem). English “for a year” of a situation that still continues is <span class="de">seit einem Jahr</span> + present, not Perfekt.</p>
      <h3>Articles and pronouns</h3>
      <table>
        <tr><th></th><th>M</th><th>F</th><th>N</th><th>Pl</th></tr>
        <tr><td>the</td><td><span class="de">dem</span></td><td><span class="de">der</span></td><td><span class="de">dem</span></td><td><span class="de">den</span> +n</td></tr>
        <tr><td>a / my</td><td><span class="de">einem / meinem</span></td><td><span class="de">einer / meiner</span></td><td><span class="de">einem / meinem</span></td><td>— / <span class="de">meinen</span></td></tr>
      </table>
      <p>Pronouns: <span class="de">mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen</span>. Always dative prepositions: <span class="de">aus, bei, mit, nach, seit, von, zu</span>. Dative verbs: <span class="de">helfen, danken, gehören, gefallen, antworten, gratulieren, schmecken, wehtun, folgen, passieren, vertrauen, zuhören</span>.</p>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Ich gebe der Frau das Buch. Ich gebe es ihr.</span></li>
        <li><span class="de">Könnten Sie mir bitte den Termin bestätigen?</span></li>
        <li><span class="de">Das Angebot gefällt mir nicht. Der Preis kommt mir zu hoch vor.</span></li>
        <li><span class="de">Wem gehört der Keller? — Er gehört den Nachbarn.</span></li>
        <li><span class="de">Ich fahre mit dem Zug zu meinen Eltern.</span></li>
        <li><span class="de">Seit einem Jahr arbeite ich bei einer Klinik in der Stadt.</span></li>
        <li><span class="de">Das Kind sitzt auf dem Sofa und sieht dem Vater zu.</span></li>
        <li><span class="de">Es tut mir leid. Das ist mir peinlich.</span></li>
        <li><span class="de">Ich habe den Kollegen für die Hilfe gedankt.</span></li>
        <li><span class="de">Der Lärm schadet den Kindern. Wir müssen mit dem Hausmeister sprechen.</span></li>
        <li><span class="de">Antworten Sie uns bitte so schnell wie möglich.</span></li>
        <li><span class="de">Mir ist kalt. Ziehst du mir die Tür zu?</span></li>
        <li><span class="de">Ich habe einer Kollegin die Adresse des Amts gegeben.</span></li>
        <li><span class="de">Das gehört nicht uns. Es gehört den Vermietern.</span></li>
        <li><span class="de">Bei meinen Schwiegereltern ist es oft laut. Trotzdem gefällt es den Kindern.</span></li>
        <li><span class="de">Aus dem Fenster sieht man den Hof. Vom Balkon sieht man die Straße.</span></li>
        <li><span class="de">Antworten Sie der Kundin bitte noch heute. Es ist ihr wichtig.</span></li>
      </ul>
      <h3>Worked examples</h3>
      <ul>
        <li><span class="de">Könnten Sie mir bitte den Termin bestätigen?</span> — Could you confirm the appointment for me? — <span class="de">mir</span> = dative person; <span class="de">den Termin</span> = accusative thing.</li>
        <li><span class="de">Das Angebot gefällt mir nicht.</span> — I do not like the offer. — Subject is das Angebot; the person is dative. Never <em>ich gefalle das Angebot</em>.</li>
        <li><span class="de">Seit einem Jahr arbeite ich bei einer Klinik.</span> — I have been working at a clinic for a year. — <span class="de">seit</span> + dative + present tense.</li>
        <li><span class="de">Der Lärm schadet den Kindern.</span> — The noise harms the children. — <span class="de">schaden</span> takes dative; plural needs den + n.</li>
      </ul>
      <h3>Right vs wrong</h3>
      <table>
        <tr><th>Wrong</th><th>Right</th><th>Why</th></tr>
        <tr><td><span class="de">Ich helfe den Mann.</span></td><td><span class="de">Ich helfe dem Mann.</span></td><td>helfen + Dat.</td></tr>
        <tr><td><span class="de">Das gefällt mich nicht.</span></td><td><span class="de">Das gefällt mir nicht.</span></td><td>gefallen + Dat of the person.</td></tr>
        <tr><td><span class="de">mit die Kinder</span></td><td><span class="de">mit den Kindern</span></td><td>mit + Dat; plural den + n.</td></tr>
        <tr><td><span class="de">Ich bin kalt. (feeling)</span></td><td><span class="de">Mir ist kalt.</span></td><td>Temperature/feeling idiom is dative.</td></tr>
        <tr><td><span class="de">Ich habe seit einem Jahr gearbeitet. (still true now)</span></td><td><span class="de">Ich arbeite seit einem Jahr hier.</span></td><td>seit + present for a situation that continues.</td></tr>
      </table>
      <h3>Mini dialogue — complaint to the Hausmeister</h3>
      <p><span class="de">Mieterin: Guten Tag, könnten Sie uns bitte helfen? Der Lärm vom Hof stört den Kindern den Schlaf. — Hausmeister: Das tut mir leid. Ich spreche mit den Nachbarn. Gehört der Keller noch Ihnen? — Mieterin: Ja. Es wäre uns wichtig, dass die Tür wieder schließt.</span></p>
      <p>Gloss: Could you help us? The yard noise disturbs the children’s sleep. I’m sorry. I’ll speak with the neighbours. Does the cellar still belong to you? Yes. It would be important to us that the door closes again. — <span class="de">uns / den Kindern / mit den Nachbarn / Ihnen / uns wichtig</span> are all dative.</p>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">Könnten Sie mir …? Das gefällt mir. Es gehört mir. mit dem / mit der · zum / zur · bei einer Firma · seit einem Jahr · auf dem Tisch / in der Stadt · Es tut mir leid. Das ist mir wichtig.</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        <span class="de">gefallen</span>: thing = subject, person = dative. <span class="de">helfen</span> never takes accusative of the person. Feminine dative article is <span class="de">der</span>. Plural dative without -n on the noun is a classic gap-fill fail: <span class="de">mit den Kindern</span>. <span class="de">seit</span> + present, not Perfekt, for continuing situations. Hören: <span class="de">für mich</span> vs <span class="de">mit mir</span>. Idioms: <span class="de">mir ist kalt / schlecht / langweilig</span> — not ich bin kalt for temperature feeling. Sprachbausteine: <span class="de">zu der → zur, zu dem → zum, bei dem → beim, von dem → vom</span> — the gap may already be the contraction. Schreiben: <span class="de">Es wäre mir wichtig</span> and <span class="de">Könnten Sie mir …</span> are register gold. Sprechen: mix mir/mich and the examiner hears A2.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Write a polite request with Könnten Sie mir …</li>
        <li>Use three dative verbs (helfen, gefallen, gehören).</li>
        <li>Describe location of four objects (Wechsel + Dat).</li>
        <li>Put den Kindern / meinen Eltern / einer Freundin into full sentences.</li>
        <li>Contrast mir vs mich in two pairs (helfen vs sehen; gefallen vs mögen).</li>
        <li>Write an Amt line: Ich arbeite seit … bei … und fahre mit … zu …</li>
        <li>Build five contractions: zum, zur, beim, vom, im — each in a full sentence.</li>
        <li>Rewrite “I like the flat / the price / the neighbours” with gefallen + dative.</li>
      </ol>
    `,
  },
  {
    id: "perfekt",
    level: "a2",
    title: "Perfekt — the spoken past",
    minutes: 54,
    html: `
      <p>B1 Sprechen and informal Schreiben still run on Perfekt. Formal letters add Präteritum of <span class="de">sein, haben, werden</span> and modals, plus a little narrative Perfekt. Sprachbausteine tests sein vs haben and Partizip forms (separable, no ge-, strong verbs). If you write <span class="de">ich habe gegangen</span>, the rest of the letter is discounted in the marker’s head.</p>
      <p>haben/sein in position 2 + Partizip at the end. In subordinate clauses: Partizip then auxiliary last.</p>
      <h3>How it works, step by step</h3>
      <ol>
        <li>Choose the auxiliary: motion A→B, change of state, bleiben/sein/werden/passieren → <span class="de">sein</span>. Almost everything with an object → <span class="de">haben</span>.</li>
        <li>Build the Partizip: regular ge- + stem + t; strong ge- + (often changed stem) + en; no ge- on be-/ge-/er-/ver-/zer-/ent-/emp- and -ieren; separable = prefix + ge + rest.</li>
        <li>Put conjugated haben/sein in position 2. Park the Partizip at the very end, after time, objects, and nicht.</li>
        <li>In <span class="de">weil / dass / wenn</span> clauses both pieces go to the end, auxiliary last: <span class="de">…, weil ich mich angemeldet habe</span>.</li>
        <li>For sein/haben/werden and modals in a formal letter, prefer Präteritum: <span class="de">ich war krank, ich hatte keine Zeit, ich musste warten</span>.</li>
      </ol>
      <h3>English vs German</h3>
      <p>English “I went / I have gone” are two tenses. German everyday speech uses Perfekt for both: <span class="de">Ich bin gegangen</span>. English “I have been working here for a year” is present perfect; German continuing situations use present + <span class="de">seit</span>, not Perfekt. English “I drove the car” and “I drove to Berlin” look the same; German splits haben (object) vs sein (destination). English puts the past participle next to have; German waits until the end of the clause.</p>
      <h3>sein vs haben</h3>
      <table>
        <tr><th>sein</th><th>haben</th></tr>
        <tr><td>motion A→B, change of state, bleiben, sein, werden, passieren</td><td>almost everything else, especially with an object</td></tr>
        <tr><td><span class="de">Ich bin nach Berlin gefahren.</span></td><td><span class="de">Ich habe das Auto gefahren.</span></td></tr>
        <tr><td><span class="de">Ich bin eingeschlafen. Ich bin zu Hause geblieben.</span></td><td><span class="de">Ich habe bis 23 Uhr gearbeitet.</span></td></tr>
      </table>
      <p>Regular: ge- + stem + t (<span class="de">gemacht</span>). Strong: ge- + -en (<span class="de">gesehen, genommen, getroffen</span>). No ge- on be-/ge-/er-/ver-/zer-/ent-/emp- and -ieren. Separable: <span class="de">aufgestanden, beantragt</span> wait — <span class="de">beantragen</span> is inseparable be- so <span class="de">beantragt</span>.</p>
      <p>Präteritum you actually need: <span class="de">ich war, hatte, wurde, gab, musste, konnte, wollte, sollte, durfte</span>. Stories in speech: Perfekt. Reports/fairy-tale tone: more Präteritum (B2).</p>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Letzte Woche bin ich umgezogen. Ich habe viel gepackt.</span></li>
        <li><span class="de">Ich habe mich für den Kurs angemeldet, weil ich die Prüfung machen möchte.</span></li>
        <li><span class="de">Wir sind pünktlich angekommen, aber der Arzt hatte Verspätung.</span></li>
        <li><span class="de">Hast du die E-Mail gelesen, die ich dir geschickt habe?</span></li>
        <li><span class="de">Es ist viel passiert. Deshalb habe ich nicht früher geschrieben.</span></li>
        <li><span class="de">Ich bin krank gewesen und habe drei Tage im Bett gelegen.</span></li>
        <li><span class="de">Sie hat den Termin verschoben. Wir haben uns dann online getroffen.</span></li>
        <li><span class="de">Ich habe das Passwort vergessen und musste anrufen.</span></li>
        <li><span class="de">Als Kind bin ich oft mit dem Rad zur Schule gefahren.</span></li>
        <li><span class="de">Wir haben uns gut unterhalten. Danach bin ich direkt nach Hause gegangen.</span></li>
        <li><span class="de">Ich habe schon zweimal nachgefragt, aber niemand hat geantwortet.</span></li>
        <li><span class="de">Gestern wurde die Straße gesperrt. Ich bin einen Umweg gefahren.</span></li>
        <li><span class="de">Ich habe den Antrag ausgefüllt und ihn gestern abgeschickt.</span></li>
        <li><span class="de">Wir sind umgezogen, weil uns die alte Wohnung zu teuer geworden ist.</span></li>
        <li><span class="de">Hast du den Hausmeister gesehen? — Ja, ich habe ihn im Hof getroffen.</span></li>
        <li><span class="de">Ich bin eingeschlafen und habe den Wecker nicht gehört.</span></li>
        <li><span class="de">Sie hat uns empfohlen, den Kurs zu wechseln. Wir haben darüber gesprochen.</span></li>
      </ul>
      <h3>Worked examples</h3>
      <ul>
        <li><span class="de">Letzte Woche bin ich umgezogen, weil ich eine ruhigere Wohnung gefunden habe.</span> — Last week I moved because I found a quieter flat. — umziehen = motion/change → sein; finden + object → haben; auxiliary last in weil.</li>
        <li><span class="de">Ich habe das Auto gefahren, aber nach Köln bin ich mit dem Zug gefahren.</span> — I drove the car, but to Cologne I went by train. — object = haben; destination = sein.</li>
        <li><span class="de">Ich habe mich für den Kurs angemeldet.</span> — I registered for the course. — separable reflexive: prefix + ge + rest, sich stays.</li>
        <li><span class="de">Ich musste drei Stunden warten. Deshalb habe ich nicht früher geschrieben.</span> — I had to wait three hours. That is why I did not write earlier. — modal past = Präteritum; the other verb stays infinitive.</li>
      </ul>
      <h3>Right vs wrong</h3>
      <table>
        <tr><th>Wrong</th><th>Right</th><th>Why</th></tr>
        <tr><td><span class="de">Ich habe nach Berlin gegangen.</span></td><td><span class="de">Ich bin nach Berlin gegangen.</span></td><td>Motion A→B takes sein.</td></tr>
        <tr><td><span class="de">Ich bin das Auto gefahren.</span></td><td><span class="de">Ich habe das Auto gefahren.</span></td><td>Object switches fahren to haben.</td></tr>
        <tr><td><span class="de">…, weil ich habe gearbeitet.</span></td><td><span class="de">…, weil ich gearbeitet habe.</span></td><td>In subordinates the auxiliary is last.</td></tr>
        <tr><td><span class="de">Ich habe besucht gehabt den Arzt. / ich habe gebesucht</span></td><td><span class="de">Ich habe den Arzt besucht.</span></td><td>be- verbs take no ge-.</td></tr>
        <tr><td><span class="de">Ich habe aufgestanden um 6.</span></td><td><span class="de">Ich bin um 6 aufgestanden.</span></td><td>aufstehen is motion/change → sein; prefix + ge.</td></tr>
      </table>
      <h3>Mini letter — complaint after a missed appointment</h3>
      <p><span class="de">Sehr geehrte Damen und Herren, letzten Dienstag bin ich pünktlich zu Ihrem Amt gekommen. Ich habe eine Nummer gezogen und zwei Stunden gewartet. Niemand hat mich aufgerufen. Deshalb habe ich den Termin verloren. Ich bitte Sie, mir einen neuen Termin zu schicken.</span></p>
      <p>Gloss: Last Tuesday I arrived on time. I took a number and waited two hours. Nobody called me. That is why I lost the appointment. Please send me a new one. — Mix of sein (gekommen) and haben (gezogen, gewartet, aufgerufen, verloren).</p>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">Ich bin … gegangen / gefahren / gekommen / geblieben / umgezogen. Ich habe … gemacht / geschrieben / vergessen / beantragt / mich angemeldet. Es ist passiert. …, weil ich … habe / bin. Ich musste … Ich hatte keine Zeit.</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        Motion without object = sein. Object = haben, even with fahren. <span class="de">liegen / sitzen / stehen</span> usually haben in the north and in exams: <span class="de">ich habe gelegen</span> (southern sein exists — prefer haben in telc). In weil-clauses do not write <em>weil ich habe gearbeitet</em>. Double infinitive with modals: <span class="de">ich habe kommen müssen</span> — recognise; in speaking prefer <span class="de">ich musste kommen</span>. Hören: the Partizip at the end carries the news. Sprachbausteine: inseparable vs separable Partizip (<span class="de">beantragt</span> not gebeantragt; <span class="de">angemeldet</span> not gemeldet an). Schreiben: a formal letter that is only present tense looks unfinished — add two Perfekt facts. Sprechen: do not switch to English word order (<em>ich habe gesehen den Film</em>).
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Narrate last week in eight sentences mixing sein and haben.</li>
        <li>Put two Perfekt sentences inside weil and dass (auxiliary last).</li>
        <li>Write a formal line: I have already applied / registered / sent the documents.</li>
        <li>Contrast fahren with and without an object.</li>
        <li>Retell the same story once in Perfekt and the sein/haben/modals in Präteritum.</li>
        <li>Write a 60-word Amt complaint with gekommen, gewartet, verloren, geschrieben.</li>
        <li>Form Partizip of: anrufen, beantragen, vergessen, umziehen, sich anmelden.</li>
        <li>Put one Perfekt sentence inside obwohl and one inside nachdem.</li>
      </ol>
    `,
  },
  {
    id: "wordorder",
    level: "b1",
    title: "Word order: verb second",
    minutes: 52,
    html: `
      <p>Every telc B1 paper punishes broken verb second. Sprachbausteine after <span class="de">deshalb, trotzdem, nicht nur</span> is almost always a word-order gap. Schreiben that stacks ich-sentences is safe but scores mid; fronting time or objects looks B1 if the verb stays second.</p>
      <p>In a statement the conjugated verb is in <strong>position 2</strong>. Position 1 is one unit. Yes/no: verb first. W-question: W-word then verb. Subordinate: verb last. Two-verb clusters: conjugated verb in its slot, infinitive/Partizip at the end.</p>
      <h3>How it works, step by step</h3>
      <ol>
        <li>Decide the clause type: statement, yes/no, W-question, adverb-connector main clause, or subordinate.</li>
        <li>In a statement, put exactly one unit in position 1 (a word, a time phrase, an object, or a whole subordinate clause). The conjugated verb follows immediately.</li>
        <li>If position 1 is not the subject, the subject sits right after the verb: <span class="de">Heute fahre ich …</span></li>
        <li>Park extra verbs (infinitive, Partizip, separable prefix) at the end of that clause.</li>
        <li>Inside the middle of the clause, keep time before manner before place. A practical B1 order is time – how – where. Some teachers say TeKaMoLo (temporal, kausal, modal, lokal). Use it only as a checklist, not as a religion: <span class="de">Ich fahre morgen wegen der Prüfung mit dem Zug nach Mainz.</span></li>
        <li>After a leading subordinate clause, the main-clause verb comes first (inversion): <span class="de">Wenn es regnet, bleibe ich zu Hause.</span></li>
      </ol>
      <h3>English vs German</h3>
      <p>English can stack two extras before the verb: “Yesterday in Cologne I met …”. German cannot: only one unit before the verb. English keeps S–V after “therefore”; German puts <span class="de">deshalb</span> in slot 1 and inverts: <span class="de">Deshalb treffe ich …</span>. English “because I am late I take a taxi” can keep I-take; German must invert the main clause if the weil/wenn-clause comes first. English questions often keep “do”; German moves the real verb.</p>
      <h3>Map</h3>
      <table>
        <tr><th>Clause type</th><th>Conjugated verb</th><th>Example</th></tr>
        <tr><td>Statement</td><td>slot 2</td><td><span class="de">Heute fahre ich nach Köln.</span></td></tr>
        <tr><td>Yes/no</td><td>slot 1</td><td><span class="de">Fährst du nach Köln?</span></td></tr>
        <tr><td>W-question</td><td>slot 2 (after W-word)</td><td><span class="de">Wann fährst du?</span></td></tr>
        <tr><td>Adverb connector</td><td>still slot 2 (connector is slot 1)</td><td><span class="de">Deshalb fahre ich später.</span></td></tr>
        <tr><td>Subordinate</td><td>last</td><td><span class="de">…, weil ich später fahre.</span></td></tr>
        <tr><td>Main clause after subordinate</td><td>often verb first (inversion)</td><td><span class="de">Wenn es regnet, bleibe ich zu Hause.</span></td></tr>
      </table>
      <p>Time–manner–place: <span class="de">Ich fahre morgen mit dem Zug nach Hamburg.</span> Negation <span class="de">nicht</span> sits before the element it kills, or before the end-verb cluster. Objects can occupy position 1: <span class="de">Den Antrag habe ich schon abgeschickt.</span></p>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Um 8 Uhr beginnt der Kurs. Pünktlichkeit ist wichtig.</span></li>
        <li><span class="de">Leider kann ich am Freitag nicht kommen.</span></li>
        <li><span class="de">Den Brief habe ich gestern geschrieben, aber noch nicht abgeschickt.</span></li>
        <li><span class="de">Wenn ich Feierabend habe, gehe ich noch einkaufen.</span></li>
        <li><span class="de">Obwohl der Zug Verspätung hatte, bin ich pünktlich angekommen.</span></li>
        <li><span class="de">Nicht nur die Miete steigt, sondern auch die Nebenkosten.</span></li>
        <li><span class="de">Entweder treffen wir uns am Bahnhof, oder ich hole dich ab.</span></li>
        <li><span class="de">Je früher wir losfahren, desto entspannter kommen wir an.</span></li>
        <li><span class="de">Ich habe versucht, den Hausmeister zu erreichen.</span></li>
        <li><span class="de">Gestern Abend habe ich noch lange an dem Text gearbeitet.</span></li>
        <li><span class="de">Im Moment suche ich eine Wohnung, die nicht so weit vom Büro liegt.</span></li>
        <li><span class="de">Sollte der Termin nicht passen, schlagen Sie bitte eine Alternative vor.</span></li>
        <li><span class="de">Am Montag bringe ich die Unterlagen ins Amt. Danach fahre ich zur Arbeit.</span></li>
        <li><span class="de">Trotzdem versuche ich, pünktlich zu sein.</span></li>
        <li><span class="de">Den Hausmeister habe ich zweimal angerufen. Er hat nicht zurückgerufen.</span></li>
        <li><span class="de">Weil der Bus ausgefallen ist, bin ich gelaufen.</span></li>
        <li><span class="de">Erst nach der Pause verstehen wir die Aufgabe wirklich.</span></li>
      </ul>
      <h3>Worked examples</h3>
      <ul>
        <li><span class="de">Den Antrag habe ich schon abgeschickt.</span> — I have already sent the application. — Object in slot 1; habe stays second; Partizip last. Why front the object? To stress what is done.</li>
        <li><span class="de">Deshalb kann ich am Freitag nicht kommen.</span> — That is why I cannot come on Friday. — deshalb = slot 1; modal kann = slot 2; infinitive last.</li>
        <li><span class="de">Wenn ich Feierabend habe, gehe ich noch einkaufen.</span> — When I finish work, I still go shopping. — Leading subordinate → main verb gehe immediately after the comma.</li>
        <li><span class="de">Ich fahre morgen mit dem Zug nach Hamburg.</span> — I am going to Hamburg by train tomorrow. — time (morgen), manner (mit dem Zug), place (nach Hamburg).</li>
      </ul>
      <h3>Right vs wrong</h3>
      <table>
        <tr><th>Wrong</th><th>Right</th><th>Why</th></tr>
        <tr><td><span class="de">Heute ich fahre nach Köln.</span></td><td><span class="de">Heute fahre ich nach Köln.</span></td><td>Only one unit before the verb; then invert.</td></tr>
        <tr><td><span class="de">Deshalb ich bleibe zu Hause.</span></td><td><span class="de">Deshalb bleibe ich zu Hause.</span></td><td>deshalb occupies slot 1.</td></tr>
        <tr><td><span class="de">Wenn es regnet, ich bleibe zu Hause.</span></td><td><span class="de">Wenn es regnet, bleibe ich zu Hause.</span></td><td>After a leading subordinate, main verb first.</td></tr>
        <tr><td><span class="de">Ich fahre nach Hamburg morgen mit dem Zug.</span></td><td><span class="de">Ich fahre morgen mit dem Zug nach Hamburg.</span></td><td>Time before manner before place.</td></tr>
      </table>
      <h3>Mini dialogue — planning (Sprechen)</h3>
      <p><span class="de">A: Wann können wir uns treffen? — B: Am Samstagvormittag habe ich Zeit. — A: Dann treffen wir uns um 10 vor dem Amt. — B: Wenn das Amt geschlossen ist, gehen wir ins Café gegenüber. — A: Gut. Den Pass bringe ich mit.</span></p>
      <p>Gloss: When can we meet? Saturday morning I have time. Then we’ll meet at 10 in front of the office. If the office is closed, we go to the café opposite. Fine. I’ll bring the passport. — Fronted time, dann + inversion, wenn + inversion, object in slot 1.</p>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">Heute … ich … Deshalb … ich … Trotzdem … ich … Wenn …, … ich … Den Brief habe ich … Leider kann ich … nicht … Nicht nur …, sondern auch …</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        After a leading subordinate clause the main-clause verb comes immediately: <span class="de">Wenn es regnet, bleibe ich</span>, not <em>ich bleibe</em> without inversion. <span class="de">deshalb</span> is not verb-last. <span class="de">nicht nur … sondern auch</span> needs parallel structures. Hören: <span class="de">erst / schon / dann</span> in position 1 change the timeline. Do not put two free elements before the verb. In questions, do not keep statement order. Sprachbausteine: if you see Deshalb ____ ich, the gap is a verb, not a subject. Schreiben: five ich-starts in a row look A2; front one time and one object. Sprechen: TeKaMoLo is only a helper — a natural <span class="de">Ich fahre morgen mit dem Bus ins Amt</span> is enough. Do not freeze because you forgot the acronym.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Front time, an object, and deshalb in three different sentences.</li>
        <li>Write wenn-clause first, then inverted main clause.</li>
        <li>Build one nicht nur … sondern auch sentence about costs.</li>
        <li>Tell a day with TMP and two Perfekt clusters.</li>
        <li>Turn four statements into yes/no and W-questions.</li>
        <li>Write one sentence that uses time, reason, manner, and place (practical TeKaMoLo).</li>
        <li>Correct: Heute ich arbeite. / Deshalb ich rufe an. / Wenn ich Zeit habe, ich komme.</li>
        <li>In a 80-word letter, start three sentences with something other than ich.</li>
      </ol>
    `,
  },
  {
    id: "connectors",
    level: "b1",
    title: "Connectors and verb last",
    minutes: 68,
    html: `
      <p>This topic decides telc B1 Sprachbausteine and a large part of Schreiben. The gap is almost never “vocabulary”; it is “which connector fits the logic <em>and</em> the verb position”. Oral examiners listen for <span class="de">obwohl, damit, deshalb, trotzdem</span> instead of endless <span class="de">und dann</span>. Master three families, then the famous lookalikes.</p>
      <h3>How it works, step by step</h3>
      <ol>
        <li>Name the logic: reason, result, contrast, purpose, time, condition, content (“that / whether”).</li>
        <li>Pick the family: coordinating (verb stays second), adverb (connector takes slot 1, verb still second), or subordinating (verb last).</li>
        <li>Look at the verb already printed in the gap sentence. If it is last, you need a subordinating word. If it is already second after one element, you need an adverb like deshalb/trotzdem.</li>
        <li>Check lookalikes before you write: weil/denn/deshalb, obwohl/trotzdem, damit/um zu, wenn/als/wann, dass/das, ob/wenn.</li>
        <li>In Schreiben, use three different families in one letter. That alone lifts the band.</li>
      </ol>
      <h3>English vs German</h3>
      <p>English “because / so / although” do not move the verb. German does. English “that” is one spelling; German splits conjunction <span class="de">dass</span> and article/pronoun <span class="de">das</span>. English “when” covers wann/wenn/als. English “if” covers both condition (<span class="de">wenn</span>) and whether (<span class="de">ob</span>). English “so that” covers both purpose (<span class="de">damit / um zu</span>) and result (<span class="de">sodass</span>).</p>
      <h3>Family 1 — coordinating (verb does not move)</h3>
      <p><span class="de">und, oder, aber, denn, sondern</span>. New clause still has verb second. <span class="de">sondern</span> only after a negation: “but rather”.</p>
      <ul>
        <li><span class="de">Ich bleibe hier, denn ich bin krank.</span></li>
        <li><span class="de">Ich trinke keinen Kaffee, sondern Tee.</span></li>
        <li><span class="de">Wir können heute treffen oder den Termin verschieben.</span></li>
      </ul>
      <h3>Family 2 — adverbs that take position 1 (verb still second)</h3>
      <p><span class="de">deshalb, darum, deswegen, trotzdem, dennoch, dann, sonst, danach, außerdem, jedoch, infolgedessen, stattdessen</span>.</p>
      <table>
        <tr><th>Logic</th><th>Connector</th><th>Example</th></tr>
        <tr><td>result</td><td><span class="de">deshalb / darum / deswegen</span></td><td><span class="de">Die Miete steigt, deshalb suche ich eine WG.</span></td></tr>
        <tr><td>contrast despite that</td><td><span class="de">trotzdem / dennoch</span></td><td><span class="de">Es war teuer. Trotzdem habe ich das Ticket gekauft.</span></td></tr>
        <tr><td>otherwise</td><td><span class="de">sonst</span></td><td><span class="de">Beeil dich, sonst verpassen wir den Zug.</span></td></tr>
        <tr><td>addition</td><td><span class="de">außerdem</span></td><td><span class="de">Der Kurs ist nah. Außerdem ist er nicht teuer.</span></td></tr>
      </table>
      <h3>Family 3 — subordinating (verb last)</h3>
      <p><span class="de">weil, da, dass, ob, wenn, als, obwohl, damit, sodass, nachdem, bevor, seitdem, während, bis, falls, indem, sodass, sodass/so dass</span>.</p>
      <table>
        <tr><th>Word</th><th>Meaning / exam use</th><th>Verb</th></tr>
        <tr><td><span class="de">weil / da</span></td><td>because (da is a bit more written)</td><td>last</td></tr>
        <tr><td><span class="de">dass</span></td><td>that (content clause after denken, hoffen, ich finde)</td><td>last</td></tr>
        <tr><td><span class="de">ob</span></td><td>whether (yes/no content)</td><td>last</td></tr>
        <tr><td><span class="de">wenn</span></td><td>if / whenever / when (not one past event)</td><td>last</td></tr>
        <tr><td><span class="de">als</span></td><td>when = one past event; also comparative “than”</td><td>last (as “when”)</td></tr>
        <tr><td><span class="de">obwohl</span></td><td>although (contrast inside one sentence)</td><td>last</td></tr>
        <tr><td><span class="de">damit</span></td><td>so that / in order that (purpose, new subject possible)</td><td>last</td></tr>
        <tr><td><span class="de">sodass</span></td><td>so that (result, not purpose)</td><td>last</td></tr>
        <tr><td><span class="de">nachdem</span></td><td>after (often Plusquamperfekt in the nachdem-clause)</td><td>last</td></tr>
        <tr><td><span class="de">bevor / bis</span></td><td>before / until</td><td>last</td></tr>
        <tr><td><span class="de">während</span></td><td>while / whereas</td><td>last</td></tr>
        <tr><td><span class="de">falls</span></td><td>in case / if (hypothetical)</td><td>last</td></tr>
      </table>
      <h3>The money contrasts (write these on a card)</h3>
      <table>
        <tr><th>Pair</th><th>Do not mix</th></tr>
        <tr><td><span class="de">weil</span> vs <span class="de">denn</span> vs <span class="de">deshalb</span></td><td>same idea of reason/result, three positions</td></tr>
        <tr><td><span class="de">obwohl</span> vs <span class="de">trotzdem</span></td><td>obwohl verb-last; trotzdem position 1</td></tr>
        <tr><td><span class="de">damit</span> vs <span class="de">um … zu</span></td><td>damit if the subject changes; um zu if same subject</td></tr>
        <tr><td><span class="de">wenn / als / wann</span></td><td>wann = question; als = one past; wenn = if/whenever</td></tr>
        <tr><td><span class="de">dass</span> vs <span class="de">das</span></td><td>dass = conjunction; das = article/pronoun</td></tr>
        <tr><td><span class="de">ob</span> vs <span class="de">wenn</span></td><td>ob = whether; wenn = if (condition)</td></tr>
      </table>
      <p>Reason three ways:</p>
      <ul>
        <li><span class="de">Ich bleibe zu Hause, weil ich krank bin.</span></li>
        <li><span class="de">Ich bleibe zu Hause, denn ich bin krank.</span></li>
        <li><span class="de">Ich bin krank. Deshalb bleibe ich zu Hause.</span></li>
      </ul>
      <p>Contrast two ways:</p>
      <ul>
        <li><span class="de">Obwohl ich krank bin, gehe ich zur Arbeit.</span></li>
        <li><span class="de">Ich bin krank. Trotzdem gehe ich zur Arbeit.</span></li>
      </ul>
      <h3>Exam killers in slow motion</h3>
      <p><strong>weil / denn / deshalb</strong> — same reason, three machines. <span class="de">weil</span> opens a subordinate clause (verb last). <span class="de">denn</span> is coordinating (verb second, like und/aber). <span class="de">deshalb</span> is an adverb of result: it takes position 1, so the verb stays second and the subject inverts. You cannot write <em>deshalb ich …</em> and you cannot write <em>weil ich bin krank</em>.</p>
      <ul>
        <li><span class="de">Ich bleibe zu Hause, weil ich Fieber habe.</span> — I stay at home because I have a fever. Verb last after weil.</li>
        <li><span class="de">Ich bleibe zu Hause, denn ich habe Fieber.</span> — Same meaning; denn does not move the verb.</li>
        <li><span class="de">Ich habe Fieber. Deshalb bleibe ich zu Hause.</span> — Result first: deshalb + verb + subject.</li>
      </ul>
      <p><strong>obwohl / trotzdem</strong> — same contrast, two machines. <span class="de">obwohl</span> = although (verb last, one sentence). <span class="de">trotzdem</span> = even so (new main clause, slot 1). Do not write <em>obwohl …, trotzdem …</em> in the same pair unless you really mean a double contrast; the exam wants one or the other.</p>
      <p><strong>damit vs um … zu</strong> — both mean purpose (“in order to”). Use <span class="de">um … zu</span> when the subject stays the same: <span class="de">Ich lerne abends, um in Ruhe zu arbeiten.</span> Use <span class="de">damit</span> when a new subject appears: <span class="de">Ich lerne abends, damit meine Kinder mich nicht stören.</span> If you force um zu with two subjects, the sentence is wrong.</p>
      <p><strong>wenn / als / wann</strong> — <span class="de">wann</span> only in questions (direct or indirect): <span class="de">Wann beginnt der Kurs? Weißt du, wann der Kurs beginnt?</span> <span class="de">als</span> = one single event in the past: <span class="de">Als ich nach Deutschland gekommen bin, …</span> <span class="de">wenn</span> = if / whenever / when in the present or future, and repeated past: <span class="de">Wenn ich Zeit habe, … Wenn ich als Kind krank war, …</span> Never use wann for “if”.</p>
      <p><strong>dass vs das</strong> — <span class="de">dass</span> is the conjunction “that” after denken, hoffen, ich finde, es ist wichtig: <span class="de">Ich hoffe, dass Sie den Termin ändern können.</span> <span class="de">das</span> is the article or pronoun: <span class="de">das Formular, das ich geschickt habe</span>. A quick test: if you can replace it with “which/this”, it is das. If you can replace it with “that …” as a content clause, it is dass.</p>
      <p><strong>ob vs wenn</strong> — <span class="de">ob</span> = whether (yes/no content, no condition): <span class="de">Können Sie mir sagen, ob der Kurs voll ist?</span> <span class="de">wenn</span> = if (condition): <span class="de">Wenn der Kurs voll ist, setze ich mich auf die Warteliste.</span> English “if” in “I don’t know if …” is German <span class="de">ob</span>, not wenn.</p>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Ich hoffe, dass Sie den Termin noch ändern können.</span></li>
        <li><span class="de">Können Sie mir sagen, ob der Kurs schon voll ist?</span></li>
        <li><span class="de">Wenn ich mehr Zeit hätte, würde ich Sport machen.</span></li>
        <li><span class="de">Als ich nach Deutschland gekommen bin, habe ich zuerst bei Freunden gewohnt.</span></li>
        <li><span class="de">Ich lerne abends, damit meine Kinder mich nicht stören. / Ich lerne abends, um in Ruhe zu arbeiten.</span></li>
        <li><span class="de">Nachdem ich den Vertrag gelesen hatte, habe ich unterschrieben.</span></li>
        <li><span class="de">Bevor Sie absagen, rufen Sie uns bitte an.</span></li>
        <li><span class="de">Während ich arbeite, sind die Kinder in der Kita.</span></li>
        <li><span class="de">Es hat so stark geregnet, dass die Straße unter Wasser stand. / sodass die Straße …</span></li>
        <li><span class="de">Falls der Zug ausfällt, nehmen wir den Bus.</span></li>
        <li><span class="de">Ich habe angerufen, weil ich die Rechnung nicht verstehe.</span></li>
        <li><span class="de">Die Wohnung ist klein. Außerdem ist sie laut. Trotzdem nehmen wir sie, denn sie ist nah an der Arbeit.</span></li>
        <li><span class="de">Nicht die Lage ist das Problem, sondern der Preis.</span></li>
        <li><span class="de">Ich weiß nicht, ob und wann der Techniker kommt.</span></li>
        <li><span class="de">Als Kind habe ich oft im Hof gespielt. Wenn ich Zeit habe, mache ich das wieder.</span></li>
        <li><span class="de">Ich schreibe langsam, damit der Sachbearbeiter alles lesen kann.</span></li>
        <li><span class="de">Ich schreibe langsam, um keine Fehler zu machen.</span></li>
        <li><span class="de">Das Formular, das auf dem Tisch liegt, müssen Sie unterschreiben. Ich hoffe, dass Sie Zeit haben.</span></li>
      </ul>
      <h3>Worked examples</h3>
      <ul>
        <li><span class="de">Ich habe angerufen, weil ich die Rechnung nicht verstehe.</span> — I called because I do not understand the bill. — reason, verb last.</li>
        <li><span class="de">Die Wohnung ist klein. Trotzdem nehmen wir sie, denn sie ist nah an der Arbeit.</span> — The flat is small. Even so we take it, because it is close to work. — trotzdem slot 1; denn does not move the verb.</li>
        <li><span class="de">Ich schreibe früh, damit der Sachbearbeiter den Brief noch heute liest. / Ich schreibe früh, um den Brief noch heute abzuschicken.</span> — I write early so that the clerk still reads the letter today / in order to send it today. — new subject → damit; same subject → um zu.</li>
        <li><span class="de">Weißt du, ob und wann der Kurs beginnt? Wenn er voll ist, warte ich. Als ich mich letztes Jahr angemeldet habe, gab es noch Plätze.</span> — Do you know whether and when the course starts? If it is full, I wait. When I registered last year, there were still places.</li>
      </ul>
      <h3>Right vs wrong</h3>
      <table>
        <tr><th>Wrong</th><th>Right</th><th>Why</th></tr>
        <tr><td><span class="de">Ich bleibe, deshalb ich bin krank.</span></td><td><span class="de">Ich bin krank. Deshalb bleibe ich. / …, weil ich krank bin.</span></td><td>deshalb inverts; weil sends the verb last.</td></tr>
        <tr><td><span class="de">Obwohl ich krank bin, trotzdem gehe ich.</span></td><td><span class="de">Obwohl ich krank bin, gehe ich. / Ich bin krank. Trotzdem gehe ich.</span></td><td>Pick one machine, not both.</td></tr>
        <tr><td><span class="de">Ich lerne, um meine Kinder nicht stören.</span></td><td><span class="de">Ich lerne, damit meine Kinder mich nicht stören. / …, um in Ruhe zu lernen.</span></td><td>New subject needs damit; um zu needs zu + same subject.</td></tr>
        <tr><td><span class="de">Als ich Zeit habe, rufe ich an. (future)</span></td><td><span class="de">Wenn ich Zeit habe, rufe ich an.</span></td><td>als is one past event, not a future condition.</td></tr>
        <tr><td><span class="de">Ich weiß nicht, wenn der Kurs voll ist.</span></td><td><span class="de">Ich weiß nicht, ob der Kurs voll ist.</span></td><td>whether = ob.</td></tr>
        <tr><td><span class="de">Ich hoffe, das Sie Zeit haben.</span></td><td><span class="de">Ich hoffe, dass Sie Zeit haben.</span></td><td>content clause = dass.</td></tr>
      </table>
      <h3>Mini letter — housing complaint</h3>
      <p><span class="de">Sehr geehrte Frau Berg, ich schreibe, weil die Heizung seit Montag nicht funktioniert. Obwohl ich dreimal angerufen habe, ist niemand gekommen. Ich bitte Sie, einen Techniker zu schicken, damit die Wohnung wieder warm wird. Falls Sie heute keine Zeit haben, sagen Sie mir bitte, wann jemand kommen kann. Mit freundlichen Grüßen</span></p>
      <p>Gloss: I am writing because the heating has not worked since Monday. Although I called three times, nobody came. Please send a technician so that the flat is warm again. If you have no time today, tell me when someone can come.</p>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">…, weil … Ich denke, dass … Weißt du, ob …? Wenn ich Zeit habe, … Als ich … bin/war, … obwohl … damit … / um … zu … deshalb … trotzdem … nicht …, sondern … nachdem ich … hatte, … falls … bevor …</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        Sprachbausteine: if the verb in the gap-clause is already at the end, you need a subordinating word, not deshalb. If the verb is already second after one element, deshalb/trotzdem may fit. <span class="de">als</span> is wrong for future conditions. <span class="de">wann</span> does not mean “if”. <span class="de">dass</span> never takes a capital except at the start of a sentence. Hören: the logical twist (<span class="de">obwohl / trotzdem / aber</span>) often comes late. Schreiben: three different connectors in a 150-word letter look like B1; six <span class="de">und</span> look like A2. <span class="de">damit</span> vs <span class="de">weil</span>: purpose vs reason. Sprechen: examiners award <span class="de">obwohl / deshalb / damit</span> even in short turns — prepare one of each. Do not pair obwohl with trotzdem in the same breath. <span class="de">denn</span> cannot start a sentence after a full stop in careful writing the way deshalb can.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Write the same reason with weil, denn, and deshalb.</li>
        <li>Write the same contrast with obwohl and trotzdem.</li>
        <li>Open a letter with dass and ask an ob-question.</li>
        <li>Build wenn (future), als (childhood), and wann (question) — three sentences.</li>
        <li>Purpose: one damit (different subject) and one um … zu (same subject).</li>
        <li>Link four short facts with außerdem, deshalb, sonst, und sondern.</li>
        <li>Correct the six wrong lines from the Right vs wrong table without looking.</li>
        <li>Write a 90-word Amt letter that uses weil, obwohl, damit, falls, and wann.</li>
        <li>Explain in one spoken minute why you chose a course — mix weil and deshalb, no und-chains.</li>
      </ol>
    `,
  },
  {
    id: "modals",
    level: "a2",
    title: "Modal verbs",
    minutes: 50,
    html: `
      <p>B1 Hören (rules, voicemail) and Schreiben (I had to / I was not allowed to / could you) run on modals. Sprachbausteine tests <span class="de">nicht müssen</span> vs <span class="de">nicht dürfen</span> and past forms. No <span class="de">zu</span> after a modal. Conjugated modal in position 2, other verb as infinitive at the end.</p>
      <h3>How it works, step by step</h3>
      <ol>
        <li>Choose the meaning: ability (können), necessity (müssen), intention (wollen), duty/advice (sollen/sollte), permission (dürfen), liking/polite wish (mögen/möchten).</li>
        <li>Conjugate the modal in position 2. Put the other verb as a bare infinitive at the end. Never add zu.</li>
        <li>For the past in speech and most B1 letters, use Präteritum: <span class="de">musste, konnte, wollte, sollte, durfte</span>.</li>
        <li>Negate carefully: <span class="de">nicht müssen</span> = no obligation; <span class="de">nicht dürfen</span> = prohibition.</li>
        <li>To an office, replace <span class="de">ich will</span> with <span class="de">ich möchte / ich würde gerne</span>.</li>
      </ol>
      <h3>English vs German</h3>
      <p>English “must not” and “don’t have to” are easy to mix; German marks them clearly as <span class="de">nicht dürfen</span> vs <span class="de">nicht müssen</span>. English “I had to wait” is a past of must; German uses <span class="de">ich musste warten</span>, not a Perfekt of müssen in speech. English “can you” is often a request; German formal requests prefer <span class="de">Könnten Sie</span>. English “should” is usually <span class="de">sollte</span> (advice), while <span class="de">soll</span> can be an instruction from someone else: <span class="de">Sie sollen im Flur warten</span>.</p>
      <h3>Present and Präteritum</h3>
      <table>
        <tr><th></th><th>können</th><th>müssen</th><th>wollen</th><th>sollen</th><th>dürfen</th><th>mögen/möchten</th></tr>
        <tr><td>ich jetzt</td><td><span class="de">kann</span></td><td><span class="de">muss</span></td><td><span class="de">will</span></td><td><span class="de">soll</span></td><td><span class="de">darf</span></td><td><span class="de">mag / möchte</span></td></tr>
        <tr><td>ich gestern</td><td><span class="de">konnte</span></td><td><span class="de">musste</span></td><td><span class="de">wollte</span></td><td><span class="de">sollte</span></td><td><span class="de">durfte</span></td><td>(use wollte / möchte stayed polite)</td></tr>
      </table>
      <p><span class="de">nicht müssen</span> = don’t have to. <span class="de">nicht dürfen</span> = must not. <span class="de">sollte</span> often = should (advice). <span class="de">wollte</span> = intended. In speaking, past of modals: Präteritum is cleaner — <span class="de">Ich musste arbeiten.</span> Written B1 may show <span class="de">ich habe kommen müssen</span> (double infinitive).</p>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Ich kann heute nicht kommen. Darf man hier parken?</span></li>
        <li><span class="de">Sie müssen den Antrag bis Freitag abgeben. Sie müssen das nicht persönlich machen.</span></li>
        <li><span class="de">Hier darf man nicht rauchen. Kinder dürfen den Hof benutzen.</span></li>
        <li><span class="de">Du solltest den Hausmeister schriftlich informieren.</span></li>
        <li><span class="de">Ich wollte mich früher melden, aber ich konnte die Nummer nicht finden.</span></li>
        <li><span class="de">Gestern musste ich länger bleiben. Deshalb habe ich den Kurs verpasst.</span></li>
        <li><span class="de">Wir möchten uns über die Nebenkosten beschweren.</span></li>
        <li><span class="de">Soll ich den Termin absagen oder verschieben?</span></li>
        <li><span class="de">Man hat uns gesagt, wir sollen im Flur warten.</span></li>
        <li><span class="de">Ich habe den Zug nicht mehr erreichen können.</span></li>
        <li><span class="de">Falls Sie nicht kommen können, sagen Sie uns bitte Bescheid.</span></li>
        <li><span class="de">Ich mag meine Kollegen, aber ich möchte nicht jedes Wochenende arbeiten.</span></li>
        <li><span class="de">Dürfen die Kinder im Hof spielen? — Ja, aber sie dürfen nicht schreien.</span></li>
        <li><span class="de">Sie müssen nicht bar bezahlen. Sie können überweisen.</span></li>
        <li><span class="de">Ich sollte früher schreiben, aber ich wollte erst die Unterlagen suchen.</span></li>
        <li><span class="de">Könnten wir den Termin auf 16 Uhr legen? Um 15 Uhr kann ich nicht.</span></li>
        <li><span class="de">Man hat uns gesagt, wir dürften den Keller nicht als Lager benutzen.</span></li>
      </ul>
      <h3>Worked examples</h3>
      <ul>
        <li><span class="de">Sie müssen den Antrag bis Freitag abgeben. Sie müssen das nicht persönlich machen.</span> — You must hand in the form by Friday. You do not have to do it in person. — müssen vs nicht müssen.</li>
        <li><span class="de">Hier darf man nicht rauchen. Kinder dürfen den Hof benutzen.</span> — You must not smoke here. Children are allowed to use the yard. — nicht dürfen = ban; dürfen = permission.</li>
        <li><span class="de">Ich wollte mich früher melden, aber ich konnte die Nummer nicht finden.</span> — I meant to get in touch earlier, but I could not find the number. — two Präteritum modals, infinitives at the end.</li>
        <li><span class="de">Könnten Sie mir sagen, ob ich den Termin verschieben darf?</span> — Could you tell me whether I may postpone the appointment? — polite K II + dürfen for permission.</li>
      </ul>
      <h3>Right vs wrong</h3>
      <table>
        <tr><th>Wrong</th><th>Right</th><th>Why</th></tr>
        <tr><td><span class="de">Ich muss nicht hier rauchen. (meaning: smoking is banned)</span></td><td><span class="de">Ich darf hier nicht rauchen.</span></td><td>Ban = nicht dürfen.</td></tr>
        <tr><td><span class="de">Ich will einen neuen Termin. (to the Amt)</span></td><td><span class="de">Ich möchte / Ich würde gerne einen neuen Termin.</span></td><td>will is too blunt in formal writing.</td></tr>
        <tr><td><span class="de">Ich kann zu kommen nicht.</span></td><td><span class="de">Ich kann nicht kommen.</span></td><td>No zu; nicht before the end-infinitive.</td></tr>
        <tr><td><span class="de">Gestern ich habe müssen warten.</span></td><td><span class="de">Gestern musste ich warten.</span></td><td>Past of modals: Präteritum, verb second.</td></tr>
      </table>
      <h3>Mini letter — course office</h3>
      <p><span class="de">Sehr geehrte Damen und Herren, ich möchte mich vom Kurs am Donnerstag abmelden. Ich muss an dem Tag arbeiten und darf nicht früher gehen. Könnten Sie mir einen Ersatztermin nennen? Ich wollte Sie gestern anrufen, aber ich konnte Sie nicht erreichen. Mit freundlichen Grüßen</span></p>
      <p>Gloss: I would like to cancel Thursday’s class. I have to work that day and am not allowed to leave early. Could you give me a replacement date? I wanted to call yesterday but could not reach you.</p>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">Ich kann nicht … Ich musste … Hier darf man nicht … nicht müssen ≠ nicht dürfen. Du solltest … Ich wollte …, aber ich konnte nicht. Könnten Sie …? Wir möchten uns beschweren.</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        Infinitive at the end, no zu. <span class="de">soll</span> in news can mean rumour (B2 subjective modal) — at B1 in instructions it still means “you are to”. Double infinitive: both verbs at the end, conjugated haben earlier: <span class="de">ich habe das nicht machen können</span>. Hören: a polite <span class="de">Sie dürfen gerne …</span> is permission, not obligation. Do not write <em>ich will</em> to an office; use möchten/würde. Sprachbausteine: the gap after nicht is often müssen vs dürfen. Schreiben: one musste and one möchte already sound B1. Sprechen: <span class="de">Soll ich …?</span> is a useful offer (“Shall I …?”), not a rumour.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Write a complaint: we would like / we had to wait / we were not allowed to …</li>
        <li>Explain a house rule with darf man nicht and muss nicht.</li>
        <li>Give advice with solltest and a purpose clause.</li>
        <li>Apologise: I wanted to, but I could not, because I had to …</li>
        <li>Ask an office three polite questions with könnten/dürften/sollten.</li>
        <li>Write four pairs: müssen vs nicht müssen, dürfen vs nicht dürfen.</li>
        <li>Retell a rule from a voicemail using man darf / man muss / man soll.</li>
        <li>Turn three rude ich-will sentences into möchte / würde gerne / könnten Sie.</li>
      </ol>
    `,
  },
  {
    id: "separable",
    level: "b1",
    title: "Separable and inseparable verbs",
    minutes: 50,
    html: `
      <p>B1 texts are packed with prefixes. Sprachbausteine will offer both <span class="de">anrufen</span> and <span class="de">rufen</span>, or <span class="de">hat … an</span> vs a closed form. Letters need <span class="de">sich anmelden, beantragen, vorstellen, zurückrufen</span>. If the prefix is in the wrong place, the sentence is simply wrong.</p>
      <p>Separable prefixes (usually stressed): <span class="de">ab, an, auf, aus, ein, mit, vor, zu, zurück, fern, statt, weiter, los, mit</span>… They go to the <strong>end</strong> in present and Präteritum. Partizip: prefix + ge + rest. In subordinate clauses they stay attached.</p>
      <p>Inseparable (unstressed): <span class="de">be, ge, er, ver, zer, ent, emp</span>. No split, no ge- in Partizip: <span class="de">besucht, verloren, erzählt, empfohlen</span>.</p>
      <h3>How it works, step by step</h3>
      <ol>
        <li>Hear the stress: <span class="de">ANrufen</span> (separable) vs <span class="de">beKOMMen</span> (inseparable). Stress on the prefix usually means it will split.</li>
        <li>In a present or Präteritum main clause, send a separable prefix to the end: <span class="de">Ich rufe morgen an.</span></li>
        <li>In Perfekt, glue it as prefix + ge + rest: <span class="de">angerufen, aufgestanden, stattgefunden</span>.</li>
        <li>In a weil/dass/wenn clause, do not split: <span class="de">weil ich morgen anrufe</span>.</li>
        <li>With zu + infinitive, tuck zu in: <span class="de">anzurufen, sich anzumelden</span>.</li>
        <li>Inseparable verbs never split and never take ge-: <span class="de">Ich beantrage eine Karte. Ich habe eine Karte beantragt.</span></li>
      </ol>
      <h3>English vs German</h3>
      <p>English phrasal verbs also move a particle (“I call you back”), but German does it in more tenses and hides the particle at the end of a long clause — Hören waits for <span class="de">an / ab / aus</span>. English “get” covers bekommen (receive, inseparable) and ankommen (arrive, separable). English “apply” is often <span class="de">sich bewerben</span> or <span class="de">beantragen</span>, not a split verb. English does not have a be-/ver- family that blocks ge-.</p>
      <h3>Same stem, different prefix, different world</h3>
      <table>
        <tr><th>Verb</th><th>Use</th></tr>
        <tr><td><span class="de">stellen / sich vorstellen / bestellen / herstellen</span></td><td>put · introduce yourself · order · produce</td></tr>
        <tr><td><span class="de">sagen / absagen / zusagen / besagen</span></td><td>say · cancel · accept · mean (text)</td></tr>
        <tr><td><span class="de">schreiben / anschreiben / beschreiben / unterschreiben</span></td><td>write · write to / on · describe · sign (unter- often inseparable here)</td></tr>
        <tr><td><span class="de">kommen / ankommen / mitkommen / bekommen</span></td><td>come · arrive · come along · receive (be- inseparable!)</td></tr>
      </table>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Ich stehe um 6 auf. Gestern bin ich um 6 aufgestanden.</span></li>
        <li><span class="de">Ich rufe Sie morgen an, weil ich den Termin absagen muss.</span></li>
        <li><span class="de">Wir haben uns gestern im Kurs kennengelernt. Darf ich mich kurz vorstellen?</span></li>
        <li><span class="de">Ich habe die Prüfung bestanden. Ich habe mich rechtzeitig angemeldet.</span></li>
        <li><span class="de">Der Kurs findet im Rathaus statt. Er fällt nächste Woche aus.</span></li>
        <li><span class="de">Bitte füllen Sie das Formular aus und unterschreiben Sie es.</span></li>
        <li><span class="de">Ich habe meinen Ausweis verloren und sofort eine neue Karte beantragt.</span></li>
        <li><span class="de">Können Sie mich zurückrufen? Ich habe auf dem Band eine Nachricht hinterlassen.</span></li>
        <li><span class="de">Wir ziehen nächsten Monat um. Bis dahin räume ich die Wohnung auf.</span></li>
        <li><span class="de">Obwohl der Zug Verspätung hatte, sind wir noch pünktlich angekommen.</span></li>
        <li><span class="de">Ich mache das Fenster zu, denn es zieht.</span></li>
        <li><span class="de">Sie hat mir empfohlen, den Kurs zu wechseln.</span></li>
        <li><span class="de">Bitte machen Sie das Licht aus, wenn Sie gehen.</span></li>
        <li><span class="de">Ich gebe die Unterlagen ab und hole sie nächste Woche ab.</span></li>
        <li><span class="de">Der Kurs fällt aus, weil der Lehrer krank geworden ist.</span></li>
        <li><span class="de">Wir haben uns im Flur kennengelernt und dann im Café unterhalten.</span></li>
        <li><span class="de">Können Sie die Nummer wiederholen? Ich habe sie nicht mitgeschrieben.</span></li>
      </ul>
      <h3>Worked examples</h3>
      <ul>
        <li><span class="de">Ich rufe Sie morgen an, weil ich den Termin absagen muss.</span> — I will call you tomorrow because I have to cancel the appointment. — Main clause splits (rufe … an). After a modal the separable verb stays one infinitive at the end: <span class="de">absagen muss</span>.</li>
        <li><span class="de">Der Kurs findet im Rathaus statt. Nächste Woche fällt er aus.</span> — The course takes place in the town hall. Next week it is cancelled. — stattfinden / ausfallen split in the present.</li>
        <li><span class="de">Ich habe meinen Ausweis verloren und sofort eine neue Karte beantragt.</span> — I lost my ID and immediately applied for a new card. — both inseparable: no ge-.</li>
        <li><span class="de">Es fällt mir schwer, morgens aufzustehen und rechtzeitig anzurufen.</span> — I find it hard to get up in the morning and to call on time. — zu tucked in.</li>
      </ul>
      <h3>Right vs wrong</h3>
      <table>
        <tr><th>Wrong</th><th>Right</th><th>Why</th></tr>
        <tr><td><span class="de">Ich anrufe Sie morgen.</span></td><td><span class="de">Ich rufe Sie morgen an.</span></td><td>Separable prefix goes to the end in a main clause.</td></tr>
        <tr><td><span class="de">…, weil ich um 7 auf stehe.</span></td><td><span class="de">…, weil ich um 7 aufstehe.</span></td><td>No split in subordinates.</td></tr>
        <tr><td><span class="de">Ich habe den Brief gebesucht / ich bekomme den Zug an.</span></td><td><span class="de">Ich habe den Arzt besucht. Ich bekomme den Brief. Ich komme am Bahnhof an.</span></td><td>be- is inseparable; bekommen ≠ ankommen.</td></tr>
        <tr><td><span class="de">Ich habe mich gemeldet an.</span></td><td><span class="de">Ich habe mich angemeldet.</span></td><td>Perfekt: prefix + ge + rest, one word.</td></tr>
      </table>
      <h3>Mini voicemail — Amt</h3>
      <p><span class="de">Guten Tag, hier ist Frau Kaya. Ich rufe an, weil ich den Termin am Mittwoch absagen muss. Könnten Sie mich bitte zurückrufen? Ich habe auf dem Band meine Nummer hinterlassen. Ich möchte mich außerdem für den neuen Kurs anmelden. Danke und auf Wiederhören.</span></p>
      <p>Gloss: I’m calling because I have to cancel Wednesday. Please call me back. I left my number on the machine. I would also like to register for the new course.</p>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">Ich rufe an. Ich sage ab. Ich melde mich an. Der Kurs findet statt / fällt aus. Ich stelle mich vor. Ich beantrage … Ich habe unterschrieben. Bitte rufen Sie zurück. Wir sind angekommen.</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        In weil-clauses: <span class="de">weil ich um 7 aufstehe</span> — no orphan prefix. <span class="de">bekommen</span> is inseparable (receive), not a split kommen. <span class="de">umfahren</span> changes meaning with stress (drive around vs run over) — rare, but do not guess. Hören: wait for the prefix. zu + infinitive tucks in: <span class="de">aufzustehen, anzurufen, sich anzumelden</span>. Perfekt of inseparable: never <em>gebesucht</em>. Sprachbausteine: a gap at the very end is often the prefix <span class="de">an / ab / aus / statt</span>. Schreiben: <span class="de">sich vorstellen, sich anmelden, beantragen, unterschreiben</span> belong in every Bewerbung. Sprechen: if you forget the prefix, the verb may mean something else (rufen ≠ anrufen).
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Write a voicemail with anrufen, zurückrufen, hinterlassen, absagen.</li>
        <li>Put three separable verbs into weil-clauses (closed form).</li>
        <li>Contrast bekommen vs ankommen in two sentences.</li>
        <li>Describe registering for an exam (sich anmelden, ausfüllen, unterschreiben).</li>
        <li>Tell a moving-house mini story (umziehen, aufräumen, ankommen).</li>
        <li>Form zu-infinitives: anrufen, aufstehen, sich anmelden, ausfüllen.</li>
        <li>Write present, weil-clause, and Perfekt for stattfinden and ausfallen.</li>
        <li>Correct: Ich anrufe morgen. / Ich habe mich gemeldet an. / Ich habe den Brief gebesucht.</li>
      </ol>
    `,
  },
  {
    id: "adjectives",
    level: "b1",
    title: "Adjective endings",
    minutes: 68,
    html: `
      <p>Adjective endings are a telc B1 Sprachbausteine engine. One gap <span class="de">neu__ Job</span> tests article class + gender + case at once. Schreiben that can produce <span class="de">eine ruhige, zentral gelegene Wohnung</span> and <span class="de">bei schlechtem Wetter</span> jumps a band. You do not need poetry — you need the three declensions automatic.</p>
      <p>Decide in this order: (1) Is there an article? Which type? (2) Gender/number of the noun. (3) Case. (4) Ending.</p>
      <h3>How it works, step by step</h3>
      <ol>
        <li>Look left of the adjective. You will see a der-word, an ein-word, or nothing.</li>
        <li>der-words (<span class="de">der, die, das, dieser, jeder, welcher, solcher, mancher</span>): the article already shows gender. The adjective is weak: almost only <strong>-e</strong> or <strong>-en</strong>.</li>
        <li>ein-words (<span class="de">ein, kein, mein, dein, sein, ihr, unser, euer, Ihr</span>): in masculine nominative and neuter nominative/accusative the article is “empty”. The adjective must show gender: <strong>-er / -es</strong>. Everywhere else, mixed looks like weak.</li>
        <li>No article: the adjective plays der/die/das (strong). This is the <span class="de">bei gutem Wetter</span> family.</li>
        <li>After <span class="de">sein / werden / bleiben</span> the adjective is a predicate: <strong>zero ending</strong>.</li>
      </ol>
      <h3>English vs German</h3>
      <p>English adjectives never change: “a new job, the new job, with new jobs”. German endings are a second article. English “nice weather” after “in” still has no ending; German dative without article needs <span class="de">bei gutem Wetter</span>. English “the job is new” and “the new job” look similar; German splits them: predicate <span class="de">Der Job ist neu</span> vs attributive <span class="de">der neue Job</span>.</p>
      <h3>A. After der / dieser / jeder / welcher (weak)</h3>
      <p>The article already shows gender. The adjective is almost always <strong>-e or -en</strong>. Five -e forms: Nominative m/f/n and Accusative f/n. All other slots: <strong>-en</strong>.</p>
      <table>
        <tr><th></th><th>M</th><th>F</th><th>N</th><th>Pl</th></tr>
        <tr><td>Nom</td><td><span class="de">der neue Job</span></td><td><span class="de">die neue Stelle</span></td><td><span class="de">das neue Auto</span></td><td><span class="de">die neuen Regeln</span></td></tr>
        <tr><td>Akk</td><td><span class="de">den neuen Job</span></td><td><span class="de">die neue Stelle</span></td><td><span class="de">das neue Auto</span></td><td><span class="de">die neuen Regeln</span></td></tr>
        <tr><td>Dat</td><td><span class="de">dem neuen Job</span></td><td><span class="de">der neuen Stelle</span></td><td><span class="de">dem neuen Auto</span></td><td><span class="de">den neuen Regeln</span></td></tr>
        <tr><td>Gen</td><td><span class="de">des neuen Jobs</span></td><td><span class="de">der neuen Stelle</span></td><td><span class="de">des neuen Autos</span></td><td><span class="de">der neuen Regeln</span></td></tr>
      </table>
      <h3>B. After ein / mein / kein / unser (mixed)</h3>
      <p>ein does not show gender in masculine/neuter nominative (and neuter accusative). The adjective must do it: <strong>-er / -e / -es</strong>. Elsewhere it behaves like the weak table (mostly -en, feminine Akk -e).</p>
      <table>
        <tr><th></th><th>M</th><th>F</th><th>N</th><th>Pl (keine/meine)</th></tr>
        <tr><td>Nom</td><td><span class="de">ein neuer Job</span></td><td><span class="de">eine neue Stelle</span></td><td><span class="de">ein neues Auto</span></td><td><span class="de">keine neuen Regeln</span></td></tr>
        <tr><td>Akk</td><td><span class="de">einen neuen Job</span></td><td><span class="de">eine neue Stelle</span></td><td><span class="de">ein neues Auto</span></td><td><span class="de">keine neuen Regeln</span></td></tr>
        <tr><td>Dat</td><td><span class="de">einem neuen Job</span></td><td><span class="de">einer neuen Stelle</span></td><td><span class="de">einem neuen Auto</span></td><td><span class="de">keinen neuen Regeln</span></td></tr>
        <tr><td>Gen</td><td><span class="de">eines neuen Jobs</span></td><td><span class="de">einer neuen Stelle</span></td><td><span class="de">eines neuen Autos</span></td><td><span class="de">keiner neuen Regeln</span></td></tr>
      </table>
      <p>The three “empty article” slots you must see instantly: <span class="de">ein neuer Job</span> (m Nom), <span class="de">ein neues Auto</span> (n Nom), <span class="de">ein neues Auto</span> (n Akk). Everywhere else ein-words behave like der-words: mostly <span class="de">-en</span>, feminine Akk still <span class="de">-e</span>.</p>
      <h3>C. No article (strong) — the adjective plays der/die/das</h3>
      <p>This is the B1 letter gold: <span class="de">bei gutem Wetter, nach kurzer Zeit, guter Wein, frische Milch, trotz starken Regens</span>.</p>
      <table>
        <tr><th></th><th>M</th><th>F</th><th>N</th><th>Pl</th></tr>
        <tr><td>Nom</td><td><span class="de">guter Wein</span></td><td><span class="de">frische Milch</span></td><td><span class="de">kaltes Wasser</span></td><td><span class="de">gute Ideen</span></td></tr>
        <tr><td>Akk</td><td><span class="de">guten Wein</span></td><td><span class="de">frische Milch</span></td><td><span class="de">kaltes Wasser</span></td><td><span class="de">gute Ideen</span></td></tr>
        <tr><td>Dat</td><td><span class="de">gutem Wein</span></td><td><span class="de">frischer Milch</span></td><td><span class="de">kaltem Wasser</span></td><td><span class="de">guten Ideen</span></td></tr>
        <tr><td>Gen</td><td><span class="de">guten Weins</span></td><td><span class="de">frischer Milch</span></td><td><span class="de">kalten Wassers</span></td><td><span class="de">guter Ideen</span></td></tr>
      </table>
      <p>Strong dative is the exam favourite: <span class="de">-em / -er / -em / -en</span>. Strong genitive masculine/neuter often uses <span class="de">-en</span> on the adjective plus -s on the noun: <span class="de">trotz starken Regens</span>.</p>
      <h3>ein- vs der- side by side (learn this card)</h3>
      <table>
        <tr><th>Slot</th><th>der-word (weak)</th><th>ein-word (mixed)</th></tr>
        <tr><td>m Nom</td><td><span class="de">der neue Vertrag</span></td><td><span class="de">ein neuer Vertrag</span></td></tr>
        <tr><td>m Akk</td><td><span class="de">den neuen Vertrag</span></td><td><span class="de">einen neuen Vertrag</span></td></tr>
        <tr><td>m Dat</td><td><span class="de">dem neuen Vertrag</span></td><td><span class="de">einem neuen Vertrag</span></td></tr>
        <tr><td>n Nom/Akk</td><td><span class="de">das neue Angebot</span></td><td><span class="de">ein neues Angebot</span></td></tr>
        <tr><td>f Nom/Akk</td><td><span class="de">die neue Wohnung</span></td><td><span class="de">eine neue Wohnung</span></td></tr>
        <tr><td>f Dat</td><td><span class="de">der neuen Wohnung</span></td><td><span class="de">einer neuen Wohnung</span></td></tr>
        <tr><td>Pl Nom/Akk</td><td><span class="de">die neuen Regeln</span></td><td><span class="de">keine neuen Regeln</span></td></tr>
      </table>
      <p>After <span class="de">viel, wenig, etwas, mehr</span> with uncountable you often still need an ending: <span class="de">mit wenig Geld, trotz viel Arbeit</span> (usage varies; in exams prefer a clear noun phrase). After numbers: <span class="de">zwei neue Kollegen</span> (plural strong: -e in Nom/Akk).</p>
      <p>Predicate (after sein/werden/bleiben): <strong>no ending</strong> — <span class="de">Der Job ist neu. Die Wohnung bleibt teuer.</span></p>
      <h3>Comparative inside the phrase</h3>
      <p><span class="de">ein besseres Angebot, die günstigste Lösung, bei besserem Wetter, am besten</span>. Irregular: <span class="de">gut–besser–am besten; gern–lieber–am liebsten; hoch–höher; nah–näher; viel–mehr</span>.</p>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Ich habe einen neuen Job gefunden. Die neue Stelle ist näher am Bahnhof.</span></li>
        <li><span class="de">Wir suchen eine ruhige Wohnung mit einem großen Balkon.</span></li>
        <li><span class="de">Bei schlechtem Wetter fällt der Ausflug aus.</span></li>
        <li><span class="de">Nach kurzer Zeit hat uns der Vermieter geschrieben.</span></li>
        <li><span class="de">Mit freundlichen Grüßen — learn this as a chunk, it is dative plural.</span></li>
        <li><span class="de">Das ist keine gute Idee. Das ist der beste Plan.</span></li>
        <li><span class="de">Ich trinke gern kalten Kaffee. Heißer Tee ist mir lieber.</span></li>
        <li><span class="de">Die steigenden Mieten sind ein echtes Problem für viele junge Familien.</span></li>
        <li><span class="de">Trotz des starken Verkehrs sind wir pünktlich angekommen.</span></li>
        <li><span class="de">Haben Sie schon die unterschriebenen Unterlagen bekommen?</span></li>
        <li><span class="de">Ein älterer Herr hat uns den Weg erklärt.</span></li>
        <li><span class="de">Wir brauchen mehr praktische Übungen und klarere Regeln.</span></li>
        <li><span class="de">Im letzten Jahr war die Prüfung leichter als dieses Jahr.</span></li>
        <li><span class="de">Wir brauchen einen zuverlässigen Babysitter und eine günstigere Kita.</span></li>
        <li><span class="de">Nach langem Warten hat uns eine freundliche Mitarbeiterin geholfen.</span></li>
        <li><span class="de">Das ist der kürzeste Weg zum Amt, aber nicht der schönste.</span></li>
        <li><span class="de">Mit großem Interesse habe ich Ihre Anzeige gelesen.</span></li>
        <li><span class="de">Kein anderes Angebot war so klar wie Ihres.</span></li>
      </ul>
      <h3>Worked examples</h3>
      <ul>
        <li><span class="de">Ich habe einen neuen Job gefunden.</span> — I have found a new job. — ein-word, masculine Akk → einen + neuen (mixed, like weak here).</li>
        <li><span class="de">Ein neuer Kollege beginnt am Montag.</span> — A new colleague starts on Monday. — ein-word, masculine Nom → adjective must show -er.</li>
        <li><span class="de">Bei schlechtem Wetter fällt der Ausflug aus.</span> — In bad weather the trip is cancelled. — no article, dative neuter → -em.</li>
        <li><span class="de">Mit freundlichen Grüßen</span> — With kind regards. — no article? Actually this is frozen dative plural after mit: freundlichen + Grüßen. Learn the chunk; do not write freundliche Grüße in a formal close.</li>
      </ul>
      <h3>Right vs wrong</h3>
      <table>
        <tr><th>Wrong</th><th>Right</th><th>Why</th></tr>
        <tr><td><span class="de">ein neue Job / ein neues Job</span></td><td><span class="de">ein neuer Job</span></td><td>Masculine Nom after ein needs -er.</td></tr>
        <tr><td><span class="de">Ich suche eine ruhigen Wohnung.</span></td><td><span class="de">Ich suche eine ruhige Wohnung.</span></td><td>Feminine Akk after eine stays -e.</td></tr>
        <tr><td><span class="de">bei schlechte Wetter</span></td><td><span class="de">bei schlechtem Wetter</span></td><td>Strong dative neuter = -em.</td></tr>
        <tr><td><span class="de">Der Job ist neuer. (predicate meaning “is new”)</span></td><td><span class="de">Der Job ist neu. / Das ist ein neuer Job.</span></td><td>Predicate = zero ending.</td></tr>
        <tr><td><span class="de">ein netter, neue Kollege</span></td><td><span class="de">ein netter neuer Kollege</span></td><td>Two adjectives share the same ending.</td></tr>
      </table>
      <h3>Mini letter — Bewerbung</h3>
      <p><span class="de">Sehr geehrte Frau Hartmann, ich bewerbe mich um eine unbefristete Stelle in Ihrer neuen Filiale. Ich habe langjährige Erfahrung im Einzelhandel und suche einen ruhigen, zuverlässigen Arbeitsplatz. Bei gutem Wetter komme ich gerne zum Vorstellungsgespräch mit dem Rad. Mit freundlichen Grüßen</span></p>
      <p>Gloss: I am applying for a permanent post in your new branch. I have long experience in retail and am looking for a quiet, reliable workplace. In good weather I am happy to cycle to the interview.</p>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">ein neuer Job · eine neue Stelle · ein neues Auto · den ganzen Tag · bei gutem Wetter · nach kurzer Zeit · mit freundlichen Grüßen · eine ruhige Wohnung · das beste Angebot · keine gute Idee · vielen Dank · nächsten Monat</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        After sein, zero ending. After ein + masculine Nom you need <span class="de">-er</span> on the adjective, not -e. Accusative masculine is -en in all three declensions. Dative without article is <span class="de">-em/-er/-em/-en</span> — the strong set people forget. <span class="de">vielen Dank</span> is frozen. <span class="de">nächsten Monat / letzten Freitag</span> are accusative time, no article. Sprachbausteine: look left for dieser vs ein vs nothing before you look at the noun. Two adjectives share the same ending: <span class="de">ein netter neuer Kollege</span>. Schreiben: <span class="de">Sehr geehrte Damen und Herren</span> and <span class="de">Mit freundlichen Grüßen</span> are not optional decorations — wrong endings here look careless. Sprechen: if endings panic you, use a predicate (<span class="de">Die Wohnung ist ruhig</span>) instead of a long attributive chain.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Decline ein neuer Vertrag in Nom/Akk/Dat singular.</li>
        <li>Write four no-article dative chunks (bei/nach/mit/zu + adjective + noun).</li>
        <li>Describe a flat with mixed and weak endings in the same paragraph.</li>
        <li>Add comparatives: a better offer, the cheapest solution, in better weather.</li>
        <li>Take a Sprachbausteine-style line and justify each ending in six words.</li>
        <li>Write a letter opening/closing with correct adjective forms (freundlichen, geehrte).</li>
        <li>Fill from memory: ein ___ Job, die ___ Stelle, bei ___ Wetter, den ___ Tag.</li>
        <li>Write the full ein- vs der- masculine singular (Nom/Akk/Dat) without looking.</li>
        <li>Correct: ein neue Job / bei schlechte Wetter / Der Job ist neuer / eine ruhigen Wohnung.</li>
      </ol>
    `,
  },
  {
    id: "prepositions",
    level: "b1",
    title: "Prepositions",
    minutes: 68,
    html: `
      <p>Prepositions are the other Sprachbausteine engine besides connectors and adjective endings. telc B1 also tests verb+preposition chunks in Lesen and Schreiben (<span class="de">warten auf, sich bewerben um, sich freuen auf/über</span>). Oral exam directions and complaints live here: <span class="de">beim Hausmeister, auf die Post, seit drei Monaten</span>.</p>
      <h3>How it works, step by step</h3>
      <ol>
        <li>Is the preposition on the always-Akk, always-Dat, Wechsel, or genitive list? Chant the lists; do not invent case from English.</li>
        <li>If it is Wechsel, ask only <span class="de">wo?</span> (Dat) or <span class="de">wohin?</span> (Akk). Time chunks are mostly fixed and do not follow that test.</li>
        <li>If the preposition belongs to a verb (<span class="de">warten auf, sich freuen über</span>), learn the chunk as one verb. The case is part of the chunk.</li>
        <li>Watch time: <span class="de">seit</span> + present; <span class="de">vor drei Tagen</span> = ago; <span class="de">für drei Tage</span> = planned duration.</li>
        <li>In careful B1 writing, <span class="de">wegen / trotz / während / statt</span> take genitive: <span class="de">wegen des Lärms</span>.</li>
      </ol>
      <h3>English vs German</h3>
      <p>English “to” splits into <span class="de">nach</span> (bare city/country), <span class="de">zu</span> (person/institution), <span class="de">in</span> (into a building or article-country). English “for” is sometimes <span class="de">für</span> (Akk), sometimes <span class="de">seit</span> (already lasting), sometimes <span class="de">aus</span> (reason: aus diesem Grund). English “on the post office” is wrong; German public offices often use <span class="de">auf die / auf der Post</span>. English “wait for” is <span class="de">warten auf</span>, not für.</p>
      <h3>Case lists (chant until they are muscle memory)</h3>
      <table>
        <tr><th>Always Akk</th><th>Always Dat</th><th>Wechsel wo? Dat / wohin? Akk</th><th>Often Gen (B1 recognition + a few in writing)</th></tr>
        <tr><td><span class="de">durch für gegen ohne um bis</span></td><td><span class="de">aus bei mit nach seit von zu</span></td><td><span class="de">an auf hinter in neben über unter vor zwischen</span></td><td><span class="de">wegen trotz während statt / anstatt außerhalb innerhalb</span></td></tr>
      </table>
      <p>Wechsel test is only wo vs wohin. Time is mostly fixed chunks, not a philosophy: <span class="de">am Montag, um 8 Uhr, im Mai, in der Nacht, seit einem Jahr</span> (present!), <span class="de">nach drei Wochen, vor zwei Tagen, für eine Woche</span>.</p>
      <h3>Place chunks that decide items</h3>
      <table>
        <tr><th>German</th><th>Note</th></tr>
        <tr><td><span class="de">nach Hause / zu Hause</span></td><td>direction vs location</td></tr>
        <tr><td><span class="de">zum Arzt / zur Arbeit / zur Schule</span></td><td>zu + person or institution with article</td></tr>
        <tr><td><span class="de">in die Stadt / in der Stadt · ins Kino / im Kino</span></td><td>Akk vs Dat</td></tr>
        <tr><td><span class="de">auf die Post / auf der Post · auf Arbeit</span></td><td>public offices often auf</td></tr>
        <tr><td><span class="de">an die See / an der See · ans Fenster</span></td><td>an + vertical/edge</td></tr>
        <tr><td><span class="de">nach Spanien / in die Schweiz / in die Türkei / in die USA</span></td><td>article countries break the nach-rule</td></tr>
      </table>
      <h3>Verb + preposition (learn as verbs)</h3>
      <table>
        <tr><th>Chunk</th><th>Case</th><th>Example</th></tr>
        <tr><td><span class="de">warten auf</span></td><td>Akk</td><td><span class="de">Ich warte auf den Bus / auf Ihre Antwort.</span></td></tr>
        <tr><td><span class="de">sich freuen auf</span></td><td>Akk</td><td>future pleasure: <span class="de">Ich freue mich auf das Wochenende.</span></td></tr>
        <tr><td><span class="de">sich freuen über</span></td><td>Akk</td><td>fact already true: <span class="de">Ich freue mich über Ihre Nachricht.</span></td></tr>
        <tr><td><span class="de">sich bewerben um</span></td><td>Akk</td><td><span class="de">Ich bewerbe mich um die Stelle.</span></td></tr>
        <tr><td><span class="de">sich interessieren für</span></td><td>Akk</td><td><span class="de">Ich interessiere mich für den Kurs.</span></td></tr>
        <tr><td><span class="de">Angst haben vor</span></td><td>Dat</td><td><span class="de">Ich habe Angst vor der Prüfung.</span></td></tr>
        <tr><td><span class="de">sich beschweren über</span></td><td>Akk</td><td><span class="de">Wir beschweren uns über den Lärm.</span></td></tr>
        <tr><td><span class="de">sich erinnern an</span></td><td>Akk</td><td><span class="de">Erinnern Sie sich an unseren Anruf?</span></td></tr>
        <tr><td><span class="de">denken an</span></td><td>Akk</td><td><span class="de">Denken Sie bitte an die Unterlagen.</span></td></tr>
        <tr><td><span class="de">teilnehmen an</span></td><td>Dat</td><td><span class="de">Ich möchte an dem Kurs teilnehmen.</span></td></tr>
        <tr><td><span class="de">sprechen über / mit</span></td><td>Akk / Dat</td><td><span class="de">über das Problem / mit dem Chef</span></td></tr>
        <tr><td><span class="de">es geht um</span></td><td>Akk</td><td><span class="de">In dem Brief geht es um die Miete.</span></td></tr>
        <tr><td><span class="de">sich gewöhnen an</span></td><td>Akk</td><td><span class="de">Ich gewöhne mich an die Schichtarbeit.</span></td></tr>
        <tr><td><span class="de">abhängen von</span></td><td>Dat</td><td><span class="de">Das hängt vom Wetter ab.</span></td></tr>
      </table>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Ich bin in der Stadt. In zehn Minuten gehe ich in die Stadt zurück — nein: ich bin schon da; ich gehe ins Amt.</span></li>
        <li><span class="de">Bitte legen Sie den Ausweis auf den Tisch. Er liegt schon auf dem Tisch.</span></li>
        <li><span class="de">Seit drei Monaten warte ich auf eine schriftliche Antwort.</span></li>
        <li><span class="de">Ich freue mich auf das Gespräch und habe mich über Ihre Einladung gefreut.</span></li>
        <li><span class="de">Wegen der Bauarbeiten ist die Straße gesperrt. Trotz des Lärms müssen wir arbeiten.</span></li>
        <li><span class="de">Während der Pause können Sie im Hof rauchen. Statt eines Briefes schicke ich eine E-Mail.</span></li>
        <li><span class="de">Wir treffen uns vor dem Bahnhof, nicht im Bahnhof.</span></li>
        <li><span class="de">Ich bewerbe mich um eine Teilzeitstelle in der Nähe.</span></li>
        <li><span class="de">Helfen Sie mir bei dem Formular? Ich verstehe die Frage zu den Steuern nicht.</span></li>
        <li><span class="de">Nach dem Kurs fahre ich nach Hause. Zu Hause koche ich für die Kinder.</span></li>
        <li><span class="de">Um 8 Uhr beginnt die Schicht. Gegen 16 Uhr bin ich fertig.</span></li>
        <li><span class="de">Ohne Ihre Unterschrift können wir nichts machen.</span></li>
        <li><span class="de">Ich habe mich an das Leben hier gewöhnt, aber der Winter fällt mir noch schwer.</span></li>
        <li><span class="de">Ich fahre nach Mainz, nicht in die Schweiz. Am Wochenende bleibe ich zu Hause.</span></li>
        <li><span class="de">Denken Sie an den Ausweis. Ohne ihn kommen Sie nicht auf die Post.</span></li>
        <li><span class="de">Wir treffen uns neben dem Eingang, nicht hinter dem Gebäude.</span></li>
        <li><span class="de">Vor zwei Tagen habe ich angerufen. Für drei Tage fahre ich zu meinen Eltern.</span></li>
        <li><span class="de">Ich interessiere mich für den Abendkurs und möchte an der Prüfung teilnehmen.</span></li>
      </ul>
      <h3>Worked examples</h3>
      <ul>
        <li><span class="de">Bitte legen Sie den Ausweis auf den Tisch. Er liegt schon auf dem Tisch.</span> — Please put the ID on the table. It is already lying on the table. — wohin? Akk; wo? Dat.</li>
        <li><span class="de">Seit drei Monaten warte ich auf eine schriftliche Antwort.</span> — I have been waiting for a written answer for three months. — seit + present; warten auf + Akk.</li>
        <li><span class="de">Ich freue mich auf das Gespräch. Ich habe mich über Ihre Einladung gefreut.</span> — I am looking forward to the interview. I was pleased about your invitation. — future pleasure = auf; fact already true = über.</li>
        <li><span class="de">Wegen der Bauarbeiten ist die Straße gesperrt. Trotz des Lärms müssen wir arbeiten.</span> — Because of the building work the street is closed. Despite the noise we have to work. — both genitive in exam German.</li>
      </ul>
      <h3>Right vs wrong</h3>
      <table>
        <tr><th>Wrong</th><th>Right</th><th>Why</th></tr>
        <tr><td><span class="de">Ich warte für den Bus.</span></td><td><span class="de">Ich warte auf den Bus.</span></td><td>warten auf + Akk.</td></tr>
        <tr><td><span class="de">Ich fahre nach der Stadt / zu Berlin.</span></td><td><span class="de">Ich fahre in die Stadt / nach Berlin.</span></td><td>nach + bare city; in + article place.</td></tr>
        <tr><td><span class="de">Ich habe seit einem Jahr gewartet. (still waiting)</span></td><td><span class="de">Ich warte seit einem Jahr.</span></td><td>seit + present.</td></tr>
        <tr><td><span class="de">Ich freue mich über das Wochenende. (not yet here)</span></td><td><span class="de">Ich freue mich auf das Wochenende.</span></td><td>Future pleasure = auf.</td></tr>
      </table>
      <h3>Mini letter — complaint to the landlord</h3>
      <p><span class="de">Sehr geehrter Herr Vogel, seit sechs Wochen warten wir auf die Reparatur der Heizung. Wir beschweren uns über den Lärm aus der Wohnung über uns. Wegen der Kälte können die Kinder nicht in ihren Zimmern lernen. Trotz mehrerer Anrufe ist niemand gekommen. Bitte kümmern Sie sich um den Schaden. Mit freundlichen Grüßen</span></p>
      <p>Gloss: For six weeks we have been waiting for the heating repair. We are complaining about the noise from the flat above. Because of the cold the children cannot study in their rooms. Despite several calls nobody has come.</p>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">warten auf + Akk · sich freuen auf / über · sich bewerben um · sich interessieren für · Angst haben vor + Dat · sich beschweren über · teilnehmen an + Dat · es geht um · nach Hause / zu Hause · zum Arzt · in die Stadt / in der Stadt · auf die Post · am Montag · um 8 Uhr · seit einem Jahr + present · wegen des / trotz des</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        <span class="de">seit</span> + present. <span class="de">vor drei Tagen</span> = ago (past). <span class="de">für drei Tage</span> = duration planned. <span class="de">wegen</span> genitive in careful German: <span class="de">wegen des Lärms</span> (spoken wegen dem is common; exam prefers genitive). <span class="de">sich freuen auf</span> vs <span class="de">über</span> is a classic gap. <span class="de">denken an</span> not über for “remember to”. Hören: meeting point <span class="de">vor / in / hinter / neben</span>. Do not use nach + article city. <span class="de">zu</span> never with bare city names. Sprachbausteine: wo/wohin is the whole item. Schreiben: <span class="de">sich bewerben um, sich beschweren über, warten auf</span> must be automatic. Sprechen: if you mix auf die Post / auf der Post, the partner goes to the wrong place.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Write ten verb+prep chunks about work, housing, and a course.</li>
        <li>Make five wo/wohin pairs with in/auf/an/vor/neben.</li>
        <li>Write a complaint using wegen, trotz, seit, über (beschweren).</li>
        <li>Contrast freuen auf vs über, and warten auf vs helfen bei.</li>
        <li>Give a week’s time phrases: am, um, im, seit, vor, für, nach.</li>
        <li>Directions to your exam centre in four sentences.</li>
        <li>Write nach Hause / zu Hause / zum Arzt / in die Schweiz / nach Spanien — each in a sentence.</li>
        <li>Correct: Ich warte für den Bus. / Ich fahre zu Berlin. / Ich freue mich über das Wochenende (future).</li>
      </ol>
    `,
  },
  {
    id: "konjunktiv2",
    level: "b1",
    title: "Konjunktiv II",
    minutes: 68,
    html: `
      <p>Konjunktiv II is high-value telc B1. Schreiben (polite requests, unreal wishes, advice to a friend, “what would you do?”) and Sprechen (planning: <span class="de">ich würde vorschlagen … könnten wir …?</span>) use it constantly. Sprachbausteine tests <span class="de">wäre, hätte, würde, könnte, sollte</span> vs indicative. If you only know present tense, letters sound rude or childish.</p>
      <p>Two jobs: (1) politeness now, (2) unreal / hypothetical (present or past). Form: either a special form (<span class="de">wäre, hätte, würde, könnte …</span>) or <span class="de">würde</span> + infinitive — the second is your default for almost all full verbs at B1.</p>
      <h3>How it works, step by step</h3>
      <ol>
        <li>Decide the job: polite request now, or unreal situation (present or past).</li>
        <li>For almost every full verb, use <span class="de">würde</span> + infinitive: <span class="de">ich würde vorschlagen, ich würde umziehen</span>.</li>
        <li>Never stack würde on a modal or on sein/haben. Use the short forms: <span class="de">könnte, müsste, sollte, dürfte, wäre, hätte</span> — not <em>ich würde können / ich würde sein</em>.</li>
        <li>Unreal present: both sides usually K II — <span class="de">Wenn ich Zeit hätte, würde ich dich besuchen.</span></li>
        <li>Unreal past (regret): <span class="de">hätte / wäre</span> + Partizip — <span class="de">Wenn ich das gewusst hätte, wäre ich früher gekommen.</span> Advice about the past: <span class="de">Ich hätte früher anrufen sollen.</span></li>
        <li>In a letter, rewrite every <span class="de">ich will / machen Sie</span> as hätte gerne / könnten Sie / es wäre wichtig.</li>
      </ol>
      <h3>English vs German</h3>
      <p>English “would” is one word; German splits würde + infinitive (default) from wäre/hätte/könnte (special verbs). English “If I were you” is <span class="de">Wenn ich Sie wäre / An Ihrer Stelle würde ich</span> — not Konjunktiv I <span class="de">sei</span>. English “could you” is already polite; German needs <span class="de">Könnten Sie</span>, not Kannst du, in a formal letter. English “I should have called” is <span class="de">Ich hätte anrufen sollen</span> (hätte + infinitive + modal), not ich sollte angerufen.</p>
      <h3>The forms you must own cold</h3>
      <table>
        <tr><th></th><th>sein</th><th>haben</th><th>werden</th><th>können</th><th>müssen</th><th>sollen</th><th>dürfen</th><th>wollen</th></tr>
        <tr><td>ich/er</td><td><span class="de">wäre</span></td><td><span class="de">hätte</span></td><td><span class="de">würde</span></td><td><span class="de">könnte</span></td><td><span class="de">müsste</span></td><td><span class="de">sollte</span></td><td><span class="de">dürfte</span></td><td><span class="de">wollte</span></td></tr>
        <tr><td>du</td><td><span class="de">wärst</span></td><td><span class="de">hättest</span></td><td><span class="de">würdest</span></td><td><span class="de">könntest</span></td><td><span class="de">müsstest</span></td><td><span class="de">solltest</span></td><td><span class="de">dürftest</span></td><td><span class="de">wolltest</span></td></tr>
        <tr><td>wir/sie/Sie</td><td><span class="de">wären</span></td><td><span class="de">hätten</span></td><td><span class="de">würden</span></td><td><span class="de">könnten</span></td><td><span class="de">müssten</span></td><td><span class="de">sollten</span></td><td><span class="de">dürften</span></td><td><span class="de">wollten</span></td></tr>
      </table>
      <p>Full verbs: <span class="de">ich würde + infinitive</span>. <span class="de">Wenn ich Zeit hätte, würde ich dich besuchen.</span> Do not stack würde on a modal: not <em>ich würde können</em> — say <span class="de">ich könnte</span>.</p>
      <h3>Politeness (exam letters and oral)</h3>
      <table>
        <tr><th>Ruder / flatter</th><th>B1 polite</th></tr>
        <tr><td><span class="de">Ich will einen Termin.</span></td><td><span class="de">Ich hätte gerne einen Termin. / Ich würde gerne einen Termin vereinbaren.</span></td></tr>
        <tr><td><span class="de">Schicken Sie mir das.</span></td><td><span class="de">Könnten Sie mir das bitte schicken?</span></td></tr>
        <tr><td><span class="de">Das geht nicht.</span></td><td><span class="de">Leider wäre das für mich schwierig. Wäre es möglich, …?</span></td></tr>
        <tr><td><span class="de">Machen Sie das anders.</span></td><td><span class="de">Ich würde vorschlagen, dass wir … / An Ihrer Stelle würde ich …</span></td></tr>
      </table>
      <p>Frozen polite: <span class="de">ich hätte gerne, ich würde gerne, könnten Sie, würden Sie so freundlich sein, es wäre nett, wenn …, ich wäre Ihnen dankbar, wenn …</span></p>
      <h3>Unreal present (wenn + K II, result + K II)</h3>
      <p>Both clauses usually in Konjunktiv II. <span class="de">Wenn ich mehr Geld hätte, würde ich umziehen.</span> You can drop wenn and invert: <span class="de">Hätte ich mehr Geld, würde ich umziehen.</span></p>
      <h3>Unreal past (regret / criticism of the past)</h3>
      <p>hätte/wäre + Partizip. <span class="de">Wenn ich das gewusst hätte, wäre ich früher gekommen.</span> Modal: <span class="de">hätte … machen sollen / können / müssen</span> — <span class="de">Ich hätte früher anrufen sollen.</span></p>
      <h3>als ob / ich wünschte / an deiner Stelle</h3>
      <ul>
        <li><span class="de">Er tut so, als ob er keine Zeit hätte.</span></li>
        <li><span class="de">Ich wünschte, ich hätte mehr Urlaub.</span></li>
        <li><span class="de">An deiner Stelle würde ich mich schriftlich beschweren.</span></li>
      </ul>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Ich würde gerne nächste Woche vorbeikommen. Würde Ihnen Dienstag passen?</span></li>
        <li><span class="de">Könnten Sie mir bitte die Nebenkosten noch einmal erklären?</span></li>
        <li><span class="de">Es wäre mir sehr wichtig, dass die Heizung diese Woche repariert wird.</span></li>
        <li><span class="de">Wenn ich Sie wäre, würde ich den Vertrag nicht so unterschreiben.</span></li>
        <li><span class="de">Hätte ich ein Auto, müsste ich nicht so früh losfahren.</span></li>
        <li><span class="de">Wenn das Wetter besser wäre, könnten wir den Ausflug machen.</span></li>
        <li><span class="de">Ich hätte mehr Zeit, wenn ich nicht so viel pendeln müsste.</span></li>
        <li><span class="de">Wenn ich das gewusst hätte, hätte ich mich früher beworben.</span></li>
        <li><span class="de">Wir hätten den Zug nehmen sollen. Mit dem Auto stehen wir nur im Stau.</span></li>
        <li><span class="de">Dürfte ich Sie kurz unterbrechen? Ich hätte dazu eine Frage.</span></li>
        <li><span class="de">Ohne Ihre Hilfe wäre das nicht möglich gewesen.</span></li>
        <li><span class="de">Ich schlage vor, wir könnten uns um 17 Uhr treffen. Wäre das okay?</span></li>
        <li><span class="de">Falls Sie den Termin nicht wahrnehmen könnten, sagen Sie uns bitte Bescheid.</span></li>
        <li><span class="de">Würden Sie so freundlich sein, mir die Rechnung noch einmal zu schicken?</span></li>
        <li><span class="de">Wenn die Miete niedriger wäre, könnten wir bleiben.</span></li>
        <li><span class="de">Ich hätte den Vertrag nicht unterschreiben sollen.</span></li>
        <li><span class="de">Könnten wir uns statt um 9 um 10 treffen? Das wäre für mich besser.</span></li>
        <li><span class="de">An deiner Stelle würde ich erst anrufen und dann schreiben.</span></li>
      </ul>
      <h3>Worked examples — three machines</h3>
      <ul>
        <li><span class="de">Könnten Sie mir bitte die Nebenkosten erklären? Ich hätte gerne einen Termin.</span> — Could you please explain the service charges? I would like an appointment. — Politeness now: könnte / hätte gerne, not will.</li>
        <li><span class="de">Wenn ich mehr Geld hätte, würde ich umziehen. Hätte ich ein Auto, müsste ich nicht so früh losfahren.</span> — If I had more money, I would move. If I had a car, I would not have to leave so early. — Unreal present: hätte / würde / müsste. No würde können, no würde sein.</li>
        <li><span class="de">Wenn ich das gewusst hätte, hätte ich mich früher beworben. Ich hätte früher anrufen sollen.</span> — If I had known that, I would have applied earlier. I should have called earlier. — Unreal past: hätte + Partizip; past advice: hätte + infinitive + sollen.</li>
        <li><span class="de">An Ihrer Stelle würde ich den Vertrag nicht so unterschreiben.</span> — If I were you, I would not sign the contract like that. — Advice formula; würde + infinitive on the full verb.</li>
      </ul>
      <h3>Right vs wrong</h3>
      <table>
        <tr><th>Wrong</th><th>Right</th><th>Why</th></tr>
        <tr><td><span class="de">Ich würde können morgen kommen.</span></td><td><span class="de">Ich könnte morgen kommen.</span></td><td>No würde + modal.</td></tr>
        <tr><td><span class="de">Wenn ich Zeit habe, würde ich kommen. (unreal meaning)</span></td><td><span class="de">Wenn ich Zeit hätte, würde ich kommen.</span></td><td>Both sides K II for unreal present.</td></tr>
        <tr><td><span class="de">Ich sollte früher angerufen. (regret)</span></td><td><span class="de">Ich hätte früher anrufen sollen.</span></td><td>Past regret needs hätte + infinitive + modal.</td></tr>
        <tr><td><span class="de">Bitte sei so nett und schicken Sie …</span></td><td><span class="de">Es wäre nett, wenn Sie … schicken könnten.</span></td><td>sei is K I (report), not politeness.</td></tr>
        <tr><td><span class="de">Ich will einen neuen Termin. Machen Sie das sofort.</span></td><td><span class="de">Ich hätte gerne einen neuen Termin. Könnten Sie das bitte bald machen?</span></td><td>Register: formal letter needs K II.</td></tr>
      </table>
      <h3>Mini letter — polite complaint</h3>
      <p><span class="de">Sehr geehrte Damen und Herren, ich würde gerne wissen, wann die Heizung repariert wird. Es wäre mir sehr wichtig, dass jemand noch diese Woche kommt. Könnten Sie mir bitte Bescheid sagen? Wenn ich früher Bescheid gewusst hätte, hätte ich die Kinder nicht zu Hause gelassen. Ich wäre Ihnen dankbar, wenn Sie den Termin schriftlich bestätigen könnten. Mit freundlichen Grüßen</span></p>
      <p>Gloss: I would like to know when the heating will be repaired. It would be very important to me that someone still comes this week. Could you please let me know? If I had known earlier, I would not have left the children at home. I would be grateful if you could confirm the appointment in writing.</p>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">Ich würde gerne … Könnten Sie bitte …? Ich hätte gerne … Es wäre nett, wenn … Ich wäre Ihnen dankbar, wenn … Wenn ich Zeit hätte, würde ich … An Ihrer Stelle würde ich … Wenn ich das gewusst hätte, wäre ich … Ich hätte … sollen. Wäre das möglich?</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        <span class="de">würde können</span> is clumsy — use könnte. Mix of tenses: unreal present is wäre/hätte/würde, not Perfekt. Unreal past needs hätte/wäre + Partizip in <em>both</em> typical clauses. <span class="de">sollte</span> is both “should” (advice) and Konjunktiv of sollen — context. Do not use Konjunktiv I (<span class="de">er sei</span>) for politeness; that is reported speech. Hören: a polite hypothetical is not a done deal — <span class="de">wir könnten Samstag</span> is not yet an agreement. Schreiben: one rude <span class="de">ich will / machen Sie</span> in a complaint letter costs register marks; rewrite with K II. Sprechen Teil 2: plan with <span class="de">ich würde vorschlagen / könnten wir / wäre das okay</span> — that is the whole task. Sprachbausteine: wäre vs wurde vs würde are lookalikes; wurde is past passive/indicative “became”.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Rewrite a rude request as a B1 letter (hätte gerne, könnten Sie, es wäre wichtig).</li>
        <li>Give advice: An Ihrer Stelle würde ich … (three tips).</li>
        <li>Build two present unreal wenn-sentences (housing and work).</li>
        <li>Build two past unreal regrets (hätte … sollen / wenn ich gewusst hätte).</li>
        <li>Plan with a partner using nur Konjunktiv II questions (könnten wir, würde dir … passen).</li>
        <li>Say what you would do if you passed telc B1 next month.</li>
        <li>Write five polite office lines that never use ich will or machen Sie.</li>
        <li>Contrast: Wenn ich Zeit habe, komme ich. vs Wenn ich Zeit hätte, würde ich kommen.</li>
        <li>Correct: Ich würde können. / Ich sollte früher angerufen. / Bitte sei so nett und schicken Sie.</li>
      </ol>
    `,
  },
  {
    id: "relative",
    level: "b1",
    title: "Relative clauses",
    minutes: 66,
    html: `
      <p>Relative clauses pack information — exactly what B1 Lesen and Sprachbausteine do. Schreiben that can produce one or two correct relatives (<span class="de">die Wohnung, die ich besichtigt habe</span>) looks controlled. The pronoun matches gender/number of the noun; case comes from the role <em>inside</em> the extra clause. Verb last. Commas required.</p>
      <h3>How it works, step by step</h3>
      <ol>
        <li>Find the noun before the comma. That noun gives gender and number of the pronoun.</li>
        <li>Read the extra clause as if the pronoun were er/sie/es/ihn/ihm. The job inside that clause gives the case: subject → der/die/das; object → den/die/das; “to whom” → dem/der/dem/denen; “whose” → dessen/deren.</li>
        <li>If a preposition belongs to the inner verb, put it first: <span class="de">der Kollege, mit dem ich arbeite</span>.</li>
        <li>After <span class="de">alles, etwas, nichts, das Beste</span>, or after a whole sentence, use <span class="de">was</span>.</li>
        <li>For a place, <span class="de">in der / in dem</span> is safer in exams than <span class="de">wo</span>, but wo is common after cities: <span class="de">die Stadt, wo ich wohne</span>.</li>
        <li>Verb last. Two commas if the clause sits in the middle of the sentence.</li>
      </ol>
      <h3>English vs German</h3>
      <p>English “who / which / that” barely shows case. German relative pronouns look like der/die/das and must show case. English “whose” is one word; German splits <span class="de">dessen</span> (m/n) and <span class="de">deren</span> (f/pl). English “the man I saw” can drop the pronoun; German never drops it. English “what I need” after everything is <span class="de">alles, was</span>, not das. English “where” after a noun is often <span class="de">in der / in dem</span> in careful German.</p>
      <h3>Full pronoun table</h3>
      <table>
        <tr><th></th><th>M</th><th>F</th><th>N</th><th>Pl</th></tr>
        <tr><td>Nom</td><td><span class="de">der</span></td><td><span class="de">die</span></td><td><span class="de">das</span></td><td><span class="de">die</span></td></tr>
        <tr><td>Akk</td><td><span class="de">den</span></td><td><span class="de">die</span></td><td><span class="de">das</span></td><td><span class="de">die</span></td></tr>
        <tr><td>Dat</td><td><span class="de">dem</span></td><td><span class="de">der</span></td><td><span class="de">dem</span></td><td><span class="de">denen</span></td></tr>
        <tr><td>Gen</td><td><span class="de">dessen</span></td><td><span class="de">deren</span></td><td><span class="de">dessen</span></td><td><span class="de">deren</span></td></tr>
      </table>
      <p>With a preposition, the preposition comes first: <span class="de">der Kollege, mit dem ich arbeite · das Problem, über das wir gesprochen haben · die Firma, bei der ich mich beworben habe</span>. If the preposition belongs to a da-compound with a thing, you may see <span class="de">worüber, womit, worauf</span> after <span class="de">etwas, das, nichts</span> — useful in Lesen.</p>
      <p>After <span class="de">alles, etwas, nichts, vieles, das Beste, das Einzige</span>: usually <span class="de">was</span>. After a whole sentence: <span class="de">was</span> — <span class="de">Er hat abgesagt, was ich schade finde.</span> Place: <span class="de">wo</span> for cities/countries in many styles: <span class="de">die Stadt, wo / in der ich wohne</span> (in der is safer in exams).</p>
      <h3>How to choose the case (the 10-second test)</h3>
      <ol>
        <li>Find the noun before the comma. That gives gender/number.</li>
        <li>Read the relative clause as if the pronoun were er/sie/es/ihn/ihm.</li>
        <li>If the clause already has a subject doing the verb, the pronoun is probably Akk or Dat.</li>
        <li>If a preposition starts the clause, that preposition decides the case.</li>
      </ol>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Das ist der Mann, der nebenan wohnt.</span></li>
        <li><span class="de">Das ist der Mann, den ich gestern gesehen habe.</span></li>
        <li><span class="de">Das ist der Mann, dem ich das Buch gegeben habe.</span></li>
        <li><span class="de">Das ist der Mann, mit dem ich arbeite.</span></li>
        <li><span class="de">Das ist der Mann, dessen Tochter in meinem Kurs ist.</span></li>
        <li><span class="de">Die Wohnung, die wir besichtigt haben, war zu teuer.</span></li>
        <li><span class="de">Die Kollegin, der ich danken möchte, hilft uns oft. (danken + Dat)</span></li>
        <li><span class="de">Das Formular, das Sie ausfüllen müssen, liegt online.</span></li>
        <li><span class="de">Die Leute, denen wir geschrieben haben, haben noch nicht geantwortet.</span></li>
        <li><span class="de">Ich suche eine Stelle, bei der ich auch nachmittags Zeit für die Kinder habe.</span></li>
        <li><span class="de">Alles, was ich brauche, ist eine ruhige Ecke zum Lernen.</span></li>
        <li><span class="de">Das ist das Beste, was wir tun können.</span></li>
        <li><span class="de">Es gibt mehrere Gründe, aus denen ich absagen muss.</span></li>
        <li><span class="de">Die Stadt, in der ich aufgewachsen bin, liegt an einem Fluss.</span></li>
        <li><span class="de">Der Kurs, für den ich mich angemeldet habe, beginnt im September.</span></li>
        <li><span class="de">Die Nachbarin, deren Hund immer bellt, ist sehr nett.</span></li>
        <li><span class="de">Nichts, was auf dem Zettel steht, ist falsch.</span></li>
        <li><span class="de">Das Amt, wo / in dem wir den Ausweis holen, schließt um 12.</span></li>
        <li><span class="de">Die Kollegen, mit denen ich die Schicht teile, helfen mir oft.</span></li>
      </ul>
      <h3>Worked examples — der / dem / den / dessen / wo / was</h3>
      <ul>
        <li><span class="de">Das ist der Mann, den ich gestern gesehen habe.</span> — That is the man I saw yesterday. — Mann is masculine; inside the clause he is the object of sehen → den.</li>
        <li><span class="de">Das ist der Mann, dem ich das Buch gegeben habe.</span> — That is the man I gave the book to. — geben: person = dative → dem.</li>
        <li><span class="de">Das ist der Mann, dessen Tochter in meinem Kurs ist.</span> — That is the man whose daughter is in my course. — dessen = whose (m); no extra article before Tochter.</li>
        <li><span class="de">Die Stadt, in der / wo ich wohne, ist teuer. Alles, was ich brauche, ist eine ruhige Ecke.</span> — The city where I live is expensive. All I need is a quiet corner. — place: in der is safer; alles takes was, not das.</li>
      </ul>
      <h3>Right vs wrong</h3>
      <table>
        <tr><th>Wrong</th><th>Right</th><th>Why</th></tr>
        <tr><td><span class="de">der Mann, der ich gesehen habe</span></td><td><span class="de">der Mann, den ich gesehen habe</span></td><td>Inner job is object → Akk.</td></tr>
        <tr><td><span class="de">die Leute, den wir geschrieben haben</span></td><td><span class="de">die Leute, denen wir geschrieben haben</span></td><td>Plural dative = denen.</td></tr>
        <tr><td><span class="de">der Mann, dessen die Tochter …</span></td><td><span class="de">der Mann, dessen Tochter …</span></td><td>No second article after dessen.</td></tr>
        <tr><td><span class="de">alles, das ich brauche</span></td><td><span class="de">alles, was ich brauche</span></td><td>alles/etwas/nichts take was.</td></tr>
        <tr><td><span class="de">die Wohnung die ich gesehen habe war teuer</span></td><td><span class="de">Die Wohnung, die ich gesehen habe, war teuer.</span></td><td>Two commas; verb last.</td></tr>
      </table>
      <h3>Mini letter — housing</h3>
      <p><span class="de">Sehr geehrte Frau Klein, die Wohnung, die wir am Samstag besichtigt haben, gefällt uns. Der Balkon, auf dem die Kinder spielen könnten, ist ein großer Vorteil. Alles, was uns stört, ist der Lärm der Straße, an der das Haus liegt. Gibt es eine andere Wohnung, deren Hof ruhiger ist?</span></p>
      <p>Gloss: The flat we viewed on Saturday appeals to us. The balcony on which the children could play is a big plus. All that bothers us is the noise of the street the house is on. Is there another flat whose yard is quieter?</p>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">der Mann, der / den / dem / mit dem / dessen … die Frau, die / der / mit der / deren … das Problem, das / mit dem / über das … die Leute, die / denen / deren … alles, was … eine Stelle, bei der … die Wohnung, die ich … habe</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        Gender from the noun, case from the inner clause — never the other way around. Plural dative is <span class="de">denen</span>, not den. <span class="de">dessen/deren</span> do not add an extra article: <span class="de">dessen Tochter</span>, not dessen die Tochter. After prepositions do not drop the preposition. <span class="de">was</span> after alles/etwas/nichts, not das. Do not use <span class="de">wer</span> as a relative after a noun. Verb last, two commas if the clause sits in the middle. Hören rarely needs you to produce this; Lesen gaps do. Sprachbausteine: the gap after the comma is often dem/den/dessen, not a random der. Schreiben: one correct relative beats three broken ones. Sprechen: a short <span class="de">die Kollegin, mit der ich arbeite</span> is enough.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Take der Kollege through Nom, Akk, Dat, mit + Dat, dessen.</li>
        <li>Write a housing paragraph with two relative clauses (die Wohnung, die … / der Balkon, auf dem …).</li>
        <li>Use dative verbs inside relatives (helfen, danken, gehören).</li>
        <li>Write everything/was and the best/was.</li>
        <li>Combine two short sentences into one relative — five times from a topic text.</li>
        <li>In speaking, add one relative when you describe a person in a photo.</li>
        <li>Write die Frau with die / der / mit der / deren — four full sentences.</li>
        <li>Contrast wo vs in der after die Stadt, and was vs das after alles.</li>
        <li>Correct: der Mann, der ich gesehen habe / alles, das ich brauche / die Leute, den wir geschrieben haben.</li>
      </ol>
    `,
  },
  {
    id: "zu",
    level: "b1",
    title: "zu + infinitive",
    minutes: 64,
    html: `
      <p>zu-infinitives are everywhere in B1: <span class="de">es ist wichtig zu …, ich habe vor zu …, anstatt zu …, um zu …</span>. Sprachbausteine tests whether <span class="de">zu</span> is needed at all (not after modals) and where it sits in separable verbs (<span class="de">aufzustehen</span>). Schreiben loves <span class="de">um … zu</span> for purpose in letters.</p>
      <h3>How it works, step by step</h3>
      <ol>
        <li>Ask: is there a new conjugated verb and a new subject? If yes, you need a full clause (dass/damit/weil), not only zu.</li>
        <li>If the subject stays the same, many verbs and adjectives take <span class="de">zu</span> + infinitive: <span class="de">Ich versuche, pünktlich zu kommen.</span></li>
        <li>Purpose, same subject → <span class="de">um … zu</span>. Purpose, new subject → <span class="de">damit</span> + verb last.</li>
        <li>Without doing → <span class="de">ohne … zu</span>. Instead of doing → <span class="de">statt / anstatt … zu</span>.</li>
        <li>Separable: tuck zu in — <span class="de">aufzustehen, anzurufen, sich anzumelden</span>. Never <em>zu aufstehen</em>.</li>
        <li>No zu after modals, sehen/hören/lassen, gehen + activity, or werden (future).</li>
      </ol>
      <h3>English vs German</h3>
      <p>English “to” is almost automatic after try/hope/important, but English also drops “to” after can/must. German does the same split: try → zu, can → no zu. English “in order to” is <span class="de">um … zu</span> only when the subject is the same; English often keeps “so that” for a new subject — that is <span class="de">damit</span>. English “without saying goodbye” uses -ing; German uses <span class="de">ohne sich zu verabschieden</span>. English “instead of complaining” is <span class="de">statt sich zu beschweren</span>.</p>
      <h3>The basic pattern</h3>
      <p>Main verb or adjective + comma + (object) + <span class="de">zu</span> + infinitive. <span class="de">Ich versuche, pünktlich zu kommen. Es ist wichtig, Deutsch zu lernen.</span> The zu-clause has no new conjugated verb and usually no new subject.</p>
      <table>
        <tr><th>Trigger</th><th>Example</th></tr>
        <tr><td>verbs of planning / starting / hoping</td><td><span class="de">vorhaben, versuchen, hoffen, vergessen, empfehlen, vorschlagen, bitten, aufhören, anfangen</span></td></tr>
        <tr><td>es ist + adjective</td><td><span class="de">wichtig, möglich, schwer, einfach, nett, notwendig</span></td></tr>
        <tr><td>nouns</td><td><span class="de">Ich habe keine Zeit / Lust / die Möglichkeit, … zu …</span></td></tr>
        <tr><td>um … zu</td><td>purpose, same subject: in order to</td></tr>
        <tr><td>ohne … zu</td><td>without doing</td></tr>
        <tr><td>anstatt / statt … zu</td><td>instead of doing</td></tr>
      </table>
      <h3>Where zu sits</h3>
      <ul>
        <li>Normal verb: <span class="de">zu kommen, zu lernen, zu schreiben</span></li>
        <li>Separable: tucked in — <span class="de">aufzustehen, anzurufen, sich anzumelden, zurückzukommen</span></li>
        <li>Inseparable: <span class="de">zu besuchen, zu verlieren, zu erklären</span> (zu in front, no extra ge)</li>
        <li>sein/haben: <span class="de">gesund zu sein, Zeit zu haben</span></li>
      </ul>
      <h3>No zu (memorise the exceptions)</h3>
      <table>
        <tr><th>After …</th><th>Pattern</th></tr>
        <tr><td>modals</td><td><span class="de">Ich kann schwimmen. Sie muss arbeiten.</span></td></tr>
        <tr><td>sehen, hören, lassen, spüren</td><td><span class="de">Ich höre die Kinder spielen. Lassen Sie uns wissen … Ich sehe ihn kommen.</span></td></tr>
        <tr><td>gehen / kommen + activity</td><td><span class="de">Ich gehe schwimmen / einkaufen / schlafen.</span></td></tr>
        <tr><td>bleiben, lernen sometimes with activity</td><td><span class="de">Wir bleiben sitzen. (fixed)</span></td></tr>
        <tr><td>werden (future)</td><td><span class="de">Ich werde anrufen.</span> — infinitive, no zu</td></tr>
      </table>
      <p>Same subject → <span class="de">um … zu</span>. Different subject → <span class="de">damit</span> + full clause: <span class="de">Ich flüstere, damit das Baby schläft.</span> vs <span class="de">Ich flüstere, um das Baby nicht zu wecken.</span> (same subject ich).</p>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Ich versuche, pünktlich zu kommen. Es ist nicht leicht, den Bus zu erwischen.</span></li>
        <li><span class="de">Ich habe vor, nächstes Jahr die Prüfung zu machen.</span></li>
        <li><span class="de">Vergessen Sie nicht, den Antrag zu unterschreiben.</span></li>
        <li><span class="de">Es ist wichtig, regelmäßig Deutsch zu lernen.</span></li>
        <li><span class="de">Ich rufe an, um den Termin zu verschieben.</span></li>
        <li><span class="de">Sie ist gegangen, ohne sich zu verabschieden.</span></li>
        <li><span class="de">Anstatt sich zu beschweren, sollten wir erst mit dem Hausmeister sprechen.</span></li>
        <li><span class="de">Ich finde es unhöflich, so spät abzusagen.</span></li>
        <li><span class="de">Könnten Sie mir helfen, das Formular auszufüllen?</span></li>
        <li><span class="de">Es fällt mir schwer, morgens aufzustehen.</span></li>
        <li><span class="de">Wir haben uns entschieden, die Wohnung zu nehmen.</span></li>
        <li><span class="de">Ich gehe noch schnell einkaufen. Danach versuche ich, dich anzurufen.</span></li>
        <li><span class="de">Lassen Sie uns bitte wissen, ob der Termin passt.</span></li>
        <li><span class="de">Ich lerne abends, damit meine Partnerin tagsüber das Homeoffice nutzen kann.</span></li>
        <li><span class="de">Ich habe keine Lust, noch einmal anzurufen.</span></li>
        <li><span class="de">Statt zu kündigen, sollten wir erst das Gespräch suchen.</span></li>
        <li><span class="de">Sie hat den Raum verlassen, ohne das Licht auszumachen.</span></li>
        <li><span class="de">Wir haben vor, uns nächste Woche zu bewerben.</span></li>
        <li><span class="de">Es ist notwendig, den Antrag vollständig auszufüllen.</span></li>
      </ul>
      <h3>Worked examples — zu / um zu / ohne zu / statt zu</h3>
      <ul>
        <li><span class="de">Ich rufe an, um den Termin zu verschieben.</span> — I am calling in order to postpone the appointment. — Same subject ich → um … zu.</li>
        <li><span class="de">Ich lerne abends, damit meine Partnerin tagsüber das Homeoffice nutzen kann.</span> — I study in the evening so that my partner can use the home office during the day. — New subject → damit, not um zu.</li>
        <li><span class="de">Sie ist gegangen, ohne sich zu verabschieden.</span> — She left without saying goodbye. — ohne … zu + reflexive.</li>
        <li><span class="de">Anstatt sich zu beschweren, sollten wir erst mit dem Hausmeister sprechen.</span> — Instead of complaining, we should first speak to the caretaker. — statt/anstatt … zu.</li>
        <li><span class="de">Es fällt mir schwer, morgens aufzustehen und Sie anzurufen.</span> — I find it hard to get up in the morning and to call you. — zu tucked into separable verbs.</li>
      </ul>
      <h3>Right vs wrong</h3>
      <table>
        <tr><th>Wrong</th><th>Right</th><th>Why</th></tr>
        <tr><td><span class="de">Ich kann zu kommen.</span></td><td><span class="de">Ich kann kommen. / Ich versuche zu kommen.</span></td><td>No zu after a modal.</td></tr>
        <tr><td><span class="de">Ich lerne, um meine Kinder nicht stören.</span></td><td><span class="de">Ich lerne, damit meine Kinder mich nicht stören. / …, um in Ruhe zu lernen.</span></td><td>New subject → damit; um zu needs zu + same subject.</td></tr>
        <tr><td><span class="de">Es ist schwer, zu aufstehen.</span></td><td><span class="de">Es ist schwer, aufzustehen.</span></td><td>zu sits inside the separable verb.</td></tr>
        <tr><td><span class="de">Sie ist gegangen, ohne sie verabschiedet.</span></td><td><span class="de">Sie ist gegangen, ohne sich zu verabschieden.</span></td><td>ohne + zu + infinitive.</td></tr>
        <tr><td><span class="de">Ich gehe zu einkaufen.</span></td><td><span class="de">Ich gehe einkaufen. / Ich versuche einzukaufen.</span></td><td>gehen + activity: no zu.</td></tr>
      </table>
      <h3>Mini letter — Amt</h3>
      <p><span class="de">Sehr geehrte Damen und Herren, ich schreibe, um einen neuen Termin zu vereinbaren. Es ist wichtig, die Unterlagen rechtzeitig einzureichen. Leider bin ich gegangen, ohne die Nummer zu ziehen, weil der Automat defekt war. Anstatt noch einmal zu warten, bitte ich Sie, mir den nächsten freien Termin zu schicken. Mit freundlichen Grüßen</span></p>
      <p>Gloss: I am writing in order to arrange a new appointment. It is important to hand in the documents on time. Unfortunately I left without taking a number because the machine was broken. Instead of waiting again, I ask you to send me the next free appointment.</p>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">Ich versuche zu … Es ist wichtig zu … Ich habe vor zu … um … zu … ohne … zu … anstatt … zu … sich anzumelden · aufzustehen · anzurufen · vergessen zu … Ich gehe schwimmen (kein zu). Lassen Sie uns wissen …</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        No zu after modals, sehen/hören/lassen, gehen + sport/errand. Separable: <span class="de">zu aufstehen</span> is wrong; <span class="de">aufzustehen</span> is right. um zu needs the same subject; if the baby sleeps and you whisper, that is often damit. Comma before zu-clauses is standard when they are long or after es ist … . Sprachbausteine may offer zu vs um vs damit vs dass — pick by subject and meaning (purpose vs content vs result). <span class="de">brauchen</span> in the negative can take zu: <span class="de">Du brauchst nicht zu kommen</span> (you needn’t). Schreiben: one um … zu in a letter is gold; three in a row look mechanical. Sprechen: <span class="de">Ich rufe an, um zu fragen, ob …</span> is a perfect opener.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Write five es ist + adjective + zu sentences about the exam.</li>
        <li>Purpose: two um zu (same subject) and two damit (new subject).</li>
        <li>Use ohne zu and anstatt zu in a short complaint.</li>
        <li>Put zu inside three separable verbs (anrufen, aufstehen, sich anmelden).</li>
        <li>Write three sentences that must NOT have zu (modal, gehen schwimmen, lassen Sie uns wissen).</li>
        <li>Turn “I want a new appointment” into ich würde gerne + zu + infinitive.</li>
        <li>Write one Amt paragraph that uses um zu, ohne zu, and statt zu.</li>
        <li>Correct: Ich kann zu kommen. / zu aufstehen / Ich gehe zu einkaufen / um die Kinder schlafen.</li>
      </ol>
    `,
  },
  {
    id: "passive",
    level: "b1",
    title: "Passive",
    minutes: 54,
    html: `
      <p>B1 Lesen (notices, company mails) and Sprachbausteine use werden + Partizip. You should produce a little in Schreiben when the actor does not matter: <span class="de">Die Heizung wird nächste Woche repariert.</span> Overusing it looks unnatural; one or two process passives are enough.</p>
      <p>Process: <span class="de">werden</span> + Partizip II. Agent optional: <span class="de">von</span> + Dat. State: <span class="de">sein</span> + Partizip — how it is now. Modal: <span class="de">muss / soll / kann … werden</span>.</p>
      <h3>How it works, step by step</h3>
      <ol>
        <li>Start from an active sentence with man or a clear object: <span class="de">Man öffnet die Tür um 9.</span></li>
        <li>Make the object the new subject: <span class="de">Die Tür …</span></li>
        <li>Add the right form of <span class="de">werden</span> in the verb slot, and put the Partizip at the end: <span class="de">Die Tür wird um 9 geöffnet.</span></li>
        <li>Present = wird + Partizip (it happens now / as a rule). Past process = wurde + Partizip (it happened). Perfekt passive = ist … worden.</li>
        <li>Name the agent with <span class="de">von</span> + Dat for a person/company: <span class="de">von der Firma, vom Hausmeister</span>. Use <span class="de">durch</span> for a means or cause: <span class="de">durch einen Sturm, durch einen Fehler</span>.</li>
        <li>State passive uses sein: <span class="de">Der Laden ist geschlossen</span> = it is in the closed state now, not “someone is closing it”.</li>
      </ol>
      <h3>English vs German</h3>
      <p>English “is opened / was opened / has been opened” maps onto wird / wurde / ist … worden — but English “is closed” is often a state, which is German <span class="de">ist geschlossen</span>, not wird geschlossen. English “will come” is werden + infinitive, not passive. English “by” is usually <span class="de">von</span> for people and <span class="de">durch</span> for instruments or impersonal causes. English “he is being helped” keeps he as subject; German dative verbs keep dative: <span class="de">Ihm wird geholfen</span>.</p>
      <h3>Tense sketch</h3>
      <table>
        <tr><th>Tense</th><th>Form</th><th>Example</th></tr>
        <tr><td>Present</td><td>wird + Partizip</td><td><span class="de">Die Tür wird um 9 geöffnet.</span></td></tr>
        <tr><td>Präteritum</td><td>wurde + Partizip</td><td><span class="de">Die Tür wurde um 9 geöffnet.</span></td></tr>
        <tr><td>Perfekt</td><td>ist … worden</td><td><span class="de">Die Tür ist um 9 geöffnet worden.</span></td></tr>
        <tr><td>Modal</td><td>modal + Partizip + werden</td><td><span class="de">Das Formular muss ausgefüllt werden.</span></td></tr>
        <tr><td>State</td><td>ist + Partizip</td><td><span class="de">Der Laden ist geschlossen.</span></td></tr>
      </table>
      <p>werden + infinitive = future, not passive: <span class="de">Er wird kommen</span>. Passive needs a Partizip.</p>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Die Tür wird um 9 Uhr geöffnet. Bitte warten Sie draußen.</span></li>
        <li><span class="de">Das Formular muss vollständig ausgefüllt werden.</span></li>
        <li><span class="de">Die Straße wird seit Montag renoviert. Sie ist deshalb gesperrt.</span></li>
        <li><span class="de">Ihnen wird in Kürze geholfen. Nehmen Sie bitte Platz.</span></li>
        <li><span class="de">Der Termin wurde auf Donnerstag verschoben.</span></li>
        <li><span class="de">Die E-Mail ist gestern abgeschickt worden.</span></li>
        <li><span class="de">Hier darf nicht geraucht werden. Draußen ist Rauchen erlaubt.</span></li>
        <li><span class="de">Die Prüfung wird schriftlich und mündlich abgelegt.</span></li>
        <li><span class="de">Von wem wurde das entschieden? — Vom Betriebsrat.</span></li>
        <li><span class="de">Wenn die Heizung nicht repariert wird, werden wir uns beschweren.</span></li>
        <li><span class="de">Die Ergebnisse können online abgerufen werden.</span></li>
        <li><span class="de">Mein Fahrrad ist gestohlen worden. Ich habe Anzeige erstattet.</span></li>
        <li><span class="de">Die Bestätigung wird Ihnen per Post geschickt.</span></li>
        <li><span class="de">Gestern wurde uns gesagt, der Termin sei frei. Heute ist er schon vergeben.</span></li>
        <li><span class="de">Die Fenster müssen von einer Fachfirma gewechselt werden.</span></li>
        <li><span class="de">Durch einen Stromausfall wurde der Unterricht unterbrochen.</span></li>
        <li><span class="de">Die Küche ist renoviert. Sie wurde im März renoviert.</span></li>
      </ul>
      <h3>Worked examples — werden + Partizip, present vs past, von/durch</h3>
      <ul>
        <li><span class="de">Die Tür wird um 9 Uhr geöffnet.</span> — The door is opened at 9. — Present process: wird + Partizip. Rule or timetable.</li>
        <li><span class="de">Der Termin wurde auf Donnerstag verschoben.</span> — The appointment was postponed to Thursday. — Past process: wurde + Partizip.</li>
        <li><span class="de">Die E-Mail ist gestern abgeschickt worden.</span> — The email was sent yesterday. — Perfekt passive: ist … worden, not geworden.</li>
        <li><span class="de">Die Straße wurde von der Stadt gesperrt. Das Dach wurde durch den Sturm beschädigt.</span> — The street was closed by the city. The roof was damaged by the storm. — von + person/institution; durch + cause/means.</li>
        <li><span class="de">Der Laden ist geschlossen. Er wird um 18 Uhr geschlossen.</span> — The shop is closed (state now). It is closed at 6 (the closing happens then).</li>
      </ul>
      <h3>Right vs wrong</h3>
      <table>
        <tr><th>Wrong</th><th>Right</th><th>Why</th></tr>
        <tr><td><span class="de">Die Tür wird öffnen.</span></td><td><span class="de">Die Tür wird geöffnet. / Er wird kommen.</span></td><td>Passive needs a Partizip; wird + infinitive is future.</td></tr>
        <tr><td><span class="de">Die Mail ist abgeschickt geworden.</span></td><td><span class="de">Die Mail ist abgeschickt worden.</span></td><td>worden = passive Perfekt; geworden = become.</td></tr>
        <tr><td><span class="de">Er wird geholfen.</span></td><td><span class="de">Ihm wird geholfen.</span></td><td>helfen keeps dative.</td></tr>
        <tr><td><span class="de">Die Straße ist von einem Sturm gesperrt. (cause)</span></td><td><span class="de">Die Straße wurde durch einen Sturm / von der Polizei gesperrt.</span></td><td>durch = cause; von = agent.</td></tr>
      </table>
      <h3>Mini notice — Amt / Haus</h3>
      <p><span class="de">Achtung: Das Bürgeramt wird am Freitag um 12 Uhr geschlossen. Anträge müssen bis 11 Uhr abgegeben werden. Die Heizung wird nächste Woche von einer Firma repariert. Der Hof ist wegen Bauarbeiten gesperrt. Hier darf nicht geparkt werden.</span></p>
      <p>Gloss: The citizens’ office will be closed on Friday at 12. Applications must be handed in by 11. The heating will be repaired next week by a company. The yard is closed because of building work. Parking is not allowed here.</p>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">… wird geöffnet / geschlossen / repariert. Das muss … werden. wurde verschoben. ist … worden. Die Straße ist gesperrt. Ihnen wird geholfen. Hier darf nicht … werden.</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        State vs process: <span class="de">ist geschlossen</span> (now shut) vs <span class="de">wird um 18 geschlossen</span> (the closing happens then). Perfekt passive uses <span class="de">worden</span>, not geworden (geworden = become). Dative verbs keep dative: <span class="de">Ihm wird geholfen</span>, not er wird geholfen. man-rewrite is a good check: <span class="de">man öffnet die Tür</span>. Do not force passive in personal letters about your weekend. Sprachbausteine: wurde vs würde vs worden. Schreiben: one process passive in a complaint (<span class="de">Die Heizung wird nicht repariert</span>) is enough. Sprechen: prefer man if the passive form is shaky.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Rewrite five man-sentences as werden-passive.</li>
        <li>Write a notice: hours, repairs, no smoking (mix process and state).</li>
        <li>Use one modal passive in a letter (muss … werden).</li>
        <li>Contrast wird kommen vs wird geöffnet.</li>
        <li>Tell a complaint: the appointment was postponed / nothing has been repaired.</li>
        <li>Write one von-agent and one durch-cause sentence about the same damage.</li>
        <li>Contrast: Der Laden ist geschlossen. vs Der Laden wird um 18 geschlossen.</li>
        <li>Correct: Die Tür wird öffnen. / Die Mail ist geworden abgeschickt. / Er wird geholfen.</li>
      </ol>
    `,
  },
  {
    id: "reflexive",
    level: "b1",
    title: "Reflexive verbs",
    minutes: 48,
    html: `
      <p>German everyday verbs are often reflexive: <span class="de">sich freuen, sich erinnern, sich bewerben, sich anmelden, sich beschweren</span>. telc B1 Schreiben (complaints, applications) and Sprechen (feelings, daily routine) need the right <span class="de">mich/mir</span>. Sprachbausteine tests whether the pronoun is there at all.</p>
      <p>Akk if there is no other object: <span class="de">Ich freue mich. Ich wasche mich.</span> Dat if there is already an Akk object (body part, clothing, thing): <span class="de">Ich wasche mir die Hände. Ich kaufe mir eine Jacke.</span></p>
      <h3>How it works, step by step</h3>
      <ol>
        <li>Learn the verb as a chunk with sich: not bewerben, but <span class="de">sich bewerben um</span>.</li>
        <li>Match the pronoun to the subject: ich → mich/mir, wir → uns, Sie → sich.</li>
        <li>If there is no other object, use accusative reflexive: <span class="de">Ich freue mich. Ich dusche mich.</span></li>
        <li>If a body part, garment, or thing is already the accusative object, the reflexive is dative: <span class="de">Ich wasche mir die Hände. Ich kaufe mir eine Karte.</span></li>
        <li>Word order: the pronoun hugs the conjugated verb: <span class="de">Heute treffe ich mich … / …, weil ich mich bewerbe</span>.</li>
      </ol>
      <h3>English vs German</h3>
      <p>English “I apply / I remember / I complain” has no extra pronoun. German often does. English “I meet him” is <span class="de">Ich treffe ihn</span>; “we meet (each other)” is <span class="de">Wir treffen uns</span> — do not write <em>ich treffe mich ihn</em>. English “I wash my hands” uses a possessive; German prefers dative reflexive + the body part: <span class="de">Ich wasche mir die Hände</span>.</p>
      <h3>Pronouns</h3>
      <table>
        <tr><th></th><th>Akk</th><th>Dat</th></tr>
        <tr><td>ich</td><td><span class="de">mich</span></td><td><span class="de">mir</span></td></tr>
        <tr><td>du</td><td><span class="de">dich</span></td><td><span class="de">dir</span></td></tr>
        <tr><td>er/sie/es</td><td><span class="de">sich</span></td><td><span class="de">sich</span></td></tr>
        <tr><td>wir</td><td><span class="de">uns</span></td><td><span class="de">uns</span></td></tr>
        <tr><td>ihr</td><td><span class="de">euch</span></td><td><span class="de">euch</span></td></tr>
        <tr><td>sie/Sie</td><td><span class="de">sich</span></td><td><span class="de">sich</span></td></tr>
      </table>
      <p>Must-know: <span class="de">sich freuen auf/über, sich interessieren für, sich bewerben um, sich anmelden, sich erinnern an, sich beschweren über, sich fühlen, sich beeilen, sich treffen, sich unterhalten, sich gewöhnen an, sich entscheiden für, sich kümmern um, sich verabreden</span>.</p>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Ich freue mich auf das Wochenende. Ich habe mich über Ihre Mail gefreut.</span></li>
        <li><span class="de">Ich erinnere mich nicht an die Hausnummer. Können Sie sich erinnern?</span></li>
        <li><span class="de">Ich wasche mich. Danach wasche ich mir die Hände noch einmal.</span></li>
        <li><span class="de">Wir treffen uns um 18 Uhr vor dem Kino.</span></li>
        <li><span class="de">Ich möchte mich um die Stelle bewerben und mich online anmelden.</span></li>
        <li><span class="de">Wir haben uns über den Lärm beschwert.</span></li>
        <li><span class="de">Fühlst du dich besser? Ich fühle mich immer noch krank.</span></li>
        <li><span class="de">Beeil dich, sonst kommen wir zu spät.</span></li>
        <li><span class="de">Ich kaufe mir ein Ticket. Kaufst du dir auch eins?</span></li>
        <li><span class="de">Wir haben uns für die kleinere Wohnung entschieden.</span></li>
        <li><span class="de">Können Sie sich bitte um den Schaden kümmern?</span></li>
        <li><span class="de">Ich habe mich an die Schichtarbeit gewöhnt.</span></li>
        <li><span class="de">Wir haben uns für Samstag verabredet. Treffen wir uns vor dem Amt?</span></li>
        <li><span class="de">Ich ziehe mir die Jacke an und kämme mir die Haare.</span></li>
        <li><span class="de">Haben Sie sich schon für den Kurs entschieden?</span></li>
        <li><span class="de">Ich erinnere mich an Ihren Anruf, aber ich erinnere mich nicht an die Uhrzeit.</span></li>
        <li><span class="de">Beeilen Sie sich bitte. Wir müssen uns um 8 am Gleis treffen.</span></li>
      </ul>
      <h3>Worked examples</h3>
      <ul>
        <li><span class="de">Ich möchte mich um die Stelle bewerben und mich online anmelden.</span> — I would like to apply for the post and register online. — both verbs need sich; um + Akk belongs to bewerben.</li>
        <li><span class="de">Ich wasche mich. Danach wasche ich mir die Hände.</span> — I wash (myself). Then I wash my hands. — no other object → mich; body part already Akk → mir.</li>
        <li><span class="de">Wir haben uns über den Lärm beschwert.</span> — We complained about the noise. — sich beschweren über + Akk.</li>
        <li><span class="de">Können Sie sich bitte um den Schaden kümmern?</span> — Could you please take care of the damage? — sich kümmern um.</li>
      </ul>
      <h3>Right vs wrong</h3>
      <table>
        <tr><th>Wrong</th><th>Right</th><th>Why</th></tr>
        <tr><td><span class="de">Ich bewerbe um die Stelle.</span></td><td><span class="de">Ich bewerbe mich um die Stelle.</span></td><td>Missing sich.</td></tr>
        <tr><td><span class="de">Ich treffe mich ihn um 6.</span></td><td><span class="de">Ich treffe ihn um 6. / Wir treffen uns um 6.</span></td><td>Do not mix sich + a second person object.</td></tr>
        <tr><td><span class="de">Ich wasche mich die Hände.</span></td><td><span class="de">Ich wasche mir die Hände.</span></td><td>Body part = dative reflexive.</td></tr>
        <tr><td><span class="de">Heute ich mich treffe vor dem Amt.</span></td><td><span class="de">Heute treffe ich mich vor dem Amt.</span></td><td>Verb second; pronoun after the verb.</td></tr>
      </table>
      <h3>Mini letter — Bewerbung</h3>
      <p><span class="de">Sehr geehrte Frau Lorenz, ich bewerbe mich um die Teilzeitstelle in Ihrem Team. Ich möchte mich kurz vorstellen: ich arbeite seit zwei Jahren im Verkauf und habe mich an unregelmäßige Schichten gewöhnt. Über eine Einladung zum Gespräch würde ich mich sehr freuen. Mit freundlichen Grüßen</span></p>
      <p>Gloss: I am applying for the part-time post. I would like to introduce myself: I have been working in sales for two years and have got used to irregular shifts. I would be very pleased about an invitation to an interview.</p>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">Ich freue mich auf/über … Ich erinnere mich an … Ich bewerbe mich um … Ich melde mich an. Wir treffen uns … Wir beschweren uns über … Ich wasche mir die Hände. Beeil dich! Ich fühle mich …</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        Missing sich is a typical gap: <span class="de">Ich bewerbe um</span> is incomplete. <span class="de">sich treffen</span> needs a place/time, not “I meet him” with sich plus a second Akk of the same person — <span class="de">Ich treffe ihn</span> vs <span class="de">Wir treffen uns</span>. mir/mich: if a body part or garment is the object, use dative reflexive. Word order: pronoun hugs the verb: <span class="de">Heute treffe ich mich …</span> In weil: <span class="de">weil ich mich bewerbe</span>. Sprachbausteine: the tiny gap is often mich/mir/sich. Schreiben: every Bewerbung needs sich bewerben / sich vorstellen / sich freuen. Sprechen: <span class="de">Ich fühle mich …</span> is the feelings question.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Daily routine with three reflexives (aufstehen is separable, not reflexive — add sich duschen, sich anziehen).</li>
        <li>Write an application line: sich bewerben, sich vorstellen, sich anmelden.</li>
        <li>Contrast mich vs mir with waschen and kaufen.</li>
        <li>Complaint: we met, we complained, we have not heard back.</li>
        <li>Feelings: freuen auf, sich fühlen, sich gewöhnen an.</li>
        <li>Write five chunks with the matching preposition (auf, über, um, an, für).</li>
        <li>Correct: Ich bewerbe um die Stelle. / Ich wasche mich die Hände. / Ich treffe mich ihn.</li>
      </ol>
    `,
  },
  {
    id: "k1",
    level: "b2",
    title: "B2: Konjunktiv I (indirect speech)",
    minutes: 48,
    html: `
      <p>Newspapers report speech with Konjunktiv I: <span class="de">er sei, sie habe, sie komme, sie würden</span>. For telc B1 you only need to <strong>recognise</strong> this in Lesen (a quote is not a proven fact). For B2 you produce it in summaries. Do not use it for politeness — that is Konjunktiv II.</p>
      <p>If Konjunktiv I looks identical to the indicative (wir haben, sie haben), German switches to Konjunktiv II: <span class="de">sie hätten</span>, not sie haben, so the reader still hears “reported”.</p>
      <h3>How it works, step by step</h3>
      <ol>
        <li>Spot a reporting verb or signal: <span class="de">sagte, erklärte, behauptet, laut, in dem Artikel steht</span>.</li>
        <li>The next verb may be Konjunktiv I: <span class="de">sei, habe, werde, komme, gehe</span>. That means “this is what they said”, not “this is a proven fact”.</li>
        <li>If the K I form looks like normal present (<span class="de">sie haben</span>), writers switch to K II (<span class="de">sie hätten</span>) so you still hear “reported”.</li>
        <li>Do not copy sei into a polite letter. Politeness is <span class="de">wäre / könnte / würde</span>.</li>
        <li>In a true/false item, a reported claim can make a statement false if the task asks what is definitely true.</li>
      </ol>
      <h3>English vs German</h3>
      <p>English reported speech often just shifts tense (“She said the problem was solved”). German can keep the same tense and mark the report with Konjunktiv I. English “if I were” is not sei — that is wäre (K II). English “he is said to be ill” is closer to subjective <span class="de">soll</span> than to K I, but Lesen treats both as “not yet proven”.</p>
      <h3>Recognition table</h3>
      <table>
        <tr><th></th><th>sein</th><th>haben</th><th>typical weak verb</th></tr>
        <tr><td>er/sie/es (the important one)</td><td><span class="de">sei</span></td><td><span class="de">habe</span></td><td><span class="de">komme, gehe, sage</span></td></tr>
        <tr><td>sie (pl) if same as indicative</td><td><span class="de">seien</span></td><td><span class="de">hätten</span> (K II substitute)</td><td>often <span class="de">würden + inf</span></td></tr>
      </table>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Die Ministerin sagte, das Problem sei gelöst.</span></li>
        <li><span class="de">Der Sprecher erklärte, man habe genug Geld.</span></li>
        <li><span class="de">Die Firma teilt mit, die Filiale werde im Juni geschlossen.</span></li>
        <li><span class="de">Er behauptet, er habe nichts gesehen. (doubt is in behauptet)</span></li>
        <li><span class="de">Die Nachbarn sagten, der Lärm komme jedes Wochenende von der Bar.</span></li>
        <li><span class="de">Laut E-Mail seien alle Plätze schon vergeben.</span></li>
        <li><span class="de">Sie sagten, sie hätten den Brief nie bekommen.</span></li>
        <li><span class="de">Der Arzt meinte, ich solle mehr trinken und mich schonen.</span></li>
        <li><span class="de">In dem Artikel steht, die Mieten stiegen weiter.</span></li>
        <li><span class="de">Er sagte, er komme später. Ob das stimmt, wissen wir nicht.</span></li>
        <li><span class="de">Die Schule teilt mit, der Ausflug falle wegen des Wetters aus.</span></li>
        <li><span class="de">Laut Aushang seien die Öffnungszeiten geändert worden.</span></li>
        <li><span class="de">Sie behauptet, sie habe den Schlüssel nie bekommen.</span></li>
        <li><span class="de">Der Vermieter erklärte, die Heizung werde noch diese Woche repariert.</span></li>
      </ul>
      <h3>Worked examples</h3>
      <ul>
        <li><span class="de">Die Ministerin sagte, das Problem sei gelöst.</span> — The minister said the problem was solved. — sei = reported, not proven.</li>
        <li><span class="de">Sie sagten, sie hätten den Brief nie bekommen.</span> — They said they had never received the letter. — hätten replaces haben so you still hear “reported”.</li>
        <li><span class="de">Der Arzt meinte, ich solle mehr trinken.</span> — The doctor said I should drink more. — solle is reported advice, not your own sollte in a letter of request.</li>
        <li><span class="de">Laut E-Mail seien alle Plätze schon vergeben.</span> — According to the email all places are already taken. — Laut + K I = treat as a claim.</li>
      </ul>
      <h3>Right vs wrong</h3>
      <table>
        <tr><th>Wrong use</th><th>Right</th><th>Why</th></tr>
        <tr><td><span class="de">Könnten Sie so nett sei und …</span></td><td><span class="de">Es wäre nett, wenn Sie …</span></td><td>sei is not politeness.</td></tr>
        <tr><td>True/false: “The problem is solved” after sagte, sei gelöst</td><td>Not proven — only reported</td><td>Lesen: claim ≠ fact.</td></tr>
        <tr><td><span class="de">Wenn ich Sie sei, …</span></td><td><span class="de">Wenn ich Sie wäre, …</span></td><td>Unreal = K II wäre.</td></tr>
      </table>
      <h3>Mini news snippet (Lesen skill)</h3>
      <p><span class="de">Der Sprecher der Stadt erklärte, die Straße werde nächste Woche gesperrt. Anwohner sagten, sie hätten davon nichts gewusst. Ob die Umleitung wirklich funktioniert, ist noch unklar.</span></p>
      <p>Gloss: The city spokesman said the street would be closed next week. Residents said they had known nothing about it. Whether the diversion really works is still unclear. — Two reports, one open question. None of this is a hard fact yet.</p>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">… sagte, … sei / habe / werde / komme. Laut … seien … Sie sagten, sie hätten … Für B1 Lesen: das ist behauptet, nicht bewiesen.</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        Konjunktiv I is not a polite request. <span class="de">sei</span> is not subjunctive English “if I were” (that is wäre). In B1 true/false, a reported claim can make a statement false if the task asks what is definitely true. Substitute K II (hätten, würden) still means reported speech. Do not invent full K I paradigms for the oral exam. Sprachbausteine: sei vs wäre vs ist. Schreiben: never open a complaint with sei. Sprechen: if you hear sei in a partner text, treat it as “they said”.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Take three quotes and rewrite them with sagte, … sei/habe.</li>
        <li>Read a news sentence and mark whether it is fact or report.</li>
        <li>Explain in English why hätten might appear instead of haben.</li>
        <li>Do not use K I in your B1 letter — rewrite any accidental sei as wäre if you meant politeness.</li>
        <li>Contrast: Er ist krank. / Er sei krank. / Er soll krank sein. / Er wäre gern gesund.</li>
        <li>In a Lesen item, underline every reporting verb before you answer true/false.</li>
      </ol>
    `,
  },
  {
    id: "nominal",
    level: "b2",
    title: "B2: Nominalisation",
    minutes: 48,
    html: `
      <p>B2 texts pack verbs into nouns: <span class="de">entscheiden → die Entscheidung; entwickeln → die Entwicklung; teilnehmen → die Teilnahme</span>. Useful for Lesen at B1 already: if you see <span class="de">die Lösung des Problems</span>, unpack it as <span class="de">man löst das Problem</span>. Sprachbausteine sometimes wants a noun where you expected a weil-clause.</p>
      <p>Typical signals: <span class="de">-ung, -heit, -keit, -tion, -schaft, Ge- + -e, das + infinitive</span>. Prepositions shift: weil → <span class="de">wegen</span> + genitive; wenn → <span class="de">bei</span>; nachdem → <span class="de">nach</span>; um zu → <span class="de">zur / zum</span> + noun.</p>
      <h3>How it works, step by step</h3>
      <ol>
        <li>Find the noun ending: -ung, -heit, -keit, -tion, -schaft, or a bare infinitive used as a noun (<span class="de">das Ausfüllen</span>).</li>
        <li>Name the hidden verb: Entscheidung → entscheiden, Teilnahme → teilnehmen, Erhöhung → erhöhen.</li>
        <li>Unpack the preposition: wegen ≈ weil, bei ≈ wenn, nach ≈ nachdem, zur/zum ≈ um zu.</li>
        <li>The “owner” is often genitive: <span class="de">die Lösung des Problems</span> = man löst das Problem.</li>
        <li>In a friend letter, unpack officialese back into simple clauses. In Lesen, do the reverse so headings make sense.</li>
      </ol>
      <h3>English vs German</h3>
      <p>English also packs verbs (“the decision of the company”), but German does it more, and the packed form often takes genitive where English uses of. English “after receiving your mail” is a participle; German official style uses <span class="de">nach Erhalt Ihrer Mail</span>. English learners invent -ung on every verb; only existing nouns count.</p>
      <h3>Unpack table</h3>
      <table>
        <tr><th>Noun phrase</th><th>Clause meaning</th></tr>
        <tr><td><span class="de">wegen der Erhöhung der Miete</span></td><td><span class="de">weil die Miete steigt / erhöht wird</span></td></tr>
        <tr><td><span class="de">nach Erhalt Ihrer Mail</span></td><td><span class="de">nachdem ich Ihre Mail bekommen habe</span></td></tr>
        <tr><td><span class="de">bei Krankheit</span></td><td><span class="de">wenn man krank ist</span></td></tr>
        <tr><td><span class="de">zur Verbesserung der Lage</span></td><td><span class="de">um die Lage zu verbessern</span></td></tr>
        <tr><td><span class="de">die Teilnahme am Kurs</span></td><td><span class="de">dass man am Kurs teilnimmt</span></td></tr>
      </table>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Wegen der Erhöhung der Miete suchen wir eine kleinere Wohnung.</span></li>
        <li><span class="de">Die Entscheidung der Firma hat uns überrascht.</span></li>
        <li><span class="de">Nach der Anmeldung bekommen Sie eine Bestätigung.</span></li>
        <li><span class="de">Bei Fragen können Sie uns jederzeit anrufen.</span></li>
        <li><span class="de">Zur Lösung des Problems brauchen wir mehr Zeit.</span></li>
        <li><span class="de">Die Entwicklung der Preise macht vielen Familien Sorgen.</span></li>
        <li><span class="de">Trotz der Verspätung des Zuges sind wir noch rechtzeitig angekommen.</span></li>
        <li><span class="de">Das Ausfüllen des Formulars dauert nur fünf Minuten.</span></li>
        <li><span class="de">Ohne schriftliche Begründung können wir nichts ändern.</span></li>
        <li><span class="de">Die Schließung der Filiale ärgert die Kunden im Viertel.</span></li>
        <li><span class="de">Bei Verspätung des Zuges rufen Sie uns bitte an.</span></li>
        <li><span class="de">Nach der Kündigung der Wohnung haben wir drei Monate Zeit.</span></li>
        <li><span class="de">Zur Vorbereitung auf die Prüfung lerne ich jeden Abend.</span></li>
        <li><span class="de">Die Bearbeitung des Antrags dauert in der Regel zwei Wochen.</span></li>
        <li><span class="de">Trotz der Ablehnung unserer Bitte schreiben wir noch einmal.</span></li>
      </ul>
      <h3>Worked examples</h3>
      <ul>
        <li><span class="de">Wegen der Erhöhung der Miete suchen wir eine kleinere Wohnung.</span> — Because of the rent increase we are looking for a smaller flat. — wegen + genitive unpacks to weil die Miete erhöht wird.</li>
        <li><span class="de">Nach der Anmeldung bekommen Sie eine Bestätigung.</span> — After registration you will receive a confirmation. — nach + noun ≈ nachdem Sie sich angemeldet haben.</li>
        <li><span class="de">Zur Lösung des Problems brauchen wir mehr Zeit.</span> — To solve the problem we need more time. — zur + noun ≈ um das Problem zu lösen.</li>
        <li><span class="de">Das Ausfüllen des Formulars dauert nur fünf Minuten.</span> — Filling in the form takes only five minutes. — das + infinitive as a noun; des Formulars is genitive.</li>
      </ul>
      <h3>Right vs wrong</h3>
      <table>
        <tr><th>Wrong</th><th>Right</th><th>Why</th></tr>
        <tr><td><span class="de">wegen die Erhöhung die Miete</span></td><td><span class="de">wegen der Erhöhung der Miete</span></td><td>wegen + genitive; owner also genitive.</td></tr>
        <tr><td>Friend letter packed with Erhalt/Teilnahme/Begründung</td><td>Unpack: nachdem ich … bekommen habe</td><td>B1 friend letters should stay verbal.</td></tr>
        <tr><td>Invented: die Kommenung</td><td><span class="de">die Ankunft / dass er kommt</span></td><td>Only real nouns.</td></tr>
      </table>
      <h3>Mini Amt sentence vs B1 rewrite</h3>
      <p>Official: <span class="de">Nach Erhalt Ihrer Unterlagen erfolgt die Bearbeitung zur Entscheidung über die Teilnahme.</span></p>
      <p>B1: <span class="de">Nachdem wir Ihre Unterlagen bekommen haben, bearbeiten wir sie. Dann entscheiden wir, ob Sie teilnehmen können.</span></p>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">wegen + Gen · nach Erhalt · bei Fragen / bei Krankheit · zur Verbesserung · die Entscheidung · die Teilnahme an · das Ausfüllen · trotz der Verspätung</span>. Unpack nouns back into verbs when reading.</p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        A noun phrase is not automatically genitive on every word — only the “owner” is: <span class="de">die Lösung des Problems</span>. B1 Schreiben should not imitate officialese for a friend letter. Lesen: the heading may use a noun, the paragraph uses the verb (or the reverse). Do not invent -ung on every English word. Sprachbausteine: the gap may be wegen/bei/nach/zur where you wanted weil/wenn. Sprechen: unpack; do not perform B2 style aloud.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Unpack five -ung phrases from a B1 reading into weil/dass/wenn clauses.</li>
        <li>Pack five of your own clauses into wegen/nach/bei/zur + noun (for recognition practice).</li>
        <li>Rewrite an official sentence in simple B1 German, then compare.</li>
        <li>Spot three nominalisations in a news paragraph and name the hidden verb.</li>
        <li>Turn zur Verbesserung / bei Krankheit / nach der Anmeldung back into um zu / wenn / nachdem.</li>
        <li>Write a friend letter that avoids official nouns, then a formal line that uses one on purpose.</li>
      </ol>
    `,
  },
  {
    id: "advconn",
    level: "b2",
    title: "B2: Advanced connectors",
    minutes: 52,
    html: `
      <p>These connectors appear in B1 Lesen already and in stronger Schreiben. You do not need all of them in the oral exam, but recognising verb-last vs verb-second here prevents Sprachbausteine disasters. Use two or three in a formal B1 letter if they fit; do not sprinkle them for decoration.</p>
      <h3>How it works, step by step</h3>
      <ol>
        <li>First decide the family: verb last (subordinating) or verb second (adverb in slot 1). A wrong family is a wrong answer even if the meaning is close.</li>
        <li>Verb last: <span class="de">indem, sodass, zumal, sofern, während, wodurch, obwohl, damit</span>.</li>
        <li>Verb second: <span class="de">dennoch, infolgedessen, hingegen, stattdessen, allerdings, daher, folglich, vielmehr</span>.</li>
        <li><span class="de">je … desto</span> is special: both halves have verb second and a comparative adjective.</li>
        <li>If you cannot control the slot, use a connector you already own (weil, deshalb, obwohl). A correct weil beats a broken zumal.</li>
      </ol>
      <h3>English vs German</h3>
      <p>English “by doing” is <span class="de">indem</span> + verb last, not in dem. English “the more … the more” is <span class="de">je … desto</span> with inversion in both halves. English “however / nevertheless” often sits in the middle; German <span class="de">dennoch / allerdings</span> usually take slot 1. English “while” is both time and contrast — same as <span class="de">während</span>.</p>
      <h3>Verb last</h3>
      <p><span class="de">sofern, zumal, während</span> (whereas), <span class="de">indem, wodurch, sodass, je … desto, damit, obwohl</span> you already know.</p>
      <h3>Verb second (the connector takes slot 1)</h3>
      <p><span class="de">dennoch, infolgedessen, hingegen, stattdessen, vielmehr, allerdings, daher, folglich</span>.</p>
      <table>
        <tr><th>Connector</th><th>Job</th><th>Example</th></tr>
        <tr><td><span class="de">je … desto</span></td><td>the more … the more (both adjectives in comparative; verb second in each half)</td><td><span class="de">Je mehr ich lerne, desto sicherer werde ich.</span></td></tr>
        <tr><td><span class="de">indem</span></td><td>by doing (method)</td><td><span class="de">Ich spare, indem ich weniger Auto fahre.</span></td></tr>
        <tr><td><span class="de">während</span></td><td>while OR whereas</td><td><span class="de">Während ich arbeite, schlafen die Kinder. / Die Stadt ist teuer, während das Dorf ruhig ist.</span></td></tr>
        <tr><td><span class="de">dennoch</span></td><td>even so (like trotzdem, more written)</td><td><span class="de">Die Stadt ist teuer. Dennoch bleibt sie beliebt.</span></td></tr>
        <tr><td><span class="de">hingegen / stattdessen</span></td><td>on the other hand / instead</td><td><span class="de">Ich nehme nicht den Zug. Stattdessen fahre ich mit dem Bus.</span></td></tr>
        <tr><td><span class="de">zumal</span></td><td>especially since</td><td><span class="de">Wir sollten absagen, zumal das Wetter schlecht ist.</span></td></tr>
        <tr><td><span class="de">sofern</span></td><td>provided that</td><td><span class="de">Ich komme, sofern der Zug pünktlich ist.</span></td></tr>
      </table>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Je früher wir uns beschweren, desto größer ist die Chance auf eine Lösung.</span></li>
        <li><span class="de">Man spart Zeit, indem man die Unterlagen vorher hochlädt.</span></li>
        <li><span class="de">Die Miete ist gestiegen. Infolgedessen suchen viele eine WG.</span></li>
        <li><span class="de">Ich wollte kündigen. Vielmehr möchte ich erst das Gespräch suchen.</span></li>
        <li><span class="de">Der Kurs ist abends, wodurch Berufstätige teilnehmen können.</span></li>
        <li><span class="de">Allerdings ist der Raum klein, sodass wir uns auf 12 Personen einigen sollten.</span></li>
        <li><span class="de">Hingegen ist das Angebot am Stadtrand deutlich günstiger.</span></li>
        <li><span class="de">Ich unterschreibe, sofern die Klausel zu den Nebenkosten klar ist.</span></li>
        <li><span class="de">Wir bleiben, zumal eine Alternative kurzfristig kaum zu finden ist.</span></li>
        <li><span class="de">Er erklärt alles sehr schnell, wodurch einige Teilnehmer den Anschluss verlieren.</span></li>
        <li><span class="de">Daher schlage ich vor, dass wir uns schriftlich beschweren.</span></li>
        <li><span class="de">Folglich müssen wir den Termin verschieben.</span></li>
        <li><span class="de">Während die Stadt laut ist, bleibt das Dorf ruhig.</span></li>
        <li><span class="de">Ich kündige nicht. Vielmehr möchte ich erst eine Lösung finden.</span></li>
        <li><span class="de">Je teurer die Miete wird, desto weiter nach draußen ziehen die Familien.</span></li>
      </ul>
      <h3>Worked examples</h3>
      <ul>
        <li><span class="de">Je früher wir uns beschweren, desto größer ist die Chance auf eine Lösung.</span> — The earlier we complain, the greater the chance of a solution. — verb second in both halves; comparatives früher / größer.</li>
        <li><span class="de">Man spart Zeit, indem man die Unterlagen vorher hochlädt.</span> — You save time by uploading the documents beforehand. — indem = by doing, verb last.</li>
        <li><span class="de">Die Miete ist gestiegen. Infolgedessen suchen viele eine WG.</span> — The rent has risen. As a result many people look for a shared flat. — infolgedessen takes slot 1.</li>
        <li><span class="de">Ich unterschreibe, sofern die Klausel klar ist. Allerdings ist der Raum klein.</span> — I will sign provided the clause is clear. However, the room is small. — sofern verb last; allerdings slot 1.</li>
      </ul>
      <h3>Right vs wrong</h3>
      <table>
        <tr><th>Wrong</th><th>Right</th><th>Why</th></tr>
        <tr><td><span class="de">Je mehr ich lerne, desto ich werde sicherer.</span></td><td><span class="de">Je mehr ich lerne, desto sicherer werde ich.</span></td><td>Both halves invert.</td></tr>
        <tr><td><span class="de">Ich spare, indem ich fahre weniger Auto. (verb second after indem)</span></td><td><span class="de">Ich spare, indem ich weniger Auto fahre.</span></td><td>indem = verb last.</td></tr>
        <tr><td><span class="de">Dennoch ich bleibe.</span></td><td><span class="de">Dennoch bleibe ich.</span></td><td>dennoch occupies slot 1.</td></tr>
      </table>
      <h3>Mini letter — opinion to a friend (careful B1+)</h3>
      <p><span class="de">Liebe Anna, je länger ich über die WG nachdenke, desto unsicherer bin ich. Die Lage ist gut. Allerdings ist das Zimmer klein, sodass ich kaum einen Schreibtisch hätte. Stattdessen könnte ich eine Wohnung am Stadtrand nehmen, zumal sie ruhiger ist. Ich komme, sofern du am Samstag Zeit hast.</span></p>
      <p>Gloss: The longer I think about the shared flat, the less sure I am. The location is good. However the room is small, so I would hardly have a desk. Instead I could take a flat on the edge of town, especially since it is quieter. I’ll come provided you have time on Saturday.</p>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">Je mehr …, desto … indem … während … dennoch … stattdessen … allerdings … infolgedessen … sofern … zumal … sodass …</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        <span class="de">je … desto</span>: verb second in both halves, comparatives on the adjectives. <span class="de">während</span> is not nur “while time” — it can contrast. <span class="de">indem</span> is not “in that” English filler; it means by means of. dennoch/trotzdem take position 1. Do not use B2 connectors if you cannot control the verb slot — a correct weil beats a broken zumal. Sprachbausteine: look at the verb position already printed. Schreiben: two advanced connectors in a formal letter are enough. Sprechen: stay with deshalb / trotzdem / obwohl unless you are sure.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Write two je … desto sentences about learning and about rent.</li>
        <li>Explain how you save money indem …</li>
        <li>Contrast two options with während or hingegen plus stattdessen.</li>
        <li>Add allerdings and dennoch to a short opinion.</li>
        <li>Rewrite a trotzdem sentence as obwohl and as dennoch.</li>
        <li>Write sofern and zumal in two formal lines about a contract.</li>
        <li>Correct: Dennoch ich bleibe. / Je mehr ich lerne, desto ich werde sicher. / indem ich fahre weniger.</li>
      </ol>
    `,
  },
  {
    id: "subjmodals",
    level: "b2",
    title: "B2: Subjective modals (rumour / deduction)",
    minutes: 48,
    html: `
      <p>Same modal verbs, new meaning: not ability/permission, but the speaker’s attitude to a claim. B1 Lesen already uses this in messages and news. You rarely need to produce it at B1; you must not misread it as a normal modal. <span class="de">Er soll krank sein</span> is not “he is supposed to get ill as a duty” — it is “they say he is ill”.</p>
      <h3>How it works, step by step</h3>
      <ol>
        <li>Ask: is this a rule/ability, or a claim about what is true? Rules stay objective. Claims about rumours and deductions are subjective.</li>
        <li><span class="de">soll + infinitive</span> in a report = they say / it is said: <span class="de">Er soll krank sein.</span></li>
        <li><span class="de">sollte / sollten</span> is usually advice or a softer duty: <span class="de">Sie sollten den Hausmeister informieren.</span> In a report it can also be a careful “it is said that … would …”. Context decides.</li>
        <li><span class="de">müsste</span> in a report is a logical deduction (“it would have to be / it must be, I infer”): <span class="de">Das müsste ein Irrtum sein.</span> Softer than muss.</li>
        <li>Past rumour: infinitive + sein/haben at the end: <span class="de">Er soll gestern angekommen sein. Sie will das nicht gesagt haben.</span></li>
        <li>True/false: a rumour is not a confirmed fact. Do not tick “he is ill” if the text only says er soll krank sein.</li>
      </ol>
      <h3>English vs German</h3>
      <p>English “is said to / is supposed to / must be / might be” are different verbs. German recycles the same modals. English “should” is almost always advice (<span class="de">sollte</span>); German <span class="de">soll</span> in a news line is rumour. English “he will have seen it” (deduction) is often <span class="de">Er muss / müsste es gesehen haben</span>. English “she claims she didn’t see anything” is <span class="de">Sie will nichts gesehen haben</span> — will is not “wants to” here.</p>
      <h3>Attitude map</h3>
      <table>
        <tr><th>Modal</th><th>Subjective meaning</th><th>Example</th></tr>
        <tr><td><span class="de">soll</span></td><td>they say / rumour</td><td><span class="de">Er soll krank sein.</span></td></tr>
        <tr><td><span class="de">will</span></td><td>claims (speaker doubts it)</td><td><span class="de">Sie will nichts gesehen haben.</span></td></tr>
        <tr><td><span class="de">muss</span></td><td>logical certainty</td><td><span class="de">Das muss ein Irrtum sein.</span></td></tr>
        <tr><td><span class="de">kann / könnte</span></td><td>possibility</td><td><span class="de">Das könnte stimmen.</span></td></tr>
        <tr><td><span class="de">dürfte</span></td><td>probably (careful estimate)</td><td><span class="de">Das dürfte teuer werden.</span></td></tr>
        <tr><td><span class="de">mag</span></td><td>may well (concessive)</td><td><span class="de">Das mag sein, aber …</span></td></tr>
      </table>
      <p>Past rumour/claim often uses infinitive + haben/sein at the end: <span class="de">Er soll gestern angekommen sein. Sie will das nicht gesagt haben.</span></p>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Er soll krank sein. Ob das stimmt, weiß ich nicht.</span></li>
        <li><span class="de">Sie will nichts gesehen haben. Die Kamera zeigt aber etwas anderes.</span></li>
        <li><span class="de">Das muss ein Irrtum sein. Ich habe die Miete schon überwiesen.</span></li>
        <li><span class="de">Der Zug könnte Verspätung haben. Wir sollten früher los.</span></li>
        <li><span class="de">Die Wohnung soll sehr laut sein. Deshalb schauen wir sie abends an.</span></li>
        <li><span class="de">Er will den Brief abgeschickt haben. Angekommen ist er nicht.</span></li>
        <li><span class="de">Das dürfte für uns zu teuer sein.</span></li>
        <li><span class="de">Man soll hier nicht fotografieren. (this one is still a rule! context)</span></li>
        <li><span class="de">Sie muss die Nachricht schon gelesen haben. Sie ist online.</span></li>
        <li><span class="de">Das mag unbequem sein, aber es ist fair.</span></li>
        <li><span class="de">Der Kurs soll schon voll sein. Das müsste man aber noch prüfen.</span></li>
        <li><span class="de">Die Reparatur sollte gestern fertig gewesen sein. Der Keller ist aber noch nass.</span></li>
        <li><span class="de">Sie will den Antrag schon abgegeben haben. Im System steht nichts.</span></li>
        <li><span class="de">Das dürfte die richtige Haltestelle sein — der Name passt.</span></li>
        <li><span class="de">Er muss den Zug verpasst haben. Sonst ist er nie so spät.</span></li>
      </ul>
      <h3>Exam killers in reports: soll / sollte / müsste</h3>
      <table>
        <tr><th>Form</th><th>In a report</th><th>Not a report</th></tr>
        <tr><td><span class="de">soll + inf</span></td><td>rumour: <span class="de">Der Nachbar soll umgezogen sein.</span> (they say he has moved)</td><td>instruction: <span class="de">Sie sollen im Flur warten.</span></td></tr>
        <tr><td><span class="de">sollte / sollten</span></td><td>careful reported expectation: <span class="de">Die Reparatur sollte diese Woche fertig sein.</span> (it is supposed to be done — we are not sure)</td><td>advice: <span class="de">Sie sollten den Hausmeister informieren.</span></td></tr>
        <tr><td><span class="de">müsste</span></td><td>inference: <span class="de">Das müsste die neue Rechnung sein.</span> (I deduce it is)</td><td>unreal duty: <span class="de">Ich müsste früher kommen, wenn ich Zeit hätte.</span></td></tr>
      </table>
      <p>Gloss the report uses: they say he has moved / the repair is supposed to be finished this week / that would have to be the new bill. In Lesen, none of these three is a hard fact.</p>
      <h3>Worked examples</h3>
      <ul>
        <li><span class="de">Die Wohnung soll sehr laut sein. Deshalb schauen wir sie abends an.</span> — The flat is said to be very noisy. That is why we will view it in the evening. — soll = rumour, not a duty to be loud.</li>
        <li><span class="de">Er will den Brief abgeschickt haben. Angekommen ist er nicht.</span> — He claims to have sent the letter. It has not arrived. — will + past infinitive = doubtful claim.</li>
        <li><span class="de">Das müsste ein Irrtum sein. Die Miete ist schon da.</span> — That would have to be a mistake. The rent is already there. — müsste = soft deduction.</li>
        <li><span class="de">Man soll hier nicht fotografieren.</span> — You are not supposed to take photos here. — still a rule, because man + place rule. Contrast: <span class="de">Er soll hier fotografiert haben</span> = they say he took photos here.</li>
      </ul>
      <h3>Right vs wrong (Lesen logic)</h3>
      <table>
        <tr><th>Text</th><th>False conclusion</th><th>Safe conclusion</th></tr>
        <tr><td><span class="de">Er soll krank sein.</span></td><td>He is ill. (fact)</td><td>People say he is ill.</td></tr>
        <tr><td><span class="de">Sie will nichts gesehen haben.</span></td><td>She saw nothing. (fact)</td><td>She claims she saw nothing.</td></tr>
        <tr><td><span class="de">Das müsste die richtige Adresse sein.</span></td><td>This is definitely the address.</td><td>The speaker infers it is probably the address.</td></tr>
        <tr><td><span class="de">Sie sollen im Flur warten.</span></td><td>Rumour that they are waiting</td><td>Instruction: wait in the corridor.</td></tr>
      </table>
      <h3>Mini news snippet</h3>
      <p><span class="de">Der Hausmeister soll die Heizung schon repariert haben. Mieter sagen, das könne nicht stimmen, die Wohnung sei noch kalt. Das müsste man nachprüfen. Die Verwaltung sollte sich dazu heute äußern.</span></p>
      <p>Gloss: The caretaker is said to have already repaired the heating. Tenants say that cannot be true; the flat is still cold. That would have to be checked. The management is supposed to comment on it today. — Chain of rumour, claim, inference, expectation. Nothing is proven.</p>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p><span class="de">soll = man sagt · sollte = soll wohl / Rat · müsste = logisch, etwas weicher als muss · will = behauptet (Zweifel) · muss = logisch · könnte = vielleicht · … gewesen sein / … gemacht haben. Das mag sein, aber …</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        Context decides: <span class="de">Sie sollen im Flur warten</span> is an instruction; <span class="de">Er soll im Flur warten</span> in a gossip text may be rumour. Look at who is speaking. <span class="de">will</span> as “wants to” vs “claims to” — a second clause of doubt is the clue. True/false items: a rumour is not a confirmed fact. Do not produce subjective will in your own B1 letter; it sounds accusatory. Sprachbausteine: soll vs sollte vs müsste vs muss. Schreiben: keep soll as instruction (“please wait”); do not write gossip. Sprechen: if you report a rumour, add <span class="de">man sagt / ich weiß nicht, ob das stimmt</span> so the examiner hears that you know it is not a fact.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Rewrite four facts as rumours with soll … sein/haben.</li>
        <li>Write a deduction with muss and a softer one with könnte / müsste.</li>
        <li>Contrast instruction sollen vs rumour soll using the same verb.</li>
        <li>Mark subjective modals in a short news paragraph.</li>
        <li>Write three report lines: soll (rumour), sollte (expectation), müsste (inference).</li>
        <li>True/false drill: Er soll krank sein. — Is he ill? Answer in one sentence.</li>
        <li>Contrast: Sie will nach Hause. vs Sie will nichts gesehen haben.</li>
      </ol>
    `,
  },
  {
    id: "partizip",
    level: "b2",
    title: "B2: Participles as adjectives",
    minutes: 48,
    html: `
      <p>This is how denser German packs relative clauses into a phrase: <span class="de">die steigenden Mieten</span> = the rents that are rising. For B1 Lesen: strip it to a verb. <span class="de">die im Zentrum gelegene Wohnung</span> = the flat that lies in the centre. You do not need to produce long participle phrases at B1; you must not panic when you see them.</p>
      <p>Present participle: infinitive + d (<span class="de">steigend, überzeugend, vorliegend</span>) — ongoing. Past participle as adjective: <span class="de">geschrieben, geschlossen, renoviert</span> — already done. Then it takes normal adjective endings.</p>
      <h3>How it works, step by step</h3>
      <ol>
        <li>Find the head noun at the end of the phrase: <span class="de">… Wohnung, … Unterlagen, … Mieten</span>.</li>
        <li>Find the participle just before it: -end = ongoing (present); ge- … -t/-en or inseparable Partizip = already done.</li>
        <li>Unpack to a relative: <span class="de">die steigenden Mieten</span> → <span class="de">die Mieten, die steigen</span>. <span class="de">die ausgefüllten Unterlagen</span> → <span class="de">die Unterlagen, die ausgefüllt wurden</span>.</li>
        <li>Give the participle a normal adjective ending: <span class="de">ein renoviertes Bad, die ausgefüllten Formulare</span>.</li>
        <li>In B1 Schreiben, prefer a relative clause. Use a short packed form only if you are sure of the ending (<span class="de">ausgefüllte Unterlagen</span>).</li>
      </ol>
      <h3>English vs German</h3>
      <p>English “rising rents / a written letter / the attached file” works the same way, but German then adds adjective endings. English can stack a long modifier after the noun; German stacks it before: <span class="de">die im Zentrum gelegene Wohnung</span>. English “the not-yet-opened post” is rare; German <span class="de">die noch nicht geöffnete Post</span> is normal official style.</p>
      <h3>Unpack method</h3>
      <table>
        <tr><th>Packed</th><th>Unpack</th></tr>
        <tr><td><span class="de">die steigenden Mieten</span></td><td><span class="de">die Mieten, die steigen</span></td></tr>
        <tr><td><span class="de">der geschriebene Brief</span></td><td><span class="de">der Brief, der geschrieben wurde / den man geschrieben hat</span></td></tr>
        <tr><td><span class="de">eine überzeugende Lösung</span></td><td><span class="de">eine Lösung, die überzeugt</span></td></tr>
        <tr><td><span class="de">die im Zentrum gelegene Wohnung</span></td><td><span class="de">die Wohnung, die im Zentrum liegt</span></td></tr>
        <tr><td><span class="de">die gestern abgeschickte Mail</span></td><td><span class="de">die Mail, die gestern abgeschickt wurde</span></td></tr>
      </table>
      <h3>Examples</h3>
      <ul>
        <li><span class="de">Die steigenden Mieten belasten viele Familien.</span></li>
        <li><span class="de">Bitte schicken Sie die ausgefüllten Unterlagen zurück.</span></li>
        <li><span class="de">In der beigefügten Datei finden Sie den Vertrag.</span></li>
        <li><span class="de">Wir suchen eine ruhig gelegene Wohnung mit renoviertem Bad.</span></li>
        <li><span class="de">Die fehlenden Unterlagen müssen bis Freitag nachgereicht werden.</span></li>
        <li><span class="de">Das ist eine überzeugende Begründung. Die andere wirkt etwas dünn.</span></li>
        <li><span class="de">Bei anhaltendem Regen fällt das Fest aus.</span></li>
        <li><span class="de">Die gestern beschlossene Regelung gilt ab Monatsersten.</span></li>
        <li><span class="de">Haben Sie den unterschriebenen Antrag schon abgegeben?</span></li>
        <li><span class="de">Die noch nicht geöffnete Post liegt auf meinem Schreibtisch.</span></li>
        <li><span class="de">Die fehlende Unterschrift können wir nicht ersetzen.</span></li>
        <li><span class="de">In der vorliegenden E-Mail finden Sie die geänderten Öffnungszeiten.</span></li>
        <li><span class="de">Wir brauchen eine überzeugende, schriftliche Begründung.</span></li>
        <li><span class="de">Die gestern reparierte Heizung funktioniert wieder.</span></li>
        <li><span class="de">Bitte legen Sie die unterschriebenen und ausgefüllten Blätter zusammen.</span></li>
      </ul>
      <h3>Worked examples</h3>
      <ul>
        <li><span class="de">Die steigenden Mieten belasten viele Familien.</span> — The rising rents put a strain on many families. — steigend = ongoing; unpack: die Mieten, die steigen.</li>
        <li><span class="de">Bitte schicken Sie die ausgefüllten Unterlagen zurück.</span> — Please send the completed documents back. — past participle + weak plural ending -en.</li>
        <li><span class="de">Wir suchen eine ruhig gelegene Wohnung mit renoviertem Bad.</span> — We are looking for a quietly situated flat with a renovated bathroom. — gelegen / renoviert already done; endings follow ein- vs no-article rules.</li>
        <li><span class="de">Die noch nicht geöffnete Post liegt auf meinem Schreibtisch.</span> — The not-yet-opened post is on my desk. — negation sits inside the packed phrase.</li>
      </ul>
      <h3>Right vs wrong</h3>
      <table>
        <tr><th>Wrong</th><th>Right</th><th>Why</th></tr>
        <tr><td><span class="de">die ausgefüllt Unterlagen</span></td><td><span class="de">die ausgefüllten Unterlagen</span></td><td>Participle needs an adjective ending.</td></tr>
        <tr><td><span class="de">ein renoviert Bad</span></td><td><span class="de">ein renoviertes Bad</span></td><td>ein + neuter Nom/Akk → -es.</td></tr>
        <tr><td>B1 letter: die im Zentrum ruhig und nah am Bahnhof gelegene von uns gestern besichtigte Wohnung</td><td><span class="de">die Wohnung, die im Zentrum liegt und die wir gestern besichtigt haben</span></td><td>A relative is safer at B1.</td></tr>
      </table>
      <h3>Mini Amt email (Lesen unpack)</h3>
      <p><span class="de">In der beigefügten Datei finden Sie den unterschriebenen Vertrag und die fehlenden Anlagen. Die gestern abgeschickte Bestätigung gilt als verbindlich.</span></p>
      <p>Unpack: the file that is attached / the contract that was signed / the documents that are missing / the confirmation that was sent yesterday. Head nouns: Datei, Vertrag, Anlagen, Bestätigung.</p>
      <div class="mem"><span class="label-s">Chunks to memorise</span>
        <p>Unpack: participle + noun → der/die/das + noun + relative + verb. Chunks: <span class="de">ausgefüllte Unterlagen · beigefügte Datei · steigende Preise · ruhig gelegene Wohnung · fehlende Papiere · unterschriebener Antrag</span></p>
      </div>
      <div class="warn"><span class="label-s">Exam traps</span>
        The participle still needs an adjective ending: <span class="de">die ausgefüllten Formulare, ein renoviertes Bad</span>. A present participle is not a conjugated verb in position 2. Negation can sit inside: <span class="de">die nicht geöffnete Post</span>. For B1 Schreiben, a relative clause is safer than a long packed phrase. Lesen: ignore the decoration, find the head noun. Sprachbausteine: the gap is often the ending on a participle, not a new verb. Sprechen: do not improvise packed phrases; say die Wohnung, die im Zentrum liegt.
      </div>
      <h3>Produce now</h3>
      <ol>
        <li>Unpack five participle phrases from a formal email into relative clauses.</li>
        <li>Pack five simple relatives the other way (recognition drill only).</li>
        <li>Add correct endings to: ein renoviert__ Bad, die steigend__ Kosten, ausgefüllt__ Formulare.</li>
        <li>In a B1 letter, prefer one relative clause over a packed B2 phrase.</li>
        <li>Underline the head noun in four long official phrases, then say the sentence in simple German.</li>
        <li>Write: die beigefügte Datei / ein überzeugender Grund / bei anhaltendem Regen.</li>
      </ol>
    `,
  },
]
});
