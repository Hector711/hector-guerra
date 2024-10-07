import React from 'react';
import Section from '@/components/Section';
import WinnerIcon from '@/assets/WinnerIcon';
import TimeIcon from '@/assets/TimeIcon';
import MoneyIcon from '@/assets/MoneyIcon';

const LAS3CLAVES = [
  {
    title: 'Ahorra Tiempo',
    quote:
      '“Imagina un día donde te enfoques solo en lo que realmente importa.”',
    icon: <TimeIcon />,
  },
  {
    title: 'Multiplica Tus Beneficios',
    quote:
      '“Si la estructura no se adapta, el crecimiento se vuelve insostenible.”',
    icon: <MoneyIcon />,
  },
  {
    title: 'Gana a la Competencia',
    quote:
      '“La ventaja competitiva es para quien está dispuesto a arriesgar antes que el resto."',
    icon: <WinnerIcon />,
  },
];

export default function Las3Claves() {
  return (
    <Section
      title='IA: El Secreto para Resultados Exponenciales'
      id='las3claves'
    >
      <ul id='claves-container'>
        {LAS3CLAVES.map(({ title, quote, description, icon }, index) => {
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
