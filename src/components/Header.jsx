import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header({ theme, setTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <button
          className="burger-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Меню"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            Обо мне
          </a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>
            Навыки
          </a>
          <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>
            Портфолио
          </a>
          <a href="#contacts" onClick={() => setIsMenuOpen(false)}>
            Контакты
          </a>
        </div>

        <div className="header-controls">
          <SocialIcons />
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </nav>
    </header>
  );
}
