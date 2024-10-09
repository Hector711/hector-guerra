import React from 'react';
import InterSection from '@/components/InterSection';
import quotes from '@/json/quotes.json';
import CalendlyButton from '@/components/CalendlyButton';

export default function Interseccion1() {
  return (
    <InterSection id='inter3' quote={quotes.quote3}>
      <CalendlyButton>Quiero ser un lider</CalendlyButton>
      </InterSection>
  );
}
