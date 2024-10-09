import React from 'react';
import InterSection from '@/components/InterSection';
import CalendlyButton from '@/components/CalendlyButton';

import quotes from '@/json/quotes.json';

export default function Interseccion1() {
  return (
    <InterSection id='inter1' quote={quotes.quote1}>
      <CalendlyButton>Quiero que mi empresa sobreviva</CalendlyButton>
    </InterSection>
  );
}
