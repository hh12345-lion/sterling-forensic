import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { coreExpertiseAreas, ukPracticeContent } from "@/lib/content/site-content";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "About Sterling Forensic | UK Boutique Forensic Accounting",
  description:
    "Sterling Forensic is a specialist UK forensic accounting practice in England and Wales. Expert witness, disputes, valuations, shareholder disputes, and loss and damages quantification.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <JsonLd data={organizationSchema()} />

      <PageHero
        title="About Sterling Forensic"
        subtitle="An independent United Kingdom forensic accounting practice serving solicitors, businesses, and insurers across England and Wales."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      <Section>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          The Practice
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-body">
          <p>
            Sterling Forensic is an independent forensic accounting practice
            providing specialist expert witness and financial investigation
            services to solicitors, barristers, businesses, and insurers across
            England and Wales.
          </p>
          <p>
            We were established on the principle that forensic accounting
            instructions deserve direct senior involvement, from the initial
            assessment of whether expert evidence is warranted to the delivery of
            the report and any oral testimony that follows.
          </p>
        </div>
      </Section>

      <Section alt>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          Our Scope
        </h2>
        <p className="mt-6 max-w-3xl text-body">
          Our practice is deliberately broad. We accept instructions across
          expert witness reporting, commercial disputes, shareholder disputes
          under s994 Companies Act 2006, business and share valuations, loss
          and damages quantification, fraud and financial crime, family financial
          proceedings, personal injury, construction quantum, insolvency, and
          regulatory proceedings. This breadth gives us perspective that
          specialist-only practitioners sometimes lack. We understand how
          financial issues in one type of proceeding connect to methodology used
          in another.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreExpertiseAreas.map((area) => (
            <Link
              key={area.title}
              href={area.href}
              className="group rounded-md border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-lg"
            >
              <h3 className="font-heading text-lg text-primary group-hover:text-highlight">
                {area.title}
              </h3>
              <p className="mt-3 text-sm text-body">{area.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          {ukPracticeContent.heading}
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-body">
          {ukPracticeContent.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section alt>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          Independence
        </h2>
        <p className="mt-6 max-w-3xl text-body">
          Every Sterling Forensic report reflects our honest, independent view of
          the financial issues. We work under CPR Part 35, FPR Part 25, or CrPR
          Part 33 as appropriate, and the primary duty to the court shapes
          everything we write, regardless of which party has instructed us.
        </p>
      </Section>

      <Section>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          Qualifications Summary
        </h2>
        <p className="mt-6 max-w-3xl text-body">
          Our practitioners hold ACA/FCA (ICAEW), Certified Fraud Examiner
          (CFE), ICAEW Forensic Accreditation, and membership of the Academy of
          Experts and Expert Witness Institute.
        </p>
        <Link
          href="/qualifications-accreditations"
          className="mt-4 inline-flex min-h-11 items-center text-highlight transition-colors hover:text-[#6a2635]"
        >
          View full qualifications &rarr;
        </Link>
      </Section>

      <CTASection />
    </>
  );
}
