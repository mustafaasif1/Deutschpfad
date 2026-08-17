export function toPath(href: string | null | undefined): string {
  const raw = String(href || "/");
  if (raw.startsWith("http://") || raw.startsWith("https://") || raw.startsWith("mailto:")) {
    return raw;
  }
  if (raw.startsWith("#")) {
    const path = raw.slice(1) || "/";
    return path.startsWith("/") ? path : `/${path}`;
  }
  return raw.startsWith("/") ? raw : `/${raw}`;
}

export function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:");
}

export function hashPath(h: string): string {
  return String(h || "").replace(/^#/, "").replace(/\/+$/, "") || "/";
}

export function onHref(here: string, href: string): boolean {
  const a = hashPath(here);
  const b = hashPath(toPath(href));
  if (!b || b === "/") return false;
  return a === b || a.startsWith(`${b}/`);
}

export function migrateLegacyLocation(): void {
  if (typeof window === "undefined") return;
  const { pathname, hash, search } = window.location;
  if ((pathname === "/" || pathname === "/index.html" || pathname === "/site" || pathname === "/site/") && hash.startsWith("#/")) {
    const next = hash.slice(1) + search;
    window.history.replaceState(null, "", next);
  }
}
