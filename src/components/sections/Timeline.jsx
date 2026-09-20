import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar, ArrowRight, Layers, Award } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function Timeline() {
  const { timeline } = teacherConfig;
  const [activeMonth, setActiveMonth] = useState(0);

  return (
    <section id="timeline" className="relative py-16 md:py-24 bg-navy-950/70 border-t border-blue-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Roadmap to Success"
          title="Why a 3-Month Focused Preparation?"
          subtitle="Three months is the ideal timeframe: enough time to build genuine conceptual mastery, yet focused enough to keep motivation and intensity at their peak."
        />

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:grid grid-cols-3 gap-6 relative mb-12">
          {/* Connecting Track Line */}
          <div className="absolute top-12 left-16 right-16 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-amber-400 z-0 opacity-40"></div>

          {timeline.map((item, idx) => (
            <motion.div
              key={item.month}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative z-10 p-7 rounded-3xl glass-card border border-blue-500/25 flex flex-col justify-between hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              <div>
                {/* Month Pill / Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-blue-600 text-white shadow-sm">
                    {item.month}
                  </span>
                  <span className="text-xs font-semibold text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 mb-6">
                  {item.subtitle}
                </p>

                {/* Items List */}
                <ul className="space-y-3 mb-6">
                  {item.items.map((line, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-blue-900/60 border border-blue-400/40 flex items-center justify-center flex-shrink-0 mt-0.5 text-blue-300">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <span className="text-xs text-slate-400 font-medium">Phase {idx + 1} of 3</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-6 mb-12">
          {timeline.map((item, idx) => (
            <motion.div
              key={item.month}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative p-6 rounded-2xl glass-card border border-blue-500/25"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-blue-600 text-white">
                  {item.month}
                </span>
                <span className="text-xs font-semibold text-amber-400">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
              <p className="text-xs text-slate-400 mb-4">{item.subtitle}</p>

              <ul className="space-y-2.5">
                {item.items.map((line, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Timeline Bottom CTA */}
        <div className="text-center">
          <Button
            whatsappType="program"
            variant="whatsapp"
            size="lg"
            trackingEvent="timeline_whatsapp_click"
          >
            START YOUR 3-MONTH JOURNEY ON WHATSAPP
          </Button>
        </div>

      </div>
    </section>
  );
}
