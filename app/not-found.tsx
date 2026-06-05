import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Page Not Found | Sterling Forensic",
  robots: { index: false, follow: true },
};

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Sectors", href: "/sectors" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <>
      <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p
            className="font-heading text-6xl font-normal text-highlight md:text-8xl"
            aria-hidden="true"
          >
            404
          </p>
          <h1 className="mt-4 font-heading text-3xl font-normal text-white md:text-4xl">
            Page Not Found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-white/80">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-body">You may find these pages helpful:</p>
          <nav
            className="mt-6 flex flex-wrap justify-center gap-3"
            aria-label="Helpful links"
          >
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center rounded-md border border-border px-5 text-sm text-primary shadow-card transition-colors hover:border-highlight hover:text-highlight"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-10">
            <Button href="/">Return to Homepage</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
