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
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="inline-flex min-h-11 items-center gap-0.5 rounded-md px-1 lg:px-2">
        <Link
          href={href}
          className="px-1 py-2 text-sm text-body transition-colors hover:text-primary lg:px-2"
        >
          {label}
        </Link>
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-body transition-colors hover:text-primary"
          aria-expanded={open}
          aria-haspopup="true"
          aria-controls={menuId}
          aria-label={`${label} menu`}
          onClick={() => setOpen((prev) => !prev)}
        >
        <svg
          className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        </button>
      </div>

      {open && (
        <ul
          id={menuId}
          role="menu"
          className="absolute left-0 top-full z-50 mt-1 min-w-[240px] max-w-[320px] rounded-md border border-border bg-white py-2 shadow-card"
        >
          <li role="none">
            <Link
              href={href}
              role="menuitem"
              className="block px-4 py-2 text-sm font-medium text-primary hover:bg-section-alt"
              onClick={() => setOpen(false)}
            >
              All {label}
            </Link>
          </li>
          <li role="separator" className="my-1 border-t border-border" />
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
