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
    <section className="relative py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Batch Inclusions"
          title="What Students Will Get"
          subtitle="A complete, focused set of resources and mentorship built for Class 10 Board exam success."
        />

        {/* 10 Clean Frosted Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-10">
          {deliverables.map((item, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="glass-card p-4 sm:p-5 rounded-2xl border border-slate-200/80 hover:bg-white transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-2.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-2.5 mt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-blue-600">
                  <span>Included</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                </div>
              </motion.div>
            );
          })}
        </div>

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
