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

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full z-1 ">
      <ParticleBackground />

      <div className="flex flex-col w-full z-10 items-center justify-center">
        <Section id="Hopemage">
          <Navbar />
          <Hero />
        </Section>
        <Section id="Parallax">
          <Parallax type="services" />
        </Section>
        <Section id="Services">
          <Services />
        </Section>
        <Section id="Portfolio">
          <Parallax type="portfolio" />
        </Section>
        <Section>
          <h1 className="text-2xl font-extrabold text-white">Contact</h1>{" "}
        </Section>
        <h1 className="text-2xl font-extrabold text-white">HELLO WORLD</h1>{" "}
      </div>
    </div>
  );
}
