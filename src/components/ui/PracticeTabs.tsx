import { NavLink } from "react-router-dom";

const TABS = [
  { to: "/grammar", label: "Grammar" },
  { to: "/vocab", label: "Vocabulary" },
  { to: "/topics", label: "Topics" },
  { to: "/plan", label: "Plan" },
];

export function PracticeTabs() {
  return (
    <nav className="seg" aria-label="Practice">
      {TABS.map((t) => (
        <NavLink key={t.to} to={t.to} end={t.to === "/plan"}>
          {t.label}
        </NavLink>
      ))}
    </nav>
  );
}
