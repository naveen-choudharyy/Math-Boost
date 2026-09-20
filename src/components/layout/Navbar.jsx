import React, { useState, useEffect } from 'react';
import { Menu, X, Sigma } from 'lucide-react';
import Button from '../ui/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Batch Info', href: '#batch-status' },
    { label: '3-Month Plan', href: '#timeline' },
    { label: 'Method', href: '#teaching' },
    { label: 'Syllabus', href: '#chapters' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-slate-200/80 py-3 shadow-xs'
          : 'bg-white/50 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Naveen Maths"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 border border-blue-500/20 flex items-center justify-center text-white shadow-glow-blue group-hover:scale-105 transition-transform">
              <Sigma className="w-5 h-5 text-amber-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-wider text-slate-900 uppercase leading-none font-sans">
                NAVEEN
              </span>
              <span className="text-xs font-black tracking-widest text-blue-600 uppercase leading-none mt-1">
                MATHS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100/70 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop WhatsApp Action */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              whatsappType="enrollment"
              size="sm"
              variant="whatsapp"
              trackingEvent="navbar_whatsapp_click"
            >
              Enroll on WhatsApp
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 border-b border-slate-200/80 px-4 pt-3 pb-6 shadow-xl backdrop-blur-xl">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-base font-semibold text-slate-800 hover:text-blue-600 hover:bg-blue-50/70 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-200/80">
              <Button
                whatsappType="enrollment"
                size="md"
                variant="whatsapp"
                className="w-full justify-center"
                trackingEvent="mobile_nav_whatsapp_click"
                onClick={() => setIsOpen(false)}
              >
                Enroll on WhatsApp
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
