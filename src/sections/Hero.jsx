import React from 'react';
import SocialLinks from '../components/SocialLinks';
import ArrowDownIcon from '@/assets/ArrowDownIcon';
import { usePortfolio } from '@/context/PortfolioContext';
import { useTranslation } from 'react-i18next';



export default function Hero() {
  const { t } = useTranslation();
  
  const { sectionRef } = usePortfolio();

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='hero'>
      <header className='hero'>
        <h2 className='hero'>{t("basics:label")}</h2>
        <div className="App">
    </div>
  
      </header>
      <section className='hero about'>
        <h4 className='about'>
          {t("basics:tagline")}
        </h4>
        <SocialLinks />
      </section>
      <footer className='hero'>
          <button onClick={scrollToSection}>
            <ArrowDownIcon />
          </button>
      </footer>
    </div>
  );
}
