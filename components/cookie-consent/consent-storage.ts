import {
  COOKIE_CONSENT_EXPIRY_DAYS,
  COOKIE_CONSENT_KEY,
  COOKIE_CONSENT_VERSION,
} from "@/lib/site-config";
import type { ConsentState, CookiePreferences } from "./types";
import { DEFAULT_PREFERENCES } from "./types";

/** Cached snapshot for useSyncExternalStore (must return stable references). */
let cachedRaw: string | null | undefined;
let cachedSnapshot: ConsentState | null = null;

function parseStoredConsent(raw: string | null): ConsentState | null {
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as ConsentState;

    if (parsed.version !== COOKIE_CONSENT_VERSION) return null;

    const expiryMs = COOKIE_CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000;
    if (Date.now() - parsed.timestamp > expiryMs) {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

function invalidateSnapshotCache(): void {
  cachedRaw = undefined;
}

export function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  return parseStoredConsent(localStorage.getItem(COOKIE_CONSENT_KEY));
}

/**
 * Stable snapshot for useSyncExternalStore.
 * Returns the same object reference until localStorage changes.
 */
export function getConsentSnapshot(): ConsentState | null {
  if (typeof window === "undefined") return null;

  const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (cachedRaw !== undefined && raw === cachedRaw) {
    return cachedSnapshot;
  }

  cachedRaw = raw;
  cachedSnapshot = parseStoredConsent(raw);
  return cachedSnapshot;
}

export function storeConsent(preferences: CookiePreferences): ConsentState {
  const state: ConsentState = {
    version: COOKIE_CONSENT_VERSION,
    timestamp: Date.now(),
    preferences: { ...preferences, necessary: true },
  };

  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(state));
  invalidateSnapshotCache();
  return state;
}

export function clearConsent(): void {
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  invalidateSnapshotCache();
}

export function hasConsentChoice(): boolean {
  return getStoredConsent() !== null;
}

export { DEFAULT_PREFERENCES };
