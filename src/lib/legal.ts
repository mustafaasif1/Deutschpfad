export type LegalConfig = {
  siteName: string;
  siteUrl: string;
  operatorName: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
  email: string;
  phone: string;
  isCommercial: boolean;
  vatId: string;
  registerCourt: string;
  registerNumber: string;
  responsibleContent: string;
  hostingName: string;
  hostingCountry: string;
};

export const DEFAULT_LEGAL: LegalConfig = {
  siteName: "Deutschpfad",
  siteUrl: "",
  operatorName: "",
  street: "",
  postalCode: "",
  city: "",
  country: "Deutschland",
  email: "",
  phone: "",
  isCommercial: false,
  vatId: "",
  registerCourt: "",
  registerNumber: "",
  responsibleContent: "",
  hostingName: "",
  hostingCountry: "",
};

export function getLegalConfig(): LegalConfig {
  const extra = typeof window !== "undefined" ? window.SITE_LEGAL : undefined;
  return { ...DEFAULT_LEGAL, ...(extra || {}) };
}

export function legalFilled(c: LegalConfig): boolean {
  return !!(c.operatorName.trim() && c.street.trim() && c.postalCode.trim() && c.city.trim() && c.email.trim());
}
