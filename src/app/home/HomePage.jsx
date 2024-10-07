import React, { useEffect } from 'react';
import Hero from '@/app/home/sections/Hero';
import { useTranslation } from 'react-i18next';
import { Toaster } from 'react-hot-toast';
import Las3Claves from '@/app/home/sections/Las3Claves';
import ProductosEstrella from '@/app/home/sections/ProductosEstrella';
import HerramientasGratuitas from '@/app/home/sections/HerramientasGratuitas';
import Interseccion1 from '@/app/home/sections/Interseccion1';
import Interseccion2 from '@/app/home/sections/Interseccion2';
import Interseccion3 from '@/app/home/sections/Interseccion3';
import Interseccion4 from '@/app/home/sections/Interseccion4';
import Testimonios from '@/app/home/sections/Testimonios';
import Equipo from '@/app/home/sections/Equipo';
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
      <Interseccion1 />
      <ProductosEstrella />
      <Interseccion2 />
      <Testimonios />
      <Interseccion3 />
      <Equipo />
      <HerramientasGratuitas />
      <Interseccion4 />
      <FAQ />
    </>
  );
}
