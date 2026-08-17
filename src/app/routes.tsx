import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { StudyLayout } from "@/components/layout/Shell";
import { RequirePack } from "@/pages/RequirePack";
import { HomePage } from "@/pages/HomePage";
import { LevelsPage } from "@/pages/LevelsPage";

const PlanPage = lazy(() => import("@/pages/PlanPage").then((m) => ({ default: m.PlanPage })));
const DrillPage = lazy(() => import("@/pages/GrammarPages").then((m) => ({ default: m.DrillPage })));
const GrammarLessonPage = lazy(() => import("@/pages/GrammarPages").then((m) => ({ default: m.GrammarLessonPage })));
const GrammarListPage = lazy(() => import("@/pages/GrammarPages").then((m) => ({ default: m.GrammarListPage })));
const GrammarQuizPage = lazy(() => import("@/pages/GrammarPages").then((m) => ({ default: m.GrammarQuizPage })));
const VocabBrowsePage = lazy(() => import("@/pages/VocabPages").then((m) => ({ default: m.VocabBrowsePage })));
const VocabListPage = lazy(() => import("@/pages/VocabPages").then((m) => ({ default: m.VocabListPage })));
const VocabQuizPage = lazy(() => import("@/pages/VocabPages").then((m) => ({ default: m.VocabQuizPage })));
const VocabTopicPage = lazy(() => import("@/pages/VocabPages").then((m) => ({ default: m.VocabTopicPage })));
const TopicPage = lazy(() => import("@/pages/TopicPages").then((m) => ({ default: m.TopicPage })));
const TopicQuizPage = lazy(() => import("@/pages/TopicPages").then((m) => ({ default: m.TopicQuizPage })));
const TopicsListPage = lazy(() => import("@/pages/TopicPages").then((m) => ({ default: m.TopicsListPage })));
const ExamHubPage = lazy(() => import("@/pages/ExamHubPage").then((m) => ({ default: m.ExamHubPage })));
const LesenListPage = lazy(() => import("@/pages/LesenPages").then((m) => ({ default: m.LesenListPage })));
const LesenPaperPage = lazy(() => import("@/pages/LesenPages").then((m) => ({ default: m.LesenPaperPage })));
const SprachbausteinePage = lazy(() => import("@/pages/SbPage").then((m) => ({ default: m.SprachbausteinePage })));
const HoerenListPage = lazy(() => import("@/pages/HoerenPages").then((m) => ({ default: m.HoerenListPage })));
const HoerenPaperPage = lazy(() => import("@/pages/HoerenPages").then((m) => ({ default: m.HoerenPaperPage })));
const SchreibenListPage = lazy(() => import("@/pages/SchreibenPages").then((m) => ({ default: m.SchreibenListPage })));
const SchreibenTaskPage = lazy(() => import("@/pages/SchreibenPages").then((m) => ({ default: m.SchreibenTaskPage })));
const SprechenPage = lazy(() => import("@/pages/SprechenPages").then((m) => ({ default: m.SprechenPage })));
const SprechenRunPage = lazy(() => import("@/pages/SprechenPages").then((m) => ({ default: m.SprechenRunPage })));
const MockListPage = lazy(() => import("@/pages/MockPages").then((m) => ({ default: m.MockListPage })));
const MockPage = lazy(() => import("@/pages/MockPages").then((m) => ({ default: m.MockPage })));
const EarsPage = lazy(() => import("@/pages/EarsPage").then((m) => ({ default: m.EarsPage })));
const B2Page = lazy(() => import("@/pages/B2Page").then((m) => ({ default: m.B2Page })));
const ProgressPage = lazy(() => import("@/pages/ProgressPage").then((m) => ({ default: m.ProgressPage })));
const DatenschutzPage = lazy(() => import("@/pages/LegalPages").then((m) => ({ default: m.DatenschutzPage })));
const ImpressumPage = lazy(() => import("@/pages/LegalPages").then((m) => ({ default: m.ImpressumPage })));
const NutzungPage = lazy(() => import("@/pages/LegalPages").then((m) => ({ default: m.NutzungPage })));

function RouteFallback() {
  return (
    <div>
      <h1>Loading…</h1>
      <p className="lead">One moment.</p>
    </div>
  );
}

export function AppRoutes() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
        <Route path="/nutzung" element={<NutzungPage />} />
        <Route element={<StudyLayout />}>
          <Route path="/levels" element={<LevelsPage />} />
          <Route element={<RequirePack />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/plan" element={<PlanPage />} />
            <Route path="/practice" element={<Navigate to="/grammar" replace />} />
            <Route path="/grammar" element={<GrammarListPage />} />
            <Route path="/grammar/:id" element={<GrammarLessonPage />} />
            <Route path="/grammar/:id/quiz" element={<GrammarQuizPage />} />
            <Route path="/vocab" element={<VocabListPage />} />
            <Route path="/vocab/:id" element={<VocabTopicPage />} />
            <Route path="/vocab/:id/browse" element={<VocabBrowsePage />} />
            <Route path="/vocab/:id/quiz" element={<VocabQuizPage />} />
            <Route path="/topics" element={<TopicsListPage />} />
            <Route path="/topics/:id" element={<TopicPage />} />
            <Route path="/topics/:id/quiz" element={<TopicQuizPage />} />
            <Route path="/drill/:id" element={<DrillPage />} />
            <Route path="/exam" element={<ExamHubPage />} />
            <Route path="/exam/lesen" element={<LesenListPage />} />
            <Route path="/exam/lesen/:id" element={<LesenPaperPage />} />
            <Route path="/exam/sprachbausteine" element={<SprachbausteinePage />} />
            <Route path="/exam/hoeren" element={<HoerenListPage />} />
            <Route path="/exam/hoeren/:id" element={<HoerenPaperPage />} />
            <Route path="/exam/hoeren/:id/:mode" element={<HoerenPaperPage />} />
            <Route path="/exam/ears" element={<EarsPage />} />
            <Route path="/exam/schreiben" element={<SchreibenListPage />} />
            <Route path="/exam/sprechen" element={<SprechenPage />} />
            <Route path="/exam/sprechen/run" element={<SprechenRunPage />} />
            <Route path="/exam/mock" element={<MockListPage />} />
            <Route path="/exam/mock/:id" element={<MockPage />} />
            <Route path="/schreiben/:id" element={<SchreibenTaskPage />} />
            <Route path="/schreiben/:id/:mode" element={<SchreibenTaskPage />} />
            <Route path="/b2" element={<B2Page />} />
            <Route path="/progress" element={<ProgressPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
