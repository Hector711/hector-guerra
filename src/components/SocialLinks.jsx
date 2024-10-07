import React from 'react';
import MailIcon from '@/assets/social/MailIcon';
import WhatsAppIcon from '@/assets/social/WhatsAppIcon';
import XIcon from '@/assets/social/XIcon';
import GitHubIcon from '@/assets/social/GitHubIcon';
import InstagramIcon from '@/assets/social/InstagramIcon';
import LinkedInIcon from '@/assets/social/LinkedInIcon';
import YouTubeIcon from '@/assets/social/YouTubeIcon';
import { useTranslation } from 'react-i18next';
import toast, { Toaster } from 'react-hot-toast';

export default function SocialLinks() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const basics = i18n.getResourceBundle(language, 'basics');
  const profilesObject = i18n.getResourceBundle(language, 'profiles');
  const profiles = Object.values(profilesObject);

  const SocialIcons = {
    X: XIcon,
    GitHub: GitHubIcon,
    Instagram: InstagramIcon,
    LinkedIn: LinkedInIcon,
    YouTube: YouTubeIcon,
  };

  const handleCopyToClipboard = () => {
    const email = 'hectorluengo.xx@gmail.com';
    toast(`Email copiado al portapapeles: ${t('basics:email')}`);
    navigator.clipboard.writeText(email);
  };

  const emailNotAvailable = t('basics:email') === 'email';

  return (
    <div className='social-links-container'>
      {!emailNotAvailable && (
        <>
          <button
            title={`Copiar email al portapapeles`}
            onClick={handleCopyToClipboard}
            id='copy-button'
            className='social-links icon-hover'
          >
            <MailIcon />
          </button>
        </>
      )}

      <a
        href={`whatsapp://send?phone=${basics.phone}`}
        title={`Send WhatsApp message to ${basics.username}`}
        target='_blank'
        rel='noopener noreferrer'
        className='social-links icons-hover'
      >
        <WhatsAppIcon />
      </a>

      {profiles.map(({ network, username, url }) => {
        const Icon = SocialIcons[network];
        if (url === null) {
          return <></>;
        } else {
          return (
            <a
              key={network}
              href={url}
              title={`Visitar el perfil de ${username} en ${network}`}
              target='_blank'
              rel='noopener noreferrer'
              className='social-links'
            >
              <Icon />
            </a>
          );
        }
      })}
    </div>
  );
}
