import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              &lt;<span>Amit<span>Dev</span></span>/&gt;
            </a>

            <p>
              Frontend Developer focused on building clean,
              responsive and user-friendly web experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="footer-socials">
            <a
              href="https://github.com/Amitkumar8384"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
              <span>GitHub</span>
              <FiArrowUpRight />
            </a>

            <a
              href="https://www.linkedin.com/in/amit-kumar8384/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
              <span>LinkedIn</span>
              <FiArrowUpRight />
            </a>

            <a
              href="mailto:Amitkumar838401@gmail.com"
              aria-label="Email"
            >
              <FiMail />
              <span>Email</span>
              <FiArrowUpRight />
            </a>
          </div>
        </div>

        <div className="footer-line" />

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} AmitDev. All rights reserved.
          </p>

          <button
            type="button"
            className="back-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <span className="back-top-arrow">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;