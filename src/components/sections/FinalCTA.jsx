import React from 'react';
import { Sparkles } from 'lucide-react';
import Button from '../ui/Button';

export default function FinalCTA() {
  return (
    <section className="relative py-16 md:py-20 border-t border-slate-200/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/95 shadow-glass">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wide mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>3 Months. One Clear Plan. Consistent Practice.</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3">
            Your Mathematics Preparation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Starts Here.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto mb-7 leading-relaxed">
            Have questions about the batch, schedule, fees or preparation plan? Message me directly on WhatsApp. I'll help you understand the program before you decide.
          </p>

          {/* Single Clean WhatsApp CTA */}
          <div className="flex justify-center">
            <Button
              whatsappType="enrollment"
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto px-8 py-3.5 text-base shadow-md"
              trackingEvent="final_cta_enroll_whatsapp_click"
            >
              ENQUIRE / ENROLL ON WHATSAPP
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
