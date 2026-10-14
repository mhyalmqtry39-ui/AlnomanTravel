import React, { useState } from 'react';
import { Phone, Menu, X, Globe, Shield, CalendarCheck } from 'lucide-react';
import { Language } from '../types';
import { COMPANY_PHONE, COMPANY_PHONE_DISPLAY } from '../data/content';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenBooking: () => void;
  onOpenDesignDoc: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenBooking,
  onOpenDesignDoc,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAr = lang === 'ar';

  const navLinks = [
    { href: '#home', label: isAr ? 'الرئيسية' : 'Home' },
    { href: '#services', label: isAr ? 'خدماتنا' : 'Services' },
    { href: '#routes', label: isAr ? 'خطوط السير' : 'Routes' },
    { href: '#fleet', label: isAr ? 'الأسطول' : 'Fleet' },
    { href: '#why-us', label: isAr ? 'لماذا نحن' : 'Why Us' },
    { href: '#contact', label: isAr ? 'اتصل بنا' : 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#061122]/90 backdrop-blur-md border-b border-blue-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a href="#home" className="flex items-center gap-3 shrink-0 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-950 flex items-center justify-center text-white shadow-lg shadow-blue-900/30 border border-blue-400/20 group-hover:border-blue-400/50 transition-all">
            <span className="font-bold text-lg tracking-wider">ن</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight whitespace-nowrap">
              {isAr ? 'النعمان للسفريات' : 'Al-Noaman Travel'}
            </span>
            <span className="text-[11px] text-blue-300 font-medium tracking-wide">
              {isAr ? 'والسياحة · نقل بري داخلي' : 'Tourism & Domestic Transport'}
            </span>
          </div>
        </a>

        {/* Zone 2: Concise Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline decoration-blue-500 underline-offset-8"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenDesignDoc}
            className="text-xs text-blue-400 hover:text-blue-300 bg-blue-950/60 border border-blue-800/60 px-2.5 py-1 rounded-md transition-colors whitespace-nowrap"
            title={isAr ? 'عرض وثيقة التصميم ونظام الألوان' : 'View UX & Design Specifications'}
          >
            {isAr ? 'دليل التصميم (UX/UI)' : 'Design Guide'}
          </button>
        </nav>

        {/* Zone 3: 1 Primary CTA Button + Language Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap"
            aria-label="Toggle Language"
          >
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            <span>{isAr ? 'English' : 'عربي'}</span>
          </button>

          <a
            href={`tel:${COMPANY_PHONE}`}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-blue-200 bg-blue-950/80 hover:bg-blue-900 border border-blue-700/50 rounded-lg transition-colors whitespace-nowrap"
            title="Call Al-Noaman Travel"
          >
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span dir="ltr">{COMPANY_PHONE_DISPLAY}</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 shadow-lg shadow-emerald-900/30 rounded-lg transition-all active:scale-95 whitespace-nowrap shrink-0"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>{isAr ? 'احجز رحلتك' : 'Book a Trip'}</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07152b] border-b border-blue-900/60 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-slate-200 hover:text-white hover:bg-blue-950/60 rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-blue-900/40 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDesignDoc();
              }}
              className="w-full text-right py-2 px-3 text-xs text-blue-300 hover:bg-blue-950/60 rounded-lg flex items-center justify-between"
            >
              <span>{isAr ? 'دليل التصميم والهوية البصرية (UX/UI)' : 'UX/UI Wireframe & Design Specs'}</span>
              <Shield className="w-4 h-4 text-blue-400" />
            </button>
            <a
              href={`tel:${COMPANY_PHONE}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-blue-900/80 hover:bg-blue-800 rounded-lg"
            >
              <Phone className="w-4 h-4 text-blue-300" />
              <span>{isAr ? 'اتصل المباشر:' : 'Call Direct:'} {COMPANY_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
