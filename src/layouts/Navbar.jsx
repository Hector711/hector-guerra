import React from "react";
import { NavLink } from "react-router-dom";

import Mail from "../icons/Mail.svg";
import Whatsapp from "@/icons/Whatsapp.svg";
import X from "@/icons/X.svg";
import GitHub from "@/icons/GitHub.svg";
import Instagram from "@/icons/Instagram.svg";
import LinkedIn from "@/icons/LinkedIn.svg";
import LocationIcon from "@/icons/LocationIcon.svg";

export default function Navbar() {
  return (
    <nav>
      <div id="nav-container">
        <a
          href=''
          title={`Visitar el perfil de  en `}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Mail} alt="" />
        </a>
        <a
          href=''
          title={`Visitar el perfil de  en `}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Whatsapp} alt="" />
        </a>
        <a
          href=''
          title={`Visitar el perfil de  en `}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={X} alt="" />
        </a>
        <a
          href=''
          title={`Visitar el perfil de  en `}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHub} alt="" />
        </a>
        <a
          href=''
          title={`Visitar el perfil de  en `}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedIn} alt="" />
        </a>
        <a
          href=''
          title={`Visitar el perfil de  en `}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Instagram} alt="" />
        </a>
      </div>
    </nav>
  );
}
