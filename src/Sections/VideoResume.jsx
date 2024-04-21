import React from "react";
import ArrowRight from "@/assets/ArrowRight.svg"

export default function VideoResume() {
  return (
    <div className="flex justify-center mt-7 mb-3 gap-4">
      <p className=" text-center">
        Tired of watching tons of portfolios?
        <br />
        Let me show you what you need to know about me in a 1 minute video!
      </p>
      <img src={ArrowRight} alt="" />
      <button>Video</button>
    </div>
  );
}
