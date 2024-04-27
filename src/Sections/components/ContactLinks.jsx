import React from 'react';
import Mail from '@/assets/Mail.svg';
import Whatsapp from '@/assets/Whatsapp.svg';
import X from '@/assets/X.svg';
import GitHub from '@/assets/GitHub.svg';
import Instagram from '@/assets/Instagram.svg';
import LinkedIn from '@/assets/LinkedIn.svg';

export default function ContactLinks() {
  const handleCopyToClipboard = () => {
    const email = 'hectorluengo.xx@gmail.com';
    navigator.clipboard.writeText(email)
      .then(() => {
        const confirmCopyText = document.getElementById('confirm-copy-text')
        confirmCopyText.classList.remove('hidden');
        setTimeout(() => {
        confirmCopyText.classList.add('hidden');
        }, 3000);
      })
  };

  return (
    <div className='flex flex-col relative'>
      <p className='absolute top-[-30px] left-[40px] hidden' id='confirm-copy-text'>Copied to clipboard</p>
      <div id='social-icons-container'>
        <button
          title={`Copiar email al portapapeles`}
          onClick={handleCopyToClipboard}
          id='copy-button'
        >
          <img src={Mail} alt='' />
        </button>
        <a
          href='whatsapp://send?phone=+34722396259'
          title={`Visitar el perfil de  en `}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={Whatsapp} alt='' />
        </a>
        <a
          href='https://twitter.com/vltrasensorial'
          title={`Visitar el perfil de  en `}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={X} alt='' />
        </a>
        <a
          href='https://github.com/Hector711'
          title={`Visitar el perfil de  en `}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={GitHub} alt='' />
        </a>
        <a
          href='https://www.linkedin.com/in/hector711/'
          title={`Visitar el perfil de  en `}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={LinkedIn} alt='' />
        </a>
        <a
          href='https://www.instagram.com/hectoor.xx?igsh=MWp5dTBubDl3YjY0ag%3D%3D&utm_source=qr'
          title={`Visitar el perfil de  en `}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={Instagram} alt='' />
        </a>
      </div>
    </div>
  );
}
