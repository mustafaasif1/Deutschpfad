import { describe, expect, it } from "vitest";
import { hashPath, isExternalHref, onHref, toPath } from "@/lib/href";

describe("href", () => {
  it("normalizes hashes and relative paths", () => {
    expect(toPath("#/grammar/articles")).toBe("/grammar/articles");
    expect(toPath("grammar")).toBe("/grammar");
    expect(toPath("/exam")).toBe("/exam");
    expect(toPath("https://telc.net")).toBe("https://telc.net");
    expect(toPath("mailto:hi@x.de")).toBe("mailto:hi@x.de");
    expect(toPath("")).toBe("/");
  });

  it("detects external links", () => {
    expect(isExternalHref("https://example.com")).toBe(true);
    expect(isExternalHref("mailto:a@b.c")).toBe(true);
    expect(isExternalHref("/grammar")).toBe(false);
  });

  it("matches a location to a step href including nested exam papers", () => {
    expect(onHref("/exam/hoeren/1", "/exam/hoeren")).toBe(true);
    expect(onHref("/exam/hoeren", "/exam/hoeren")).toBe(true);
    expect(onHref("/exam/lesen", "/exam/hoeren")).toBe(false);
    expect(onHref("/", "/")).toBe(false);
    expect(hashPath("#/foo/")).toBe("/foo");
  });
});
