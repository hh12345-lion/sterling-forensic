import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { FAQList } from "@/components/ui/FAQList";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { getPracticeArea } from "@/lib/content/practice-areas";
import { getSector, sectors } from "@/lib/content/sectors";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) return {};

  return createMetadata({
    title: sector.metaTitle,
    description: sector.metaDescription,
    path: `/sectors/${slug}`,
  });
}

export default async function SectorPage({ params }: PageProps) {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Sectors", path: "/sectors" },
          { name: sector.title, path: `/sectors/${slug}` },
        ])}
      />
      <JsonLd data={faqPageSchema(sector.faqs)} />

      <PageHero
        title={sector.title}
        subtitle={sector.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sectors", href: "/sectors" },
          { label: sector.title },
        ]}
      />

      {sector.sections.map((section, index) => (
        <Section key={index} alt={index % 2 === 1}>
          {section.heading && (
            <h2 className="font-heading text-2xl text-primary md:text-3xl">
              {section.heading}
            </h2>
          )}
          <div className={`max-w-3xl space-y-4 text-body ${section.heading ? "mt-6" : ""}`}>
            {section.content.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Section>
      ))}

      <Section alt>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-8">
          <FAQList items={sector.faqs} />
        </div>
      </Section>

      {sector.relatedPracticeAreas.length > 0 && (
        <Section>
          <h2 className="font-heading text-2xl text-primary md:text-3xl">
            Related Practice Areas
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {sector.relatedPracticeAreas.map((relatedSlug) => {
              const related = getPracticeArea(relatedSlug);
              if (!related) return null;
              return (
                <Link
                  key={relatedSlug}
                  href={`/practice-areas/${relatedSlug}`}
                  className="inline-flex min-h-11 items-center rounded-md border border-border bg-white px-4 text-sm text-primary shadow-card transition-colors hover:border-highlight hover:text-highlight"
                >
                  {related.title}
                </Link>
              );
            })}
          </div>
        </Section>
      )}

      <CTASection />
    </>
  );
}
