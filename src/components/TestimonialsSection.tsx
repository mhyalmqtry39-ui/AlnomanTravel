import React from 'react';
import { Star, Quote, MapPin, Building, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { TESTIMONIALS_DATA_AR, TESTIMONIALS_DATA_EN } from '../data/content';

interface TestimonialsSectionProps {
  lang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const testimonials = isAr ? TESTIMONIALS_DATA_AR : TESTIMONIALS_DATA_EN;

  return (
    <section className="py-24 bg-[#061122] relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-blue-800/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-bold tracking-wide">
            <Quote className="w-3.5 h-3.5 text-cyan-400" />
            <span>{isAr ? 'تجارب المسافرين والشركاء' : 'Verified Traveler & Partner Reviews'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {isAr ? 'ثقة تتحدث عن نفسها في كل رحلة' : 'Real Trust Built Across Every Journey'}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-medium">
            {isAr
              ? 'نفتخر برضا عملائنا الكرام من أفراد وعائلات وشركات نقل مؤسسية.'
              : 'Proudly serving thousands of satisfied individual passengers, families, and enterprise logistics managers.'}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#091a33]/80 hover:bg-[#0c2243] border border-blue-900/50 hover:border-blue-400/40 rounded-2xl p-6 transition-all duration-300 shadow-xl shadow-black/30 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote Content */}
                <p className="text-sm text-slate-200 leading-relaxed italic mb-6">
                  "{item.comment}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-blue-900/40">
                <h4 className="text-sm font-extrabold text-white">
                  {item.name}
                </h4>
                <p className="text-xs text-blue-300 font-medium mt-0.5">
                  {item.role} · {item.location}
                </p>
                <div className="mt-2 text-[11px] font-bold text-cyan-400">
                  {item.route}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
