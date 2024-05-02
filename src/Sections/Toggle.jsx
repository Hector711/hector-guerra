import React, { useState } from 'react';

export default function Toggle() {
  const [isDark, setIsDark] = useState(true);

  const handleChange = () => {
    setIsDark(!isDark);
  };

  return (
    <div className='flex' data-theme={isDark ? 'dark' : 'light'}>
      <h1>title</h1>

      <p>
        {' '}
        ipsum dolor sit amet consectetur adipisicing elit. Culpa in hic debitis
        excepturi, iure corrupti dolorum earum enim atque delectus voluptates
        quisquam ipsam sint, numquam voluptatibus similique consectetur officiis
        minima.
      </p>

      <input
        type='checkbox'
        id='check'
        className='toggle'
        onChange={handleChange}
        checked={isDark}
      />
      <label htmlFor='check'>Dark Mode</label>
    </div>
  );
}
