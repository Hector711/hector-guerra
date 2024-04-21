import React from "react";
import Mail from "@/assets/Mail.svg";
import Whatsapp from "@/assets/Whatsapp.svg";
import X from "@/assets/X.svg";
import GitHub from "@/assets/GitHub.svg";
import Instagram from "@/assets/Instagram.svg";
import LinkedIn from "@/assets/LinkedIn.svg";

export default function SocialIcons() {
  return (
    <>
      <a
        href=""
        title={`Visitar el perfil de  en `}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Mail} alt="" />
      </a>
      <a
        href="whatsapp://send?phone=+34722396259"
        title={`Visitar el perfil de  en `}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Whatsapp} alt="" />
      </a>
      <a
        href=""
        title={`Visitar el perfil de  en `}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={X} alt="" />
      </a>
      <a
        href=""
        title={`Visitar el perfil de  en `}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={GitHub} alt="" />
      </a>
      <a
        href=""
        title={`Visitar el perfil de  en `}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={LinkedIn} alt="" />
      </a>
      <a
        href=""
        title={`Visitar el perfil de  en `}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Instagram} alt="" />
      </a>
    </>
  );
}
