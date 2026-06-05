import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  buildPublicUrlInventory,
  CANONICAL_HOST,
} from "../lib/seo/publicUrlInventory";

type SitemapEntry = {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
};

function getChangeFreq(path: string): string {
  if (path === "/" || path.startsWith("/insights")) return "weekly";
  if (path === "/qualifications-accreditations") return "yearly";
  return "monthly";
}

function getPriority(path: string): string {
  if (path === "/") return "1.0";
  if (["/about", "/services"].includes(path)) {
    return "0.9";
  }
  if (path.startsWith("/services/")) {
    return "0.9";
  }
  if (["/practice-areas", "/sectors"].includes(path)) {
    return "0.88";
  }
  if (
    [
      "/case-studies",
      "/how-we-work",
      "/qualifications-accreditations",
    ].includes(path)
  ) {
    return "0.87";
  }
  if (path === "/insights") {
    return "0.85";
  }
  if (
    path.startsWith("/practice-areas/") ||
    path.startsWith("/sectors/") ||
    path.startsWith("/case-studies/")
  ) {
    return "0.85";
  }
  if (path.startsWith("/insights/")) return "0.8";
  return "0.5";
}

function renderSitemap(urls: string[]): string {
  const lastmod = new Date().toISOString().slice(0, 10);

  const entries: SitemapEntry[] = urls.map((loc) => {
    const path = loc.replace(CANONICAL_HOST, "") || "/";
    return {
      loc,
      lastmod,
      changefreq: getChangeFreq(path),
      priority: getPriority(path),
    };
  });

  const urlBlocks = entries
    .map(
      (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlBlocks}
</urlset>
`;
}

function renderRobots(): string {
  return `User-agent: *
Allow: /

Disallow: /thank-you
Disallow: /api/
Disallow: /.netlify/

Sitemap: ${CANONICAL_HOST}/sitemap.xml
`;
}

function main() {
  const inventory = buildPublicUrlInventory();
  const publicDir = join(process.cwd(), "public");

  mkdirSync(publicDir, { recursive: true });

  const sitemapXml = renderSitemap(inventory.allUrls);
  const robotsTxt = renderRobots();

  writeFileSync(join(publicDir, "sitemap.xml"), sitemapXml, "utf8");
  writeFileSync(join(publicDir, "robots.txt"), robotsTxt, "utf8");

  console.log(
    `Generated public/sitemap.xml (${inventory.allUrls.length} URLs)`
  );
  console.log("Generated public/robots.txt");
}

main();
