import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { getWhatsAppLink } from '../../utils/whatsapp';
import { trackEvent } from '../../utils/analytics';
import { teacherConfig } from '../../config/teacher';

export default function FloatingCTA() {
  const handleDesktopClick = () => {
    trackEvent('floating_desktop_whatsapp_click', {
      source: 'floating_desktop_widget',
    });
  };

  const handleMobileClick = () => {
    trackEvent('sticky_mobile_whatsapp_click', {
      source: 'sticky_mobile_bar',
    });
  };

  const desktopUrl = getWhatsAppLink('hero');
  const mobileUrl = getWhatsAppLink('enrollment');

  return (
    <>
      {/* Desktop Floating WhatsApp Button (bottom-right) */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-40 items-center gap-3">
        <a
          href={desktopUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDesktopClick}
          className="group relative flex items-center gap-3 bg-whatsapp text-white pl-4 pr-5 py-3 rounded-full shadow-glow-whatsapp hover:bg-whatsapp-hover transition-all duration-300 hover:scale-105"
          aria-label="Chat with Naveen on WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6 fill-white text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full"></span>
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[11px] font-semibold text-white/90 uppercase tracking-wider">
              Enquire on WhatsApp
            </span>
            <span className="text-sm font-bold text-white">
              Chat with Naveen
            </span>
          </div>
        </a>
      </div>

      {/* Mobile Bottom Sticky Bar (High Conversion) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy-950/95 backdrop-blur-md border-t border-blue-500/25 px-4 py-3 shadow-2xl">
        <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
          <div className="flex flex-col">
            <span className="text-xs font-extrabold text-white">
              Ready to Prepare?
            </span>
            <span className="text-[11px] text-blue-300 font-medium">
              3-Month Batch Admissions Open
            </span>
          </div>

          <a
            href={mobileUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMobileClick}
            className="flex-1 max-w-[210px] flex items-center justify-center gap-2 bg-whatsapp text-white font-bold py-2.5 px-4 rounded-xl shadow-glow-whatsapp text-sm active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
