import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiAward,
  FiCalendar,
  FiArrowUpRight,
} from "react-icons/fi";

const education = [
  {
    year: "01/2022 — 12/2022",
    degree: "Bachelor of Computer Application",
    short: "BCA",
    institute: "IGNOU",
    icon: FiBookOpen,
    type: "Degree",
  },
  {
    year: "01/2017 — 12/2017",
    degree: "Class XII",
    short: "Senior Secondary",
    institute: "CBSE",
    icon: FiAward,
    type: "School Education",
  },
  {
    year: "01/2015 — 12/2015",
    degree: "Class X",
    short: "Secondary",
    institute: "CBSE",
    icon: FiAward,
    type: "School Education",
  },
];

function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            06 — EDUCATION
          </span>

          <h2>
            Education &
            <br />
            <span>academic journey.</span>
          </h2>

          <p>
            My academic background and educational journey.
          </p>
        </motion.div>

        <div className="education-list">
          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className={`education-card ${
                  index === 0 ? "education-primary" : ""
                }`}
                key={`${item.institute}-${item.year}`}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="education-number">
                  0{index + 1}
                </div>

                <div className="education-icon">
                  <Icon />
                </div>

                <div className="education-content">
                  <div className="education-top">
                    <span className="education-type">
                      {item.type}
                    </span>

                    <span className="education-date">
                      <FiCalendar />
                      {item.year}
                    </span>
                  </div>

                  <h3>{item.degree}</h3>

                  <p className="education-short">
                    {item.short}
                  </p>

                  <span className="education-institute">
                    {item.institute}
                  </span>
                </div>

                <FiArrowUpRight className="education-arrow" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;