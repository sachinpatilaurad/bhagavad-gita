import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#D4AF37", // Divine Gold
      },
      links: {
        color: "#D4AF37",
        distance: 150,
        enable: false,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "top",
        enable: true,
        outModes: {
          default: "out",
        },
        random: true,
        speed: 0.5, // Slow, dust-like movement
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 40, // Low density for subtle effect
      },
      opacity: {
        value: 0.3,
        animation: {
            enable: true,
            speed: 0.5,
            minimumValue: 0.1,
            sync: false
        }
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute inset-0 -z-10"
      />
    );
  }

  return <></>;
};

export default ParticlesBackground;
