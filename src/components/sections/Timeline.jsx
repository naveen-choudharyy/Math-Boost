import React from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function Timeline() {
  const { timeline } = teacherConfig;

  return (
    <section id="timeline" className="relative py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Structured Roadmap"
          title="Why a 3-Month Focused Preparation?"
          subtitle="A systematic progression: build rock-solid concepts, drill standard board questions, and master timed revision."
        />

        {/* 3 Frosted Glass Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {timeline.map((item, idx) => (
            <motion.div
              key={item.month}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/90 shadow-glass flex flex-col justify-between hover:shadow-glass-hover transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-blue-600 text-white shadow-xs">
                    {item.month}
                  </span>
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200/80 px-2.5 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 mb-5">
                  {item.subtitle}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {item.items.map((line, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-200/70 text-xs font-semibold text-slate-400">
                Phase {idx + 1} of 3
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            whatsappType="program"
            variant="whatsapp"
            size="md"
            trackingEvent="timeline_whatsapp_click"
          >
            START YOUR 3-MONTH JOURNEY ON WHATSAPP
          </Button>
        </div>

      </div>
    </section>
  );
}
