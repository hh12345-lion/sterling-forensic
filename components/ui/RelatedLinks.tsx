import Link from "next/link";

type RelatedLink = { label: string; href: string };

type RelatedLinksProps = {
  links: RelatedLink[];
  title?: string;
};

export function RelatedLinks({
  links,
  title = "Related pages",
}: RelatedLinksProps) {
  if (links.length === 0) return null;

  return (
    <div className="rounded-md border border-border bg-white p-6 shadow-card">
      <h2 className="font-heading text-lg text-primary">{title}</h2>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex min-h-11 items-center text-sm text-highlight transition-colors hover:text-[#6a2635]"
            >
              {link.label} &rarr;
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
