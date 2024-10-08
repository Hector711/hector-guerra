import React from 'react';
import InterSection from '@/components/InterSection';

import quotes from '@/json/quotes.json';

export default function Interseccion1() {
  return (
    <InterSection id='inter1' quote={quotes.quote1}>

    </InterSection>
  );
}
