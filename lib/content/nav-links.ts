/**
 * Lightweight nav link data for client components (Header/Footer).
 * Keep this file free of heavy content imports to avoid bloating the client bundle.
 */

export type NavLink = { label: string; href: string };

export const serviceNavItems: NavLink[] = [
  { label: "Expert Witness Reports", href: "/services/expert-witness" },
  { label: "Fraud Investigation", href: "/services/fraud-investigation" },
  { label: "Asset Tracing", href: "/services/asset-tracing" },
  { label: "Business Valuation", href: "/services/business-valuation" },
  { label: "Construction Quantum", href: "/services/construction-quantum" },
  { label: "Loss & Damages", href: "/services/loss-quantification" },
];

export const practiceAreaNavItems: NavLink[] = [
  { label: "Commercial Disputes", href: "/practice-areas/commercial-disputes" },
  { label: "Fraud & Financial Crime", href: "/practice-areas/fraud-financial-crime" },
  { label: "Family Proceedings", href: "/practice-areas/family-proceedings" },
  {
    label: "Personal Injury & Clinical Negligence",
    href: "/practice-areas/personal-injury-clinical-negligence",
  },
  { label: "Construction Quantum", href: "/practice-areas/construction-quantum" },
  { label: "Insolvency & Administration", href: "/practice-areas/insolvency-administration" },
  { label: "Regulatory Proceedings", href: "/practice-areas/regulatory-proceedings" },
];

export const sectorNavItems: NavLink[] = [
  { label: "Construction & Engineering", href: "/sectors/construction-engineering" },
  { label: "Technology & Digital Businesses", href: "/sectors/technology-digital-businesses" },
  { label: "Financial Services", href: "/sectors/financial-services" },
  { label: "Professional Practices", href: "/sectors/professional-practices" },
  { label: "Retail & Hospitality", href: "/sectors/retail-hospitality" },
];

export const caseStudyNavItems: NavLink[] = [
  {
    label: "Construction Contract Dispute: Overhead Recovery and Loss of Profit",
    href: "/case-studies/construction-quantum",
  },
  {
    label: "Corporate Fraud: Procurement Irregularities in a Multi-Site Business",
    href: "/case-studies/fraud-investigation",
  },
  {
    label: "Financial Remedy: Valuation and Income Analysis in a Multi-Entity Business",
    href: "/case-studies/family-proceedings",
  },
  {
    label: "Wrongful Trading: Financial Position Analysis at Key Dates",
    href: "/case-studies/insolvency",
  },
];
