export default function PortfolioItem({ title, tech, description, image }) {
  return (
    <div className="portfolio-item">
      <img src={image} alt={title} className="portfolio-image" />
      <div className="portfolio-overlay">
        <h3>{title}</h3>
        <p className="tech">{tech}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
