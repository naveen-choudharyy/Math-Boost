import React from 'react';
import { BookOpen, Check } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import SectionHeading from '../ui/SectionHeading';

export default function ChapterCoverage() {
  const { chapters } = teacherConfig;

  return (
    <section id="chapters" className="relative py-10 md:py-16 border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Complete NCERT Syllabus"
          title="Class 10 Mathematics Chapters"
          subtitle="All 14 standard chapters covered with emphasis on concepts, board questions, and formula retention."
        />

        {/* Compact Chapter Pills Grid */}
        <div className="glass-panel p-5 sm:p-7 rounded-3xl border border-white/95 shadow-glass">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {chapters.map((ch, idx) => (
              <div
                key={ch}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/90 border border-slate-200/80 text-xs font-semibold text-slate-800"
              >
                <span className="w-5 h-5 rounded-md bg-blue-50 text-blue-700 font-bold text-[11px] flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <span className="truncate">{ch}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2 text-center sm:text-left">
            <span>Includes: Concept notes, NCERT questions, board pattern practice, and formula sheets.</span>
            <span className="text-[11px] italic text-slate-400">Adaptable to student's school curriculum</span>
          </div>
        </div>

      </div>
    </section>
  );
}
