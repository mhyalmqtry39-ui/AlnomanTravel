import React from 'react';
import { Users, Building2, ShieldCheck, MapPin, FileCheck2, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Language } from '../types';
import { SERVICES_DATA_AR, SERVICES_DATA_EN } from '../data/content';

interface ServicesSectionProps {
  lang: Language;
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onSelectService }) => {
  const isAr = lang === 'ar';
  const services = isAr ? SERVICES_DATA_AR : SERVICES_DATA_EN;

  const iconMap: Record<string, React.ElementType> = {
    Users,
    Building2,
    ShieldCheck,
    MapPin,
    FileCheck2,
  };

  return (
    <section id="services" className="py-24 bg-[#061122] relative">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-bold tracking-wide">
            <span>{isAr ? 'الخدمات' : 'Services'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {isAr ? 'خدمات النقل والسفريات المتكاملة' : 'Integrated Mobility & Travel Services'}
          </h2>

          {/* User Request: Under the word الخدمات add: حجز جوازات بطائق شخصية */}
          <div className="pt-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500/20 via-blue-500/15 to-emerald-500/20 border border-amber-400/40 text-amber-200 text-sm font-black shadow-lg shadow-black/40">
              <FileCheck2 className="w-4 h-4 text-amber-400" />
              <span>{isAr ? 'حجز جوازات · بطائق شخصية' : 'Passport & National ID Booking'}</span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-300 font-medium">
            {isAr
              ? 'سواء كنت مسافراً بمفردك، مع عائلتك، بحاجة لحجز معاملات الجوازات والبطائق، أو تبحث عن شريك نقل معتمد لشركتك، نقدم لك أعلى درجات الراحة والموثوقية.'
              : 'Whether traveling solo, with family, booking official passport and ID appointments, or arranging enterprise mobility, we deliver uncompromising reliability.'}
          </p>
        </div>

        {/* Interactive Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.iconName] || Users;
            const isHighlight = service.id === 'passports-and-ids';
            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl p-8 transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between ${
                  isHighlight
                    ? 'bg-gradient-to-b from-[#0b2447] via-[#091f3d] to-[#071830] border-2 border-amber-400/50 hover:border-amber-400 shadow-amber-950/20'
                    : 'bg-[#091a33]/80 hover:bg-[#0c2344] border border-blue-900/50 hover:border-blue-500/50'
                }`}
              >
                <div>
                  {/* Card Header: Icon & Editorial Tag */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 ${
                      isHighlight
                        ? 'bg-gradient-to-br from-amber-500 to-amber-700 text-white shadow-amber-950/60 border border-amber-300/40'
                        : 'bg-gradient-to-br from-blue-600 to-indigo-900 text-cyan-300 shadow-blue-950/60 border border-blue-400/20'
                    }`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className={`text-xs font-bold tracking-wider ${isHighlight ? 'text-amber-400' : 'text-blue-400/80'}`}>
                      0{index + 1}.
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-blue-200 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className={`text-xs font-bold mb-4 tracking-wide ${isHighlight ? 'text-amber-300' : 'text-cyan-400'}`}>
                    {service.subtitle}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8 border-t border-blue-900/40 pt-4">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                          isHighlight
                            ? 'bg-amber-950 text-amber-300'
                            : 'bg-blue-900/60 text-cyan-400'
                        }`}>
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <button
                  onClick={() => onSelectService(service.title)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                    isHighlight
                      ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-black shadow-lg shadow-amber-950/40'
                      : 'bg-blue-950/60 hover:bg-blue-600 group-hover:text-white border border-blue-800/60 hover:border-blue-500 text-blue-300'
                  }`}
                >
                  <span>{isAr ? 'طلب حجز هذه الخدمة' : 'Book This Service'}</span>
                  {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
