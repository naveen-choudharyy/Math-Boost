import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function PainPoints() {
  const { studentProblems } = teacherConfig;

  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Common Class 10 Challenges"
          title="Does This Sound Familiar?"
          subtitle="Most Class 10 students struggle not because Maths is impossible, but because they are practicing without a structured method."
        />

        {/* 6 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {studentProblems.map((prob, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl glass-card glass-card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-red-900/30 border border-red-500/30 flex items-center justify-center flex-shrink-0 text-red-400">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <p className="text-base sm:text-lg font-bold text-slate-100 italic leading-snug">
                    "{prob.quote}"
                  </p>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed pl-11">
                  {prob.insight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bridge to Solution & CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950/80 via-navy-900 to-indigo-950/80 border border-blue-400/30 shadow-2xl text-center max-w-4xl mx-auto"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-3">
            That's exactly why this 3-month program is structured around understanding + practice + revision.
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            Eliminate exam anxiety with a clear roadmap. We identify your individual stumbling blocks and replace guesswork with systematic problem-solving methods.
          </p>
          <Button
            whatsappType="program"
            variant="whatsapp"
            size="lg"
            trackingEvent="pain_points_whatsapp_click"
          >
            DISCUSS YOUR PREPARATION ON WHATSAPP
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
