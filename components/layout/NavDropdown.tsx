"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

export type NavDropdownItem = {
  label: string;
  href: string;
};

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavDropdownItem[];
};

export function NavDropdown({ label, href, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="inline-flex min-h-11 items-center">
        <Link
          href={href}
          className="border-b-2 border-transparent px-2 py-2 text-sm text-body transition-colors hover:border-accent hover:text-primary lg:px-2.5"
        >
          {label}
        </Link>
        <button
          type="button"
          className="inline-flex min-h-11 min-w-8 items-center justify-center text-body transition-colors hover:text-primary"
          aria-expanded={open}
          aria-haspopup="true"
          aria-controls={menuId}
          aria-label={`${label} menu`}
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg
            className={`h-3.5 w-3.5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {open && (
        <ul
          id={menuId}
          role="menu"
          className="absolute left-0 top-full z-50 mt-0 min-w-[15rem] border border-border bg-white py-1 shadow-card"
        >
          <li role="none">
            <Link
              href={href}
              role="menuitem"
              className="block border-b border-border px-4 py-2.5 text-sm font-semibold text-primary hover:bg-section-alt"
              onClick={() => setOpen(false)}
            >
              All {label}
            </Link>
          </li>
          {items.map((item) => (
            <li key={item.href} role="none">
              <Link
                href={item.href}
                role="menuitem"
                className="block px-4 py-2.5 text-sm text-body hover:bg-section-alt hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
