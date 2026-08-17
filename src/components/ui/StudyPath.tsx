export function StudyPath({
  steps,
  title = "How to study this",
}: {
  steps: readonly { title: string; body: string }[];
  title?: string;
}) {
  return (
    <div className="study-path-wrap">
      <p className="kicker">{title}</p>
      <ol className="study-path">
        {steps.map((step) => (
          <li key={step.title}>
            <div className="study-path-copy">
              <strong>{step.title}</strong>
              <span>{step.body}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
