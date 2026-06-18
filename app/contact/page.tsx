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

const trustPoints = [
  "CPR Part 35 | FPR Part 25 | CrPR Part 33",
  "Construction quantum expertise",
  "SJE appointments available",
  "Legal Aid accepted where appropriate",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <PageHero
        title="Contact Sterling Forensic"
        subtitle="Discuss your forensic accounting instruction with us. We respond within one business day. Instructions accepted for matters in England and Wales only."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <aside className="space-y-8">
            <div className="rounded-md border border-border bg-white p-6 shadow-card">
              <h2 className="font-heading text-lg text-primary">Contact Details</h2>
              <dl className="mt-4 space-y-4 text-sm text-body">
                <div>
                  <dt className="font-medium text-primary">Email</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${SITE_EMAIL}`}
                      className="text-highlight transition-colors hover:text-[#6a2635]"
                    >
                      {SITE_EMAIL}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-primary">Response Time</dt>
                  <dd className="mt-1">Within one business day</dd>
                </div>
                <div>
                  <dt className="font-medium text-primary">Coverage</dt>
                  <dd className="mt-1">
                    England and Wales (United Kingdom). We do not accept
                    instructions for proceedings outside the UK.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-primary">Practice Focus</dt>
                  <dd className="mt-1">
                    Expert witness, disputes, valuations, shareholder disputes,
                    and loss and damages quantification
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-md border border-border bg-primary p-6 text-white">
              <h2 className="font-heading text-lg text-accent">Why Instruct Us</h2>
              <ul className="mt-4 space-y-3">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 text-accent" aria-hidden="true">
                      &#10003;
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
