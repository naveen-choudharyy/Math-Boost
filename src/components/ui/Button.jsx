import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../utils/whatsapp';
import { trackEvent } from '../../utils/analytics';

export default function Button({
  children,
  whatsappType,
  customMessage,
  href,
  onClick,
  variant = 'whatsapp', // 'whatsapp' | 'primary' | 'secondary' | 'amber' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon,
  className = '',
  trackingEvent = 'whatsapp_click',
  trackingData = {},
  target = '_blank',
  rel = 'noopener noreferrer',
  ...props
}) {
  const isWhatsApp = Boolean(whatsappType || variant === 'whatsapp');
  const finalHref = isWhatsApp ? getWhatsAppLink(whatsappType || customMessage) : href;

  const handleClick = (e) => {
    if (isWhatsApp) {
      trackEvent(trackingEvent, {
        button_text: typeof children === 'string' ? children : 'WhatsApp Button',
        whatsapp_type: whatsappType || 'custom',
        ...trackingData,
      });
    }
    if (onClick) {
      onClick(e);
    }
  };

  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm md:text-base gap-2',
    lg: 'px-7 py-3.5 text-base md:text-lg gap-2.5 shadow-md',
  };

  const variantStyles = {
    whatsapp:
      'bg-whatsapp text-white hover:bg-whatsapp-hover shadow-glow-whatsapp focus:ring-whatsapp font-bold',
    primary:
      'bg-brand-blue text-white hover:bg-blue-700 shadow-glow-blue focus:ring-brand-blue font-bold',
    amber:
      'bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-sm focus:ring-amber-400 font-bold',
    secondary:
      'bg-white/85 hover:bg-white text-slate-800 border border-slate-200/90 shadow-sm hover:border-slate-300 focus:ring-slate-300',
    ghost:
      'bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-transparent focus:ring-slate-300',
  };

  const chosenIcon = Icon || (isWhatsApp ? MessageCircle : null);

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (finalHref) {
    return (
      <motion.a
        href={finalHref}
        onClick={handleClick}
        target={target}
        rel={rel}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
        {...props}
      >
        {chosenIcon && <chosenIcon className={size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />}
        <span>{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      {...props}
    >
      {chosenIcon && <chosenIcon className={size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />}
      <span>{children}</span>
    </motion.button>
  );
}
