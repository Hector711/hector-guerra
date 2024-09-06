import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Navbar from '@/sections/Navbar';
import Footer from '@/sections/Footer';
import { PortfolioProvider } from '@/context/PortfolioContext';

export default function App() {
  return (

      <PortfolioProvider>
        <HashRouter>
          <Navbar />
          <main
          className="animate-fade-in-up"
          >
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </HashRouter>
      </PortfolioProvider>

  );
}
