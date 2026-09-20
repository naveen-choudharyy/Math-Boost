import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  ListOrdered,
  FileCheck2,
  HelpCircle,
  Sparkles,
  RefreshCw,
  FileText,
  Search,
  Compass,
  UserCheck,
} from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function Deliverables() {
  const { deliverables } = teacherConfig;

  // Icon mapping for each deliverable item
  const iconMap = [
    BookOpen,
    ListOrdered,
    FileCheck2,
    HelpCircle,
    Sparkles,
    RefreshCw,
    FileText,
    Search,
    Compass,
    UserCheck,
  ];

  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Complete Deliverables"
          title="What Students Will Get"
          subtitle="Everything you need to master Class 10 Mathematics under one disciplined, personal tutoring program."
        />

        {/* 10 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mb-12">
          {deliverables.map((item, index) => {
            const IconComponent = iconMap[index % iconMap.length];
            return (
              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="p-5 rounded-2xl glass-card glass-card-hover flex flex-col justify-between border border-blue-500/15"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-900/50 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3.5 shadow-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-semibold text-blue-400">
                  <span>Included</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Deliverable Call to Action */}
        <div className="text-center">
          <Button
            whatsappType="program"
            variant="whatsapp"
            size="md"
            trackingEvent="deliverables_whatsapp_click"
          >
            ENROLL IN THE 3-MONTH BATCH ON WHATSAPP
          </Button>
        </div>

      </div>
    </section>
  );
}
