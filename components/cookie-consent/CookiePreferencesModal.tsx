"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useCookieConsent } from "./CookieConsentProvider";
import type { CookieCategory, CookiePreferences } from "./types";

const categories: {
  key: CookieCategory;
  label: string;
  description: string;
  required?: boolean;
}[] = [
  {
    key: "necessary",
    label: "Necessary Cookies",
    description:
      "Essential for the website to function. Cannot be disabled.",
    required: true,
  },
  {
    key: "analytics",
    label: "Analytics",
    description:
      "Help us understand how visitors use the website (e.g. Google Analytics, Hotjar).",
  },
  {
    key: "marketing",
    label: "Marketing",
    description:
      "Used for advertising and remarketing (e.g. Meta Pixel, LinkedIn Insight Tag).",
  },
  {
    key: "preferences",
    label: "Preferences",
    description:
      "Remember your settings and personalise your experience.",
  },
];

export function CookiePreferencesModal() {
  const { preferences, closeModal, savePreferences, acceptAll } =
    useCookieConsent();
  const [draft, setDraft] = useState<CookiePreferences>(preferences);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  function toggleCategory(key: CookieCategory) {
    if (key === "necessary") return;
    setDraft((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <div
      className="fixed inset-0 z-[110] flex items-end justify-center bg-black/50 p-4 sm:items-center"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-labelledby="cookie-modal-title"
        aria-modal="true"
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-md bg-white shadow-2xl animate-fade-in"
      >
        <div className="border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <h2
              id="cookie-modal-title"
              className="font-heading text-xl text-primary"
            >
              Cookie Settings
            </h2>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeModal}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-body hover:bg-section-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Close cookie settings"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
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
          <p className="mt-2 text-sm text-body">
            Manage your cookie preferences below. See our{" "}
            <Link href="/privacy#cookies" className="text-highlight underline">
              Cookie Policy
            </Link>{" "}
            for details.
          </p>
        </div>

        <div className="space-y-4 px-6 py-4">
          {categories.map((cat) => (
            <div
              key={cat.key}
              className="flex items-start justify-between gap-4 rounded-md border border-border p-4"
            >
              <div>
                <p className="font-heading text-sm text-primary">{cat.label}</p>
                <p className="mt-1 text-xs text-body">{cat.description}</p>
              </div>
              {cat.required ? (
                <span className="shrink-0 rounded-md bg-section-alt px-3 py-1 text-xs font-medium text-body">
                  Always on
                </span>
              ) : (
                <button
                  type="button"
                  role="switch"
                  aria-checked={draft[cat.key]}
                  aria-label={`Toggle ${cat.label}`}
                  onClick={() => toggleCategory(cat.key)}
                  className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    draft[cat.key] ? "bg-highlight" : "bg-border"
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
                      draft[cat.key] ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 border-t border-border px-6 py-4 sm:flex-row">
          <button
            type="button"
            onClick={() => savePreferences(draft)}
            className="inline-flex min-h-11 flex-1 items-center justify-center rounded-md bg-highlight px-5 text-sm font-medium text-white transition-colors hover:bg-[#6a2635] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight"
          >
            Save Preferences
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="inline-flex min-h-11 flex-1 items-center justify-center rounded-md border border-border px-5 text-sm font-medium text-primary transition-colors hover:bg-section-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
