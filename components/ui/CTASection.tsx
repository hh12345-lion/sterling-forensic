import { Button } from "./Button";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Instruct Sterling Forensic",
  description = "Contact us to discuss your forensic accounting instruction. We respond within one business day.",
}: CTASectionProps) {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl text-white md:text-3xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">{description}</p>
        <div className="mt-8">
          <Button href="/contact">Instruct Sterling Forensic</Button>
        </div>
      </div>
    </section>
  );
}
