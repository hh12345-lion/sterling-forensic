import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { Section } from "@/components/ui/Section";
import { getInsight, insights } from "@/lib/content/insights";
import { createMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return {};

  return createMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/insights/${slug}`,
    openGraphType: "article",
  });
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: article.title, path: `/insights/${slug}` },
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: article.title,
          description: article.metaDescription,
          slug: article.slug,
          datePublished: article.datePublished,
          dateModified: article.dateModified,
        })}
      />

      <PageHero
        title={article.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          { label: article.title },
        ]}
      />

      {article.sections.map((section, index) => (
        <Section key={index} alt={index % 2 === 1}>
          {section.heading && (
            <h2 className="font-heading text-2xl text-primary md:text-3xl">
              {section.heading}
            </h2>
          )}
          <div className={`max-w-3xl space-y-4 text-body ${section.heading ? "mt-6" : ""}`}>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Section>
      ))}

      <Section alt>
        <RelatedLinks links={article.relatedLinks} />
      </Section>

      <Section>
        <Link
          href="/insights"
          className="inline-flex min-h-11 items-center text-highlight transition-colors hover:text-highlight-hover"
        >
          &larr; Back to Insights
        </Link>
      </Section>

      <CTASection />
    </>
  );
}
