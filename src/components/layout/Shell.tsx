import { Suspense, useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { PageErrorBoundary } from "@/components/layout/PageErrorBoundary";
import { AppLink } from "@/components/ui/AppLink";
import { useApp } from "@/context/AppContext";
import { LEVEL_META } from "@/lib/levels";
import { bookHrefForRoute } from "@/lib/exam";
import { toPath } from "@/lib/href";
import { pathNeedsHeavyPack } from "@/lib/packs";
import { germanVoiceName, germanVoicePair, stopSpeak } from "@/lib/speech";
import {
  advanceSession,
  clock,
  remainingCount,
  sessionCta,
  todaySession,
  nextStep,
} from "@/state/session";
import { progressStore } from "@/state/progress";
import { useFocusHeading, useSpeechState } from "@/hooks/useUi";
import type { LevelPack } from "@/types/content";

const MQ_NAV = "(max-width: 860px)";

export function StudyLayout() {
  const { loading, loadError, levelId, pack } = useApp();
  const location = useLocation();
  const waitingHeavy =
    !loading &&
    !!pack &&
    pathNeedsHeavyPack(location.pathname) &&
    !pack.grammar.length &&
    !pack.exam.lesen.length &&
    !pack.exam.hoeren.length;
  return (
    <Shell>
      {loading || waitingHeavy ? (
        <div>
          <h1>Loading {levelId ? levelId.toUpperCase() : "Deutschpfad"}…</h1>
          <p className="lead">One moment.</p>
        </div>
      ) : loadError ? (
        <div>
          <h1>Could not load {levelId ? levelId.toUpperCase() : "your level"}</h1>
          <p className="lead">{loadError}</p>
          <div className="btn-row">
            <AppLink className="btn" to="/levels">
              Choose level
            </AppLink>
          </div>
        </div>
      ) : (
        <PageErrorBoundary>
          <Suspense
            fallback={
              <div>
                <h1>Loading…</h1>
                <p className="lead">One moment.</p>
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </PageErrorBoundary>
      )}
    </Shell>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  const { levelId, meta, pack, toast, toastMessage, selectLevel, progress } = useApp();
  const location = useLocation();
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);
  const [voiceLabel, setVoiceLabel] = useState("");
  const speech = useSpeechState();
  useFocusHeading();

  useEffect(() => {
    setNavOpen(false);
    stopSpeak();
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash.startsWith("#/")) {
      navigate(toPath(location.hash), { replace: true });
    }
  }, [location.hash, navigate]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", navOpen);
    return () => document.body.classList.remove("nav-open");
  }, [navOpen]);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setVoiceLabel(germanVoicePair() || germanVoiceName() || "");
    }, 400);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setNavOpen(false);
        stopSpeak();
      }
    };
    const onResize = () => {
      if (!window.matchMedia(MQ_NAV).matches) setNavOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const navId = navSection(location.pathname);
  const session = pack && meta ? todaySession(pack, progress, meta) : null;
  const hideRail =
    !levelId ||
    location.pathname === "/" ||
    location.pathname.startsWith("/levels") ||
    location.pathname.includes("/quiz") ||
    location.pathname.startsWith("/drill/");
  const railActive = !!(session && remainingCount(session) > 0);
  const action = pack && meta && railActive ? sessionCta(pack, progress, meta, location.pathname) : null;
  const open = session ? nextStep(session) : null;
  const c = pack && meta ? clock(progress, meta) : null;
  const weekLabel = c ? `week ${c.weekN}` : "";
  let extra = "";
  if (c && c.daysLeft != null && c.daysLeft >= 0) {
    extra = c.daysLeft === 0 ? " · sitting today" : ` · ${c.daysLeft}d`;
  }

  function runAdvance() {
    if (!pack || !meta) return;
    const result = advanceSession(pack, progressStore, meta, location.pathname);
    if (result.toast) toast(result.toast);
    navigate(toPath(result.href));
  }

  const crumbs = useCrumbs(location.pathname, pack);
  const pageTitle = crumbs[crumbs.length - 1]?.label || "Deutschpfad";

  useEffect(() => {
    document.title = meta ? `${pageTitle} · ${meta.title}` : `${pageTitle} · Deutschpfad`;
  }, [meta, pageTitle]);

  const bookHref = bookHrefForRoute(levelId, location.pathname, meta?.book || "/books/b1.html");

  return (
    <>
      <a className="skip-link" href="#view">
        Skip to content
      </a>
      <button
        type="button"
        className="nav-backdrop"
        hidden={!navOpen}
        aria-label="Close menu"
        onClick={() => setNavOpen(false)}
      />
      <div className={`shell${navOpen ? " nav-open-shell" : ""}`}>
        <aside className={`sidebar${navOpen ? " open" : ""}`} id="sidebar">
          <div className="sidebar-head">
            <AppLink className="brand" to="/">
              <span className="brand-mark" aria-hidden="true">
                »
              </span>
              <span>
                <strong>Deutschpfad</strong>
                <small>{meta ? `${meta.exam} · 8 weeks` : "Choose your level"}</small>
              </span>
            </AppLink>
            <button type="button" className="sidebar-close" aria-label="Close menu" onClick={() => setNavOpen(false)}>
              ✕
            </button>
          </div>
          {meta ? (
            <div className="level-switch">
              {LEVEL_META.map((lv) => (
                <button
                  key={lv.id}
                  type="button"
                  data-level={lv.id}
                  className={lv.id === meta.id ? "active" : ""}
                  onClick={() => {
                    void selectLevel(lv.id).then(() => toast(`Switched to ${lv.id.toUpperCase()}`));
                    if (location.pathname.startsWith("/levels")) navigate("/");
                  }}
                >
                  {lv.title}
                </button>
              ))}
            </div>
          ) : null}
          <nav className="nav" id="main-nav">
            <p className="nav-label">Study</p>
            <NavLink to="/" end data-nav="home" className={navId === "home" ? "active" : ""}>
              Today
            </NavLink>
            <NavLink to="/grammar" data-nav="practice" className={navId === "practice" ? "active" : ""}>
              Practice
            </NavLink>
            <p className="nav-label">Exam</p>
            <NavLink to="/exam" data-nav="exam" className={navId === "exam" ? "active" : ""}>
              Exam
            </NavLink>
            {levelId === "b1" ? (
              <NavLink to="/b2" data-nav="b2" className={navId === "b2" ? "active" : ""}>
                B2 stretch
              </NavLink>
            ) : null}
            <p className="nav-label">You</p>
            <NavLink to="/progress" data-nav="progress" className={navId === "progress" ? "active" : ""}>
              Progress
            </NavLink>
            <NavLink to="/levels" data-nav="levels" className={navId === "levels" ? "active" : ""}>
              Switch level
            </NavLink>
          </nav>
          <div className="sidebar-card" id="goal-card">
            <p className="kicker">Goal</p>
            <p>
              {meta ? (
                <>
                  Pass <strong>{meta.exam}</strong>. {c ? `Week ${c.weekN} of 8 — finish Today in order.` : "Cover the official topics, then drill the real paper shape."}
                </>
              ) : (
                "Pick A1, A2, or B1. Each level has its own book, plan, exam gym, and progress."
              )}
            </p>
          </div>
          <div className="sidebar-actions">
            {meta ? (
              <a className="btn btn-primary" href={bookHref} target="_blank" rel="noopener">
                Open book
              </a>
            ) : null}
            <p className="voice-meta">
              {voiceLabel ? `Voice: ${voiceLabel}` : "No German voice yet — install one in system settings."}
            </p>
            <nav className="legal-bar" aria-label="Rechtliches">
              <AppLink to="/impressum">Impressum</AppLink>
              <AppLink to="/datenschutz">Datenschutz</AppLink>
              <AppLink to="/nutzung">Nutzung</AppLink>
            </nav>
          </div>
        </aside>
        <div className="main">
          <header className="topbar">
            <button
              type="button"
              className="menu-btn"
              aria-label={navOpen ? "Close menu" : "Open menu"}
              aria-controls="sidebar"
              aria-expanded={navOpen}
              onClick={() => setNavOpen((v) => !v)}
            >
              ☰
            </button>
            <nav id="crumb" className="crumb" aria-label="Breadcrumb" aria-live="polite">
              {crumbs.map((part, i) => {
                const last = i === crumbs.length - 1;
                return (
                  <span key={`${part.label}-${i}`}>
                    {i > 0 ? (
                      <span className="crumb-sep" aria-hidden="true">
                        ›
                      </span>
                    ) : null}
                    {last || !part.to ? (
                      <span className="crumb-current" aria-current={last ? "page" : undefined}>
                        {part.label}
                      </span>
                    ) : (
                      <AppLink to={part.to}>{part.label}</AppLink>
                    )}
                  </span>
                );
              })}
            </nav>
            <div className="top-stats">
              {speech.speaking ? (
                <button type="button" className="btn speak-stop" onClick={() => stopSpeak()}>
                  Stop audio
                </button>
              ) : null}
              {levelId ? (
                <span className="stat-pill">
                  {levelId.toUpperCase()}
                  {weekLabel ? ` · ${weekLabel}` : ""}
                  {extra}
                </span>
              ) : null}
            </div>
          </header>
          {!hideRail && railActive && session ? (
            <div className="session-rail">
              <div className="session-rail-copy">
                <p>
                  Today · <strong>{session.steps.length - remainingCount(session)} of {session.steps.length}</strong>
                </p>
                {action ? (
                  <p className="session-rail-now">Next: {action.title}</p>
                ) : open ? (
                  <p className="session-rail-now">This step: {open.title}. Tick it on Today when you have finished.</p>
                ) : null}
              </div>
              {action ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={runAdvance}
                  aria-label={`${action.label}: ${action.title}`}
                >
                  {action.label}
                </button>
              ) : null}
            </div>
          ) : null}
          <main id="view" className="view" tabIndex={-1}>
            {children}
          </main>
        </div>
      </div>
      <nav className="dock" id="dock" aria-label="Primary">
        <NavLink to="/" end className={navId === "home" ? "active" : ""} data-nav="home">
          Today
        </NavLink>
        <NavLink to="/grammar" className={navId === "practice" ? "active" : ""} data-nav="practice">
          Practice
        </NavLink>
        <NavLink to="/exam" className={navId === "exam" ? "active" : ""} data-nav="exam">
          Exam
        </NavLink>
        <button
          type="button"
          className="dock-more"
          aria-controls="sidebar"
          aria-expanded={navOpen}
          aria-label="Open menu"
          onClick={() => setNavOpen(true)}
        >
          More
        </button>
      </nav>
      <div className="toast" hidden={!toastMessage} role="status" aria-live="polite" aria-atomic="true">
        {toastMessage}
      </div>
    </>
  );
}

