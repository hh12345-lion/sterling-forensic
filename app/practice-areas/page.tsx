import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { practiceAreas } from "@/lib/content/practice-areas";
import { ukPracticeContent } from "@/lib/content/site-content";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Practice Areas | Sterling Forensic UK Forensic Accounting",
  description:
    "Forensic accounting practice areas in England and Wales: commercial disputes, shareholder disputes, valuations, construction quantum, family, insolvency, and regulatory matters.",
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
        subtitle="Forensic accounting expertise for disputes across England and Wales: commercial litigation, shareholder disputes, valuations, construction quantum, family, insolvency, and regulatory proceedings."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Practice Areas" },
        ]}
      />

      <Section>
        <p className="max-w-3xl text-lg text-body">
          Sterling Forensic provides forensic accounting expert evidence across
          the dispute types most commonly requiring financial analysis in UK
          proceedings. Our work spans commercial and shareholder disputes,
          business valuations, loss and damages quantification, construction
          quantum, family financial remedy, fraud, insolvency, personal injury,
          and regulatory enforcement.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      <CTASection />
    </>
  );
}
