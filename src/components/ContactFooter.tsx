import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail, Send, CheckCircle2, Shield } from 'lucide-react';
import { Language } from '../types';
import { COMPANY_PHONE, COMPANY_PHONE_DISPLAY, COMPANY_WHATSAPP_LINK } from '../data/content';

interface ContactFooterProps {
  lang: Language;
  onOpenBooking: () => void;
  onOpenDesignDoc: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({
  lang,
  onOpenBooking,
  onOpenDesignDoc,
}) => {
  const isAr = lang === 'ar';
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactPhone) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setContactName('');
      setContactPhone('');
      setContactMessage('');
    }, 4000);
  };

  const offices = [
    {
      city: isAr ? 'صنعاء' : "Sana'a",
      address: isAr ? 'المحطة الرئيسية' : 'Main Terminal',
      phone: COMPANY_PHONE_DISPLAY,
      hours: isAr ? 'على مدار 24 ساعة يومياً' : '24 Hours / 7 Days',
    },
    {
      city: isAr ? 'عدن' : 'Aden',
      address: isAr ? 'المحطة الرئيسية' : 'Main Terminal',
      phone: COMPANY_PHONE_DISPLAY,
      hours: isAr ? 'على مدار 24 ساعة يومياً' : '24 Hours / 7 Days',
    },
  ];

  return (
    <footer id="contact" className="bg-[#050e1b] border-t border-blue-900/60 pt-20 pb-12 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[300px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top Emergency & VIP Contact Banner */}
        <div className="mb-16 bg-gradient-to-r from-blue-950 via-[#0b2447] to-blue-950 border border-blue-400/30 rounded-3xl p-8 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                {isAr ? 'خط الحجز السريع وغرفة العمليات 24/7' : '24/7 Rapid Booking Dispatch Desk'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {isAr ? 'جاهزون لخدمتكم والإجابة على استفساراتكم فوراً' : 'Ready to Serve You & Answer Inquiries Instantly'}
              </h3>
              <p className="text-sm text-slate-300">
                {isAr
                  ? 'تواصل معنا مباشرة عبر الهاتف أو الواتساب لحجز مقعدك أو استئجار سيارة خاصة بأفضل الأسعار.'
                  : 'Contact us directly via phone or WhatsApp to confirm your seat or charter a private vehicle at competitive rates.'}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row items-center gap-4 justify-end">
              <a
                href={COMPANY_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-xl shadow-emerald-950/60 transition-all flex items-center justify-center gap-3 shrink-0"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{isAr ? 'واتساب: 775095966' : 'WhatsApp: 775095966'}</span>
              </a>

              <a
                href={`tel:${COMPANY_PHONE}`}
                className="w-full sm:w-auto px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-xl shadow-blue-950/60 transition-all flex items-center justify-center gap-3 shrink-0"
              >
                <Phone className="w-5 h-5" />
                <span dir="ltr">{COMPANY_PHONE_DISPLAY}</span>
              </a>
            </div>

          </div>
        </div>

        {/* Office Locations & Direct Inquiry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Offices List (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h4 className="text-xl font-extrabold text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>{isAr ? 'صنعاء - عدن (المحطات الرئيسية)' : 'Sana\'a - Aden (Main Terminals)'}</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {offices.map((office, idx) => (
                <div
                  key={idx}
                  className="bg-[#091a33]/80 border border-blue-900/60 rounded-2xl p-5 flex flex-col justify-between space-y-3"
                >
                  <div>
                    <h5 className="text-sm font-extrabold text-cyan-300 mb-1">
                      {office.city}
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {office.address}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-blue-900/40 text-[11px] text-slate-400 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{office.hours}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-slate-200">
                      <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span dir="ltr">{office.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Nationwide reassurance note */}
            <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-900/50 text-xs text-slate-300 leading-relaxed">
              <span className="font-bold text-white block mb-0.5">
                {isAr ? 'تغطية متكاملة لجميع المحافظات اليمنية:' : 'Full Coverage of All Yemeni Governorates:'}
              </span>
              {isAr
                ? 'نوفر خطوط سير ورحلات مخصصة إلى مأرب، حضرموت (المكلا وسيئون)، شبوة، الحديدة، ذمار، وإب عبر شبكة أسطولنا المنتظم.'
                : 'We operate dedicated lines to Marib, Hadramout (Mukalla & Sayun), Shabwah, Hodeidah, Dhamar, and Ibb through our certified network.'}
            </div>
          </div>

          {/* Quick Contact / Inquiry Form (5 cols) */}
          <div className="lg:col-span-5 bg-[#081830] border border-blue-900/60 rounded-3xl p-6 sm:p-8">
            <h4 className="text-lg font-extrabold text-white mb-2">
              {isAr ? 'أرسل استفسارك أو طلب نقل خاص' : 'Send Inquiry or Special Request'}
            </h4>
            <p className="text-xs text-slate-400 mb-5">
              {isAr
                ? 'سيقوم موظف خدمة العملاء بالتواصل معك خلال دقائق معدودة.'
                : 'Our customer support representative will follow up with you within minutes.'}
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2 animate-in fade-in">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h5 className="text-base font-bold text-white">
                  {isAr ? 'تم استلام طلبك بنجاح!' : 'Inquiry Received Successfully!'}
                </h5>
                <p className="text-xs text-emerald-200">
                  {isAr
                    ? 'شكراً لتواصلك مع النعمان للسفريات. سنتصل بك عبر الرقم المدخل فوراً.'
                    : 'Thank you for reaching out to Al-Noaman Travel. We will call you back shortly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {isAr ? 'الاسم الكريم:' : 'Your Name:'}
                  </label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder={isAr ? 'اسمك الكامل' : 'Full Name'}
                    className="w-full bg-[#050e1b] border border-blue-900/80 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {isAr ? 'رقم الهاتف / الواتساب:' : 'Phone / WhatsApp:'}
                  </label>
                  <input
                    type="tel"
                    dir="ltr"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="775095966"
                    className="w-full bg-[#050e1b] border border-blue-900/80 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {isAr ? 'الرسالة أو تفاصيل الرحلة:' : 'Message / Trip Details:'}
                  </label>
                  <textarea
                    rows={3}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder={isAr ? 'اكتب تفاصيل الرحلة أو استفسارك هنا...' : 'Write your trip details or inquiry here...'}
                    className="w-full bg-[#050e1b] border border-blue-900/80 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isAr ? 'إرسال الاستفسار الآن' : 'Send Inquiry Now'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Quiet Clean Footer (Zone-compliant) */}
        <div className="pt-8 border-t border-blue-950 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-slate-300">
              {isAr ? 'شركة النعمان للسفريات والسياحة' : 'Al-Noaman Travel & Tourism LLC'}
            </span>
            <span aria-hidden="true">·</span>
            <span>{isAr ? 'جميع الحقوق محفوظة © 2026' : 'All rights reserved © 2026'}</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-slate-300 transition-colors">
              {isAr ? 'الخدمات' : 'Services'}
            </a>
            <a href="#routes" className="hover:text-slate-300 transition-colors">
              {isAr ? 'خطوط السير' : 'Routes'}
            </a>
            <a href="#fleet" className="hover:text-slate-300 transition-colors">
              {isAr ? 'الأسطول' : 'Fleet'}
            </a>
            <button
              onClick={onOpenDesignDoc}
              className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
            >
              {isAr ? 'وثيقة تجربة المستخدم (UX/UI)' : 'UX/UI Wireframe Specs'}
            </button>
          </div>

        </div>

      </div>

    </footer>
  );
};
