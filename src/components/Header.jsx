import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import SocialIcons from "./SocialIcons";

export default function Header({ theme, setTheme }) {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo">
          RP
        </Link>
        <div className="nav-links">
          <Link to="#about">Обо мне</Link>
          <Link to="#skills">Навыки</Link>
          <Link to="#portfolio">Портфолио</Link>
          <Link to="#contacts">Контакты</Link>
        </div>
        <div className="header-controls">
          <SocialIcons />
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </nav>
    </header>
  );
}
