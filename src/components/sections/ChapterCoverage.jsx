import React, { useState } from 'react';
import { ChevronDown, Info } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import SectionHeading from '../ui/SectionHeading';

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
    <section id="chapters" className="relative py-14 md:py-20 border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Complete Curriculum"
          title="Class 10 Syllabus Overview"
          subtitle="All 14 standard chapters covered with emphasis on NCERT mastery, important board questions, and formula retention."
        />

        {/* Unit Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto pb-2 mb-6 no-scrollbar">
          {units.map((unit) => (
            <button
              key={unit}
              onClick={() => setSelectedUnit(unit)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedUnit === unit
                  ? 'bg-blue-600 text-white shadow-xs font-bold'
                  : 'bg-white/80 text-slate-600 hover:text-slate-900 border border-slate-200/80'
              }`}
            >
              {unit}
            </button>
          ))}
        </div>

        {/* Clean, Compact Chapter Accordion */}
        <div className="space-y-2 max-w-3xl mx-auto mb-6">
          {filteredChapters.map((ch) => {
            const isExpanded = expandedChapter === ch.id;
            return (
              <div
                key={ch.id}
                className="glass-card rounded-xl border border-slate-200/80 overflow-hidden"
              >
                <button
                  onClick={() => toggleChapter(ch.id)}
                  className="w-full p-3.5 flex items-center justify-between text-left focus:outline-none hover:bg-slate-50/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center flex-shrink-0">
                      {ch.id}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {ch.title}
                      </h3>
                      <div className="flex items-center gap-2 text-[11px] text-slate-500">
                        <span>{ch.unit}</span>
                        <span>•</span>
                        <span className="text-amber-700 font-semibold">{ch.weightage}</span>
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
                  <div className="px-4 pb-3.5 pt-1 border-t border-slate-100 bg-slate-50/50 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      <div>
                        <span className="font-bold text-blue-700 block text-[11px]">Core Concepts:</span>
                        <p className="text-slate-600 leading-relaxed">{ch.concepts}</p>
                      </div>
                      <div>
                        <span className="font-bold text-amber-700 block text-[11px]">Board Focus Questions:</span>
                        <p className="text-slate-600 leading-relaxed">{ch.importantQuestions}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Syllabus Note */}
        <div className="max-w-lg mx-auto flex items-center justify-center gap-2 p-2.5 rounded-xl bg-white/70 border border-slate-200/70 text-xs text-slate-600 text-center shadow-xs">
          <Info className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
          <span>Syllabus may be adapted according to the student's specific school or board curriculum.</span>
        </div>

      </div>
    </section>
  );
}
