import ProjectCard from "./ProjectCard";
import { freelanceProjects } from "../projectsData";

const FreelanceSection = () => {
  return (
    <section className="projects-section p-12 md:p-16 bg-transparent text-gray-800" id="freelance">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">My Freelance Experience</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {freelanceProjects.map((project, index) => (
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

export default FreelanceSection;
