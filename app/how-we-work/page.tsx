import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import {
  howWeWorkPrinciples,
  howWeWorkSteps,
} from "@/lib/content/site-content";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "How We Work | The Sterling Forensic Approach",
  description:
    "How Sterling Forensic approaches engagements: senior-led, independent, and court-ready from instruction to testimony.",
  path: "/how-we-work",
});

export default function HowWeWorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "How We Work", path: "/how-we-work" },
        ])}
      />

      <PageHero
        title="How We Work"
        subtitle="The Sterling Forensic approach: senior-led, independent, and court-ready from instruction to testimony."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "How We Work" },
        ]}
      />

      <Section>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          Our Principles
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {howWeWorkPrinciples.map((principle) => (
            <div
              key={principle.title}
              className="rounded-md border border-border bg-white p-6 shadow-card"
            >
              <div className="mb-3 h-1 w-12 rounded-full bg-accent" />
              <h3 className="font-heading text-lg text-primary">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm text-body">{principle.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section alt>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          Our Process
        </h2>
        <ol className="mt-8 space-y-6">
          {howWeWorkSteps.map((step) => (
            <li
              key={step.step}
              className="flex gap-4 rounded-md border border-border bg-white p-6 shadow-card"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg text-white">
                {step.step}
              </span>
              <div>
                <h3 className="font-heading text-lg text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-body">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <h2 className="font-heading text-2xl text-primary md:text-3xl">
          Construction Instructions: A Note on Timeline
        </h2>
        <p className="mt-6 max-w-3xl text-body">
          Construction disputes frequently involve complex document sets:
          programmes, site records, cost reports, and variations. Sterling
          Forensic confirms realistic timelines for construction quantum
          instructions at the outset, taking into account the volume and
          complexity of financial records to be reviewed.
        </p>
      </Section>

      <CTASection />
    </>
  );
}
