import Hero from '@/app/home/sections/Hero';
import { Toaster } from 'react-hot-toast';
import Claves from '@/app/home/sections/Claves';
import Productos from '@/app/home/sections/Productos';
import Interseccion1 from '@/app/home/sections/Interseccion1';
import Interseccion2 from '@/app/home/sections/Interseccion2';
import Interseccion3 from '@/app/home/sections/Interseccion3';
import Interseccion4 from '@/app/home/sections/Interseccion4';
import Precios from '@/app/home/sections/Precios';
import Equipo from '@/app/home/sections/Equipo';
import Calendly from '@/app/home/sections/Calendly';

export default function HomePage() {
  return (
    <>
      <Toaster
        position='bottom-left'
        reverseOrder={false}
        containerClassName='toasts-container'
        toastOptions={{
          className: 'toasts',
        }}
      />
      <Hero />
      <Claves />
      <Interseccion1 />
      <Productos />
      <Interseccion2 />
      <Equipo />
      <Interseccion3 />
      <Precios />
      <Interseccion4 />
      <Calendly />
    </>
  );
}
