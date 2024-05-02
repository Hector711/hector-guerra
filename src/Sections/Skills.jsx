import React from 'react';
import Section from '@/Sections/components/Section';
import ReactIcon from '@/assets/ReactIcon';
import NodeIcon from '@/assets/NodeSVG';
import cv from '@root/cv';

export default function Skills() {
  const skills = cv.skills;
  const iconsSkills = {
    ReactIcon,
    NodeIcon,
  };
  return (
    <Section>
      <h2>Skills</h2>
      <div className='flex justify-between'>
        {skills.map(({ name, icon }, index) => {
          const Icons = iconsSkills[icon];
          return (
            <div className='flex flex-col justify-center items-center' >
              <Icons />
              <p className='caption' key={index}>
                {name}
              </p>
            </div>
          );
        })}
        
      </div>
    </Section>
  );
}
