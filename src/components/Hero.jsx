import React from "react";
import SocialIcons from "./SocialIcons";
export default function Hero() {
  return (
    <>
      <header>
        <div id="img-container">
          <div id="header-container">
            <h1>Héctor Guerra</h1>
            <h2>Full Stack Developer</h2>
          </div>
          <div id="social-icons-container">
            <SocialIcons />
          </div>
        </div>
        <div id="about">
          <h2>About</h2>
          <p>
            Enthusiastic beginner developer eager to break into the tech
            industry. Seeking first job opportunity to kickstart a fulfilling
            programming career.
          </p>
        </div>
        <div id="location">
          <h2>Madrid, Spain.</h2>
        </div>
        <div id="experience">
          <h2>Experience</h2>
        </div>
      </header>
    </>
  );
}
