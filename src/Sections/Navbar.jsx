import React from 'react';
import Language from '@/assets/Language';
import CarouselQuotes from '@/Sections/CarouselQuotes';
import DarkModeToggle from './components/DarkModeToggle';
import Toggle from './Toggle';

export default function Navbar() {
  return (
    <nav>
      <div id='nav-container' className='flex justify-between'>
        <div className='flex justify-center items-center'>
          <button className='nav-button'>
            <a href='https://hector-minimalist-cv.netlify.app' target='_blank'>
              Minimal CV
            </a>
          </button>
        </div>

        <CarouselQuotes />
        {/* <VideoResume /> */}

        <div className='flex justify-center items-center gap-4 '>

          {/* <Toggle /> */}
          <button className='nav-button'>
            <Language />
          </button>
          
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}
