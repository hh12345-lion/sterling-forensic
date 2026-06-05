import Link from "next/link";

export type BreadcrumbItem = { label: string; href?: string };

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  light?: boolean;
};

export function Breadcrumbs({ items, light = false }: BreadcrumbsProps) {
  const textColor = light ? "text-white/60" : "text-body/70";
  const activeColor = light ? "text-white/80" : "text-body";
  const linkHover = light ? "hover:text-white" : "hover:text-primary";

  return (
    <nav aria-label="Breadcrumb">
      <ol className={`flex flex-wrap items-center gap-1 text-sm ${textColor}`}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1">
              {index > 0 && <span aria-hidden="true">/</span>}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={`transition-colors ${linkHover}`}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? activeColor : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
