import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SITE_EMAIL } from "@/lib/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Thank You | Sterling Forensic",
  description: "Thank you for contacting Sterling Forensic.",
  path: "/thank-you",
  noindex: true,
  nofollow: true,
});

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        title="Thank You"
        subtitle="Your enquiry has been received. We will respond within one business day."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Thank You" },
        ]}
      />

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-section-alt">
            <span className="text-2xl text-highlight" aria-hidden="true">
              &#10003;
            </span>
          </div>
          <h2 className="font-heading text-2xl text-primary">
            Enquiry Submitted Successfully
          </h2>
          <p className="mt-4 text-body">
            A member of our team will review your enquiry and respond promptly.
            If your matter is urgent, please email us directly at{" "}
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="text-highlight transition-colors hover:text-[#6a2635]"
            >
              {SITE_EMAIL}
            </a>
            .
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/">Return to Homepage</Button>
            <Link
              href="/services"
              className="inline-flex min-h-11 items-center text-sm text-highlight transition-colors hover:text-[#6a2635]"
            >
              View our services
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
