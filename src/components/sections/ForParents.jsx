import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Award, Clock, Users, Eye } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function ForParents() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Structured Preparation',
      description: 'A 3-month defined syllabus roadmap with no last-minute rush or unplanned study sessions.',
    },
    {
      icon: Clock,
      title: 'Regular Practice',
      description: 'Consistent homework and problem-solving routines that instill academic discipline.',
    },
    {
      icon: HeartHandshake,
      title: 'Doubt Support',
      description: 'A supportive, patient environment where your child never hesitates to ask fundamental questions.',
    },
    {
      icon: Award,
      title: 'Exam-Oriented Revision',
      description: 'Systematic tests and time management drills aligned with the latest CBSE board pattern.',
    },
    {
      icon: Users,
      title: 'Student Discipline',
      description: 'Regular attendance tracking, accountable task completion, and dedicated learning habits.',
    },
    {
      icon: Eye,
      title: 'Progress Awareness',
      description: 'Direct communication with parents so you always know your child’s strengths and focus areas.',
    },
  ];

  return (
    <section id="parents" className="relative py-16 md:py-24 bg-navy-900/50 border-t border-blue-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Transparent Mentorship"
          title="For Parents"
          subtitle="Class 10 is a pivotal milestone. We partner with parents to provide a calm, disciplined, and transparent academic journey for your child."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-6 rounded-2xl glass-card border border-blue-500/20 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-900/50 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Parent CTA Card */}
        <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-navy-900 to-blue-950 border border-blue-400/30 text-center shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Have Questions About Your Child's Maths Preparation?
          </h3>
          <p className="text-sm text-slate-300 max-w-lg mx-auto mb-6">
            Message me directly on WhatsApp. I am happy to discuss their current marks, syllabus progress, and how this batch can support them.
          </p>
          <Button
            whatsappType="parent"
            variant="whatsapp"
            size="lg"
            trackingEvent="parent_section_whatsapp_click"
          >
            Talk to Me About Your Child
          </Button>
        </div>

      </div>
    </section>
  );
}
