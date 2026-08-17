import { Outlet } from "react-router-dom";
import { useApp } from "@/context/AppContext";
import { LevelsPage } from "@/pages/LevelsPage";

export function RequirePack() {
  const { pack, levelId, loading } = useApp();
  if (loading) return null;
  if (!pack || !levelId) return <LevelsPage />;
  return <Outlet />;
}
