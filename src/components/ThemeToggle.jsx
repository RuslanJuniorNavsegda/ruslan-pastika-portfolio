import { useRef } from "react";
import { gsap } from "gsap";

export default function ThemeToggle({ theme, setTheme }) {
  const sunRef = useRef(null);
  const moonRef = useRef(null);

  const toggleTheme = () => {
    const tl = gsap.timeline();
    if (theme === "dark") {
      tl.to(sunRef.current, { scale: 0, duration: 0.2 }).to(moonRef.current, {
        scale: 1,
        duration: 0.2,
      });
    } else {
      tl.to(moonRef.current, { scale: 0, duration: 0.2 }).to(sunRef.current, {
        scale: 1,
        duration: 0.2,
      });
    }
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Переключить тему"
    >
      <div className="icons-container">
        <svg ref={sunRef} className="icon sun" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" fill="currentColor" />
          <path d="M12 2v2m0 16v2M4 12H2m4.3-5.7L5 5m11.7 1.3L19 5M6.3 17.7L5 19m11.7-1.3L19 19" />
        </svg>

        <svg ref={moonRef} className="icon moon" viewBox="0 0 24 24">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" fill="currentColor" />
        </svg>
      </div>
    </button>
  );
}
