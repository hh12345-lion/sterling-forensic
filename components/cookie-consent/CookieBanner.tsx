"use client";

import Link from "next/link";
import { useCookieConsent } from "./CookieConsentProvider";

export function CookieBanner() {
  const { acceptAll, rejectNonEssential, openPreferences } = useCookieConsent();

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      className="fixed inset-x-0 bottom-0 z-[100] animate-slide-up border-t border-border bg-primary p-4 shadow-2xl sm:p-6"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2
            id="cookie-banner-title"
            className="font-heading text-lg text-white md:text-xl"
          >
            Cookie Preferences
          </h2>
          <p id="cookie-banner-desc" className="mt-2 text-sm text-accent">
            Sterling Forensic uses cookies to ensure the website functions
            correctly and, with your consent, to analyse usage and improve our
            services. You can accept all cookies, reject non-essential cookies,
            or customise your preferences. Read our{" "}
            <Link
              href="/privacy#cookies"
              className="text-white underline underline-offset-2 hover:text-accent"
            >
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-white underline underline-offset-2 hover:text-accent"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:shrink-0">
          <button
            type="button"
            onClick={acceptAll}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-highlight px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#6a2635] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={rejectNonEssential}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Reject Non-Essential
          </button>
          <button
            type="button"
            onClick={openPreferences}
            className="inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Customise Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
