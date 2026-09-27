import { motion } from "framer-motion";
import {
  FiCode,
  FiActivity,
} from "react-icons/fi";

const experiences = [
  {
    year: "05/2024",
    type: "Professional Experience",
    icon: FiActivity,
    company: "Nayan India Science & Technologies Pvt. Ltd.",
    location: "New Delhi, India",
    role: "Digital Specialist",
    description:
      "Worked with AI technology solutions, monitoring real-time dashboards and supporting AI/ML data quality and training workflows.",
    responsibilities: [
      "Monitored real-time AI dashboards ensuring high event detection accuracy.",
      "Filtered false detections and maintained data quality.",
      "Performed image and video annotation for AI/ML training.",
    ],
    tags: [
      "AI Dashboards",
      "Data Quality",
      "AI/ML",
      "Annotation",
    ],
  },
  {
    year: "11/2023 — 02/2024",
    type: "Professional Experience",
    icon: FiCode,
    company: "Ziyyara Edutech Pvt. Ltd.",
    location: "Noida, India",
    role: "Web Developer",
    description:
      "Worked on web development for an EdTech platform offering online learning and digital education services.",
    responsibilities: [
      "Developed responsive web pages using HTML, CSS, and JavaScript.",
      "Assisted in Angular frontend development.",
      "Integrated APIs and used Git for version control.",
    ],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Angular",
      "API",
      "Git",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.div
          className="section-heading centered"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            05 — EXPERIENCE
          </span>

          <h2>
            Experience that
            <br />
            <span>shaped my journey.</span>
          </h2>

          <p>
            A look at my professional experience and the work
            I have contributed to across web development and
            AI technology environments.
          </p>
        </motion.div>

        <div className="experience-list">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <motion.article
                className="experience-card"
                key={experience.company}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
              >
                <div className="experience-side">
                  <span className="experience-year">
                    {experience.year}
                  </span>

                  <div className="experience-icon">
                    <Icon />
                  </div>
                </div>

                <div className="experience-main">
                  <div className="experience-header">
                    <div>
                      <span className="experience-type">
                        {experience.type}
                      </span>

                      <h3>{experience.role}</h3>

                      <h4>{experience.company}</h4>
                    </div>

                    <span className="experience-location">
                      {experience.location}
                    </span>
                  </div>

                  <p className="experience-description">
                    {experience.description}
                  </p>

                  <ul className="experience-responsibilities">
                    {experience.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="experience-tags">
                    {experience.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;