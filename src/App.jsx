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

import { FaWhatsapp } from "react-icons/fa";

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

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918384010361?text=Hi%20Amit%2C%20I%20visited%20your%20portfolio."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Amit on WhatsApp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default App;