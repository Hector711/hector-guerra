import React from 'react';
import ReactJSIcon from '@/assets/skills/ReactJSIcon';
import NodeJSIcon from '@/assets/skills/NodeJSIcon';
import MongoDBIcon from '@/assets/skills/MongoDBIcon';
import AstroIcon from '@/assets/skills/AstroIcon';
import HTMLIcon from '@/assets/skills/HTMLIcon';
import JavaScriptIcon from '@/assets/skills/JavaScriptIcon';
import TailwindCSSIcon from '@/assets/skills/TailwindCSSIcon';
import ExpressJSIcon from '@/assets/skills/ExpressJSIcon';
import CSSIcon from '@/assets/skills/CSSIcon';
import cv from '@locales/cv';
import Section from '@/components/Section';
import NextJSIcon from '@/assets/skills/NextJSIcon';
import SupabaseIcon from '@/assets/skills/SupabaseIcon';

export default function SkillsSection() {
  const skills = cv.skills;
  const skillsIcons = {
    ReactJS: ReactJSIcon,
    NodeJS: NodeJSIcon,
    ExpressJS: ExpressJSIcon,
    MongoDB: MongoDBIcon,
    Astro: AstroIcon,
    HTML: HTMLIcon,
    JavaScript: JavaScriptIcon,
    TailwindCSS: TailwindCSSIcon,
    CSS: CSSIcon,
    NextJS: NextJSIcon,
    Supabase: SupabaseIcon,
  };
  return (
    <Section title='Mi enfoque es el aprendizaje continuo' id='skills-section'>
      <p>
        Como profesional, creo firmemente que no hay límites cuando se trata de
        aprender. Mi habilidad más valiosa no es solo lo que ya sé, sino mi
        compromiso con aprender lo que sea necesario para afrontar nuevos retos.
        Ya sea en el desarrollo web, diseño o cualquier otro campo, mi objetivo
        es adaptarme y expandir mis conocimientos constantemente.
      </p>
      <p>Estas son algunas de las tecnologías con las que he trabajado:</p>
      <div id='skills-container'>
        {skills.map(({ name, icon }, index) => {
          const Icon = skillsIcons[icon];
          return (
            <div className='icon-container' key={index}>
              {Icon ? <Icon /> : 'no icon'}
              <label className='icons-names'>{name}</label>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
