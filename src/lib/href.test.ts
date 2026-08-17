import { describe, expect, it } from "vitest";
import { hashPath, isExternalHref, isStaticHref, migrateLegacyLocation, onHref, toPath } from "@/lib/href";

describe("href", () => {
  it("normalizes hashes and relative paths", () => {
    expect(toPath("#/grammar/articles")).toBe("/grammar/articles");
    expect(toPath("grammar")).toBe("/grammar");
    expect(toPath("/exam")).toBe("/exam");
    expect(toPath("https://telc.net")).toBe("https://telc.net");
    expect(toPath("mailto:hi@x.de")).toBe("mailto:hi@x.de");
    expect(toPath("")).toBe("/");
    expect(toPath("/grammar#/topics/personal")).toBe("/topics/personal");
    expect(toPath("/books/a1.html#ch-01")).toBe("/books/a1.html#ch-01");
  });

  it("rewrites leftover hash routes glued onto a real path", () => {
    window.history.replaceState(null, "", "/grammar#/topics/personal");
    migrateLegacyLocation();
    expect(`${window.location.pathname}${window.location.hash}`).toBe("/topics/personal");
  });

  it("detects external links", () => {
    expect(isExternalHref("https://example.com")).toBe(true);
    expect(isExternalHref("mailto:a@b.c")).toBe(true);
    expect(isExternalHref("/grammar")).toBe(false);
    expect(isStaticHref("/books/a1.html")).toBe(true);
    expect(isStaticHref("/books/a1.html#ch-01")).toBe(true);
    expect(isStaticHref("/topics/personal")).toBe(false);
  });

  it("matches a location to a step href including nested exam papers", () => {
    expect(onHref("/exam/hoeren/1", "/exam/hoeren")).toBe(true);
    expect(onHref("/exam/hoeren", "/exam/hoeren")).toBe(true);
    expect(onHref("/exam/lesen", "/exam/hoeren")).toBe(false);
    expect(onHref("/", "/")).toBe(false);
    expect(hashPath("#/foo/")).toBe("/foo");
  });
});
