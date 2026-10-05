import { motion } from "framer-motion";
import {
  FiCode,
  FiLayout,
  FiZap,
  FiArrowUpRight,
} from "react-icons/fi";

const highlights = [
  {
    icon: FiCode,
    title: "Clean Code",
    text: "Writing structured, maintainable and reusable frontend code.",
  },
  {
    icon: FiLayout,
    title: "Modern UI",
    text: "Creating responsive interfaces focused on usability and visual clarity.",
  },
  {
    icon: FiZap,
    title: "Performance",
    text: "Building fast and efficient web experiences across devices.",
  },
];

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">

        {/* Section Header */}
        <div className="about-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">
              <span>01</span>
              <span>ABOUT</span>
            </div>

            <p className="about-eyebrow">
              WHO I AM
            </p>

            <h2>
              Building with
              <br />
              <span>purpose.</span>
            </h2>
          </motion.div>

          <motion.p
            className="about-intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            I’m a Frontend Developer focused on building responsive,
            accessible, and user-friendly web experiences. I enjoy turning
            ideas into practical products with clean interfaces, solid UX, and
            reliable frontend logic.
          </motion.p>
        </div>

        {/* Main About */}
        <div className="about-main">

          {/* About Text */}
          <motion.div
            className="about-story"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="about-number">01 / PROFILE</span>

            <h3>
              Frontend development
              <span> with a strong product mindset.</span>
            </h3>

            <p>
              I work with JavaScript, React, Node.js, Express.js, and MySQL to
              build practical web applications that are responsive, maintainable,
              and designed around real user needs.
            </p>

            <p>
              I focus on clean code, API integration, responsive design, and
              thoughtful user experience so the final product feels smooth,
              intuitive, and reliable across devices while staying easy to use.
            </p>

            <a
              href="#projects"
              className="about-link"
            >
              Explore my work
              <FiArrowUpRight />
            </a>
          </motion.div>

          {/* Highlights */}
          <div className="about-highlights">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="about-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <div className="about-card-top">
                    <span>0{index + 1}</span>

                    <div className="about-icon">
                      <Icon />
                    </div>
                  </div>

                  <h4>{item.title}</h4>

                  <p>{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="about-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-stat">
            <strong>React</strong>
            <span>Frontend</span>
          </div>

          <div className="about-stat">
            <strong>JavaScript</strong>
            <span>Core Language</span>
          </div>

          <div className="about-stat">
            <strong>MySQL</strong>
            <span>Database</span>
          </div>

          <div className="about-stat">
            <strong>Responsive</strong>
            <span>Web Design</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;