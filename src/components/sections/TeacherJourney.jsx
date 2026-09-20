import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap, Target, CheckCircle } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import SectionHeading from '../ui/SectionHeading';
import StatBadge from '../ui/StatBadge';
import Button from '../ui/Button';

export default function TeacherJourney() {
  const { credentials, teacherName } = teacherConfig;

  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Credibility & Background"
          title="I've Been on the Same Side of the Exam."
          subtitle="Real exam preparation isn't about magical shortcuts. It is about knowing exactly how marks are earned in board evaluations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-6xl mx-auto mb-12">
          
          {/* Left Stats Grid */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-2 gap-3.5">
              <StatBadge
                score={credentials.class10Maths}
                label="Class 10 Mathematics"
                sublabel="Board Examination"
                highlight={true}
              />
              <StatBadge
                score={credentials.class10Overall}
                label="Class 10 Aggregate"
                sublabel="Overall Percentage"
              />
              <StatBadge
                score={credentials.class12Maths}
                label="Class 12 Mathematics"
                sublabel="Senior Secondary"
              />
              <StatBadge
                score={`CGPA ${credentials.currentCGPA}`}
                label="B.Tech Data Science"
                sublabel="Bennett University"
                highlight={true}
              />
            </div>

            <div className="p-4 rounded-2xl bg-navy-900/80 border border-blue-500/20 text-xs text-slate-300 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-amber-400 flex-shrink-0" />
              <div>
                <span className="font-bold text-white block">{credentials.degree}</span>
                <span className="text-slate-400">{credentials.university}</span>
              </div>
            </div>
          </div>

          {/* Right Honest Narrative */}
          <div className="lg:col-span-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p className="font-medium text-white text-base sm:text-lg">
              When I was preparing for my Class 10 Board Examinations, I experienced the exact same anxieties students face today: feeling confident during textbook reading, but freezing when facing unfamiliar question formats or making careless calculation slips.
            </p>

            <p>
              What transformed my Mathematics score from average to <strong className="text-amber-300">98/100 in Class 10</strong> and <strong className="text-blue-300">95/100 in Class 12</strong> wasn't studying 10 hours a day. It was developing a reliable method:
            </p>

            <ul className="space-y-2.5 py-1 text-slate-200">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                <span><strong>Concept First:</strong> Never jumping to exercises before understanding the geometric or algebraic intuition.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                <span><strong>Mistake Logs:</strong> Tracking exactly why and where a mark was lost instead of blindly doing 50 more questions.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                <span><strong>Board Presentation:</strong> Writing solutions in the precise step-by-step format examiners look for in the marking scheme.</span>
              </li>
            </ul>

            <p>
              Currently pursuing my B.Tech in Computer Science and Engineering (Data Science) at Bennett University with an 8.87 CGPA, I bring analytical clarity, patience, and structured mentorship to every class.
            </p>

            <div className="pt-2">
              <Button
                whatsappType="hero"
                variant="whatsapp"
                size="md"
                trackingEvent="about_section_whatsapp_click"
              >
                CONNECT WITH NAVEEN ON WHATSAPP
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
