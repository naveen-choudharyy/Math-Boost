import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight, UserCheck, Award } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import Button from '../ui/Button';
import StatBadge from '../ui/StatBadge';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Headlines */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Batch Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/50 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{teacherConfig.program.badge}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]"
            >
              3 Months to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">
                Exam-Ready Mathematics.
              </span>
            </motion.h1>

            {/* Supporting Headline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl"
            >
              {teacherConfig.program.tagline}
            </motion.p>

            {/* Credential Callouts (Class 10 98/100, 95.80%, Class 12 95/100) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-lg py-2"
            >
              <StatBadge
                score={teacherConfig.credentials.class10Maths}
                label="Class 10 Maths"
                sublabel="Score in Board Exam"
                highlight={true}
              />
              <StatBadge
                score={teacherConfig.credentials.class10Overall}
                label="Class 10 Overall"
                sublabel="Aggregate Score"
              />
              <StatBadge
                score={teacherConfig.credentials.class12Maths}
                label="Class 12 Maths"
                sublabel="Mathematics"
              />
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
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
                className="w-full sm:w-auto text-slate-200 hover:text-white"
              >
                VIEW 3-MONTH PLAN
              </Button>
            </motion.div>

            {/* Trust Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 pt-1"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{teacherConfig.program.trustLine}</span>
            </motion.div>
          </div>

          {/* Right Column: Teacher Credibility Profile Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-3xl p-6 sm:p-7 glass-card border border-blue-400/25 shadow-2xl overflow-hidden"
            >
              {/* Background Accent Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/15 rounded-full blur-2xl pointer-events-none"></div>

              {/* Teacher Image / Avatar Section */}
              <div className="relative mb-5 rounded-2xl overflow-hidden bg-navy-900 border border-blue-500/20 aspect-[4/3] flex items-center justify-center">
                {!imgError ? (
                  <img
                    src={teacherConfig.teacherPhoto}
                    alt={teacherConfig.teacherName}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-6 space-y-3">
                    <div className="w-20 h-20 rounded-full bg-blue-900/60 border-2 border-amber-400/60 flex items-center justify-center text-2xl font-black text-amber-400">
                      NC
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">
                        {teacherConfig.teacherName}
                      </div>
                      <div className="text-sm text-blue-300">
                        {teacherConfig.roleTitle}
                      </div>
                    </div>
                  </div>
                )}

                {/* Badge Overlay */}
                <div className="absolute bottom-3 left-3 right-3 bg-navy-950/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">Academic Tutor</span>
                  <span className="text-amber-400 font-bold">Class 10 Specialist</span>
                </div>
              </div>

              {/* Credential Details */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <span className="text-xs sm:text-sm text-slate-400 font-medium">Tutor</span>
                  <span className="text-sm sm:text-base font-bold text-white">
                    {teacherConfig.teacherName}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <span className="text-xs sm:text-sm text-slate-400 font-medium">Education</span>
                  <span className="text-xs sm:text-sm font-semibold text-blue-300 text-right">
                    {teacherConfig.credentials.degree}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <span className="text-xs sm:text-sm text-slate-400 font-medium">University</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">
                    {teacherConfig.credentials.university}
                  </span>
                </div>

                <div className="flex items-center justify-between pb-1">
                  <span className="text-xs sm:text-sm text-slate-400 font-medium">Academic Standing</span>
                  <span className="text-xs sm:text-sm font-bold text-amber-400">
                    Current CGPA: {teacherConfig.credentials.currentCGPA}
                  </span>
                </div>
              </div>

              {/* Direct WhatsApp Prompt */}
              <div className="mt-5 pt-4 border-t border-slate-800/80">
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
