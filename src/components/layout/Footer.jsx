import React from 'react';
import { Sigma, MessageCircle, ArrowUpRight } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import Button from '../ui/Button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Program Overview', href: '#batch-status' },
    { label: '3-Month Plan', href: '#timeline' },
    { label: 'Teaching Method', href: '#teaching' },
    { label: 'Chapter Syllabus', href: '#chapters' },
    { label: 'About Naveen', href: '#about' },
    { label: 'Parent Guidance', href: '#parents' },
    { label: 'Frequently Asked Questions', href: '#faq' },
  ];

  return (
    <footer className="relative bg-navy-950 border-t border-blue-500/20 pt-16 pb-24 md:pb-16 text-slate-400 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600/90 flex items-center justify-center text-white shadow-glow-blue">
                <Sigma className="w-5 h-5 text-amber-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-wider text-white uppercase leading-none font-sans">
                  {teacherConfig.teacherName}
                </span>
                <span className="text-xs font-semibold tracking-wide text-blue-400 leading-none mt-1">
                  {teacherConfig.roleTitle}
                </span>
              </div>
            </div>
            
            <p className="text-slate-300 text-sm font-medium italic">
              "{teacherConfig.tagline}"
            </p>
            
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              3-Month Class 10 Mathematics Exam Preparation Program focused on concept clarity, systematic NCERT practice, mistake analysis, and exam confidence.
            </p>

            <div className="pt-2">
              <Button
                whatsappType="default"
                variant="whatsapp"
                size="sm"
                trackingEvent="footer_whatsapp_click"
              >
                Chat Directly on WhatsApp
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Credibility Snapshot */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Academic Background
            </h3>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="p-2.5 rounded-lg bg-navy-900/60 border border-blue-500/15">
                <div className="font-bold text-amber-400 text-sm">
                  {teacherConfig.credentials.class10Maths}
                </div>
                <div className="text-slate-400">Class 10 Mathematics</div>
              </div>
              <div className="p-2.5 rounded-lg bg-navy-900/60 border border-blue-500/15">
                <div className="font-bold text-blue-400 text-sm">
                  {teacherConfig.credentials.class10Overall}
                </div>
                <div className="text-slate-400">Class 10 Overall Percentage</div>
              </div>
              <div className="p-2.5 rounded-lg bg-navy-900/60 border border-blue-500/15">
                <div className="font-bold text-slate-200">
                  {teacherConfig.credentials.degree}
                </div>
                <div className="text-slate-400">{teacherConfig.credentials.university}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {teacherConfig.teacherName}. All rights reserved.</p>
          <p className="text-slate-400">
            Personal Class 10 Mathematics Tuition Program
          </p>
        </div>
      </div>
    </footer>
  );
}
