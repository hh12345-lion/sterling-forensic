import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import {
  coreExpertiseAreas,
  servicesOverview,
  ukPracticeContent,
  whyInstructPillars,
} from "@/lib/content/site-content";
import { createMetadata } from "@/lib/metadata";
import { homepageGraph } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Sterling Forensic | Expert Witness & Forensic Accounting UK",
  description:
    "UK forensic accounting practice: expert witness reports, disputes, business valuations, shareholder disputes, and loss and damages quantification for solicitors across England and Wales.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageGraph()} />

      <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-normal text-white md:text-4xl lg:text-5xl">
            Sterling Forensic
            <span className="mt-2 block text-2xl md:text-3xl lg:text-4xl">
              Expert Witness &amp; Forensic Accounting | United Kingdom
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/80 md:text-xl">
            Sterling Forensic is an independent UK forensic accounting practice
            providing expert witness reports, dispute support, business
            valuations, shareholder dispute analysis, and loss and damages
            quantification for solicitors, businesses, and insurers across
            England and Wales.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact">Instruct Sterling Forensic</Button>
            <Button href="/services" variant="outline">
              Our Services
            </Button>
          </div>
        </div>
      </section>

      <Section>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          Sterling Forensic
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-body">
          Sterling Forensic is an independent United Kingdom forensic accounting
          practice providing expert witness reports and financial investigation
          services across commercial disputes, shareholder disputes, business
          valuations, loss and damages quantification, family proceedings,
          insolvency, construction quantum, and criminal matters. We work with
          solicitors, barristers, businesses, and insurers who need forensic
          accounting expertise they can rely on, from preliminary assessment to
          courtroom testimony.
        </p>
      </Section>

      <Section alt>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          Our Core Expertise
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-body">
          Our practice covers the full range of forensic accounting work
          required in UK litigation and investigation: expert witness evidence,
          dispute analysis, valuations, shareholder fair value, and
          quantification of loss and damages. Every instruction is accepted and
          led by a senior forensic accountant with direct court experience.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreExpertiseAreas.map((area) => (
            <Link
              key={area.title}
              href={area.href}
              className="group rounded-md border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-lg"
            >
              <h3 className="font-heading text-lg text-primary group-hover:text-highlight">
                {area.title}
              </h3>
              <p className="mt-3 text-sm text-body">{area.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          {ukPracticeContent.heading}
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-body">
          {ukPracticeContent.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section alt>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          Why Solicitors Instruct Us
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {whyInstructPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-md border border-border bg-white p-6 shadow-card"
            >
              <div className="mb-3 h-1 w-12 rounded-full bg-accent" />
              <h3 className="font-heading text-lg text-primary">
                {pillar.title}
              </h3>
              <p className="mt-3 text-body">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          Our Forensic Accounting Services
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesOverview.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group rounded-md border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-lg"
            >
              <h3 className="font-heading text-lg text-primary group-hover:text-highlight">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-body">{service.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section alt>
        <blockquote className="mx-auto max-w-3xl border-l-4 border-highlight pl-6">
          <p className="font-heading text-xl italic text-primary md:text-2xl">
            &ldquo;The value of forensic accounting evidence is not just in the
            numbers. It is in explaining why those numbers are right.&rdquo;
          </p>
          <footer className="mt-4 text-sm text-body">
            Sterling Forensic
          </footer>
        </blockquote>
      </Section>

      <CTASection />
    </>
  );
}
