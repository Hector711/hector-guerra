import React from 'react';
import SocialLinks from '../components/SocialLinks';
import { useState, useEffect } from 'react';
import supabase from '@/api/supabase';
import ArrowDownIcon from '@/assets/ArrowDownIcon';
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

  

  // const { t } = useTranslation();
  return (
    <div className='hero'>
      <header className='hero'>
        <h2 className='hero'>{basics.label}</h2>
        <div className="App">
    </div>
  
      </header>
      <section className='hero about'>
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
          <button onClick={scrollToSection}>
            <ArrowDownIcon />
          </button>
      </footer>
    </div>
  );
}
