import React from "react";
import DarkMode from "@/assets/DarkMode.svg";
import Language from "@/assets/Language.svg";
import CarouselQuotes from "@/sections/CarouselQuotes";

export default function Navbar() {
  return (
    <nav>
      <div id="nav-container" className="flex justify-between">
        <div className="flex justify-center items-center">
          <button>
            <a href="https://hector-minimalist-cv.netlify.app" target="_blank">
              Minimal CV
            </a>
          </button>
        </div>

        <CarouselQuotes />
        {/* <VideoResume /> */}
        
        <div className="flex justify-center items-center gap-4 ">
          <button>
            <img src={Language} alt="" />
          </button>
          <button>
            <img src={DarkMode} alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
}
