import { AppLink } from "@/components/ui/AppLink";
import { FormatCard } from "@/components/ui/FormatCard";
import { German } from "@/components/ui/German";
import { useApp } from "@/context/AppContext";
import { COVERAGE_HONESTY, groupHoerenPapers, hoerenMeta, officialTelcUrl } from "@/lib/exam";
import { mixDrill } from "@/lib/mastery";
import { useDocumentTitle } from "@/hooks/useUi";

export function ExamHubPage() {
  const { pack, meta, levelId } = useApp();
  useDocumentTitle(meta ? `Exam · ${meta.title}` : "Exam · Deutschpfad");
  if (!pack || !meta || !levelId) return null;
  const hm = hoerenMeta(levelId);
  const papers = groupHoerenPapers(pack.exam.hoeren || []);
  const mix = mixDrill(pack);
  const fmt = pack.examFormat;
  const oralMin = fmt?.oral?.minutes || 15;

  return (
    <>
      <h1>{meta.exam} exam gym</h1>
      <p className="lead">
        Use this after you can produce this week’s topic — not instead of it. Same task types as the real {meta.title}{" "}
        paper. <AppLink to="/topics">Official topics</AppLink> tell you what to say; this gym trains how the booklet
        looks. Sit one skill per day from Today. Full mocks belong to weeks 7–8.
      </p>
      <FormatCard format={fmt} />
      <h2>Write &amp; speak</h2>
      <nav className="jump-list">
        <AppLink to="/exam/schreiben">
          <span className="jump-mark" aria-hidden="true">
            &raquo;
          </span>
          <span>
            <strong>Schreiben from memory</strong>
            <span className="jump-blurb">
              {(pack.exam.schreiben || []).length} tasks · hide the model · {hm.writeMin} min
              {levelId === "a1" ? " · form + short message" : levelId === "a2" ? " · form + short letter" : " · four Leitpunkte"}.
            </span>
          </span>
        </AppLink>
        <AppLink to="/exam/sprechen/run">
          <span className="jump-mark" aria-hidden="true">
            &raquo;
          </span>
          <span>
            <strong>Oral run (~{oralMin} min)</strong>
            <span className="jump-blurb">{fmt?.oral ? fmt.oral.note : "Teil 1–3 with a clock."}</span>
          </span>
        </AppLink>
        <AppLink to="/exam/sprechen">
          <span className="jump-mark" aria-hidden="true">
            &raquo;
          </span>
          <span>
            <strong>Sprechen phrases</strong>
            <span className="jump-blurb">Intro, cards, Teil 3 engine — then do the timed run.</span>
          </span>
        </AppLink>
      </nav>
      <h2>The booklet</h2>
      <nav className="jump-list">
        <AppLink to="/exam/lesen">
          <span className="jump-mark" aria-hidden="true">
            &raquo;
          </span>
          <span>
            <strong>Lesen</strong>
            <span className="jump-blurb">
              {(pack.exam.lesen || []).length} papers · {(fmt?.written && fmt.written[0]?.items) || "exam shape"}.
            </span>
          </span>
        </AppLink>
        <AppLink to="/exam/sprachbausteine">
          <span className="jump-mark" aria-hidden="true">
            &raquo;
          </span>
          <span>
            <strong>{levelId === "a1" || levelId === "a2" ? "Extra grammar cloze" : "Sprachbausteine"}</strong>
            <span className="jump-blurb">
              {levelId === "a1" || levelId === "a2"
                ? `Not a separate ${levelId.toUpperCase()} exam part — useful practice only.`
                : `${(pack.exam.sprachbausteine || []).length} cloze / bank sets (same 90-min booklet as Lesen).`}
            </span>
          </span>
        </AppLink>
        <AppLink to="/exam/hoeren">
          <span className="jump-mark" aria-hidden="true">
            &raquo;
          </span>
          <span>
            <strong>Hören (method)</strong>
            <span className="jump-blurb">
              {papers.length} full papers · ~{hm.minutes} min · exam-mode TTS.
            </span>
          </span>
        </AppLink>
        <AppLink to="/exam/ears">
          <span className="jump-mark" aria-hidden="true">
            &raquo;
          </span>
          <span>
            <strong>Official exam ears</strong>
            <span className="jump-blurb">Play your telc MP3 on this device. Browser voice trains method; this trains acoustics.</span>
          </span>
        </AppLink>
        {mix ? (
          <AppLink to={`/drill/${mix.id}`}>
            <span className="jump-mark" aria-hidden="true">
              &raquo;
            </span>
            <span>
              <strong>{mix.title}</strong>
              <span className="jump-blurb">{mix.blurb || "Mixed grammar."}</span>
            </span>
          </AppLink>
        ) : null}
      </nav>
      <h2>Full sitting</h2>
      <nav className="jump-list">
        <AppLink to="/exam/mock">
          <span className="jump-mark" aria-hidden="true">
            &raquo;
          </span>
          <span>
            <strong>Timed mocks</strong>
            <span className="jump-blurb">{(pack.exam.mocks || []).length} training papers in official order.</span>
          </span>
        </AppLink>
      </nav>
      <HighMarksCard />
      <div className="card" style={{ marginTop: "1rem" }}>
        <p className="kicker">What this gym covers — and what it cannot replace</p>
        <p>{COVERAGE_HONESTY[levelId]}</p>
      </div>
      <div className="card" style={{ marginTop: "1rem" }}>
        <h3>Pass smarter</h3>
        <ul>
          {(pack.exam.tips || []).map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <p>
          Official sample audio (real exam acoustics):{" "}
          <AppLink to={officialTelcUrl(fmt, levelId)}>telc.net {meta.title}</AppLink>
        </p>
      </div>
    </>
  );
}

function HighMarksCard() {
  const { levelId } = useApp();
  const trap = { a1: "4", a2: "5", b1: "7" }[levelId || "b1"] || "1";
  const oralN =
    levelId === "b1"
      ? "6 timed pair runs (20 min prep, then live Teil 1)"
      : levelId === "a2"
        ? "6 pair runs — weil + agree in Teil 3"
        : "6 group-style runs — cards, then one plan";
  const writeN =
    levelId === "a1"
      ? "form (Straße, PLZ, Ort) + ~30-word notes with the model locked"
      : levelId === "a2"
        ? "forms + du/Sie letters at 60–80 words, model locked"
        : "8+ letters, four Leitpunkte, 100–120 words, Könnten once in Sie letters";
  return (
    <div className="card" style={{ marginTop: "1rem" }}>
      <p className="kicker">High marks path</p>
      <h3>Train like the booklet, then go past pass</h3>
      <p>Pass is 60 percent. High marks come from doing the same tasks until they feel slow — not from longer grammar lessons.</p>
      <ol>
        <li>
          <AppLink to="/exam/sprechen/run">Oral</AppLink> — {oralN}. New card each time. Teil 3 only counts if you actually decide.
        </li>
        <li>
          <AppLink to="/exam/schreiben">Schreiben from memory</AppLink> — {writeN}.
        </li>
        <li>
          <AppLink to={`/exam/hoeren/${trap}`}>Hören trap paper {trap}</AppLink> — hunt <German>nicht / kein / erst / schon / halb / Gleis / 14 vs 40</German>. Guess every item. Teil 1 once.
        </li>
        <li>
          <AppLink to="/exam/ears">Official telc MP3</AppLink> — required, not optional. TTS only trains the question type.
        </li>
        <li>
          <AppLink to="/exam/mock">Mocks</AppLink> — sit them in official order until you are at 80 percent. Leave no blanks.
        </li>
      </ol>
    </div>
  );
}
