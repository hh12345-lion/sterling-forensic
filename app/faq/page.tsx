import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { FAQList } from "@/components/ui/FAQList";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { faqItems } from "@/lib/content/site-content";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "FAQ | Sterling Forensic UK",
  description:
    "Frequently asked questions about Sterling Forensic's forensic accounting and expert witness services.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <JsonLd data={faqPageSchema(faqItems)} />

      <PageHero
        title="Frequently Asked Questions"
        subtitle="Common questions about our forensic accounting and expert witness services."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />

      <Section>
        <FAQList items={faqItems} />
      </Section>

      <CTASection />
    </>
  );
}