function navSection(pathname: string): string {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/levels")) return "levels";
  if (
    pathname.startsWith("/plan") ||
    pathname.startsWith("/grammar") ||
    pathname.startsWith("/vocab") ||
    pathname.startsWith("/topics") ||
    pathname.startsWith("/drill") ||
    pathname.startsWith("/practice")
  ) {
    return "practice";
  }
  if (pathname.startsWith("/exam") || pathname.startsWith("/schreiben")) return "exam";
  if (pathname.startsWith("/b2")) return "b2";
  if (pathname.startsWith("/progress")) return "progress";
  return "home";
}

function useCrumbs(pathname: string, pack: LevelPack | null): { label: string; to?: string }[] {
  const parts = pathname.split("/").filter(Boolean);
  const a = parts[0] || "home";
  const practice = { label: "Practice", to: "/grammar" };
  const vocabHub = { label: "Vocabulary", to: "/vocab" };
  const topicsHub = { label: "Topics", to: "/topics" };
  const vocabPack = pack?.vocabTopics.find((t) => t.id === parts[1]);
  const grammar = pack?.grammar.find((g) => g.id === parts[1]);
  const topic = pack?.topics.find((t) => t.id === parts[1]);
  const drill = pack?.drills.find((d) => d.id === parts[1]);

  if (a === "levels" || a === "level") return [{ label: "Choose level" }];
  if (!a || a === "home") return [{ label: "Today" }];
  if (a === "plan") return [practice, { label: "Plan" }];
  if (a === "grammar" && parts[2] === "quiz") {
    return [practice, { label: grammar?.title || "Lesson", to: `/grammar/${parts[1]}` }, { label: "Quiz" }];
  }
  if (a === "grammar" && parts[1]) return [practice, { label: grammar?.title || "Lesson" }];
  if (a === "grammar") return [{ label: "Practice" }];
  if (a === "vocab" && parts[2] === "quiz") {
    return [practice, vocabHub, { label: vocabPack?.title || "Pack", to: `/vocab/${parts[1]}` }, { label: "Quiz" }];
  }
  if (a === "vocab" && parts[2] === "browse") {
    return [practice, vocabHub, { label: vocabPack?.title || "Pack", to: `/vocab/${parts[1]}` }, { label: "Browse" }];
  }
  if (a === "vocab" && parts[1]) return [practice, vocabHub, { label: vocabPack?.title || "Pack" }];
  if (a === "vocab") return [practice, { label: "Vocabulary" }];
  if (a === "topics" && parts[2] === "quiz") {
    return [practice, topicsHub, { label: topic?.titleDe || topic?.title || "Topic", to: `/topics/${parts[1]}` }, { label: "Quiz" }];
  }
  if (a === "topics" && parts[1]) return [practice, topicsHub, { label: topic?.titleDe || topic?.title || "Topic" }];
  if (a === "topics") return [practice, { label: "Topics" }];
  if (a === "drill" && parts[1]) return [practice, { label: drill?.title || "Drill" }];
  if (a === "drill") return [practice, { label: "Drill" }];
  if (a === "exam" && parts[1] === "lesen" && parts[2]) return [{ label: "Exam", to: "/exam" }, { label: "Lesen", to: "/exam/lesen" }, { label: "Paper" }];
  if (a === "exam" && parts[1] === "lesen") return [{ label: "Exam", to: "/exam" }, { label: "Lesen" }];
  if (a === "exam" && parts[1] === "sprachbausteine") return [{ label: "Exam", to: "/exam" }, { label: "Sprachbausteine" }];
  if (a === "exam" && parts[1] === "hoeren" && parts[2]) return [{ label: "Exam", to: "/exam" }, { label: "Hören", to: "/exam/hoeren" }, { label: "Paper" }];
  if (a === "exam" && parts[1] === "hoeren") return [{ label: "Exam", to: "/exam" }, { label: "Hören" }];
  if (a === "exam" && parts[1] === "ears") return [{ label: "Exam", to: "/exam" }, { label: "Official ears" }];
  if (a === "exam" && parts[1] === "schreiben") return [{ label: "Exam", to: "/exam" }, { label: "Schreiben" }];
  if (a === "exam" && parts[1] === "sprechen" && parts[2] === "run") {
    return [{ label: "Exam", to: "/exam" }, { label: "Sprechen", to: "/exam/sprechen" }, { label: "Oral run" }];
  }
  if (a === "exam" && parts[1] === "sprechen") return [{ label: "Exam", to: "/exam" }, { label: "Sprechen" }];
  if (a === "exam" && parts[1] === "mock" && parts[2]) {
    return [{ label: "Exam", to: "/exam" }, { label: "Mocks", to: "/exam/mock" }, { label: "Mock" }];
  }
  if (a === "exam" && parts[1] === "mock") return [{ label: "Exam", to: "/exam" }, { label: "Mocks" }];
  if (a === "exam") return [{ label: "Exam" }];
  if (a === "schreiben") return [{ label: "Exam", to: "/exam" }, { label: "Schreiben", to: "/exam/schreiben" }, { label: "Task" }];
  if (a === "b2") return [{ label: "B2 stretch" }];
  if (a === "progress") return [{ label: "Progress" }];
  return [{ label: "Today" }];
}
