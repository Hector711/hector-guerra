import React from 'react';
import ReactJS from '@/assets/skills/ReactJS';
import NodeJS from '@/assets/skills/NodeJS';
import MongoDB from '@/assets/skills/MongoDB';
import Astro from '@/assets/skills/Astro';
import HTML from '@/assets/skills/HTML';
import JavaScript from '@/assets/skills/JavaScript';
import TailwindCSS from '@/assets/skills/TailwindCSS';
import ExpressJS from '@/assets/skills/ExpressJS';
import CSS from '@/assets/skills/CSS';
import cv from '@locales/cv';
import Section from './components/Section';

export default function Skills() {
  const skills = cv.skills;
  const skillsIcons = {
    ReactJS,
    NodeJS,
    ExpressJS,
    MongoDB,
    Astro,
    HTML,
    JavaScript,
    TailwindCSS,
    CSS,
  };
  return (
    <Section title='Skills'>
        <div className='flex justify-between'>
          {skills.map(({ name, icon }, index) => {
            const Icon = skillsIcons[icon];
            return (
              <div
                className='flex flex-col justify-center items-center'
                id='icon-container'
                key={index}
              >
                {Icon ? <Icon className='skills-icons' /> : 'no icon'}
                <label className='skills'>{name}</label>
              </div>
            );
          })}
        </div>

    </Section>
  );
}
