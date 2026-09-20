import React from 'react';
import { Sigma, ArrowUpRight } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import Button from '../ui/Button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Batch Details', href: '#batch-status' },
    { label: '3-Month Plan', href: '#timeline' },
    { label: 'Teaching Method', href: '#teaching' },
    { label: 'Chapter Syllabus', href: '#chapters' },
    { label: 'About & Credentials', href: '#about' },
    { label: 'Frequently Asked Questions', href: '#faq' },
  ];

  return (
    <footer className="relative bg-white/60 backdrop-blur-xl border-t border-slate-200/80 pt-14 pb-24 md:pb-14 text-slate-600 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-slate-200/70">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs">
                <Sigma className="w-4 h-4 text-amber-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black tracking-wider text-slate-900 uppercase leading-none font-sans">
                  {teacherConfig.teacherName}
                </span>
                <span className="text-xs font-bold text-blue-600 leading-none mt-1">
                  {teacherConfig.roleTitle}
                </span>
              </div>
            </div>
            
            <p className="text-slate-800 text-sm font-medium italic">
              "{teacherConfig.tagline}"
            </p>
            
            <p className="text-slate-600 text-sm max-w-md leading-relaxed">
              A focused 3-month Class 10 Mathematics preparation program designed to help students strengthen concepts, practice systematically, and enter board examinations with confidence.
            </p>

            <div className="pt-1">
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
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-blue-600 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Academic Credentials */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3">
              Verified Credentials
            </h3>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs">
                <div className="font-black text-blue-600 text-sm">
                  {teacherConfig.credentials.class10Maths}
                </div>
                <div className="text-slate-600 font-medium">Class 10 Mathematics</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs">
                <div className="font-bold text-slate-900 text-sm">
                  {teacherConfig.credentials.class10Overall}
                </div>
                <div className="text-slate-600 font-medium">Class 10 Overall Aggregate</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs">
                <div className="font-semibold text-slate-800">
                  {teacherConfig.credentials.degree}
                </div>
                <div className="text-slate-500">{teacherConfig.credentials.university}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {currentYear} {teacherConfig.teacherName}. All rights reserved.</p>
          <p className="text-slate-500">
            Personal Class 10 Mathematics Tuition Program
          </p>
        </div>
      </div>
    </footer>
  );
}
