import React from "react";
import Hero from "@/Sections/Hero";
import Projects from "@/Sections/Projects";
import WorkExperience from "@/Sections/WorkExperience";
import VideoResume from "@/Sections/VideoResume";

export default function Home() {
  return (
    <>
      <VideoResume />
      <Hero />
      <Projects />
      <WorkExperience />
    </>
  );
}
