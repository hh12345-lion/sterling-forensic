import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { caseStudies } from "@/lib/content/site-content";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Case Studies | Sterling Forensic Forensic Accounting UK",
  description:
    "Anonymised case studies from Sterling Forensic's forensic accounting practice across commercial disputes, fraud, family proceedings, and construction claims.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
        ])}
      />

      <PageHero
        title="Case Studies"
        subtitle="Anonymised examples of our forensic accounting work across construction, fraud, family, and insolvency matters."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies" },
        ]}
      />

      <Section>
        <div className="space-y-10">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="rounded-md border border-border bg-white p-6 shadow-card md:p-8"
            >
              <span className="inline-block rounded-md bg-section-alt px-3 py-1 text-xs font-medium text-primary">
                {study.category}
              </span>
              <h2 className="mt-4 font-heading text-xl text-primary md:text-2xl">
                <Link
                  href={`/case-studies/${study.id}`}
                  className="transition-colors hover:text-highlight"
                >
                  {study.title}
                </Link>
              </h2>
              <p className="mt-4 text-sm text-body">{study.background}</p>
              <Link
                href={`/case-studies/${study.id}`}
                className="mt-4 inline-flex min-h-11 items-center text-sm text-highlight transition-colors hover:text-[#6a2635]"
              >
                Read case study &rarr;
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
