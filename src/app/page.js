"use client";

import Image from "next/image";
import ParticleBackground from "./components/ParticleBackground";
import dynamic from "next/dynamic";

const Section = dynamic(() => import("./components/Section/index.jsx"), {
  ssr: false,
});

const Navbar = dynamic(() => import("./components/Navbar/index.jsx"), {
  ssr: false,
});

const Hero = dynamic(() => import("./components/Hero/index.jsx"), {
  ssr: false,
});

const Parallax = dynamic(() => import("./components/Parallax/index.jsx"), {
  ssr: false,
});

const Services = dynamic(() => import("./components/Services/index.jsx"), {
  ssr: false,
});

const Portfolio = dynamic(() => import("./components/Portfolio/index.jsx"), {
  ssr: false,
});

const Contact = dynamic(() => import("./components/Contact/index.jsx"), {
  ssr: false,
});

const Cursor = dynamic(() => import("./components/Cursor/index.jsx"), {
  ssr: false,
});

export default function Home() {
  return (
    <div
      className="flex flex-col h-screen w-full z-1"
      style={{
        scrollSnapAlign: "center",
        scrollBehavior: "smooth",
        scrollbarWidth: "none",
        scrollbarColor: "transparent transparent",
      }}>
      <ParticleBackground />
      <div className="flex flex-col w-full z-10 items-center justify-center">
        <Section id="#">
          <Navbar />
          <Hero />
        </Section>
        <Section id="Services">
          <Parallax type="services" />
        </Section>
        <Section>
          <Services />
        </Section>
        <Section id="Portfolio">
          <Parallax type="portfolio" />
        </Section>
        <Portfolio />
        <Section id="Contact">
          <Contact />
        </Section>
      </div>
      <Cursor />
    </div>
  );
}
