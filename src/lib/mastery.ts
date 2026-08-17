import type { LevelPack } from "@/types/content";
import type { LevelState } from "@/state/progress";
import { localYmd } from "@/lib/dates";

export type Mastery = {
  pct: number | null;
  due: boolean;
  weak: boolean;
  interval: number | undefined;
};

export function mastery(state: LevelState, setId: string): Mastery {
  const r = state.results?.[setId];
  const sched = state.schedule?.[setId];
  const pct = r && r.total ? Math.round((r.correct / r.total) * 100) : null;
  const due = !!(sched && sched.due && sched.due <= localYmd());
  return {
    pct,
    due,
    weak: pct != null && pct < 80,
    interval: sched?.interval,
  };
}

export function masteryRank(state: LevelState, setId: string): number {
  const m = mastery(state, setId);
  if (m.due && m.weak) return 0;
  if (m.due) return 1;
  if (m.weak) return 2;
  if (m.pct == null) return 3;
  return 4;
}

export function masteryLine(state: LevelState, setId: string): string {
  const m = mastery(state, setId);
  if (m.pct == null) return "Not sat";
  if (m.due) return `${m.pct}% · due`;
  if (m.weak) return `${m.pct}% · drill again`;
  return `${m.pct}%`;
}

export function sortByMastery<T>(list: T[], state: LevelState, setIdFn: (item: T) => string): T[] {
  return (list || []).slice().sort((a, b) => {
    const ra = masteryRank(state, setIdFn(a));
    const rb = masteryRank(state, setIdFn(b));
    if (ra !== rb) return ra - rb;
    const ta = String((a as { title?: string }).title || "").toLowerCase();
    const tb = String((b as { title?: string }).title || "").toLowerCase();
    if (ta < tb) return -1;
    if (ta > tb) return 1;
    return 0;
  });
}

export function mixDrill(pack: LevelPack) {
  return pack.drills.find((d) => d.id && d.id.includes("mix") && !d.id.includes("b2")) || null;
}
