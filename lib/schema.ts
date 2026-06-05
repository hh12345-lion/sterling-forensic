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
    inLanguage: "en-GB",
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

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    email: SITE_EMAIL,
    logo: `${SITE_URL}/icon`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    sameAs: [LINKEDIN_URL],
  };
}

export function servicePageSchema(service: {
  slug: string;
  title: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}#service`,
    name: service.title,
    description: service.description,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
  };
}

export function caseStudySchema(study: {
  slug: string;
  title: string;
  description: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.description,
    url: `${SITE_URL}/case-studies/${study.slug}`,
    articleSection: study.category,
    inLanguage: "en-GB",
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
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        email: SITE_EMAIL,
        logo: `${SITE_URL}/icon`,
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
      slug: "expert-witness",
      name: "Expert Witness Reports",
      description:
        "CPR Part 35, FPR Part 25, and CrPR Part 33 compliant expert witness reports for UK civil, family, and criminal proceedings.",
    },
    {
      slug: "fraud-investigation",
      name: "Fraud Investigation",
      description:
        "Independent financial investigations for solicitors and businesses, conducted under legal professional privilege.",
    },
    {
      slug: "asset-tracing",
      name: "Asset Tracing",
      description:
        "Forensic tracing of funds and assets through corporate structures and bank accounts.",
    },
    {
      slug: "business-valuation",
      name: "Business Valuation",
      description:
        "Independent business and share valuations for commercial disputes, family proceedings, and shareholder disputes.",
    },
    {
      slug: "construction-quantum",
      name: "Construction Quantum",
      description:
        "Financial accounting expert evidence for construction disputes, TCC proceedings, and adjudication.",
    },
    {
      slug: "loss-quantification",
      name: "Loss Quantification",
      description:
        "Loss of profits and consequential loss quantification for commercial and contractual disputes.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@graph": services.map((service) => ({
      "@type": "Service",
      "@id": `${SITE_URL}/services/${service.slug}#service`,
      name: service.name,
      description: service.description,
      url: `${SITE_URL}/services/${service.slug}`,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
    })),
  };
}
