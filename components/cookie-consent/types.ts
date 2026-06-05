export type CookieCategory = "necessary" | "analytics" | "marketing" | "preferences";

export type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

export type ConsentState = {
  version: string;
  timestamp: number;
  preferences: CookiePreferences;
};

export const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

export const ALL_ACCEPTED_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: true,
  marketing: true,
  preferences: true,
};
