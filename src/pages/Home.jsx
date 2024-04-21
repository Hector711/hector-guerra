import React from "react";
import Section from "@/layouts/Section";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section>
        <div>
          Tired of watching tons of portfolios? Let me show you what you need to
          know about me in a 1 minute video!
        </div>
      </Section>
    </>
  );
}
