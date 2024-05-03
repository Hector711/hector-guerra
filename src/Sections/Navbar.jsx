import React from 'react';
import Language from '@/assets/nav/Language';
import DarkModeToggle from './components/DarkModeToggle';
import LanguageSelection from './components/LanguageSelection';

export default function Navbar() {
  return (
    <nav>
      <div id='nav-container' className='flex justify-between'>
        <div
          className='flex justify-center items-center gap-5'
          id='left-nav-container'
        >
          <h1 className='nav bold'>Héctor Guerra</h1>
        </div>

        <div
          className='flex justify-center items-center gap-4'
          id='right-nav-container'
        >
          <button className='right-buttons nav-buttons' id='inter-button'>
            <Language />
          </button>
          <LanguageSelection />
          <DarkModeToggle />
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
