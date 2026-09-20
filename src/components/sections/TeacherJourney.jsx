import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, GraduationCap, Users } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import SectionHeading from '../ui/SectionHeading';
import StatBadge from '../ui/StatBadge';
import Button from '../ui/Button';

export default function TeacherJourney() {
  const { credentials } = teacherConfig;

  return (
    <section id="about" className="relative py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Honest Background"
          title="I've Been on the Same Side of the Exam."
          subtitle="Preparing for Class 10 Mathematics is not about memorizing shortcuts. It is about building a reliable problem-solving method."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          
          {/* Credentials Grid */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="grid grid-cols-2 gap-3">
              <StatBadge
                score={credentials.class10Maths}
                label="Class 10 Maths"
                sublabel="Board Exam"
                highlight={true}
              />
              <StatBadge
                score={credentials.class10Overall}
                label="Class 10 Overall"
                sublabel="Aggregate Score"
              />
              <StatBadge
                score={credentials.class12Maths}
                label="Class 12 Maths"
                sublabel="Mathematics"
              />
              <StatBadge
                score={`CGPA ${credentials.currentCGPA}`}
                label="B.Tech Data Science"
                sublabel="Bennett University"
                highlight={true}
              />
            </div>

            <div className="p-3.5 rounded-2xl glass-card border border-slate-200/80 text-xs text-slate-700 flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <div>
                <span className="font-bold text-slate-900 block">{credentials.degree}</span>
                <span className="text-slate-500">{credentials.university}</span>
              </div>
            </div>
          </div>

          {/* Honest Story & Parent Peace of Mind */}
          <div className="lg:col-span-7 space-y-4 text-slate-700 text-sm leading-relaxed glass-panel p-6 sm:p-7 rounded-3xl border border-white/90 shadow-glass">
            <p className="font-semibold text-slate-900 text-base">
              When I was preparing for Class 10, I experienced the same hurdles many students face: feeling comfortable while listening in class, but making silly calculation errors during exams or getting stuck on multi-step problems.
            </p>

            <p>
              What helped me achieve <strong className="text-blue-700">98/100 in Class 10 Maths</strong> and <strong className="text-blue-700">95/100 in Class 12 Maths</strong> was focusing on three simple habits:
            </p>

            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Concept First:</strong> Grasping the formula derivation before attempting exercises.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Mistake Logs:</strong> Identifying exactly where calculation errors happen to eliminate them.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Board Presentation:</strong> Writing step-by-step solutions aligned with board marking criteria.</span>
              </li>
            </ul>

            <div className="pt-2 border-t border-slate-200/70 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-xs font-semibold text-slate-500">
                Parents are welcome to message directly about their child.
              </span>
              <Button
                whatsappType="parent"
                variant="whatsapp"
                size="sm"
                trackingEvent="parent_section_whatsapp_click"
              >
                Talk to Me About Your Child
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
