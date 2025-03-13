import { useState } from "react";
import PortfolioItem from "../components/PortfolioItem";

const projects = [
  {
    title: "Интернет-магазин",
    tech: ["React", "Node.js", "MongoDB"],
    description:
      "Полнофункциональный магазин с системой оплаты и админ-панелью",
    image: "/project1.jpg",
    tags: ["Все", "React", "FullStack"],
  },
  {
    title: "Портал для стартапа",
    tech: ["Next.js", "GSAP", "Framer Motion"],
    description: "Интерактивный лендинг с анимациями и параллакс-эффектами",
    image: "/project2.jpg",
    tags: ["Все", "Next.js", "Анимации"],
  },
  {
    title: "Мобильное приложение",
    tech: ["React Native", "Firebase", "Redux"],
    description: "Кроссплатформенное приложение для управления задачами",
    image: "/project3.jpg",
    tags: ["Все", "React Native", "Mobile"],
  },
];

export default function Portfolio() {
  const [selectedTag, setSelectedTag] = useState("Все");

  const filteredProjects =
    selectedTag === "Все"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  return (
    <section className="portfolio" id="portfolio">
      <h2>Портфолио</h2>

      <div className="tags-filter">
        {["Все", "React", "Next.js", "React Native", "FullStack"].map((tag) => (
          <button
            key={tag}
            className={selectedTag === tag ? "active" : ""}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map((project, index) => (
          <PortfolioItem
            key={index}
            title={project.title}
            tech={project.tech}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}
