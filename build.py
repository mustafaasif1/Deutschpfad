#!/usr/bin/env python3
"""Assemble per-level chapter HTML into printable books/a1.html, a2.html, b1.html."""

from pathlib import Path

ROOT = Path(__file__).resolve().parent
CHAPTERS = ROOT / "chapters"
BOOKS = ROOT / "books"
PUBLIC_BOOKS = ROOT / "public" / "books"
CSS = (ROOT / "css" / "book.css").read_text(encoding="utf-8")

TITLES = {
    "a1": "telc Deutsch A1 — Deutschpfad Beginner Book",
    "a2": "telc Deutsch A2 — Deutschpfad Builder Book",
    "b1": "telc Deutsch B1 — Deutschpfad Exam Book",
}


def build_level(level: str) -> None:
    folder = CHAPTERS / level
    files = sorted(folder.glob("*.html"))
    if not files:
        raise SystemExit(f"No chapters in {folder}")
    title = TITLES[level]
    head = f"""<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <title>{title}</title>
  <style>
{CSS}
  </style>
</head>
<body>
  <div class="screen-bar">
    <a href="/">Study site</a>
    <select id="book-jump" aria-label="Jump to chapter"></select>
    <button type="button" onclick="window.print()">Print / Save PDF</button>
  </div>
  <div class="book-wrap">
    <div class="page-pad">
"""
    foot = f"""
      <p class="footer-note">Deutschpfad personal study book for {level.upper()}. Original teaching material. Not affiliated with telc gGmbH or the Goethe-Institut. No pass guarantee. <a href="/impressum">Impressum</a> · <a href="/datenschutz">Datenschutz</a> · <a href="/nutzung">Nutzung</a>. Print → Save as PDF (A4, background graphics on).</p>
    </div>
  </div>
  <script>
    document.querySelectorAll("table").forEach(function (t) {{
      if (t.parentElement && t.parentElement.classList.contains("table-scroll")) return;
      var w = document.createElement("div");
      w.className = "table-scroll";
      t.parentNode.insertBefore(w, t);
      w.appendChild(t);
    }});
    (function () {{
      var jump = document.getElementById("book-jump");
      if (!jump) return;
      var chapters = [];
      var cover = document.querySelector(".cover");
      if (cover && cover.id) chapters.push({{ id: cover.id, title: "Cover" }});
      if (document.getElementById("toc")) chapters.push({{ id: "toc", title: "Contents" }});
      document.querySelectorAll("section.chapter[id]").forEach(function (s) {{
        if (s.id === "toc") return;
        var h = s.querySelector(".chapter-title, h1");
        var title = (h && h.textContent ? h.textContent : s.id).replace(/\\s+/g, " ").trim();
        chapters.push({{ id: s.id, title: title }});
      }});
      chapters.forEach(function (c) {{
        var o = document.createElement("option");
        o.value = c.id;
        o.textContent = c.title;
        jump.appendChild(o);
      }});
      function sync() {{
        var id = (location.hash || "").replace(/^#/, "");
        if (id) jump.value = id;
      }}
      jump.onchange = function () {{
        var id = jump.value;
        if (!id) return;
        history.replaceState(null, "", "#" + id);
        var el = document.getElementById(id);
        if (el) el.scrollIntoView();
      }};
      window.addEventListener("hashchange", sync);
      sync();
    }})();
  </script>
</body>
</html>
"""
    body = "\n".join(p.read_text(encoding="utf-8") for p in files)
    html = head + body + foot
    BOOKS.mkdir(exist_ok=True)
    PUBLIC_BOOKS.mkdir(parents=True, exist_ok=True)
    out = BOOKS / f"{level}.html"
    public_out = PUBLIC_BOOKS / f"{level}.html"
    out.write_text(html, encoding="utf-8")
    public_out.write_text(html, encoding="utf-8")
    print(f"Wrote {out} and {public_out} from {len(files)} chapters ({out.stat().st_size // 1024} KB)")


def main() -> None:
    for level in ("a1", "a2", "b1"):
        build_level(level)
    # compatibility redirect/copy for old book.html link
    b1 = (BOOKS / "b1.html").read_text(encoding="utf-8")
    (ROOT / "book.html").write_text(b1, encoding="utf-8")
    print("Also wrote book.html (= B1)")


if __name__ == "__main__":
    main()
