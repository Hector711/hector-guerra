import React from 'react';
import SocialLinks from '../components/SocialLinks';
import { useState, useEffect } from 'react';
// import YouTube from '@/assets/social/YouTube';
// import cv from '@locales/cv.json';
// import { useTranslation } from 'react-i18next';
import supabase from '@/api/supabase';
import ArrowDown from '@/assets/ArrowDown';
import { usePortfolio } from '@/context/PortfolioContext';


   

export default function Hero() {
  const [basics, setBasics] = useState([]);
  const { sectionRef } = usePortfolio();

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    getBasics();
  }, []);

  async function getBasics() {
    const { data } = await supabase
      .from('Basics')
      .select()
      .eq('lng', 'ES')
      .single();
    setBasics(data);
  }

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
        color: '#0069ff',
        textColor: '#ffffff',
        branding: undefined,
      });
    };
    document.body.appendChild(script);
  }, []);

  // const { t } = useTranslation();
  return (
    <article className='hero'>
      <header className='hero'>
        <h2 className='hero'>{basics.label}</h2>
        <div className="App">
    </div>
  
      </header>
      <section className='about'>
        <h4 className='about'>
          {basics.about &&
            basics.about.split('. ').map((sentence, index) => (
              <React.Fragment key={index}>
                {sentence}.
                <br />
                <br />
              </React.Fragment>
            ))}
        </h4>
        <SocialLinks />
      </section>
      <footer className='hero'>
        <figure>
          {/* <hr /> */}
          <button onClick={scrollToSection}>
            <ArrowDown id='space-icon' />
          </button>
        </figure>
      </footer>
    </article>
  );
}
