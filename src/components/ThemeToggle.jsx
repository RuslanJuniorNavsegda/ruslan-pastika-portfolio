export default function ThemeToggle({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Переключить тему"
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
}
