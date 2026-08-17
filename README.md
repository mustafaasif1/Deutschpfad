# Deutschpfad — A1 · A2 · B1

Personal study pack for **telc Deutsch A1, A2, and B1**. Each level has its own **8-week plan**, **vocabulary**, **grammar**, **exam gym**, **printable book**, and **saved progress**.

The study site is a **React** app (Vite). Progress still lives in this browser only (`localStorage`). B2 stretch material lives inside the **B1** track.

## Open the website

Live site: [https://deutschpfad-six.vercel.app/](https://deutschpfad-six.vercel.app/)

```bash
pnpm install
pnpm dev
```

Open **http://localhost:8765**

1. Pick your level  
2. Follow the 8-week plan  
3. Download **that level’s book** (Open book → Print → Save as PDF, A4)

Production build:

```bash
pnpm build
pnpm preview
pnpm test
```

German speaking uses your system’s **German voice**. If it still sounds English:

**macOS:** System Settings → Accessibility → Spoken Content → System Voice → download **Anna / Helena / Markus** (German) → reload the site.

The sidebar shows which voice is active.

## Rebuild books

```bash
python3 build.py
```

Writes `books/a1.html`, `a2.html`, `b1.html` and copies them to `public/books/` for the site. `book.html` remains B1 for old links.

## Impressum

Copy `public/legal-config.example.js` to `public/legal-config.js` and fill in operator name, postal address, and email before offering the site in Germany.

## Official exam audio

In weeks 7–8 of your level, add a real telc sample with MP3:

https://www.telc.net/en/language-examinations/certificate-exams/german/

Browser TTS trains method; official audio trains exam ears.

## What each level contains

- **A1:** survival German, articles, present, café/shop, 2 Lesen papers, mocks, ~180 vocab  
- **A2:** Perfekt, dative, connectors, letters, 2–3 mocks, ~240 vocab  
- **B1:** full exam gym (3 Lesen, 6 SB, 3 Hören papers, 12 letters, 3 timed mocks), ~370 vocab + B2 stretch  

Always redo quizzes under **80%**. Write letters from memory. Speak out loud.
