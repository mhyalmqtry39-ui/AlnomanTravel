import React from 'react';
import { Wrench, Sparkles, Headphones, Clock, ShieldCheck, HeartHandshake, PhoneCall } from 'lucide-react';
import { Language } from '../types';
import { COMPANY_PHONE, COMPANY_PHONE_DISPLAY } from '../data/content';

interface WhyUsSectionProps {
  lang: Language;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const pillars = [
    {
      icon: Wrench,
      title: isAr ? 'صيانة دورية للسيارات' : 'Rigorous Fleet Maintenance',
      desc: isAr
        ? 'فحص ميكانيكي وتقني شامل لكل سيارة وحافلة قبل انطلاق كل رحلة لضمان أقصى درجات السلامة والأمان على الطرق الجبلية والصحراوية.'
        : 'Comprehensive multi-point mechanical inspection before every single departure to ensure absolute safety across mountain and highway terrain.',
      badge: isAr ? 'أمان معتمد 100%' : '100% Certified Safety',
    },
    {
      icon: Sparkles,
      title: isAr ? 'تعقيم ونظافة يومية' : 'Daily Cabin Sanitization',
      desc: isAr
        ? 'تنظيف عميق وتعقيم دوري للمقاعد وأنظمة التكييف بعد كل رحلة لتوفير بيئة سفر صحية، نقية، ومريحة تليق بكم وبعائلاتكم.'
        : 'Deep cleaning and sterilization of seats, surfaces, and air filtration systems after each journey for a healthy and pristine travel environment.',
      badge: isAr ? 'أعلى معايير النظافة' : 'Pristine Cleanliness',
    },
    {
      icon: Headphones,
      title: isAr ? 'دعم فني وغرفة عمليات 24/7' : '24/7 Operations & Dispatch',
      desc: isAr
        ? 'فريق متابعة مخصص على مدار الساعة لمراقبة حركة الأسطول ومساعدة المسافرين والرد الفوري على استفسارات الحجز والتنسيق.'
        : 'Round-the-clock dispatch operations monitoring fleet movement in real-time, assisting passengers, and providing rapid booking responses.',
      badge: isAr ? 'استجابة فورية بالواتساب' : 'Instant WhatsApp Response',
    },
    {
      icon: Clock,
      title: isAr ? 'انضباط صارم بالمواعيد' : 'Uncompromising Punctuality',
      desc: isAr
        ? 'احترام وقت العميل هو أولويتنا الأولى؛ انطلاق الرحلات في موعدها المحدد دون تأخير، مع أزمنة وصول مدروسة بدقة.'
        : 'Respecting passenger time is our core promise; punctual scheduled departures with zero delays and carefully calculated arrival times.',
      badge: isAr ? 'مواعيد دقيقة' : 'Zero Departure Delays',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#061122] relative">
      
      {/* Background radial gradient */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[300px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-bold tracking-wide">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>{isAr ? 'معايير الجودة والضمان' : 'Quality & Trust Pillars'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {isAr ? 'لماذا يختار المسافرون والشركات "النعمان"؟' : 'Why Travelers & Corporations Choose Al-Noaman?'}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-medium">
            {isAr
              ? 'نبني ثقتنا على الالتزام الحقيقي والخدمة الراقية في كل كيلومتر نقطعه معاً.'
              : 'We build our reputation on genuine commitment, premium comfort, and reliability across every kilometer.'}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-[#091a33]/90 hover:bg-[#0c2347] border border-blue-900/50 hover:border-blue-400/50 rounded-2xl p-7 transition-all duration-300 shadow-xl shadow-black/30 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-13 h-13 rounded-2xl bg-blue-950 border border-blue-500/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-blue-900/40 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-bold text-blue-400 block mb-2">
                    {pillar.badge}
                  </span>

                  <h3 className="text-xl font-extrabold text-white mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-blue-900/40 flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span>{isAr ? 'معيار معتمد' : 'Standard Metric'}</span>
                  <span className="text-cyan-400 font-bold">✓ {isAr ? 'مُفعّل يومياً' : 'Active Daily'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Trust Strip */}
        <div className="mt-16 bg-gradient-to-r from-blue-950/60 via-blue-900/30 to-blue-950/60 border border-blue-700/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-right rtl:sm:text-right ltr:sm:text-left">
            <h4 className="text-lg font-extrabold text-white">
              {isAr ? 'هل تمثل شركة أو منظمة وتبحث عن عقد نقل منتظم؟' : 'Representing a company or NGO seeking corporate mobility?'}
            </h4>
            <p className="text-sm text-slate-300">
              {isAr
                ? 'نوفر خططاً مخصصة مع تقارير شهرية وسيارات دفع رباعي وحافلات VIP معتمدة.'
                : 'We provide dedicated corporate transport plans with monthly accounting and certified VIP vehicles.'}
            </p>
          </div>

          <a
            href={`tel:${COMPANY_PHONE}`}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl whitespace-nowrap shadow-lg shadow-blue-950 transition-all flex items-center gap-2 shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>{isAr ? 'تواصل مع إدارة الشركات' : 'Contact Corporate Dispatch'}</span>
          </a>
        </div>

      </div>

    </section>
  );
};
