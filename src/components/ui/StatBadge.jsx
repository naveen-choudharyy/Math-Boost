import React from 'react';
import { motion } from 'framer-motion';

export default function StatBadge({ score, label, sublabel, highlight = false }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className={`p-4 sm:p-5 rounded-2xl transition-all duration-200 text-center glass-card ${
        highlight
          ? 'border-blue-300/80 bg-white/90 shadow-glass'
          : 'border-slate-200/80 bg-white/75'
      }`}
    >
      <div className="text-2xl sm:text-3xl font-black tracking-tight font-sans">
        <span className={highlight ? 'text-blue-600' : 'text-slate-900'}>{score}</span>
      </div>
      <div className="mt-1 text-xs sm:text-sm font-bold text-slate-800">{label}</div>
      {sublabel && (
        <div className="mt-0.5 text-[11px] sm:text-xs text-slate-500 font-medium">
          {sublabel}
        </div>
      )}
    </motion.div>
  );
}
