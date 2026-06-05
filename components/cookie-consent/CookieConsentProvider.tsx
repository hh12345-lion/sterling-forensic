"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { applyConsent } from "./consent-scripts";
import {
  getConsentSnapshot,
  storeConsent,
} from "./consent-storage";
import type { CookiePreferences } from "./types";
import {
  ALL_ACCEPTED_PREFERENCES,
  DEFAULT_PREFERENCES,
} from "./types";
import { CookieBanner } from "./CookieBanner";
import { CookiePreferencesModal } from "./CookiePreferencesModal";

const CONSENT_CHANGE_EVENT = "sterling-cookie-consent-change";

function subscribeToConsent(callback: () => void) {
  window.addEventListener(CONSENT_CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getServerConsentSnapshot() {
  return null;
}

function notifyConsentChange() {
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

type CookieConsentContextValue = {
  preferences: CookiePreferences;
  hasChosen: boolean;
  showBanner: boolean;
  showModal: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  openPreferences: () => void;
  closeModal: () => void;
  savePreferences: (prefs: CookiePreferences) => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null
);

export function useCookieConsent(): CookieConsentContextValue {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return context;
}

type CookieConsentProviderProps = {
  children: ReactNode;
};

export function CookieConsentProvider({ children }: CookieConsentProviderProps) {
  const storedConsent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerConsentSnapshot
  );

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const [showModal, setShowModal] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const appliedConsentKey = useRef<string | null>(null);

  const hasChosen = storedConsent !== null;
  const preferences = storedConsent?.preferences ?? DEFAULT_PREFERENCES;
  const showBanner = mounted && !hasChosen && !showModal && !bannerDismissed;

  const persistAndApply = useCallback((prefs: CookiePreferences) => {
    const finalPrefs = { ...prefs, necessary: true };
    storeConsent(finalPrefs);
    notifyConsentChange();
    applyConsent(finalPrefs);
    appliedConsentKey.current = JSON.stringify(finalPrefs);
    setBannerDismissed(true);
  }, []);

  useEffect(() => {
    if (!storedConsent) return;

    const consentKey = JSON.stringify(storedConsent.preferences);
    if (appliedConsentKey.current === consentKey) return;

    appliedConsentKey.current = consentKey;
    applyConsent(storedConsent.preferences);
  }, [storedConsent]);

  const acceptAll = useCallback(() => {
    persistAndApply(ALL_ACCEPTED_PREFERENCES);
    setShowModal(false);
  }, [persistAndApply]);

  const rejectNonEssential = useCallback(() => {
    persistAndApply(DEFAULT_PREFERENCES);
    setShowModal(false);
  }, [persistAndApply]);

  const openPreferences = useCallback(() => {
    setShowModal(true);
    setBannerDismissed(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
    if (!hasChosen) {
      setBannerDismissed(false);
    }
  }, [hasChosen]);

  const savePreferences = useCallback(
    (prefs: CookiePreferences) => {
      persistAndApply(prefs);
      setShowModal(false);
    },
    [persistAndApply]
  );

  const value = useMemo(
    () => ({
      preferences,
      hasChosen,
      showBanner,
      showModal,
      acceptAll,
      rejectNonEssential,
      openPreferences,
      closeModal,
      savePreferences,
    }),
    [
      preferences,
      hasChosen,
      showBanner,
      showModal,
      acceptAll,
      rejectNonEssential,
      openPreferences,
      closeModal,
      savePreferences,
    ]
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
      {mounted && (
        <>
          {showBanner && <CookieBanner />}
          {showModal && <CookiePreferencesModal />}
        </>
      )}
    </CookieConsentContext.Provider>
  );
}
