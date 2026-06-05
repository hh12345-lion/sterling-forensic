export type PracticeArea = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  sections: { heading: string; content: string[] }[];
  faqs: { question: string; answer: string }[];
  relatedPracticeAreas: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "commercial-disputes",
    title: "Commercial Disputes",
    metaTitle: "Commercial Disputes | Sterling Forensic UK",
    metaDescription:
      "Forensic accounting support for commercial litigation: breach of contract, shareholder disputes, warranty claims, and loss quantification.",
    shortDescription:
      "Loss quantification, business valuation, and financial analysis for commercial litigation and arbitration.",
    sections: [
      {
        heading: "Commercial Litigation Forensic Accounting",
        content: [
          "Sterling Forensic provides expert witness and advisory forensic accounting services in commercial disputes across England and Wales. Our work covers breach of contract claims, shareholder disputes under s994 Companies Act, warranty and indemnity claims following M&A transactions, and general contractual loss quantification.",
          "Every instruction is led by a senior forensic accountant with direct experience of commercial court proceedings. Our reports are written for judges and arbitrators, with clear methodology and transparent assumptions that withstand scrutiny under cross-examination.",
        ],
      },
      {
        heading: "What We Cover",
        content: [],
      },
    ],
    faqs: [
      {
        question:
          "When should a solicitor instruct a forensic accountant in a commercial dispute?",
        answer:
          "A forensic accountant should be considered whenever the dispute involves quantification of financial loss, business valuation, or analysis of financial records that requires specialist accounting expertise. Early instruction allows preliminary assessment of whether expert evidence is warranted and can identify the financial issues that will determine the outcome.",
      },
      {
        question: "What is the difference between a forensic accountant and an auditor?",
        answer:
          "An auditor provides an opinion on whether financial statements present a true and fair view. A forensic accountant applies accounting expertise to specific disputed financial issues, quantifies loss, values businesses, and provides expert witness evidence designed for court proceedings under CPR Part 35.",
      },
    ],
    relatedPracticeAreas: [
      "fraud-financial-crime",
      "insolvency-administration",
      "regulatory-proceedings",
    ],
  },
  {
    slug: "fraud-financial-crime",
    title: "Fraud & Financial Crime",
    metaTitle: "Fraud & Financial Crime | Sterling Forensic UK",
    metaDescription:
      "Independent fraud investigation, asset tracing, and forensic accounting for solicitors and businesses under legal professional privilege.",
    shortDescription:
      "Fraud investigation, asset tracing, and loss quantification for civil recovery and criminal proceedings.",
    sections: [
      {
        heading: "Fraud Investigation Services",
        content: [
          "Sterling Forensic conducts independent financial investigations for solicitors and businesses who suspect fraud, embezzlement, or financial irregularities. Our investigations are typically instructed under legal professional privilege via solicitors, ensuring that findings are protected from premature disclosure.",
          "We analyse financial records, trace fund flows, identify patterns of irregular transactions, and quantify the total loss. Our reports provide the evidential foundation for civil recovery proceedings, freezing injunction applications, and criminal referrals where appropriate.",
        ],
      },
      {
        heading: "What We Cover",
        content: [],
      },
    ],
    faqs: [
      {
        question: "Why instruct a forensic accountant via solicitors?",
        answer:
          "Instructing via solicitors ensures that the investigation and resulting report are protected by legal professional privilege. This prevents premature disclosure to the opposing party and allows the instructing party to assess the strength of their case before deciding how to proceed.",
      },
      {
        question: "Can Sterling Forensic assist with asset tracing?",
        answer:
          "Yes. Asset tracing is a core part of our fraud investigation work. We follow fund flows through bank accounts, corporate structures, and connected entities to identify where misappropriated funds have been diverted and what assets may be available for recovery.",
      },
    ],
    relatedPracticeAreas: [
      "commercial-disputes",
      "insolvency-administration",
      "regulatory-proceedings",
    ],
  },
  {
    slug: "family-proceedings",
    title: "Family Proceedings",
    metaTitle: "Family Proceedings | Sterling Forensic UK",
    metaDescription:
      "Forensic accounting for financial remedy proceedings: business valuation, income analysis, and asset tracing under FPR Part 25.",
    shortDescription:
      "Business valuation, income analysis, and asset tracing for financial remedy and ancillary relief proceedings.",
    sections: [
      {
        heading: "Financial Remedy Forensic Accounting",
        content: [
          "Sterling Forensic provides expert witness services in financial remedy proceedings under FPR Part 25. Our work includes business and share valuations, assessment of income available for maintenance, analysis of complex corporate structures, and identification of undisclosed assets.",
          "We are experienced in both party-appointed and Single Joint Expert (SJE) appointments. Our valuations reflect maintainable earnings methodology adjusted for personal goodwill, with clear reasoning on discount rates, multiples, and add-backs.",
        ],
      },
      {
        heading: "What We Cover",
        content: [],
      },
    ],
    faqs: [
      {
        question: "What is the role of a forensic accountant in financial remedy proceedings?",
        answer:
          "The forensic accountant values business interests, assesses income available for maintenance, identifies add-backs to reported earnings, and analyses complex corporate structures. In SJE appointments, the expert provides an independent valuation that both parties and the court can rely upon at FDR and final hearing.",
      },
      {
        question: "How does Sterling Forensic handle personal vs transferable goodwill?",
        answer:
          "Personal goodwill attaches to the individual practitioner and is typically excluded from matrimonial assets. Transferable goodwill reflects the value of the business independent of the individual. We assess the split based on client concentration, contractual arrangements, regulatory constraints, and sector-specific benchmarks.",
      },
    ],
    relatedPracticeAreas: [
      "commercial-disputes",
      "personal-injury-clinical-negligence",
    ],
  },
  {
    slug: "personal-injury-clinical-negligence",
    title: "Personal Injury & Clinical Negligence",
    metaTitle: "Personal Injury & Clinical Negligence | Sterling Forensic UK",
    metaDescription:
      "Loss of earnings and pension loss quantification for personal injury and clinical negligence claims.",
    shortDescription:
      "Loss of earnings, pension loss, and care cost quantification for PI and clinical negligence claims.",
    sections: [
      {
        heading: "Personal Injury Loss Quantification",
        content: [
          "Sterling Forensic quantifies financial losses in personal injury and clinical negligence claims, including past and future loss of earnings, pension loss, and loss of earning capacity. We work with both claimant and defendant solicitors and accept Legal Aid instructions where appropriate.",
          "Our reports apply Ogden multiplier methodology, assess pre-injury earning capacity using tax records and employment history, and address the impact of pre-existing conditions on the but-for earnings baseline.",
        ],
      },
      {
        heading: "What We Cover",
        content: [],
      },
    ],
    faqs: [
      {
        question: "What earnings evidence does Sterling Forensic require?",
        answer:
          "We typically require tax returns, P60s, employment contracts, and bank statements covering the pre-injury period. For self-employed claimants, we require business accounts and management information. The more complete the earnings history, the more robust the loss quantification.",
      },
      {
        question: "Does Sterling Forensic accept Legal Aid instructions?",
        answer:
          "Yes. We accept Legal Aid funded instructions in personal injury and clinical negligence matters where a forensic accountant is required. Our hourly rates are available on request and are consistent with LAA guidance.",
      },
    ],
    relatedPracticeAreas: ["family-proceedings", "commercial-disputes"],
  },
  {
    slug: "construction-quantum",
    title: "Construction Quantum",
    metaTitle: "Construction Quantum | Sterling Forensic UK",
    metaDescription:
      "Forensic accounting expert evidence for construction disputes: overhead recovery, loss of profit, TCC and adjudication proceedings.",
    shortDescription:
      "Financial accounting expert evidence for construction disputes, TCC proceedings, and adjudication.",
    sections: [
      {
        heading: "Construction Dispute Forensic Accounting",
        content: [
          "Sterling Forensic provides forensic accounting support in construction disputes: loss and expense analysis, overhead recovery, profit on contract, delay cost assessment, and financial accounting aspects of quantum claims. We work alongside delay and quantum surveyors where required, providing the financial accounting perspective on the numbers.",
        ],
      },
      {
        heading: "TCC and Adjudication",
        content: [
          "Our construction quantum expert evidence is designed for the Technology and Construction Court (TCC), adjudication, and international construction arbitration, applying CPR Part 35 standards to financial accounting aspects of the claim.",
        ],
      },
      {
        heading: "What We Cover",
        content: [],
      },
    ],
    faqs: [
      {
        question:
          "What is the forensic accountant's role in a construction dispute?",
        answer:
          "In construction disputes, the forensic accountant addresses the financial accounting aspects of the claim: head office overhead recovery methodology, loss of profit calculations, the treatment of costs in the financial accounts, and whether costs claimed are supported by financial records. We work alongside quantity surveyors who address the contractual and physical aspects of the claim.",
      },
      {
        question: "What is the Emden formula and why is it disputed?",
        answer:
          "The Emden formula calculates head office overhead recovery by dividing total company overhead by total company turnover and multiplying by the contract sum and delay period. It is frequently disputed because it uses actual company data rather than the contract rate, which can produce significantly different results. Forensic accountants assess which formula is appropriate and whether the underlying financial data supports it.",
      },
    ],
    relatedPracticeAreas: [
      "commercial-disputes",
      "insolvency-administration",
    ],
  },
  {
    slug: "insolvency-administration",
    title: "Insolvency & Administration",
    metaTitle: "Insolvency & Administration | Sterling Forensic UK",
    metaDescription:
      "Forensic accounting for insolvency proceedings: wrongful trading, preference claims, director disqualification, and solvency analysis.",
    shortDescription:
      "Wrongful trading analysis, preference claims, and solvency assessments for insolvency proceedings.",
    sections: [
      {
        heading: "Insolvency Forensic Accounting",
        content: [
          "Sterling Forensic provides forensic accounting services in insolvency and administration proceedings. Our work includes wrongful trading analysis under s214 Insolvency Act 1986, preference and transaction at undervalue claims, director disqualification proceedings, and solvency analysis at key dates.",
          "We reconstruct the financial position of insolvent companies at monthly intervals using management accounts, bank statements, and creditor records, applying both balance sheet and cash flow solvency tests.",
        ],
      },
      {
        heading: "What We Cover",
        content: [],
      },
    ],
    faqs: [
      {
        question: "What is wrongful trading and when is a forensic accountant needed?",
        answer:
          "Wrongful trading occurs when directors continue to trade when they knew or ought to have concluded that insolvent liquidation was inevitable. A forensic accountant reconstructs the company's financial position at successive dates to identify the earliest point at which insolvency was inevitable, which determines the quantum of the claim.",
      },
      {
        question: "Can Sterling Forensic assist with construction company insolvency?",
        answer:
          "Yes. Construction company insolvency frequently involves complex work-in-progress valuations, retention balances, and subcontractor claims. We combine insolvency expertise with construction quantum knowledge to address the financial accounting dimensions of construction insolvency in TCC and insolvency court proceedings.",
      },
    ],
    relatedPracticeAreas: [
      "construction-quantum",
      "fraud-financial-crime",
      "commercial-disputes",
    ],
  },
  {
    slug: "regulatory-proceedings",
    title: "Regulatory Proceedings",
    metaTitle: "Regulatory Proceedings | Sterling Forensic UK",
    metaDescription:
      "Forensic accounting for regulatory enforcement: FCA, SRA, and professional body proceedings with financial quantum analysis.",
    shortDescription:
      "Financial quantum analysis for FCA, SRA, and professional regulatory enforcement proceedings.",
    sections: [
      {
        heading: "Regulatory Forensic Accounting",
        content: [
          "Sterling Forensic provides forensic accounting support in regulatory enforcement proceedings. Our work covers FCA enforcement actions involving mis-selling loss quantification, SRA proceedings involving client account irregularities, and professional body disciplinary matters with financial dimensions.",
          "We apply regulatory redress methodologies where appropriate, assess the financial impact of regulatory breaches, and provide expert evidence on the accounting aspects of enforcement actions.",
        ],
      },
      {
        heading: "What We Cover",
        content: [],
      },
    ],
    faqs: [
      {
        question: "What regulatory proceedings does Sterling Forensic handle?",
        answer:
          "We handle FCA enforcement actions involving investment management mandate breach and mis-selling loss quantification, SRA proceedings involving client money irregularities, and professional body disciplinary matters where financial analysis is required. We also assist with regulatory quantum in financial services disputes.",
      },
      {
        question: "How is mis-selling loss calculated in regulatory proceedings?",
        answer:
          "Mis-selling loss is typically calculated as the difference between the actual investment outcome and the outcome that would have resulted from an appropriate alternative investment, applying FCA redress methodology adjusted for the individual claimant's circumstances.",
      },
    ],
    relatedPracticeAreas: [
      "commercial-disputes",
      "fraud-financial-crime",
    ],
  },
];

