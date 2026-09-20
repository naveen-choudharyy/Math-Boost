import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown, ShieldCheck } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Batch Pill */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-bold tracking-wide shadow-xs backdrop-blur-md mb-5"
        >
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>{teacherConfig.program.badge}</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] mb-5"
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
          className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto mb-8"
        >
          {teacherConfig.program.mainMessage}
        </motion.p>

        {/* Clean Single Conversion Touchpoint */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.22 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6"
        >
          <Button
            whatsappType="hero"
            variant="whatsapp"
            size="lg"
            trackingEvent="hero_whatsapp_click"
            className="w-full sm:w-auto px-8 py-3.5 text-base shadow-md"
          >
            ENQUIRE ON WHATSAPP
          </Button>

          <Button
            href="#about"
            variant="secondary"
            size="lg"
            icon={ArrowDown}
            className="w-full sm:w-auto text-sm"
          >
            VIEW TUTOR PROFILE & PLAN
          </Button>
        </motion.div>

        {/* Trust Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>{teacherConfig.program.trustLine}</span>
        </motion.div>

      </div>
    </section>
  );
}
