import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GalaxyBackground from "../components/GalaxyBackground";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
    }).from(
      subtitleRef.current,
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.5"
    );

    gsap.to(titleRef.current, {
      y: -30,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top center",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section className="hero" id="home">
      <GalaxyBackground />

      <div className="hero-content">
        <h1 ref={titleRef} className="gradient-text">
          Руслан Пастика
        </h1>
        <p ref={subtitleRef}>Frontend Developer | Создаю цифровые вселенные</p>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
}
