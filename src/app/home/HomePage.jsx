import React, { useEffect } from 'react';
import Hero from '@/app/home/sections/Hero';
import { useTranslation } from 'react-i18next';
import { Toaster } from 'react-hot-toast';
import Las3Claves from '@/app/home/sections/Las3Claves';
import ProductosEstrella from '@/app/home/sections/ProductosEstrella';
import HerramientasGratuitas from '@/app/home/sections/HerramientasGratuitas';
import Inter1 from '@/app/home/sections/Inter1';
import Inter2 from '@/app/home/sections/Inter2';
import Inter3 from '@/app/home/sections/Inter3';
import Inter4 from '@/app/home/sections/Inter4';
import Testimonios from '@/app/home/sections/Testimonios';
import FAQ from '@/app/home/sections/FAQ';

export default function HomePage() {
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
        url: 'https://calendly.com/hector-guerra/asesoria-sobre-ia',
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
      <Las3Claves />
      <Inter1 />
      <ProductosEstrella />
      <Inter2 />
      <Testimonios />
      <Inter3 />
      <HerramientasGratuitas />
      <Inter4 />
      <FAQ />
    </>
  );
}
