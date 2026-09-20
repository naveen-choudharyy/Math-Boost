import React from 'react';
import { Sigma, MessageCircle } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import Button from '../ui/Button';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { teacherName, roleTitle, tagline, displayPhone } = teacherConfig;

  return (
    <footer className="relative bg-white/70 backdrop-blur-xl border-t border-slate-200/80 pt-10 pb-20 md:pb-10 text-slate-600 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200/70 text-center sm:text-left">
          
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Sigma className="w-3.5 h-3.5 text-amber-300" />
              </div>
              <span className="text-base font-black text-slate-900 uppercase">
                {teacherName}
              </span>
            </div>
            <p className="text-slate-500 font-medium">
              {roleTitle} • 3-Month Class 10 Exam Preparation Batch
            </p>
          </div>

          <div>
            <Button
              whatsappType="default"
              variant="whatsapp"
              size="sm"
              trackingEvent="footer_whatsapp_click"
            >
              WhatsApp: {displayPhone}
            </Button>
          </div>

        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-400 text-[11px] text-center sm:text-left">
          <p>© {currentYear} {teacherName}. All rights reserved.</p>
          <p>Bennett University, Greater Noida</p>
        </div>
      </div>
    </footer>
  );
}
