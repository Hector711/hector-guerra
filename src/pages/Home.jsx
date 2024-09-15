import React, { useEffect } from 'react';
import Hero from '@/sections/Hero';
// import SkillsSection from '@/sections/SkillsSection';
import NeoSection from '@/sections/NeoSection';
import N3uralabSection from '@/sections/N3uralabSection';
import { useTranslation } from 'react-i18next';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  const { t } = useTranslation();
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      Calendly.initBadgeWidget({
        url: 'https://calendly.com/hector-guerra/llamada-1-a-1',
        text: t('translations:book_a_call'),
        branding: undefined,
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
    <Toaster
            position='bottom-left'
            reverseOrder={false}
            containerClassName='toasts-container'
            toastOptions={{
              className: 'toasts',
            }}
          />
      <Hero />
      <N3uralabSection />
      <NeoSection  />
      {/* <SkillsSection className="animate-fade-in-up"/> */}
    </>
  );
}
