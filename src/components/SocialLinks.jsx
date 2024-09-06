import React from 'react';
import Mail from '@/assets/social/Mail';
import WhatsApp from '@/assets/social/WhatsApp';
import X from '@/assets/social/X';
import GitHub from '@/assets/social/GitHub';
import Instagram from '@/assets/social/Instagram';
import LinkedIn from '@/assets/social/LinkedIn';
import YouTube from '@/assets/social/YouTube';

import cv from '@locales/cv';

export default function SocialLinks() {
  const social = cv.social;
  const basics = cv.basics;
  const SocialIcons = {
    X,
    GitHub,
    Instagram,
    LinkedIn,
    YouTube,
  };

  const handleCopyToClipboard = () => {
    const email = 'hectorluengo.xx@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      const confirmCopyText = document.getElementById('confirm-copy-text');
      confirmCopyText.classList.remove('hidden');
      setTimeout(() => {
        confirmCopyText.classList.add('hidden');
      }, 3000);
    });
  };

  return (
    <footer className='social-links'>
      <button
        title={`Copiar email al portapapeles`}
        onClick={handleCopyToClipboard}
        id='copy-button'
        className='social-icons icon-hover'
      >
        <Mail />
      </button>
      <a
        href={`whatsapp://send?phone=${basics.phone}`}
        title={`Send WhatsApp message to ${basics.username}`}
        target='_blank'
        rel='noopener noreferrer'
        className='social-icons icon-hover'
      >
        <WhatsApp />
      </a>

      {social.map(({ network, username, url }) => {
        const Icon = SocialIcons[network];
        return (
          <a
            key={network}
            href={url}
            title={`Visitar el perfil de ${username} en ${network}`}
            target='_blank'
            rel='noopener noreferrer'
            className='social-icons icon-hover'
          >
            <Icon />
          </a>
        );
      })}
    </footer>
  );
}
