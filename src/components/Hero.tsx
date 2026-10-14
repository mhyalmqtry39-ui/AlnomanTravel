import React, { useState } from 'react';
import { MessageCircle, Phone, ArrowLeft, ArrowRight, ShieldCheck, MapPin, Calendar, Clock, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { ASSETS, COMPANY_PHONE, COMPANY_WHATSAPP_LINK, CITIES_AR, CITIES_EN } from '../data/content';

interface HeroProps {
  lang: Language;
  onOpenBooking: (defaults?: { from?: string; to?: string; service?: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenBooking }) => {
  const isAr = lang === 'ar';
  const cities = isAr ? CITIES_AR : CITIES_EN;

  const [fromCity, setFromCity] = useState(cities[0]); // صنعاء
  const [toCity, setToCity] = useState(cities[1]);   // عدن
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [serviceType, setServiceType] = useState('shared');

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking({
      from: fromCity,
      to: toCity,
      service: serviceType,
    });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#061122] via-[#091b36] to-[#061122] pt-8 pb-16">
      
      {/* Background Parallax & Decorative Light Beams */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle radial ambient blue glow */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        
        {/* Architectural grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Speed lines */}
        <div className="absolute bottom-16 inset-x-0 h-48 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Column (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 text-right rtl:text-right ltr:text-left">
            
            {/* Elegant kicker indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wide backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>
                {isAr ? 'الشركة الرائدة في النقل البري الداخلي باليمن' : 'Leading Domestic Passenger Transport in Yemen'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              {isAr ? (
                <>
                  رحلات آمنة.. <br />
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
                    وخدمة تليق بك
                  </span>
                </>
              ) : (
                <>
                  Safe Journeys.. <br />
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
                    Service Worthy of You
                  </span>
                </>
              )}
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
              {isAr
                ? 'من صنعاء إلى عدن وجميع المحافظات.. أسطول حديث ومواعيد دقيقة، مع خيارات مخصصة للأفراد، العائلات، والشركات.'
                : 'From Sanaa to Aden and all Yemeni governorates. Modern luxury fleet, exact schedules, and bespoke travel solutions for individuals, families, and businesses.'}
            </p>

            {/* Dual CTAs: WhatsApp Green & Royal Blue */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-xl shadow-emerald-950/50 hover:shadow-emerald-900/40 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{isAr ? 'احجز رحلتك الآن' : 'Book Your Trip Now'}</span>
                {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>

              <a
                href={`tel:${COMPANY_PHONE}`}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 text-base font-bold text-slate-100 bg-[#0B2545]/90 hover:bg-[#134074] border border-blue-400/30 rounded-xl shadow-lg shadow-blue-950/40 hover:shadow-blue-900/30 transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{isAr ? 'اتصل بنا' : 'Call Us Directly'}</span>
              </a>
            </div>

            {/* Trust points micro-row */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>{isAr ? 'رحلات يومية منتظمة' : 'Daily Scheduled Lines'}</span>
              </div>
              <span className="text-slate-700">·</span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>{isAr ? 'خدمة الباب إلى الباب' : 'Door-to-Door Available'}</span>
              </div>
              <span className="text-slate-700">·</span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>{isAr ? 'متابعة حية 24/7' : '24/7 Dispatch Monitoring'}</span>
              </div>
            </div>

          </div>

          {/* Visual Column (5 cols on lg): 3D Car Perspective Launch */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Dramatic dynamic backlight glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 via-blue-600/20 to-transparent rounded-3xl filter blur-2xl transform scale-95" />

            {/* Image card with sleek border and lighting accent */}
            <div className="relative w-full max-w-md mx-auto rounded-3xl overflow-hidden border border-amber-400/30 shadow-2xl shadow-blue-950/80 bg-slate-900/60 backdrop-blur-sm group">
              
              <div className="aspect-[3/4] w-full overflow-hidden relative">
                <img
                  src={ASSETS.heroCar}
                  alt={isAr ? "النعمان للسفريات - إصدار الرحلات الفاخرة تويوتا لاندكروزر" : "Al-Noman Travels - Luxury Edition Toyota Land Cruiser"}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual subtle gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061122]/90 via-transparent to-transparent pointer-events-none" />

                {/* Floating badge over car */}
                <div className="absolute bottom-4 right-4 left-4 p-3.5 rounded-2xl bg-[#061122]/90 backdrop-blur-md border border-amber-400/20 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-amber-300 font-bold uppercase tracking-wider block">
                      {isAr ? 'إصدار الرحلات الفاخرة' : 'Luxury Travel Edition'}
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-white">
                      {isAr ? 'تويوتا لاندكروزر V8 VIP' : 'Toyota Land Cruiser V8 VIP'}
                    </span>
                  </div>
                  <div className="px-3 py-1 rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs font-bold">
                    {isAr ? 'VIP 24/7' : 'VIP 24/7'}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Quick Booking Strip (Below Hero Columns) */}
        <div className="mt-12 bg-[#091b36]/90 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-5 sm:p-6 shadow-2xl shadow-black/60">
          <form onSubmit={handleQuickSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            
            {/* Departure */}
            <div>
              <label className="block text-xs font-bold text-blue-300 mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{isAr ? 'مدينة الانطلاق' : 'Departure City'}</span>
              </label>
              <select
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                className="w-full bg-[#061122] border border-blue-800/60 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white focus:outline-none focus:border-blue-400 transition-colors"
              >
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Destination */}
            <div>
              <label className="block text-xs font-bold text-blue-300 mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{isAr ? 'مدينة الوصول' : 'Destination'}</span>
              </label>
              <select
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                className="w-full bg-[#061122] border border-blue-800/60 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white focus:outline-none focus:border-blue-400 transition-colors"
              >
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Travel Date */}
            <div>
              <label className="block text-xs font-bold text-blue-300 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                <span>{isAr ? 'تاريخ السفر' : 'Travel Date'}</span>
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-[#061122] border border-blue-800/60 rounded-xl px-3.5 py-2 text-sm font-semibold text-white focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>

            {/* Service Category */}
            <div>
              <label className="block text-xs font-bold text-blue-300 mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>{isAr ? 'نوع الرحلة' : 'Trip Class'}</span>
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full bg-[#061122] border border-blue-800/60 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white focus:outline-none focus:border-blue-400 transition-colors"
              >
                <option value="shared">{isAr ? 'مقعد مشترك (يومي)' : 'Shared Seat (Daily)'}</option>
                <option value="vip">{isAr ? 'رحلة VIP خاصة (لاندكروزر)' : 'Private VIP SUV'}</option>
                <option value="corporate">{isAr ? 'نقل شركات ومجموعات' : 'Corporate / Group Van'}</option>
                <option value="door-to-door">{isAr ? 'الباب إلى الباب (خاص)' : 'Door-to-Door Charter'}</option>
              </select>
            </div>

            {/* Submit search button */}
            <div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 active:from-blue-800 active:to-blue-900 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-blue-950/50 flex items-center justify-center gap-2"
              >
                <span>{isAr ? 'متابعة الحجز الفوري' : 'Continue Booking'}</span>
                <ChevronRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>

          </form>
        </div>

      </div>

    </section>
  );
};
