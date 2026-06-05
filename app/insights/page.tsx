import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { insights } from "@/lib/content/insights";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Insights | Sterling Forensic UK",
  description:
    "Forensic accounting insights from Sterling Forensic on expert witness practice, financial disputes, construction quantum, and fraud.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ])}
      />

      <PageHero
        title="Insights"
        subtitle="Forensic accounting insights for solicitors and legal professionals."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Insights" },
        ]}
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {insights.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group rounded-md border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-lg"
            >
              <time
                dateTime={article.datePublished}
                className="text-xs text-body/70"
              >
                {new Date(article.datePublished).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <h2 className="mt-3 font-heading text-xl text-primary group-hover:text-highlight">
                {article.title}
              </h2>
              <p className="mt-3 text-sm text-body">{article.excerpt}</p>
              <span className="mt-4 inline-flex min-h-11 items-center text-sm text-highlight">
                Read article &rarr;
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
