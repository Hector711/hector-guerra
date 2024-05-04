import React from 'react';
import SocialLinks from './components/SocialLinks';
import Section from '@/Sections/components/Section';
import YouTube from '@/assets/social/YouTube';
import cv from '@root/cv.json';

export default function Hero() {
  const basics = cv.basics;
  const { nickname, name } = basics;
  return (
    <Section id='header-section'>
      <header>
        <div className='box-hero ' id='img-container'>
          <div id='header-container'></div>
          <SocialLinks />
        </div>
        <div className='box-hero' id='about'>
          <h1 className='sec'>Full Stack Web Developer</h1>
          <p>I just wanna make a difference.</p>
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
          {/* <h3>Discover</h3> */}
          <h3 className='bold'>NEO SIMULATION</h3>
        </a>
        <a
          href='https://calendar.notion.so/meet/hectoor_xx/z81iw4hiq'
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
