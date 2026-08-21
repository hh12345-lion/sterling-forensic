import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { SITE_EMAIL, SITE_NAME } from "@/lib/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy | Sterling Forensic",
  description:
    "Sterling Forensic privacy policy. How we collect, use, and protect your personal data in accordance with UK GDPR.",
  path: "/privacy",
  noindex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <Section>
        <div className="prose-custom max-w-3xl space-y-8 text-body">
          <p className="text-sm text-body/70">
            Last updated: June 2025
          </p>

          <section>
            <h2 className="font-heading text-xl text-primary">
              1. Introduction
            </h2>
            <p className="mt-4">
              {SITE_NAME} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
              is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, store, and protect your personal data
              when you visit our website at sterlingforensic.co.uk or contact us.
            </p>
            <p className="mt-4">
              We are the data controller for the personal data we process. For
              data protection enquiries, contact us at{" "}
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="text-highlight hover:text-highlight-hover"
              >
                {SITE_EMAIL}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-primary">
              2. Data We Collect
            </h2>
            <p className="mt-4">We may collect the following personal data:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                Contact information: name, email address, telephone number,
                organisation
              </li>
              <li>
                Enquiry details: nature of instruction, message content
              </li>
              <li>
                Technical data: IP address, browser type, device information,
                pages visited
              </li>
              <li>
                Cookie data: as described in our Cookie Policy below
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl text-primary">
              3. How We Use Your Data
            </h2>
            <p className="mt-4">We use your personal data to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Respond to your enquiries and provide our services</li>
              <li>Improve our website and user experience</li>
              <li>Comply with legal obligations</li>
              <li>
                Analyse website usage (with your consent for analytics cookies)
              </li>
            </ul>
            <p className="mt-4">
              Our lawful bases for processing include consent, legitimate
              interests, and contractual necessity.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-primary">
              4. Data Sharing
            </h2>
            <p className="mt-4">
              We do not sell your personal data. We may share data with trusted
              service providers who assist us in operating our website (such as
              form processing and analytics providers), subject to appropriate
              data processing agreements.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-primary">
              5. Data Retention
            </h2>
            <p className="mt-4">
              We retain enquiry data for as long as necessary to respond to your
              enquiry and for a reasonable period thereafter for business records.
              Analytics data is retained in accordance with the relevant
              provider&apos;s retention policies.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-primary">
              6. Your Rights
            </h2>
            <p className="mt-4">
              Under UK GDPR, you have the right to access, rectify, erase,
              restrict processing, data portability, and to object to processing.
              You also have the right to withdraw consent at any time where
              processing is based on consent.
            </p>
            <p className="mt-4">
              To exercise your rights, contact us at {SITE_EMAIL}. You also have
              the right to lodge a complaint with the Information
              Commissioner&apos;s Office (ICO) at ico.org.uk.
            </p>
          </section>

          <section id="cookies">
            <h2 className="font-heading text-xl text-primary">
              7. Cookie Policy
            </h2>
            <p className="mt-4">
              Our website uses cookies to ensure proper functionality and, with
              your consent, to analyse usage and improve our services.
            </p>

            <h3 className="mt-6 font-heading text-lg text-primary">
              Cookie Categories
            </h3>
            <div className="mt-4 space-y-4">
              <div className="rounded-md border border-border p-4">
                <p className="font-medium text-primary">Necessary Cookies</p>
                <p className="mt-2 text-sm">
                  Essential for the website to function. These cannot be disabled.
                  Includes cookie consent preferences stored in localStorage.
                </p>
              </div>
              <div className="rounded-md border border-border p-4">
                <p className="font-medium text-primary">Analytics Cookies</p>
                <p className="mt-2 text-sm">
                  Help us understand how visitors use the website. Includes
                  Google Analytics and Hotjar. Only loaded with your consent.
                </p>
              </div>
              <div className="rounded-md border border-border p-4">
                <p className="font-medium text-primary">Marketing Cookies</p>
                <p className="mt-2 text-sm">
                  Used for advertising and remarketing. Includes Meta Pixel and
                  LinkedIn Insight Tag. Only loaded with your consent.
                </p>
              </div>
              <div className="rounded-md border border-border p-4">
                <p className="font-medium text-primary">Preferences Cookies</p>
                <p className="mt-2 text-sm">
                  Remember your settings and personalise your experience. Only
                  loaded with your consent.
                </p>
              </div>
            </div>

            <h3 className="mt-6 font-heading text-lg text-primary">
              Managing Cookies
            </h3>
            <p className="mt-4">
              You can manage your cookie preferences at any time using the
              &ldquo;Cookie Settings&rdquo; link in the website footer. You can
              also configure your browser to block cookies, though this may
              affect website functionality.
            </p>

            <h3 className="mt-6 font-heading text-lg text-primary">
              Google Consent Mode
            </h3>
            <p className="mt-4">
              We implement Google Consent Mode v2. Analytics and advertising
              tags are blocked by default until you provide consent. When you
              update your preferences, consent signals are updated immediately
              without requiring a page reload.
            </p>

            <h3 className="mt-6 font-heading text-lg text-primary">
              Cookie Retention
            </h3>
            <p className="mt-4">
              Your cookie consent preferences are stored in localStorage for 365
              days. After this period, you will be asked to provide consent
              again.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-primary">
              8. Security
            </h2>
            <p className="mt-4">
              We implement appropriate technical and organisational measures to
              protect your personal data against unauthorised access, alteration,
              disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-primary">
              9. Changes to This Policy
            </h2>
            <p className="mt-4">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated revision date.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
