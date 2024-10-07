import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/app/home/HomePage.jsx';
import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';
import { PortfolioProvider } from '@/context/PortfolioContext.jsx';

export default function App() {
  return (
    <PortfolioProvider>
      <HashRouter>
        <Navbar />
        <main className='animate-fade-in-up animate-delay-300 animate-duration-900'>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </PortfolioProvider>
  );
}