export const practiceAreaBullets: Record<string, string[]> = {
  "commercial-disputes": [
    "Breach of contract loss quantification",
    "Shareholder dispute valuations (s994)",
    "M&A warranty and indemnity claims",
    "Loss of profits analysis",
    "Consequential loss assessment",
    "Joint expert and SJE appointments",
  ],
  "fraud-financial-crime": [
    "Procurement and expense fraud investigation",
    "Asset tracing and fund flow analysis",
    "Employee dishonesty quantification",
    "Civil recovery report preparation",
    "Freezing injunction evidential support",
    "LPP-protected investigations",
  ],
  "family-proceedings": [
    "Business and share valuations",
    "Income available for maintenance",
    "Complex corporate structure analysis",
    "Personal vs transferable goodwill",
    "SJE appointments under FPR Part 25",
    "Asset tracing and disclosure review",
  ],
  "personal-injury-clinical-negligence": [
    "Past and future loss of earnings",
    "Pension loss quantification",
    "Self-employed earnings analysis",
    "Loss of earning capacity",
    "Ogden multiplier calculations",
    "Legal Aid instructions accepted",
  ],
  "construction-quantum": [
    "Head office overhead recovery (Emden and Hudson formula analysis)",
    "Loss of profit on contract",
    "Prolongation cost analysis (financial accounting review)",
    "Disruption cost assessment",
    "Retention release disputes",
    "Construction company insolvency (solvency analysis in TCC context)",
  ],
  "insolvency-administration": [
    "Wrongful trading analysis (s214 IA 1986)",
    "Preference and transaction at undervalue claims",
    "Director disqualification proceedings",
    "Solvency analysis at key dates",
    "Work-in-progress and retention valuations",
    "Construction insolvency in TCC context",
  ],
  "regulatory-proceedings": [
    "FCA mis-selling loss quantification",
    "Investment management mandate breach",
    "SRA client account irregularities",
    "Professional body disciplinary matters",
    "Regulatory redress methodology",
    "Financial services dispute quantum",
  ],
};

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}
