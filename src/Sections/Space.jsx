import React from 'react';
import ArrowDown from '@/assets/ArrowDown';
import { usePortfolio } from '@/context/PortfolioContext';

export default function Space() {
  const { sectionRef } = usePortfolio();

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='space'>
      <figure>
        <hr />
        <button onClick={scrollToSection}>
          <ArrowDown id='space-icon' />
        </button>
      </figure>
    </section>
  );
}
