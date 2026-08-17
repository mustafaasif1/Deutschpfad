export function Badge({ level }: { level: string }) {
  return <span className={`badge badge-${level}`}>{level}</span>;
}

export function ProgressBar({ n, d }: { n: number; d: number }) {
  const p = d ? Math.round((n / d) * 100) : 0;
  return (
    <div className="progress-bar" title={`${p}%`}>
      <span style={{ width: `${p}%` }} />
    </div>
  );
}
