import React from 'react';
import Hero from '@/sections/Hero';
import ProjectsSection from '@/sections/ProjectsSection';
import Skills from '@/sections/Skills';

import N3uralabSection from '@/sections/N3uralabSection';

export default function Home() {
  return (
    <>
      <Hero />
      <N3uralabSection />
      {/* <ProjectsSection /> */}
      <Skills className="animate-fade-in-up"/>
    </>
  );
}
