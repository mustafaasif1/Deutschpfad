import type { ExamFormat } from "@/types/content";
import { AppLink } from "@/components/ui/AppLink";

export function FormatCard({ format }: { format: ExamFormat | null }) {
  if (!format) return null;
  const rows = (format.written || []).map((p) => (
    <tr key={p.name}>
      <td data-label="Subtest">
        <strong>{p.name}</strong>
        <br />
        <span className="q-meta">
          {p.parts || ""} parts · {p.items || ""}
        </span>
      </td>
      <td data-label="Time">{p.minutes ? `${p.minutes} min` : "—"}</td>
      <td data-label="Points">{p.points != null ? p.points : "—"}</td>
      <td data-label="What it looks like">{p.note || ""}</td>
    </tr>
  ));
  const oral = format.oral || {};
  return (
    <div className="card" style={{ marginBottom: "1rem" }}>
      <p className="kicker">Official format</p>
      <h3>{format.name}</h3>
      <p>{format.passRule || ""}</p>
      {format.notThisExam ? <p className="q-meta">{format.notThisExam}</p> : null}
      <table className="format-table">
        <thead>
          <tr>
            <th>Subtest</th>
            <th>Time</th>
            <th>Points</th>
            <th>What it looks like</th>
          </tr>
        </thead>
        <tbody>
          {rows}
          <tr>
            <td data-label="Subtest">
              <strong>Sprechen</strong>
              <br />
              <span className="q-meta">
                {oral.parts || 3} parts{oral.prep ? ` · ${oral.prep} min prep` : ""}
              </span>
            </td>
            <td data-label="Time">~{oral.minutes || 15} min</td>
            <td data-label="Points">{oral.points != null ? oral.points : "—"}</td>
            <td data-label="What it looks like">{oral.note || ""}</td>
          </tr>
        </tbody>
      </table>
      {format.officialUrl ? (
        <p style={{ marginTop: "0.7rem" }}>
          <AppLink to={format.officialUrl}>telc.net — official page + Modelltest</AppLink>
        </p>
      ) : null}
    </div>
  );
}
