import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Button from '../ui/Button';

export default function FinalCTA() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/95 shadow-glass relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-400/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-400/15 rounded-full blur-3xl pointer-events-none"></div>

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wide mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>3 Months. One Clear Plan. Consistent Practice.</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Your Mathematics Preparation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Starts Here.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mb-7 leading-relaxed">
            Have questions about the batch, schedule, fees or preparation plan? Message me directly on WhatsApp. I'll help you understand the program before you decide.
          </p>

          {/* Major CTA */}
          <div className="mb-6">
            <Button
              whatsappType="enrollment"
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto px-8 py-3.5 text-base sm:text-lg"
              trackingEvent="final_cta_enroll_whatsapp_click"
            >
              ENQUIRE / ENROLL ON WHATSAPP
            </Button>
          </div>

          {/* Quick Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 max-w-md mx-auto">
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
          </div>
        </div>

      </div>
    </section>
  );
}
