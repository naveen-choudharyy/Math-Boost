import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function FAQ() {
  const { faqs } = teacherConfig;
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-14 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Clear Answers"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about the 3-month Class 10 Mathematics preparation program."
        />

        <div className="space-y-2.5 mb-10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-slate-200/80 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 pr-3">
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 bg-blue-600 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Custom Question Card */}
        <div className="glass-panel p-5 rounded-2xl border border-white/90 shadow-glass flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Have a question not listed here?
            </h4>
            <p className="text-xs text-slate-500">
              Message me directly on WhatsApp for immediate clarity.
            </p>
          </div>
          <Button
            whatsappType="hero"
            variant="whatsapp"
            size="sm"
            trackingEvent="faq_custom_question_whatsapp_click"
          >
            Ask on WhatsApp
          </Button>
        </div>

      </div>
    </section>
  );
}
