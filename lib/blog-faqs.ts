export type BlogFaq = { question: string; answer: string };

export const BLOG_INDEX_FAQS: BlogFaq[] = [
  {
    question: "What does the Sterling Forensic blog cover?",
    answer:
      "Articles for solicitors on instructing forensic accountants, expert witness practice, letters of instruction, and related financial dispute topics across England and Wales.",
  },
  {
    question: "Is blog content legal or accounting advice?",
    answer:
      "No. Posts provide general information only and should not replace case-specific legal or professional advice.",
  },
  {
    question: "How do I instruct Sterling Forensic?",
    answer:
      "Use the contact form with a brief outline of the matter, or email cases@sterlingforensic.co.uk. Clear letters of instruction help define scope, questions and deliverables.",
  },
];

export const BLOG_POST_FAQS: Record<string, BlogFaq[]> = {
  "how-forensic-accountants-analyse-evidence-records-incomplete": [
    {
      question: "Can a forensic accountant analyse incomplete financial records?",
      answer:
        "Often yes, but incomplete records can affect scope, methodology and the certainty of conclusions. The accountant may identify available evidence, note limitations and consider alternative sources.",
    },
    {
      question: "What alternative sources may be used when records are missing?",
      answer:
        "Depending on the matter, bank statements, tax and VAT returns, invoices, payroll, contracts, accounting software exports and third-party records may provide relevant support.",
    },
    {
      question: "Should limitations be set out in the report?",
      answer:
        "Where material information is unavailable or assumptions are required, the report should identify what was reviewed, what was missing, and how those limitations affect the financial conclusions.",
    },
    {
      question: "Is this article legal or accounting advice?",
      answer:
        "No. It is general information only. The appropriate treatment of incomplete records depends on the individual matter, available evidence and the scope of the instruction.",
    },
  ],
  "what-solicitors-include-letter-of-instruction-to-accountant": [
    {
      question: "What should a letter of instruction to a forensic accountant cover?",
      answer:
        "Background to the matter, purpose of the instruction, specific financial questions, relevant records and dates, scope and limitations, procedural context, other experts, the required deliverable, and known deadlines.",
    },
    {
      question: "Why should instructions distinguish financial questions from legal issues?",
      answer:
        "Forensic accountants analyse financial and accounting issues within an agreed scope. Credibility findings and legal determinations remain for the court or legal representatives.",
    },
    {
      question: "What if financial records are incomplete?",
      answer:
        "Identify known gaps and limitations in the letter of instruction. That clarifies what can be analysed and may indicate where further disclosure is needed.",
    },
    {
      question: "Should deadlines be included in the instruction?",
      answer:
        "Yes. Report exchange dates, hearings, mediation, expert meetings and other milestones help establish a realistic timetable for the engagement.",
    },
    {
      question: "Is this guide legal or accounting advice?",
      answer:
        "No. It is general practitioner information only. The appropriate form of instruction depends on the individual matter and any applicable procedural requirements.",
    },
  ],
};

export function getBlogFaqs(slug?: string): {
  faqs: BlogFaq[];
  heading: string;
} {
  if (slug && BLOG_POST_FAQS[slug]) {
    return {
      faqs: BLOG_POST_FAQS[slug],
      heading: "Frequently asked questions — this article",
    };
  }
  return {
    faqs: BLOG_INDEX_FAQS,
    heading: "Frequently asked questions — blog",
  };
}
