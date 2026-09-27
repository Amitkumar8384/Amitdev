import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiFileText,
  FiX,
} from "react-icons/fi";

const projects = [
  {
    number: "01",
    slug: "expense-tracker",
    title: "Expense Tracker",
    category: "Full-Stack",
    description:
      "A full-stack personal finance management application for tracking income and expenses, managing budgets, recurring transactions, and viewing financial reports.",
    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
      "REST API",
    ],
    image: "/projects/expense-tracker.png",
    live: "https://expense-tracker-lyart-beta-32.vercel.app/",
    github: "https://github.com/Amitkumar8384/expense-tracker",
    caseStudy: {
      problem:
        "Users need a simple and secure way to track their income and expenses while managing budgets and recurring transactions.",
      approach:
        "Built a full-stack application with React for the frontend, Node.js and Express.js for the REST API, and MySQL for persistent data storage. Implemented JWT authentication, protected APIs, expense management, budgets, recurring transactions, reports, and profile management.",
      impact:
        "The project demonstrates full-stack development, authentication, database management, REST API integration, responsive UI design, and production deployment.",
      stack:
        "React, Vite, Node.js, Express.js, MySQL, JWT, REST API",
    },
  },

  {
    number: "02",
    slug: "freshnut-ecommerce",
    title: "FreshNut E-commerce",
    category: "E-commerce",
    description:
      "A responsive e-commerce website with product listing and a shopping cart using Local Storage.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Local Storage",
    ],
    image: "/projects/freshnut.png",
    live: "https://amitkumar8384.github.io/FreshNut/",
    github: "https://github.com/Amitkumar8384/FreshNut",
    caseStudy: {
      problem:
        "Users need a simple online store to browse products and add them to a cart.",
      approach:
        "Built reusable UI components and implemented a cart system using Local Storage.",
      impact:
        "The project demonstrates e-commerce UI design, product listing, and cart functionality.",
      stack:
        "HTML5, CSS3, JavaScript, LocalStorage",
    },
  },

  {
    number: "03",
    slug: "weather-app-pro",
    title: "Weather App Pro",
    category: "API / Web App",
    description:
      "A weather application that shows real-time weather information for any city using a public weather API.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Weather API",
      "Fetch API",
    ],
    image: "/projects/weather.png",
    live: "https://amitkumar8384.github.io/Weather-App-pro/",
    github: "https://github.com/Amitkumar8384/Weather-App-pro",
    caseStudy: {
      problem:
        "Users need a quick way to check the current weather of any city online.",
      approach:
        "Used JavaScript Fetch API to get weather data from an API and update the UI dynamically.",
      impact:
        "This project demonstrates API integration, asynchronous JavaScript, and responsive UI design.",
      stack:
        "HTML5, CSS3, JavaScript, Weather API",
    },
  },

  {
    number: "04",
    slug: "todo-list",
    title: "To-Do List Application",
    category: "Frontend",
    description:
      "A task management application with CRUD operations, DOM event handling, and persistent data using Local Storage.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript ES6",
      "DOM",
      "Local Storage",
    ],
    image: "/projects/todo-list.png",
    live: "#",
    github: "#",
    caseStudy: {
      problem:
        "Daily task tracking ke liye clean CRUD workflow chahiye tha with zero backend dependency.",
      approach:
        "Event-driven DOM updates, input validation, and local storage sync use kiya for reliable persistence.",
      impact:
        "Fast prototype se productivity demo ready hua and JavaScript fundamentals strongly showcase hue.",
      stack:
        "HTML5, CSS3, JavaScript, LocalStorage",
    },
  },

  {
    number: "05",
    slug: "ai-dashboard",
    title: "AI Dashboard Monitoring UI",
    category: "Dashboard / UI",
    description:
      "A data-focused dashboard interface pattern inspired by real-time AI event monitoring workflows.",
    tech: [
      "JavaScript",
      "Angular",
      "Responsive UI",
    ],
    image: "/projects/ai-dashboard.png",
    live: "#",
    github: "#",
    caseStudy: {
      problem:
        "High-volume monitoring context me operators ko quick visual prioritization ki need thi.",
      approach:
        "Alert-focused card hierarchy, responsive grid, and dashboard readability patterns apply kiye.",
      impact:
        "Complex data ko glanceable format me convert karke triage speed improve hui.",
      stack:
        "JavaScript, Angular Patterns, Responsive UI",
    },
  },
];

