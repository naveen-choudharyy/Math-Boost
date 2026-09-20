import React from 'react';
import { motion } from 'framer-motion';

export default function StatBadge({ score, label, sublabel, highlight = false }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`relative p-4 sm:p-5 rounded-2xl transition-all duration-300 ${
        highlight
          ? 'bg-gradient-to-br from-blue-900/60 to-navy-900/90 border-2 border-blue-400/50 shadow-glow-blue'
          : 'bg-navy-900/70 border border-blue-500/20'
      } backdrop-blur-md text-center`}
    >
      <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans">
        <span className={highlight ? 'text-amber-400' : 'text-blue-400'}>{score}</span>
      </div>
      <div className="mt-1 text-xs sm:text-sm font-bold text-slate-200">{label}</div>
      {sublabel && (
        <div className="mt-0.5 text-[11px] sm:text-xs text-slate-400 font-medium">
          {sublabel}
        </div>
      )}
    </motion.div>
  );
}
