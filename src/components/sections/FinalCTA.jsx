import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import Button from '../ui/Button';

export default function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Urgency Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/70 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wide mb-6 shadow-glow-amber"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>3 Months. One Clear Plan. Consistent Practice.</span>
        </motion.div>

        {/* Final Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6"
        >
          Your Mathematics Preparation <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">
            Starts Here.
          </span>
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed"
        >
          Ready to start your 3-month Mathematics preparation? Have questions about the batch, schedule, fees or preparation plan? Message me directly on WhatsApp.
        </motion.p>

        {/* Major WhatsApp Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <Button
            whatsappType="enrollment"
            variant="whatsapp"
            size="lg"
            className="w-full sm:w-auto text-lg sm:text-xl px-9 py-4 shadow-2xl"
            trackingEvent="final_cta_enroll_whatsapp_click"
          >
            ENQUIRE / ENROLL ON WHATSAPP
          </Button>
        </motion.div>

        {/* Secondary Quick Inquiry Chips */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2 max-w-xl mx-auto"
        >
          <Button
            whatsappType="fees"
            variant="secondary"
            size="sm"
            className="text-xs"
            trackingEvent="final_chip_fees_click"
          >
            Ask About Fees
          </Button>
          <Button
            whatsappType="schedule"
            variant="secondary"
            size="sm"
            className="text-xs"
            trackingEvent="final_chip_schedule_click"
          >
            Ask About Schedule
          </Button>
          <Button
            whatsappType="demo"
            variant="secondary"
            size="sm"
            className="text-xs"
            trackingEvent="final_chip_demo_click"
          >
            Ask About Demo
          </Button>
        </motion.div>

        <p className="mt-8 text-xs sm:text-sm text-slate-400">
          Have a question? Message me directly. I'll help you understand the program before you decide.
        </p>

      </div>
    </section>
  );
}
