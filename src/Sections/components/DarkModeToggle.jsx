import React, { useEffect } from 'react';
import { useState } from 'react';
import DarkMode from '@/assets/DarkMode.svg';

export default function DarkModeToggle() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').setAttribute('data-theme', 'dark');
    } else {
      document.querySelector('html').setAttribute('data-theme', 'light');
    }
  }, [theme]);
  const handleChangeTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <input
        type='checkbox'
        id='check'
        className='toggle'
        onChange={handleChangeTheme}
      />
      <label htmlFor='check'>Dark Mode</label>

      <button className='nav-button' onClick={handleChangeTheme}>
        <img src={DarkMode} alt='' id='img-dark-mode-toggle' />
      </button>
    </>
  );
}
