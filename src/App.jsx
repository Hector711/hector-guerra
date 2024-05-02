import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Navbar from '@/Sections/Navbar';
import Footer from '@/Sections/Footer';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  const hideDiv = () => {
    setIsVisible(false);
  };

  return (
    <>
      <HashRouter>
        <Navbar />
        <main className='animate-fade-in-up'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          {isVisible && (
            <div id='working'>
              <h1 className=' text-center'>
                Working on it... <br /> <br /> Date of release: May 5th
              </h1>
              <button onClick={hideDiv} className='w-[100px] h-[50px]'>
                <h3>Sure!</h3>
              </button>
            </div>
          )}
        </main>
        <Footer />
      </HashRouter>
    </>
  );
}
