import React from 'react';
import ArrowDown from '@/assets/ArrowDown';

export default function Space() {
  return (
    <section className='space'>
      <figure>
        <hr />
        <button>
          <ArrowDown id='space-icon' />
        </button>
      </figure>
    </section>
  );
}
