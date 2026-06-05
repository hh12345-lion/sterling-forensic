type FAQListProps = {
  items: { question: string; answer: string }[];
};

export function FAQList({ items }: FAQListProps) {
  return (
    <div className="space-y-4">
      {items.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-md border border-border bg-white shadow-card"
        >
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-heading text-base text-primary [&::-webkit-details-marker]:hidden">
            {faq.question}
            <span
              className="shrink-0 text-accent transition-transform group-open:rotate-45"
              aria-hidden="true"
            >
              +
            </span>
          </summary>
          <div className="border-t border-border px-5 py-4 text-body">
            <p>{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
