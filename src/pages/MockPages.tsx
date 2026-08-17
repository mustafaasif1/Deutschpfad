import { useParams } from "react-router-dom";
import { AppLink } from "@/components/ui/AppLink";
import { useApp } from "@/context/AppContext";
import { progressStore } from "@/state/progress";
import { noteFinished } from "@/state/session";
import { hoerenMeta, paperForHoerenIds } from "@/lib/exam";
import { formatClock } from "@/lib/dates";
import { useCountdown, useDocumentTitle } from "@/hooks/useUi";

export function MockListPage() {
  const { pack, meta } = useApp();
  useDocumentTitle(meta ? `Mocks · ${meta.title}` : "Mocks · Deutschpfad");
  if (!pack) return null;
  return (
    <>
      <h1>Written training mocks</h1>
      <p className="lead">Do one paper in a single sitting. Pause only between parts. Score each section as you go.</p>
      <div className="grid grid-2">
        {pack.exam.mocks.map((m) => (
          <AppLink key={m.id} className="card clickable" to={`/exam/mock/${m.id}`}>
            <h3>{m.title}</h3>
            <p>{m.blurb}</p>
          </AppLink>
        ))}
      </div>
      <div className="btn-row">
        <AppLink className="btn" to="/exam">
          Back to exam gym
        </AppLink>
      </div>
    </>
  );
}

export function MockPage() {
  const { id = "" } = useParams();
  const { pack, meta, levelId, toast } = useApp();
  const m = pack?.exam.mocks.find((x) => x.id === id);
  const hm = hoerenMeta(levelId);
  const clock = useCountdown(hm.mockMin * 60);
  useDocumentTitle(m ? `${m.title} · ${meta?.title || "Deutschpfad"}` : "Mock · Deutschpfad");
  if (!pack || !levelId) return null;
  if (!m) return <p>Mock not found.</p>;
  const hPaper = paperForHoerenIds(pack, m.hoeren || []);

  return (
    <>
      <p className="kicker">Training mock · ~{hm.mockMin} minutes</p>
      <h1>{m.title}</h1>
      <p>{m.blurb}</p>
      <div className="card">
        <p className="q-meta">Timer (optional)</p>
        <p className="de" style={{ fontSize: "1.6rem" }}>
          {formatClock(clock.left)}
        </p>
        <div className="btn-row">
          <button type="button" className="btn btn-primary" onClick={() => clock.start()}>
            Start / resume
          </button>
          <button type="button" className="btn" onClick={() => clock.pause()}>
            Pause
          </button>
        </div>
      </div>
      <h2>Run order (same as the real booklet)</h2>
      <ol>
        {levelId === "b1" ? (
          <>
            <li>
              <AppLink to={`/exam/lesen/${m.lesen}`}>Lesen</AppLink> + Sprachbausteine {(m.sb || []).join(" + ")}{" "}
              <AppLink to="/exam/sprachbausteine">(SB gym)</AppLink> — one 90-minute block, no break
            </li>
            <li>
              Hören{hPaper ? ` paper ${hPaper.id}` : ""} →{" "}
              <AppLink to={`/exam/hoeren/${hPaper ? hPaper.id : ""}`}>exam sitting with audio</AppLink> (~{hm.minutes} min)
            </li>
            <li>
              <AppLink to={`/schreiben/${m.schreiben}`}>Schreiben</AppLink> (30 min · four Leitpunkte · 100–120 words)
            </li>
          </>
        ) : (
          <>
            <li>
              Hören{hPaper ? ` paper ${hPaper.id}` : ""} →{" "}
              <AppLink to={`/exam/hoeren/${hPaper ? hPaper.id : ""}`}>exam sitting</AppLink> (~{hm.minutes} min). Then the
              official telc MP3 once before exam day.
            </li>
            <li>
              <AppLink to={`/exam/lesen/${m.lesen}`}>Lesen</AppLink> + <AppLink to={`/schreiben/${m.schreiben}`}>Schreiben</AppLink> — one{" "}
              {levelId === "a1" ? "45" : "50"}-minute booklet. No Sprachbausteine paper at this level.
            </li>
          </>
        )}
      </ol>
      <div className="btn-row">
        <button
          type="button"
          className="btn btn-warm"
          onClick={() => {
            clock.stop();
            progressStore.markDone(`mock-${id}`);
            noteFinished(progressStore, `/exam/mock/${id}`);
            toast("Mock marked done. Check section scores under Progress.");
          }}
        >
          Mark mock session done
        </button>
        <AppLink className="btn" to="/exam/mock">
          All mocks
        </AppLink>
      </div>
    </>
  );
}
