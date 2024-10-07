import React from 'react';
import Section from '@/components/Section';
import WinnerIcon from '@/assets/WinnerIcon';
import TimeIcon from '@/assets/TimeIcon';
import MoneyIcon from '@/assets/MoneyIcon';
import claves from '@public/json/claves.json'

const ICONS = {
  TimeIcon: <TimeIcon />,
  MoneyIcon: <MoneyIcon />,
  WinnerIcon: <WinnerIcon />,
};

export default function Las3Claves() {
  return (
    <Section
      title='El verdadero poder de la IA'
      id='las3claves'
    >
      <ul id='claves-container'>
        {claves.map(({ title, quote, icon }, index) => {
          return (
            <li key={index}>
              <article className='claves-card'>
                {ICONS[icon]}
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
