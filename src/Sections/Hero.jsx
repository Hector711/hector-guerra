import React from 'react';
import SocialLinks from '../components/SocialLinks';
import { useState, useEffect } from 'react';
// import YouTube from '@/assets/social/YouTube';
// import cv from '@locales/cv.json';
// import { useTranslation } from 'react-i18next';
import supabase from '@/api/supabase';

export default function Hero() {
  const [basics, setBasics] = useState([]);
  
    useEffect(() => {
      getBasics();
    }, []);
  
    async function getBasics() {
      const { data } = await supabase
        .from("Basics")
        .select()
        .eq('lng', 'ES')
        .single()
      setBasics(data);
    }

    console.log(basics);

  // const { t } = useTranslation();
  return (
    <article className='hero'>
      <header className='hero'>
        <h2 className='hero'>{basics.label}</h2>
      </header>
      <section className='about'>
        <h4 className='about'>
        {basics.about && basics.about.split('. ').map((sentence, index) => (
            <React.Fragment key={index}>
              {sentence}.
              <br /><br />
            </React.Fragment>
          ))}
        </h4>
      </section>
      <SocialLinks />
    </article>
  );
}

