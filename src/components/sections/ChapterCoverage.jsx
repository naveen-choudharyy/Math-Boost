import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ChevronDown,
  Info,
} from 'lucide-react';
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
    <section id="chapters" className="relative py-16 md:py-24 bg-navy-950/80 border-t border-blue-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Complete NCERT / Board Syllabus"
          title="Interactive Chapter Coverage"
          subtitle="Explore all 14 Class 10 Mathematics chapters. Each chapter is approached through concepts, practice, board questions, and revision."
        />

        {/* Unit Filter Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {units.map((unit) => (
            <button
              key={unit}
              onClick={() => setSelectedUnit(unit)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedUnit === unit
                  ? 'bg-brand-blue text-white shadow-glow-blue font-bold'
                  : 'bg-navy-900/80 text-slate-300 hover:text-white hover:bg-navy-800 border border-blue-500/15'
              }`}
            >
              {unit}
            </button>
          ))}
        </div>

        {/* Chapters Accordion List */}
        <div className="space-y-3.5 max-w-4xl mx-auto mb-10">
          {filteredChapters.map((ch) => {
            const isExpanded = expandedChapter === ch.id;
            return (
              <motion.div
                key={ch.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl glass-card border border-blue-500/20 overflow-hidden transition-colors hover:border-blue-400/40"
              >
                {/* Chapter Header Card */}
                <button
                  onClick={() => toggleChapter(ch.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-8 h-8 rounded-xl bg-blue-900/60 border border-blue-400/30 text-blue-300 font-extrabold text-sm flex items-center justify-center flex-shrink-0">
                      {ch.id < 10 ? `0${ch.id}` : ch.id}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {ch.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-blue-400 font-medium">
                          {ch.unit}
                        </span>
                        <span className="text-[10px] text-slate-400">•</span>
                        <span className="text-xs text-amber-400 font-medium">
                          {ch.weightage}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-slate-400 hidden sm:inline">
                      {isExpanded ? 'Hide Details' : 'View Plan'}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-blue-400' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Details: Concepts, Practice, Important Questions, Revision */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="p-5 pt-1 border-t border-slate-800/80 bg-navy-950/60 text-xs sm:text-sm"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
                      <div className="p-3 rounded-xl bg-navy-900/50 border border-blue-500/10">
                        <div className="font-bold text-blue-400 mb-1 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Concepts</span>
                        </div>
                        <p className="text-slate-300">{ch.concepts}</p>
                      </div>

                      <div className="p-3 rounded-xl bg-navy-900/50 border border-blue-500/10">
                        <div className="font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Practice</span>
                        </div>
                        <p className="text-slate-300">{ch.practice}</p>
                      </div>

                      <div className="p-3 rounded-xl bg-navy-900/50 border border-blue-500/10">
                        <div className="font-bold text-amber-400 mb-1 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Important Questions</span>
                        </div>
                        <p className="text-slate-300">{ch.importantQuestions}</p>
                      </div>

                      <div className="p-3 rounded-xl bg-navy-900/50 border border-blue-500/10">
                        <div className="font-bold text-purple-400 mb-1 flex items-center gap-1.5">
                          <HelpCircle className="w-3.5 h-3.5" />
                          <span>Revision</span>
                        </div>
                        <p className="text-slate-300">{ch.revision}</p>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <span className="text-[11px] text-slate-400 italic">
                        Want focused help on {ch.title}?
                      </span>
                      <Button
                        customMessage={`Hi Naveen, I would like to ask about chapter ${ch.title} in your 3-month Class 10 Maths batch.`}
                        variant="ghost"
                        size="sm"
                        className="text-xs text-blue-400 hover:text-white"
                      >
                        Ask About This Chapter on WhatsApp →
                      </Button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Syllabus Note */}
        <div className="max-w-2xl mx-auto flex items-center justify-center gap-2 p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/20 text-xs text-slate-300 text-center mb-8">
          <Info className="w-4 h-4 text-blue-400 flex-shrink-0" />
          <span>
            Syllabus may be adapted according to the student's board/school syllabus.
          </span>
        </div>

        {/* Chapter Section CTA */}
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
