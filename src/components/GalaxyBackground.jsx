import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const createParticles = (count) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    alpha: Math.random() * 0.5 + 0.1,
  }));
};

export default function GalaxyBackground() {
  const particlesRef = useRef(createParticles(200));
  const containerRef = useRef(null);

  useEffect(() => {
    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        x: "+=random(-200,200)",
        y: "+=random(-200,200)",
        duration: "random(10,20)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="galaxy-bg"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      {particlesRef.current.map((particle) => (
        <div
          key={particle.id}
          style={{
            position: "absolute",
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.8)",
            opacity: particle.alpha,
            boxShadow: "0 0 15px rgba(173,216,230,0.5)",
          }}
        />
      ))}
    </div>
  );
}
