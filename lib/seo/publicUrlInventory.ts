import { insights } from "@/lib/content/insights";
import { practiceAreas } from "@/lib/content/practice-areas";
import { sectors } from "@/lib/content/sectors";
import { services } from "@/lib/content/services";
import { caseStudies } from "@/lib/content/site-content";
import { SITE_URL } from "@/lib/site-config";

/** Canonical host for sitemap and robots.txt. */
export const CANONICAL_HOST = SITE_URL;

/** Paths excluded from the public sitemap inventory. */
export const EXCLUDED_SITEMAP_PATHS = [
  "/contact",
  "/thank-you",
  "/privacy",
  "/terms",
  "/faq",
  "/fees",
] as const;

/**
 * First-class static marketing routes.
 * Add new static pages here so seo:verify catches drift.
 */
export const APP_STATIC_PATHS = [
  "/",
  "/about",
  "/services",
  "/practice-areas",
  "/sectors",
  "/case-studies",
  "/qualifications-accreditations",
  "/how-we-work",
  "/insights",
] as const;

export type PublicUrlInventory = {
  allPaths: string[];
  allUrls: string[];
};

function pathToAbsoluteUrl(path: string): string {
  if (path === "/") return CANONICAL_HOST;
  return `${CANONICAL_HOST}${path}`;
}

export function buildPublicUrlInventory(): PublicUrlInventory {
  const dynamicPaths = [
    ...services.map((service) => `/services/${service.slug}`),
    ...practiceAreas.map((area) => `/practice-areas/${area.slug}`),
    ...sectors.map((sector) => `/sectors/${sector.slug}`),
    ...caseStudies.map((study) => `/case-studies/${study.id}`),
    ...insights.map((article) => `/insights/${article.slug}`),
  ];

  const combined = [...APP_STATIC_PATHS, ...dynamicPaths].filter(
    (path) => !EXCLUDED_SITEMAP_PATHS.includes(path as (typeof EXCLUDED_SITEMAP_PATHS)[number])
  );

  const allPaths = [...new Set(combined)].sort((a, b) => a.localeCompare(b));
  const allUrls = allPaths.map(pathToAbsoluteUrl);

  return { allPaths, allUrls };
}
