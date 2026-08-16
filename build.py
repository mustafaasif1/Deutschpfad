#!/usr/bin/env python3
"""Assemble per-level chapter HTML into printable books/a1.html, a2.html, b1.html."""

from pathlib import Path

ROOT = Path(__file__).resolve().parent
CHAPTERS = ROOT / "chapters"
BOOKS = ROOT / "books"
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
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{title}</title>
  <style>
{CSS}
  </style>
</head>
<body>
  <div class="screen-bar">
    <span>{title}</span>
    <span>
      <button type="button" onclick="window.print()">Print / Save PDF</button>
    </span>
  </div>
  <div class="book-wrap">
    <div class="page-pad">
"""
    foot = f"""
      <p class="footer-note">Deutschpfad personal study book for {level.upper()}. Original teaching material. Not affiliated with telc gGmbH. Print → Save as PDF (A4, background graphics on).</p>
    </div>
  </div>
</body>
</html>
"""
    body = "\n".join(p.read_text(encoding="utf-8") for p in files)
    BOOKS.mkdir(exist_ok=True)
    out = BOOKS / f"{level}.html"
    out.write_text(head + body + foot, encoding="utf-8")
    print(f"Wrote {out} from {len(files)} chapters ({out.stat().st_size // 1024} KB)")


def main() -> None:
    for level in ("a1", "a2", "b1"):
        build_level(level)
    # compatibility redirect/copy for old book.html link
    b1 = (BOOKS / "b1.html").read_text(encoding="utf-8")
    (ROOT / "book.html").write_text(b1, encoding="utf-8")
    print("Also wrote book.html (= B1)")


if __name__ == "__main__":
    main()
