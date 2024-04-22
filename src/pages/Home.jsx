import React from "react";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import WorkExperience from "@/sections/WorkExperience";
import Skills from "../sections/Skills";

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
