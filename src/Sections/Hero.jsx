import React from 'react';
import SocialLinks from './components/SocialLinks';
import { useState, useEffect } from 'react';
import YouTube from '@/assets/social/YouTube';
import cv from '@locales/cv.json';
import { useTranslation } from 'react-i18next';
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
  // const basics = cv.basics;
  // const { nickname, name } = basics;
  return (
    <article className='hero'>
      <header className='hero'>
        <h2 className='hero'>{basics.label}</h2>
      </header>
      <section className='about'>
        <h4 className='about'>
        {/* {basics.about} */}
        
        </h4>
      </section>
      <SocialLinks />
      {/* <aside className='profile-photo'>
        <div id='profile-photo'></div>
      </aside> */}
    </article>
  );
}

{
  /* <header>
        <div className='box-hero' id='about'>
          <h1 className='sec'>Full Stack Web Developer</h1>
          <p>I just wanna make a difference.</p>
        </div>

        <a href='/' id='first-hero-section' className='hero-section-link'>
            <h3 className='title-hero-section'>{t("translations:hero.first-hero-section")}</h3>
            <YouTube id='yt-icon'/>
        </a>

        <a href='/' className='hero-section-link' id='sec-hero-section'>
          <h3 className='bold'>{t("translations:hero.sec-hero-section")}</h3>
        </a>
        <a
          href='https://calendly.com/hector-guerra/llamada-1-a-1'
          target='_blank'
          className='hero-section-link'
          id='third-hero-section'
        >
          <h3>
          {t("translations:hero.third-hero-section")}          </h3>
          <h3 className='calendly'>Calendly</h3>
        </a>
      </header> */
}
