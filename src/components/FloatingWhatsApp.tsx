import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { Language } from '../types';
import { COMPANY_PHONE, COMPANY_PHONE_DISPLAY, COMPANY_WHATSAPP_LINK } from '../data/content';

interface FloatingWhatsAppProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang, onOpenBooking }) => {
  const isAr = lang === 'ar';
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 left-6 rtl:left-6 ltr:right-6 z-40 flex flex-col items-start rtl:items-start ltr:items-end gap-3 select-none">
      
      {/* Tooltip Card (Dismissable) */}
      {showTooltip && (
        <div className="bg-[#091b36] border border-emerald-500/40 rounded-2xl p-3.5 shadow-2xl shadow-black/80 max-w-[240px] animate-in fade-in slide-in-from-bottom-2 text-xs relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 left-2 rtl:left-2 ltr:right-2 text-slate-400 hover:text-white p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1 text-emerald-400 font-extrabold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{isAr ? 'حجز فوري مباشر' : 'Instant WhatsApp Desk'}</span>
          </div>
          
          <p className="text-slate-200 leading-snug">
            {isAr
              ? 'تواصل معنا مباشرة عبر الواتساب للحجز أو الاستفسار السريع.'
              : 'Direct chat with our booking dispatcher available 24/7.'}
          </p>
        </div>
      )}

      {/* Floating Buttons Group */}
      <div className="flex items-center gap-2">
        <a
          href={COMPANY_WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/80 hover:scale-110 active:scale-95 transition-all ring-4 ring-emerald-900/30 group"
          aria-label="WhatsApp Al-Noaman Travel"
          title={isAr ? 'محادثة واتساب سريعة: +967 775095966' : 'WhatsApp Al-Noaman: +967 775095966'}
        >
          <MessageCircle className="w-7 h-7 fill-current group-hover:rotate-12 transition-transform" />
        </a>
      </div>

    </div>
  );
};
