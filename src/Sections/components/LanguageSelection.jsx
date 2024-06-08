import React from 'react';
import SpainFlag from '../../assets/nav/SpainFlag';
import AmericanFlag from '../../assets/nav/AmericanFlag';
import Language from '@/assets/nav/Language';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  {
    label: 'Español',
    code: 'es',
    flag: 'SpainFlag',
  },
  {
    label: 'English',
    code: 'en',
    flag: 'AmericanFlag',
  },
];

const FLAGS = { SpainFlag, AmericanFlag };

export default function LanguageSelection() {
  const { i18n } = useTranslation();
  const onClickLang = async e => {
    const langCode = e.target.value;
    const changeLanguageI18n = () => i18n.changeLanguage(langCode);
    if (langCode != i18n.language) {
      await changeLanguageI18n();
    }
  };

  return (
    <div className='dropdown'>
      <span className='dd_head'>
        <Language className='nav-icons' />
      </span>

      <div className='dd_content'>
        <ul className='dd_ul'>
          {LANGUAGES.map(({ code, label, flag }) => {
            const FlagIcon = FLAGS[flag];
            return (
              <li key={code} className='dd_li'>
                <button
                  onClick={onClickLang}
                  value={code}
                  className='dd_anchor'
                >
                  {FlagIcon ? <FlagIcon /> : ''} {label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
