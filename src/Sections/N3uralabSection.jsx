import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Section from '@/components/Section';

export default function N3uralabSection() {
  return (

      <Section title='N3URALAB: Mi startup'>
        <p>N3URALAB es una agencia de Inteligencia Artificial.</p>
        <p>
        Automatizamos de procesos, creamos chatbots asistentes, mostramos una
        nueva forma de interactuar con la IA.
      </p>
      <Link to='/projects'>Ver más</Link>
      </Section>

  );
}
