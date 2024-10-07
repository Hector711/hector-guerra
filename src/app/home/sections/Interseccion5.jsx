import React from 'react';
import InterSection from '@/components/InterSection';
import quotes from '@public/json/quotes.json';

export default function Interseccion5() {
  return (
    <InterSection id='inter5'>
      <p>{quotes.quote5}</p>
      </InterSection>
  );
}
