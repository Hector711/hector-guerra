import React from 'react';
import { useTranslation } from 'react-i18next';
import cv from '@locales/cv';
import Section from '@/components/Section';
import { usePortfolio } from '@/context/PortfolioContext';

export default function Projects() {
  const projects = cv.projects;
  const { t } = useTranslation();
  const { sectionRef } = usePortfolio()

  return (
    <Section title={t('translations:projects.title')} ref={sectionRef}>
      <ul id='projects'>
        <li className='card-project'>
          <h3 className='header-card-project'>Mera Parivar MVP</h3>
          <a
            href='https://mera-parivar-web-page.vercel.app'
            target='_blank'
            id='img-card-project'
          >
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
