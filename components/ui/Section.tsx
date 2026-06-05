import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  alt?: boolean;
  className?: string;
  id?: string;
};

export function Section({ children, alt = false, className = "", id }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-12 md:py-16 lg:py-20 ${alt ? "bg-section-alt" : "bg-white"} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
