import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { practiceAreas } from "@/lib/content/practice-areas";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Practice Areas | Sterling Forensic UK Forensic Accounting",
  description:
    "Sterling Forensic's practice areas: commercial disputes, fraud, family law, personal injury, insolvency, construction, and regulatory matters.",
  path: "/practice-areas",
});

export default function PracticeAreasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Practice Areas", path: "/practice-areas" },
        ])}
      />

      <PageHero
        title="Practice Areas"
        subtitle="Forensic accounting expertise across commercial, family, construction, insolvency, and regulatory proceedings."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Practice Areas" },
        ]}
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/practice-areas/${area.slug}`}
              className="group rounded-md border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-lg"
            >
              <h2 className="font-heading text-xl text-primary group-hover:text-highlight">
                {area.title}
              </h2>
              <p className="mt-3 text-sm text-body">{area.shortDescription}</p>
              <span className="mt-4 inline-flex min-h-11 items-center text-sm text-highlight">
                View practice area &rarr;
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
