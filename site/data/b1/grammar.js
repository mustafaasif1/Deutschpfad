registerPack("b1", {
  grammar: [
  {
    id: "gender",
    level: "a2",
    title: "Gender and articles",
    minutes: 12,
    html: `
      <p>Every German noun has a gender. Learn <span class="de">der / die / das</span> with the word. In plural nominative, all nouns take <span class="de">die</span>.</p>
      <div class="mem"><span class="label-s">Patterns</span>
        Feminine: -ung, -heit, -keit, -schaft, -tion. Neuter: -chen, -lein, infinitives as nouns. Masculine: days, months, -ling, many -er jobs.
      </div>
      <table><tr><th></th><th>M</th><th>F</th><th>N</th><th>Pl</th></tr>
      <tr><td>Nom</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
      <tr><td>Akk</td><td>den</td><td>die</td><td>das</td><td>die</td></tr>
      <tr><td>Dat</td><td>dem</td><td>der</td><td>dem</td><td>den (+n)</td></tr>
      <tr><td>Gen</td><td>des (+s)</td><td>der</td><td>des (+s)</td><td>der</td></tr></table>
      <p><span class="de">ein</span> has no plural. <span class="de">kein</span> and possessives (<span class="de">mein</span>) use ein-endings.</p>
    `,
  },
  {
    id: "akkusativ",
    level: "a2",
    title: "Accusative — the direct object",
    minutes: 10,
    html: `
      <p>Ask <span class="de">wen?</span> / <span class="de">was?</span> Only masculine articles change: der → <strong>den</strong>, ein → <strong>einen</strong>.</p>
      <p class="de">Ich sehe den Mann. Ich kaufe einen Tisch. Ich habe keine Zeit.</p>
      <p>Always accusative prepositions: <span class="de">durch, für, gegen, ohne, um</span>.</p>
      <p>Motion into a place with Wechselpräpositionen also takes Akk: <span class="de">Ich gehe in die Stadt.</span></p>
    `,
  },
  {
    id: "dativ",
    level: "a2",
    title: "Dative — to/for whom, location",
    minutes: 12,
    html: `
      <p>Ask <span class="de">wem?</span> Indirect object: <span class="de">Ich gebe der Frau das Buch.</span></p>
      <table><tr><th></th><th>M</th><th>F</th><th>N</th><th>Pl</th></tr>
      <tr><td>the</td><td>dem</td><td>der</td><td>dem</td><td>den</td></tr>
      <tr><td>a / my</td><td>einem / meinem</td><td>einer / meiner</td><td>einem / meinem</td><td>— / meinen</td></tr></table>
      <p>Always dative: <span class="de">aus, bei, mit, nach, seit, von, zu</span>.</p>
      <p>Location (wo?): <span class="de">Ich bin in der Stadt. Das Buch liegt auf dem Tisch.</span></p>
      <p>Verbs that take dative: <span class="de">helfen, danken, gehören, gefallen, antworten, gratulieren, schmecken</span>.</p>
    `,
  },
  {
    id: "perfekt",
    level: "a2",
    title: "Perfekt — the spoken past",
    minutes: 14,
    html: `
      <p>haben/sein in position 2 + Partizip at the end.</p>
      <p><strong>sein</strong> for motion and change of state without an object: gehen, fahren, kommen, aufstehen, einschlafen, bleiben, sein, werden, passieren.</p>
      <p><span class="de">Ich bin nach Berlin gefahren. Ich habe das Auto gefahren.</span></p>
      <p>Regular: ge- + stem + t (<span class="de">gemacht</span>). Strong: ge- + -en (<span class="de">gesehen</span>). No ge- on be-/ver-/er- and -ieren (<span class="de">besucht, reserviert</span>). Separable: <span class="de">aufgestanden</span>.</p>
    `,
  },
  {
    id: "wordorder",
    level: "b1",
    title: "Word order: verb second",
    minutes: 10,
    html: `
      <p>In a statement the conjugated verb is in <strong>position 2</strong>. Position 1 is one unit.</p>
      <p class="de">Heute fahre ich nach Köln. Um 8 Uhr beginnt der Kurs.</p>
      <p>Yes/no question: verb first. W-question: question word then verb.</p>
      <p>Time–manner–place: <span class="de">Ich fahre morgen mit dem Zug nach Hamburg.</span></p>
    `,
  },
  {
    id: "connectors",
    level: "b1",
    title: "Connectors and verb last",
    minutes: 16,
    html: `
      <p><strong>No verb move:</strong> und, oder, aber, denn, sondern.</p>
      <p><strong>Take position 1 (verb still second):</strong> deshalb, darum, deswegen, trotzdem, dann, sonst.</p>
      <p><strong>Verb last:</strong> weil, dass, ob, wenn, als, obwohl, damit, nachdem, bevor, seitdem, während, bis, falls.</p>
      <div class="warn"><span class="label-s">Traps</span>
        <span class="de">als</span> = one past event. <span class="de">wenn</span> = if / whenever. <span class="de">wann</span> = question “when?”.
        <span class="de">weil</span> vs <span class="de">denn</span> vs <span class="de">deshalb</span> — three grammars, one meaning.
      </div>
    `,
  },
  {
    id: "modals",
    level: "a2",
    title: "Modal verbs",
    minutes: 10,
    html: `
      <p>können, müssen, wollen, sollen, dürfen, mögen / möchten. Conjugated modal in position 2, other verb as infinitive at the end. No <span class="de">zu</span>.</p>
      <p class="de">Ich kann heute nicht kommen. Darf man hier parken?</p>
      <p><span class="de">nicht müssen</span> = don’t have to. <span class="de">nicht dürfen</span> = must not.</p>
      <p>In speaking, past of modals: Präteritum is cleaner — <span class="de">Ich musste arbeiten.</span></p>
    `,
  },
  {
    id: "separable",
    level: "b1",
    title: "Separable and inseparable verbs",
    minutes: 10,
    html: `
      <p>Separable prefixes (ab, an, auf, aus, ein, mit, vor, zu, zurück…) go to the <strong>end</strong> in present: <span class="de">Ich stehe um 7 auf.</span> Partizip: <span class="de">aufgestanden</span>.</p>
      <p>In subordinate clauses they stay attached: <span class="de">…, weil ich um 7 aufstehe.</span></p>
      <p>Inseparable (be, ge, er, ver, zer, ent, emp): no ge- in Partizip: <span class="de">besucht, verloren</span>.</p>
    `,
  },
  {
    id: "adjectives",
    level: "b1",
    title: "Adjective endings",
    minutes: 16,
    html: `
      <p>After der/dieser: almost always <strong>-e or -en</strong> (five -e: Nom m/f/n and Akk f/n).</p>
      <p>After ein/mein/kein: adjective shows gender where ein does not: <span class="de">ein neuer Job, ein neues Auto, eine neue Stelle</span>.</p>
      <p>No article: adjective plays der/die/das: <span class="de">bei gutem Wetter, nach kurzer Zeit, guter Wein</span>.</p>
      <p>Comparative: -er (+ umlaut). Superlative: am -sten / der -ste. <span class="de">gut–besser–am besten; gern–lieber–am liebsten.</span></p>
    `,
  },
  {
    id: "prepositions",
    level: "b1",
    title: "Prepositions",
    minutes: 16,
    html: `
      <p><strong>Akk:</strong> durch für gegen ohne um</p>
      <p><strong>Dat:</strong> aus bei mit nach seit von zu</p>
      <p><strong>Wechsel:</strong> an auf hinter in neben über unter vor zwischen — wo? Dativ / wohin? Akkusativ</p>
      <p class="de">nach Hause vs zu Hause · zum Arzt · in die Stadt / in der Stadt · auf die Post · am Montag · um 8 Uhr · seit einem Jahr + present</p>
      <div class="mem"><span class="label-s">Chunks</span> warten auf + Akk · sich freuen auf (future) / über (fact) · sich bewerben um · sich interessieren für · Angst haben vor + Dat</div>
    `,
  },
  {
    id: "konjunktiv2",
    level: "b1",
    title: "Konjunktiv II",
    minutes: 12,
    html: `
      <p>Politeness and unreal situations. High value in letters and speaking.</p>
      <p class="de">Ich würde gerne… Könnten Sie bitte…? Ich hätte mehr Zeit. Wenn ich Zeit hätte, würde ich dich besuchen.</p>
      <p>wäre, hätte, könnte, sollte, müsste, dürfte. Past unreal: <span class="de">Wenn ich das gewusst hätte, wäre ich früher gekommen.</span></p>
    `,
  },
  {
    id: "relative",
    level: "b1",
    title: "Relative clauses",
    minutes: 12,
    html: `
      <p>Gender/number from the noun. Case from the role in the extra clause. Verb last. Commas required.</p>
      <p class="de">Das ist der Mann, der nebenan wohnt. / den ich gesehen habe. / dem ich das Buch gegeben habe. / mit dem ich arbeite.</p>
      <p>After alles, etwas, nichts, das Beste: <span class="de">was</span>.</p>
    `,
  },
  {
    id: "zu",
    level: "b1",
    title: "zu + infinitive",
    minutes: 10,
    html: `
      <p class="de">Ich versuche, pünktlich zu kommen. Es ist wichtig, Deutsch zu lernen. um … zu = in order to. ohne … zu = without doing.</p>
      <p>zu tucks into separable verbs: <span class="de">aufzustehen</span>.</p>
      <p>No zu after modals, and after sehen/hören/lassen, gehen + sport: <span class="de">Ich gehe schwimmen.</span></p>
    `,
  },
  {
    id: "passive",
    level: "b1",
    title: "Passive",
    minutes: 10,
    html: `
      <p>werden + Partizip II. <span class="de">Die Tür wird um 9 Uhr geöffnet. Das Formular muss ausgefüllt werden.</span></p>
      <p>Agent: von + Dat. State: sein + Partizip — <span class="de">Der Laden ist geschlossen.</span></p>
    `,
  },
  {
    id: "reflexive",
    level: "b1",
    title: "Reflexive verbs",
    minutes: 8,
    html: `
      <p class="de">Ich freue mich. Ich erinnere mich. Ich wasche mich. Ich wasche mir die Hände.</p>
      <p>Akk if no other object; Dat if there is already an Akk object (body part, clothing, thing bought).</p>
    `,
  },
  {
    id: "k1",
    level: "b2",
    title: "B2: Konjunktiv I (indirect speech)",
    minutes: 14,
    html: `
      <p>Newspapers report speech with Konjunktiv I: er sei, sie habe, sie komme, sie würden.</p>
      <p class="de">Die Ministerin sagte, das Problem sei gelöst. Der Sprecher erklärte, man habe genug Geld.</p>
      <p>If Konjunktiv I looks like the indicative, German uses Konjunktiv II instead: <span class="de">sie hätten</span> not sie haben.</p>
      <p>For telc B1 you only need to <strong>recognise</strong> this. For B2 you produce it in summaries.</p>
    `,
  },
  {
    id: "nominal",
    level: "b2",
    title: "B2: Nominalisation",
    minutes: 12,
    html: `
      <p>B2 texts pack verbs into nouns: <span class="de">entscheiden → die Entscheidung; entwickeln → die Entwicklung; teilnehmen → die Teilnahme.</span></p>
      <p class="de">Wegen der Erhöhung der Miete… instead of Weil die Miete steigt…</p>
      <p>Useful for Lesen at B1 already: if you see <span class="de">die Lösung des Problems</span>, unpack it as <span class="de">man löst das Problem</span>.</p>
    `,
  },
  {
    id: "advconn",
    level: "b2",
    title: "B2: Advanced connectors",
    minutes: 12,
    html: `
      <p>Verb last: <span class="de">sofern, zumal, während (whereas), indem, wodurch, sodass, je … desto</span>.</p>
      <p>Verb second: <span class="de">dennoch, infolgedessen, hingegen, stattdessen, vielmehr</span>.</p>
      <p class="de">Je mehr ich lerne, desto sicherer werde ich. Die Stadt ist teuer. Dennoch bleibt sie beliebt.</p>
    `,
  },
  {
    id: "subjmodals",
    level: "b2",
    title: "B2: Subjective modals (rumour / deduction)",
    minutes: 10,
    html: `
      <p><span class="de">soll</span> = they say. <span class="de">will</span> = claims (doubt). <span class="de">muss</span> = must be (logical). <span class="de">kann / könnte</span> = might.</p>
      <p class="de">Er soll krank sein. Sie will nichts gesehen haben. Das muss ein Irrtum sein.</p>
    `,
  },
  {
    id: "partizip",
    level: "b2",
    title: "B2: Participles as adjectives",
    minutes: 10,
    html: `
      <p class="de">die steigenden Mieten (rising rents) · der geschriebene Brief (the written letter) · eine überzeugende Lösung</p>
      <p>This is how B2 packs relative clauses. For B1 reading: strip it to a verb. <span class="de">die im Zentrum gelegene Wohnung</span> = the flat that lies in the centre.</p>
    `,
  },
]
});
