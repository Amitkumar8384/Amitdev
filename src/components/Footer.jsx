import { useEffect, useState } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";

const Footer = () => {
  const [showBackTop, setShowBackTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setScrollProgress(
        Math.min(Math.max(Math.round(progress), 0), 100)
      );

      setShowBackTop(scrollTop > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const circumference = 2 * Math.PI * 24;
  const dashOffset =
    circumference - (scrollProgress / 100) * circumference;

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

          {/* Apple-style Glass Back To Top */}
          {showBackTop && (
            <button
              type="button"
              className="back-top"
              onClick={scrollToTop}
              aria-label={`Back to top. ${scrollProgress}% scrolled`}
              title={`Back to top — ${scrollProgress}%`}
            >
              <svg
                className="back-top-ring"
                viewBox="0 0 56 56"
                aria-hidden="true"
              >
                {/* Background Ring */}
                <circle
                  className="back-top-ring-bg"
                  cx="28"
                  cy="28"
                  r="24"
                />

                {/* Progress Ring */}
                <circle
                  className="back-top-ring-progress"
                  cx="28"
                  cy="28"
                  r="24"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                />
              </svg>

              <span className="back-top-content">
                <span className="back-top-arrow">↑</span>

                <span className="back-top-percent">
                  {scrollProgress}%
                </span>
              </span>
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;