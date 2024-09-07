import React from 'react';
import MailIcon from '@/assets/social/MailIcon';
import WhatsAppIcon from '@/assets/social/WhatsAppIcon';
import XIcon from '@/assets/social/XIcon';
import GitHubIcon from '@/assets/social/GitHubIcon';
import InstagramIcon from '@/assets/social/InstagramIcon';
import LinkedInIcon from '@/assets/social/LinkedInIcon';
import YouTubeIcon from '@/assets/social/YouTubeIcon';

import cv from '@locales/cv';

export default function SocialLinks() {
  const social = cv.social;
  const basics = cv.basics;
  const SocialIcons = {
    X: XIcon,
    GitHub: GitHubIcon,
    Instagram: InstagramIcon,
    LinkedIn: LinkedInIcon,
    YouTube: YouTubeIcon,
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
    <div className='social-links-container'>
      <button
        title={`Copiar email al portapapeles`}
        onClick={handleCopyToClipboard}
        id='copy-button'
        className='social-links icon-hover'
      >
        <MailIcon />
      </button>
      <a
        href={`whatsapp://send?phone=${basics.phone}`}
        title={`Send WhatsApp message to ${basics.username}`}
        target='_blank'
        rel='noopener noreferrer'
        className='social-links icons-hover'
      >
        <WhatsAppIcon />
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
            className='social-links icons-hover'
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
