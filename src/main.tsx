import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';
import App from '@/app/App.jsx';
import { loadTranslations } from '@/i18n/i18n';
import '@/utils/fontLoader';

// FONTS
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

// STYLES
import '@/styles/reset/reset.scss';
import '@/styles/init.scss';

// COMPONENTS
import '@/styles/comp-hero.scss';
import '@/styles/comp-navbar.scss';
import '@/styles/comp-projects.scss';
import '@/styles/comp-footer.scss';
import '@/styles/comp-social-links.scss';
import '@/styles/comp-calendly-btn.scss';

// SECTIONS
import '@/styles/section-productos.scss';
import '@/styles/section-claves.scss';
import '@/styles/section-precios.scss';
import '@/styles/section-testimonios.scss';
import '@/styles/section-equipo.scss';

// BLOG
import '@/styles/blog-page/page-blog-page.scss';

loadTranslations().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Suspense fallback={<h2 id='suspense'>LOADING...</h2>}>
        <App />
      </Suspense>
    </StrictMode>,
  );
});

