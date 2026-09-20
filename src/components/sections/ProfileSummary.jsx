import React from 'react';
import { GraduationCap, CheckCircle2, ShieldCheck } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import SectionHeading from '../ui/SectionHeading';

export default function ProfileSummary() {
  const { credentials, teacherName, roleTitle, teacherPhoto, displayPhone } = teacherConfig;

  return (
    <section id="about" className="relative py-10 md:py-16 border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Tutor Profile & Credentials"
          title="About Naveen Choudhary"
          subtitle="All qualifications, board scores, and personal teaching approach."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-7 lg:gap-10 items-center glass-panel p-6 sm:p-8 rounded-3xl border border-white/95 shadow-glass">
          
          {/* Big Real Photo on Left */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-xs sm:max-w-sm rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-[4/5] relative shadow-md">
              <img
                src={teacherPhoto}
                alt={teacherName}
                className="w-full h-full object-cover object-top"
              />

              {/* Verified Badge Overlay */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200/80 flex items-center justify-between text-xs shadow-xs">
                <span className="text-slate-800 font-bold">{roleTitle}</span>
                <span className="text-blue-700 font-black flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  Verified
                </span>
              </div>
            </div>
          </div>

          {/* All Credentials & Summary on Right */}
          <div className="md:col-span-7 space-y-4">
            <div>
              <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 mb-1.5">
                Academic Background
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                {teacherName}
              </h3>
              <p className="text-sm font-semibold text-blue-600">
                {roleTitle}
              </p>
            </div>

            {/* University & Degree */}
            <div className="p-3 rounded-xl bg-white border border-slate-200/80 flex items-center gap-2.5 shadow-xs">
              <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-bold text-slate-900 block">{credentials.degree}</span>
                <span className="text-slate-500">{credentials.university}</span>
              </div>
            </div>

            {/* 4 Score Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div className="p-2.5 rounded-xl bg-blue-50/90 border border-blue-200 text-center">
                <div className="text-xl sm:text-2xl font-black text-blue-700 font-sans">
                  {credentials.class10Maths}
                </div>
                <div className="text-[11px] font-bold text-slate-800">Class 10 Maths</div>
                <div className="text-[10px] text-slate-500">Board Exam</div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-slate-900 font-sans">
                  {credentials.class10Overall}
                </div>
                <div className="text-[11px] font-bold text-slate-800">Class 10 Overall</div>
                <div className="text-[10px] text-slate-500">Aggregate</div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-slate-900 font-sans">
                  {credentials.class12Maths}
                </div>
                <div className="text-[11px] font-bold text-slate-800">Class 12 Maths</div>
                <div className="text-[10px] text-slate-500">Mathematics</div>
              </div>

              <div className="p-2.5 rounded-xl bg-amber-50/90 border border-amber-200 text-center">
                <div className="text-xl sm:text-2xl font-black text-amber-700 font-sans">
                  {credentials.currentCGPA}
                </div>
                <div className="text-[11px] font-bold text-slate-800">Current CGPA</div>
                <div className="text-[10px] text-slate-500">Bennett Univ</div>
              </div>
            </div>

            {/* Teaching Philosophy */}
            <div className="space-y-1.5 text-xs text-slate-700 leading-relaxed border-t border-slate-200/70 pt-3">
              <p className="font-semibold text-slate-900 text-xs">
                "I've been on the same side of the board exam. What took my Maths score to 98/100 was three core practices:"
              </p>
              
              <ul className="space-y-1 text-slate-600 text-[11px] sm:text-xs">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span><strong>Concept First:</strong> Understanding why formulas work before attempting problems.</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span><strong>Mistake Logs:</strong> Tracking calculation errors and signs to eliminate repeated slips.</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span><strong>Board Presentation:</strong> Step-by-step writing aligned with CBSE marking schemes.</span>
                </li>
              </ul>
            </div>

            {/* Note for Parents with Phone Number */}
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600">
              <span className="font-bold text-slate-900">For Parents: </span>
              Transparent progress updates and structured guidance. Reach out directly on WhatsApp at <strong className="text-blue-700">{displayPhone}</strong>.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
