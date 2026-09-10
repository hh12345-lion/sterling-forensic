"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNavItems, mobileNavGroups } from "@/lib/content/navigation";
import { SITE_EMAIL, SITE_NAME } from "@/lib/site-config";
import { NavDropdown } from "./NavDropdown";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Masthead — wordmark only, no badge, no utility strip */}
      <div className="header-masthead">
        <div className="site-container flex items-end justify-between gap-6 py-5 md:py-6">
          <Link
            href="/"
            className="group min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <span className="block font-heading text-2xl leading-none text-primary md:text-[1.75rem] lg:text-4xl">
              {SITE_NAME}
            </span>
            <span
              className="mt-2 block h-0.5 w-12 bg-accent transition-all group-hover:w-20"
              aria-hidden="true"
            />
            <span className="mt-2 block max-w-xs text-xs leading-relaxed text-body/80 sm:text-sm">
              Forensic accounting &amp; expert witness · England &amp; Wales
            </span>
          </Link>

          <div className="hidden shrink-0 text-right sm:block">
            <p className="font-label text-primary/60">Direct instruction</p>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="mt-1 block text-sm font-semibold text-highlight transition-colors hover:text-highlight-hover"
            >
              {SITE_EMAIL}
            </a>
          </div>
        </div>
      </div>

      {/* Segmented nav rail — not inline bar, not boxed table, not dark utility row */}
      <div className="header-nav-rail border-b border-border">
        <div className="site-container hidden xl:block">
          <div className="flex items-stretch divide-x divide-accent/35">
            <nav
              className="flex min-h-12 flex-1 items-stretch"
              aria-label="Main navigation"
            >
              {mainNavItems.map((item) =>
                item.type === "dropdown" ? (
                  <NavDropdown
                    key={item.label}
                    label={item.label}
                    href={item.href}
                    items={item.items}
                    variant="rail"
                  />
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="inline-flex min-h-12 items-center px-4 text-sm font-medium text-primary transition-colors hover:bg-white/70"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
            <Link
              href="/contact"
              className="inline-flex min-h-12 shrink-0 items-center bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Enquire
            </Link>
          </div>
        </div>

        {/* Mobile / tablet bar */}
        <div className="site-container flex items-center justify-between gap-3 py-3 xl:hidden">
          <p className="font-label text-primary/70">Navigation</p>
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="inline-flex min-h-10 items-center px-4 text-sm font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4"
            >
              Enquire
            </Link>
            <button
              type="button"
              className="inline-flex min-h-10 items-center gap-2 border border-primary px-3 text-xs font-semibold uppercase tracking-wider text-primary"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-panel"
            >
              <span className="flex flex-col gap-1" aria-hidden="true">
                <span className="block h-0.5 w-4 bg-primary" />
                <span className="block h-0.5 w-4 bg-accent" />
                <span className="block h-0.5 w-4 bg-primary" />
              </span>
              {mobileOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel — drops down, not side drawer */}
      {mobileOpen && (
        <nav
          id="mobile-nav-panel"
          className="border-b border-border bg-section-alt animate-slide-down-panel xl:hidden"
          aria-label="Mobile navigation"
        >
          <div className="site-container divide-y divide-border py-2">
            <Link
              href="/"
              className="flex min-h-11 items-center text-sm font-semibold text-primary"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            {mobileNavGroups.map((group) => (
              <details key={group.label} className="group">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between text-sm font-semibold text-primary marker:content-none [&::-webkit-details-marker]:hidden">
                  {group.label}
                  <span
                    className="text-accent transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </summary>
                <ul className="pb-3 pl-3">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex min-h-10 items-center text-sm text-body transition-colors hover:text-primary"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="flex min-h-11 items-center text-sm text-highlight"
            >
              {SITE_EMAIL}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
