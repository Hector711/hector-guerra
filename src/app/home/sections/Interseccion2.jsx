import React from 'react';
import InterSection from '@/components/InterSection';
import quotes from '@public/json/quotes.json';

export default function Interseccion1() {
  return (
    <InterSection id='inter2'>
      <p>{quotes.quote2}</p>
      </InterSection>
  );
}
