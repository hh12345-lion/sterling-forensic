"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNavItems, mobileNavGroups } from "@/lib/content/navigation";
import { SITE_NAME } from "@/lib/site-config";
import { NavDropdown } from "./NavDropdown";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="min-w-0 truncate font-heading text-lg font-normal text-primary sm:text-xl md:text-2xl"
        >
          {SITE_NAME}
        </Link>

        <nav
          className="hidden items-center gap-1 xl:flex"
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
                className="inline-flex min-h-11 items-center rounded-md px-2 py-2 text-sm text-body transition-colors hover:text-primary lg:px-3"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="ml-2 inline-flex min-h-11 items-center rounded-md bg-highlight px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#6a2635]"
          >
            Contact Us
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-primary xl:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          className="max-h-[80vh] overflow-y-auto border-t border-border bg-white xl:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6">
            <Link
              href="/"
              className="flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-primary"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            {mobileNavGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-2 font-heading text-sm font-normal text-primary">
                  {group.label}
                </p>
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex min-h-11 items-center rounded-md px-3 text-sm text-body transition-colors hover:bg-section-alt hover:text-primary"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link
              href="/contact"
              className="flex min-h-11 w-full items-center justify-center rounded-md bg-highlight px-5 text-sm font-medium text-white transition-colors hover:bg-[#6a2635]"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
