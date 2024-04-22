import React from "react";
import SocialIcons from "./components/SocialIcons";
import Section from "@/Sections/components/Section";

export default function Hero() {
  return (
    <Section>
      <header>
        <div className="box-hero" id="img-container">
          <div id="header-container">
            <h1>Héctor Guerra</h1>
            <h3>Full Stack Developer</h3>
          </div>
          <div id="social-icons-container">
            <SocialIcons />
          </div>
        </div>
        <div className="box-hero" id="about">
          <h3>About</h3>
          <p>
            Enthusiastic beginner developer eager to break into the tech
            industry. Seeking first job opportunity to kickstart a fulfilling
            programming career.
          </p>
        </div>
        <div className="box-hero" id="neo">
          <h3>Discover</h3>
          <h4 className="bold">NEO SOCIAL</h4>
        </div>
        <div className="box-hero" id="video-resume">
          <h5>Tired of watching tons of portfolios?</h5>
          <p className="caption">
            Let me show you what you need to know about me in a 1 minute video!
          </p>
          {/* <div>
          <h3>1 minute video resume</h3>
          <img src="" alt="" />
          </div> */}
        </div>
      </header>
    </Section>
  );
}
