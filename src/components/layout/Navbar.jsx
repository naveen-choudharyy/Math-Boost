import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Sigma } from 'lucide-react';
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
    { label: 'Program', href: '#batch-status' },
    { label: '3-Month Plan', href: '#timeline' },
    { label: 'Teaching', href: '#teaching' },
    { label: 'Chapters', href: '#chapters' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/90 backdrop-blur-md border-b border-blue-500/20 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group transition-transform focus:outline-none"
            aria-label="Naveen Maths - Class 10 Mathematics Tutor"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-navy-800 border border-blue-400/40 flex items-center justify-center text-white shadow-glow-blue group-hover:scale-105 transition-transform">
              <Sigma className="w-5 h-5 text-amber-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-wider text-white uppercase leading-none font-sans">
                NAVEEN
              </span>
              <span className="text-xs font-extrabold tracking-widest text-blue-400 uppercase leading-none mt-1">
                MATHS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-blue-900/30 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right WhatsApp CTA */}
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
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-navy-800/80 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-navy-950/98 border-b border-blue-500/20 px-4 pt-4 pb-6 mt-3 shadow-2xl backdrop-blur-xl animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 text-base font-semibold text-slate-200 hover:text-white hover:bg-blue-900/40 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800">
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
