import ProjectCard from "./ProjectCard";
import { personalProjects } from "../projectsData";

const ProjectSection = () => {
  return (
    <section className="projects-section p-12 md:p-16 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white" id="project">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">My Personal Projects</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {personalProjects.map((project, index) => (
          <div key={project.id} className="w-full sm:w-1/2 lg:w-[30%]">
            <ProjectCard
              index={index}
              name={project.name}
              description={project.description}
              techStack={project.techStack}
              source_code_link={project.source_code_link}
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
