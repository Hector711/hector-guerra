import React from 'react';
import ContactLinks from './components/ContactLinks';
import Section from '@/Sections/components/Section';
import YouTube from '@/assets/YouTube';
import cv from '@root/cv.json'

export default function Hero() {
  const basics = cv.basics;
  const { nickname, name } = basics;
  return (
    <Section>
      <header>
        <div className='box-hero ' id='img-container'>
          <div id='header-container'>
            <h1>{name}</h1>
            <h3>Full Stack Developer</h3>
          </div>
            
            <ContactLinks />
        </div>
        <div className='box-hero' id='about'>
          <h3 className='dark:bg-fuchsia-700'>About</h3>
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
            <YouTube />
          </div>
          <div id='video-resume-hover'>
            <h5>Tired of watching tons of portfolios?</h5>
          </div>
        </a>

        <a href='/' className='hero-section-link' id='sec-hero-section'>
          <h3>Discover</h3>
          <h3 className='bold'>NEO SIMULATION</h3>
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
