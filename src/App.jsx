import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Contacts from "./sections/Contacts";
import Blog from "./sections/Blog";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="app">
      <Header theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contacts />
      <Blog />
    </div>
  );
}
