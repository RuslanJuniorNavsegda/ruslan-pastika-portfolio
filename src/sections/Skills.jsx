import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaJs, FaSass } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { icon: <FaReact />, name: "React", level: 90 },
  { icon: <FaJs />, name: "JavaScript", level: 85 },
  { icon: <FaSass />, name: "Sass/SCSS", level: 95 },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.from(itemsRef.current, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="skills section" id="skills" ref={sectionRef}>
      <div className="container">
        <h2>Мои навыки</h2>
        <div className="grid">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="skill-card"
              ref={(el) => (itemsRef.current[i] = el)}
            >
              <div className="icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
