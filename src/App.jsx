import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Contacts from "./sections/Contacts";
import Blog from "./sections/Blog";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, [theme]);

  return (
    <div className="app">
      {isLoading && <Preloader />}

      <Header theme={theme} setTheme={setTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contacts />
        <Blog />
      </main>

      <ScrollToTop />
    </div>
  );
}
