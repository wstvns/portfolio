'use client';

import { useCallback, useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export const ParticlesBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-screen">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: false,
            zIndex: 0
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: isMobile ? 50 : 100,
              density: {
                enable: true,
                value_area: isMobile ? 1000 : 2000
              }
            },
            color: {
              value: ["#A855F780", "#3B82F680", "#EC489980"]
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 0.3,
              random: true,
              animation: {
                enable: true,
                speed: 0.3,
                minimumValue: 0.1,
                sync: false
              }
            },
            size: {
              value: { min: 1.5, max: 3 }
            },
            links: {
              enable: true,
              distance: isMobile ? 120 : 180,
              color: "#A855F740",
              opacity: 0.2,
              width: 1
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "bounce",
                top: "bounce",
                left: "bounce",
                right: "bounce",
                bottom: "bounce"
              }
            }
          },
          interactivity: {
            events: {
              onHover: {
                enable: !isMobile,
                mode: "repulse"
              },
              onClick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              repulse: {
                distance: 150,
                duration: 2.5,
                speed: 0.3,
                factor: 40,
                maxSpeed: 0.8,
                easing: "ease-out-quad"
              },
              push: {
                quantity: 4
              }
            }
          },
          detectRetina: true,
          background: {
            color: "transparent",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
          }
        }}
        className="h-full"
      />
    </div>
  );
};

export default ParticlesBackground; 