import React from 'react';
import GitHub from '@/assets/social/GitHub';
import WhatsApp from '@/assets/social/WhatsApp';
import ReactJS from '@/assets/skills/ReactJS';
import Heart from '@/assets/Heart';
import { useTranslation } from 'react-i18next';

import cv from '@locales/cv.json';

export default function Footer() {
  const basics = cv.basics;
  const { t } = useTranslation()
  return (
    <footer>
      <div id='footer-container'>
        <div>
          <a
            href={`whatsapp://send?phone=${basics.phone}`}
            rel='noopener noreferrer'
            target='_blank'
            className='social-icons white-hover footer-links'
          >
            {t("translations:footer.hire-me")}
            <WhatsApp className='footer-icon' />
          </a>
        </div>
        <p id='made-by'>
        {t("translations:footer.made-by-1")} <Heart className='icons-made-by' /> {t("translations:footer.made-by-2")}
          <ReactJS className='icons-made-by' />
        </p>
        <a
          href='https://github.com/Hector711/hector711.github.io'
          rel='noopener noreferrer'
          target='_blank'
          className='social-icons white-hover footer-links'
        >
          {t("translations:footer.repo-link")}
          <GitHub className='footer-icon' />
        </a>
      </div>
    </footer>
  );
}
