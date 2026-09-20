import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import SectionHeading from '../ui/SectionHeading';

export default function FAQ() {
  const { faqs } = teacherConfig;
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-10 md:py-16 border-t border-slate-200/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Quick Clarity"
          title="Frequently Asked Questions"
          subtitle="Direct answers regarding the 3-month Class 10 Mathematics preparation batch."
        />

        <div className="space-y-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-xl border border-slate-200/80 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-3.5 sm:p-4 flex items-center justify-between text-left focus:outline-none hover:bg-slate-50/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-900 pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 bg-blue-600 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-3 h-3" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-3.5 pb-3.5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
