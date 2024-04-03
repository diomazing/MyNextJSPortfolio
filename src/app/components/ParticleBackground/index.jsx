import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import {
  defaultParticles,
  multiplePolygonMask,
} from "../config/particle-config";
import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={multiplePolygonMask}
    />
  );
};

export default ParticleBackground;
