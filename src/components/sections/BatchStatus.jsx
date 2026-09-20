import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Monitor, IndianRupee, Sparkles, MessageCircle } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import Button from '../ui/Button';

export default function BatchStatus() {
  const { program } = teacherConfig;

  // Resolve display values cleanly without inventing numbers
  const startDateText =
    program.batchStartDate === 'YOUR_START_DATE' || !program.batchStartDate
      ? 'Contact on WhatsApp for next batch date'
      : program.batchStartDate;

  const scheduleText =
    program.batchSchedule === 'YOUR_CLASS_SCHEDULE' || !program.batchSchedule
      ? 'Flexible weekday & weekend batches available'
      : program.batchSchedule;

  const feeText =
    program.batchFee === 'YOUR_FEE' || !program.batchFee
      ? 'Fee details available on WhatsApp'
      : program.batchFee;

  const cards = [
    {
      icon: Calendar,
      label: 'Batch Starts',
      value: startDateText,
      highlight: true,
    },
    {
      icon: Clock,
      label: 'Class Schedule',
      value: scheduleText,
    },
    {
      icon: Clock,
      label: 'Duration',
      value: program.duration,
    },
    {
      icon: Monitor,
      label: 'Mode',
      value: `${program.classMode} (Interactive Live Classes)`,
    },
    {
      icon: IndianRupee,
      label: 'Course Fee',
      value: feeText,
      accent: true,
    },
  ];

  return (
    <section id="batch-status" className="relative py-12 md:py-16 bg-navy-900/60 border-y border-blue-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Ribbon */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Admissions Open</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              3-Month Class 10 Mathematics Batch
            </h2>
          </div>

          <div>
            <Button
              whatsappType="fees"
              variant="whatsapp"
              size="md"
              trackingEvent="batch_status_whatsapp_click"
            >
              GET BATCH DETAILS ON WHATSAPP
            </Button>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`p-4 rounded-2xl border transition-all ${
                  card.accent
                    ? 'bg-gradient-to-br from-navy-800 to-navy-900 border-amber-400/40 shadow-glow-amber'
                    : 'bg-navy-900/80 border-blue-500/20'
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-blue-900/40 text-blue-400">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {card.label}
                  </span>
                </div>
                <div
                  className={`text-sm sm:text-base font-bold leading-snug ${
                    card.accent ? 'text-amber-300' : 'text-slate-100'
                  }`}
                >
                  {card.value}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
