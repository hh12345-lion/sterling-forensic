import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { FAQList } from "@/components/ui/FAQList";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { getService, services } from "@/lib/content/services";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema, servicePageSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return createMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${slug}` },
        ])}
      />
      <JsonLd data={faqPageSchema(service.faqs)} />
      <JsonLd
        data={servicePageSchema({
          slug,
          title: service.title,
          description: service.metaDescription,
        })}
      />

      <PageHero
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {service.sections.map((section, index) => (
        <Section key={section.heading} alt={index % 2 === 1}>
          <h2 className="font-heading text-2xl text-primary md:text-3xl">
            {section.heading}
          </h2>
          {section.heading === "What We Cover" ? (
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {section.content.map((item) => (
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
          ) : (
            <div className="mt-6 max-w-3xl space-y-4 text-body">
              {section.content.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          )}
        </Section>
      ))}

      <Section alt>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-8">
          <FAQList items={service.faqs} />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
