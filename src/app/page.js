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

export default function Home() {
  return (
    <div
      className="flex flex-col h-screen w-full z-1 overflow-y-auto"
      style={{
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
        fontFamily: "DM Sans, sans-serif",
      }}>
      <ParticleBackground />

      <div className="flex flex-col w-full z-10 items-center justify-center">
        <Section id="Hopemage">
          <Navbar />
          <Hero />
        </Section>
        <Section id="Parallax">
          <h1 className="text-2xl font-extrabold text-white">Parallax</h1>{" "}
        </Section>
        <Section id="Services">
          <h1 className="text-2xl font-extrabold text-white">Services</h1>{" "}
        </Section>
        <Section>
          <h1 className="text-2xl font-extrabold text-white">Portfolio</h1>{" "}
        </Section>
        <Section>
          <h1 className="text-2xl font-extrabold text-white">Contact</h1>{" "}
        </Section>
        <h1 className="text-2xl font-extrabold text-white">HELLO WORLD</h1>{" "}
      </div>
    </div>
  );
}
