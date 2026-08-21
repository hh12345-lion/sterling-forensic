"use client";

import Link from "next/link";
import { footerNav } from "@/lib/content/navigation";
import { SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site-config";
import { useCookieConsent } from "@/components/cookie-consent/CookieConsentProvider";

export function Footer() {
  const { openPreferences } = useCookieConsent();

  return (
    <footer className="mt-auto border-t-4 border-accent bg-section-alt text-primary">
      <div className="site-container py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="section-panel">
              <Link
                href="/"
                className="font-heading text-2xl text-primary md:text-3xl"
              >
                {SITE_NAME}
              </Link>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-body">
                Independent forensic accounting expertise for solicitors,
                businesses, and insurers across England and Wales. We accept
                instructions throughout the United Kingdom only.
              </p>
              <p className="mt-4 inline-flex items-center gap-2 border border-primary/20 bg-white px-3 py-1.5 font-label text-primary">
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                England &amp; Wales practice
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-4">
            <div>
              <h2 className="font-label text-primary">Services</h2>
              <ul className="mt-4 space-y-2">
                {footerNav.services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-body transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-label text-primary">Expertise</h2>
              <ul className="mt-4 space-y-2">
                {footerNav.expertise.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-body transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="border border-border bg-white p-5 shadow-panel">
              <h2 className="font-label text-primary">Get in touch</h2>
              <p className="mt-3 text-sm text-body">
                Discuss a forensic accounting instruction or expert witness
                appointment.
              </p>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="mt-4 block break-all text-sm font-semibold text-highlight transition-colors hover:text-highlight-hover"
              >
                {SITE_EMAIL}
              </a>
              <Link
                href="/contact"
                className="mt-5 inline-flex min-h-11 w-full items-center justify-center border-2 border-primary bg-primary text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Enquire
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerNav.firm.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-body transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs text-body/70">
              {SITE_URL.replace("https://", "")} · England and Wales
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary text-white">
        <div className="site-container flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/70">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-white/70 transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={openPreferences}
              className="text-xs text-white/70 transition-colors hover:text-accent"
            >
              Cookie settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
