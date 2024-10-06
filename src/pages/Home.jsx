import React, { useEffect } from 'react';
import Hero from '@/sections/Hero';
import { useTranslation } from 'react-i18next';
import { Toaster } from 'react-hot-toast';
import Las3Claves from '@/sections/Las3Claves';
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
        url: 'https://calendly.com/hector-guerra/asesoria-sobre-ia',
        text: t('translations:book_a_call'),
        branding: undefined,
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      {/* No es necesario incluir <link> y <script> aquí, ya que se manejan en useEffect */}

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
    </>
  );
}
