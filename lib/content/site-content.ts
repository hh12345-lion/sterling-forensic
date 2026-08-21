export type CaseStudy = {
  id: string;
  title: string;
  category: string;
  background: string;
  instruction: string;
  approach: string;
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "shareholder-dispute",
    title: "Shareholder Dispute: Fair Value in an Unfair Prejudice Claim",
    category: "Shareholder Disputes",
    background:
      "A minority shareholder in a profitable engineering business brought unfair prejudice proceedings under s994 Companies Act 2006, seeking a fair value buy-out following exclusion from management and diversion of profitable contracts to a connected company.",
    instruction:
      "Single Joint Expert under CPR Part 35 to value the company and the claimant's shareholding on a fair value basis, and to provide expert evidence on minority discount and maintainable earnings.",
    approach:
      "Analysed five years of audited accounts and management information; normalised director remuneration and related party charges; assessed maintainable EBITDA using sector-appropriate multiples; addressed minority discount arguments with reference to case law and valuation practice; prepared a CPR Part 35 compliant report for joint expert meeting.",
    outcome:
      "The SJE's fair value figure differed materially from both parties' initial positions. Following the joint expert meeting and exchange of reports, the matter settled at FDR with a buy-out based on the expert's maintainable earnings analysis and fair value conclusion.",
  },
  {
    id: "construction-quantum",
    title:
      "Construction Contract Dispute: Overhead Recovery and Loss of Profit",
    category: "Construction Quantum",
    background:
      "A specialist subcontractor disputed the final account on a major infrastructure project, claiming head office overhead recovery and loss of profit on the remaining works.",
    instruction:
      "CPR Part 35 party-appointed expert to provide financial accounting expert evidence on the overhead recovery methodology and loss of profit claim.",
    approach:
      "Analysed the subcontractor's audited accounts and management information; assessed whether the Emden or Hudson formula was appropriate; applied the correct financial data to the chosen formula; calculated loss of profit on remaining works.",
    outcome:
      "Sterling Forensic's analysis produced an overhead recovery figure different from both parties' initial positions, and identified additional recoverable loss of profit elements not previously claimed. The matter settled following exchange of expert reports.",
  },
  {
    id: "fraud-investigation",
    title: "Corporate Fraud: Procurement Irregularities in a Multi-Site Business",
    category: "Fraud Investigation",
    background:
      "A business with multiple retail locations suspected its procurement manager of systematically diverting funds to connected suppliers over a 4-year period.",
    instruction:
      "Instructed via solicitors (under LPP) to investigate financial records and quantify the potential loss.",
    approach:
      "Analysed 4 years' purchase ledger data against vendor master file; identified payments to suppliers with residential address registrations; traced fund flows to connected bank accounts; reconstructed the total loss period by period.",
    outcome:
      "Investigation identified a significantly larger loss than initially suspected, spanning multiple locations. Report provided the evidential basis for civil recovery proceedings and a successful freezing injunction application.",
  },
  {
    id: "family-proceedings",
    title:
      "Financial Remedy: Valuation and Income Analysis in a Multi-Entity Business",
    category: "Family Proceedings",
    background:
      "Complex financial remedy proceedings involving a business owner with interests in several connected companies in the professional services sector.",
    instruction:
      "FPR Part 25 SJE to value the business interests and assess the income available for maintenance.",
    approach:
      "Analysed group accounts and individual entity financials; mapped intercompany transactions; applied maintainable earnings methodology adjusted for personal goodwill; identified add-backs across entities.",
    outcome:
      "The valuation and income analysis produced a significantly different picture from the respondent's own accountants' figures. The FDR hearing concluded with a consent order based on the SJE's figures.",
  },
  {
    id: "insolvency",
    title: "Wrongful Trading: Financial Position Analysis at Key Dates",
    category: "Insolvency",
    background:
      "A liquidator brought wrongful trading proceedings against the directors of an insolvent company, alleging they continued to trade after the point of no return.",
    instruction:
      "Instructed by defence solicitors to assess the financial position of the company at successive dates and identify the earliest point at which insolvent liquidation was inevitable.",
    approach:
      "Reconstructed the company's financial position at monthly intervals using management accounts, bank statements, and creditor records; applied both the balance sheet and cash flow solvency tests; assessed the impact of proposed restructuring options.",
    outcome:
      "Sterling Forensic's analysis identified a later date of insolvency than the liquidator had alleged, significantly reducing the quantum of the wrongful trading claim. The matter settled prior to trial.",
  },
];

