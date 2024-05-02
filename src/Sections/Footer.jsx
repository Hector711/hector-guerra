import React from 'react';
import GitHub from '@/assets/social/GitHub';
import WhatsApp from '@/assets/social/WhatsApp';
import ReactJS from '@/assets/skills/ReactJS';
import Heart from '@/assets/Heart';

export default function Footer() {
  return (
    <footer>
      <div id='footer-container'>
        <div>
          <a
            href=''
            rel='noopener noreferrer'
            target='_blank'
            className='social-icons white-hover footer-links'
          >
            Hire Me
            <WhatsApp className='footer-icon' />
          </a>
        </div>
        <div>
          <p id ='made-by'>Made by Héctor with <Heart className='icons-made-by'/> and React <ReactJS className='icons-made-by'/></p>
        </div>
        <a
          href='https://github.com/Hector711/hector711.github.io'
          rel='noopener noreferrer'
          target='_blank'
          className='social-icons white-hover footer-links'
        >
          GitHub Repository
          <GitHub className='footer-icon' />
        </a>
      </div>
    </footer>
  );
}
