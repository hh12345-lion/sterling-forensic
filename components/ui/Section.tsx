import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  alt?: boolean;
  className?: string;
  id?: string;
};

export function Section({
  children,
  alt = false,
  className = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-12 md:py-16 lg:py-20 ${alt ? "bg-section-alt" : "bg-surface"} ${className}`}
    >
      <div className="site-container">{children}</div>
    </section>
  );
}
