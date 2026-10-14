import React, { useState } from 'react';
import { Users, Briefcase, Wind, Wifi, Shield, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Language, VehicleItem } from '../types';
import { VEHICLES_DATA_AR, VEHICLES_DATA_EN } from '../data/content';

interface FleetSectionProps {
  lang: Language;
  onBookVehicle: (vehicleName: string) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ lang, onBookVehicle }) => {
  const isAr = lang === 'ar';
  const vehicles = isAr ? VEHICLES_DATA_AR : VEHICLES_DATA_EN;
  const [selectedVehicleId, setSelectedVehicleId] = useState(vehicles[0].id);

  const selectedVehicle = vehicles.find((v) => v.id === selectedVehicleId) || vehicles[0];

  return (
    <section id="fleet" className="py-24 bg-gradient-to-b from-[#061122] via-[#081a35] to-[#061122] relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-bold tracking-wide">
            <span>{isAr ? 'أسطول النعمان الفاخر' : 'Al-Noaman Modern Fleet'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {isAr ? 'سيارات حديثة ومجهزة لأعلى مستويات الراحة والأمان' : 'Modern Fleet Engineered for Supreme Comfort & Road Safety'}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-medium">
            {isAr
              ? 'اختر من بين سيارات الدفع الرباعي الفارهة، حافلات الـ VIP الواسعة، أو صالونات السفر السريع.'
              : 'Choose among flagship 4x4 Land Cruisers, VIP executive minivans, or express highway sedans.'}
          </p>
        </div>

        {/* Vehicle Selector Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-10 justify-start sm:justify-center scrollbar-none">
          {vehicles.map((v) => {
            const isSelected = v.id === selectedVehicle.id;
            return (
              <button
                key={v.id}
                onClick={() => setSelectedVehicleId(v.id)}
                className={`px-5 py-3 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap shrink-0 transition-all border ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-400 shadow-xl shadow-blue-900/50'
                    : 'bg-[#091a33]/80 text-slate-300 border-blue-900/40 hover:bg-blue-950 hover:text-white'
                }`}
              >
                <span>{v.name}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Vehicle Showcase Card */}
        <div className="bg-[#091b36]/90 border border-blue-400/25 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Image Viewport (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-blue-400/20 bg-slate-900 shadow-xl group">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={selectedVehicle.image}
                    alt={selectedVehicle.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="absolute top-4 right-4 rtl:right-4 ltr:left-4 px-3 py-1.5 rounded-lg bg-[#061122]/90 backdrop-blur-md border border-white/10 text-xs font-bold text-cyan-300">
                  {selectedVehicle.category}
                </div>
              </div>
            </div>

            {/* Vehicle Specs & Details (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
                  {selectedVehicle.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  {selectedVehicle.name}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {selectedVehicle.description}
                </p>
              </div>

              {/* Key Specs Indicators (Zero-pill discipline) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#061122]/80 border border-blue-900/50">
                
                <div className="text-center">
                  <div className="flex items-center justify-center text-blue-400 mb-1">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-slate-400 block">{isAr ? 'السعة' : 'Capacity'}</span>
                  <span className="text-sm font-extrabold text-white">
                    {selectedVehicle.passengers} {isAr ? 'ركاب' : 'Seats'}
                  </span>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center text-blue-400 mb-1">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-slate-400 block">{isAr ? 'الحقائب' : 'Luggage'}</span>
                  <span className="text-sm font-extrabold text-white">
                    {selectedVehicle.luggage} {isAr ? 'حقائب' : 'Bags'}
                  </span>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center text-blue-400 mb-1">
                    <Wind className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-slate-400 block">{isAr ? 'التكييف' : 'Climate'}</span>
                  <span className="text-sm font-extrabold text-white">
                    {isAr ? 'مركزي مستقل' : 'Multi-zone'}
                  </span>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center text-blue-400 mb-1">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-slate-400 block">{isAr ? 'الإنترنت' : 'Wi-Fi'}</span>
                  <span className="text-sm font-extrabold text-white">
                    {isAr ? 'متوفر مجاناً' : 'High Speed'}
                  </span>
                </div>

              </div>

              {/* Feature Checkpoints */}
              <div>
                <span className="text-xs font-bold text-slate-300 block mb-3">
                  {isAr ? 'تجهيزات ومزايا الراحة:' : 'Cabin Amenities & Safety Features:'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedVehicle.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-medium">
                      <div className="w-4 h-4 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onBookVehicle(selectedVehicle.name)}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-950/60 transition-all flex items-center justify-center gap-2"
                >
                  <span>{isAr ? `طلب حجز (${selectedVehicle.name})` : `Reserve This Vehicle (${selectedVehicle.name})`}</span>
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
