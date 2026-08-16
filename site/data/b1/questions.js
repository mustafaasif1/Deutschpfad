registerPack("b1", {
  questions: [
  // gender / articles
  { id:"g1", set:"gender", type:"mcq", prompt:"Choose the correct article: ___ Wohnung ist zu teuer.", options:["der","die","das"], answer:"die", explain:"Wohnung ends in -ung → feminine.", level:"a2" },
  { id:"g2", set:"gender", type:"mcq", prompt:"___ Mädchen kommt aus Köln. (diminutive -chen)", options:["Der","Die","Das"], answer:"Das", explain:"-chen is neuter, even for a girl.", level:"a2" },
  { id:"g3", set:"gender", type:"mcq", prompt:"Plural nominative of der Tisch?", options:["die Tische","der Tische","den Tische"], answer:"die Tische", explain:"All plurals take die in Nom/Akk.", level:"a2" },
  { id:"g4", set:"gender", type:"gap", prompt:"Fill the article: Ich habe ___ Auto. (neuter, ein-word)", answer:["ein","ein Auto"], explain:"Neuter accusative of ein is still ein.", level:"a2" },
  { id:"g5", set:"gender", type:"mcq", prompt:"___ Freundlichkeit (kindness) — gender?", options:["der","die","das"], answer:"die", explain:"-keit → feminine.", level:"a2" },
  { id:"g6", set:"gender", type:"mcq", prompt:"___ Problem", options:["der","die","das"], answer:"das", explain:"Loanword Problem is neuter.", level:"a2" },
  { id:"g7", set:"gender", type:"tf", prompt:"All nouns in the plural take die in the nominative.", answer:true, explain:"Yes: die Männer, die Frauen, die Kinder.", level:"a2" },
  { id:"g8", set:"gender", type:"mcq", prompt:"kein + masculine accusative: Ich habe ___ Job.", options:["kein","keinen","keinem"], answer:"keinen", explain:"ein-words: m Akk = -en.", level:"a2" },

  // akkusativ
  { id:"a1", set:"akkusativ", type:"mcq", prompt:"Ich sehe ___ Mann.", options:["der","den","dem"], answer:"den", explain:"Direct object, masculine → den.", level:"a2" },
  { id:"a2", set:"akkusativ", type:"mcq", prompt:"Das Geschenk ist ___ dich.", options:["für","mit","bei"], answer:"für", explain:"für + always accusative.", level:"a2" },
  { id:"a3", set:"akkusativ", type:"gap", prompt:"Ich kaufe ___ Tisch. (ein, masculine)", answer:["einen","einen Tisch"], explain:"ein → einen in m Akk.", level:"a2" },
  { id:"a4", set:"akkusativ", type:"mcq", prompt:"Ich gehe ___ die Stadt. (into)", options:["in","im","bei"], answer:"in", explain:"in + Akk for motion: in die Stadt.", level:"a2" },
  { id:"a5", set:"akkusativ", type:"mcq", prompt:"ohne ___ Ticket kannst du nicht einsteigen.", options:["ein","einen","einem"], answer:"ein", explain:"Ticket is neuter. ohne + Akk, neuter ein stays ein.", level:"b1" },
  { id:"a6", set:"akkusativ", type:"mcq", prompt:"Replace: Ich sehe die Frau. → Ich sehe ___.", options:["sie","ihr","ihn"], answer:"sie", explain:"Feminine accusative pronoun is sie.", level:"a2" },
  { id:"a7", set:"akkusativ", type:"order", prompt:"Put the words in order.", words:["Ich","rufe","meinen","Bruder","an"], answer:"Ich rufe meinen Bruder an", explain:"anrufen is separable; meinen = m Akk.", level:"b1" },
  { id:"a8", set:"akkusativ", type:"mcq", prompt:"Es gibt ___ Park in der Nähe.", options:["ein","einen","einem"], answer:"einen", explain:"es gibt + Akk. Park is masculine.", level:"b1" },

  // dativ
  { id:"da1", set:"dativ", type:"mcq", prompt:"Ich helfe ___ Frau.", options:["die","der","den"], answer:"der", explain:"helfen + Dativ. Feminine der.", level:"a2" },
  { id:"da2", set:"dativ", type:"mcq", prompt:"Ich fahre ___ Bus.", options:["mit dem","mit den","mit der"], answer:"mit dem", explain:"mit + Dativ. Bus is masculine → dem.", level:"a2" },
  { id:"da3", set:"dativ", type:"gap", prompt:"Das Buch gehört ___ (ich, dative pronoun).", answer:["mir"], explain:"gehören + Dativ: mir.", level:"a2" },
  { id:"da4", set:"dativ", type:"mcq", prompt:"Wir wohnen ___ unseren Freunden.", options:["bei","zu","nach"], answer:"bei", explain:"bei + Dat = at someone's place / with.", level:"b1" },
  { id:"da5", set:"dativ", type:"mcq", prompt:"Ich danke ___ für die Hilfe. (Sie, formal)", options:["Sie","Ihnen","Ihnen Sie"], answer:"Ihnen", explain:"danken + Dativ. Formal dative is Ihnen.", level:"b1" },
  { id:"da6", set:"dativ", type:"mcq", prompt:"Das gefällt ___ nicht. (the children)", options:["die Kinder","den Kindern","der Kinder"], answer:"den Kindern", explain:"gefallen + Dat. Plural den + n on Kindern.", level:"b1" },
  { id:"da7", set:"dativ", type:"order", prompt:"Order the sentence (dative then accusative).", words:["Ich","gebe","dem","Mann","das","Buch"], answer:"Ich gebe dem Mann das Buch", explain:"Noun objects: Dativ then Akkusativ.", level:"b1" },
  { id:"da8", set:"dativ", type:"mcq", prompt:"seit ___ Jahr lerne ich Deutsch.", options:["ein","einem","einen"], answer:"einem", explain:"seit + Dativ. Jahr is neuter → einem. Present tense.", level:"b1" },

  // cases mix
  { id:"c1", set:"cases-mix", type:"mcq", prompt:"Ich schreibe meiner Freundin ___ Brief.", options:["ein","einen","einem"], answer:"einen", explain:"The letter is the direct object (Akk). Brief is masculine → einen. The friend is already Dativ (meiner Freundin).", level:"b1" },
  { id:"c2", set:"cases-mix", type:"mcq", prompt:"Best complete sentence:", options:["Ich schreibe meiner Freundin einen Brief.","Ich schreibe meine Freundin einen Brief.","Ich schreibe meiner Freundin einem Brief."], answer:"Ich schreibe meiner Freundin einen Brief.", explain:"Person = Dativ, letter = Akkusativ.", level:"b1" },
  { id:"c3", set:"cases-mix", type:"mcq", prompt:"Ich bin ___ Kino. (location)", options:["in das","ins","im"], answer:"im", explain:"wo? → Dativ. im = in dem.", level:"a2" },
  { id:"c4", set:"cases-mix", type:"mcq", prompt:"Ich gehe ___ Kino. (destination)", options:["im","ins","in dem"], answer:"ins", explain:"wohin? → Akk. ins = in das.", level:"a2" },
  { id:"c5", set:"cases-mix", type:"mcq", prompt:"wegen ___ Wetters bleiben wir zu Hause.", options:["des","dem","den"], answer:"des", explain:"wegen + Genitiv in careful written German: des Wetters.", level:"b1" },
  { id:"c6", set:"cases-mix", type:"gap", prompt:"Pronoun: Ich gebe ___ das Buch. (to him)", answer:["ihm"], explain:"Dative of er is ihm.", level:"a2" },
  { id:"c7", set:"cases-mix", type:"mcq", prompt:"n-noun: Ich kenne ___ Kollegen.", options:["ein","einen","einem"], answer:"einen", explain:"Kollege is weak masculine. Akk: einen Kollegen.", level:"b1" },
  { id:"c8", set:"cases-mix", type:"mcq", prompt:"Ich gehe ___ Hause. / Ich bin ___ Hause.", options:["nach / zu","zu / nach","nach / nach"], answer:"nach / zu", explain:"nach Hause = homeward. zu Hause = at home.", level:"a2" },
  { id:"c9", set:"cases-mix", type:"mcq", prompt:"Das ist das Auto ___ Bruders. (my)", options:["mein","meines","meinem"], answer:"meines", explain:"Genitive masculine: meines Bruders.", level:"b1" },
  { id:"c10", set:"cases-mix", type:"tf", prompt:"After für the noun is dative.", answer:false, explain:"für is always accusative.", level:"a2" },
  { id:"c11", set:"cases-mix", type:"mcq", prompt:"Wir helfen ___ Kindern.", options:["die","der","den"], answer:"den", explain:"helfen + Dat plural = den + n.", level:"b1" },
  { id:"c12", set:"cases-mix", type:"mcq", prompt:"Ich warte ___ den Bus.", options:["auf","an","für"], answer:"auf", explain:"warten auf + Akk.", level:"b1" },
  { id:"c13", set:"cases-mix", type:"mcq", prompt:"Ich freue mich ___ den Urlaub. (looking forward)", options:["auf","über","an"], answer:"auf", explain:"sich freuen auf = looking forward. über = happy about a fact already true.", level:"b1" },
  { id:"c14", set:"cases-mix", type:"mcq", prompt:"Er hat sich ___ das Geschenk gefreut.", options:["auf","über","für"], answer:"über", explain:"Past fact → sich freuen über.", level:"b1" },
  { id:"c15", set:"cases-mix", type:"gap", prompt:"Ich bewerbe mich ___ die Stelle. (preposition)", answer:["um"], explain:"sich bewerben um + Akk.", level:"b1" },
  { id:"c16", set:"cases-mix", type:"mcq", prompt:"Ich interessiere mich ___ Sport.", options:["für","an","über"], answer:"für", explain:"sich interessieren für.", level:"b1" },
  { id:"c17", set:"cases-mix", type:"mcq", prompt:"Ich habe Angst ___ der Prüfung.", options:["vor","für","über"], answer:"vor", explain:"Angst haben vor + Dat.", level:"b1" },
  { id:"c18", set:"cases-mix", type:"order", prompt:"Build the sentence.", words:["Gestern","habe","ich","meinem","Chef","eine","E-Mail","geschrieben"], answer:"Gestern habe ich meinem Chef eine E-Mail geschrieben", explain:"Time in pos 1, verb second, dative person, akk object, participle last.", level:"b1" },
  { id:"c19", set:"cases-mix", type:"mcq", prompt:"Man darf ___ hier nicht rauchen. (people in general, Akk of man)", options:["man","einen","einem"], answer:"einen", explain:"man in accusative is einen.", level:"b1" },
  { id:"c20", set:"cases-mix", type:"mcq", prompt:"Ich stelle das Glas ___ den Tisch. (onto)", options:["auf","auf dem","an"], answer:"auf", explain:"Placement = Akk: auf den Tisch. (auf dem would be location already there)", level:"b1" },

  // perfekt
  { id:"p1", set:"perfekt", type:"mcq", prompt:"Gestern ___ ich nach Hause ___. (gehen)", options:["habe / gegangen","bin / gegangen","bin / gegeht"], answer:"bin / gegangen", explain:"gehen takes sein. Partizip gegangen.", level:"a2" },
  { id:"p2", set:"perfekt", type:"mcq", prompt:"Ich ___ das Buch ___. (lesen)", options:["habe / gelesen","bin / gelesen","habe / gelest"], answer:"habe / gelesen", explain:"lesen is strong, haben.", level:"a2" },
  { id:"p3", set:"perfekt", type:"mcq", prompt:"Wir ___ uns um 6 ___. (treffen, reflexive)", options:["haben / getroffen","sind / getroffen","haben / getrefft"], answer:"haben / getroffen", explain:"sich treffen takes haben.", level:"b1" },
  { id:"p4", set:"perfekt", type:"gap", prompt:"Partizip of aufstehen?", answer:["aufgestanden"], explain:"Separable: prefix + ge + standen.", level:"b1" },
  { id:"p5", set:"perfekt", type:"mcq", prompt:"Ich ___ meine Tante ___. (besuchen)", options:["habe / besucht","habe / gebesucht","bin / besucht"], answer:"habe / besucht", explain:"inseparable be- → no ge-.", level:"b1" },
  { id:"p6", set:"perfekt", type:"mcq", prompt:"Was ist passiert? Es ___ ein Unfall ___.", options:["hat / passiert","ist / passiert","ist / gepassiert"], answer:"ist / passiert", explain:"passieren takes sein.", level:"b1" },
  { id:"p7", set:"perfekt", type:"tf", prompt:"Ich habe nach Berlin gefahren is correct.", answer:false, explain:"Motion fahren without object uses sein: Ich bin nach Berlin gefahren.", level:"a2" },
  { id:"p8", set:"perfekt", type:"mcq", prompt:"Sie ___ das Hotel ___. (reservieren)", options:["hat / reserviert","hat / gereserviert","ist / reserviert"], answer:"hat / reserviert", explain:"-ieren verbs: no ge-.", level:"b1" },

  // word order
  { id:"wo1", set:"wordorder", type:"mcq", prompt:"Heute ___ ich Deutsch.", options:["lerne","ich lerne","lernen"], answer:"lerne", explain:"Heute is position 1, verb must be position 2: lerne.", level:"a2" },
  { id:"wo2", set:"wordorder", type:"order", prompt:"Order:", words:["Um","8 Uhr","beginnt","der","Kurs"], answer:"Um 8 Uhr beginnt der Kurs", explain:"Time phrase is one unit in position 1.", level:"b1" },
  { id:"wo3", set:"wordorder", type:"mcq", prompt:"Yes/no question:", options:["Kommst du mit?","Du kommst mit?","Mit kommst du?"], answer:"Kommst du mit?", explain:"Verb first in yes/no questions.", level:"a2" },
  { id:"wo4", set:"wordorder", type:"tf", prompt:"You can put two ideas before the verb: Heute in Berlin fahre ich.", answer:false, explain:"Only one unit in position 1.", level:"b1" },

  // connectors
  { id:"co1", set:"connectors", type:"mcq", prompt:"Ich bleibe zu Hause, ___ ich krank bin.", options:["weil","denn","deshalb"], answer:"weil", explain:"Verb is already last (bin). weil fits. denn would need ich bin krank.", level:"b1" },
  { id:"co2", set:"connectors", type:"mcq", prompt:"Ich bin krank. ___ bleibe ich zu Hause.", options:["Weil","Denn","Deshalb"], answer:"Deshalb", explain:"deshalb takes position 1, verb second: bleibe.", level:"b1" },
  { id:"co3", set:"connectors", type:"mcq", prompt:"Ich bleibe zu Hause, ___ ich bin krank.", options:["weil","denn","obwohl"], answer:"denn", explain:"denn does not send the verb to the end.", level:"b1" },
  { id:"co4", set:"connectors", type:"mcq", prompt:"___ ich Kind war, wohnte ich auf dem Land.", options:["Wenn","Als","Wann"], answer:"Als", explain:"One period in the past → als.", level:"b1" },
  { id:"co5", set:"connectors", type:"mcq", prompt:"___ ich Zeit habe, rufe ich dich an.", options:["Als","Wenn","Wann"], answer:"Wenn", explain:"Present/future if/whenever → wenn.", level:"b1" },
  { id:"co6", set:"connectors", type:"mcq", prompt:"Ich weiß nicht, ___ er kommt.", options:["wann","wenn","als"], answer:"wann", explain:"Indirect question 'when?' → wann, verb last.", level:"b1" },
  { id:"co7", set:"connectors", type:"mcq", prompt:"___ es geregnet hat, sind wir spazieren gegangen.", options:["Obwohl","Trotzdem","Weil"], answer:"Obwohl", explain:"obwohl + verb last, then main clause starts with verb.", level:"b1" },
  { id:"co8", set:"connectors", type:"mcq", prompt:"Es hat geregnet. ___ sind wir spazieren gegangen.", options:["Obwohl","Trotzdem","Weil"], answer:"Trotzdem", explain:"trotzdem is verb-second adverb.", level:"b1" },
  { id:"co9", set:"connectors", type:"mcq", prompt:"Ich lerne Deutsch, ___ in Deutschland zu arbeiten.", options:["damit","um","weil"], answer:"um", explain:"Same subject → um … zu.", level:"b1" },
  { id:"co10", set:"connectors", type:"mcq", prompt:"Ich erkläre das langsam, ___ du mich verstehst.", options:["um","damit","zu"], answer:"damit", explain:"Different subject → damit.", level:"b1" },
  { id:"co11", set:"connectors", type:"order", prompt:"Order the weil-clause sentence.", words:["Ich","lerne","weil","ich","die","Prüfung","bestehen","will"], answer:"Ich lerne weil ich die Prüfung bestehen will", explain:"will goes to the end of the weil-clause.", level:"b1" },
  { id:"co12", set:"connectors", type:"mcq", prompt:"Ich trinke nicht Kaffee, ___ Tee.", options:["aber","sondern","denn"], answer:"sondern", explain:"sondern after a negation = but rather.", level:"b1" },
  { id:"co13", set:"connectors", type:"gap", prompt:"Ich hoffe, ___ du kommst. (that)", answer:["dass"], explain:"dass + verb last. Spelling: ss not das.", level:"b1" },
  { id:"co14", set:"connectors", type:"mcq", prompt:"Ich weiß nicht, ___ er Zeit hat.", options:["dass","ob","wenn"], answer:"ob", explain:"whether → ob.", level:"b1" },
  { id:"co15", set:"connectors", type:"mcq", prompt:"Nachdem ich gegessen ___, bin ich spazieren gegangen.", options:["habe","hatte","bin"], answer:"hatte", explain:"nachdem often Plusquamperfekt: hatte gegessen.", level:"b1" },
  { id:"co16", set:"connectors", type:"tf", prompt:"After weil the verb stays in position 2.", answer:false, explain:"weil sends the verb to the end.", level:"a2" },
  { id:"co17", set:"connectors", type:"mcq", prompt:"Zuerst trinke ich Kaffee. ___ lese ich.", options:["Dann","Weil","Dass"], answer:"Dann", explain:"dann in position 1, verb second.", level:"a2" },
  { id:"co18", set:"connectors", type:"mcq", prompt:"Beeil dich, ___ wir den Bus verpassen.", options:["sonst","weil","deshalb"], answer:"sonst", explain:"sonst = otherwise, verb second.", level:"b1" },
  { id:"co19", set:"connectors", type:"mcq", prompt:"Je mehr ich lerne, ___ sicherer werde ich.", options:["desto","weil","dass"], answer:"desto", explain:"je … desto. Verb second after desto.", level:"b2" },
  { id:"co20", set:"connectors", type:"mcq", prompt:"Die Stadt ist teuer. ___ bleibt sie beliebt.", options:["Obwohl","Dennoch","Weil"], answer:"Dennoch", explain:"B2: dennoch = nevertheless, verb second. obwohl would need a clause.", level:"b2" },

  // modals
  { id:"mo1", set:"modals", type:"mcq", prompt:"Du ___ nicht kommen, wenn du keine Lust hast. (no obligation)", options:["darfst","musst","sollst"], answer:"musst", explain:"nicht müssen = don't have to. The sentence needs musst: Du musst nicht kommen.", level:"b1" },
  { id:"mo2", set:"modals", type:"mcq", prompt:"Hier ___ man nicht rauchen. (forbidden)", options:["muss","darf","kann"], answer:"darf", explain:"nicht dürfen = not allowed. man darf nicht.", level:"b1" },
  { id:"mo3", set:"modals", type:"mcq", prompt:"Ich ___ gerne einen Kaffee. (would like)", options:["möchte","mag","will"], answer:"möchte", explain:"möchte is the polite form.", level:"a2" },
  { id:"mo4", set:"modals", type:"tf", prompt:"Ich kann zu kommen is correct.", answer:false, explain:"No zu after modals: Ich kann kommen.", level:"a2" },
  { id:"mo5", set:"modals", type:"mcq", prompt:"Gestern ___ ich bis 20 Uhr arbeiten. (past, spoken)", options:["muss","musste","habe müssen"], answer:"musste", explain:"Präteritum of müssen is cleaner.", level:"b1" },
  { id:"mo6", set:"modals", type:"order", prompt:"Order:", words:["Ich","will","heute","früh","aufstehen"], answer:"Ich will heute früh aufstehen", explain:"Modal conjugated, infinitive (with prefix attached) at the end.", level:"b1" },

  // separable
  { id:"se1", set:"separable", type:"mcq", prompt:"Ich ___ um 7 Uhr ___. (aufstehen, present)", options:["stehe / auf","aufstehe / —","stehe auf / auf"], answer:"stehe / auf", explain:"Prefix to the end.", level:"a2" },
  { id:"se2", set:"separable", type:"mcq", prompt:"…, weil ich um 7 Uhr ___.", options:["stehe auf","aufstehe","auf stehe"], answer:"aufstehe", explain:"In a subordinate clause the prefix stays attached.", level:"b1" },
  { id:"se3", set:"separable", type:"gap", prompt:"Perfekt of einkaufen (ich)? ich ___ ___.", answer:["habe eingekauft","hab eingekauft"], explain:"haben + eingekauft.", level:"b1" },
  { id:"se4", set:"separable", type:"mcq", prompt:"Ich habe meine Freundin ___. (besuchen)", options:["besucht","gebesucht","besuchen"], answer:"besucht", explain:"inseparable: no ge-.", level:"b1" },

  // adjectives
  { id:"ad1", set:"adjectives", type:"mcq", prompt:"Das ist ein ___ Kurs. (interessant)", options:["interessante","interessanter","interessanten"], answer:"interessanter", explain:"ein + m Nom → adjective -er.", level:"b1" },
  { id:"ad2", set:"adjectives", type:"mcq", prompt:"Ich habe den ___ Lehrer nicht verstanden. (neu)", options:["neue","neuer","neuen"], answer:"neuen", explain:"den + m Akk → -en.", level:"b1" },
  { id:"ad3", set:"adjectives", type:"mcq", prompt:"ein ___ Auto (alt, neuter)", options:["alter","altes","alte"], answer:"altes", explain:"ein + n Nom/Akk → -es.", level:"b1" },
  { id:"ad4", set:"adjectives", type:"mcq", prompt:"bei ___ Wetter bleiben wir zu Hause. (schlecht, no article)", options:["schlechtem","schlechtes","schlechten"], answer:"schlechtem", explain:"No article, dative neuter → -em.", level:"b1" },
  { id:"ad5", set:"adjectives", type:"mcq", prompt:"die ___ Wohnung (klein, Nom)", options:["kleine","kleiner","kleinen"], answer:"kleine", explain:"die + Nom f → -e.", level:"b1" },
  { id:"ad6", set:"adjectives", type:"mcq", prompt:"mit ___ alten Handy (mein, Dat n)", options:["meinem","meinen","mein"], answer:"meinem", explain:"The article is meinem; adjective then -en: mit meinem alten Handy. Question asks for mein-form.", level:"b1" },
  { id:"ad7", set:"adjectives", type:"mcq", prompt:"Berlin ist größer ___ Bonn.", options:["wie","als","so"], answer:"als", explain:"Comparative uses als (than).", level:"a2" },
  { id:"ad8", set:"adjectives", type:"mcq", prompt:"Das ist nicht so teuer ___ in München.", options:["als","wie","denn"], answer:"wie", explain:"so … wie = as … as.", level:"b1" },
  { id:"ad9", set:"adjectives", type:"mcq", prompt:"gut → comparative?", options:["guter","besser","am guten"], answer:"besser", explain:"Irregular: gut–besser–am besten.", level:"a2" },
  { id:"ad10", set:"adjectives", type:"mcq", prompt:"keine ___ Ideen (neu, plural Nom)", options:["neue","neuen","neuer"], answer:"neuen", explain:"keine + plural → adjective -en.", level:"b1" },

  // prepositions
  { id:"pr1", set:"prepositions", type:"mcq", prompt:"Ich wohne ___ Berlin.", options:["in","nach","zu"], answer:"in", explain:"Location in a city: in + city (in Berlin). nach is motion to a city.", level:"a2" },
  { id:"pr2", set:"prepositions", type:"mcq", prompt:"Ich fahre ___ Hamburg.", options:["in","nach","zu"], answer:"nach", explain:"nach + city (no article) for going to.", level:"a2" },
  { id:"pr3", set:"prepositions", type:"mcq", prompt:"Ich gehe ___ Arzt.", options:["zum","nach dem","in den"], answer:"zum", explain:"zu + person/professional: zum Arzt.", level:"a2" },
  { id:"pr4", set:"prepositions", type:"mcq", prompt:"Wir treffen uns ___ Montag.", options:["am","im","um"], answer:"am", explain:"am + weekday.", level:"a2" },
  { id:"pr5", set:"prepositions", type:"mcq", prompt:"Der Kurs beginnt ___ 18 Uhr.", options:["am","um","im"], answer:"um", explain:"um + clock time.", level:"a2" },
  { id:"pr6", set:"prepositions", type:"mcq", prompt:"Das Bild hängt ___ der Wand. (location)", options:["an","an die","auf"], answer:"an", explain:"an der Wand = on the wall (vertical), Dativ.", level:"b1" },
  { id:"pr7", set:"prepositions", type:"mcq", prompt:"Ich hänge das Bild ___ die Wand.", options:["an","an der","auf der"], answer:"an", explain:"Motion onto the wall: an die Wand (Akk).", level:"b1" },
  { id:"pr8", set:"prepositions", type:"gap", prompt:"Ich warte ___ den Zug. (preposition)", answer:["auf"], explain:"warten auf.", level:"b1" },

  // konjunktiv 2
  { id:"k1q", set:"konjunktiv2", type:"mcq", prompt:"___ Sie mir bitte helfen?", options:["Können","Könnten","Könntet"], answer:"Könnten", explain:"Polite request: Könnten Sie.", level:"b1" },
  { id:"k2q", set:"konjunktiv2", type:"mcq", prompt:"Ich ___ gerne Deutsch lernen.", options:["werde","würde","willst"], answer:"würde", explain:"würde + infinitive = would.", level:"b1" },
  { id:"k3q", set:"konjunktiv2", type:"mcq", prompt:"Wenn ich Zeit ___, würde ich kommen.", options:["habe","hätte","hatte"], answer:"hätte", explain:"Unreal if-clause uses Konjunktiv II.", level:"b1" },
  { id:"k4q", set:"konjunktiv2", type:"mcq", prompt:"Wäre es ___, den Termin zu verschieben?", options:["möglich","möchte","muss"], answer:"möglich", explain:"Wäre es möglich… is a set polite formula.", level:"b1" },
  { id:"k5q", set:"konjunktiv2", type:"tf", prompt:"Ich würde gerne is more polite than Ich will.", answer:true, explain:"Yes — use it in letters.", level:"b1" },

  // relative
  { id:"r1", set:"relative", type:"mcq", prompt:"Das ist der Mann, ___ nebenan wohnt.", options:["der","den","dem"], answer:"der", explain:"He is the subject of wohnt → Nominativ der.", level:"b1" },
  { id:"r2", set:"relative", type:"mcq", prompt:"Das ist der Mann, ___ ich gestern gesehen habe.", options:["der","den","dem"], answer:"den", explain:"I saw him → Akkusativ den.", level:"b1" },
  { id:"r3", set:"relative", type:"mcq", prompt:"Das ist der Mann, ___ ich das Buch gegeben habe.", options:["der","den","dem"], answer:"dem", explain:"geben + Dativ.", level:"b1" },
  { id:"r4", set:"relative", type:"mcq", prompt:"Die Frau, ___ Auto kaputt ist, kommt mit dem Bus.", options:["der","deren","dessen"], answer:"deren", explain:"Feminine genitive relative: deren.", level:"b1" },
  { id:"r5", set:"relative", type:"mcq", prompt:"Alles, ___ du brauchst, steht auf der Liste.", options:["das","was","dass"], answer:"was", explain:"After alles: was.", level:"b1" },
  { id:"r6", set:"relative", type:"order", prompt:"Order:", words:["Die","Wohnung","die","ich","gemietet","habe","liegt","im","Zentrum"], answer:"Die Wohnung die ich gemietet habe liegt im Zentrum", explain:"Relative clause verb last: gemietet habe.", level:"b1" },

  // zu
  { id:"z1", set:"zu", type:"mcq", prompt:"Ich versuche, pünktlich ___ kommen.", options:["zu","um","—"], answer:"zu", explain:"versuchen + zu + infinitive.", level:"b1" },
  { id:"z2", set:"zu", type:"mcq", prompt:"Ich lerne, ___ den Test zu bestehen.", options:["damit","um","für"], answer:"um", explain:"um … zu, same subject.", level:"b1" },
  { id:"z3", set:"zu", type:"mcq", prompt:"Ich will heute ___ kommen. (modal)", options:["zu","um zu","— nothing —"], answer:"— nothing —", explain:"No zu after modals.", level:"a2" },
  { id:"z4", set:"zu", type:"gap", prompt:"Separable: Ich versuche, um 7 ___. (aufstehen)", answer:["aufzustehen"], explain:"zu goes between prefix and stem.", level:"b1" },

  // passive
  { id:"pa1", set:"passive", type:"mcq", prompt:"Die Tür ___ um 9 Uhr geöffnet.", options:["wird","ist worden","hat"], answer:"wird", explain:"Present passive: wird + Partizip.", level:"b1" },
  { id:"pa2", set:"passive", type:"mcq", prompt:"Das Formular muss ___ werden.", options:["ausfüllen","ausgefüllt","auszufüllen"], answer:"ausgefüllt", explain:"Modal + passive: muss ausgefüllt werden.", level:"b1" },
  { id:"pa3", set:"passive", type:"tf", prompt:"Der Laden ist geschlossen describes a state (Zustandspassiv).", answer:true, explain:"sein + Partizip = state, not the process.", level:"b1" },

  // reflexive
  { id:"rx1", set:"reflexive", type:"mcq", prompt:"Ich freue ___ auf das Fest.", options:["mich","mir","sich"], answer:"mich", explain:"ich → mich (Akk).", level:"b1" },
  { id:"rx2", set:"reflexive", type:"mcq", prompt:"Ich wasche ___ die Hände.", options:["mich","mir","mein"], answer:"mir", explain:"Body part is Akk, reflexive is Dat.", level:"b1" },
  { id:"rx3", set:"reflexive", type:"mcq", prompt:"Wir treffen ___ um 6 Uhr.", options:["uns","unser","euch"], answer:"uns", explain:"wir → uns.", level:"a2" },

  // verbs irregular
  { id:"ve1", set:"verbs", type:"mcq", prompt:"er ___ (geben, present)", options:["gebt","gibt","gab"], answer:"gibt", explain:"e→i in du/er.", level:"a2" },
  { id:"ve2", set:"verbs", type:"gap", prompt:"Partizip of schreiben?", answer:["geschrieben"], explain:"strong: geschrieben.", level:"a2" },
  { id:"ve3", set:"verbs", type:"mcq", prompt:"Präteritum of sein, ich:", options:["bin","war","gewesen"], answer:"war", explain:"ich war.", level:"a2" },
  { id:"ve4", set:"verbs", type:"mcq", prompt:"nehmen → er ___ / Partizip ___", options:["nimmt / genommen","nimmt / genehmt","nehmt / genommen"], answer:"nimmt / genommen", explain:"nimmt, genommen.", level:"b1" },
  { id:"ve5", set:"verbs", type:"mcq", prompt:"Ich ___ gestern den ganzen Tag. (bleiben, Perfekt)", options:["habe geblieben","bin geblieben","bin gebleibt"], answer:"bin geblieben", explain:"bleiben takes sein.", level:"b1" },
  { id:"ve6", set:"verbs", type:"gap", prompt:"denken — dachte — ___", answer:["gedacht"], explain:"mixed verb: gedacht.", level:"b1" },
  { id:"ve7", set:"verbs", type:"mcq", prompt:"essen → er ___ / Partizip ___", options:["isst / gegessen","esst / geessen","isst / geesst"], answer:"isst / gegessen", explain:"isst, gegessen.", level:"a2" },
  { id:"ve8", set:"verbs", type:"mcq", prompt:"werden (become) Perfekt: sie ___ Ärztin ___.", options:["hat / geworden","ist / geworden","ist / gewerden"], answer:"ist / geworden", explain:"werden takes sein.", level:"b1" },

  // redemittel
  { id:"re1", set:"redemittel", type:"mcq", prompt:"In my opinion…", options:["Meiner Meinung nach…","Meinem Meinung nach…","Meine Meinung nach…"], answer:"Meiner Meinung nach…", explain:"meiner is dative feminine of mein.", level:"b1" },
  { id:"re2", set:"redemittel", type:"mcq", prompt:"I suggest that we…", options:["Ich schlage vor, dass wir…","Ich schlage, dass wir vor…","Ich vorschlage, dass wir…"], answer:"Ich schlage vor, dass wir…", explain:"separable vorschlagen.", level:"b1" },
  { id:"re3", set:"redemittel", type:"mcq", prompt:"Then we agree.", options:["Dann sind wir uns einig.","Dann sind wir uns einigen.","Dann wir sind einig."], answer:"Dann sind wir uns einig.", explain:"Memorise this closer for Teil 3.", level:"b1" },
  { id:"re4", set:"redemittel", type:"mcq", prompt:"How about Saturday?", options:["Wie wäre es mit Samstag?","Wie wäre es um Samstag?","Wie wäre es für Samstag?"], answer:"Wie wäre es mit Samstag?", explain:"wie wäre es mit + Dat.", level:"b1" },
  { id:"re5", set:"redemittel", type:"mcq", prompt:"Could you please… (formal)", options:["Könnten Sie bitte…","Könntest Sie bitte…","Kannst Sie bitte…"], answer:"Könnten Sie bitte…", explain:"Formal polite.", level:"b1" },
  { id:"re6", set:"redemittel", type:"mcq", prompt:"On the one hand… on the other…", options:["Einerseits … andererseits …","Einseits … anderseits …","Einerseits … trotzdem …"], answer:"Einerseits … andererseits …", explain:"Classic B1/B2 opinion structure.", level:"b1" },

  // b2
  { id:"b2a", set:"k1", type:"mcq", prompt:"Die Ministerin sagte, das Problem ___ gelöst.", options:["ist","sei","wäre gewesen immer"], answer:"sei", explain:"Konjunktiv I of sein in indirect speech: sei.", level:"b2" },
  { id:"b2b", set:"k1", type:"mcq", prompt:"Er erklärte, man ___ genug Geld.", options:["hat","habe","hätte haben"], answer:"habe", explain:"Konjunktiv I of haben: er/man habe.", level:"b2" },
  { id:"b2c", set:"nominal", type:"mcq", prompt:"Nominalise: weil man die Miete erhöht → wegen ___ der Miete", options:["der Erhöhung","des Erhöhens","die Erhöhung"], answer:"der Erhöhung", explain:"wegen + Genitiv: der Erhöhung.", level:"b2" },
  { id:"b2d", set:"advconn", type:"mcq", prompt:"Man spart Geld, ___ man zu Hause kocht.", options:["indem","deshalb","trotzdem"], answer:"indem", explain:"indem = by doing. Verb last.", level:"b2" },
  { id:"b2e", set:"subjmodals", type:"mcq", prompt:"Rumour: Er ___ krank sein. (they say)", options:["muss","soll","will"], answer:"soll", explain:"soll = reported rumour.", level:"b2" },
  { id:"b2f", set:"subjmodals", type:"mcq", prompt:"She claims (speaker doubts): Sie ___ nichts gesehen haben.", options:["soll","will","muss"], answer:"will", explain:"will + perfect infinitive = dubious claim.", level:"b2" },
  { id:"b2g", set:"partizip", type:"mcq", prompt:"die ___ Mieten (steigen as adjective)", options:["steigenden","gestiegenen","steige"], answer:"steigenden", explain:"Present participle steigend + weak ending after die.", level:"b2" },
  { id:"b2h", set:"b2-mix", type:"mcq", prompt:"Das muss ein Irrtum ___. (deduction)", options:["sein","zu sein","ist"], answer:"sein", explain:"muss + infinitive: logical deduction.", level:"b2" },
  { id:"b2i", set:"b2-mix", type:"mcq", prompt:"sofern = ", options:["because","provided that / if","although"], answer:"provided that / if", explain:"sofern is a B2 condition word, verb last.", level:"b2" },
  { id:"b2j", set:"b2-mix", type:"mcq", prompt:"dennoch is closest to", options:["weil","trotzdem","damit"], answer:"trotzdem", explain:"dennoch = nevertheless, verb second — a more formal trotzdem.", level:"b2" },

  { id:"wo5", set:"wordorder", type:"mcq", prompt:"Nach der Arbeit ___ ich einkaufen.", options:["gehe","ich gehe","gehen ich"], answer:"gehe", explain:"After a prepositional phrase in position 1, the verb is still second: gehe.", level:"b1" },
  { id:"wo6", set:"wordorder", type:"order", prompt:"Order:", words:["Gestern","bin","ich","ins","Kino","gegangen"], answer:"Gestern bin ich ins Kino gegangen", explain:"Time, verb, subject, rest, participle last.", level:"b1" },
  { id:"wo7", set:"wordorder", type:"mcq", prompt:"Question: ___ beginnt der Kurs?", options:["Wann","Wenn","Als"], answer:"Wann", explain:"Direct question uses wann.", level:"a2" },
  { id:"wo8", set:"wordorder", type:"tf", prompt:"In Weil ich krank bin, bleibe ich zu Hause the second clause starts with the verb.", answer:true, explain:"When a subordinate clause comes first, the main clause is verb-first: bleibe ich…", level:"b1" },

  { id:"se5", set:"separable", type:"mcq", prompt:"Ich ___ dich später ___. (anrufen)", options:["rufe / an","anrufe / —","rufe an / an"], answer:"rufe / an", explain:"anrufen splits in present.", level:"a2" },
  { id:"se6", set:"separable", type:"mcq", prompt:"Wir sind um 9 Uhr ___. (ankommen)", options:["angekommen","gekommen an","geankommen"], answer:"angekommen", explain:"sein + angekommen.", level:"b1" },
  { id:"se7", set:"separable", type:"mcq", prompt:"Ich habe das Fenster ___. (zumachen)", options:["zugemacht","gemacht zu","gezumacht"], answer:"zugemacht", explain:"zu + ge + macht.", level:"b1" },
  { id:"se8", set:"separable", type:"mcq", prompt:"Sie hat den Termin ___. (absagen)", options:["abgesagt","gesagt ab","geabsagt"], answer:"abgesagt", explain:"abgesagt.", level:"b1" },

  { id:"z5", set:"zu", type:"mcq", prompt:"Es ist wichtig, jeden Tag ___. (üben)", options:["üben","zu üben","um üben"], answer:"zu üben", explain:"es ist + adj + zu + infinitive.", level:"b1" },
  { id:"z6", set:"zu", type:"mcq", prompt:"Er ist gegangen, ___ sich zu verabschieden.", options:["um","ohne","statt"], answer:"ohne", explain:"ohne … zu = without doing.", level:"b1" },
  { id:"z7", set:"zu", type:"tf", prompt:"Ich gehe zu schwimmen is correct.", answer:false, explain:"Ich gehe schwimmen — no zu after gehen + activity.", level:"b1" },
  { id:"z8", set:"zu", type:"mcq", prompt:"Lass uns ___! (gehen)", options:["gehen","zu gehen","gehend"], answer:"gehen", explain:"lassen + infinitive, no zu.", level:"b1" },

  { id:"pa4", set:"passive", type:"mcq", prompt:"Der Brief ___ von der Firma geschrieben.", options:["wurde","hat","war geworden"], answer:"wurde", explain:"Past process passive: wurde + Partizip.", level:"b1" },
  { id:"pa5", set:"passive", type:"mcq", prompt:"Hier ___ nicht geraucht. (man darf nicht)", options:["wird","ist","hat"], answer:"wird", explain:"Hier wird nicht geraucht.", level:"b1" },
  { id:"pa6", set:"passive", type:"tf", prompt:"von + Dativ introduces the agent in a passive sentence.", answer:true, explain:"Der Brief wurde von Anna geschrieben.", level:"b1" },

  { id:"rx4", set:"reflexive", type:"mcq", prompt:"Ich erinnere ___ nicht an den Namen.", options:["mich","mir","mein"], answer:"mich", explain:"sich erinnern an + Akk; reflexive Akk.", level:"b1" },
  { id:"rx5", set:"reflexive", type:"mcq", prompt:"Kaufst du ___ eine neue Jacke?", options:["dich","dir","dein"], answer:"dir", explain:"kaufen + Dat of person + Akk of thing.", level:"b1" },
  { id:"rx6", set:"reflexive", type:"mcq", prompt:"Sie müssen ___ beeilen.", options:["sich","Ihnen","Sie"], answer:"sich", explain:"Formal: sich beeilen. Sie müssen sich beeilen.", level:"b1" },

  { id:"ff1", set:"falsefriends", type:"mcq", prompt:"bekommen means", options:["become","receive / get","welcome"], answer:"receive / get", explain:"become is werden. bekommen = get.", level:"b1" },
  { id:"ff2", set:"falsefriends", type:"mcq", prompt:"also in German means", options:["also","therefore / so","always"], answer:"therefore / so", explain:"also ≠ also. Use auch for also.", level:"b1" },
  { id:"ff3", set:"falsefriends", type:"mcq", prompt:"eventuell means", options:["eventually","possibly","event"], answer:"possibly", explain:"False friend. Eventually ≈ schließlich / irgendwann.", level:"b1" },
  { id:"ff4", set:"falsefriends", type:"mcq", prompt:"aktuell means", options:["actual","current","active"], answer:"current", explain:"actual ≈ eigentlich / tatsächlich.", level:"b1" },
  { id:"ff5", set:"falsefriends", type:"mcq", prompt:"Gymnasium is", options:["a gym","a secondary school","a diploma"], answer:"a secondary school", explain:"Gym is Fitnessstudio.", level:"b1" },
  { id:"ff6", set:"falsefriends", type:"mcq", prompt:"Ich bin 25 Jahre ___ .", options:["haben","alt","alt haben"], answer:"alt", explain:"Ich bin 25 Jahre alt. Not Ich habe 25 Jahre.", level:"a2" },
  { id:"ff7", set:"falsefriends", type:"mcq", prompt:"The German word Gift means", options:["present","poison","talent"], answer:"poison", explain:"A present is das Geschenk.", level:"b1" },
  { id:"ff8", set:"falsefriends", type:"mcq", prompt:"sensibel means", options:["sensible","sensitive","sensor"], answer:"sensitive", explain:"sensible ≈ vernünftig.", level:"b2" },

  { id:"col1", set:"collocations", type:"mcq", prompt:"eine Entscheidung ___", options:["machen","treffen","tun"], answer:"treffen", explain:"eine Entscheidung treffen.", level:"b1" },
  { id:"col2", set:"collocations", type:"mcq", prompt:"eine Frage ___", options:["stellen","machen","sagen"], answer:"stellen", explain:"eine Frage stellen.", level:"b1" },
  { id:"col3", set:"collocations", type:"mcq", prompt:"Sport ___", options:["machen","treiben","spielen immer"], answer:"treiben", explain:"Sport treiben is the textbook collocation.", level:"b1" },
  { id:"col4", set:"collocations", type:"mcq", prompt:"Ich habe ___ Hunger.", options:["einen","— (nothing: Ich habe Hunger)","viel den"], answer:"— (nothing: Ich habe Hunger)", explain:"Hunger haben, no ein.", level:"a2" },
  { id:"col5", set:"collocations", type:"mcq", prompt:"nach Hause vs zu Hause: I am at home =", options:["Ich gehe nach Hause.","Ich bin zu Hause.","Ich bin nach Hause."], answer:"Ich bin zu Hause.", explain:"Location: zu Hause. Direction: nach Hause.", level:"a2" },
  { id:"col6", set:"collocations", type:"mcq", prompt:"Bescheid ___ (let someone know)", options:["sagen / geben","machen","treffen"], answer:"sagen / geben", explain:"Bescheid sagen / Bescheid geben.", level:"b1" },

  // Extra B1 exam pressure + A2→B1 bridges
  { id:"cm21", set:"cases-mix", type:"mcq", prompt:"Ich danke ___ für die Hilfe.", options:["dich","dir","du"], answer:"dir", explain:"danken + Dativ.", level:"a2" },
  { id:"cm22", set:"cases-mix", type:"mcq", prompt:"Er hilft ___ Bruder.", options:["sein","seinem","seinen"], answer:"seinem", explain:"helfen + Dativ → seinem Bruder.", level:"a2" },
  { id:"cm23", set:"cases-mix", type:"gap", prompt:"Type the article: Ich sehe ___ (der) Mann.", answer:["den"], explain:"Accusative masculine: den.", level:"a2" },
  { id:"cm24", set:"cases-mix", type:"mcq", prompt:"Ohne ___ Schlüssel komme ich nicht rein.", options:["den","dem","der"], answer:"den", explain:"ohne + Akkusativ.", level:"b1" },
  { id:"cm25", set:"cases-mix", type:"mcq", prompt:"Mit ___ Bus fahren wir zur Arbeit.", options:["den","dem","der"], answer:"dem", explain:"mit + Dativ.", level:"a2" },

  { id:"cn21", set:"connectors", type:"mcq", prompt:"___ es regnete, gingen wir spazieren.", options:["Weil","Obwohl","Deshalb"], answer:"Obwohl", explain:"obwohl = although; verb at end.", level:"b1" },
  { id:"cn22", set:"connectors", type:"mcq", prompt:"Ich bleibe zu Hause, ___ ich krank bin.", options:["denn","weil","deshalb"], answer:"weil", explain:"weil + verb at end. denn would need: denn ich bin krank.", level:"a2" },
  { id:"cn23", set:"connectors", type:"mcq", prompt:"Es war kalt. ___ habe ich eine Jacke angezogen.", options:["Weil","Obwohl","Deshalb"], answer:"Deshalb", explain:"Deshalb starts a main clause → verb second.", level:"b1" },
  { id:"cn24", set:"connectors", type:"mcq", prompt:"___ ich jung war, wohnte ich auf dem Land.", options:["Wenn","Als","Wann"], answer:"Als", explain:"als for one-time past. wenn = whenever / if.", level:"b1" },
  { id:"cn25", set:"connectors", type:"order", prompt:"Build: Ich weiß, dass er morgen kommt.", words:["Ich","weiß","dass","er","morgen","kommt"], answer:"Ich weiß dass er morgen kommt", explain:"dass → verb to the end of the clause.", level:"b1" },

  { id:"adj11", set:"adjectives", type:"mcq", prompt:"Das ist ein ___ Auto. (neu, neuter)", options:["neues","neue","neuen"], answer:"neues", explain:"ein + neuter nominative → -es.", level:"b1" },
  { id:"adj12", set:"adjectives", type:"mcq", prompt:"Ich trinke den ___ Kaffee. (heiß)", options:["heiße","heißen","heißer"], answer:"heißen", explain:"den + masculine accusative → -en.", level:"b1" },
  { id:"adj13", set:"adjectives", type:"mcq", prompt:"Mit ___ Freunden. (gut)", options:["guten","gute","guter"], answer:"guten", explain:"mit + dative plural → -en.", level:"b1" },
  { id:"adj14", set:"adjectives", type:"mcq", prompt:"Die ___ Frau heißt Anna. (jung)", options:["junge","jungen","junger"], answer:"junge", explain:"definite + feminine nominative → -e.", level:"b1" },
  { id:"adj15", set:"adjectives", type:"tf", prompt:"After ein, masculine nominative takes -er: ein neuer Tisch.", answer:true, explain:"Mixed inflection: ein neuer.", level:"b1" },

  { id:"k1a", set:"k1", type:"mcq", prompt:"Er sagt, er ___ morgen Zeit. (haben, rumour/report)", options:["hat","habe","hätte"], answer:"habe", explain:"Konjunktiv I: er habe — reported speech.", level:"b2" },
  { id:"k1b", set:"k1", type:"mcq", prompt:"Sie meint, sie ___ das nicht gewusst.", options:["hat","habe","hätte"], answer:"habe", explain:"sie habe … gewusst (K I).", level:"b2" },
  { id:"k1c", set:"k1", type:"tf", prompt:"Konjunktiv I is mainly for reported speech in news German.", answer:true, explain:"You recognise it in Lesen; producing it is B2+.", level:"b2" },

  { id:"nom1", set:"nominal", type:"mcq", prompt:"Nominalisation: wegen des ___ (regnen)", options:["Regens","Regnen","regnend"], answer:"Regens", explain:"wegen + Genitiv: wegen des Regens.", level:"b2" },
  { id:"nom2", set:"nominal", type:"mcq", prompt:"bei der ___ der Probleme (lösen)", options:["Lösung","Lösen","gelöst"], answer:"Lösung", explain:"die Lösung der Probleme.", level:"b2" },

  { id:"adv1", set:"advconn", type:"mcq", prompt:"___, muss man früher kommen. (consequently)", options:["Denn","Folglich","Weil"], answer:"Folglich", explain:"Folglich → verb second.", level:"b2" },
  { id:"adv2", set:"advconn", type:"mcq", prompt:"___, war der Zug pünktlich. (nevertheless)", options:["Trotzdem","Weil","Dass"], answer:"Trotzdem", explain:"Trotzdem + V2.", level:"b1" },

  { id:"rm7", set:"redemittel", type:"mcq", prompt:"Polite request:", options:["Gib mir das!","Könnten Sie mir bitte helfen?","Du musst helfen!"], answer:"Könnten Sie mir bitte helfen?", explain:"Könnten Sie… is exam gold for Schreiben/Sprechen.", level:"b1" },
  { id:"rm8", set:"redemittel", type:"mcq", prompt:"Soft disagreement in Teil 3:", options:["Nein.","Ich bin nicht so sicher, weil…","Das ist falsch."], answer:"Ich bin nicht so sicher, weil…", explain:"Soft no + reason, then counter-suggest.", level:"b1" },
  { id:"rm9", set:"redemittel", type:"mcq", prompt:"Close a plan:", options:["Tschüss.","Also, dann sind wir uns einig: …","Vielleicht."], answer:"Also, dann sind wir uns einig: …", explain:"Examiners listen for a clear decision.", level:"b1" },

  { id:"ff9", set:"falsefriends", type:"mcq", prompt:"Ich werde Arzt means", options:["I get a doctor","I will become a doctor","I receive a doctor"], answer:"I will become a doctor", explain:"werden = become. bekommen = receive.", level:"b1" },
  { id:"ff10", set:"falsefriends", type:"mcq", prompt:"brav means", options:["brave","well-behaved","bright"], answer:"well-behaved", explain:"brave ≈ mutig.", level:"b1" },

  { id:"col7", set:"collocations", type:"mcq", prompt:"einen Termin ___", options:["machen","vereinbaren","tun"], answer:"vereinbaren", explain:"einen Termin vereinbaren.", level:"b1" },
  { id:"col8", set:"collocations", type:"mcq", prompt:"eine Prüfung ___", options:["machen / ablegen","treffen","stellen"], answer:"machen / ablegen", explain:"eine Prüfung machen / ablegen.", level:"b1" },
  { id:"col9", set:"collocations", type:"mcq", prompt:"sich um eine Stelle ___", options:["bewerben","arbeiten","fragen"], answer:"bewerben", explain:"sich um eine Stelle bewerben.", level:"b1" },
],
  drills: [
  { id: "cases-mix", title: "Mixed cases", blurb: "Akk, Dat, prepositions, pronouns.", set: "cases-mix" },
  { id: "connectors", title: "Connectors", blurb: "weil, denn, deshalb, als, wenn, obwohl.", set: "connectors" },
  { id: "adjectives", title: "Adjective endings", blurb: "ein neuer, den neuen, bei gutem.", set: "adjectives" },
  { id: "prepositions", title: "Prepositions", blurb: "nach, zu, in, auf, um, am.", set: "prepositions" },
  { id: "b1-mix", title: "B1 mixed exam grammar", blurb: "Everything Sprachbausteine loves.", sets: ["connectors","adjectives","prepositions","konjunktiv2","relative","perfekt","modals","zu","falsefriends","collocations"] },
  { id: "verbs", title: "Irregular verbs", blurb: "Present, Präteritum, Partizip.", set: "verbs" },
  { id: "redemittel", title: "Speaking / writing phrases", blurb: "Opinion, planning, politeness.", set: "redemittel" },
  { id: "falsefriends", title: "False friends and traps", blurb: "bekommen, also, Gymnasium, Gift.", set: "falsefriends" },
  { id: "collocations", title: "Collocations", blurb: "Entscheidung treffen, Frage stellen.", set: "collocations" },
  { id: "b2-mix", title: "B2 stretch mix", blurb: "Konjunktiv I, connectors, rumours.", sets: ["k1","nominal","advconn","subjmodals","partizip","b2-mix"] },
]
});
