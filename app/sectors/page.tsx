import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { sectors } from "@/lib/content/sectors";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Sector Expertise | Sterling Forensic UK Forensic Accountants",
  description:
    "Sterling Forensic's sector expertise: construction, technology, financial services, professional practices, and retail and hospitality forensic accounting.",
  path: "/sectors",
});

export default function SectorsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Sectors", path: "/sectors" },
        ])}
      />

      <PageHero
        title="Sector Expertise"
        subtitle="Sector-specific forensic accounting expertise across construction, technology, financial services, professional practices, and retail."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sectors" },
        ]}
      />

      <Section>
        <p className="mb-8 max-w-3xl text-lg text-body">
          Sector knowledge informs our approach to valuation methodology and loss
          quantification. A construction quantum dispute requires different
          expertise from a SaaS business valuation or a dental practice
          partnership dispute.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <Link
              key={sector.slug}
              href={`/sectors/${sector.slug}`}
              className="group rounded-md border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-lg"
            >
              <h2 className="font-heading text-xl text-primary group-hover:text-highlight">
                {sector.title}
              </h2>
              <p className="mt-3 text-sm text-body">{sector.shortDescription}</p>
              <span className="mt-4 inline-flex min-h-11 items-center text-sm text-highlight">
                View sector expertise &rarr;
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
