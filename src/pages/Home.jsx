import React from 'react';
import Hero from '@/sections/Hero';
import Projects from '@/sections/Projects';
import Skills from '@/sections/Skills';
import Space from '@/sections/Space';

export default function Home() {
  return (
    <>
      <Hero />
      <Space />
      <Projects />
      <Skills className="animate-fade-in-up"/>
    </>
  );
}
