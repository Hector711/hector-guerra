import React from 'react';
import Section from '@/components/Section';
import equipo from '@/json/equipo.json';

export default function Equipo() {
  return (
    <Section id='equipo' title='Equipo'>
      <ul className='equipo-container'>
        {equipo.map(item => (
          <li key={item.id}>
            <article className='equipo-card'>
              <figure>
                <img src='' alt='' />
              </figure>
              <header>

              <h3>{item.name}</h3>
                <p>{item.label}</p>
              </header>
              <p>{item.rol}</p>
              <hr />
              <p>{item.description}</p>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