export const faqItems = [
  {
    question: "What is forensic accounting?",
    answer:
      "Forensic accounting applies accounting, auditing, and investigative skills to disputes and investigations where financial evidence is required. Forensic accountants quantify loss, value businesses, investigate fraud, and provide expert witness evidence in court proceedings under CPR Part 35, FPR Part 25, or CrPR Part 33.",
  },
  {
    question: "When should I instruct a forensic accountant?",
    answer:
      "Instruct a forensic accountant as early as possible when a dispute or investigation involves financial quantification, business valuation, or analysis of financial records. Early instruction allows preliminary assessment of whether expert evidence is warranted and can identify the financial issues that will determine the outcome.",
  },
  {
    question: "Does Sterling Forensic accept Single Joint Expert appointments?",
    answer:
      "Yes. Sterling Forensic accepts SJE appointments in commercial disputes, family proceedings, and construction quantum matters. We confirm availability and realistic timelines at the outset of the instruction process.",
  },
  {
    question: "What courts and tribunals does Sterling Forensic work in?",
    answer:
      "We provide expert evidence in the High Court, Technology and Construction Court (TCC), County Court, Family Court, Crown Court, and in arbitration and adjudication proceedings across England and Wales. Sterling Forensic is a United Kingdom practice and does not accept instructions for proceedings outside England and Wales.",
  },
  {
    question: "Does Sterling Forensic handle shareholder disputes?",
    answer:
      "Yes. Shareholder disputes under s994 Companies Act 2006 are a dedicated practice area. We provide fair value valuations, assess minority discount arguments, and accept party-appointed and Single Joint Expert appointments in shareholder oppression proceedings.",
  },
  {
    question: "What forensic accounting services does Sterling Forensic provide?",
    answer:
      "We provide forensic accounting across expert witness reporting, commercial disputes, business valuations, shareholder fair value analysis, loss and damages quantification, fraud investigation, asset tracing, construction quantum, family financial remedy, insolvency, and regulatory proceedings — all for matters in England and Wales.",
  },
  {
    question: "Does Sterling Forensic provide business valuations for disputes?",
    answer:
      "Yes. We value businesses and shareholdings for shareholder disputes, financial remedy proceedings, partnership dissolution, and commercial litigation. Valuations use maintainable earnings methodology with transparent multiple and discount reasoning.",
  },
  {
    question: "How does Sterling Forensic quantify loss and damages?",
    answer:
      "We quantify loss and damages in commercial and contractual disputes by establishing a but-for baseline, applying appropriate loss of profits or consequential loss methodology, and preparing CPR Part 35 expert reports suitable for trial. Our work covers breach of contract, warranty claims, supply agreement breaches, and business interruption.",
  },
  {
    question: "Does Sterling Forensic accept instructions outside the United Kingdom?",
    answer:
      "No. Sterling Forensic is a United Kingdom practice focused exclusively on matters in England and Wales. Our expert witness work follows UK court rules and our reports are prepared for proceedings in this jurisdiction.",
  },
  {
    question: "Does Sterling Forensic handle construction quantum disputes?",
    answer:
      "Yes. Construction quantum is a core practice area. We provide financial accounting expert evidence on overhead recovery, loss of profit on contract, prolongation costs, and disruption costs in TCC proceedings and adjudication.",
  },
  {
    question: "Can Sterling Forensic investigate fraud under legal professional privilege?",
    answer:
      "Yes. Fraud investigations are typically instructed via solicitors to preserve legal professional privilege over the investigation and resulting report. We conduct investigations under LPP and provide reports suitable for civil recovery proceedings and freezing injunction applications.",
  },
  {
    question: "What are Sterling Forensic's hourly rates?",
    answer:
      "We provide fee estimates at the outset of every instruction and agree scope before commencing work. Fixed fee options are available for defined-scope reports. Contact us for current rate information.",
  },
  {
    question: "Does Sterling Forensic accept Legal Aid instructions?",
    answer:
      "Yes. We accept Legal Aid funded instructions in personal injury, clinical negligence, and family proceedings where a forensic accountant is required. Our rates are consistent with LAA guidance.",
  },
  {
    question: "How quickly can Sterling Forensic respond to an urgent instruction?",
    answer:
      "We respond to all enquiries within one business day. For urgent matters, including adjudication proceedings with tight timetables, contact us directly and we will confirm availability and the earliest realistic delivery date.",
  },
  {
    question: "What qualifications do Sterling Forensic's practitioners hold?",
    answer:
      "Our practitioners hold ACA or FCA qualifications (ICAEW), Certified Fraud Examiner (CFE) accreditation, ICAEW Forensic Accreditation, and membership of the Academy of Experts and Expert Witness Institute. See our Qualifications page for full details.",
  },
  {
    question: "Does Sterling Forensic work with quantity surveyors on construction disputes?",
    answer:
      "Yes. Construction quantum disputes frequently require both quantity surveying and financial accounting expertise. We work alongside RICS-qualified quantity surveyors and delay analysts, providing the financial accounting perspective on overhead recovery, loss of profit, and cost treatment in the company's accounts.",
  },
  {
    question: "What sectors does Sterling Forensic specialise in?",
    answer:
      "We have sector expertise in construction and engineering, technology and digital businesses, financial services, professional practices, and retail and hospitality. Sector knowledge informs our approach to valuation methodology and loss quantification in each engagement.",
  },
];

