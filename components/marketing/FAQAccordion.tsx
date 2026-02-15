"use client";

/** FAQ accordion. First item open by default. Uses aria-expanded for accessibility. */
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQAccordionProps {
  headline: string;
  items: FAQItem[];
}

const FAQAccordion = ({ headline, items }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-20 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16">
            {headline}
          </h2>
          <div className="space-y-2" role="list">
            {items.map((item, i) => {
              const isOpen = openIndex === i;
              const contentId = `faq-answer-${i}`;
              return (
                <div
                  key={i}
                  className="glass-card rounded-xl overflow-hidden"
                  role="listitem"
                >
                  <button
                    type="button"
                    id={`faq-question-${i}`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-medium">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-zinc-500 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 sm:px-6 pb-4 text-zinc-400 text-sm">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
