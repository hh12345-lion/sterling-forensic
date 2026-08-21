export type Service = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  sections: { heading: string; content: string[] }[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "forensic-accounting",
    title: "Forensic Accounting",
    metaTitle: "Forensic Accounting UK | Sterling Forensic",
    metaDescription:
      "Independent forensic accounting for UK disputes and investigations: financial record analysis, fraud investigation, loss quantification, and expert witness support in England and Wales.",
    shortDescription:
      "Independent forensic accounting analysis for UK litigation, disputes, and investigations.",
    sections: [
      {
        heading: "Forensic Accounting Services",
        content: [
          "Sterling Forensic provides independent forensic accounting services for solicitors, businesses, and insurers across England and Wales. Forensic accounting applies accounting, auditing, and investigative skills to disputes and investigations where financial evidence is required — from preliminary case assessment to CPR Part 35 expert witness reports.",
          "Our forensic accounting work spans commercial disputes, shareholder oppression claims, business valuations, loss and damages quantification, fraud investigation, construction quantum, family financial remedy, insolvency, and regulatory proceedings. Every instruction is led by a senior forensic accountant with direct court experience.",
        ],
      },
      {
        heading: "What We Cover",
        content: [
          "Financial record review and analysis",
          "Dispute support and loss quantification",
          "Business and share valuations",
          "Shareholder dispute fair value analysis",
          "Fraud investigation under legal professional privilege",
          "Expert witness report preparation (CPR Part 35, FPR Part 25, CrPR Part 33)",
          "Preliminary assessments and advisory memoranda",
          "Joint expert meetings and oral evidence",
        ],
      },
      {
        heading: "When to Instruct a Forensic Accountant",
        content: [
          "Instruct a forensic accountant when a dispute or investigation involves quantification of financial loss, business valuation, analysis of financial records, or specialist accounting evidence that cannot be addressed by a generalist accountant or auditor.",
          "Early instruction allows assessment of whether expert evidence is warranted, identifies the financial issues that will determine the outcome, and can prevent wasted costs where the numbers do not support the claim.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the difference between forensic accounting and audit?",
        answer:
          "An audit provides an opinion on whether financial statements present a true and fair view. Forensic accounting applies accounting expertise to specific disputed financial issues — quantifying loss, valuing businesses, investigating fraud, and preparing expert witness evidence for court proceedings under CPR Part 35.",
      },
      {
        question: "Does Sterling Forensic provide forensic accounting for shareholder disputes?",
        answer:
          "Yes. Shareholder disputes under s994 Companies Act 2006 are a core part of our practice. We provide fair value valuations, assess minority discount arguments, and accept party-appointed and Single Joint Expert appointments.",
      },
      {
        question: "Can forensic accounting support be provided under legal professional privilege?",
        answer:
          "Yes. Fraud investigations and preliminary dispute assessments are frequently instructed via solicitors to preserve legal professional privilege over the analysis and resulting report.",
      },
    ],
  },
  {
    slug: "expert-witness",
    title: "Expert Witness Reports",
    metaTitle: "Forensic Accountant Expert Witness UK | Sterling Forensic",
    metaDescription:
      "CPR Part 35, FPR Part 25, and CrPR Part 33 expert witness reports for UK civil, family, and criminal proceedings.",
    shortDescription:
      "Court-ready expert witness reports for civil, family, and criminal proceedings.",
    sections: [
      {
        heading: "Expert Witness Services",
        content: [
          "Sterling Forensic provides expert witness reports designed for judges, not accountants. Our reports set out clear reasoning, transparent methodology, and findings that withstand cross-examination under CPR Part 35, FPR Part 25, or CrPR Part 33 as appropriate.",
          "We accept party-appointed and Single Joint Expert (SJE) appointments across commercial litigation, family financial remedy proceedings, personal injury, construction quantum, and criminal matters.",
        ],
      },
      {
        heading: "Expert Witness in Disputes and Valuations",
        content: [
          "Sterling Forensic expert witnesses are instructed across the full range of forensic accounting disputes: commercial litigation, shareholder oppression proceedings, business valuation in financial remedy, loss and damages quantification, construction quantum, fraud and asset tracing, insolvency, and regulatory enforcement.",
          "Our expert evidence addresses the financial questions that determine outcome — fair value in shareholder disputes, maintainable earnings in business valuations, but-for loss in contractual claims, and overhead recovery in construction disputes.",
        ],
      },
      {
        heading: "What We Cover",
        content: [
          "CPR Part 35 reports for High Court, County Court, and TCC proceedings",
          "FPR Part 25 reports for financial remedy and ancillary relief",
          "CrPR Part 33 reports for criminal proceedings",
          "Expert evidence in commercial disputes, valuations, and loss quantification",
          "Shareholder dispute fair value reports (s994 Companies Act 2006)",
          "Joint expert meetings and written questions under CPR 35.6",
          "Oral evidence at trial, FDR, and arbitration",
        ],
      },
    ],
    faqs: [
      {
        question: "What court rules do Sterling Forensic expert reports comply with?",
        answer:
          "Our reports comply with CPR Part 35 for civil proceedings, FPR Part 25 for family proceedings, and CrPR Part 33 for criminal proceedings, as appropriate to the instruction.",
      },
      {
        question: "Does Sterling Forensic accept Single Joint Expert appointments?",
        answer:
          "Yes. We accept SJE appointments in commercial disputes, family proceedings, and construction quantum matters. We confirm availability and realistic timelines at the outset.",
      },
      {
        question: "When should a solicitor instruct an expert witness?",
        answer:
          "Instruct as early as possible when financial quantification, business valuation, or specialist accounting analysis is required. Early instruction allows assessment of whether expert evidence is warranted before significant costs are incurred.",
      },
      {
        question: "Does Sterling Forensic provide expert witness evidence in shareholder disputes?",
        answer:
          "Yes. We provide party-appointed and Single Joint Expert evidence on fair value, minority discount, and loss quantification in s994 Companies Act 2006 proceedings and related commercial litigation.",
      },
      {
        question: "Does Sterling Forensic quantify loss and damages as an expert witness?",
        answer:
          "Yes. Loss and damages quantification — including loss of profits, consequential loss, and business interruption — is a core expert witness instruction. We prepare CPR Part 35 reports establishing a but-for baseline and applying appropriate methodology.",
      },
    ],
  },
  {
    slug: "fraud-investigation",
    title: "Fraud Investigation",
    metaTitle: "Fraud Investigation | Sterling Forensic",
    metaDescription:
      "Independent fraud investigation services for solicitors and businesses, conducted under legal professional privilege.",
    shortDescription:
      "LPP-protected fraud investigations for solicitors and businesses.",
    sections: [
      {
        heading: "Fraud Investigation Services",
        content: [
          "Sterling Forensic conducts independent financial investigations for solicitors and businesses who suspect fraud, embezzlement, or financial irregularities. Investigations are typically instructed via solicitors to preserve legal professional privilege.",
          "We analyse financial records, identify patterns of irregular transactions, trace fund flows, and quantify total loss to provide the evidential foundation for civil recovery and freezing injunction applications.",
        ],
      },
      {
        heading: "What We Cover",
        content: [
          "Procurement and expense fraud investigation",
          "Employee dishonesty and embezzlement",
          "Management override of controls",
          "Multi-site and multi-year loss reconstruction",
          "Reports for civil recovery proceedings",
        ],
      },
    ],
    faqs: [
      {
        question: "Why instruct a forensic accountant via solicitors for fraud investigations?",
        answer:
          "Instructing via solicitors preserves legal professional privilege over the investigation and report, preventing premature disclosure and allowing assessment of case strength before proceedings are commenced.",
      },
      {
        question: "What records does a fraud investigation require?",
        answer:
          "We typically require bank statements, purchase and sales ledgers, expense records, payroll data, and vendor master files. The scope is defined in the letter of instruction based on the suspected fraud mechanism.",
      },
      {
        question: "Can investigation findings support a freezing injunction?",
        answer:
          "Yes. Our investigation reports are designed to provide the evidential basis for freezing injunction applications, identifying misappropriated funds and traceable assets.",
      },
    ],
  },
  {
    slug: "asset-tracing",
    title: "Asset Tracing",
    metaTitle: "Asset Tracing | Sterling Forensic",
    metaDescription:
      "Forensic asset tracing services following misappropriated funds through corporate structures and bank accounts.",
    shortDescription:
      "Forensic tracing of funds and assets through corporate structures.",
    sections: [
      {
        heading: "Asset Tracing Services",
        content: [
          "Sterling Forensic traces misappropriated funds and assets through bank accounts, corporate structures, connected entities, and offshore arrangements. Asset tracing is typically undertaken as part of a fraud investigation instructed via solicitors under legal professional privilege.",
          "Our tracing reports identify where funds have been diverted, what assets may be available for recovery, and the corporate or individual recipients of misappropriated monies.",
        ],
      },
      {
        heading: "What We Cover",
        content: [
          "Bank account and payment flow analysis",
          "Connected party and related entity tracing",
          "Corporate structure mapping",
          "Identification of recoverable assets",
          "Support for civil recovery and enforcement",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the difference between fraud investigation and asset tracing?",
        answer:
          "Fraud investigation establishes whether fraud occurred and quantifies the loss. Asset tracing follows the diverted funds to identify where they went and what assets may be recovered. The two are frequently undertaken together.",
      },
      {
        question: "Can Sterling Forensic trace funds through multiple corporate entities?",
        answer:
          "Yes. We map intercompany transactions, director loan accounts, and connected party payments to follow fund flows through complex corporate structures.",
      },
      {
        question: "How long does an asset tracing exercise take?",
        answer:
          "Timeline depends on the number of accounts, entities, and transaction volume. We provide a fee estimate and realistic timeline at the outset based on the scope defined in the letter of instruction.",
      },
    ],
  },
  {
    slug: "business-valuation",
    title: "Business Valuation",
    metaTitle: "Business Valuation | Sterling Forensic",
    metaDescription:
      "Independent business and share valuations for commercial disputes, family proceedings, and shareholder disputes.",
    shortDescription:
      "Independent valuations for disputes, family proceedings, and shareholder claims.",
    sections: [
      {
        heading: "Business Valuation Services",
        content: [
          "Sterling Forensic provides independent business and share valuations for commercial disputes, family financial remedy proceedings, shareholder disputes under s994 Companies Act, and partnership dissolution.",
          "We apply maintainable earnings methodology, sector-specific multiples, and transparent discount reasoning adjusted for personal vs transferable goodwill where appropriate.",
        ],
      },
      {
        heading: "Valuations in Disputes",
        content: [
          "Business valuations are frequently the central financial issue in UK disputes. Sterling Forensic values businesses and shareholdings for shareholder oppression proceedings, financial remedy, partnership dissolution, M&A warranty claims, and general commercial litigation where the value of an interest determines quantum.",
          "We apply maintainable earnings methodology with transparent multiple and discount reasoning, adjusted for personal vs transferable goodwill, minority status, and lack of marketability where appropriate to the instruction.",
        ],
      },
      {
        heading: "What We Cover",
        content: [
          "Shareholder dispute valuations (s994 fair value)",
          "Family financial remedy business valuations",
          "Partnership and LLP dissolution valuations",
          "Professional practice valuations",
          "Minority discount and lack of marketability analysis",
          "Valuations for M&A warranty and indemnity disputes",
          "Expert witness valuations under CPR Part 35 and FPR Part 25",
        ],
      },
    ],
    faqs: [
      {
        question: "What valuation methodology does Sterling Forensic use?",
        answer:
          "We typically apply maintainable earnings methodology using EBITDA or EBIT multiples, adjusted for normalised earnings, with clear reasoning on the multiple applied and any discount for minority status or lack of marketability.",
      },
      {
        question: "How is personal goodwill treated in a business valuation?",
        answer:
          "Personal goodwill attaches to the individual practitioner and is typically excluded from matrimonial or partnership assets. We assess the split based on client concentration, contractual arrangements, and sector-specific benchmarks.",
      },
      {
        question: "Does Sterling Forensic value professional practices?",
        answer:
          "Yes. We value dental practices, law firms, accountancy practices, and other professional partnerships using sector-specific multiples of recurring fee income.",
      },
      {
        question: "How are valuations used in shareholder disputes?",
        answer:
          "In s994 Companies Act 2006 proceedings, the court may order a fair value buy-out. The forensic accountant values the shareholding on a fair value basis, typically without minority discount, and provides expert evidence on maintainable earnings, multiples, and discount arguments.",
      },
    ],
  },
  {
    slug: "construction-quantum",
    title: "Construction Quantum",
    metaTitle: "Construction Quantum Forensic Accountant UK | Sterling Forensic",
    metaDescription:
      "Financial accounting expert evidence for construction disputes, TCC proceedings, and adjudication.",
    shortDescription:
      "Financial accounting expert evidence for construction quantum claims.",
    sections: [
      {
        heading: "Construction Quantum Services",
        content: [
          "Sterling Forensic provides forensic accounting support in construction disputes: overhead recovery analysis, loss of profit on contract, prolongation costs, and disruption cost assessment from a financial accounting perspective.",
          "We work alongside quantity surveyors and delay analysts where required, applying CPR Part 35 standards to financial accounting aspects of quantum claims in TCC proceedings and adjudication.",
        ],
      },
      {
        heading: "What We Cover",
        content: [
          "Head office overhead recovery (Emden and Hudson formula analysis)",
          "Loss of profit on contract and remaining works",
          "Prolongation cost financial accounting review",
          "Disruption cost assessment",
          "Retention release and final account disputes",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the forensic accountant's role in a construction dispute?",
        answer:
          "The forensic accountant addresses financial accounting aspects of the claim: overhead recovery methodology, loss of profit calculations, treatment of costs in financial accounts, and whether claimed costs are supported by records.",
      },
      {
        question: "What is the Emden formula and why is it disputed?",
        answer:
          "The Emden formula calculates head office overhead recovery using actual company overhead and turnover data. It is frequently disputed because it can produce different results to the Hudson formula or contract rates. We assess which methodology is appropriate.",
      },
      {
        question: "Can Sterling Forensic assist with adjudication?",
        answer:
          "Yes. We provide financial accounting expert evidence for adjudication, including preliminary assessments within the 28-day adjudication timetable.",
      },
    ],
  },
  {
    slug: "loss-quantification",
    title: "Loss & Damages Quantification",
    metaTitle: "Loss and Damages Quantification UK | Sterling Forensic",
    metaDescription:
      "Quantification of loss and damages, loss of profits, and consequential loss for commercial and contractual disputes in England and Wales.",
    shortDescription:
      "Loss and damages, loss of profits, and consequential loss quantification for UK commercial disputes.",
    sections: [
      {
        heading: "Loss & Damages Quantification",
        content: [
          "Sterling Forensic quantifies loss and damages in commercial and contractual disputes across England and Wales, including loss of profits, loss of opportunity, consequential loss, and business interruption. Our analysis establishes a robust but-for baseline and applies appropriate methodology to the specific facts.",
          "We provide CPR Part 35 expert witness reports for breach of contract claims, warranty disputes, supply agreement breaches, shareholder disputes, and franchise termination claims.",
        ],
      },
      {
        heading: "Loss and Damages in Disputes",
        content: [
          "Loss and damages quantification sits at the heart of most commercial disputes. Sterling Forensic establishes what the claimant's financial position would have been but for the breach, applies appropriate loss of profits or consequential loss methodology, and prepares expert evidence suitable for trial.",
          "Our loss quantification work supports breach of contract claims, warranty and indemnity disputes, supply agreement breaches, shareholder claims, franchise termination, business interruption, and construction quantum proceedings across England and Wales.",
        ],
      },
      {
        heading: "What We Cover",
        content: [
          "Loss of profits quantification",
          "Consequential and indirect loss assessment",
          "Business interruption loss analysis",
          "Damages quantification in commercial and contractual disputes",
          "Shareholder dispute loss and fair value analysis",
          "Earnings normalisation (including pandemic adjustments)",
          "Discounted cash flow and multiple-based loss models",
        ],
      },
    ],
    faqs: [
      {
        question: "How is loss and damages quantified in a commercial dispute?",
        answer:
          "Loss and damages are typically quantified as the difference between actual financial performance and the position that would have existed but for the breach, using historical financial records to establish a maintainable earnings baseline. Loss of profits, consequential loss, and business interruption are assessed using methodology appropriate to the facts.",
      },
      {
        question: "Does Sterling Forensic handle COVID-era loss calculations?",
        answer:
          "Yes. For disputes involving the pandemic period, we normalise earnings to establish a but-for baseline untainted by forced closures, furlough distortions, and subsequent recovery effects.",
      },
      {
        question: "What financial records are required for loss quantification?",
        answer:
          "We typically require audited accounts, management accounts, tax returns, and transaction-level data for the pre-breach and loss periods. The specific requirements depend on the nature of the claim.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
