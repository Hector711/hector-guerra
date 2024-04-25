import React from 'react';
import SocialIcons from './components/SocialIcons';
import Section from '@/Sections/components/Section';
import YouTube from '@/assets/YouTube.svg';

export default function Hero() {
  return (
    <Section>
      <header>
        <div className='box-hero' id='img-container'>
          <div id='header-container'>
            <h1>Héctor Guerra</h1>
            <h3>Full Stack Developer</h3>
          </div>
            
            <SocialIcons />
        </div>
        <div className='box-hero' id='about'>
          <h3>About</h3>
          <p>
            Enthusiastic beginner developer eager to break into the tech
            industry. Seeking first job opportunity to kickstart a fulfilling
            programming career.
          </p>
        </div>
        {/* FIRST */}
        <a href='/' id='first-hero-section' className='hero-section-link'>
          <div id='video-resume'>
            <h3>1 minute video resume</h3>
            <img src={YouTube} alt='' />
          </div>
          <div id='video-resume-hover'>
            <h5>Tired of watching tons of portfolios?</h5>
            <p className='caption'>
              Let me show you what you need to know about me in a 1 minute
              video!
            </p>
          </div>
        </a>

        <a href='/' className='hero-section-link' id='sec-hero-section'>
          <h3>Discover</h3>
          <h3 className='bold'>NEO SOCIAL</h3>
        </a>
        <a
          href='https://calendly.com/hector-guerra/llamada-1-a-1'
          target='_blank'
          className='hero-section-link'
          id='third-hero-section'
        >
          <h3>
            Schedule a <br />1 to 1 <br />
            call on
          </h3>
          <h3 className='calendly'>Calendly</h3>
        </a>
      </header>
    </Section>
  );
}
