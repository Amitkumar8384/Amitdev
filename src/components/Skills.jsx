import { motion } from "framer-motion";

import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiGit,
  SiGithub,
  SiVite,
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa6";

const skillGroups = [
  {
    title: "Frontend",
    number: "01",
    description: "Building responsive and interactive web interfaces.",
    skills: [
      {
        name: "HTML5",
        icon: SiHtml5,
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
      },
    ],
  },

  {
    title: "Backend & Data",
    number: "02",
    description:
      "Working with APIs, server-side technologies and databases.",
    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
      {
        name: "Python",
        icon: SiPython,
      },
    ],
  },

  {
    title: "Tools & Workflow",
    number: "03",
    description:
      "Tools I use to build, manage and ship projects.",
    skills: [
      {
        name: "Git",
        icon: SiGit,
      },
      {
        name: "GitHub",
        icon: SiGithub,
      },
      {
        name: "Vite",
        icon: SiVite,
      },
    ],
  },
];

function Skills() {
  const totalSkills = skillGroups.reduce(
    (total, group) => total + group.skills.length,
    0
  );

  return (
    <section id="skills" className="section skills-section">
      <div className="container">

        {/* =========================
            HEADER
        ========================= */}
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            <span>02</span>
            <span>SKILLS</span>
          </div>

          <div className="skills-heading">
            <div>
              <p className="skills-eyebrow">
                TECHNOLOGY STACK
              </p>

              <h2>
                Tools I use to
                <br />
                <span>build things.</span>
              </h2>

              <p className="skills-description">
                A focused collection of technologies and tools I use
                to design, develop and maintain modern web applications.
              </p>
            </div>

            <div className="skills-summary">
              <strong>{totalSkills}+</strong>
              <span>Technologies & tools</span>
            </div>
          </div>
        </motion.div>

        {/* =========================
            SKILL GROUPS
        ========================= */}
        <div className="skills-groups">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              className="skill-group"
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: groupIndex * 0.1,
              }}
            >
              {/* Group Header */}
              <div className="skill-group-header">
                <div className="skill-group-title">
                  <span>{group.number}</span>

                  <div>
                    <h3>{group.title}</h3>

                    <p>{group.description}</p>
                  </div>
                </div>

                <span className="skill-count">
                  {String(group.skills.length).padStart(2, "0")}
                </span>
              </div>

              {/* Skills */}
              <div className="skills-grid">
                {group.skills.map((skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      className="skill-card"
                      key={skill.name}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.05,
                      }}
                    >
                      <div className="skill-icon">
                        <Icon />
                      </div>

                      <div className="skill-info">
                        <h4>{skill.name}</h4>

                        <span>{group.title}</span>
                      </div>

                      <span className="skill-arrow">
                        ↗
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================
            FOOTER
        ========================= */}
        <motion.div
          className="skills-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>
            <i></i>
            Currently focused on
          </span>

          <strong>
            React · JavaScript · Node.js
          </strong>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;