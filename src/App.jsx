import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Navbar from './section/Navbar.jsx';
import Footer from './section/Footer.jsx';
import { PortfolioProvider } from './context/PortfolioContext.jsx';

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
