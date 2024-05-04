import React from 'react';
import Hero from '@/Sections/Hero';
import Projects from '@/Sections/Projects';
// import Education from '@/Sections/Education';
import Skills from '@/Sections/Skills';
import Space from '@/Sections/Space';

export default function Home() {
  return (
    <>
      <Hero />
      <Space />
      <Projects />
      <Skills />
    </>
  );
}
