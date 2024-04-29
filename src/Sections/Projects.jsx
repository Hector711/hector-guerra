import React from 'react';
import Section from '@/Sections/components/Section';
import MeraParivar1 from '@/assets/mera-parivar_1.jpg';
import MeraParivar2 from '@/assets/mera-parivar_2.jpg';
import MeraParivar3 from '@/assets/mera-parivar_3.jpg';
import MeraParivar4 from '@/assets/mera-parivar_4.jpg';
import CarouselProject from './components/CarouselProject';

export default function Projects() {
  const projectImages = [
    {
      image: MeraParivar1
    },
    {
      image: MeraParivar2
    },
    {
      image: MeraParivar3
    },
    {
      image: MeraParivar4
    }
  ]
    return (
    <Section>
      <h2 id='title-projects-section'>Projects</h2>
      <ul id='projects'>
        <li className='card-project'>
          <h3 className='header-card-project'>Mera Parivar MVP</h3>
          <a href="https://mera-parivar-web-page.vercel.app" target='_blank' id='img-card-project'>
            <CarouselProject projectImages={projectImages}/>
            
          </a>
          <div id='content-card-project'>
            <h5>Minimal Viable Product for Mera Parivar NGO</h5>
            <p>Led the Full Stack team, collaborating with UX/UI, Marketing, Data Science, and Cybersecurity. 
              <br />
              <br />
              Our goal: to develop a technological solution that would optimize their processes, expand their reach, and increase revenue.</p>
              <br />
              <div>

            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7186802359304372226/" target='_blank'>LinkedIn Presentation</a>
            <a href="https://mera-parivar-web-page.vercel.app" target='_blank'>Deployed Project</a>
              </div>
          </div>
        </li>
      </ul>
    </Section>
  );
}
