const DEFAULT_SITE_URL = "https://www.sterlingforensic.co.uk";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || DEFAULT_SITE_URL;

export const SITE_NAME = "Sterling Forensic";

export const SITE_TAGLINE =
  "Forensic accounting & expert witness evidence for England and Wales";

export const SITE_EMAIL = "cases@sterlingforensic.co.uk";

export const LINKEDIN_URL =
  "https://www.linkedin.com/company/sterling-forensic";

export const DEFAULT_OG_IMAGE = "/opengraph-image";

export const COLORS = {
  primary: "#0B3D2E",
  primaryDark: "#072820",
  accent: "#C4A962",
  accentMuted: "#E8DCC0",
  highlight: "#1B4965",
  highlightHover: "#143654",
  background: "#FAFAF7",
  sectionAlt: "#F5F1EA",
  border: "#D4CFC4",
  heading: "#0B3D2E",
  body: "#3A3A3A",
} as const;

export const COOKIE_CONSENT_KEY = "sterling_forensic_cookie_consent";
export const COOKIE_CONSENT_VERSION = "1.0";
export const COOKIE_CONSENT_EXPIRY_DAYS = 365;
