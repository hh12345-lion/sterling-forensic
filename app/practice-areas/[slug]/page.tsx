import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { FAQList } from "@/components/ui/FAQList";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import {
  getPracticeArea,
  practiceAreaBullets,
  practiceAreas,
} from "@/lib/content/practice-areas";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return {};

  return createMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/practice-areas/${slug}`,
  });
}

export default async function PracticeAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  const bullets = practiceAreaBullets[slug] || [];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Practice Areas", path: "/practice-areas" },
          { name: area.title, path: `/practice-areas/${slug}` },
        ])}
      />
      <JsonLd data={faqPageSchema(area.faqs)} />

      <PageHero
        title={
          slug === "construction-quantum"
            ? "Construction Quantum"
            : area.title
        }
        subtitle={area.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: area.title },
        ]}
      />

      {area.sections.map((section, index) => (
        <Section key={section.heading} alt={index % 2 === 1}>
          <h2 className="font-heading text-2xl text-primary md:text-3xl">
            {section.heading}
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-body">
            {section.content.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          {section.heading === "What We Cover" && bullets.length > 0 && (
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {bullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-md border border-border bg-white p-4 text-sm text-body shadow-card"
                >
                  <span className="mt-1 text-accent" aria-hidden="true">
                    &#9670;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </Section>
      ))}

      <Section alt>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-8">
          <FAQList items={area.faqs} />
        </div>
      </Section>

      {area.relatedPracticeAreas.length > 0 && (
        <Section>
          <h2 className="font-heading text-2xl text-primary md:text-3xl">
            Related Practice Areas
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {area.relatedPracticeAreas.map((relatedSlug) => {
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
