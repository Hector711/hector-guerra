import React from "react";
import ArrowRight from "@/assets/ArrowRight.svg";
import { NavLink } from "react-router-dom";

export default function VideoResume() {
  return (
    <div className="flex justify-center gap-3 w-[50%]">
      <p className="text-center caption">
        Tired of watching tons of portfolios?
        <br />
        Let me show you what you need to know about me in a 1 minute video!
      </p>
      <img src={ArrowRight} alt="" />
      <button className="animate-fade-in-up">
        <NavLink>Video</NavLink>
      </button>
    </div>
  );
}
