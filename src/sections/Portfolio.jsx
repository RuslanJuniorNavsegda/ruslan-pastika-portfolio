import PortfolioItem from "../components/PortfolioItem";

const projects = [
  {
    title: "Интернет-магазин",
    tech: "React + Node.js",
    description: "Полноценный магазин с корзиной и платежами.",
    image: "/project1.jpg",
  },
  {
    title: "Портал для стартапа",
    tech: "Next.js + GSAP",
    description: "Анимированный лендинг с параллакс-эффектами.",
    image: "/project2.jpg",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2>Портфолио</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
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
