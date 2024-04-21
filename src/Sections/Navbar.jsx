import React from "react";
import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <nav>
      <div id="nav-container">
        <button><a href="https://hector-minimalist-cv.netlify.app" target="_blank">Minimal CV</a></button>
        <button>Language</button>
        <button>Dark Mode</button>
      </div>
    </nav>
  );
}
