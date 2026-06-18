"use client";

import Link from "next/link";
import { footerNav } from "@/lib/content/navigation";
import { SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site-config";
import { useCookieConsent } from "@/components/cookie-consent/CookieConsentProvider";

export function Footer() {
  const { openPreferences } = useCookieConsent();

  return (
    <footer className="border-t border-border bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-heading text-2xl font-normal text-white"
            >
              {SITE_NAME}
            </Link>
            <p className="mt-4 max-w-sm text-sm text-accent">
              Independent forensic accounting expertise for solicitors,
              businesses, and insurers across England and Wales. United Kingdom
              practice only.
            </p>
            <p className="mt-4 text-sm text-accent">
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="transition-colors hover:text-white"
              >
                {SITE_EMAIL}
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-normal text-accent">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-normal text-accent">
              Expertise
            </h3>
            <ul className="mt-4 space-y-2">
              {footerNav.expertise.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-normal text-accent">
              Firm
            </h3>
            <ul className="mt-4 space-y-2">
              {footerNav.firm.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-accent">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-accent transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={openPreferences}
              className="text-xs text-accent transition-colors hover:text-white"
            >
              Cookie Settings
            </button>
          </div>
        </div>

        <p className="mt-4 text-xs text-white/50">
          {SITE_URL.replace("https://", "")} | England and Wales
        </p>
      </div>
    </footer>
  );
}
