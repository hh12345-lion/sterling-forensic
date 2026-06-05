import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./site-config";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  nofollow?: boolean;
};

export function createMetadata({
  title,
  description,
  path,
  noindex = false,
  nofollow = false,
}: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
      },
    },
  };
}
