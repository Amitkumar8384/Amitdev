import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiDownload,
} from "react-icons/fi";

function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background */}
      <div className="hero-grid"></div>

      <div className="container hero-container">

        {/* =====================================
            LEFT CONTENT
        ===================================== */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          {/* Availability */}
          <div className="availability">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

          {/* Intro */}
          <p className="hero-intro">
            Hello, I'm Amit Kumar
          </p>

          {/* Heading */}
          <h1>
            React
            <span> Frontend Developer</span>
          </h1>

          <p className="hero-description">
            I design and build responsive, user-friendly web experiences using
            React and JavaScript to turn ideas into practical, polished products.
          </p>

          <p className="hero-mini-note">
            Focused on building clean, fast, and user-friendly web experiences.
          </p>

          {/* =====================================
              MAIN CTA
          ===================================== */}
          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn btn-primary"
            >
              <span>View My Work</span>
              <FiArrowUpRight />
            </a>

            <a
              href="#contact"
              className="btn btn-secondary"
            >
              Contact Me
            </a>

          </div>

          {/* =====================================
              SOCIAL LINKS
          ===================================== */}
          <div className="hero-socials">

            {/* GitHub */}
            <a
              href="https://github.com/Amitkumar8384"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <FiGithub />
              <span>GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/amit-kumar8384/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <FiLinkedin />
              <span>LinkedIn</span>
            </a>

            {/* Resume */}
            <a
              href="/resume/AmitKumarResume.pdf"
              download="Amit-Kumar-Resume.pdf"
              className="resume-link"
              aria-label="Download Resume"
              title="Download Resume"
            >
              <FiDownload />
              <span>Resume</span>
              <small>↓</small>
            </a>

          </div>
        </motion.div>

        {/* =====================================
            RIGHT CODE WINDOW
        ===================================== */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >

          <div className="code-window">

            {/* Window Header */}
            <div className="window-top">

              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="window-title">
                AmitDev.jsx
              </span>

            </div>

            {/* Code */}
            <div className="code-content">

              <p>
                <span className="code-purple">
                  const
                </span>{" "}
                <span className="code-blue">
                  developer
                </span>{" "}
                <span>=</span>
              </p>

              <p className="indent">
                {"{"}
              </p>

              <p className="indent-2">
                <span className="code-key">
                  name:
                </span>{" "}
                <span className="code-green">
                  "Amit Kumar"
                </span>
                ,
              </p>

              <p className="indent-2">
                <span className="code-key">
                  role:
                </span>{" "}
                <span className="code-green">
                  "Frontend Developer"
                </span>
                ,
              </p>

              <p className="indent-2">
                <span className="code-key">
                  stack:
                </span>{" "}
                <span className="code-green">
                  "React + JavaScript"
                </span>
                ,
              </p>

              <p className="indent-2">
                <span className="code-key">
                  passion:
                </span>{" "}
                <span className="code-green">
                  "Building for Web"
                </span>
              </p>

              <p className="indent">
                {"}"}
              </p>

              <p>
                <span className="code-purple">
                  export default
                </span>{" "}
                <span className="code-blue">
                  developer
                </span>
                ;
              </p>

            </div>
          </div>

          {/* Floating Card */}
          <div className="floating-card card-one">
            <span>01</span>
            <p>Clean UI</p>
          </div>

          <div className="floating-card card-two">
            <span>02</span>
            <p>Responsive</p>
          </div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span></span>
        Scroll to explore
      </div>
    </section>
  );
}

export default Hero;