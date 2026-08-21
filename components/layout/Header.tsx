"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNavItems, mobileNavGroups } from "@/lib/content/navigation";
import { SITE_EMAIL, SITE_NAME, SITE_TAGLINE } from "@/lib/site-config";
import { NavDropdown } from "./NavDropdown";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  return (
    <>
      <div className="bg-primary text-white">
        <div className="site-container flex flex-col gap-1 py-2 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="font-label text-white/80">
            England &amp; Wales · United Kingdom practice only
          </p>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="font-medium text-accent transition-colors hover:text-white"
          >
            {SITE_EMAIL}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-surface shadow-panel">
        <div className="site-container flex items-center justify-between gap-4 py-3 lg:py-4">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center bg-primary font-heading text-base font-semibold text-accent"
              aria-hidden="true"
            >
              SF
            </span>
            <span className="min-w-0">
              <span className="block truncate font-heading text-lg leading-tight text-primary md:text-xl">
                {SITE_NAME}
              </span>
              <span className="hidden font-label text-primary/70 sm:block">
                {SITE_TAGLINE}
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-0.5 xl:flex"
            aria-label="Main navigation"
          >
            {mainNavItems.map((item) =>
              item.type === "dropdown" ? (
                <NavDropdown
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  items={item.items}
                />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex min-h-11 items-center border-b-2 border-transparent px-2.5 py-2 text-sm text-body transition-colors hover:border-accent hover:text-primary lg:px-3"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="ml-3 inline-flex min-h-11 items-center border-2 border-primary px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Enquire
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-border bg-white text-primary xl:hidden"
            onClick={() => setMobileOpen(true)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-drawer"
            aria-label="Open menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.75}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </header>

      {mobileOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-[60] bg-primary/40 animate-fade-in xl:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <nav
            id="mobile-drawer"
            className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col border-l border-border bg-surface animate-slide-in-right xl:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-4">
              <span className="font-label text-primary">Menu</span>
              <button
                type="button"
                className="inline-flex min-h-11 min-w-11 items-center justify-center border border-border text-primary"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.75}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6">
              <Link
                href="/"
                className="mb-6 flex min-h-11 items-center border-b border-border px-1 text-sm font-semibold text-primary"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
              {mobileNavGroups.map((group) => (
                <div key={group.label} className="mb-6">
                  <p className="mb-2 font-label text-primary/70">{group.label}</p>
                  <ul className="space-y-0.5">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="flex min-h-11 items-center border-l-2 border-transparent px-3 text-sm text-body transition-colors hover:border-accent hover:bg-section-alt hover:text-primary"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="border-t border-border p-4">
              <Link
                href="/contact"
                className="flex min-h-11 w-full items-center justify-center border-2 border-primary bg-primary text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                onClick={() => setMobileOpen(false)}
              >
                Enquire
              </Link>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
