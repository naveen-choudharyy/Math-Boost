import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Info, BookOpen, CheckCircle2, Sparkles, HelpCircle } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function ChapterCoverage() {
  const { chapters } = teacherConfig;
  const [selectedUnit, setSelectedUnit] = useState('All');
  const [expandedChapter, setExpandedChapter] = useState(null);

  const units = [
    'All',
    'Algebra',
    'Geometry',
    'Trigonometry',
    'Mensuration',
    'Statistics & Probability',
    'Number Systems',
    'Coordinate Geometry',
  ];

  const filteredChapters =
    selectedUnit === 'All'
      ? chapters
      : chapters.filter((c) => c.unit.toLowerCase().includes(selectedUnit.toLowerCase()));

  const toggleChapter = (id) => {
    setExpandedChapter(expandedChapter === id ? null : id);
  };

  return (
    <section id="chapters" className="relative py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Full Syllabus Coverage"
          title="Interactive Chapter Coverage"
          subtitle="All 14 NCERT Class 10 chapters. Each chapter is approached through concepts, practice, important board questions, and revision."
        />

        {/* Filter Pills */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {units.map((unit) => (
            <button
              key={unit}
              onClick={() => setSelectedUnit(unit)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedUnit === unit
                  ? 'bg-blue-600 text-white shadow-xs font-bold'
                  : 'bg-white/80 text-slate-700 hover:text-slate-900 border border-slate-200/80'
              }`}
            >
              {unit}
            </button>
          ))}
        </div>

        {/* 14 Chapters Glass Accordion */}
        <div className="space-y-2.5 max-w-3xl mx-auto mb-8">
          {filteredChapters.map((ch) => {
            const isExpanded = expandedChapter === ch.id;
            return (
              <div
                key={ch.id}
                className="glass-card rounded-2xl border border-slate-200/80 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleChapter(ch.id)}
                  className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 font-black text-xs flex items-center justify-center flex-shrink-0">
                      {ch.id < 10 ? `0${ch.id}` : ch.id}
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {ch.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span>{ch.unit}</span>
                        <span>•</span>
                        <span className="font-semibold text-amber-600">{ch.weightage}</span>
                      </div>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      isExpanded ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="p-4 pt-2 border-t border-slate-100 bg-slate-50/60 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 py-1">
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200/60">
                        <span className="font-bold text-blue-700 block mb-0.5">Concepts</span>
                        <p className="text-slate-600">{ch.concepts}</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200/60">
                        <span className="font-bold text-emerald-700 block mb-0.5">Practice</span>
                        <p className="text-slate-600">{ch.practice}</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200/60">
                        <span className="font-bold text-amber-700 block mb-0.5">Important Questions</span>
                        <p className="text-slate-600">{ch.importantQuestions}</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200/60">
                        <span className="font-bold text-purple-700 block mb-0.5">Revision</span>
                        <p className="text-slate-600">{ch.revision}</p>
                      </div>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-slate-200/70 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500">Want focused help on {ch.title}?</span>
                      <Button
                        customMessage={`Hi Naveen, I have a question regarding chapter ${ch.title} in Class 10 Maths.`}
                        variant="ghost"
                        size="sm"
                        className="text-xs text-blue-700 hover:text-blue-900"
                      >
                        Ask on WhatsApp →
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Syllabus Note */}
        <div className="max-w-xl mx-auto flex items-center justify-center gap-2 p-3 rounded-xl bg-white/70 border border-slate-200/70 text-xs text-slate-600 text-center mb-8 shadow-xs">
          <Info className="w-4 h-4 text-blue-600 flex-shrink-0" />
          <span>Syllabus may be adapted according to the student's board/school syllabus.</span>
        </div>

        <div className="text-center">
          <Button
            whatsappType="program"
            variant="whatsapp"
            size="md"
            trackingEvent="chapters_section_whatsapp_click"
          >
            DISCUSS CHAPTER SCHEDULE ON WHATSAPP
          </Button>
        </div>

      </div>
    </section>
  );
}
