import { useState } from "react";
import ProjectCard from "./ProjectCard";
import {
  publishedProjects,
  featuredProjects,
  getProjectFilters,
} from "../projectsData";
import SectionHeading from "./SectionHeading";
export default function ProjectSection() {
  const [filter, setFilter] = useState("All");
  const [view, setView] = useState("featured");
  const catalog = view === "featured" ? featuredProjects : publishedProjects;
  const filters = getProjectFilters(catalog);
  const filtered = catalog.filter(
    (project) => filter === "All" || project.categories.includes(filter),
  );
  return (
    <section id="project" className="section container">
      <SectionHeading
        number="04"
        eyebrow="SELECTED WORK"
        title="From complex problems to useful products."
        description="Hands-on AI and RAG projects alongside healthcare platforms and full-stack applications. Explore the featured work or browse the complete collection."
      />
      {/* <div
        className="project-view-switch"
        role="group"
        aria-label="Project collection"
      >
        <button
          type="button"
          aria-pressed={view === "featured"}
          onClick={() => {
            setView("featured");
            setFilter("All");
          }}
        >
          Featured projects <span>{featuredProjects.length}</span>
        </button>
        <button
          type="button"
          aria-pressed={view === "all"}
          onClick={() => {
            setView("all");
            setFilter("All");
          }}
        >
          All projects <span>{publishedProjects.length}</span>
        </button>
      </div> */}
      <div className="project-toolbar">
        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={item === filter}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <span className="project-count" role="status">
          {String(filtered.length).padStart(2, "0")} projects
        </span>
      </div>
      <div className="projects-grid">
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={publishedProjects.indexOf(project)}
          />
        ))}
      </div>
    </section>
  );
}
