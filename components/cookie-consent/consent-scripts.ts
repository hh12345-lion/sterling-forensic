import type { CookiePreferences } from "./types";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    _linkedin_data_partner_ids?: string[];
    hj?: (...args: unknown[]) => void;
  }
}

// Google Consent Mode v2 default: deny all non-essential until user consents
export function initConsentModeDefaults(): void {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) {
    window.dataLayer?.push(args as unknown as Record<string, unknown>);
  };

  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    functionality_storage: "denied",
    personalization_storage: "denied",
    security_storage: "granted",
    wait_for_update: 500,
  });
}

export function updateConsentMode(preferences: CookiePreferences): void {
  if (!window.gtag) return;

  window.gtag("consent", "update", {
    analytics_storage: preferences.analytics ? "granted" : "denied",
    ad_storage: preferences.marketing ? "granted" : "denied",
    ad_user_data: preferences.marketing ? "granted" : "denied",
    ad_personalization: preferences.marketing ? "granted" : "denied",
    functionality_storage: preferences.preferences ? "granted" : "denied",
    personalization_storage: preferences.preferences ? "granted" : "denied",
  });
}

const loadedScripts = new Set<string>();

function loadScript(id: string, src: string): void {
  if (loadedScripts.has(id) || document.getElementById(id)) return;

  const script = document.createElement("script");
  script.id = id;
  script.src = src;
  script.async = true;
  document.head.appendChild(script);
  loadedScripts.add(id);
}

export function loadTrackingScripts(preferences: CookiePreferences): void {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const linkedInId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;
  const hotjarId = process.env.NEXT_PUBLIC_HOTJAR_ID;

  if (preferences.analytics) {
    if (gtmId) {
      loadScript(
        "gtm-script",
        `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
      );
    }

    if (gaId) {
      loadScript(
        "ga-script",
        `https://www.googletagmanager.com/gtag/js?id=${gaId}`
      );
      window.gtag?.("js", new Date());
      window.gtag?.("config", gaId, { anonymize_ip: true });
    }

    if (hotjarId) {
      loadScript(
        "hotjar-script",
        `https://static.hotjar.com/c/hotjar-${hotjarId}.js?sv=6`
      );
    }
  }

  if (preferences.marketing) {
    if (metaPixelId) {
      loadScript(
        "meta-pixel",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
      window.fbq?.("init", metaPixelId);
      window.fbq?.("track", "PageView");
    }

    if (linkedInId) {
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(linkedInId);
      loadScript(
        "linkedin-insight",
        "https://snap.licdn.com/li.lms-analytics/insight.min.js"
      );
    }
  }
}

export function applyConsent(preferences: CookiePreferences): void {
  updateConsentMode(preferences);
  loadTrackingScripts(preferences);
}
