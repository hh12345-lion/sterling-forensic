"use client";

import Link from "next/link";
import { footerNav } from "@/lib/content/navigation";
import { SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site-config";
import { useCookieConsent } from "@/components/cookie-consent/CookieConsentProvider";

const footerTags = [
  ...footerNav.services,
  ...footerNav.expertise,
  ...footerNav.firm.filter((item) => item.href !== "/contact"),
];

export function Footer() {
  const { openPreferences } = useCookieConsent();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      {/* Registry panel — tag cloud + narrative, not columns or numbered index */}
      <div className="relative overflow-hidden bg-primary text-white">
        <div
          className="footer-watermark absolute -right-4 bottom-0 select-none"
          aria-hidden="true"
        >
          SF
        </div>

        <div className="site-container relative py-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
            <div>
              <p className="font-label text-accent">Sterling Forensic</p>
              <p className="mt-4 max-w-md font-heading text-2xl leading-snug text-white md:text-3xl">
                Financial evidence that holds under cross-examination.
              </p>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/75">
                Independent forensic accounting and expert witness work for
                solicitors, businesses, and insurers across England and Wales.
                United Kingdom practice only.
              </p>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="mt-6 inline-block text-base font-semibold text-accent transition-colors hover:text-white"
              >
                {SITE_EMAIL}
              </a>
            </div>

            <div>
              <p className="font-label text-white/60">Browse the practice</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {footerTags.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex min-h-9 items-center border border-white/25 bg-white/5 px-3 text-xs font-medium text-white/90 transition-colors hover:border-accent hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex min-h-11 items-center bg-accent px-5 text-sm font-semibold text-primary transition-colors hover:bg-accent-muted"
              >
                Enquire about an instruction
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Legal ledger — single parchment strip, not a second dark bar */}
      <div className="border-t-4 border-accent bg-section-alt">
        <div className="site-container flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-body/70">
            © {year} {SITE_NAME} · {SITE_URL.replace("https://", "")} · England
            and Wales
          </p>
          <nav
            aria-label="Legal"
            className="flex flex-wrap items-center gap-x-1 gap-y-1 text-xs text-body/80"
          >
            {footerNav.legal.map((item, index) => (
              <span key={item.href} className="inline-flex items-center">
                {index > 0 && (
                  <span className="mx-2 text-border select-none" aria-hidden="true">
                    |
                  </span>
                )}
                <Link
                  href={item.href}
                  className="transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </span>
            ))}
            <span className="mx-2 text-border select-none" aria-hidden="true">
              |
            </span>
            <button
              type="button"
              onClick={openPreferences}
              className="transition-colors hover:text-primary"
            >
              Cookie settings
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
}
