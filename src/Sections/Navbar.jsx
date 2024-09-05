import React from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import LanguageSelection from './components/LanguageSelection';

export default function Navbar() {
  return (
    <nav>
      <div id='nav-container' className='flex justify-between items-center'>
        <div
          className='flex justify-center items-center gap-5'
          id='left-nav-container'
        >
            <h1 className='hero'>Héctor Guerra</h1>
        </div>

        <div
          className='flex justify-center items-center gap-4'
          id='right-nav-container'
        >

          <a
            href='https://hector-minimalist-cv.netlify.app'
            rel='noopener noreferrer'
            target='_blank'
            className='nav-buttons white-hover'
            id='cv-button'
          >
            Minimal CV
          </a>
        </div>
      </div>
    </nav>
  );
}
