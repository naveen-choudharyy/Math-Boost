import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../utils/whatsapp';
import { trackEvent } from '../../utils/analytics';

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
      <div className="hidden md:flex fixed bottom-7 right-7 z-40 items-center gap-3">
        <a
          href={desktopUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDesktopClick}
          className="group flex items-center gap-3 bg-whatsapp text-white pl-4 pr-5 py-3 rounded-full shadow-glow-whatsapp hover:bg-whatsapp-hover transition-all duration-200 hover:scale-105"
          aria-label="Chat with Naveen on WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 fill-white text-white" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"></span>
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[10px] font-bold text-white/90 uppercase tracking-wider">
              Enquire on WhatsApp
            </span>
            <span className="text-sm font-extrabold text-white">
              Chat with Naveen
            </span>
          </div>
        </a>
      </div>

      {/* Mobile Bottom Sticky Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-xl border-t border-slate-200/90 px-4 py-2.5 shadow-lg">
        <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
          <div className="flex flex-col">
            <span className="text-xs font-black text-slate-900">
              Ready to Prepare?
            </span>
            <span className="text-[11px] text-blue-600 font-bold">
              3-Month Batch Open
            </span>
          </div>

          <a
            href={mobileUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMobileClick}
            className="flex-1 max-w-[210px] flex items-center justify-center gap-2 bg-whatsapp text-white font-bold py-2.5 px-4 rounded-xl shadow-md text-xs active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
