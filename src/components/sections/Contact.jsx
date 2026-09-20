import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import { teacherConfig } from '../../config/teacher';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function Contact() {
  const { whatsappNumber, email, instagram, youtube } = teacherConfig;

  // Helpers to check if social links are actually configured
  const isEmailConfigured = email && email !== 'YOUR_EMAIL' && email.includes('@');
  const isInstaConfigured = instagram && instagram !== 'YOUR_INSTAGRAM' && instagram.length > 5;
  const isYoutubeConfigured = youtube && youtube !== 'YOUR_YOUTUBE' && youtube.length > 5;

  return (
    <section id="contact" className="relative py-16 md:py-20 bg-navy-900/40 border-t border-blue-500/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <SectionHeading
          badge="Direct Communication"
          title="Let's Talk About Your Preparation."
          subtitle="Get in touch directly. Whether you are a student ready to start or a parent seeking guidance, I am here to assist."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 text-left">
          {/* WhatsApp Primary Card */}
          <div className="p-5 rounded-2xl glass-card border border-emerald-500/30 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Primary Channel
              </span>
              <h3 className="text-base font-bold text-white mt-1">WhatsApp</h3>
              <p className="text-xs text-slate-300 mt-1">
                Fastest response for doubts, batch dates & fees.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800">
              <Button
                whatsappType="hero"
                variant="whatsapp"
                size="sm"
                className="w-full text-xs"
                trackingEvent="contact_card_whatsapp_click"
              >
                CHAT ON WHATSAPP
              </Button>
            </div>
          </div>

          {/* Email Card (Only if configured or clean prompt) */}
          {isEmailConfigured && (
            <div className="p-5 rounded-2xl glass-card border border-blue-500/20 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Email
                </span>
                <h3 className="text-base font-bold text-white mt-1 truncate">
                  {email}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  For detailed queries and schedules.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-400 hover:text-blue-300"
                >
                  <span>Send Email</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}

          {/* Instagram Card (Only if configured) */}
          {isInstaConfigured && (
            <div className="p-5 rounded-2xl glass-card border border-blue-500/20 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Instagram
                </span>
                <h3 className="text-base font-bold text-white mt-1">Updates</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Tips, problem breakdowns, and batch announcements.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800">
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-purple-400 hover:text-purple-300"
                >
                  <span>Follow on Instagram</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}

          {/* YouTube Card (Only if configured) */}
          {isYoutubeConfigured && (
            <div className="p-5 rounded-2xl glass-card border border-blue-500/20 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-500/30 flex items-center justify-center text-red-400 mb-3">
                  <Youtube className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  YouTube
                </span>
                <h3 className="text-base font-bold text-white mt-1">Lessons</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Mathematical concepts and walkthroughs.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800">
                <a
                  href={youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-red-400 hover:text-red-300"
                >
                  <span>Watch on YouTube</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
