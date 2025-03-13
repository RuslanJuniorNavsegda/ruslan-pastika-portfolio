import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, {
      duration: 1.5,
      opacity: 0,
      y: 50,
      ease: "power3.out",
    });
  }, []);

  return (
    <section ref={heroRef} className="hero" id="home">
      <div className="hero-content">
        <h1>Руслан Пастика</h1>
        <p>Frontend Developer | Создаю цифровые вселенные</p>
      </div>
    </section>
  );
}
