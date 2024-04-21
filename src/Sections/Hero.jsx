import React from "react";
import SocialIcons from "./components/SocialIcons";
import Section from "@/Sections/components/Section";

export default function Hero() {
  return (
    <Section>
      <header>
        <div id="img-container">
          <div id="header-container">
            <h1>Héctor Guerra</h1>
            <h3>Full Stack Developer</h3>
          </div>
          <div id="social-icons-container">
            <SocialIcons />
          </div>
        </div>
        <div id="about">
          <h3>About</h3>
          <p>
            Enthusiastic beginner developer eager to break into the tech
            industry. Seeking first job opportunity to kickstart a fulfilling
            programming career.
          </p>
        </div>
        <div id="location">
          <h3>Madrid, Spain.</h3>
        </div>
        <div id="experience">
          <h3>Experience</h3>
        </div>
      </header>
    </Section>
  );
}
