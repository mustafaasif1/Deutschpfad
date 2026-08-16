registerPack("a2", {
  grammar: [
  {
    id: "a2-review",
    title: "A1 → A2 bridge",
    level: "a2",
    minutes: 15,
    html: `
      <p>You already know articles, present tense, and basic accusative. A2 adds <strong>Perfekt</strong>, dative, connectors with verb-last, separable verbs, and longer texts.</p>
      <div class="mem">Daily A2 sentence: article + Perfekt + weil. <span class="de">Gestern bin ich zum Arzt gegangen, weil ich Kopfschmerzen hatte.</span></div>
      <p>If you still mix der/die/das, stay on articles for three days before “new” grammar. A2 reading is mostly A1 words in longer clothes.</p>
    `,
  },
  {
    id: "a2-perfekt",
    title: "Perfekt (spoken past)",
    level: "a2",
    minutes: 30,
    html: `
      <p>This is the A2 tense. Conjugated <strong>haben</strong> or <strong>sein</strong> in position 2 + Partizip at the end.</p>
      <table>
        <tr><th>Auxiliary</th><th>When</th><th>Example</th></tr>
        <tr><td><span class="de">haben</span></td><td>most verbs, including those with an object</td><td><span class="de">Ich habe Pizza gegessen. Ich habe das Auto gefahren.</span></td></tr>
        <tr><td><span class="de">sein</span></td><td>motion / change of state / bleiben, sein, werden</td><td><span class="de">Ich bin nach Berlin gefahren. Ich bin zu Hause geblieben.</span></td></tr>
      </table>
      <p><strong>Regular:</strong> ge- + stem + t → <span class="de">gemacht, gelernt, gekauft</span>.</p>
      <p><strong>Strong:</strong> ge- + -en → <span class="de">gesehen, gesprochen, gegessen, geschrieben</span>.</p>
      <p>No ge- on be-/ver-/er- and -ieren: <span class="de">besucht, erzählt, reserviert</span>. Separable: prefix + ge + rest: <span class="de">aufgestanden, eingekauft</span>.</p>
      <div class="warn">Never <span class="de">ich habe gegangen</span>. Motion without an object takes sein: <span class="de">ich bin gegangen</span>.</div>
    `,
  },
  {
    id: "a2-dativ",
    title: "Dative case",
    level: "a2",
    minutes: 25,
    html: `
      <p>Ask <span class="de">wem?</span> Indirect object, and after dative prepositions.</p>
      <table>
        <tr><th></th><th>M</th><th>F</th><th>N</th><th>Pl</th></tr>
        <tr><td>the</td><td><span class="de">dem</span></td><td><span class="de">der</span></td><td><span class="de">dem</span></td><td><span class="de">den</span> (+n on the noun)</td></tr>
        <tr><td>a / my</td><td><span class="de">einem / meinem</span></td><td><span class="de">einer / meiner</span></td><td><span class="de">einem / meinem</span></td><td>— / <span class="de">meinen</span></td></tr>
      </table>
      <p><span class="de">Ich gebe dem Kind ein Buch. Ich danke der Frau. Ich fahre mit dem Bus. Das Buch liegt auf dem Tisch.</span></p>
      <p>Always dative: <span class="de">aus, bei, mit, nach, seit, von, zu</span>.</p>
      <p>Dative verbs: <span class="de">helfen, danken, gehören, gefallen, antworten, schmecken</span> — <span class="de">Das Kleid gefällt mir. Kannst du mir helfen?</span></p>
    `,
  },
  {
    id: "a2-connectors",
    title: "weil / dass / denn / deshalb",
    level: "a2",
    minutes: 25,
    html: `
      <table>
        <tr><th>Connector</th><th>Verb position</th><th>Example</th></tr>
        <tr><td><span class="de">und, oder, aber, denn</span></td><td>no change (verb second in the new clause)</td><td><span class="de">Ich bleibe hier, denn ich bin krank.</span></td></tr>
        <tr><td><span class="de">deshalb, dann, trotzdem</span></td><td>they take position 1; verb still second</td><td><span class="de">Es regnet, deshalb bleibe ich zu Hause.</span></td></tr>
        <tr><td><span class="de">weil, dass, wenn, als, ob</span></td><td><strong>verb last</strong></td><td><span class="de">Ich bleibe, weil ich krank bin. Ich denke, dass der Kurs gut ist.</span></td></tr>
      </table>
      <div class="mem"><span class="de">wenn</span> = when/if (future or repeated). <span class="de">als</span> = when (one time in the past). <span class="de">Als ich Kind war, … Wenn ich Zeit habe, …</span></div>
      <p>Schreiben: one <span class="de">weil</span> per letter is the A2 pass trick.</p>
    `,
  },
  {
    id: "a2-modals",
    title: "Modals in past & present",
    level: "a2",
    minutes: 20,
    html: `
      <p>Present: <span class="de">ich kann / muss / will / soll / darf / möchte</span> + infinitive at the end.</p>
      <p>Spoken past: either Präteritum of the modal (<span class="de">ich wollte, ich konnte, ich musste</span>) or <span class="de">ich habe … gemusst / gekonnt</span>.</p>
      <p>Exam-friendly: <span class="de">Gestern musste ich arbeiten. Ich wollte kommen, aber ich konnte nicht.</span></p>
      <p><span class="de">dürfen</span> = be allowed. <span class="de">sollen</span> = supposed to / should. <span class="de">Hier darf man nicht rauchen. Du sollst den Arzt anrufen.</span></p>
    `,
  },
  {
    id: "a2-separable",
    title: "Separable verbs",
    level: "a2",
    minutes: 20,
    html: `
      <p>Prefix goes to the <strong>end</strong> in present: <span class="de">Ich stehe um 7 Uhr auf. Wir fangen um 9 an. Sie kommt heute mit.</span></p>
      <p>Perfekt: prefix + ge + rest: <span class="de">Ich bin um 7 aufgestanden. Wir haben um 9 angefangen. Sie hat mitgemacht.</span></p>
      <p>Must-know: <span class="de">aufstehen, ankommen, einkaufen, mitkommen, anrufen, aussehen, fernsehen, einladen, zumachen, aufmachen</span>.</p>
      <div class="warn">In weil-clauses the prefix stays on the verb at the end: <span class="de">… weil ich um 7 aufstehe.</span></div>
    `,
  },
  {
    id: "a2-wordorder",
    title: "Word order & time",
    level: "a2",
    minutes: 20,
    html: `
      <p>Statement: conjugated verb in <strong>position 2</strong>. Position 1 is one unit (a word or a time phrase).</p>
      <p><span class="de">Heute fahre ich nach Köln. Um 8 Uhr beginnt der Kurs. Am Wochenende besuche ich meine Eltern.</span></p>
      <p>Time – Manner – Place often helps: <span class="de">Ich fahre morgen mit dem Zug nach Hamburg.</span></p>
      <p>Yes/no: verb first. W-question: W-word then verb.</p>
    `,
  },
  {
    id: "a2-adjectives",
    title: "Adjective endings (basic)",
    level: "a2",
    minutes: 25,
    html: `
      <p>After der/die/das the adjective takes <strong>-e</strong> in nominative: <span class="de">der neue Tisch, die neue Lampe, das neue Auto, die neuen Bücher</span>.</p>
      <p>After ein/mein in nominative: masculine <strong>-er</strong>, feminine <strong>-e</strong>, neuter <strong>-es</strong>: <span class="de">ein neuer Tisch, eine neue Lampe, ein neues Auto</span>.</p>
      <p>Accusative masculine after der: <span class="de">Ich kaufe den neuen Tisch.</span> After ein: <span class="de">Ich kaufe einen neuen Tisch.</span></p>
      <div class="mem">A2 Schreiben: two correct adjective endings look like control. Don’t chase every ending — get Nom + Akk masculine right first.</div>
    `,
  },
  {
    id: "a2-prepositions",
    title: "Prepositions Akk/Dat",
    level: "a2",
    minutes: 25,
    html: `
      <table>
        <tr><th>Always Akk</th><th>Always Dat</th><th>Wechsel (wo? Dat / wohin? Akk)</th></tr>
        <tr><td><span class="de">durch, für, gegen, ohne, um</span></td><td><span class="de">aus, bei, mit, nach, seit, von, zu</span></td><td><span class="de">an, auf, in, über, unter, hinter, neben, zwischen</span></td></tr>
      </table>
      <p><span class="de">Ich bin in der Stadt</span> (location). <span class="de">Ich gehe in die Stadt</span> (direction).</p>
      <p><span class="de">Das Buch liegt auf dem Tisch. Ich lege das Buch auf den Tisch.</span></p>
    `,
  },
  {
    id: "a2-comparative",
    title: "Comparative & superlative",
    level: "a2",
    minutes: 15,
    html: `
      <p><span class="de">größer, kleiner, teurer, günstiger, besser, mehr, lieber</span>.</p>
      <p><span class="de">Berlin ist größer als Mainz. Der Bus ist günstiger als das Taxi.</span></p>
      <p>Superlative: <span class="de">am besten, am liebsten, am teuersten, der größte, die beste Wohnung</span>.</p>
      <p><span class="de">Ich trinke am liebsten Tee. Das ist das beste Café in der Stadt.</span></p>
    `,
  },
  {
    id: "a2-letters",
    title: "Informal & semi-formal writing",
    level: "a2",
    minutes: 20,
    html: `
      <p>Friend: <span class="de">Hallo Anna, / Liebe Anna,</span> … <span class="de">Viele Grüße / Liebe Grüße</span> + first name.</p>
      <p>Course / office: <span class="de">Sehr geehrte Frau Berger,</span> … <span class="de">Mit freundlichen Grüßen</span> + full name.</p>
      <p>Cover every content point with a full sentence. Use <span class="de">weil</span> once and Perfekt once: <span class="de">Leider kann ich nicht kommen, weil ich am Samstag arbeiten muss. Gestern habe ich schon angerufen.</span></p>
      <p>Never mix du and Sie. Never write English closings.</p>
    `,
  },
  {
    id: "a2-speaking",
    title: "Speaking strategies",
    level: "a2",
    minutes: 15,
    html: `
      <p>Slow and clear beats fast and wrong. Fill silence with these:</p>
      <p><span class="de">Meiner Meinung nach… Zum Beispiel… Allerdings… Deshalb… Und du? Was denkst du?</span></p>
      <p>Planning (Teil 3): <span class="de">Ich schlage vor, dass wir… Gute Idee. Ich bin nicht so sicher, weil… Stattdessen könnten wir… Also, dann sind wir uns einig.</span></p>
      <p>If you don’t understand: <span class="de">Könnten Sie das bitte wiederholen?</span> — that is A2, not failure.</p>
    `,
  },
  {
    id: "a2-relative",
    title: "Relative clauses (start)",
    level: "a2",
    minutes: 20,
    html: `
      <p>Recognition first. The relative pronoun matches gender/number of the noun; the verb goes to the end.</p>
      <p><span class="de">Der Mann, der dort steht, ist mein Lehrer. Die Frau, die ich kenne, wohnt in Köln. Das Buch, das ich lese, ist gut.</span></p>
      <p>You do not need perfect relative clauses to pass A2. One correct <span class="de">der/die/das</span> clause in speaking is a bonus.</p>
    `,
  },
  {
    id: "a2-passive",
    title: "Passive recognition",
    level: "a2",
    minutes: 15,
    html: `
      <p>werden + Partizip. You must <strong>recognise</strong> it in Lesen, not produce it yet.</p>
      <p><span class="de">Hier wird Deutsch gesprochen. Das Museum wird um 18 Uhr geschlossen. Die Straße ist gesperrt.</span></p>
      <p>If you see <span class="de">wird / werden / wurde</span> + a verb with ge-, it is often passive: someone does the action, the thing is the subject.</p>
    `,
  },
  {
    id: "a2-traps",
    title: "A2 exam traps",
    level: "a2",
    minutes: 15,
    html: `
      <ul>
        <li>Lesen: synonyms, not the same word. <span class="de">geschlossen ≈ nicht geöffnet / macht zu</span>.</li>
        <li>Hören Teil 1: often once. Read the statement. Hunt the number, the time, the <span class="de">nicht</span>.</li>
        <li>Schreiben: every Leitpunkt. Greeting and closing. One weil, one Perfekt.</li>
        <li>Sprechen: you must agree on a plan. <span class="de">Ja, genau</span> alone is not a plan.</li>
      </ul>
    `,
  }
]
});
