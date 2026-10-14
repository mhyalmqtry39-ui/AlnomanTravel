import React, { useState } from 'react';
import { X, Check, Calendar, MapPin, Users, Phone, User, MessageCircle, ArrowLeft, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { Language, BookingFormData } from '../types';
import { COMPANY_PHONE, COMPANY_PHONE_DISPLAY, CITIES_AR, CITIES_EN } from '../data/content';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialData?: {
    from?: string;
    to?: string;
    service?: string;
  };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialData,
}) => {
  if (!isOpen) return null;

  const isAr = lang === 'ar';
  const cities = isAr ? CITIES_AR : CITIES_EN;

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<BookingFormData>({
    departureCity: initialData?.from || (isAr ? 'صنعاء' : "Sana'a"),
    destinationCity: initialData?.to || (isAr ? 'عدن' : 'Aden'),
    travelDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    travelTime: isAr ? 'على مدار 24 ساعة' : '24/7 Any Time',
    serviceType: initialData?.service || (isAr ? 'رحلة مشتركة' : 'Shared Ride'),
    passengers: 1,
    passengerName: '',
    passengerPhone: '',
    pickupLocation: '',
    notes: '',
  });

  const [bookingCode, setBookingCode] = useState('');
  const [copied, setCopied] = useState(false);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (!formData.passengerName.trim() || !formData.passengerPhone.trim()) {
        alert(isAr ? 'الرجاء إدخال الاسم ورقم الهاتف لمتابعة الحجز' : 'Please provide your name and phone number');
        return;
      }
      const randomCode = 'ALN-' + Math.floor(100000 + Math.random() * 900000);
      setBookingCode(randomCode);
      setStep(3);
    }
  };

  // Generate WhatsApp message formatted for the company dispatcher
  const generateWhatsAppMessage = () => {
    const text = isAr
      ? `*حجز رحلة جديدة - النعمان للسفريات والسياحة* 🚗\n` +
        `رقم الطلب: ${bookingCode || 'جديد'}\n\n` +
        `👤 *الاسم:* ${formData.passengerName}\n` +
        `📞 *الهاتف:* ${formData.passengerPhone}\n` +
        `📍 *خط السير:* من ${formData.departureCity} إلى ${formData.destinationCity}\n` +
        `📅 *تاريخ السفر:* ${formData.travelDate}\n` +
        `⏰ *الوقت المفضل:* ${formData.travelTime}\n` +
        `👥 *عدد الركاب:* ${formData.passengers}\n` +
        `🚖 *نوع الخدمة:* ${formData.serviceType}\n` +
        (formData.pickupLocation ? `🏠 *مكان التجمع/الانطلاق:* ${formData.pickupLocation}\n` : '') +
        (formData.notes ? `📝 *ملاحظات إضافية:* ${formData.notes}\n` : '') +
        `\n_يرجى تأكيد الحجز وموافاتي ببيانات الرحلة._`
      : `*New Travel Booking - Al-Noaman Travel* 🚗\n` +
        `Ref ID: ${bookingCode || 'New'}\n\n` +
        `👤 *Passenger:* ${formData.passengerName}\n` +
        `📞 *Phone:* ${formData.passengerPhone}\n` +
        `📍 *Route:* ${formData.departureCity} to ${formData.destinationCity}\n` +
        `📅 *Date:* ${formData.travelDate}\n` +
        `⏰ *Time:* ${formData.travelTime}\n` +
        `👥 *Seats:* ${formData.passengers}\n` +
        `🚖 *Service Class:* ${formData.serviceType}\n` +
        (formData.pickupLocation ? `🏠 *Pickup Address:* ${formData.pickupLocation}\n` : '') +
        (formData.notes ? `📝 *Notes:* ${formData.notes}\n` : '') +
        `\n_Please confirm my trip reservation._`;

    return encodeURIComponent(text);
  };

  const whatsappUrl = `https://wa.me/967775095966?text=${generateWhatsAppMessage()}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-[#091b36] border border-blue-400/30 rounded-3xl shadow-2xl shadow-black overflow-hidden my-auto">
        
        {/* Header */}
        <div className="px-6 py-5 bg-[#061122] border-b border-blue-900/60 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
              <span>{isAr ? 'حجز رحلة برية' : 'Book a Highway Trip'}</span>
              <span className="text-xs font-bold text-cyan-400 px-2 py-0.5 rounded-md bg-blue-950 border border-blue-800">
                {isAr ? `خطوة ${step} من 3` : `Step ${step} of 3`}
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {isAr ? 'شركة النعمان للسفريات والسياحة - خدمة سريعة ومضمونة' : 'Al-Noaman Travel & Tourism - Guaranteed fast response'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-blue-950 h-1.5">
          <div
            className="bg-gradient-to-r from-blue-500 to-cyan-400 h-1.5 transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Step Content */}
        <div className="p-6 sm:p-8">
          {step === 1 && (
            <form onSubmit={handleNextStep} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Departure City */}
                <div>
                  <label className="block text-xs font-bold text-blue-300 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>{isAr ? 'مدينة الانطلاق' : 'Departure City'}</span>
                  </label>
                  <select
                    value={formData.departureCity}
                    onChange={(e) => setFormData({ ...formData, departureCity: e.target.value })}
                    className="w-full bg-[#061122] border border-blue-800/80 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white focus:outline-none focus:border-cyan-400"
                  >
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                {/* Destination City */}
                <div>
                  <label className="block text-xs font-bold text-blue-300 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{isAr ? 'مدينة الوصول' : 'Destination City'}</span>
                  </label>
                  <select
                    value={formData.destinationCity}
                    onChange={(e) => setFormData({ ...formData, destinationCity: e.target.value })}
                    className="w-full bg-[#061122] border border-blue-800/80 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white focus:outline-none focus:border-cyan-400"
                  >
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Travel Date */}
                <div>
                  <label className="block text-xs font-bold text-blue-300 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{isAr ? 'تاريخ السفر' : 'Date of Travel'}</span>
                  </label>
                  <input
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full bg-[#061122] border border-blue-800/80 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white focus:outline-none focus:border-cyan-400"
                    required
                  />
                </div>

                {/* Time Preference */}
                <div>
                  <label className="block text-xs font-bold text-blue-300 mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>{isAr ? 'توقيت السفر (على مدار 24 ساعة)' : 'Departure Timing (24/7 Any Time)'}</span>
                  </label>
                  <select
                    value={formData.travelTime}
                    onChange={(e) => setFormData({ ...formData, travelTime: e.target.value })}
                    className="w-full bg-[#061122] border border-blue-800/80 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value={isAr ? 'على مدار 24 ساعة (جاهزية تامة)' : '24/7 Round the Clock'}>
                      {isAr ? 'على مدار 24 ساعة (جاهزية تامة)' : '24/7 Round the Clock'}
                    </option>
                    <option value={isAr ? 'صباحاً (حسب طلب العميل)' : 'Morning (On Demand)'}>
                      {isAr ? 'صباحاً (حسب طلب العميل)' : 'Morning (On Demand)'}
                    </option>
                    <option value={isAr ? 'ظهراً / عصراً (حسب طلب العميل)' : 'Afternoon (On Demand)'}>
                      {isAr ? 'ظهراً / عصراً (حسب طلب العميل)' : 'Afternoon (On Demand)'}
                    </option>
                    <option value={isAr ? 'مساءً / ليلاً (حسب طلب العميل)' : 'Night (On Demand)'}>
                      {isAr ? 'مساءً / ليلاً (حسب طلب العميل)' : 'Night (On Demand)'}
                    </option>
                  </select>
                </div>

              </div>

              {/* Service Class */}
              <div>
                <label className="block text-xs font-bold text-blue-300 mb-2">
                  {isAr ? 'اختر فئة الرحلة أو الخدمة:' : 'Select Travel Class or Service:'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                  {[
                    { id: 'shared', label: isAr ? 'مقعد مشترك' : 'Shared Seat' },
                    { id: 'vip', label: isAr ? 'VIP لاندكروزر' : 'VIP Land Cruiser' },
                    { id: 'corporate', label: isAr ? 'نقل شركات/باص' : 'Corporate/Minibus' },
                    { id: 'door-to-door', label: isAr ? 'الباب للباب' : 'Door-to-Door' },
                    { id: 'passports', label: isAr ? 'حجز جوازات/بطائق' : 'Passports & IDs' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, serviceType: s.label })}
                      className={`p-3 rounded-xl border text-center text-xs font-bold transition-all ${
                        formData.serviceType === s.label
                          ? 'bg-blue-600 text-white border-blue-400 shadow-md'
                          : 'bg-[#061122] text-slate-300 border-blue-900/60 hover:border-blue-700'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Next Button */}
              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-all flex items-center gap-2"
                >
                  <span>{isAr ? 'متابعة بيانات المسافر' : 'Continue to Passenger Details'}</span>
                  {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleNextStep} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Passenger Name */}
                <div>
                  <label className="block text-xs font-bold text-blue-300 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-blue-400" />
                    <span>{isAr ? 'اسم المسافر / مسؤول الحجز *' : 'Passenger Full Name *'}</span>
                  </label>
                  <input
                    type="text"
                    value={formData.passengerName}
                    onChange={(e) => setFormData({ ...formData, passengerName: e.target.value })}
                    placeholder={isAr ? 'مثال: محمد أحمد القحطاني' : 'e.g. Mohammed Ahmed'}
                    className="w-full bg-[#061122] border border-blue-800/80 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white focus:outline-none focus:border-cyan-400"
                    required
                  />
                </div>

                {/* Passenger Phone */}
                <div>
                  <label className="block text-xs font-bold text-blue-300 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    <span>{isAr ? 'رقم الهاتف / الواتساب *' : 'Phone / WhatsApp Number *'}</span>
                  </label>
                  <input
                    type="tel"
                    dir="ltr"
                    value={formData.passengerPhone}
                    onChange={(e) => setFormData({ ...formData, passengerPhone: e.target.value })}
                    placeholder="775095966"
                    className="w-full bg-[#061122] border border-blue-800/80 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white focus:outline-none focus:border-cyan-400"
                    required
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Seats Count */}
                <div>
                  <label className="block text-xs font-bold text-blue-300 mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-blue-400" />
                    <span>{isAr ? 'عدد الركاب / المقاعد المطلوبة' : 'Number of Passengers'}</span>
                  </label>
                  <select
                    value={formData.passengers}
                    onChange={(e) => setFormData({ ...formData, passengers: Number(e.target.value) })}
                    className="w-full bg-[#061122] border border-blue-800/80 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value={1}>1 {isAr ? 'راكب واحد' : 'Passenger'}</option>
                    <option value={2}>2 {isAr ? 'راكبان' : 'Passengers'}</option>
                    <option value={3}>3 {isAr ? 'ركاب' : 'Passengers'}</option>
                    <option value={4}>4 {isAr ? 'ركاب (سيارة كاملة)' : 'Passengers (Full Car)'}</option>
                    <option value={7}>7+ {isAr ? 'مجموعة / عائلة' : 'Group / Family'}</option>
                  </select>
                </div>

                {/* Pickup Location */}
                <div>
                  <label className="block text-xs font-bold text-blue-300 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>{isAr ? 'موقع الانطلاق المحدد (اختياري للباب للباب)' : 'Pickup Address (Optional)'}</span>
                  </label>
                  <input
                    type="text"
                    value={formData.pickupLocation || ''}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    placeholder={isAr ? 'اسم الحي أو الفندق أو المعلم' : 'Neighborhood / Hotel'}
                    className="w-full bg-[#061122] border border-blue-800/80 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-blue-300 mb-1.5">
                  {isAr ? 'ملاحظات إضافية (أمتعة خاصة، أطفال، إلخ):' : 'Additional Notes (Special luggage, requests):'}
                </label>
                <textarea
                  rows={2}
                  value={formData.notes || ''}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={isAr ? 'أية طلبات أو مواعيد محددة...' : 'Any special instructions...'}
                  className="w-full bg-[#061122] border border-blue-800/80 rounded-xl px-3.5 py-2 text-sm font-medium text-white focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 bg-blue-950 hover:bg-blue-900 text-slate-300 font-bold text-xs rounded-xl transition-all"
                >
                  {isAr ? 'رجوع' : 'Back'}
                </button>

                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-all flex items-center gap-2"
                >
                  <span>{isAr ? 'مراجعة وتأكيد الحجز' : 'Review & Confirm'}</span>
                  {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>

            </form>
          )}

          {step === 3 && (
            <div className="space-y-6">
              
              {/* Ticket Review Card */}
              <div className="bg-[#061122] border border-blue-400/30 rounded-2xl p-6 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-blue-900/60 mb-4">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                    {isAr ? 'بطاقة حجز مبدئي معتمدة' : 'Official Booking Summary'}
                  </span>
                  <span className="font-mono text-xs font-extrabold text-cyan-300 bg-blue-950 px-2.5 py-1 rounded border border-blue-800">
                    {bookingCode}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-400 block text-xs">{isAr ? 'المسافر:' : 'Passenger:'}</span>
                    <span className="font-bold text-white">{formData.passengerName}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">{isAr ? 'الهاتف:' : 'Phone:'}</span>
                    <span className="font-bold text-white font-mono" dir="ltr">{formData.passengerPhone}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">{isAr ? 'المسار:' : 'Route:'}</span>
                    <span className="font-bold text-cyan-300">{formData.departureCity} ⟵ {formData.destinationCity}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">{isAr ? 'التاريخ والوقت:' : 'Date & Time:'}</span>
                    <span className="font-bold text-white">{formData.travelDate} ({formData.travelTime})</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">{isAr ? 'الخدمة والمقاعد:' : 'Class & Seats:'}</span>
                    <span className="font-bold text-white">{formData.serviceType} ({formData.passengers} {isAr ? 'ركاب' : 'Seats'})</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">{isAr ? 'المتابعة والتأكيد:' : 'Dispatch Desk:'}</span>
                    <span className="font-bold text-emerald-400">{isAr ? 'غرفة العمليات المركزية' : 'Main Operations Desk'}</span>
                  </div>
                </div>

                {formData.pickupLocation && (
                  <div className="mt-3 pt-3 border-t border-blue-900/40 text-xs">
                    <span className="text-slate-400">{isAr ? 'موقع الانطلاق: ' : 'Pickup: '}</span>
                    <span className="font-bold text-white">{formData.pickupLocation}</span>
                  </div>
                )}
              </div>

              {/* Direct WhatsApp Call to Action (The requested flow) */}
              <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-white">
                      {isAr ? 'إرسال فوري إلى واتساب الشركة (+967 775095966)' : 'Instant Dispatch via WhatsApp (+967 775095966)'}
                    </h4>
                    <p className="text-xs text-emerald-200">
                      {isAr
                        ? 'انقر على الزر بالأسفل لفتح محادثة الواتساب مباشرة مع موظف الحجوزات برسالتك المنسقة بالكامل.'
                        : 'Click below to send the pre-formatted booking details straight to the company WhatsApp dispatcher.'}
                    </p>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-xl shadow-emerald-950/60 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>{isAr ? 'إرسال الحجز عبر الواتساب الآن' : 'Send Booking via WhatsApp Now'}</span>
                </a>
              </div>

              {/* Phone alternative */}
              <div className="flex items-center justify-between text-xs text-slate-300 pt-2 border-t border-blue-900/40">
                <span>{isAr ? 'أو يمكنك الاتصال المباشر بغرفة العمليات:' : 'Or call dispatch directly:'}</span>
                <a href={`tel:${COMPANY_PHONE}`} className="font-bold text-cyan-400 hover:underline font-mono" dir="ltr">
                  {COMPANY_PHONE_DISPLAY}
                </a>
              </div>

              {/* Footer action */}
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 bg-blue-950 hover:bg-blue-900 text-slate-300 font-bold text-xs rounded-xl transition-all"
                >
                  {isAr ? 'إغلاق النافذة' : 'Close'}
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
