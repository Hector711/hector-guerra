import React, { useEffect } from 'react';
import Hero from '@/app/home/sections/Hero';
import { useTranslation } from 'react-i18next';
import { Toaster } from 'react-hot-toast';
import Claves from '@/app/home/sections/Claves';
import Productos from '@/app/home/sections/Productos';
import HerramientasGratuitas from '@/app/home/sections/Herramientas';
import Interseccion1 from '@/app/home/sections/Interseccion1';
import Interseccion2 from '@/app/home/sections/Interseccion2';
import Interseccion3 from '@/app/home/sections/Interseccion3';
import Interseccion4 from '@/app/home/sections/Interseccion4';
import Interseccion5 from '@/app/home/sections/Interseccion5';
import Testimonios from '@/app/home/sections/Testimonios';
import Equipo from '@/app/home/sections/Equipo';
import FAQ from '@/app/home/sections/FAQ';
import Footer from '@/components/Footer';

export default function HomePage() {
  const { t } = useTranslation();
  // useEffect(() => {
  //   const link = document.createElement('link');
  //   link.href = 'https://assets.calendly.com/assets/external/widget.css';
  //   link.rel = 'stylesheet';
  //   document.head.appendChild(link);

  //   const script = document.createElement('script');
  //   script.src = 'https://assets.calendly.com/assets/external/widget.js';
  //   script.async = true;
  //   script.onload = () => {
  //     Calendly.initBadgeWidget({
  //       url: 'https://calendly.com/hector-guerra/asesoria-sobre-ia',
  //       text: t('translations:book_a_call'),
  //       branding: undefined,
  //     });
  //   };
  //   document.body.appendChild(script);
  // }, []);

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
      <Claves />
      <Interseccion1 />
      <Productos />
      <Interseccion2 />
      <Testimonios />
      <Interseccion3 />
      <Equipo />
      <Interseccion4 />
      <HerramientasGratuitas />
      <Interseccion5 />
      <FAQ />
  
    </>
  );
}
