import type { ReactNode } from "react";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui/Breadcrumbs";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: ReactNode;
};

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  children,
}: PageHeroProps) {
  return (
    <div className="border-b border-border bg-primary">
      <div className="site-container">
        <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)]">
          <div className="py-14 md:py-20 lg:py-24">
            {breadcrumbs && breadcrumbs.length > 0 && (
              <div className="mb-5">
                <Breadcrumbs items={breadcrumbs} light />
              </div>
            )}
            <h1 className="font-heading text-3xl font-normal text-white md:text-4xl lg:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
                {subtitle}
              </p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>
          <div
            className="hero-pattern hidden min-h-[12rem] border-l border-white/10 lg:block"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
