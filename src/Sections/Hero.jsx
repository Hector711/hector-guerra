import React from 'react';
import SocialLinks from './components/SocialLinks';

import YouTube from '@/assets/social/YouTube';
import cv from '@locales/cv.json';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  const basics = cv.basics;
  const { nickname, name } = basics;
  return (
    <article className='hero'>
      <header className='hero'>
        <h1 className='hero'>Héctor Guerra</h1>
        <h2 className='hero'>Full Stack Web Developer</h2>
      </header>
      <section className='about'>
        <h4 className='about'>
        Desarrollador junior con un profundo interés en la programación y una firme determinación de ingresar al mundo tecnológico. Busco activamente mi primera oportunidad laboral como programador, con la ambición de construir una carrera sólida y duradera.
        </h4>
      </section>
      <SocialLinks />
      <aside className='profile-photo'>
        <div id='profile-photo'></div>
      </aside>
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
