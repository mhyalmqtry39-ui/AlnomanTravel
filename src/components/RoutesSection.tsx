import React, { useState } from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, ArrowRight, ArrowLeft, Calendar, Sparkles } from 'lucide-react';
import { Language, RouteItem } from '../types';
import { ROUTES_DATA_AR, ROUTES_DATA_EN } from '../data/content';

interface RoutesSectionProps {
  lang: Language;
  onBookRoute: (from: string, to: string) => void;
}

export const RoutesSection: React.FC<RoutesSectionProps> = ({ lang, onBookRoute }) => {
  const isAr = lang === 'ar';
  const routes = isAr ? ROUTES_DATA_AR : ROUTES_DATA_EN;
  const [activeRouteId, setActiveRouteId] = useState(routes[0].id);

  const activeRoute = routes.find((r) => r.id === activeRouteId) || routes[0];

  return (
    <section id="routes" className="py-24 bg-gradient-to-b from-[#061122] via-[#081831] to-[#061122] relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-700/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-bold tracking-wide">
            <Navigation className="w-3.5 h-3.5 text-cyan-400" />
            <span>{isAr ? 'شبكة الرحلات والمسارات اليومية' : 'Daily Highway Routes Network'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {isAr ? 'خطوط السير المباشرة بين صنعاء وعدن والمحافظات' : 'Direct Highway Routes: Sanaa, Aden & Governorates'}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-medium">
            {isAr
              ? 'رحلات برية يومية منتظمة بأوقات انطلاق ثابتة وسيارات حديثة مجهزة للرحلات الطويلة.'
              : 'Regular daily scheduled departures with fixed timings and vehicles engineered for long-haul comfort.'}
          </p>
        </div>

        {/* Route Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none justify-start lg:justify-center">
          {routes.map((route) => {
            const isActive = route.id === activeRoute.id;
            return (
              <button
                key={route.id}
                onClick={() => setActiveRouteId(route.id)}
                className={`px-5 py-3 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap shrink-0 transition-all border ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-900/50'
                    : 'bg-[#091a33]/70 text-slate-300 border-blue-900/40 hover:bg-blue-950/80 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{route.from}</span>
                  <span className="text-blue-300 text-xs font-mono">⟵</span>
                  <span>{route.to}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Route Deep-Dive Interactive Showcase */}
        <div className="bg-[#091b36]/90 border border-blue-400/20 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Route Representation (5 cols) */}
            <div className="lg:col-span-5 bg-[#061122]/90 border border-blue-900/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-8">
              
              <div className="flex items-center justify-between pb-4 border-b border-blue-900/50">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                  {isAr ? 'تفاصيل المسار السريع' : 'Express Route Details'}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
                  {isAr ? 'مفتوح ومؤمّن' : 'Active & Secured'}
                </span>
              </div>

              {/* Graphical Waypoint Step */}
              <div className="relative pl-6 rtl:pl-0 rtl:pr-6 space-y-8">
                {/* Vertical connecting line */}
                <div className="absolute top-3 bottom-3 right-[11px] rtl:right-[11px] ltr:left-[11px] w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-emerald-400" />

                {/* Point 1: Departure */}
                <div className="relative flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs ring-4 ring-blue-950 z-10">
                    A
                  </div>
                  <div>
                    <h4 className="text-lg font-extrabold text-white">{activeRoute.from}</h4>
                    <p className="text-xs text-slate-400">
                      {isAr ? 'محطة الانطلاق الرئيسية أو خدمة الباب إلى الباب' : 'Main departure terminal or door-to-door'}
                    </p>
                  </div>
                </div>

                {/* Mid: Travel Distance & Duration Badge */}
                <div className="relative flex items-center gap-4 py-1">
                  <div className="w-6 h-6 rounded-full bg-cyan-600/50 text-cyan-200 flex items-center justify-center text-xs ring-4 ring-blue-950 z-10">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-blue-950 border border-blue-700/40 text-xs font-bold text-cyan-300">
                    {activeRoute.distance} · {activeRoute.duration}
                  </div>
                </div>

                {/* Point 2: Destination */}
                <div className="relative flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs ring-4 ring-blue-950 z-10">
                    B
                  </div>
                  <div>
                    <h4 className="text-lg font-extrabold text-white">{activeRoute.to}</h4>
                    <p className="text-xs text-slate-400">
                      {isAr ? 'محطة الوصول المعتمدة أو التوصيل حتى الموقع' : 'Official terminal arrival or direct drop-off'}
                    </p>
                  </div>
                </div>

              </div>

              {/* Vehicle class info */}
              <div className="pt-4 border-t border-blue-900/50 flex items-center justify-between text-xs text-slate-300 font-medium">
                <span>{isAr ? 'نوع الأسطول المخصص:' : 'Assigned Fleet:'}</span>
                <span className="font-bold text-white">{activeRoute.vehicleType}</span>
              </div>

            </div>

            {/* Right Information & Action Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {isAr 
                    ? `رحلات ${activeRoute.from} إلى ${activeRoute.to} (على مدار 24 ساعة)`
                    : `Route: ${activeRoute.from} to ${activeRoute.to} (24/7 Round the Clock)`}
                </h3>
                <p className="text-sm text-slate-300">
                  {isAr
                    ? 'رحلات مباشرة مريحة على مدار 24 ساعة دون مواعيد محددة مسبقاً، تنطلق حسب رغبتكم مع استراحات مجهزة على الطريق.'
                    : 'Comfortable non-stop travel available 24/7 round the clock at your preferred timing with premium rest halts.'}
                </p>
              </div>

              {/* Departures Grid (24/7 Round the Clock) */}
              <div className="bg-[#061122]/60 rounded-2xl p-5 border border-blue-900/40">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-cyan-400 block">
                    {isAr ? 'أوقات وجداول الرحلات:' : 'Trip Timings & Departures:'}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black">
                    {isAr ? 'على مدار 24 ساعة' : '24/7 Active'}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {activeRoute.departures.map((time, idx) => (
                    <div
                      key={idx}
                      className="px-3.5 py-2.5 rounded-xl bg-blue-950/80 border border-blue-700/50 text-center text-xs font-extrabold text-cyan-200 shadow-sm"
                    >
                      {time}
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights Pill-free list */}
              <div>
                <span className="text-xs font-bold text-slate-400 block mb-3">
                  {isAr ? 'مزايا هذا الخط:' : 'Route Highlights:'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeRoute.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-medium">
                      <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking Trigger */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onBookRoute(activeRoute.from, activeRoute.to)}
                  className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-950/50 transition-all flex items-center gap-2"
                >
                  <span>{isAr ? `احجز مقعدك على خط (${activeRoute.from} - ${activeRoute.to})` : `Book Seat on (${activeRoute.from} - ${activeRoute.to})`}</span>
                  {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
