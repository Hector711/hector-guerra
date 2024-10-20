import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import CalendlyButton from './CalendlyButton';
import { PropsTypes } from '@/types';

export default function Navbar({ className }: PropsTypes) {
  const { i18n } = useTranslation();

  const language = i18n.language;

  const basicsArray = i18n.getResourceBundle(language, 'basics');
  const basics = basicsArray[0];
  console.log(basics);
  return (
    <nav className={className}>
      <div id='nav-container' className='flex justify-between items-center'>
        <div
          className='flex justify-center items-center gap-5'
          id='left-nav-container'
        >
          <Link to='/'>
            <h1>Héctor Guerra</h1>
          </Link>
          {/* <h1 className='hero'>N3URALAB</h1> */}
        </div>
        <div
          className='flex justify-center items-center gap-4'
          id='right-nav-container'
        >
          <CalendlyButton className='nav-buttons'>
            Asesoría Gratuita
          </CalendlyButton>
          <Link
            to='/blog'
            className='nav-buttons'
            id='blog-button'
          >
            Mi Blog
          </Link>
          <a
            href={basics.cv_url}
            rel='noopener noreferrer'
            target='_blank'
            className='nav-buttons'
            id='cv-button'
          >
            Minimal CV
          </a>
        </div>
      </div>
    </nav>
  );
}
