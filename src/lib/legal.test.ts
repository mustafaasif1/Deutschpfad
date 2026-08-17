import { describe, expect, it } from "vitest";
import { DEFAULT_LEGAL, getLegalConfig, legalFilled } from "@/lib/legal";

describe("legal", () => {
  it("treats empty operator details as unfilled", () => {
    expect(legalFilled(DEFAULT_LEGAL)).toBe(false);
  });

  it("requires name, street, postcode, city, and email", () => {
    expect(
      legalFilled({
        ...DEFAULT_LEGAL,
        operatorName: "Ada",
        street: "Teststr. 1",
        postalCode: "10115",
        city: "Berlin",
        email: "ada@example.com",
      }),
    ).toBe(true);
    expect(
      legalFilled({
        ...DEFAULT_LEGAL,
        operatorName: "Ada",
        city: "Berlin",
        email: "ada@example.com",
      }),
    ).toBe(false);
  });

  it("merges window.SITE_LEGAL when present", () => {
    window.SITE_LEGAL = { operatorName: "Test GmbH" };
    expect(getLegalConfig().operatorName).toBe("Test GmbH");
    expect(getLegalConfig().country).toBe("Deutschland");
    delete window.SITE_LEGAL;
  });
});
