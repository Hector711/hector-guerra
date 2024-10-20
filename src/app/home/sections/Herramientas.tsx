import React from 'react';
import Section from '@/components/Section';
import herramientas from '@/json/herramientas.json'

export default function Herramientas() {
  return (
    <Section title='Herramientas Gratuitas' id='herramientas-gratuitas'>
      <div>
        {herramientas.map((herramienta, index) => (
          <div key={index}>
            <h3>{herramienta.name}</h3>
            <p>{herramienta.description}</p>
            <a href={herramienta.url}>{herramienta.url}</a>
          </div>
        ))}
      </div>
    </Section>
  );
}
