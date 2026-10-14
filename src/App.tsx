/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { RoutesSection } from './components/RoutesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { FleetSection } from './components/FleetSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactFooter } from './components/ContactFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { DesignSystemModal } from './components/DesignSystemModal';
import { Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isDesignDocOpen, setIsDesignDocOpen] = useState(false);
  const [bookingDefaults, setBookingDefaults] = useState<{
    from?: string;
    to?: string;
    service?: string;
  }>({});

  // Synchronize HTML dir attribute when language changes
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleOpenBooking = (defaults?: { from?: string; to?: string; service?: string }) => {
    if (defaults) {
      setBookingDefaults(defaults);
    } else {
      setBookingDefaults({});
    }
    setIsBookingOpen(true);
  };

  const handleSelectService = (serviceTitle: string) => {
    setBookingDefaults({ service: serviceTitle });
    setIsBookingOpen(true);
  };

  const handleBookRoute = (from: string, to: string) => {
    setBookingDefaults({ from, to });
    setIsBookingOpen(true);
  };

  const handleBookVehicle = (vehicleName: string) => {
    setBookingDefaults({ service: vehicleName });
    setIsBookingOpen(true);
  };

  return (
    <div className={`min-h-screen bg-[#061122] text-slate-100 selection:bg-blue-600 selection:text-white ${lang === 'ar' ? 'font-cairo' : 'font-sans'}`}>
      
      {/* 1. Header Navigation Bar (Strict 3-zone contract) */}
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenBooking={() => handleOpenBooking()}
        onOpenDesignDoc={() => setIsDesignDocOpen(true)}
      />

      <main>
        {/* 2. Hero Section ("الانطباع الأول" - Parallax 3D Launch feel) */}
        <Hero
          lang={lang}
          onOpenBooking={handleOpenBooking}
        />

        {/* 3. Trust Bar (شريط الثقة) */}
        <TrustBar lang={lang} />

        {/* 4. Services Section (قسم الخدمات: أفراد، شركات، VIP، باب للباب) */}
        <ServicesSection
          lang={lang}
          onSelectService={handleSelectService}
        />

        {/* 5. Routes Section (قسم خطوط السير: صنعاء - عدن وكافة المحافظات) */}
        <RoutesSection
          lang={lang}
          onBookRoute={handleBookRoute}
        />

        {/* 6. Why Us Section (قسم لماذا النعمان: صيانة، تعقيم، 24/7، انضباط) */}
        <WhyUsSection lang={lang} />

        {/* 7. Fleet Section (قسم الأسطول: SUV لاندكروزر، باصات VIP) */}
        <FleetSection
          lang={lang}
          onBookVehicle={handleBookVehicle}
        />

        {/* 8. Testimonials Section (قسم آراء العملاء) */}
        <TestimonialsSection lang={lang} />
      </main>

      {/* 9. Contact & Footer (قسم التواصل: +967 775095966، فروع ومحطات، نموذج سريع) */}
      <ContactFooter
        lang={lang}
        onOpenBooking={() => handleOpenBooking()}
        onOpenDesignDoc={() => setIsDesignDocOpen(true)}
      />

      {/* 10. Floating WhatsApp Button (زر واتساب عائم) */}
      <FloatingWhatsApp
        lang={lang}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 11. Interactive Step-by-Step Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        lang={lang}
        initialData={bookingDefaults}
      />

      {/* 12. Interactive UX/UI Architecture & Design Guide Modal */}
      <DesignSystemModal
        isOpen={isDesignDocOpen}
        onClose={() => setIsDesignDocOpen(false)}
        lang={lang}
      />

    </div>
  );
}
