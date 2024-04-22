import React from 'react';
import Hero from '@/Sections/Hero';
import Projects from '@/Sections/Projects';
import WorkExperience from '@/Sections/WorkExperience';
import Skills from '@/Sections/Skills';

export default function Home() {
  return (
    <>
      {/* <VideoResume /> */}
      <Hero />
      <hr />
      <Projects />
      <hr />
      <WorkExperience />
      <hr />
      <Skills />
    </>
  );
}
