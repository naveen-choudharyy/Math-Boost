import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Crosshair, SearchCheck, RotateCcw } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function TeachingMethod() {
  const { teachingMethod } = teacherConfig;

  const icons = [BookOpen, CheckCircle, Crosshair, SearchCheck, RotateCcw];

  return (
    <section id="teaching" className="relative py-16 md:py-24 bg-navy-900/40 border-t border-blue-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Structured Pedagogy"
          title="How I Teach Mathematics"
          subtitle="Mathematics is not about memorizing solutions; it's a systematic 5-step thinking process that turns complex questions into straightforward solutions."
        />

        {/* 5-Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5 mb-12">
          {teachingMethod.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="relative p-6 rounded-2xl glass-card border border-blue-500/20 hover:border-blue-400/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-amber-300 font-mono">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:text-amber-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-black tracking-wide text-white uppercase mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-bold text-amber-400 mb-3">
                    {item.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Step {idx + 1} of 5
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            whatsappType="demo"
            variant="whatsapp"
            size="md"
            trackingEvent="teaching_method_whatsapp_click"
          >
            EXPERIENCE THIS TEACHING METHOD • CHAT ON WHATSAPP
          </Button>
        </div>

      </div>
    </section>
  );
}
