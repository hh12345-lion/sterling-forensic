import { readFileSync } from "node:fs";
import { join } from "node:path";
import { buildPublicUrlInventory } from "../lib/seo/publicUrlInventory";

function extractSitemapLocs(xml: string): string[] {
  const matches = xml.matchAll(/<loc>([^<]+)<\/loc>/g);
  return [...matches].map((match) => match[1]).sort();
}

function main() {
  const sitemapPath = join(process.cwd(), "public", "sitemap.xml");
  let sitemapXml: string;

  try {
    sitemapXml = readFileSync(sitemapPath, "utf8");
  } catch {
    console.error("seo:verify failed: public/sitemap.xml not found.");
    console.error("Run npm run seo:generate first.");
    process.exit(1);
  }

  const inventory = buildPublicUrlInventory();
  const expectedUrls = [...inventory.allUrls].sort();
  const actualUrls = extractSitemapLocs(sitemapXml);

  const missing = expectedUrls.filter((url) => !actualUrls.includes(url));
  const extra = actualUrls.filter((url) => !expectedUrls.includes(url));

  if (missing.length > 0 || extra.length > 0) {
    console.error("seo:verify failed: sitemap.xml is out of sync with inventory.");
    if (missing.length > 0) {
      console.error("\nMissing URLs:");
      missing.forEach((url) => console.error(`  - ${url}`));
    }
    if (extra.length > 0) {
      console.error("\nUnexpected URLs:");
      extra.forEach((url) => console.error(`  - ${url}`));
    }
    console.error("\nRun npm run seo:generate to fix.");
    process.exit(1);
  }

  const robotsPath = join(process.cwd(), "public", "robots.txt");
  try {
    readFileSync(robotsPath, "utf8");
  } catch {
    console.error("seo:verify failed: public/robots.txt not found.");
    process.exit(1);
  }

  console.log(
    `seo:verify passed (${actualUrls.length} URLs match inventory).`
  );
}

main();
