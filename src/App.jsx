import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Github from "./components/Github";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("amitdev-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("amitdev-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Github />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;