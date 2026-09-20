import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function ExamSystem() {
  const steps = [
    {
      id: 'learn',
      name: 'LEARN',
      description: 'Master theorems, definitions, and core formula derivations with clear visual examples.',
      tag: 'Core Clarity',
    },
    {
      id: 'practice',
      name: 'PRACTICE',
      description: 'Solve graded NCERT exercises from fundamental applications to challenging variants.',
      tag: 'Problem Solving',
    },
    {
      id: 'doubts',
      name: 'DOUBTS',
      description: 'Live 1-on-1 doubt resolution so no confusion lingers into future chapters.',
      tag: 'Zero Gaps',
    },
    {
      id: 'test',
      name: 'TEST',
      description: 'Timed sectional assessments mirroring official board exam patterns.',
      tag: 'Assessment',
    },
    {
      id: 'analyze',
      name: 'ANALYZE',
      description: 'Pinpoint calculation slips, missed formulas, or incomplete mathematical statements.',
      tag: 'Mistake Log',
    },
    {
      id: 'revise',
      name: 'REVISE',
      description: 'Formula recall sheets and high-yield question rounds to lock in retention.',
      tag: 'Retention',
    },
    {
      id: 'exam-ready',
      name: 'EXAM READY',
      description: 'Enter the Class 10 Board exam with speed, structural precision, and calm confidence.',
      tag: 'Final Confidence',
      highlight: true,
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Complete Pipeline"
          title="From Chapter Completion to Exam Confidence"
          subtitle="How every single chapter transitions from unfamiliar concepts into reliable, exam-ready problem-solving ability."
        />

        {/* Visual Pipeline Flow Desktop */}
        <div className="hidden lg:flex items-center justify-between gap-2 mb-12 p-4 rounded-3xl bg-navy-900/60 border border-blue-500/20 shadow-xl overflow-x-auto">
          {steps.map((s, idx) => {
            const isActive = activeStep === idx;
            return (
              <React.Fragment key={s.id}>
                <button
                  onClick={() => setActiveStep(idx)}
                  className={`flex-1 p-3.5 rounded-2xl text-center transition-all cursor-pointer border ${
                    isActive
                      ? s.highlight
                        ? 'bg-amber-500 text-navy-950 font-black border-amber-300 shadow-glow-amber scale-105'
                        : 'bg-blue-600 text-white font-black border-blue-400 shadow-glow-blue scale-105'
                      : s.highlight
                      ? 'bg-amber-950/40 text-amber-300 border-amber-500/30 hover:bg-amber-900/40'
                      : 'bg-navy-950/60 text-slate-300 border-blue-500/15 hover:bg-navy-800'
                  }`}
                >
                  <div className="text-[10px] uppercase font-bold tracking-wider opacity-80">
                    Step {idx + 1}
                  </div>
                  <div className="text-sm font-extrabold mt-0.5 whitespace-nowrap">
                    {s.name}
                  </div>
                </button>

                {idx < steps.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-blue-500/40 flex-shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Active Step Details Panel (Desktop) */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="hidden lg:block p-8 rounded-3xl glass-card border border-blue-400/30 max-w-3xl mx-auto text-center mb-12"
        >
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-900/60 text-blue-300 border border-blue-500/30 mb-3 inline-block">
            {steps[activeStep].tag}
          </span>
          <h3 className="text-2xl font-black text-white mb-2">
            {steps[activeStep].name}
          </h3>
          <p className="text-slate-300 text-base leading-relaxed max-w-xl mx-auto">
            {steps[activeStep].description}
          </p>
        </motion.div>

        {/* Mobile Vertical Flow */}
        <div className="lg:hidden space-y-3 mb-10">
          {steps.map((s, idx) => (
            <div
              key={s.id}
              className={`p-4 rounded-xl border flex items-center justify-between ${
                s.highlight
                  ? 'bg-gradient-to-r from-amber-950/60 to-navy-900 border-amber-400/50 text-amber-200'
                  : 'bg-navy-900/80 border-blue-500/20 text-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-900/80 text-blue-300 font-bold text-xs flex items-center justify-center">
                  {idx + 1}
                </span>
                <div>
                  <div className="font-extrabold text-sm text-white">{s.name}</div>
                  <div className="text-xs text-slate-400">{s.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            whatsappType="program"
            variant="whatsapp"
            size="md"
            trackingEvent="exam_system_whatsapp_click"
          >
            DISCUSS THIS PREPARATION SYSTEM ON WHATSAPP
          </Button>
        </div>

      </div>
    </section>
  );
}
