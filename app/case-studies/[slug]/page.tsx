import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { caseStudies } from "@/lib/content/site-content";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.id === slug);
  if (!study) return {};

  return createMetadata({
    title: `${study.title} | Sterling Forensic Case Study`,
    description: study.background,
    path: `/case-studies/${slug}`,
  });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.id === slug);
  if (!study) notFound();

  const sections = [
    { label: "Background", content: study.background },
    { label: "Instruction", content: study.instruction },
    { label: "Approach", content: study.approach },
    { label: "Outcome", content: study.outcome },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: study.title, path: `/case-studies/${slug}` },
        ])}
      />

      <PageHero
        title={study.title}
        subtitle={study.category}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: study.category },
        ]}
      />

      <Section>
        <span className="inline-block rounded-md bg-section-alt px-3 py-1 text-xs font-medium text-primary">
          {study.category}
        </span>
        <div className="mt-8 space-y-8">
          {sections.map((section) => (
            <div key={section.label}>
              <h2 className="font-heading text-xl text-primary">
                {section.label}
              </h2>
              <p className="mt-3 max-w-3xl text-body">{section.content}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section alt>
        <Link
          href="/case-studies"
          className="inline-flex min-h-11 items-center text-highlight transition-colors hover:text-[#6a2635]"
        >
          &larr; Back to Case Studies
        </Link>
      </Section>

      <CTASection />
    </>
  );
}
