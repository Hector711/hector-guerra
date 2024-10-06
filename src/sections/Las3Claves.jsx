import React from 'react';
import Section from '@/components/Section';
import WinnerIcon from '@/assets/WinnerIcon';
import TimeIcon from '@/assets/TimeIcon';
import MoneyIcon from '@/assets/MoneyIcon';
const LAS3CLAVES = [
  {
    title: 'Ahorra Tiempo con Automatización Inteligente',
    quote:
      '“Imagina un día donde te enfoques solo en lo que realmente importa.”',
    description:
      'Delega tareas repetitivas a sistemas automatizados que trabajan 24/7 por ti.',
    icon: <TimeIcon />,
  },
  {
    title: 'Multiplica Tus Beneficios con un Sistema a Prueba de Crecimiento',
    quote: '“Tu tiempo no se recupera, úsalo sabiamente.”',
    description:
      'Delega tareas repetitivas a sistemas automatizados que trabajan 24/7 por ti.',
    icon: <MoneyIcon />,
  },
  {
    title: 'Sé el Primero en Tu Industria con Estrategias Avanzadas',
    quote: '“Tu tiempo no se recupera, úsalo sabiamente.”',
    description:
      'Delega tareas repetitivas a sistemas automatizados que trabajan 24/7 por ti.',
    icon: <WinnerIcon />,
  },
];

export default function Las3Claves() {
  return (
    <Section title='Las 3 Claves para aprovechar la IA' id='las3claves'>
      <ul id='claves-container'>
        {LAS3CLAVES.map(({ title, quote, description, icon }, index) => {
          return (
            <li key={index}>
              <article className='claves-card'>
                {icon}
                <h4>{title}</h4>
                <p>{quote}</p>
                <p>{description}</p>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
