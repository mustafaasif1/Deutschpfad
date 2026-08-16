registerPack("a1", {
  grammar: [
  {
    id: "a1-alphabet",
    title: "Alphabet and sounds",
    level: "a1",
    minutes: 15,
    html: `
      <p>German adds <span class="de">ä ö ü ß</span> to A–Z. Spell your name slowly in the oral exam.</p>
      <table>
        <tr><th>Letter</th><th>Say</th><th>Example</th></tr>
        <tr><td>W</td><td>like English v</td><td><span class="de">Wasser, wohnen</span></td></tr>
        <tr><td>V</td><td>often like f</td><td><span class="de">Vater, viel</span></td></tr>
        <tr><td>Z</td><td>ts</td><td><span class="de">Zug, Zeit</span></td></tr>
        <tr><td>ch after e/i</td><td>soft (ich-Laut)</td><td><span class="de">ich, nicht, Milch</span></td></tr>
        <tr><td>ch after a/o/u</td><td>harder (ach-Laut)</td><td><span class="de">auch, Buch, Nacht</span></td></tr>
        <tr><td>ß</td><td>ss</td><td><span class="de">Straße, heißen</span></td></tr>
      </table>
      <div class="mem"><span class="label-s">Exam phrases</span>
        <p><span class="de">Ich heiße … Das schreibt man … Wie bitte? Langsamer bitte. Ich verstehe das nicht.</span></p>
      </div>
    `,
  },
  {
    id: "a1-sein-haben",
    title: "sein and haben",
    level: "a1",
    minutes: 20,
    html: `
      <p>These two verbs appear in almost every A1 sentence. Memorise them cold.</p>
      <table>
        <tr><th></th><th>sein (to be)</th><th>haben (to have)</th></tr>
        <tr><td>ich</td><td><span class="de">bin</span></td><td><span class="de">habe</span></td></tr>
        <tr><td>du</td><td><span class="de">bist</span></td><td><span class="de">hast</span></td></tr>
        <tr><td>er/sie/es</td><td><span class="de">ist</span></td><td><span class="de">hat</span></td></tr>
        <tr><td>wir</td><td><span class="de">sind</span></td><td><span class="de">haben</span></td></tr>
        <tr><td>ihr</td><td><span class="de">seid</span></td><td><span class="de">habt</span></td></tr>
        <tr><td>sie/Sie</td><td><span class="de">sind</span></td><td><span class="de">haben</span></td></tr>
      </table>
      <p><span class="de">Ich bin Student. Ich habe ein Handy. Wir sind in Berlin. Sie hat Hunger.</span></p>
      <div class="warn"><span class="label-s">Trap</span> Age uses <strong>sein</strong>, not haben: <span class="de">Ich bin 25 Jahre alt.</span> — not <em>Ich habe 25 Jahre</em>.</div>
    `,
  },
  {
    id: "a1-articles",
    title: "der die das / ein eine",
    level: "a1",
    minutes: 25,
    html: `
      <p>Every noun has a gender. Learn <strong>article + noun</strong> as one chunk. Never learn <em>Tisch</em> alone.</p>
      <table>
        <tr><th></th><th>Masculine</th><th>Feminine</th><th>Neuter</th><th>Plural</th></tr>
        <tr><td>the</td><td><span class="de">der Mann</span></td><td><span class="de">die Frau</span></td><td><span class="de">das Kind</span></td><td><span class="de">die Kinder</span></td></tr>
        <tr><td>a</td><td><span class="de">ein Mann</span></td><td><span class="de">eine Frau</span></td><td><span class="de">ein Kind</span></td><td>—</td></tr>
      </table>
      <div class="mem"><span class="label-s">Patterns (not 100%, but useful)</span>
        Feminine: <span class="de">-ung, -heit, -keit, -tion</span> (die Wohnung, die Krankheit). Neuter: <span class="de">-chen, -lein</span> (das Mädchen). Masculine: days, months, many -er jobs (der Lehrer).
      </div>
      <p>This table is <strong>nominative</strong> (the subject form). Accusative comes next.</p>
    `,
  },
  {
    id: "a1-pronouns",
    title: "Personal pronouns",
    level: "a1",
    minutes: 15,
    html: `
      <table>
        <tr><th>Pronoun</th><th>Use</th></tr>
        <tr><td><span class="de">ich</span></td><td>I</td></tr>
        <tr><td><span class="de">du</span></td><td>you (friend, family, children)</td></tr>
        <tr><td><span class="de">er / sie / es</span></td><td>he / she / it</td></tr>
        <tr><td><span class="de">wir</span></td><td>we</td></tr>
        <tr><td><span class="de">ihr</span></td><td>you plural (friends)</td></tr>
        <tr><td><span class="de">sie</span></td><td>they</td></tr>
        <tr><td><span class="de">Sie</span></td><td>you formal (shops, doctors, exam partner you just met)</td></tr>
      </table>
      <div class="warn"><span class="label-s">Exam</span> In A1 Sprechen, use <span class="de">Sie</span> with the examiner if you are not told otherwise. In shops always Sie.</div>
      <p><span class="de">Wie heißen Sie? — Ich heiße Sara. Und Sie?</span></p>
    `,
  },
  {
    id: "a1-present",
    title: "Regular present tense",
    level: "a1",
    minutes: 25,
    html: `
      <p>Stem + endings. The verb is usually <strong>second</strong> in a statement.</p>
      <table>
        <tr><th></th><th>wohnen (stem: wohn-)</th></tr>
        <tr><td>ich</td><td><span class="de">wohne</span></td></tr>
        <tr><td>du</td><td><span class="de">wohnst</span></td></tr>
        <tr><td>er/sie/es</td><td><span class="de">wohnt</span></td></tr>
        <tr><td>wir</td><td><span class="de">wohnen</span></td></tr>
        <tr><td>ihr</td><td><span class="de">wohnt</span></td></tr>
        <tr><td>sie/Sie</td><td><span class="de">wohnen</span></td></tr>
      </table>
      <p><span class="de">Ich wohne in Berlin. Heute arbeite ich zu Hause.</span> — verb still second even if time comes first.</p>
      <p>Common irregular presents you must own: <span class="de">ich spreche / du sprichst · ich fahre / du fährst · ich esse / du isst · ich sehe / du siehst · ich lese / du liest</span>.</p>
    `,
  },
  {
    id: "a1-questions",
    title: "Questions: W-words and yes/no",
    level: "a1",
    minutes: 20,
    html: `
      <p><strong>Yes/no:</strong> verb first. <span class="de">Wohnst du in Berlin? Haben Sie Zeit?</span></p>
      <p><strong>W-questions:</strong> question word, then verb.</p>
      <table>
        <tr><th>Word</th><th>Means</th><th>Example</th></tr>
        <tr><td><span class="de">Wo?</span></td><td>where</td><td><span class="de">Wo wohnst du?</span></td></tr>
        <tr><td><span class="de">Woher?</span></td><td>from where</td><td><span class="de">Woher kommst du?</span></td></tr>
        <tr><td><span class="de">Wohin?</span></td><td>to where</td><td><span class="de">Wohin gehst du?</span></td></tr>
        <tr><td><span class="de">Was?</span></td><td>what</td><td><span class="de">Was machst du?</span></td></tr>
        <tr><td><span class="de">Wer?</span></td><td>who</td><td><span class="de">Wer ist das?</span></td></tr>
        <tr><td><span class="de">Wie?</span></td><td>how</td><td><span class="de">Wie heißt du?</span></td></tr>
        <tr><td><span class="de">Wann?</span></td><td>when</td><td><span class="de">Wann beginnt der Kurs?</span></td></tr>
        <tr><td><span class="de">Warum?</span></td><td>why</td><td><span class="de">Warum lernst du Deutsch?</span></td></tr>
        <tr><td><span class="de">Wie viel / Wie viele?</span></td><td>how much / many</td><td><span class="de">Wie viel kostet das?</span></td></tr>
      </table>
      <div class="mem">In Sprechen, ask one question back every time: <span class="de">Und du? Und Sie? Wo wohnen Sie?</span></div>
    `,
  },
  {
    id: "a1-negation",
    title: "nicht and kein",
    level: "a1",
    minutes: 15,
    html: `
      <p><strong>kein</strong> replaces <em>ein</em> before a noun (no / not a). <strong>nicht</strong> negates verbs, adjectives, and everything else.</p>
      <table>
        <tr><th>Use</th><th>Example</th></tr>
        <tr><td>kein + noun</td><td><span class="de">Ich habe kein Auto. Ich habe keine Zeit. Das ist kein Problem.</span></td></tr>
        <tr><td>nicht + verb idea</td><td><span class="de">Ich wohne nicht hier. Ich verstehe das nicht.</span></td></tr>
        <tr><td>nicht + adjective</td><td><span class="de">Das ist nicht gut. Der Kaffee ist nicht heiß.</span></td></tr>
      </table>
      <div class="warn">Hören loves the swap: you hear <span class="de">nicht / kein / nur / schon / erst</span>. Read the statement first so you catch the trap.</div>
    `,
  },
  {
    id: "a1-akkusativ",
    title: "Accusative (ein/einen)",
    level: "a1",
    minutes: 25,
    html: `
      <p>The direct object. Ask <span class="de">wen?</span> / <span class="de">was?</span> Only <strong>masculine</strong> articles change.</p>
      <table>
        <tr><th></th><th>M</th><th>F</th><th>N</th><th>Pl</th></tr>
        <tr><td>the</td><td><span class="de">den</span></td><td>die</td><td>das</td><td>die</td></tr>
        <tr><td>a</td><td><span class="de">einen</span></td><td>eine</td><td>ein</td><td>—</td></tr>
      </table>
      <p><span class="de">Ich sehe den Mann. Ich habe einen Bruder. Ich trinke einen Kaffee. Ich möchte eine Banane und ein Brot.</span></p>
      <p>Always accusative: <span class="de">durch, für, gegen, ohne, um</span> — <span class="de">Das Geschenk ist für den Lehrer. Ich kaufe das ohne eine Tüte.</span></p>
    `,
  },
  {
    id: "a1-modals",
    title: "Modal verbs (want/can/must)",
    level: "a1",
    minutes: 25,
    html: `
      <p>The modal is conjugated in position 2. The second verb stays as <strong>infinitive at the end</strong>.</p>
      <table>
        <tr><th></th><th>können</th><th>müssen</th><th>wollen</th><th>möchten</th></tr>
        <tr><td>ich</td><td><span class="de">kann</span></td><td><span class="de">muss</span></td><td><span class="de">will</span></td><td><span class="de">möchte</span></td></tr>
        <tr><td>du</td><td><span class="de">kannst</span></td><td><span class="de">musst</span></td><td><span class="de">willst</span></td><td><span class="de">möchtest</span></td></tr>
        <tr><td>er/sie</td><td><span class="de">kann</span></td><td><span class="de">muss</span></td><td><span class="de">will</span></td><td><span class="de">möchte</span></td></tr>
        <tr><td>wir</td><td><span class="de">können</span></td><td><span class="de">müssen</span></td><td><span class="de">wollen</span></td><td><span class="de">möchten</span></td></tr>
      </table>
      <p><span class="de">Ich kann Deutsch sprechen. Ich muss arbeiten. Ich möchte einen Tee. Wir wollen nach Hause gehen.</span></p>
      <div class="mem"><span class="de">möchten</span> is the polite “would like” — use it in cafés and shops.</div>
    `,
  },
  {
    id: "a1-time",
    title: "Time, days, word order",
    level: "a1",
    minutes: 20,
    html: `
      <p><span class="de">Es ist drei Uhr. Es ist halb vier</span> (15:30). <span class="de">um 8 Uhr. am Montag. heute / morgen / gestern.</span></p>
      <table>
        <tr><th>Day</th><th>German</th></tr>
        <tr><td>Monday–Sunday</td><td><span class="de">Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag</span></td></tr>
      </table>
      <p>Time often comes early. Verb stays second: <span class="de">Am Montag gehe ich zur Schule. Um 17 Uhr beginnt der Kurs.</span></p>
      <p>Hören: 13 vs 30, 16 vs 60. Write the digits the second you hear them.</p>
    `,
  },
  {
    id: "a1-prepositions",
    title: "Simple prepositions",
    level: "a1",
    minutes: 20,
    html: `
      <table>
        <tr><th>Prep</th><th>Chunk to memorise</th></tr>
        <tr><td><span class="de">in</span></td><td><span class="de">in Deutschland, in Berlin</span></td></tr>
        <tr><td><span class="de">aus</span></td><td><span class="de">aus Spanien, aus der Türkei</span></td></tr>
        <tr><td><span class="de">nach</span></td><td><span class="de">nach Hause, nach Berlin</span> (cities/countries without article)</td></tr>
        <tr><td><span class="de">zu</span></td><td><span class="de">zu Hause, zum Arzt, zur Arbeit</span></td></tr>
        <tr><td><span class="de">mit</span></td><td><span class="de">mit dem Bus, mit der Bahn, mit dir</span></td></tr>
        <tr><td><span class="de">von</span></td><td><span class="de">von 9 bis 17 Uhr</span></td></tr>
      </table>
      <div class="warn"><span class="de">nach Hause</span> = going home. <span class="de">zu Hause</span> = at home. Mixing these loses easy points.</div>
    `,
  },
  {
    id: "a1-survival",
    title: "Survival dialogues",
    level: "a1",
    minutes: 20,
    html: `
      <p>Say these aloud until they are automatic. A1 Sprechen and Schreiben live here.</p>
      <h3>Café</h3>
      <p><span class="de">Guten Tag. Ich hätte gerne einen Kaffee und ein Wasser. Mit Milch? Ja, bitte. Das macht 4 Euro 50. Die Rechnung bitte. Danke, wiedersehen.</span></p>
      <h3>Shop</h3>
      <p><span class="de">Guten Tag. Ich suche eine Jacke, Größe 38. Was kostet das? Das ist ein bisschen teuer. Haben Sie das auch in Blau? Ich nehme die blaue. Kann ich mit Karte zahlen?</span></p>
      <h3>Doctor / Amt</h3>
      <p><span class="de">Guten Tag. Ich habe Kopfschmerzen. Wo tut es weh? Hier. Ich brauche einen Termin. Haben Sie heute noch Zeit?</span></p>
      <div class="mem">If you freeze: <span class="de">Wie bitte? Können Sie das bitte wiederholen? Langsamer bitte.</span></div>
    `,
  }
]
});
