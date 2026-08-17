/// <reference types="vite/client" />

interface SiteLegalConfig {
  siteName?: string;
  siteUrl?: string;
  operatorName?: string;
  street?: string;
  postalCode?: string;
  city?: string;
  country?: string;
  email?: string;
  phone?: string;
  isCommercial?: boolean;
  vatId?: string;
  registerCourt?: string;
  registerNumber?: string;
  responsibleContent?: string;
  hostingName?: string;
  hostingCountry?: string;
}

interface Window {
  SITE_LEGAL?: SiteLegalConfig;
}
