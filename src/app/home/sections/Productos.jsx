import React from 'react';
import Section from '@/components/Section';
import productos from '@/json/productos.json'

export default function Productos() {
  return (
    <Section title='Productos Estrella' id='productos-estrella'>
      <ul id='claves-container'>
        {productos.map(({ title, quote, icon }, index) => {
          return (
            <li key={index}>
              <article className='claves-card'>
                {icon}
                <h4>{title}</h4>
                <hr />
                <p>{quote}</p>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
