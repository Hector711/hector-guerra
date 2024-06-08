import React from 'react';
import MeraParivar1 from '@/assets/mera-parivar_1.jpg';
import MeraParivar2 from '@/assets/mera-parivar_2.jpg';
import MeraParivar3 from '@/assets/mera-parivar_3.jpg';
import MeraParivar4 from '@/assets/mera-parivar_4.jpg';
import CarouselProject from './components/CarouselProject';
import { useTranslation } from 'react-i18next';
import cv from '@locales/cv.json';
import Section from './components/Section';

export default function Projects() {
  const projects = cv.projects;
  const { t } = useTranslation();

  const projectImages = [
    {
      image: MeraParivar1,
    },
    {
      image: MeraParivar2,
    },
    {
      image: MeraParivar3,
    },
    {
      image: MeraParivar4,
    },
  ];
  return (
    <Section title={t('translations:projects.title')}>
      <ul id='projects'>
        <li className='card-project'>
          <h3 className='header-card-project'>Mera Parivar MVP</h3>
          <a
            href='https://mera-parivar-web-page.vercel.app'
            target='_blank'
            id='img-card-project'
          >
            <CarouselProject projectImages={projectImages} />
          </a>
          <div className='content-card-project'>
            <p>
              I led the Full Stack team, collaborating with UX/UI, Marketing,
              Data Science, and Cybersecurity.
              <br />
              We created a Minimum Viable Product for Mera Parivar NGO with a
              very clear objetive: to develop a technological solution that
              would optimize their processes, expand their reach, and increase
              revenue.
            </p>

            <div id='labels-project'>
              <p className='bold'>{t('translations:projects.technologies')}</p>
              <div id='labels-container'>
                {projects[0].technologies.map((technology, index) => (
                  <label className='project' key={index}>
                    {technology}
                  </label>
                ))}
              </div>
            </div>
            <div id='links-project'>
              <a
                href='https://www.linkedin.com/feed/update/urn:li:activity:7186802359304372226/'
                target='_blank'
                className='white-hover'
              >
                {t('translations:projects.presentation-link')}
              </a>
              <a
                href='https://mera-parivar-web-page.vercel.app'
                target='_blank'
                className='white-hover'
              >
                {t('translations:projects.deploy-link')}
              </a>
            </div>
          </div>
        </li>
      </ul>
    </Section>
  );
}
