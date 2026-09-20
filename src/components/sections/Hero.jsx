import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import Button from '../ui/Button';
import StatBadge from '../ui/StatBadge';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero" className="relative pt-24 pb-14 md:pt-32 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Batch Badge */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-bold tracking-wide shadow-xs backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>{teacherConfig.program.badge}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]"
            >
              3 Months to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600">
                Exam-Ready Mathematics.
              </span>
            </motion.h1>

            {/* Supporting Headline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl"
            >
              {teacherConfig.program.tagline}
            </motion.p>

            {/* Verified Credential Badges */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.22 }}
              className="grid grid-cols-3 gap-2.5 sm:gap-3.5 max-w-lg py-1"
            >
              <StatBadge
                score={teacherConfig.credentials.class10Maths}
                label="Class 10 Maths"
                sublabel="Board Exam"
                highlight={true}
              />
              <StatBadge
                score={teacherConfig.credentials.class10Overall}
                label="Class 10 Overall"
                sublabel="Aggregate"
              />
              <StatBadge
                score={teacherConfig.credentials.class12Maths}
                label="Class 12 Maths"
                sublabel="Mathematics"
              />
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.28 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
            >
              <Button
                whatsappType="hero"
                variant="whatsapp"
                size="lg"
                trackingEvent="hero_whatsapp_click"
                className="w-full sm:w-auto"
              >
                ENROLL ON WHATSAPP
              </Button>

              <Button
                href="#timeline"
                variant="secondary"
                size="lg"
                icon={ArrowRight}
                className="w-full sm:w-auto"
              >
                VIEW 3-MONTH PLAN
              </Button>
            </motion.div>

            {/* Trust Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 pt-0.5"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>{teacherConfig.program.trustLine}</span>
            </motion.div>
          </div>

          {/* Right Column: Frosted Glass Profile Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/90 shadow-glass"
            >
              {/* Profile Image / Monogram Fallback */}
              <div className="relative mb-5 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-[4/3] flex items-center justify-center shadow-inner">
                {!imgError ? (
                  <img
                    src={teacherConfig.teacherPhoto}
                    alt={teacherConfig.teacherName}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-6 space-y-2">
                    <div className="w-16 h-16 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-xl font-black text-white shadow-md">
                      NC
                    </div>
                    <div>
                      <div className="text-lg font-bold text-slate-900">
                        {teacherConfig.teacherName}
                      </div>
                      <div className="text-xs font-semibold text-blue-600">
                        {teacherConfig.roleTitle}
                      </div>
                    </div>
                  </div>
                )}

                {/* Sub-badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200/80 flex items-center justify-between text-xs shadow-xs">
                  <span className="text-slate-700 font-semibold">Personal Tutor</span>
                  <span className="text-blue-700 font-extrabold">Class 10 Specialist</span>
                </div>
              </div>

              {/* Credential Details */}
              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500 font-medium">Tutor</span>
                  <span className="font-bold text-slate-900">{teacherConfig.teacherName}</span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500 font-medium">Education</span>
                  <span className="font-semibold text-blue-700 text-right">
                    {teacherConfig.credentials.degree}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500 font-medium">University</span>
                  <span className="font-semibold text-slate-700">
                    {teacherConfig.credentials.university}
                  </span>
                </div>

                <div className="flex items-center justify-between pb-1">
                  <span className="text-slate-500 font-medium">Academic Standing</span>
                  <span className="font-black text-amber-600">
                    Current CGPA: {teacherConfig.credentials.currentCGPA}
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/80">
                <Button
                  whatsappType="hero"
                  variant="whatsapp"
                  size="md"
                  className="w-full justify-center text-sm"
                  trackingEvent="teacher_card_whatsapp_click"
                >
                  Message Naveen on WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
