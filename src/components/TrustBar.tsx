import React from 'react';
import { Shield, Award, Clock, Map, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface TrustBarProps {
  lang: Language;
}

export const TrustBar: React.FC<TrustBarProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const items = [
    {
      icon: Award,
      title: isAr ? 'أسطول حديث' : 'Modern Luxury Fleet',
      desc: isAr ? 'أحدث موديلات سيارات الدفع الرباعي والحافلات' : 'Latest models 4x4 SUVs & VIP coaches',
    },
    {
      icon: Shield,
      title: isAr ? 'سائقون محترفون' : 'Certified Veteran Drivers',
      desc: isAr ? 'خبرة عميقة بمسارات الطرق الجبلية والصحراوية' : 'Experienced in all mountain and highway terrain',
    },
    {
      icon: Clock,
      title: isAr ? 'التزام تام بالمواعيد' : 'Strict Punctuality',
      desc: isAr ? 'انطلاق دقيق وجداول منتظمة يومياً' : 'Zero departure delays, structured daily departures',
    },
    {
      icon: Map,
      title: isAr ? 'تغطية شاملة' : 'Nationwide Coverage',
      desc: isAr ? 'صنعاء، عدن، تعز، حضرموت، وكافة المحافظات' : 'Sanaa, Aden, Taiz, Hadramout & all governorates',
    },
  ];

  return (
    <section className="relative z-10 bg-[#08172e] border-y border-blue-900/50 py-6 overflow-hidden">
      
      {/* Background ambient sheen */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/40 via-blue-900/10 to-blue-950/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="flex items-center gap-3.5 group transition-transform duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-900/30 border border-blue-400/20 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/50 group-hover:bg-blue-800/40 transition-all shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm sm:text-base font-extrabold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 opacity-80" />
                  </div>
                  <p className="text-xs text-slate-400 font-medium line-clamp-1 mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