export const ukPracticeContent = {
  heading: "A United Kingdom Practice",
  paragraphs: [
    "Sterling Forensic is a United Kingdom forensic accounting practice. We accept instructions exclusively in matters governed by the law of England and Wales, and our expert witness reports are prepared for UK courts, tribunals, and arbitral proceedings seated in this jurisdiction.",
    "Our work follows the Civil Procedure Rules (CPR Part 35), Family Procedure Rules (FPR Part 25), and Criminal Procedure Rules (CrPR Part 33). We provide evidence in the High Court, Technology and Construction Court, County Court, Family Court, Crown Court, and in adjudication and arbitration proceedings across England and Wales. We do not accept instructions for proceedings outside the United Kingdom.",
  ],
};

export const coreExpertiseAreas = [
  {
    title: "Expert Witness",
    description:
      "CPR Part 35, FPR Part 25, and CrPR Part 33 compliant expert witness reports and oral evidence for civil, family, and criminal proceedings in England and Wales.",
    href: "/services/expert-witness",
  },
  {
    title: "Forensic Accounting",
    description:
      "Independent forensic accounting analysis: financial record review, dispute support, fraud investigation, valuations, and specialist accounting evidence for UK litigation.",
    href: "/services/forensic-accounting",
  },
  {
    title: "Disputes",
    description:
      "Forensic accounting support across commercial litigation, breach of contract, loss quantification, construction quantum, family remedy, insolvency, and regulatory proceedings.",
    href: "/practice-areas/commercial-disputes",
  },
  {
    title: "Valuations",
    description:
      "Independent business and share valuations for commercial disputes, financial remedy proceedings, shareholder disputes, and partnership dissolution.",
    href: "/services/business-valuation",
  },
  {
    title: "Shareholder Disputes",
    description:
      "Fair value analysis and expert evidence in s994 Companies Act 2006 proceedings, including minority discount assessment and Single Joint Expert appointments.",
    href: "/practice-areas/shareholder-disputes",
  },
  {
    title: "Loss & Damages",
    description:
      "Quantification of loss and damages: loss of profits, consequential loss, business interruption, and contractual breach claims in commercial disputes.",
    href: "/services/loss-quantification",
  },
];

export const servicesOverview = [
  {
    title: "Forensic Accounting",
    description:
      "Independent forensic accounting for UK disputes and investigations: financial analysis, dispute support, and expert witness preparation.",
    href: "/services/forensic-accounting",
    id: "forensic-accounting",
  },
  {
    title: "Expert Witness Reports",
    description:
      "CPR Part 35, FPR Part 25, and CrPR Part 33 compliant expert witness reports for civil, family, and criminal proceedings.",
    href: "/services/expert-witness",
    id: "expert-witness",
  },
  {
    title: "Business Valuation",
    description:
      "Independent business and share valuations for commercial disputes, family proceedings, and shareholder disputes.",
    href: "/services/business-valuation",
    id: "business-valuation",
  },
  {
    title: "Loss & Damages Quantification",
    description:
      "Loss of profits, consequential loss, and damages quantification for breach of contract and commercial disputes in England and Wales.",
    href: "/services/loss-quantification",
    id: "loss-quantification",
  },
  {
    title: "Fraud Investigation",
    description:
      "Independent financial investigations for solicitors and businesses, conducted under legal professional privilege.",
    href: "/services/fraud-investigation",
    id: "fraud-investigation",
  },
  {
    title: "Construction Quantum",
    description:
      "Financial accounting expert evidence for construction disputes, TCC proceedings, and adjudication.",
    href: "/services/construction-quantum",
    id: "construction-quantum",
  },
  {
    title: "Asset Tracing",
    description:
      "Forensic tracing of funds and assets through corporate structures and bank accounts.",
    href: "/services/asset-tracing",
    id: "asset-tracing",
  },
];

