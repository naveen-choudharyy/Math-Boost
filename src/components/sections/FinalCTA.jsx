import React from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import Button from '../ui/Button';

export default function FinalCTA() {
  const { displayPhone } = teacherConfig;

  return (
    <section className="relative py-12 md:py-16 border-t border-slate-200/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/95 shadow-glass">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>3 Months. One Clear Plan. Consistent Practice.</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-2.5">
            Your Mathematics Preparation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Starts Here.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
            Message Naveen directly on WhatsApp to ask about upcoming batch slots, fees, or schedule.
          </p>

          <div className="flex justify-center">
            <Button
              whatsappType="enrollment"
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto px-7 py-3 text-sm sm:text-base shadow-md"
              trackingEvent="final_cta_enroll_whatsapp_click"
            >
              Chat on WhatsApp ({displayPhone})
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
