import React from 'react';
import InterSection from '@/components/InterSection';
import quotes from '@/json/quotes.json';


export default function Interseccion1() {
  return (
    <InterSection id='inter4'>
      <p>{quotes.quote4}</p>
      </InterSection>
  );
}
