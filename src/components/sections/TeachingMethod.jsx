import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Crosshair, SearchCheck, RotateCcw, Check } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import SectionHeading from '../ui/SectionHeading';

export default function TeachingMethod() {
  const { teachingMethod, deliverables } = teacherConfig;
  const icons = [BookOpen, CheckCircle, Crosshair, SearchCheck, RotateCcw];

  return (
    <section id="teaching" className="relative py-14 md:py-20 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Teaching Framework"
          title="How I Teach Mathematics"
          subtitle="Mathematics is learned by understanding principles and consistent step-by-step practice, not by memorizing steps."
        />

        {/* 5-Step System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-12">
          {teachingMethod.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.step}
                className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/90 shadow-glass flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xl font-black text-blue-600 font-mono">
                      {item.step}
                    </span>
                    <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide mb-0.5">
                    {item.title}
                  </h3>
                  <div className="text-[11px] font-bold text-amber-700 mb-2">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] font-semibold text-slate-400 uppercase">
                  Step {idx + 1} of 5
                </div>
              </div>
            );
          })}
        </div>

        {/* What Students Get (Concise, Clean Grid) */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/90 shadow-glass">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4">
            Key Batch Inclusions:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {deliverables.map((item) => (
              <div key={item.id} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/70 border border-slate-200/60">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{item.title}</div>
                  <div className="text-[11px] text-slate-500 leading-tight mt-0.5">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
