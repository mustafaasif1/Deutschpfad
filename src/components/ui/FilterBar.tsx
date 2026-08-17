import { useMemo, useState, type ReactNode } from "react";

export function FilteredGrid({
  placeholder,
  items,
}: {
  placeholder: string;
  items: { key: string; filter: string; node: ReactNode }[];
}) {
  const [q, setQ] = useState("");
  const needle = q.toLowerCase().trim();
  const shown = useMemo(
    () => items.filter((item) => !needle || item.filter.toLowerCase().includes(needle)),
    [items, needle],
  );

  return (
    <>
      <label className="filter-label" htmlFor="list-filter">
        Filter
      </label>
      <div className="filter-row">
        <input
          className="list-filter"
          id="list-filter"
          type="search"
          placeholder={placeholder}
          autoComplete="off"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button type="button" className="btn" onClick={() => setQ("")}>
          Clear
        </button>
      </div>
      {needle && shown.length === 0 ? <p className="filter-empty">No matches for “{q.trim()}”.</p> : null}
      <div className="grid grid-2">
        {shown.map((item) => (
          <span key={item.key} className="filter-item-wrap">
            {item.node}
          </span>
        ))}
      </div>
    </>
  );
}
