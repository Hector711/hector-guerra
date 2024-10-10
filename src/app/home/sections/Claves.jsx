import React from 'react';
import Section from '@/components/Section';
import WinnerIcon from '@/icons/WinnerIcon';
import TimeIcon from '@/icons/TimeIcon';
import MoneyIcon from '@/icons/MoneyIcon';
import claves from '@/json/claves.json'

const ICONS = {
  TimeIcon: <TimeIcon />,
  MoneyIcon: <MoneyIcon />,
  WinnerIcon: <WinnerIcon />,
};

export default function Claves() {
  return (
    <Section
      title='El verdadero poder de la IA'
      id='claves'
    >
      <ul id='claves-container'>
        {claves.map(({ title, quote, icon }, index) => {
          return (
            <li key={index}>
              <article className='claves-card'>
                <header>
                {ICONS[icon]}
                <h4>{title}</h4>
                </header>
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
