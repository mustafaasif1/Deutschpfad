let nowFn: () => Date = () => new Date();

export function now(): Date {
  return nowFn();
}

/** Test-only clock. Pass `null` to restore the system clock. */
export function setNow(date: Date | null): void {
  nowFn = date ? () => new Date(date.getTime()) : () => new Date();
}

export function pad2(n: number): string {
  return (n < 10 ? "0" : "") + n;
}

export function localYmd(d: Date = now()): string {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

export function parseYmd(ymd: string | null | undefined): Date | null {
  const p = String(ymd || "").split("-");
  const y = Number(p[0]);
  const m = Number(p[1]);
  const d = Number(p[2]);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
}

export function addDays(ymd: string, n: number): string {
  const d = parseYmd(ymd);
  if (!d) return localYmd();
  d.setDate(d.getDate() + n);
  return localYmd(d);
}

export function daysBetween(a: string, b: string): number {
  const da = parseYmd(a);
  const db = parseYmd(b);
  if (!da || !db) return 0;
  return Math.round((db.getTime() - da.getTime()) / 86400000);
}

export function isSameYmd(timestamp: number | undefined, ymd: string = localYmd()): boolean {
  if (!timestamp) return false;
  return localYmd(new Date(timestamp)) === ymd;
}

export function formatClock(sec: number): string {
  const n = Math.max(0, Math.floor(sec));
  const mm = Math.floor(n / 60);
  const ss = n % 60;
  return `${mm}:${ss < 10 ? "0" : ""}${ss}`;
}
