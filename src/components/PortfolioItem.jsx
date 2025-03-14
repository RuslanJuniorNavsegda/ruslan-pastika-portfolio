import { forwardRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const PortfolioItem = forwardRef(({ title, tech, image, link }, ref) => {
  return (
    <div className="portfolio-item" ref={ref}>
      <LazyLoadImage src={image} alt={title} effect="blur" className="image" />
      <div className="overlay">
        <h3>{title}</h3>
        <div className="tech-list">
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <a href={link} className="btn">
          Посмотреть
        </a>
      </div>
    </div>
  );
});

export default PortfolioItem;
