import React from 'react';
import Section from '@/Sections/components/Section';
import MeraParivarMVP from '@/assets/mera-parivar-mvp.png'

export default function Projects() {
  return (
    <Section>
      <h2>Projects</h2>
      <ul id='projects'>
        <li class='card-project'>
          <h3>Mera Parivar MVP</h3>
          <img src={MeraParivarMVP} alt="" id='mera-parivar-img' />
        </li>
        
      </ul>
    </Section>
  );
}
