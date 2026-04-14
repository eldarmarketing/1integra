interface FaqItem {
  q: string;
  a: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div>
      {items.map((item, i) => (
        <details
          key={i}
          className={`group ${i < items.length - 1 ? "border-b border-outline-variant/30" : ""}`}
        >
          <summary className="w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <span className="text-base font-semibold text-on-surface leading-snug">
              {item.q}
            </span>
            <svg
              className="w-5 h-5 shrink-0 text-on-surface-variant transition-transform duration-300 group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
            </svg>
          </summary>
          <p className="text-base text-on-surface-variant pb-5 md:pb-6 max-w-3xl leading-relaxed">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
