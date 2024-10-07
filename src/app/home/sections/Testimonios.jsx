import React from 'react';
import Section from '@/components/Section';
import testimonios from '@/json/testimonios.json'

export default function Testimonios() {
  return (
    <Section title='Testimonios' id='testimonios'>
      <div>
        {testimonios.map((testimonio, index) => (
          <div key={index}>
            <h3>{testimonio.name}</h3>
            <p>{testimonio.quote}</p>
            <img src={testimonio.image} alt={testimonio.name} />
          </div>
        ))}
      </div>
    </Section>
  );
}
