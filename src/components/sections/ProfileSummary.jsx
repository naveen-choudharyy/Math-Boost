import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import SectionHeading from '../ui/SectionHeading';

export default function ProfileSummary() {
  const { credentials, teacherName, roleTitle, teacherPhoto } = teacherConfig;
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="relative py-14 md:py-20 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Tutor Profile & Credibility"
          title="About Naveen Choudhary"
          subtitle="All academic qualifications, board examination scores, and teaching approach in one place."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center glass-panel p-6 sm:p-10 rounded-3xl border border-white/90 shadow-glass">
          
          {/* Big Photo on Left */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-[3/4] relative shadow-md flex items-center justify-center">
              {!imgError ? (
                <img
                  src={teacherPhoto}
                  alt={teacherName}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-6 space-y-3">
                  <div className="w-20 h-20 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-2xl font-black text-white shadow-md">
                    NC
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900">{teacherName}</div>
                    <div className="text-sm font-semibold text-blue-600">{roleTitle}</div>
                  </div>
                </div>
              )}

              {/* Verified Badge Overlay */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200/80 flex items-center justify-between text-xs shadow-xs">
                <span className="text-slate-700 font-semibold">{roleTitle}</span>
                <span className="text-blue-700 font-extrabold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  Verified Score
                </span>
              </div>
            </div>
            
            <p className="text-[11px] text-slate-500 mt-2 text-center">
              Personal 1-on-1 & small batch mentoring
            </p>
          </div>

          {/* All Details Consolidated on Right */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 mb-2">
                Academic Background
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                {teacherName}
              </h3>
              <p className="text-sm sm:text-base font-semibold text-blue-600">
                {roleTitle}
              </p>
            </div>

            {/* University & Degree */}
            <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 flex items-center gap-3 shadow-xs">
              <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-bold text-slate-900 block">{credentials.degree}</span>
                <span className="text-slate-600">{credentials.university}</span>
              </div>
            </div>

            {/* 4 Score Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200/80 text-center">
                <div className="text-xl sm:text-2xl font-black text-blue-700 font-sans">
                  {credentials.class10Maths}
                </div>
                <div className="text-[11px] font-bold text-slate-800 mt-0.5">Class 10 Maths</div>
                <div className="text-[10px] text-slate-500">Board Exam</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-slate-900 font-sans">
                  {credentials.class10Overall}
                </div>
                <div className="text-[11px] font-bold text-slate-800 mt-0.5">Class 10 Overall</div>
                <div className="text-[10px] text-slate-500">Aggregate</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-slate-900 font-sans">
                  {credentials.class12Maths}
                </div>
                <div className="text-[11px] font-bold text-slate-800 mt-0.5">Class 12 Maths</div>
                <div className="text-[10px] text-slate-500">Mathematics</div>
              </div>

              <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 text-center">
                <div className="text-xl sm:text-2xl font-black text-amber-700 font-sans">
                  {credentials.currentCGPA}
                </div>
                <div className="text-[11px] font-bold text-slate-800 mt-0.5">Current CGPA</div>
                <div className="text-[10px] text-slate-500">Bennett Univ</div>
              </div>
            </div>

            {/* Teaching Philosophy / Method Note */}
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/70 pt-4">
              <p className="font-medium text-slate-800">
                "I've been on the same side of the board examination. What took my Class 10 Mathematics score to 98/100 was not memorizing textbook answers, but mastering three practical habits:"
              </p>
              
              <ul className="space-y-1.5 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Conceptual Understanding:</strong> Knowing why a formula works before starting exercises.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mistake Logs:</strong> Tracking calculation slips and sign errors so they don't repeat in exams.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Board Presentation:</strong> Structuring solutions step-by-step to match official marking criteria.</span>
                </li>
              </ul>
            </div>

            {/* Reassurance note for parents */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600">
              <span className="font-bold text-slate-800">For Parents: </span>
              Structured preparation, regular practice checks, and direct progress updates so you are always clear about your child’s development.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
