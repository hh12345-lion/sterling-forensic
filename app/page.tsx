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
    "United Kingdom forensic accounting practice: expert witness reports, disputes, business valuations, shareholder disputes, and loss and damages quantification for solicitors across England and Wales.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageGraph()} />

      <section className="border-b border-border bg-primary">
        <div className="site-container">
          <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]">
            <div className="py-16 md:py-24">
              <p className="font-label text-accent">England &amp; Wales</p>
              <h1 className="mt-4 font-heading text-3xl font-normal text-white md:text-4xl lg:text-5xl">
                Sterling Forensic
                <span className="mt-3 block text-2xl text-white/90 md:text-3xl lg:text-4xl">
                  Expert witness · Forensic accounting · Disputes · Valuations
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
                Sterling Forensic is an independent United Kingdom forensic
                accounting practice providing expert witness reports, forensic
                accounting, dispute support, business valuations, shareholder
                dispute analysis, and loss and damages quantification for
                solicitors, businesses, and insurers across England and Wales.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button href="/contact">Instruct Sterling Forensic</Button>
                <Button href="/services" variant="outline">
                  Our services
                </Button>
              </div>
            </div>
            <div
              className="hero-pattern hidden min-h-[16rem] border-l border-white/10 lg:block"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <Section>
        <div className="section-panel">
          <h2 className="font-heading text-2xl text-primary md:text-3xl">
            Sterling Forensic
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-body">
            Sterling Forensic is an independent United Kingdom forensic
            accounting practice providing expert witness reports and financial
            investigation services across commercial disputes, shareholder
            disputes, business valuations, loss and damages quantification,
            family proceedings, insolvency, construction quantum, and criminal
            matters. We work with solicitors, barristers, businesses, and
            insurers who need forensic accounting expertise they can rely on,
            from preliminary assessment to courtroom testimony.
          </p>
        </div>
      </Section>

      <Section alt>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          Our core expertise
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-body">
          Our practice covers the full range of forensic accounting work
          required in United Kingdom litigation and investigation: expert witness
          evidence, dispute analysis, valuations, shareholder fair value, and
          quantification of loss and damages. Every instruction is accepted and
          led by a senior forensic accountant with direct court experience.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {coreExpertiseAreas.map((area) => (
            <Link
              key={area.title}
              href={area.href}
              className="group card-accent-top border border-border bg-white p-6 shadow-panel transition-shadow hover:shadow-card"
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
        <div className="section-panel">
          <h2 className="font-heading text-2xl text-primary md:text-3xl">
            {ukPracticeContent.heading}
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-body">
            {ukPracticeContent.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section alt>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          Why solicitors instruct us
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {whyInstructPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="border border-border bg-white p-6 shadow-panel"
            >
              <div className="mb-3 h-1 w-10 bg-accent" />
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
          Our forensic accounting services
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicesOverview.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group card-accent-top border border-border bg-white p-6 shadow-panel transition-shadow hover:shadow-card"
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
        <blockquote className="mx-auto max-w-3xl border-l-4 border-accent pl-6">
          <p className="font-heading text-xl italic text-primary md:text-2xl">
            &ldquo;The value of forensic accounting evidence is not just in the
            numbers. It is in explaining why those numbers are right.&rdquo;
          </p>
          <footer className="mt-4 text-sm text-body">Sterling Forensic</footer>
        </blockquote>
      </Section>

      <CTASection />
    </>
  );
}
