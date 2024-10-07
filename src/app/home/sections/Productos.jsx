import React from 'react';
import Section from '@/components/Section';

const LAS3CLAVES = [
  {
    title: 'Chatbots con IA ',
    quote:
      '“Imagina un día donde te enfoques solo en lo que realmente importa.”',
    description:
      ' con Automatización Inteligente Delega tareas repetitivas a sistemas automatizados que trabajan 24/7 por ti.',
    icon: '',
  },
  {
    title: 'CRM de ventas con IA',
    quote:
      '“Si la estructura no se adapta, el crecimiento se vuelve insostenible.”',
    description:
      ' con un Sistema a Prueba de Crecimiento Implementa sistemas que soporten cada fase de crecimiento sin comprometer la eficiencia.',
    icon: '',
  },
  {
    title: 'Menús digitales dinamicos',
    quote:
      '“La ventaja competitiva es para quien está dispuesto a arriesgar antes que el resto."',
    description:
      'Identifica patrones de comportamiento en la competencia y sé el pionero en adoptar cambios.',
    icon: '',
  },
  {
    title: 'Menús digitales dinamicos',
    quote:
      '“La ventaja competitiva es para quien está dispuesto a arriesgar antes que el resto."',
    description:
      'Identifica patrones de comportamiento en la competencia y sé el pionero en adoptar cambios.',
    icon: '',
  },
];

export default function Productos() {
  return (
    <Section title='Productos Estrella' id='productos-estrella'>
      <ul id='claves-container'>
        {LAS3CLAVES.map(({ title, quote, icon }, index) => {
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
