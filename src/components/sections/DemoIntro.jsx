import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, HelpCircle, Video, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function DemoIntro() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-navy-900/90 via-navy-850 to-blue-950/90 border border-blue-500/25 shadow-2xl text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-500/30 mb-4">
            <span>Direct Guidance</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3">
            Not Sure Yet? Talk to Me Before Enrolling.
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Choosing the right tutor is an important decision. Ask your specific questions, understand how classes run, or request an introductory demo session without any sales pressure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              whatsappType="hero"
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto"
              trackingEvent="demo_ask_question_whatsapp_click"
            >
              Ask a Question on WhatsApp
            </Button>

            <Button
              whatsappType="demo"
              variant="secondary"
              size="lg"
              icon={Video}
              className="w-full sm:w-auto"
              trackingEvent="demo_request_whatsapp_click"
            >
              Request a Demo Class
            </Button>
          </div>

          <p className="mt-5 text-xs text-slate-400">
            Direct 1-on-1 WhatsApp connection • No spam • Honest guidance
          </p>
        </div>

      </div>
    </section>
  );
}
