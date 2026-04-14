"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className={i < items.length - 1 ? "border-b border-outline-variant/30" : ""}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left"
            >
              <span className="font-heading md3-title-medium text-on-surface leading-snug">
                {item.q}
              </span>
              <svg
                className={`w-5 h-5 shrink-0 text-on-surface-variant transition-transform duration-300 ease-[cubic-bezier(0.2,0,0,1)] ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
              </svg>
            </button>
            <div
              className="grid transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="md3-body-large text-on-surface-variant pb-5 md:pb-6 max-w-3xl leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
