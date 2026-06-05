import {
  caseStudyNavItems,
  practiceAreaNavItems,
  sectorNavItems,
  serviceNavItems,
} from "@/lib/content/nav-links";

export {
  caseStudyNavItems,
  practiceAreaNavItems,
  sectorNavItems,
  serviceNavItems,
};

export const mainNavItems = [
  { label: "Home", href: "/", type: "link" as const },
  { label: "About", href: "/about", type: "link" as const },
  {
    label: "Services",
    href: "/services",
    type: "dropdown" as const,
    items: serviceNavItems,
  },
  {
    label: "Practice Areas",
    href: "/practice-areas",
    type: "dropdown" as const,
    items: practiceAreaNavItems,
  },
  {
    label: "Sectors",
    href: "/sectors",
    type: "dropdown" as const,
    items: sectorNavItems,
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    type: "dropdown" as const,
    items: caseStudyNavItems,
  },
  { label: "Insights", href: "/insights", type: "link" as const },
];

export const mobileNavGroups = [
  {
    label: "About",
    items: [
      { label: "About", href: "/about" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "Qualifications", href: "/qualifications-accreditations" },
    ],
  },
  {
    label: "Services",
    items: [{ label: "All Services", href: "/services" }, ...serviceNavItems],
  },
  {
    label: "Practice Areas",
    items: [
      { label: "All Practice Areas", href: "/practice-areas" },
      ...practiceAreaNavItems,
    ],
  },
  {
    label: "Sectors",
    items: [{ label: "All Sectors", href: "/sectors" }, ...sectorNavItems],
  },
  {
    label: "Case Studies",
    items: [
      { label: "All Case Studies", href: "/case-studies" },
      ...caseStudyNavItems,
    ],
  },
  {
    label: "Resources",
    items: [{ label: "Insights", href: "/insights" }],
  },
] as const;

export const footerNav = {
  services: [
    { label: "All Services", href: "/services" },
    ...serviceNavItems.slice(0, 4),
  ],
  expertise: [
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "Sectors", href: "/sectors" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Qualifications", href: "/qualifications-accreditations" },
  ],
  firm: [
    { label: "About", href: "/about" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Cookie Policy", href: "/privacy#cookies" },
  ],
} as const;
