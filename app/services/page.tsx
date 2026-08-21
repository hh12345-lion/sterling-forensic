import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import {
  coreExpertiseAreas,
  servicesOverview,
  ukPracticeContent,
} from "@/lib/content/site-content";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, servicesGraph } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Forensic Accounting Services | Sterling Forensic UK",
  description:
    "UK forensic accounting services: expert witness reports, disputes, valuations, shareholder disputes, and loss and damages quantification for solicitors in England and Wales.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesGraph()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <PageHero
        title="Forensic Accounting Services"
        subtitle="Expert witness, disputes, valuations, shareholder disputes, and loss and damages quantification for solicitors, businesses, and insurers across England and Wales."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <Section>
        <p className="max-w-3xl text-lg text-body">
          Sterling Forensic provides the full range of forensic accounting
          services required in UK litigation, arbitration, and investigation
          matters. From CPR Part 35 expert witness reports to business
          valuations, shareholder fair value analysis, and quantification of loss
          and damages, every service is delivered by a senior forensic
          accountant with direct court experience in England and Wales.
        </p>
      </Section>

      <Section alt>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          Core Expertise
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreExpertiseAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-md border border-border bg-white p-6 shadow-card"
            >
              <h3 className="font-heading text-lg text-primary">{area.title}</h3>
              <p className="mt-3 text-sm text-body">{area.description}</p>
              <Link
                href={area.href}
                className="mt-4 inline-flex min-h-11 items-center text-sm text-highlight transition-colors hover:text-highlight-hover"
              >
                Learn more &rarr;
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          All Services
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {servicesOverview.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="rounded-md border border-border bg-white p-6 shadow-card"
            >
              <h2 className="font-heading text-xl text-primary">
                {service.title}
              </h2>
              <p className="mt-3 text-body">{service.description}</p>
              <Link
                href={service.href}
                className="mt-4 inline-flex min-h-11 items-center text-sm text-highlight transition-colors hover:text-highlight-hover"
              >
                Learn more &rarr;
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section alt>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          {ukPracticeContent.heading}
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-body">
          {ukPracticeContent.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          Who We Work With
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Commercial litigation solicitors and barristers",
            "Family law solicitors",
            "Insurers and loss adjusters",
            "Businesses facing disputes or investigations in England and Wales",
          ].map((audience) => (
            <div
              key={audience}
              className="rounded-md border border-border bg-white p-5 shadow-card"
            >
              <p className="text-body">{audience}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
