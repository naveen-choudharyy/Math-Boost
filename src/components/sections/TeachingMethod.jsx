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
    <section id="teaching" className="relative py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Clear Pedagogy"
          title="How I Teach Mathematics"
          subtitle="Mathematics is a 5-step thinking process. We eliminate memorization and teach how questions are actually broken down."
        />

        {/* 5-Step Frosted Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {teachingMethod.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="glass-panel p-5 rounded-2xl border border-white/90 shadow-glass flex flex-col justify-between hover:border-blue-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-blue-600 font-mono">
                      {item.step}
                    </span>
                    <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-black text-slate-900 tracking-wide uppercase mb-0.5">
                    {item.title}
                  </h3>
                  <div className="text-xs font-bold text-amber-700 mb-2">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-200/70 text-[10px] font-bold text-slate-400 uppercase">
                  Step {idx + 1} of 5
                </div>
              </motion.div>
            );
          })}
        </div>

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
