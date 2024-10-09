import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.jsx';
import { loadTranslations } from '@/i18n/i18n';

import '@/fontLoader';
// 'Onest Variable': Supports weights 100-900
import '@fontsource-variable/onest';
// 'Gabarito Variable': Supports weights 400-900
import '@fontsource-variable/gabarito';
// 'Lexend Zetta Variable': Supports weights 100-900
import '@fontsource-variable/lexend-zetta';
// 'Lexend Mega Variable': Supports weights 100-900
import '@fontsource-variable/lexend-mega';
// 'Lexend Exa Variable': Supports weights 100-900
import '@fontsource-variable/lexend-exa';

import '@fontsource/krona-one';

// CSS
import '@/css/reset/reset.scss';
// import '@/css/globals.scss';
import '@/css/comp-hero.scss';
import '@/css/comp-navbar.scss';
import '@/css/comp-projects.scss';
import '@/css/comp-footer.scss';
import '@/css/comp-language.scss';
import '@/css/themes/dark-theme.scss';
import '@/css/comp-social-links.scss';
import '@/css/comp-calendly-btn.scss';

// SECTIONS
import '@/css/section-productos.scss';
import '@/css/section-claves.scss';
import '@/css/section-precios.scss';
import '@/css/section-testimonios.scss';
import '@/css/section-equipo.scss';

loadTranslations().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Suspense fallback={<h2 id='suspense'>LOADING...</h2>}>
        <App />
      </Suspense>
    </React.StrictMode>,
  );
});
