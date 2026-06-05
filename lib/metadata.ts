import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "./site-config";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  nofollow?: boolean;
  openGraphType?: "website" | "article";
};

const defaultOpenGraphImages = [
  {
    url: DEFAULT_OG_IMAGE,
    width: 1200,
    height: 630,
    alt: `${SITE_NAME} | UK Forensic Accounting`,
  },
];

export function createMetadata({
  title,
  description,
  path,
  noindex = false,
  nofollow = false,
  openGraphType = "website",
}: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: { "x-default": url },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_GB",
      type: openGraphType,
      images: defaultOpenGraphImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
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

export function rootLayoutMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: SITE_URL,
      languages: { "x-default": SITE_URL },
    },
    openGraph: {
      siteName: SITE_NAME,
      locale: "en_GB",
      type: "website",
      url: SITE_URL,
      images: defaultOpenGraphImages,
    },
    twitter: {
      card: "summary_large_image",
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
