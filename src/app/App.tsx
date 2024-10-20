import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/app/home/HomePage.js';
import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';
import { PortfolioProvider } from '@/context/PortfolioContext.js';

export default function App() {
  return (
    <PortfolioProvider>
      <HashRouter>
        <Navbar className='animate-fade-in-down animate-delay-100 animate-duration-400' />
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
