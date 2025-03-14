import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PortfolioItem from "../components/PortfolioItem";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Интернет-магазин",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/project1.jpg",
    link: "#",
  },
  {
    title: "Портал стартапа",
    tech: ["Next.js", "GSAP", "Framer"],
    image: "/project2.jpg",
    link: "#",
  },
];

export default function Portfolio() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.from(itemsRef.current, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="portfolio section" id="portfolio" ref={sectionRef}>
      <div className="container">
        <h2>Портфолио</h2>
        <div className="grid">
          {projects.map((project, i) => (
            <PortfolioItem
              key={project.title}
              ref={(el) => (itemsRef.current[i] = el)}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
