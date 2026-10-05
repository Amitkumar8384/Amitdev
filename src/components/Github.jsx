import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiStar,
  FiGitBranch,
  FiExternalLink,
  FiUsers,
  FiBookOpen,
  FiArrowUpRight,
} from "react-icons/fi";
const GITHUB_USERNAME = "Amitkumar8384";
const DEFAULT_AVATAR = `https://github.com/${GITHUB_USERNAME}.png`;

function Github() {
  const [github, setGithub] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const githubAvatarUrl = github?.avatar_url || DEFAULT_AVATAR;

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const [userResponse, repoResponse] = await Promise.all([
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}`
          ),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`
          ),
        ]);

        if (!userResponse.ok || !repoResponse.ok) {
          throw new Error("GitHub API request failed");
        }

        const userData = await userResponse.json();
        const repoData = await repoResponse.json();

        setGithub(userData);

        const filteredRepos = repoData
          .filter((repo) => !repo.fork)
          .slice(0, 6);

        setRepos(filteredRepos);
      } catch (error) {
        console.error("GitHub data error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section id="github" className="section github-section">
      <div className="container github-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <motion.div
          className="github-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="section-label">
              <span>04</span>
              <span>GITHUB</span>
            </div>

            <p className="github-eyebrow">
              OPEN SOURCE & DEVELOPMENT
            </p>

            <h2>
              Code,
              <br />
              <span>commit, build.</span>
            </h2>
          </div>

          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="github-profile-btn"
          >
            <FiGithub />
            <span>View GitHub</span>
            <FiExternalLink />
          </a>
        </motion.div>

        {/* =========================================
            PROFILE + STATS
        ========================================= */}

        <motion.div
          className="github-overview"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Profile */}

          <div className="github-profile-card">
            <div className="github-avatar">
              {githubAvatarUrl ? (
                <img
                  src={githubAvatarUrl}
                  alt="GitHub profile"
                  onError={(event) => {
                    event.currentTarget.src = DEFAULT_AVATAR;
                    event.currentTarget.onerror = null;
                  }}
                />
              ) : (
                <FiGithub />
              )}
            </div>

            <div className="github-profile-info">
              <div className="github-name-row">
                <h3>
                  {github?.name || "Amit Kumar"}
                </h3>

                <span className="github-online">
                  <i />
                  Active
                </span>
              </div>

              <p>
                @{github?.login || GITHUB_USERNAME}
              </p>

              <span className="github-bio">
                {github?.bio ||
                  "Frontend Developer building modern web experiences."}
              </span>
            </div>
          </div>

          {/* Stats */}

          <div className="github-stats">
            <div className="github-stat">
              <div className="github-stat-icon">
                <FiBookOpen />
              </div>

              <strong>
                {github?.public_repos ?? "--"}
              </strong>

              <span>Repositories</span>
            </div>

            <div className="github-stat">
              <div className="github-stat-icon">
                <FiUsers />
              </div>

              <strong>
                {github?.followers ?? "--"}
              </strong>

              <span>Followers</span>
            </div>

            <div className="github-stat">
              <div className="github-stat-icon">
                <FiGitBranch />
              </div>

              <strong>
                {github?.following ?? "--"}
              </strong>

              <span>Following</span>
            </div>
          </div>
        </motion.div>

        {/* =========================================
            CONTRIBUTION ACTIVITY
        ========================================= */}

        <motion.div
          className="github-activity"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="github-activity-header">
            <div>
              <div className="github-activity-title">
                <span className="github-activity-dot" />

                <h3>Contribution Activity</h3>
              </div>

              <p>
                GitHub activity over the last 12 months
              </p>
            </div>

            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="github-activity-link"
            >
              <FiGithub />
              <span>GitHub</span>
              <FiExternalLink />
            </a>
          </div>

          <div className="github-graph-wrapper">
            <div className="github-graph">
              <img
                src={`https://ghchart.rshah.org/${GITHUB_USERNAME}`}
                alt="GitHub contribution activity"
              />
            </div>
          </div>

          <div className="github-activity-footer">
            <span>Less</span>

            <div className="contribution-legend">
              <i className="level-0" />
              <i className="level-1" />
              <i className="level-2" />
              <i className="level-3" />
              <i className="level-4" />
            </div>

            <span>More</span>
          </div>
        </motion.div>

        {/* =========================================
            REPOSITORIES HEADER
        ========================================= */}

        <motion.div
          className="github-repos-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="github-eyebrow">
              SELECTED REPOSITORIES
            </p>

            <h3>Recent Projects</h3>
          </div>

          <a
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="github-all-repos"
          >
            <span>View all repositories</span>
            <FiExternalLink />
          </a>
        </motion.div>

        {/* =========================================
            REPOSITORIES
        ========================================= */}

        <div className="github-repos">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div
                className="repo-card repo-loading"
                key={index}
              >
                <div className="skeleton skeleton-icon" />
                <div className="skeleton skeleton-title" />
                <div className="skeleton skeleton-text" />
                <div className="skeleton skeleton-text short" />
              </div>
            ))
          ) : repos.length > 0 ? (
            repos.map((repo, index) => (
              <motion.a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="repo-card"
                key={repo.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
              >
                <div className="repo-top">
                  <div className="repo-icon">
                    <FiBookOpen />
                  </div>

                  <FiExternalLink className="repo-arrow" />
                </div>

                <h4>
                  {repo.name}
                </h4>

                <p>
                  {repo.description ||
                    "GitHub project and development repository."}
                </p>

                <div className="repo-meta">
                  {repo.language && (
                    <span className="repo-language">
                      <i />
                      {repo.language}
                    </span>
                  )}

                  <span>
                    <FiStar />
                    {repo.stargazers_count}
                  </span>

                  <span>
                    <FiGitBranch />
                    {repo.forks_count}
                  </span>
                </div>
              </motion.a>
            ))
          ) : (
            <div className="github-empty">
              GitHub repositories could not be loaded.
            </div>
          )}
        </div>

        {/* =========================================
            BOTTOM
        ========================================= */}

        <motion.div
          className="github-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span>
            Building in public
          </span>

          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/{GITHUB_USERNAME}
            <FiArrowUpRight />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Github;