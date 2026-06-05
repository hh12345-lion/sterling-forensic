import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { qualifications } from "@/lib/content/site-content";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Qualifications | Sterling Forensic UK",
  description:
    "Sterling Forensic's professional credentials: ICAEW, CFE, Academy of Experts, and CPR Part 35 expert witness qualifications.",
  path: "/qualifications-accreditations",
});

const courtRules = [
  {
    title: "CPR Part 35",
    content:
      "Our expert witness reports comply with CPR Part 35 and the Practice Direction, including the requirement to set out the substance of all material instructions and the duty to the court.",
  },
  {
    title: "FPR Part 25",
    content:
      "In family proceedings, we comply with FPR Part 25 and the Practice Direction, providing independent expert evidence for financial remedy hearings.",
  },
  {
    title: "CrPR Part 33",
    content:
      "In criminal proceedings, we comply with CrPR Part 33, providing expert evidence on financial matters where required by the court.",
  },
];

export default function QualificationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          {
            name: "Qualifications",
            path: "/qualifications-accreditations",
          },
        ])}
      />

      <PageHero
        title="Qualifications & Accreditations"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Qualifications" },
        ]}
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {qualifications.map((qual) => (
            <div
              key={qual.title}
              className="rounded-md border border-border bg-white p-6 shadow-card"
            >
              <h2 className="font-heading text-lg text-primary">{qual.title}</h2>
              <p className="mt-3 text-sm text-body">{qual.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section alt>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          Construction Quantum Expertise
        </h2>
        <p className="mt-6 max-w-3xl text-body">
          For construction-related instructions, Sterling Forensic draws on
          experience working alongside RICS-qualified quantity surveyors and
          delay analysts, understanding the financial accounting dimension of
          quantum claims in TCC and adjudication proceedings.
        </p>
      </Section>

      <Section>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          Court Rules Compliance
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {courtRules.map((rule) => (
            <div
              key={rule.title}
              className="rounded-md border border-border bg-white p-6 shadow-card"
            >
              <h3 className="font-heading text-lg text-primary">{rule.title}</h3>
              <p className="mt-3 text-sm text-body">{rule.content}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
