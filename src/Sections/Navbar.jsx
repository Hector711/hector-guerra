import React from 'react';
import Language from '@/assets/Language';
// import CarouselQuotes from '@/Sections/components/CarouselQuotes';
import DarkModeToggle from './components/DarkModeToggle';

export default function Navbar() {
  return (
    <nav>
      <div id='nav-container' className='flex justify-between'>
        <div
          className='flex justify-center items-center'
          id='left-nav-container'
        >
          <button className='nav-buttons' id='cv-button'>
            <a href='https://hector-minimalist-cv.netlify.app' target='_blank'>
              Minimal CV
            </a>
          </button>
        </div>
        {/* <CarouselQuotes /> */}
        
        <div
          className='flex justify-center items-center gap-4'
          id='right-nav-container'
        >
          <button className='right-buttons nav-buttons' id='inter-button'>
            <Language />
          </button>

          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}
