import { useEffect, useState } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
} from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Github", href: "#github" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const GITHUB_URL = "https://github.com/Amitkumar8384";
const LINKEDIN_URL = "https://www.linkedin.com/in/amit-kumar8384/";

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* ================================
     ACTIVE SECTION + SCROLL
  ================================= */

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            `#${visibleSections[0].target.id}`
          );
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0, 0.2, 0.5, 1],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    /* Close mobile menu when scrolling */

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="container nav-container">

        {/* ================================
            LOGO
        ================================= */}

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
          aria-label="AmitDev Home"
        >
          <span className="logo-symbol">&lt;</span>
          <span className="logo-name">AmitDev</span>
          <span className="logo-symbol">/&gt;</span>
        </a>

        {/* ================================
            NAVIGATION
        ================================= */}

        <nav
          className={`nav-links ${
            menuOpen ? "active" : ""
          }`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={
                activeSection === link.href
                  ? "active"
                  : ""
              }
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}

          {/* ================================
              MOBILE SOCIALS
          ================================= */}

          <div className="mobile-socials">

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              onClick={closeMenu}
            >
              <FiGithub />
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              onClick={closeMenu}
            >
              <FiLinkedin />
            </a>

          </div>
        </nav>

        {/* ================================
            RIGHT ACTIONS
        ================================= */}

        <div className="nav-actions">

          {/* Theme Toggle */}

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            title={
              theme === "dark"
                ? "Switch to Light Mode"
                : "Switch to Dark Mode"
            }
          >
            {theme === "dark" ? (
              <FiSun />
            ) : (
              <FiMoon />
            )}
          </button>

          {/* GitHub */}

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <FiGithub />
          </a>

          {/* LinkedIn */}

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <FiLinkedin />
          </a>

          {/* Let's Talk */}

          <a
            href="#contact"
            className="nav-contact"
            onClick={closeMenu}
          >
            Let's Talk
          </a>

          {/* ================================
              MOBILE MENU BUTTON
          ================================= */}

          <button
            type="button"
            className="menu-btn"
            onClick={() =>
              setMenuOpen((prev) => !prev)
            }
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;