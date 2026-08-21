import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { SITE_EMAIL, SITE_NAME } from "@/lib/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Use | Sterling Forensic",
  description:
    "Terms of use for the Sterling Forensic website. Professional services terms for forensic accounting engagements.",
  path: "/terms",
  noindex: true,
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Use"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Use" },
        ]}
      />

      <Section>
        <div className="max-w-3xl space-y-8 text-body">
          <p className="text-sm text-body/70">Last updated: June 2025</p>

          <section>
            <h2 className="font-heading text-xl text-primary">
              1. Website Terms
            </h2>
            <p className="mt-4">
              By accessing and using the {SITE_NAME} website
              (sterlingforensic.co.uk), you agree to these Terms of Use. If you
              do not agree, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-primary">
              2. Not a Law Firm
            </h2>
            <p className="mt-4">
              {SITE_NAME} is a forensic accounting practice. We are not a law
              firm and do not provide legal advice. Nothing on this website
              constitutes legal advice. You should seek independent legal advice
              for your specific circumstances.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-primary">
              3. Professional Services
            </h2>
            <p className="mt-4">
              Forensic accounting services are provided under separate terms of
              engagement agreed in writing before work commences. Website content
              is for general information only and does not form part of any
              engagement terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-primary">
              4. Website Content
            </h2>
            <p className="mt-4">
              We endeavour to keep website content accurate and up to date, but
              we make no warranties about the completeness, accuracy, or
              suitability of the information. Content may be changed without
              notice.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-primary">
              5. Intellectual Property
            </h2>
            <p className="mt-4">
              All content on this website, including text, graphics, and design,
              is the property of {SITE_NAME} and is protected by copyright law.
              You may not reproduce, distribute, or use content without our prior
              written consent.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-primary">
              6. Limitation of Liability
            </h2>
            <p className="mt-4">
              To the fullest extent permitted by law, {SITE_NAME} shall not be
              liable for any loss or damage arising from your use of this
              website or reliance on its content.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-primary">
              7. Governing Law
            </h2>
            <p className="mt-4">
              These Terms of Use are governed by the laws of England and Wales.
              The courts of England and Wales shall have exclusive jurisdiction
              over any disputes arising from these terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-primary">
              8. Contact
            </h2>
            <p className="mt-4">
              For questions about these Terms of Use, contact us at{" "}
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="text-highlight hover:text-highlight-hover"
              >
                {SITE_EMAIL}
              </a>
              .
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
