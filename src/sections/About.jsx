import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from([textRef.current, imageRef.current], {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="content">
          <div className="text" ref={textRef}>
            <h2>Обо мне</h2>
            <p>
              Frontend-разработчик с 3+ годами опыта. Специализируюсь на
              создании современных веб-приложений с использованием React и
              экосистемы JavaScript. Люблю превращать сложные задачи в
              элегантные решения.
            </p>
            <a href="/resume.pdf" download className="btn">
              Скачать резюме
            </a>
          </div>
          <div className="image" ref={imageRef}>
            <img src="/photo.jpg" alt="Руслан Пастика" />
          </div>
        </div>
      </div>
    </section>
  );
}
