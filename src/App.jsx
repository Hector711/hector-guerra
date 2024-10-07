import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home.jsx';
import Navbar from '@/sections/Navbar.jsx';
import Footer from '@/sections/Footer.jsx';
import { PortfolioProvider } from '@/context/PortfolioContext.jsx';

export default function App() {
  return (
    <PortfolioProvider>
      <HashRouter>
        <Navbar />
        <main className='animate-fade-in-up animate-delay-300 animate-duration-900'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </PortfolioProvider>
  );
}
