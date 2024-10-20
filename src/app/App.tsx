import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/app/home/HomePage.js';
import { PortfolioProvider } from '@/context/PortfolioContext';
import BlogPage from '@/app/blog/BlogPage';
import Layout from '@/app/layout/Layout';

export default function App() {
  return (
    <PortfolioProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/blog' element={<BlogPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </PortfolioProvider>
  );
}
