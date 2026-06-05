export type Sector = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  sections: { heading?: string; content: string[] }[];
  faqs: { question: string; answer: string }[];
  relatedPracticeAreas: string[];
};

export const sectors: Sector[] = [
  {
    slug: "construction-engineering",
    title: "Construction & Engineering",
    metaTitle: "Construction & Engineering | Sterling Forensic",
    metaDescription:
      "Forensic accounting for construction and engineering disputes: TCC, JCT/NEC/FIDIC quantum, adjudication, and construction insolvency.",
    shortDescription:
      "Financial accounting expert evidence for construction disputes, TCC proceedings, and adjudication.",
    sections: [
      {
        content: [
          "Construction and engineering disputes require forensic accountants who understand both financial accounting methodology and the commercial realities of major projects. Sterling Forensic provides expert evidence on the financial accounting dimensions of construction quantum claims, working alongside quantity surveyors and delay analysts where required.",
          "Our construction sector expertise covers JCT, NEC, and FIDIC contract disputes, Technology and Construction Court (TCC) proceedings, adjudication under the Housing Grants, Construction and Regeneration Act 1996, and international construction arbitration.",
          "We also address construction company insolvency, where work-in-progress valuations, retention balances, and subcontractor claims intersect with solvency analysis in both TCC and insolvency court proceedings.",
        ],
      },
    ],
    faqs: [
      {
        question:
          "What financial accounting issues arise most commonly in construction disputes?",
        answer:
          "The most common financial accounting issues in construction disputes include: head office overhead recovery methodology (Emden, Hudson, or actual cost basis); loss of profit on the contract or remaining works; the treatment of disputed costs in the company's financial accounts; and working capital issues where insolvency is threatened. Sterling Forensic addresses the financial accounting dimensions alongside the quantity surveying issues.",
      },
      {
        question: "Can Sterling Forensic assist with adjudication expert evidence?",
        answer:
          "Yes. Adjudication proceedings often require rapid forensic accounting analysis. The 28-day timeline means speed is critical. Sterling Forensic provides financial accounting expert evidence for adjudication, including preliminary assessments within the adjudication timetable.",
      },
    ],
    relatedPracticeAreas: [
      "construction-quantum",
      "commercial-disputes",
      "insolvency-administration",
    ],
  },
  {
    slug: "technology-digital-businesses",
    title: "Technology & Digital Businesses",
    metaTitle: "Technology & Digital Businesses | Sterling Forensic",
    metaDescription:
      "Forensic accounting for technology disputes: SaaS valuation, IP misappropriation, M&A warranty claims, and ARR analysis.",
    shortDescription:
      "SaaS valuation, IP loss quantification, and M&A dispute accounting for technology businesses.",
    sections: [
      {
        content: [
          "Technology and digital businesses present distinct forensic accounting challenges. Recurring revenue models, software capitalisation policies, and rapid growth trajectories require specialist understanding that generic commercial dispute practitioners may lack.",
          "Sterling Forensic applies ARR and churn analysis, DCF and revenue multiple methodologies to technology loss claims. We address SaaS contract disputes, IP misappropriation loss quantification, M&A warranty claims involving ARR misrepresentation, and software contract breach losses.",
        ],
      },
    ],
    faqs: [
      {
        question:
          "How are technology company losses calculated in breach of contract cases?",
        answer:
          "Technology business losses typically require ARR and churn analysis, establishing what recurring revenue would have been maintained absent the breach. Sterling Forensic applies DCF and revenue multiple methodologies to technology loss claims, addressing the specific economic dynamics of recurring revenue businesses.",
      },
      {
        question: "What M&A disputes commonly arise in technology companies?",
        answer:
          "Technology M&A disputes most commonly involve ARR misrepresentation (actual recurring revenue differed from warranted), churn rate disputes, software capitalisation policy disagreements, and revenue recognition issues on the completion accounts.",
      },
    ],
    relatedPracticeAreas: [
      "commercial-disputes",
      "fraud-financial-crime",
      "regulatory-proceedings",
    ],
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    metaTitle: "Financial Services | Sterling Forensic",
    metaDescription:
      "Forensic accounting for financial services disputes: investment mandate breach, ISDA disputes, mis-selling loss, and regulatory enforcement.",
    shortDescription:
      "Investment mandate breach, ISDA disputes, and mis-selling loss quantification for financial services.",
    sections: [
      {
        content: [
          "Financial services disputes require forensic accountants who understand both accounting methodology and the regulatory framework governing investment management, banking, and insurance. Sterling Forensic provides expert evidence on investment management mandate breach, ISDA close-out amount disputes, and mis-selling loss quantification.",
          "We apply FCA redress methodology where appropriate, assess commercial reasonableness in ISDA close-out calculations, and provide regulatory enforcement accounting support for FCA and PRA proceedings.",
        ],
      },
    ],
    faqs: [
      {
        question: "What financial services disputes does Sterling Forensic handle?",
        answer:
          "We handle financial services disputes including investment management mandate breach (comparing actual vs benchmarked portfolio performance); ISDA close-out amount disputes (assessing commercial reasonableness); and mis-selling loss quantification (applying FCA redress methodology to individual claimant circumstances).",
      },
      {
        question: "How is investment management negligence loss calculated?",
        answer:
          "The loss is the difference between the portfolio's actual performance and the performance it would have achieved had the mandate been followed, using appropriate benchmark indices and model portfolios for the investment strategy.",
      },
    ],
    relatedPracticeAreas: [
      "regulatory-proceedings",
      "commercial-disputes",
      "fraud-financial-crime",
    ],
  },
  {
    slug: "professional-practices",
    title: "Professional Practices",
    metaTitle: "Professional Practices | Sterling Forensic",
    metaDescription:
      "Forensic accounting for professional practice disputes: partnership goodwill, profit share, LLP dissolution, and practice valuations.",
    shortDescription:
      "Partnership goodwill, profit share disputes, and professional practice valuations.",
    sections: [
      {
        content: [
          "Professional practice disputes involve sector-specific valuation methodologies that generic business valuers may not fully understand. Sterling Forensic values dental practices, law firms, accountancy practices, and other professional partnerships using sector-specific multiples adjusted for personal vs transferable goodwill.",
          "Our work covers partnership dissolution, profit share disputes, LLP exit valuations, restrictive covenant value assessment, and matrimonial valuations of professional practice interests.",
        ],
      },
    ],
    faqs: [
      {
        question: "How is goodwill valued in a professional practice dispute?",
        answer:
          "Professional practice goodwill is valued using sector-specific multiples of recurring fee income, adjusted for personal vs transferable goodwill, client concentration, lease terms, and regulatory constraints. Sterling Forensic benchmarks against published sector transaction data.",
      },
      {
        question: "Does Sterling Forensic value dental practices?",
        answer:
          "Yes. Dental practice valuations apply sector-specific multiples to NHS UDA income and private fee income, adjusted for NHS contract transfer risk, patient list, lease, and competition. We benchmark against BDA and Christie & Co transaction data.",
      },
    ],
    relatedPracticeAreas: [
      "family-proceedings",
      "commercial-disputes",
    ],
  },
  {
    slug: "retail-hospitality",
    title: "Retail & Hospitality",
    metaTitle: "Retail & Hospitality | Sterling Forensic",
    metaDescription:
      "Forensic accounting for retail and hospitality disputes: franchise disputes, supply agreement breach, BI claims, and earnings normalisation.",
    shortDescription:
      "Franchise disputes, supply agreement breach losses, and earnings normalisation for retail and hospitality.",
    sections: [
      {
        content: [
          "Retail and hospitality businesses face distinct forensic accounting challenges, from franchise royalty disputes to business interruption claims and supply agreement breach losses. Sterling Forensic applies sector-specific benchmarking and earnings normalisation methodology to retail and hospitality loss claims.",
          "We address COVID-era earnings normalisation, EBITDA adjustments for litigation purposes, franchise termination lost profit calculations, and network comparable benchmarking for territory exclusivity breach claims.",
        ],
      },
    ],
    faqs: [
      {
        question: "How does COVID affect retail and hospitality loss calculations?",
        answer:
          "For disputes involving the pandemic period, Sterling Forensic normalises earnings, adjusting for forced closures, furlough distortions, and the subsequent recovery, to establish a but-for earnings baseline untainted by pandemic effects.",
      },
      {
        question: "What franchise disputes does Sterling Forensic handle?",
        answer:
          "Franchise dispute accounting covers: wrongful termination lost profit calculations; royalty accounting disputes; network comparable benchmarking; and territory exclusivity breach losses.",
      },
    ],
    relatedPracticeAreas: [
      "commercial-disputes",
      "personal-injury-clinical-negligence",
    ],
  },
];

export function getSector(slug: string): Sector | undefined {
  return sectors.find((sector) => sector.slug === slug);
}
