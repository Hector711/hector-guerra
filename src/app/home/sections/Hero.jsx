import React from 'react';
// import SocialLinks from '@/components/SocialLinks';
import GoDownIcon from '@/icons/GoDownIcon';
import { usePortfolio } from '@/context/PortfolioContext';
import { useTranslation } from 'react-i18next';
import YouTubeVideo from '@/components/Youtube';
import CalendlyButton from '@/components/CalendlyButton';
export default function Hero() {
  const { t } = useTranslation();

  const { sectionRef } = usePortfolio();

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className='body hero'>
      <div id='hero-title'>
        <h2 className='hero'>
          <em className='special'>&nbsp;Automatiza&nbsp;</em> procesos y
        </h2>
        <h2>
          deja que la <em className='special'>&nbsp;IA&nbsp;</em> trabaje para
          ti
        </h2>
      </div>
      <YouTubeVideo url='https://www.youtube.com/embed/dQw4w9WgXcQ?si=Z5Z5Z5Z5Z5Z5Z5Z5' />
      <h2 className='caption'>
        No necesitas ser un experto en IA, yo lo hago por ti con soluciones a
        medida
      </h2>
      <CalendlyButton>Contacta conmigo</CalendlyButton>
      <button onClick={scrollToSection}>
        <GoDownIcon />
      </button>
    </header>
  );
}
