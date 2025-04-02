import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../projectsData";

const ProjectSection = () => {
  return (
    <section className="projects-section p-12 md:p-16 bg-gray-900 text-white" id="project">
      <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">My Projects</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div key={project.id} className="w-full sm:w-1/2 lg:w-[30%]">
            <ProjectCard
              index={index}
              name={project.name}
              description={project.description}
              techStack={project.techStack}
              source_code_link={project.githubLink}
              live_demo_link={project.live_demo_link}
              imageUrl={project.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
