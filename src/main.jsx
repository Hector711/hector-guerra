import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// Supports weights 100-900
import '@fontsource-variable/onest';
// Supports weights 400-900
import '@fontsource-variable/gabarito';
import '@fontsource/cinzel-decorative';
import '@pixelpay/fonts/dist/gilroy.css';
// CSS
import './css/reset/reset.css';
import './css/styles.css';
import './css/init.css';
import './css/comp-hero.css';
import './css/comp-navbar.css';
import './css/comp-footer.css';
import './css/comp-projects.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
