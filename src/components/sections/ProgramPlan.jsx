import React from 'react';
import { Calendar, Clock, Monitor, IndianRupee, Check, ArrowRight } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import SectionHeading from '../ui/SectionHeading';

export default function ProgramPlan() {
  const { timeline, teachingMethod } = teacherConfig;

  return (
    <section id="program" className="relative py-10 md:py-16 border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="3-Month Roadmap"
          title="Program Structure & Teaching Method"
          subtitle="A focused 3-phase journey from fundamental concepts to board exam readiness."
        />

        {/* 3-Month Plan Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {timeline.map((phase, idx) => (
            <div
              key={phase.month}
              className="glass-panel p-5 rounded-2xl border border-white/95 shadow-glass flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-blue-600 text-white">
                    {phase.month}
                  </span>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-full">
                    {phase.tag}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-slate-900 mb-1">
                  {phase.title}
                </h3>
                <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                  {phase.description}
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-100 text-[10px] font-semibold text-slate-400">
                Phase {idx + 1} of 3
              </div>
            </div>
          ))}
        </div>

        {/* 5-Step Teaching Framework (Compact Bar) */}
        <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/95 shadow-glass mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 text-center sm:text-left">
            5-Step Teaching Framework:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
            {teachingMethod.map((item) => (
              <div key={item.step} className="p-3 rounded-xl bg-white border border-slate-200/70 text-left">
                <span className="text-xs font-black text-blue-600 font-mono block">
                  {item.step}
                </span>
                <span className="text-xs font-black text-slate-900 block mt-0.5">
                  {item.title}
                </span>
                <span className="text-[11px] text-slate-500 block leading-tight mt-0.5">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Batch Info Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
          <div className="p-2.5 rounded-xl bg-white/80 border border-slate-200/80">
            <span className="text-slate-500 block text-[10px] uppercase font-bold">Duration</span>
            <span className="font-bold text-slate-900">3 Months</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/80 border border-slate-200/80">
            <span className="text-slate-500 block text-[10px] uppercase font-bold">Mode</span>
            <span className="font-bold text-slate-900">Online Live Classes</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/80 border border-slate-200/80">
            <span className="text-slate-500 block text-[10px] uppercase font-bold">Coverage</span>
            <span className="font-bold text-slate-900">Full Class 10 NCERT</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/80 border border-slate-200/80">
            <span className="text-slate-500 block text-[10px] uppercase font-bold">Doubt Solving</span>
            <span className="font-bold text-emerald-700">Live 1-on-1 Support</span>
          </div>
        </div>

      </div>
    </section>
  );
}
