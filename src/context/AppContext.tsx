import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import type { LevelId, LevelMeta, LevelPack } from "@/types/content";
import { getMeta } from "@/lib/levels";
import { loadLevelPack } from "@/lib/packs";
import { progressStore, type LevelState, type ProgressRoot } from "@/state/progress";
import { persistTodaySession, seedIfNeeded } from "@/state/session";
import { warmVoices } from "@/lib/speech";

type ToastFn = (msg: string) => void;

type AppContextValue = {
  root: ProgressRoot;
  progress: LevelState;
  levelId: LevelId | null;
  meta: LevelMeta | null;
  pack: LevelPack | null;
  loading: boolean;
  loadError: string | null;
  toastMessage: string | null;
  toast: ToastFn;
  selectLevel: (id: LevelId) => Promise<void>;
};

const AppContext = createContext<AppContextValue | null>(null);

function subscribeProgress(onStoreChange: () => void) {
  return progressStore.subscribe(onStoreChange);
}

export function AppProvider({ children }: { children: ReactNode }) {
  const root = useSyncExternalStore(subscribeProgress, progressStore.getSnapshot, progressStore.getSnapshot);
  const [pack, setPack] = useState<LevelPack | null>(null);
  const [packLevel, setPackLevel] = useState<LevelId | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimer = useRef<number | null>(null);
  const loadGen = useRef(0);

  const toast = useCallback<ToastFn>((msg) => {
    setToastMessage(msg);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToastMessage(null), 2200);
  }, []);

  const selectLevel = useCallback(async (id: LevelId) => {
    const gen = ++loadGen.current;
    setLoadError(null);
    setLoading(true);
    try {
      const next = await loadLevelPack(id);
      if (loadGen.current !== gen) return;
      progressStore.setLevel(id);
      setPack(next);
      setPackLevel(id);
      seedIfNeeded(progressStore);
      persistTodaySession(next, progressStore, getMeta(id));
    } catch (err) {
      if (loadGen.current !== gen) return;
      const message = err instanceof Error ? err.message : String(err);
      setLoadError(message);
      throw err;
    } finally {
      if (loadGen.current === gen) setLoading(false);
    }
  }, []);

  useEffect(() => {
    warmVoices();
    const saved = progressStore.getLevel();
    if (!saved) {
      setLoading(false);
      return;
    }
    void selectLevel(saved).catch(() => {
      /* loadError is set inside selectLevel */
    });
  }, [selectLevel]);

  const levelId = root.level;
  const meta = getMeta(levelId);
  const progress = (levelId && root.levels[levelId]) || root.levels.a1;
  const activePack = packLevel === levelId ? pack : null;

  useEffect(() => {
    if (!activePack || !meta) return;
    seedIfNeeded(progressStore);
    persistTodaySession(activePack, progressStore, meta);
  }, [activePack, meta, progress.session?.date]);

  const value = useMemo<AppContextValue>(
    () => ({
      root,
      progress,
      levelId,
      meta,
      pack: activePack,
      loading,
      loadError,
      toastMessage,
      toast,
      selectLevel,
    }),
    [root, progress, levelId, meta, activePack, loading, loadError, toastMessage, toast, selectLevel],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
