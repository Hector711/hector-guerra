import React from 'react';
import SocialLinks from '../components/SocialLinks';
import ArrowDownIcon from '@/assets/ArrowDownIcon';
import { usePortfolio } from '@/context/PortfolioContext';
import { useTranslation } from 'react-i18next';
import YouTubeVideo from '@/components/Youtube';

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
          <span className='special'>&nbsp;Automatiza&nbsp;</span> procesos y
        </h2>
        <h2>
          deja que la <span className='special'>&nbsp;IA&nbsp;</span> trabaje
          para ti.
        </h2>
      </div>
      <figure id='video-vsl' className='video-container'>
        <YouTubeVideo url='https://www.youtube.com/embed/dQw4w9WgXcQ?si=Z5Z5Z5Z5Z5Z5Z5Z5' />
      </figure>
      <p className='caption'>
        No necesitas ser un experto en IA,
        yo lo hago por ti con soluciones a medida.
      </p>
      <a
        id='contact-btn'
        href=''
        onClick={e => {
          e.preventDefault();
          Calendly.initPopupWidget({
            url: 'https://calendly.com/hector-guerra/asesoria-sobre-ia?hide_gdpr_banner=1&background_color=181818&text_color=fafafa',
          });
        }}
      >
        Adelantate a tu competencia!
      </a>
      <SocialLinks />
      <button onClick={scrollToSection}>
        <ArrowDownIcon />
      </button>
    </header>
  );
}
