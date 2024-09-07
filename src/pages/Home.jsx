import React, { useEffect } from 'react';
import Hero from '@/sections/Hero';
import SkillsSection from '@/sections/SkillsSection';
import NeoSection from '@/sections/NeoSection';
import N3uralabSection from '@/sections/N3uralabSection';

export default function Home() {
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
        text: 'Programa una reunión conmigo',

        branding: undefined,
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Hero />
      <N3uralabSection />
      <NeoSection  />
      <SkillsSection className="animate-fade-in-up"/>
    </>
  );
}
