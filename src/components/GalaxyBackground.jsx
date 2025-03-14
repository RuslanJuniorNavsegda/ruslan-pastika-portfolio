import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const createParticles = (count) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
  }));
};

export default function GalaxyBackground() {
  const particles = useRef(createParticles(150));

  useEffect(() => {
    particles.current.forEach((particle) => {
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
    <div className="galaxy-bg">
      {particles.current.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
    </div>
  );
}
