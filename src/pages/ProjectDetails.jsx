import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight, FiGithub } from "react-icons/fi";
import { publishedProjects } from "../projectsData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { icons } from "../components/Icons";

export default function ProjectDetails() {
  const { id } = useParams();
  const location = useLocation();
  const project = publishedProjects.find((item) => item.id === id);
  const Icon = icons[project?.icon] || icons.code;
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = project
      ? project.name + " | Manoj Kumar"
      : "Page not found | Manoj Kumar";
    return () => {
      document.title = "Manoj Kumar | AI / GenAI & Full-Stack Developer";
    };
  }, [project, location.pathname]);
  return (
    <>
      <Navbar />
      <main id="main-content" className="container detail-page">
        <Link to="/#project" className="text-link">
          <FiArrowLeft aria-hidden="true" /> Back to projects
        </Link>
        {project ? (
          <article>
            <p className="eyebrow">{project.category}</p>
            {project.status && (
              <p className="detail-status">{project.status}</p>
            )}
            <h1>{project.name}</h1>
            {project.subtitle && <p className="lead">{project.subtitle}</p>}
            <p className="detail-description">{project.description}</p>
            {project.image ? (
              <img
                className="detail-image"
                src={project.image}
                alt={project.name + " application screenshot"}
                width="1000"
                height="560"
              />
            ) : (
              <div className={"detail-art art-" + project.icon}>
                <Icon aria-hidden="true" />
                <span>{project.subtitle || project.name}</span>
              </div>
            )}
            <div className="detail-columns">
              <div>
                <h2>Project highlights</h2>
                <ul className="detail-highlights">
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2>Technology stack</h2>
                <ul className="tags">
                  {project.techStack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="detail-actions">
                  {project.source_code_link && (
                    <a
                      className="button button-secondary"
                      href={project.source_code_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiGithub aria-hidden="true" /> GitHub
                    </a>
                  )}
                  {project.live_demo_link && (
                    <a
                      className="button button-primary"
                      href={project.live_demo_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo <FiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            {project.workflow?.length > 0 && (
              <section
                className="case-study-section"
                aria-labelledby="workflow-heading"
              >
                <h2 id="workflow-heading">How it works</h2>
                <ol className="project-workflow">
                  {project.workflow.map((step, index) => (
                    <li key={step.title}>
                      <span className="workflow-number" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}
            {project.details?.map((section) => (
              <section className="case-study-section" key={section.title}>
                <h2>{section.title}</h2>
                {section.description && <p>{section.description}</p>}
                {section.items?.length > 0 && (
                  <ul className="detail-highlights">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>
        ) : (
          <div className="not-found">
            <p className="eyebrow">404</p>
            <h1>{id ? "Project not found." : "Page not found."}</h1>
            <p>
              This page is unavailable. Explore the selected work on the
              portfolio.
            </p>
            <Link className="button button-primary" to="/#project">
              Explore projects <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
