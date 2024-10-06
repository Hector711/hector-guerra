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
        <h2 className='hero'>
        <span className='special'>&nbsp;Automatiza&nbsp;</span> procesos, y deja que la <span className='special'>&nbsp;IA&nbsp;</span> trabaje para ti.</h2>
      </header>
      <section className='hero about'>
        <div id='video'>
          
        </div>
        <h4 className='hero'></h4>

      </section>
      <footer className='hero'>
        <button>
          Quiero saber más!
        </button>
        <SocialLinks />
        <button onClick={scrollToSection}>
          <ArrowDownIcon />
        </button>
      </footer>
    </div>
  );
}
