import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { servicesOverview } from "@/lib/content/site-content";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, servicesGraph } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Forensic Accounting Services | Sterling Forensic UK",
  description:
    "Sterling Forensic provides expert witness, fraud investigation, asset tracing, loss quantification, business valuation, and dispute support services for UK solicitors.",
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
        subtitle="Comprehensive forensic accounting services for solicitors, businesses, and insurers across England and Wales."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <Section>
        <p className="max-w-3xl text-lg text-body">
          Sterling Forensic provides the full range of forensic accounting
          services required in litigation, arbitration, and investigation
          matters. Every service is delivered by a senior forensic accountant
          with direct court experience.
        </p>
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
                className="mt-4 inline-flex min-h-11 items-center text-sm text-highlight transition-colors hover:text-[#6a2635]"
              >
                Learn more &rarr;
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section alt>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          Who We Work With
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Commercial litigation solicitors and barristers",
            "Family law solicitors",
            "Insurers and loss adjusters",
            "Businesses facing disputes or investigations",
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
