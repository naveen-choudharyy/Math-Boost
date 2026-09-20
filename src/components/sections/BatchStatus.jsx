import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Monitor, IndianRupee } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import Button from '../ui/Button';

export default function BatchStatus() {
  const { program } = teacherConfig;

  const startDateText =
    program.batchStartDate === 'YOUR_START_DATE' || !program.batchStartDate
      ? 'Contact on WhatsApp for next batch date'
      : program.batchStartDate;

  const scheduleText =
    program.batchSchedule === 'YOUR_CLASS_SCHEDULE' || !program.batchSchedule
      ? 'Flexible weekday & weekend batches'
      : program.batchSchedule;

  const feeText =
    program.batchFee === 'YOUR_FEE' || !program.batchFee
      ? 'Fee details available on WhatsApp'
      : program.batchFee;

  const cards = [
    { icon: Calendar, label: 'Batch Starts', value: startDateText, highlight: true },
    { icon: Clock, label: 'Class Schedule', value: scheduleText },
    { icon: Clock, label: 'Duration', value: program.duration },
    { icon: Monitor, label: 'Mode', value: `${program.classMode} (Live Interactive)` },
    { icon: IndianRupee, label: 'Fee', value: feeText, accent: true },
  ];

  return (
    <section id="batch-status" className="relative py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/90 shadow-glass">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Admissions Open</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">
                3-Month Class 10 Mathematics Batch
              </h2>
            </div>

            <Button
              whatsappType="fees"
              variant="whatsapp"
              size="md"
              trackingEvent="batch_status_whatsapp_click"
            >
              GET BATCH DETAILS ON WHATSAPP
            </Button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.label}
                  className={`p-4 rounded-2xl border transition-all ${
                    card.accent
                      ? 'bg-amber-50/70 border-amber-200/90'
                      : 'bg-white/80 border-slate-200/80'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      {card.label}
                    </span>
                  </div>
                  <div
                    className={`text-sm sm:text-base font-bold leading-snug ${
                      card.accent ? 'text-amber-700' : 'text-slate-900'
                    }`}
                  >
                    {card.value}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
