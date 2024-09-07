import React from 'react';
import Hero from '@/sections/Hero';
import ProjectsSection from '@/sections/ProjectsSection';
import SkillsSection from '@/sections/SkillsSection';
import NeoSection from '@/sections/NeoSection';

import N3uralabSection from '@/sections/N3uralabSection';

export default function Home() {
  return (
    <>
      <Hero />
      <N3uralabSection />
      <NeoSection  />
      {/* <ProjectsSection /> */}
      <SkillsSection className="animate-fade-in-up"/>
    </>
  );
}
