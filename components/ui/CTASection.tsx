import { Button } from "./Button";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Instruct Sterling Forensic",
  description = "Get in touch to discuss your forensic accounting instruction. We aim to respond within one working day.",
}: CTASectionProps) {
  return (
    <section className="border-y border-border bg-primary">
      <div className="site-container py-14 md:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12">
          <div className="section-panel border-accent">
            <h2 className="font-heading text-2xl text-white md:text-3xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-white/85">{description}</p>
          </div>
          <div className="shrink-0">
            <Button href="/contact" variant="secondary">
              Enquire
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
