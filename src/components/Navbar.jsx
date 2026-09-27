import { useState } from "react";
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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container nav-container">

        {/* Logo */}
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

        {/* Navigation */}
        <nav
          className={`nav-links ${menuOpen ? "active" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Social Links */}
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

        {/* Right Actions */}
        <div className="nav-actions">

          {/* Theme */}
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
            {theme === "dark" ? <FiSun /> : <FiMoon />}
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

          {/* Contact */}
          <a
            href="#contact"
            className="nav-contact"
            onClick={closeMenu}
          >
            Let's Talk
          </a>

          {/* Mobile Menu */}
          <button
            type="button"
            className="menu-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
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