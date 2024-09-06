import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@/i18n/i18n.js';
import '@/fontLoader';
// Supports weights 100-900
import '@fontsource-variable/onest';
// Supports weights 400-900
import '@fontsource-variable/gabarito';
// import '@pixelpay/fonts/dist/gilroy.css';


// Supports weights 100-900
import '@fontsource-variable/lexend-zetta';
// Supports weights 100-900
import '@fontsource-variable/lexend-mega';

// Supports weights 100-900
import '@fontsource-variable/lexend-exa';

import '@fontsource/krona-one';




// CSS
import '@/css/reset/reset.scss';
// import '@/css/globals.scss';
import '@/css/comp-hero.scss';
import '@/css/comp-space.scss';
import '@/css/comp-navbar.scss';
import '@/css/comp-projects.scss';
import '@/css/comp-footer.scss';
import '@/css/comp-language.scss';
import '@/css/themes/dark-theme.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<h2 id='suspense'>LOADING...</h2>}>
      <App />
    </Suspense>
  </React.StrictMode>,
);
