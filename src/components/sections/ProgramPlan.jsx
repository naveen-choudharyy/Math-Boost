import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Monitor, IndianRupee, Check } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import SectionHeading from '../ui/SectionHeading';

export default function ProgramPlan() {
  const { program, timeline } = teacherConfig;

  const startDateText =
    program.batchStartDate === 'YOUR_START_DATE' || !program.batchStartDate
      ? 'Contact on WhatsApp for next date'
      : program.batchStartDate;

  const scheduleText =
    program.batchSchedule === 'YOUR_CLASS_SCHEDULE' || !program.batchSchedule
      ? 'Flexible weekday / weekend slots'
      : program.batchSchedule;

  const feeText =
    program.batchFee === 'YOUR_FEE' || !program.batchFee
      ? 'Details available on WhatsApp'
      : program.batchFee;

  const batchHighlights = [
    { icon: Calendar, label: 'Batch Starts', value: startDateText },
    { icon: Clock, label: 'Schedule', value: scheduleText },
    { icon: Clock, label: 'Duration', value: program.duration },
    { icon: Monitor, label: 'Mode', value: `${program.classMode} (Live Interactive)` },
    { icon: IndianRupee, label: 'Course Fee', value: feeText },
  ];

  return (
    <section id="program" className="relative py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Batch & Preparation Roadmap"
          title="3-Month Program & Schedule"
          subtitle="A structured 3-phase journey from fundamental concepts to board exam confidence."
        />

        {/* Concise Batch Info Strip */}
        <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/90 shadow-glass mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-left">
            {batchHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="p-3 rounded-xl bg-white/80 border border-slate-200/70">
                  <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                    <Icon className="w-3.5 h-3.5 text-blue-600" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">{item.label}</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {item.value}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3-Month Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {timeline.map((phase, idx) => (
            <motion.div
              key={phase.month}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="glass-panel p-6 rounded-2xl border border-white/90 shadow-glass flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-blue-600 text-white">
                    {phase.month}
                  </span>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-full">
                    {phase.tag}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
                  {phase.title}
                </h3>
                <p className="text-xs text-slate-500 mb-4 font-medium">
                  {phase.subtitle}
                </p>

                <ul className="space-y-2">
                  {phase.items.map((line, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-200/70 text-[11px] font-semibold text-slate-400">
                Phase {idx + 1} of 3
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