const filters = [
  "All",
  "Frontend",
  "Full-Stack",
  "E-commerce",
  "API / Web App",
  "Dashboard / UI",
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  const openCaseStudy = (project) => {
    setSelectedProject(project);
    document.body.classList.add("modal-open");
  };

  const closeCaseStudy = () => {
    setSelectedProject(null);
    document.body.classList.remove("modal-open");
  };

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setShowAll(false);
  };

  return (
    <>
      <section id="projects" className="section projects-section">
        <div className="container">

          {/* ================================
              HEADER
          ================================= */}

          <motion.div
            className="projects-header"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="section-label">
                <span>03</span>
                <span>PROJECTS</span>
              </div>

              <p className="projects-eyebrow">
                SELECTED WORK
              </p>

              <h2>
                Things I've
                <br />
                <span>built.</span>
              </h2>
            </div>

            <p className="projects-intro">
              A selection of projects where I build interfaces,
              solve practical problems and experiment with modern
              web technologies.
            </p>
          </motion.div>

          {/* ================================
              FILTERS
          ================================= */}

          <motion.div
            className="project-filters"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={
                  activeFilter === filter
                    ? "active"
                    : ""
                }
                onClick={() => handleFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Result count */}

          <div className="project-result-info">
            <span>
              {activeFilter === "All"
                ? "ALL PROJECTS"
                : activeFilter.toUpperCase()}
            </span>

            <span>
              {filteredProjects.length
                .toString()
                .padStart(2, "0")}{" "}
              PROJECTS
            </span>
          </div>

          {/* ================================
              PROJECT GRID
          ================================= */}

          <motion.div
            layout
            className="projects-grid"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => (
                <motion.article
                  layout
                  key={project.slug}
                  className="project-card"
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                >

                  {/* IMAGE */}

                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      loading="lazy"
                    />

                    <div className="project-image-gradient" />

                    <span className="project-number">
                      {project.number}
                    </span>

                    <span className="project-category">
                      {project.category}
                    </span>

                    <button
                      type="button"
                      className="project-preview-overlay"
                      onClick={() =>
                        openCaseStudy(project)
                      }
                    >
                      <span>
                        View Case Study
                      </span>

                      <FiArrowUpRight />
                    </button>
                  </div>

                  {/* CONTENT */}

                  <div className="project-content">

                    <div className="project-heading">
                      <div>
                        <span className="project-category-small">
                          {project.category}
                        </span>

                        <h3>
                          {project.title}
                        </h3>
                      </div>

                      {project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-github"
                          aria-label={`${project.title} GitHub`}
                        >
                          <FiGithub />
                        </a>
                      )}
                    </div>

                    <p className="project-description">
                      {project.description}
                    </p>

                    {/* TECH */}

                    <div className="tech-list">
                      {project.tech.map((tech) => (
                        <span key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* ACTIONS */}

                    <div className="project-actions">

                      {project.live !== "#" ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link primary"
                        >
                          Live Demo
                          <FiArrowUpRight />
                        </a>
                      ) : (
                        <span className="project-link disabled">
                          Live Soon
                        </span>
                      )}

                      {project.github !== "#" ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          GitHub
                          <FiGithub />
                        </a>
                      ) : (
                        <span className="project-link disabled">
                          Private
                        </span>
                      )}

                      <button
                        type="button"
                        className="project-link"
                        onClick={() =>
                          openCaseStudy(project)
                        }
                      >
                        Case Study
                        <FiFileText />
                      </button>

                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* EMPTY STATE */}

          {filteredProjects.length === 0 && (
            <div className="projects-empty">
              No projects available in this category.
            </div>
          )}

          {/* ================================
              SEE MORE
          ================================= */}

          {filteredProjects.length > 3 && (
            <motion.div
              className="projects-more"
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
            >
              <button
                type="button"
                className="see-more-btn"
                onClick={() =>
                  setShowAll((prev) => !prev)
                }
              >
                <span>
                  {showAll
                    ? "Show Less"
                    : `See More Projects (${filteredProjects.length - 3})`}
                </span>

                <FiArrowUpRight
                  className={
                    showAll
                      ? "rotate-arrow"
                      : ""
                  }
                />
              </button>
            </motion.div>
          )}

        </div>
      </section>

      {/* =========================================
          CASE STUDY MODAL
      ========================================= */}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(event) => {
              if (
                event.target === event.currentTarget
              ) {
                closeCaseStudy();
              }
            }}
          >
            <motion.div
              className="project-modal-content"
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
            >

              <div className="project-modal-header">
                <div>
                  <span className="modal-category">
                    {selectedProject.category}
                  </span>

                  <h2>
                    {selectedProject.title}
                  </h2>
                </div>

                <button
                  type="button"
                  className="project-modal-close"
                  onClick={closeCaseStudy}
                  aria-label="Close"
                >
                  <FiX />
                </button>
              </div>

              <div className="project-modal-image">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} screenshot`}
                />
              </div>

              <div className="project-case-study">

                <article>
                  <span>01</span>

                  <div>
                    <h3>Problem</h3>

                    <p>
                      {selectedProject.caseStudy.problem}
                    </p>
                  </div>
                </article>

                <article>
                  <span>02</span>

                  <div>
                    <h3>Approach</h3>

                    <p>
                      {selectedProject.caseStudy.approach}
                    </p>
                  </div>
                </article>

                <article>
                  <span>03</span>

                  <div>
                    <h3>Impact</h3>

                    <p>
                      {selectedProject.caseStudy.impact}
                    </p>
                  </div>
                </article>

                <article>
                  <span>04</span>

                  <div>
                    <h3>Technology</h3>

                    <p>
                      {selectedProject.caseStudy.stack}
                    </p>
                  </div>
                </article>

              </div>

              <div className="project-modal-actions">

                {selectedProject.live !== "#" && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo
                    <FiArrowUpRight />
                  </a>
                )}

                {selectedProject.github !== "#" && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    GitHub
                    <FiGithub />
                  </a>
                )}

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Projects;