# Deutschpfad — A1 · A2 · B1 (book + site)

Personal study pack for **telc Deutsch A1, A2, and B1**. Each level has its own **8-week plan**, **vocabulary**, **grammar**, **exam gym**, **printable book**, and **saved progress**.

B2 stretch material lives inside the **B1** track (so B1 feels easier). A full telc B2 exam gym can come later.

## Structure (this is the right shape)

| Layer | What it is |
|-------|------------|
| **Level picker** | Choose A1, A2, or B1 |
| **Book** | Knowledge: tables, templates, method (`books/a1.html`, `a2.html`, `b1.html`) |
| **Website** | Training: quizzes, flashcards, mocks, listening voice, checklists |
| **Progress** | Separate XP / ticks / scores per level |

Path for most people: **A1 → A2 → B1**. If you are already A2-ish, start on **B1** (or A2 to fill holes).

## Open the website

```bash
cd ~/Documents/Deutschpfad
python3 -m http.server 8765
```

Open **http://localhost:8765/site/**

1. Pick your level  
2. Follow the 8-week plan  
3. Download **that level’s book** (Print → Save as PDF, A4)

German speaking uses your system’s **German voice**. If it still sounds English:

**macOS:** System Settings → Accessibility → Spoken Content → System Voice → download **Anna / Helena / Markus** (German) → reload the site.

The sidebar shows which voice is active.

## Rebuild books

```bash
python3 build.py
```

Writes `books/a1.html`, `books/a2.html`, `books/b1.html` (and `book.html` = B1 for old links).

## Official exam audio

In weeks 7–8 of your level, add a real telc sample with MP3:

https://www.telc.net/en/language-examinations/certificate-exams/german/

Browser TTS trains method; official audio trains exam ears.

## What each level contains (site)

- **A1:** survival German, articles, present, café/shop, 2 Lesen papers, mocks, ~180 vocab  
- **A2:** Perfekt, dative, connectors, letters, 2–3 mocks, ~240 vocab  
- **B1:** full exam gym (3 Lesen, 6 SB, 3 Hören papers, 12 letters, 3 timed mocks), ~370 vocab + B2 stretch  

Always redo quizzes under **80%**. Write letters from memory. Speak out loud.
