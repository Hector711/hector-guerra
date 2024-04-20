import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div id="nav-container">
        <NavLink><h3>Projects</h3></NavLink>
        <NavLink><h3>Experience</h3></NavLink>
        <NavLink><h3>Blog</h3></NavLink>
      </div>
    </nav>
  );
}
