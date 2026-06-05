import { LINKEDIN_URL, SITE_EMAIL, SITE_NAME, SITE_URL } from "./site-config";

export type BreadcrumbItem = { name: string; path: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqPageSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${SITE_URL}/insights/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function homepageGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description:
          "UK boutique forensic accounting practice providing expert witness reports and financial investigations.",
        inLanguage: "en-GB",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/insights?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        email: SITE_EMAIL,
        address: {
          "@type": "PostalAddress",
          addressCountry: "GB",
        },
        areaServed: {
          "@type": "Country",
          name: "United Kingdom",
        },
        sameAs: [LINKEDIN_URL],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: SITE_NAME,
        url: SITE_URL,
        serviceType: "Forensic Accounting",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: {
          "@type": "Country",
          name: "United Kingdom",
        },
      },
    ],
  };
}

export function servicesGraph() {
  const services = [
    {
      id: "expert-witness",
      name: "Expert Witness Reports",
      description:
        "CPR Part 35, FPR Part 25, and CrPR Part 33 compliant expert witness reports for UK civil, family, and criminal proceedings.",
    },
    {
      id: "fraud-investigation",
      name: "Fraud Investigation",
      description:
        "Independent financial investigations for solicitors and businesses, conducted under legal professional privilege.",
    },
    {
      id: "asset-tracing",
      name: "Asset Tracing",
      description:
        "Forensic tracing of funds and assets through corporate structures and bank accounts.",
    },
    {
      id: "business-valuation",
      name: "Business Valuation",
      description:
        "Independent business and share valuations for commercial disputes, family proceedings, and shareholder disputes.",
    },
    {
      id: "construction-quantum",
      name: "Construction Quantum",
      description:
        "Financial accounting expert evidence for construction disputes, TCC proceedings, and adjudication.",
    },
    {
      id: "loss-quantification",
      name: "Loss Quantification",
      description:
        "Loss of profits and consequential loss quantification for commercial and contractual disputes.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@graph": services.map((service) => ({
      "@type": "Service",
      "@id": `${SITE_URL}/services#${service.id}`,
      name: service.name,
      description: service.description,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
    })),
  };
}
