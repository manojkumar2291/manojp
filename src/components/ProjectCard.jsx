import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { icons } from "./Icons";

export default function ProjectCard({ project, index = 0 }) {
  const Icon = icons[project.icon] || icons.code;
  return (
    <motion.article
      className="project-card panel"
      initial={false}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className={"project-art art-" + (project.icon || "screenshot")}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.name + " application screenshot"}
            loading="lazy"
            decoding="async"
            width="640"
            height="360"
          />
        ) : (
          <>
            <div className="art-lines" aria-hidden="true" />
            <Icon className="project-art-icon" aria-hidden="true" />
            <span className="art-caption">
              {project.artCaption ||
                (project.icon === "voice"
                  ? "VOICE → INTERACTION"
                  : project.icon === "ai"
                    ? "CONVERSATION → CARE"
                    : "SOFTWARE → SOLUTIONS")}
            </span>
          </>
        )}
        <span className="project-number">
          {String(index + 1).padStart(2, "0")}
        </span>
        {project.status && (
          <span className="project-status">{project.status}</span>
        )}
      </div>
      <div className="project-content">
        <p className="eyebrow project-category">{project.category}</p>
        <h3>
          <Link to={"/project/" + project.id}>
            {project.name} <FiArrowUpRight aria-hidden="true" />
          </Link>
        </h3>
        {project.subtitle && (
          <p className="project-subtitle">{project.subtitle}</p>
        )}
        <p className="project-description">{project.description}</p>
        <ul className="project-highlights">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="tags">
          {project.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-actions">
          <Link to={"/project/" + project.id} className="text-link">
            Project details <FiArrowUpRight aria-hidden="true" />
          </Link>
          <div>
            {project.source_code_link && (
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noreferrer"
                aria-label={"GitHub source for " + project.name}
              >
                <FiGithub aria-hidden="true" /> GitHub
              </a>
            )}
            {project.live_demo_link && (
              <a
                href={project.live_demo_link}
                target="_blank"
                rel="noreferrer"
                aria-label={"Live demo of " + project.name}
              >
                Live Demo <FiArrowUpRight aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    category: PropTypes.string,
    icon: PropTypes.string,
    image: PropTypes.string,
    status: PropTypes.string,
    artCaption: PropTypes.string,
    description: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    source_code_link: PropTypes.string,
    live_demo_link: PropTypes.string,
  }).isRequired,
  index: PropTypes.number,
};
