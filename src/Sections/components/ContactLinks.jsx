import React from 'react';
import Mail from '@/assets/Mail';
import WhatsApp from '@/assets/WhatsApp';
import X from '@/assets/X';
import GitHub from '@/assets/GitHub';
import Instagram from '@/assets/Instagram';
import LinkedIn from '@/assets/LinkedIn';
import YouTube from '@/assets/YouTube';

import cv from '@root/cv.json';

export default function ContactLinks() {
  const contact = cv.contact;
  const basics = cv.basics;
  const ContactIcons = {
    X,
    GitHub,
    Instagram,
    LinkedIn,
    WhatsApp,
    Mail,
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
    <div className='flex flex-col relative'>
      <p
        className='absolute top-[-30px] left-[40px] hidden'
        id='confirm-copy-text'
      >
        Copied to clipboard
      </p>
      <div id='social-icons-container'>
        <button
          title={`Copiar email al portapapeles`}
          onClick={handleCopyToClipboard}
          id='copy-button'
        >
          <ContactIcons.Mail />
        </button>
        <a
          href={`whatsapp://send?phone=${basics.phone}`}
          title={`Send WhatsApp message to ${basics.username}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <ContactIcons.WhatsApp />
        </a>

        {contact.map(({ network, username, url }) => {
          const Icon = ContactIcons[network];
          return (
            <a
              key={network}
              href={url}
              title={`Visitar el perfil de ${username} en ${network}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </div>
  );
}
