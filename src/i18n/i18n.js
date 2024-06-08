import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLang: 'en',
    interpolation: {
      escapeValue: false,
    },
    ns:['translations', 'cv'],
    backend: {
      loadPath: 'http://localhost:5174/hector-guerra.com/locales/{{lng}}/{{ns}}.json',
    },
  });
  
export default i18next;
