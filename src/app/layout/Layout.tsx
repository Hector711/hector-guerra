import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Layout() {
  return (
    <>
      <Navbar className='animate-fade-in-down animate-delay-100 animate-duration-400' />
      <main className='animate-fade-in-up animate-delay-300 animate-duration-900'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
