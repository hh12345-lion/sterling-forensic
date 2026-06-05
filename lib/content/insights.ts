export type InsightArticle = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  sections: { heading?: string; paragraphs: string[] }[];
};

export const insights: InsightArticle[] = [
  {
    slug: "forensic-accountant-construction-quantum",
    title: "The Forensic Accountant's Role in Construction Quantum Disputes",
    metaTitle:
      "Forensic Accountant Construction Quantum | Sterling Forensic",
    metaDescription:
      "How forensic accountants address overhead recovery, loss of profit, and financial accounting aspects of construction quantum claims in TCC and adjudication.",
    excerpt:
      "Understanding the forensic accountant's role in construction quantum disputes, from Emden and Hudson overhead recovery to loss of profit on contract.",
    datePublished: "2025-11-15",
    dateModified: "2025-11-15",
    sections: [
      {
        paragraphs: [
          "Construction quantum disputes frequently involve both quantity surveying and financial accounting dimensions. While quantity surveyors address the contractual and physical aspects of the claim, the forensic accountant addresses whether the financial data supports the quantum claimed and which overhead recovery methodology is appropriate.",
        ],
      },
      {
        heading: "Overhead Recovery Methodologies",
        paragraphs: [
          "The Emden formula calculates head office overhead recovery by dividing total company overhead by total company turnover, then multiplying by the contract sum and delay period. The Hudson formula applies a fixed percentage to the contract sum and delay period. Both are frequently disputed because they produce different results depending on the underlying financial data.",
          "The forensic accountant's role is to assess which formula is appropriate given the contract terms and the company's financial records, and whether the underlying data (overhead costs, turnover, contract sum) is accurately stated in the company's accounts.",
        ],
      },
      {
        heading: "Loss of Profit on Contract",
        paragraphs: [
          "Loss of profit claims require analysis of the company's overall profitability, the specific contract's contribution margin, and whether the contractor had sufficient remaining capacity to take on replacement work. The forensic accountant reviews audited accounts, management information, and order books to establish a robust loss of profit calculation.",
        ],
      },
      {
        heading: "TCC and Adjudication Practice",
        paragraphs: [
          "Construction quantum expert evidence in the Technology and Construction Court must comply with CPR Part 35. Reports must be written for judges, not accountants, with clear methodology and transparent assumptions. In adjudication, the 28-day timetable requires rapid preliminary assessment, making early instruction critical.",
          "Sterling Forensic confirms realistic timelines for construction quantum instructions at the outset, taking into account the volume and complexity of financial records to be reviewed.",
        ],
      },
    ],
  },
  {
    slug: "shareholder-dispute-fair-value-guide",
    title: "Fair Value in Shareholder Disputes: A Guide for Solicitors",
    metaTitle: "Shareholder Dispute Fair Value Guide | Sterling Forensic",
    metaDescription:
      "A practical guide to fair value in s994 shareholder disputes: minority discount debate, forensic accountant role, and joint expert meetings.",
    excerpt:
      "A practical guide for solicitors on fair value in shareholder disputes under s994 Companies Act 2006.",
    datePublished: "2025-10-20",
    dateModified: "2025-10-20",
    sections: [
      {
        paragraphs: [
          "Shareholder disputes under s994 Companies Act 2006 frequently require the court to determine fair value for a minority shareholding. The forensic accountant's role is to apply appropriate valuation methodology and address the contentious question of whether a minority discount should apply.",
        ],
      },
      {
        heading: "The Fair Value Standard",
        paragraphs: [
          "Section 994 proceedings require the court to order the purchase of the petitioner's shares at fair value. The starting point is typically a pro-rata share of the total enterprise value, but the court has discretion to adjust for minority discount depending on the circumstances of the dispute.",
          "The forensic accountant values the business using maintainable earnings methodology (typically EBITDA or EBIT multiples), adjusted for normalised earnings, with clear reasoning on the multiple applied and any discount for lack of marketability or minority status.",
        ],
      },
      {
        heading: "Minority Discount Debate",
        paragraphs: [
          "The minority discount debate turns on whether fair value requires a discount for the lack of control associated with a minority holding. English case law provides guidance, but the appropriate discount remains fact-specific. The forensic accountant must address both positions with transparent reasoning.",
        ],
      },
      {
        heading: "Joint Expert Meetings",
        paragraphs: [
          "In SJE appointments, the joint expert meeting under CPR Part 35 is a critical stage. Areas of agreement and disagreement should be clearly identified, with reasons for any disagreement documented. Solicitors should ensure that the joint letter of instruction addresses the key valuation issues before the meeting takes place.",
        ],
      },
    ],
  },
  {
    slug: "fraud-investigation-lpp-guide",
    title:
      "Fraud Investigations Under Legal Professional Privilege: What Solicitors Need to Know",
    metaTitle: "Fraud Investigation LPP Guide | Sterling Forensic",
    metaDescription:
      "How legal professional privilege protects fraud investigations instructed via solicitors, and what solicitors need to know about scope and disclosure.",
    excerpt:
      "What solicitors need to know about instructing forensic accountants under legal professional privilege for fraud investigations.",
    datePublished: "2025-09-08",
    dateModified: "2025-09-08",
    sections: [
      {
        paragraphs: [
          "When a business suspects fraud, the decision of how to investigate is as important as the investigation itself. Instructing a forensic accountant directly may waive privilege over the findings. Instructing via solicitors preserves legal professional privilege over the investigation and resulting report.",
        ],
      },
      {
        heading: "LPP Protection",
        paragraphs: [
          "Legal professional privilege attaches to communications between a client and their legal adviser for the purpose of obtaining legal advice, and to communications between the legal adviser and third parties (such as forensic accountants) where those communications are made for the purpose of providing legal advice to the client.",
          "This means that a fraud investigation report instructed via solicitors is protected from disclosure to the opposing party until the instructing party chooses to waive privilege, typically by issuing proceedings.",
        ],
      },
      {
        heading: "Why Instruct via Counsel",
        paragraphs: [
          "For significant fraud investigations, instructing via counsel as well as solicitors provides an additional layer of privilege protection and ensures that the investigation scope is properly defined from the outset. Counsel can also advise on the evidential strength of findings before deciding whether to commence proceedings.",
        ],
      },
      {
        heading: "Investigation Scope and Disclosure",
        paragraphs: [
          "The scope of a fraud investigation should be defined in the letter of instruction, covering the period to be investigated, the records to be reviewed, and the deliverables expected. Solicitors should consider disclosure implications at the outset: once proceedings are commenced, the investigation report may become disclosable unless privilege is maintained over specific categories of document.",
        ],
      },
    ],
  },
  {
    slug: "sje-commercial-disputes-guide",
    title:
      "Single Joint Expert Appointments in Commercial Disputes: A Practical Guide",
    metaTitle: "SJE Commercial Disputes Guide | Sterling Forensic",
    metaDescription:
      "A practical guide to Single Joint Expert appointments under CPR 35.7 in commercial disputes: when SJE is appropriate, joint instruction, and written questions.",
    excerpt:
      "A practical guide to Single Joint Expert appointments under CPR 35.7 in commercial disputes.",
    datePublished: "2025-08-22",
    dateModified: "2025-08-22",
    sections: [
      {
        paragraphs: [
          "Single Joint Expert (SJE) appointments under CPR 35.7 can reduce costs and simplify expert evidence in commercial disputes. However, they require careful management of the joint instruction process and clear agreement on the issues to be addressed.",
        ],
      },
      {
        heading: "When SJE is Appropriate",
        paragraphs: [
          "CPR 35.7 provides that the court may direct that evidence on an issue is to be given by a single joint expert. SJE appointments are most appropriate where the financial issues are capable of objective determination and where the cost of competing expert evidence would be disproportionate.",
          "They are less appropriate where the parties' positions on methodology are fundamentally incompatible, or where one party requires an expert to support an adverse preliminary view that may not survive independent analysis.",
        ],
      },
      {
        heading: "Joint Instruction Process",
        paragraphs: [
          "The joint letter of instruction should be agreed between the parties' solicitors and should define the issues to be addressed, the documents to be provided, the assumptions to be applied, and the format of the report. Disagreements on the letter of instruction should be referred to the court promptly rather than deferred.",
        ],
      },
      {
        heading: "Written Questions Process",
        paragraphs: [
          "Under CPR 35.6, parties may put written questions to an expert after the report is served. Questions should be focused and capable of a concise answer. The expert's primary duty is to the court, and questions that seek to elicit advocacy rather than clarification may be refused.",
          "Sterling Forensic accepts SJE appointments in commercial disputes and confirms availability and realistic timelines at the outset of the instruction process.",
        ],
      },
    ],
  },
];

export function getInsight(slug: string): InsightArticle | undefined {
  return insights.find((article) => article.slug === slug);
}
