import { Navigate, Route, Routes } from "react-router-dom";
import { StudyLayout } from "@/components/layout/Shell";
import { RequirePack } from "@/pages/RequirePack";
import { HomePage } from "@/pages/HomePage";
import { LevelsPage } from "@/pages/LevelsPage";
import { PlanPage } from "@/pages/PlanPage";
import { DrillPage, GrammarLessonPage, GrammarListPage, GrammarQuizPage } from "@/pages/GrammarPages";
import { VocabBrowsePage, VocabListPage, VocabQuizPage, VocabTopicPage } from "@/pages/VocabPages";
import { TopicPage, TopicQuizPage, TopicsListPage } from "@/pages/TopicPages";
import { ExamHubPage } from "@/pages/ExamHubPage";
import { LesenListPage, LesenPaperPage } from "@/pages/LesenPages";
import { SprachbausteinePage } from "@/pages/SbPage";
import { HoerenListPage, HoerenPaperPage } from "@/pages/HoerenPages";
import { SchreibenListPage, SchreibenTaskPage } from "@/pages/SchreibenPages";
import { SprechenPage, SprechenRunPage } from "@/pages/SprechenPages";
import { MockListPage, MockPage } from "@/pages/MockPages";
import { EarsPage } from "@/pages/EarsPage";
import { B2Page } from "@/pages/B2Page";
import { ProgressPage } from "@/pages/ProgressPage";
import { DatenschutzPage, ImpressumPage, NutzungPage } from "@/pages/LegalPages";

export function AppRoutes() {
  return (
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
  );
}
