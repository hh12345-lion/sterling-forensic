import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { SITE_EMAIL } from "@/lib/site-config";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Contact Sterling Forensic | UK Forensic Accounting",
  description:
    "Contact Sterling Forensic to discuss a forensic accounting instruction in England and Wales. Expert witness, disputes, valuations, and loss and damages quantification.",
  path: "/contact",
});

export default function ContactPage() {  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <PageHero
        title="Contact Sterling Forensic"
        subtitle="Send a brief enquiry. We aim to respond within one working day. England and Wales only."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,18rem)]">
          <div>
            <ContactForm />
          </div>
          <aside>
            <div className="border border-border bg-white p-5 shadow-panel">
              <h2 className="font-heading text-lg text-primary">Direct contact</h2>
              <p className="mt-3 text-sm text-body">
                Prefer email? Write to us directly.
              </p>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="mt-3 block break-all text-sm font-semibold text-highlight transition-colors hover:text-highlight-hover"
              >
                {SITE_EMAIL}
              </a>
              <p className="mt-4 text-xs text-body/70">
                England and Wales · United Kingdom practice only
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