export const whyInstructPillars = [
  {
    title: "Senior-led throughout",
    description:
      "Every engagement is led by a senior forensic accountant, not delegated after the first call.",
  },
  {
    title: "Independent and objective",
    description:
      "Our reports reflect our honest view of the financial issues. We advise promptly when our preliminary view is adverse to the instructing party.",
  },
  {
    title: "Court-ready",
    description:
      "Written for judges, not accountants. Clear reasoning, transparent methodology, and findings that withstand cross-examination.",
  },
  {
    title: "Sector aware",
    description:
      "We understand that a construction quantum dispute is not the same as a technology company valuation. Sector knowledge matters.",
  },
];

export const howWeWorkPrinciples = [
  {
    title: "Senior involvement from instruction",
    description:
      "Every engagement is assessed and led by a senior forensic accountant. You speak directly with the person who will write the report and give evidence.",
  },
  {
    title: "Independence as a professional duty",
    description:
      "Our primary duty is to the court. We advise promptly when our preliminary view is adverse to the instructing party, before significant costs are incurred.",
  },
  {
    title: "Breadth of experience",
    description:
      "Our practice spans commercial, family, construction, insolvency, and regulatory proceedings. This breadth informs our approach to each new instruction.",
  },
  {
    title: "Sector-specific methodology",
    description:
      "We apply sector-appropriate valuation and loss quantification methodology, whether the dispute involves a construction subcontractor, a SaaS business, or a dental practice.",
  },
  {
    title: "Transparent fee communication",
    description:
      "We provide fee estimates at the outset and agree scope before commencing work. No surprises on billing.",
  },
];

export const howWeWorkSteps = [
  {
    step: 1,
    title: "Initial enquiry",
    description:
      "Contact us with a brief description of the matter. We respond within one business day with availability and preliminary views on whether expert evidence is warranted.",
  },
  {
    step: 2,
    title: "Conflict check and terms",
    description:
      "We conduct a conflict check and provide terms of engagement with a fee estimate based on the scope of work required.",
  },
  {
    step: 3,
    title: "Document review and analysis",
    description:
      "We review the financial records provided, conduct our analysis, and identify any additional information required.",
  },
  {
    step: 4,
    title: "Draft report and consultation",
    description:
      "We prepare a draft report and discuss our preliminary findings with instructing solicitors before finalising.",
  },
  {
    step: 5,
    title: "Report delivery",
    description:
      "The final report is delivered in accordance with CPR Part 35, FPR Part 25, or CrPR Part 33 as appropriate.",
  },
  {
    step: 6,
    title: "Joint expert meeting",
    description:
      "Where appointed as SJE or where a joint expert meeting is directed, we meet with the opposing expert to identify areas of agreement and disagreement.",
  },
  {
    step: 7,
    title: "Oral evidence",
    description:
      "Where required, we provide oral evidence at trial, FDR, or arbitration, with clear and direct testimony under cross-examination.",
  },
];

export const qualifications = [
  {
    title: "ACA / FCA (ICAEW)",
    description:
      "Our practitioners hold Associate or Fellow membership of the Institute of Chartered Accountants in England and Wales.",
  },
  {
    title: "Certified Fraud Examiner (CFE)",
    description:
      "Accredited by the Association of Certified Fraud Examiners for fraud investigation and prevention.",
  },
  {
    title: "ICAEW Forensic Accreditation",
    description:
      "ICAEW forensic accounting accreditation demonstrating specialist competence in forensic engagements.",
  },
  {
    title: "Academy of Experts",
    description:
      "Membership of the Academy of Experts, the leading body for expert witnesses in the UK.",
  },
  {
    title: "Expert Witness Institute",
    description:
      "Membership of the Expert Witness Institute, supporting best practice in expert witness work.",
  },
  {
    title: "RICS",
    description:
      "For construction and property-related matters, we work alongside RICS-qualified quantity surveyors and delay analysts.",
  },
];
