import React, { useState } from 'react';
import { X, Layout, Palette, GitMerge, FileText, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { Language } from '../types';

interface DesignSystemModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const DesignSystemModal: React.FC<DesignSystemModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;
  const isAr = lang === 'ar';
  const [activeTab, setActiveTab] = useState<'wireframe' | 'palette' | 'flow'>('wireframe');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-lg overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-4xl bg-[#081830] border border-blue-400/30 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-[#051122] border-b border-blue-900/60 flex items-center justify-between shrink-0">
          <div>
            <h3 className="text-xl font-extrabold text-white flex items-center gap-2.5">
              <Layout className="w-5 h-5 text-cyan-400" />
              <span>{isAr ? 'دليل تصميم تجربة المستخدم والهوية (UX/UI)' : 'UX/UI Architecture & Design Guide'}</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {isAr ? 'شركة النعمان للسفريات والسياحة · صنعاء - عدن وكافة المحافظات' : 'Al-Noaman Travel & Tourism · Technical & UX Specifications'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-blue-900/40 bg-[#061427] px-6 shrink-0 gap-3 overflow-x-auto">
          {[
            { id: 'wireframe', label: isAr ? '1. هيكل الصفحة الرئيسية (Wireframe)' : '1. Wireframe Layout', icon: Layout },
            { id: 'palette', label: isAr ? '2. نظام الألوان والخطوط (Colors & Typography)' : '2. Colors & Typography', icon: Palette },
            { id: 'flow', label: isAr ? '3. تجربة المستخدم للحجز (User Flow)' : '3. Booking User Flow', icon: GitMerge },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3.5 px-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
                  isActive
                    ? 'border-cyan-400 text-white'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-4 h-4 text-cyan-400" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-200 text-sm leading-relaxed">
          
          {/* TAB 1: WIREFRAME */}
          {activeTab === 'wireframe' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-800/40 text-xs text-blue-200">
                {isAr
                  ? 'تم تصميم الهيكل وفق مبدأ Mobile-First وبنية تسويقية تقنع الزائر وتحفزه على الحجز السريع خلال أقل من 5 ثوانٍ.'
                  : 'Engineered with Mobile-First discipline, prioritizing high conversion rate and sub-3-second load times.'}
              </div>

              <div className="space-y-4">
                {[
                  {
                    num: '1',
                    name: isAr ? 'القسم العلوي (Hero Section)' : 'Hero Section',
                    content: isAr
                      ? 'خلفية داكنة فخمة مع سيارة دفع رباعي متقدمة، عنوان رئيسي: "رحلات آمنة.. وخدمة تليق بك"، عنوان فرعي: "من صنعاء إلى عدن وجميع المحافظات.. أسطول حديث ومواعيد دقيقة"، زران بارزان (احجز الآن - أخضر واتساب، اتصل بنا - أزرق ملكي)، ومربع بحث سريع مدمج.'
                      : 'Parallax launch view with luxury SUV, strong headline, subheadline, dual CTAs (Green WhatsApp & Royal Blue Call), plus quick route booking strip.',
                  },
                  {
                    num: '2',
                    name: isAr ? 'شريط الثقة (Trust Bar)' : 'Trust Bar',
                    content: isAr
                      ? 'شريط أفقي متجاوب يبرز 4 أركان أساسية: أسطول حديث، سائقون محترفون، التزام بالمواعيد، وتغطية شاملة لجميع المحافظات.'
                      : 'High-impact trust strip detailing modern fleet, certified veteran drivers, strict punctuality, and nationwide coverage.',
                  },
                  {
                    num: '3',
                    name: isAr ? 'قسم الخدمات (Services)' : 'Services Cards',
                    content: isAr
                      ? 'أربع بطاقات تفاعلية: رحلات الأفراد والعائلات، نقل الشركات والموظفين، رحلات VIP رجال الأعمال، وخدمة الباب إلى الباب مع استعراض المزايا لكل خدمة.'
                      : 'Interactive cards for Individual Travel, Corporate Mobility, Executive VIP, and Door-to-Door pick-up.',
                  },
                  {
                    num: '4',
                    name: isAr ? 'قسم خطوط السير (Routes)' : 'Routes Network',
                    content: isAr
                      ? 'مسارات السفر الرئيسية (صنعاء - عدن، عدن - صنعاء، صنعاء - تعز، عدن - المكلا، صنعاء - مأرب، صنعاء - إب) مع المسافة بالكيلومتر، زمن الرحلة، وجدول المواعيد اليومية وزر حجز فوري لكل خط.'
                      : 'Interactive route matrix with distance, duration, daily departure timings, and direct route seat booking button.',
                  },
                  {
                    num: '5',
                    name: isAr ? 'قسم "لماذا النعمان؟" (Why Us)' : 'Why Us Section',
                    content: isAr
                      ? 'صيانة دورية للسيارات قبل كل رحلة، تعقيم ونظافة يومية للمقاعد، دعم فني وغرفة عمليات 24/7، وانضباط تام بالمواعيد.'
                      : 'Four core guarantee pillars: pre-trip vehicle maintenance, daily cabin sanitization, 24/7 dispatch ops room, and punctuality.',
                  },
                  {
                    num: '6',
                    name: isAr ? 'قسم الأسطول (Fleet Showcase)' : 'Fleet Section',
                    content: isAr
                      ? 'معرض عالي الجودة للسيارات (تويوتا لاندكروزر V8، باصات مرسيدس وهايس VIP، وسيارات السفر السريع) مع استعراض السعة، حقائب الأمتعة، ونظام التكييف.'
                      : 'High-res automotive photography, seating and luggage specs, air conditioning, and reservation trigger.',
                  },
                  {
                    num: '7',
                    name: isAr ? 'قسم آراء العملاء (Testimonials)' : 'Testimonials',
                    content: isAr
                      ? 'شهادات حقيقية من مدراء مشروعات، رجال أعمال، عائلات، ومؤسسات تجارية تبرز المصداقية على خط صنعاء - عدن.'
                      : 'Verified social proof from business leaders, engineers, families, and partner corporations.',
                  },
                  {
                    num: '8',
                    name: isAr ? 'قسم التواصل والفوتر (Contact & Footer)' : 'Contact & Footer',
                    content: isAr
                      ? 'إبراز رقم الهاتف والواتساب (+967 775095966)، محطات انطلاق الشركة عدن وصنعاء (الأماكن الرئيسية)، نموذج استفسار سريع، وزر واتساب عائم دائم.'
                      : 'Prominent phone & WhatsApp contact (+967 775095966), main terminal locations in Sanaa and Aden, plus inquiry form and floating CTA.',
                  },
                ].map((item) => (
                  <div key={item.num} className="p-4 rounded-xl bg-[#061122] border border-blue-900/60">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-6 h-6 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                        {item.num}
                      </span>
                      <h4 className="font-extrabold text-white text-base">{item.name}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 mr-8 rtl:mr-8 ltr:ml-8">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: PALETTE & TYPOGRAPHY */}
          {activeTab === 'palette' && (
            <div className="space-y-6">
              
              <div>
                <h4 className="text-base font-extrabold text-white mb-3">
                  {isAr ? 'نظام الألوان الرسمي المستوحى من هوية النعمان:' : 'Official Brand Color Palette:'}
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { name: isAr ? 'الأزرق الملكي العميق (Royal Navy)' : 'Deep Royal Navy', hex: '#0B2545', role: isAr ? 'اللون الرئيسي للخلفيات والبطاقات الفخمة' : 'Dominant luxury background & surfaces' },
                    { name: isAr ? 'أزرق النعمان الأساسي (Brand Blue)' : 'Brand Royal Blue', hex: '#134074', role: isAr ? 'السطوح الثانوية والإطارات الأنيقة' : 'Secondary structural surfaces' },
                    { name: isAr ? 'الأزرق التفاعلي (Vibrant Blue)' : 'Vibrant Blue CTA', hex: '#2563EB', role: isAr ? 'الأزرار التفاعلية وروابط التحديد' : 'Interactive buttons & focus states' },
                    { name: isAr ? 'أخضر الواتساب (WhatsApp Green)' : 'Conversion WhatsApp Green', hex: '#25D366', role: isAr ? 'الزر البارز للحجز الفوري وزر الواتساب العائم' : 'Primary conversion action point' },
                    { name: isAr ? 'الرمادي الفضي (Silver Ice)' : 'Silver Metallic Grey', hex: '#EEF4F8', role: isAr ? 'النصوص المتباينة واللمسات المعدنية' : 'High-contrast typography & metallic accents' },
                    { name: isAr ? 'السماوي الضوئي (Cyan Glow)' : 'Cyan Speed Glow', hex: '#38BDF8', role: isAr ? 'خطوط الإضاءة وسرعة الانطلاق' : 'Speed lines & ambient badges' },
                  ].map((color, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#061122] border border-blue-900/60 flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl shrink-0 border border-white/20 shadow-md"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div>
                        <div className="font-bold text-white text-xs">{color.name}</div>
                        <div className="font-mono text-cyan-300 text-xs font-bold">{color.hex}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{color.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography */}
              <div className="pt-4 border-t border-blue-900/60">
                <h4 className="text-base font-extrabold text-white mb-3">
                  {isAr ? 'نظام الخطوط العربية (Typography System):' : 'Typography System (Arabic & Latin):'}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-[#061122] border border-blue-900/60">
                    <span className="text-xs font-bold text-cyan-400 block mb-1">خط العناوين والهوية الرئيسية (Headings)</span>
                    <h5 className="text-xl font-black text-white font-cairo mb-2">خط كايرو (Cairo)</h5>
                    <p className="text-xs text-slate-300 leading-relaxed font-cairo">
                      خط هندسي عربي حديث ومتميز، يعكس القوة والسرعة والثقة. تم استخدامه بأوزان (Bold 700 / ExtraBold 800 / Black 900) للعناوين الرئيسية والفرعية وأسماء الخدمات.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#061122] border border-blue-900/60">
                    <span className="text-xs font-bold text-cyan-400 block mb-1">خط النصوص والفقرات (Body Prose)</span>
                    <h5 className="text-xl font-bold text-white font-tajawal mb-2">خط تجوال (Tajawal) & كايرو (Cairo)</h5>
                    <p className="text-xs text-slate-300 leading-relaxed font-tajawal">
                      يتميز بالسلاسة العالية وقابلية القراءة الاستثنائية على شاشات الهواتف المحمولة في ظروف الإضاءة المختلفة، مستخدم بأوزان (Regular 400 / Medium 500).
                    </p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: USER FLOW */}
          {activeTab === 'flow' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-200">
                {isAr
                  ? 'تم تصميم مسار تجربة المستخدم (User Flow) لتقليل الاحتكاك إلى الصفر، وتحويل الزائر إلى حجز مؤكد عبر الواتساب في 3 خطوات بسيطة وسريعة.'
                  : 'Zero-friction booking pipeline converting website visitors into confirmed passenger bookings in 3 rapid steps.'}
              </div>

              <div className="relative space-y-6">
                {[
                  {
                    step: 'الخطوة 1: الضغط على "احجز رحلتك الآن"',
                    title: 'انطلاق نافذة الحجز التفاعلية واختيار المسار',
                    details: 'يتم فتح نافذة سريعة دون مغادرة الصفحة. يختار المسافر: (مدينة الانطلاق: صنعاء / عدن / أخرى) ⟵ (مدينة الوصول) ⟵ (تاريخ السفر) ⟵ (الوقت المفضل: صباحاً / ليلاً) ⟵ (نوع الرحلة: مقعد مشترك / لاندكروزر VIP / شركات / باب للباب).',
                  },
                  {
                    step: 'الخطوة 2: إدخال بيانات المسافر',
                    title: 'تحديد عدد المقاعد ومعلومات الاتصال',
                    details: 'إدخال اسم المسافر، رقم الهاتف/الواتساب، عدد المقاعد المطلوبة، وموقع الانطلاق الدقيق (إذا اختار خدمة الباب للباب). مع تحقق فوري من صحة البيانات.',
                  },
                  {
                    step: 'الخطوة 3: التوليد الآلي لرسالة الواتساب والتأكيد الفوري',
                    title: 'الربط المباشر مع غرفة عمليات النعمان (+967 775095966)',
                    details: 'يظهر ملخص الحجز برقم مرجعي فريد (مثل ALN-39182)، مع زر أخضر بارز: "إرسال الحجز عبر الواتساب الآن". عند الضغط عليه، يفتح تطبيق الواتساب مباشرة برقم الشركة مع نص رسالة منسقة وجاهزة للإرسال بضغطة زر واحدة دون الحاجة للكتابة!',
                  },
                  {
                    step: 'الخطوة 4: المتابعة والتأكيد المباشر',
                    title: 'استجابة موظف العمليات وإرسال بيانات السائق',
                    details: 'يقوم موظف العمليات بتأكيد المقاعد وإرسال رقم لوحة السيارة واسم السائق وموعد التحرك عبر الواتساب مباشرة.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#061122] border border-blue-900/60 relative">
                    <span className="text-xs font-bold text-cyan-400 block mb-1">{item.step}</span>
                    <h5 className="text-base font-extrabold text-white mb-2">{item.title}</h5>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Close */}
        <div className="p-4 bg-[#051122] border-t border-blue-900/60 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition-all"
          >
            {isAr ? 'إغلاق الدليل' : 'Close Guide'}
          </button>
        </div>

      </div>
    </div>
  );
};
