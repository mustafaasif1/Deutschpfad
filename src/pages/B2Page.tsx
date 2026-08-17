import { AppLink } from "@/components/ui/AppLink";
import { useApp } from "@/context/AppContext";
import { useDocumentTitle } from "@/hooks/useUi";

export function B2Page() {
  const { pack, meta, levelId } = useApp();
  useDocumentTitle("B2 stretch · Deutschpfad");
  if (!pack || !meta) return null;
  if (levelId !== "b1") {
    return (
      <>
        <h1>B2 stretch lives in the B1 track</h1>
        <p className="lead">
          Finish A1/A2 first. Switch to B1 when mocks feel easy — B2 recognition material is there so telc B1 feels slow.
          A full telc B2 exam gym can be added later.
        </p>
        <div className="btn-row">
          <AppLink className="btn btn-primary" to="/levels">
            Switch level
          </AppLink>
        </div>
      </>
    );
  }
  const lessons = pack.grammar.filter((g) => g.level === "b2");
  return (
    <>
      <h1>B2 stretch — so B1 feels easy</h1>
      <p className="lead">
        You do not need perfect B2 to pass telc B1. You need denser Lesen recognition and extra words for speaking. Do
        these after week 6. This is not a full B2 exam course.
      </p>
      <div className="grid grid-2">
        {lessons.map((g) => (
          <AppLink key={g.id} className="card clickable" to={`/grammar/${g.id}`}>
            <h3>{g.title}</h3>
            <p>{g.minutes} min</p>
          </AppLink>
        ))}
        <AppLink className="card clickable" to="/vocab/b2-abstract">
          <h3>B2 abstract vocab</h3>
          <p>Society, law, science, AI.</p>
        </AppLink>
        <AppLink className="card clickable" to="/vocab/b2-society">
          <h3>B2 society vocab</h3>
          <p>News German: Rente, Energiewende, Inflation.</p>
        </AppLink>
        <AppLink className="card clickable" to="/drill/b2-mix">
          <h3>B2 quiz mix</h3>
          <p>Konjunktiv I, rumours, participles.</p>
        </AppLink>
        <AppLink className="card clickable" to="/exam/lesen/lesen-3">
          <h3>Harder B1 Lesen</h3>
          <p>Paper 3 — denser everyday German.</p>
        </AppLink>
      </div>
    </>
  );
}
