import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Preloader() {
  const particles = useRef(Array.from({ length: 3 }));

  useEffect(() => {
    particles.current.forEach((_, i) => {
      gsap.to(`.particle-${i}`, {
        y: -30,
        repeat: -1,
        yoyo: true,
        duration: 1,
        delay: i * 0.3,
      });
    });
  }, []);

  return (
    <div className="preloader">
      <div className="particles">
        {particles.current.map((_, i) => (
          <div key={i} className={`particle particle-${i}`}></div>
        ))}
      </div>
    </div>
  );
}
