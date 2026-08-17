export function toPath(href: string | null | undefined): string {
  const raw = String(href || "/");
  if (raw.startsWith("http://") || raw.startsWith("https://") || raw.startsWith("mailto:")) {
    return raw;
  }
  // Leftover hash-router: "#/topics/personal" or "/grammar#/topics/personal"
  const hashRoute = raw.match(/#(\/[^?#]*)/);
  if (hashRoute) {
    const path = hashRoute[1] || "/";
    return path.startsWith("/") ? path : `/${path}`;
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

export function isStaticHref(href: string): boolean {
  const path = (href.split("#")[0] || href).split("?")[0];
  return path.startsWith("/books/") || /\.(html?|pdf|mp3)$/i.test(path);
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
  const { hash, search } = window.location;
  if (!hash.startsWith("#/")) return;
  window.history.replaceState(null, "", toPath(hash) + search);
}
