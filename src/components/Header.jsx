import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import SocialIcons from "./SocialIcons";

export default function Header({ theme, setTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: "about", text: "Обо мне" },
    { id: "skills", text: "Навыки" },
    { id: "portfolio", text: "Портфолио" },
    { id: "contacts", text: "Контакты" },
  ];

  return (
    <header className="header">
      <nav className="container">
        <a href="#home" className="logo">
          RP
        </a>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Меню"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.text}
            </a>
          ))}
        </div>

        <div className="controls">
          <SocialIcons />
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </nav>
    </header>
  );
}
