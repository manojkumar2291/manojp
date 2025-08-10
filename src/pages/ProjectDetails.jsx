// src/pages/ProjectDetails.jsx
import { useParams } from 'react-router-dom';
import {personalProjects } from '../projectsData';  // Import the projects array

const ProjectDetails = () => {
  const { id } = useParams();  // Get the project ID from the URL
  const project = personalProjects.find((project) => project.id === id);  // Find the project using the id

  if (!project) {
    return <p className="text-white">Project not found!</p>;  // Handle case when project is not found
  }

  return (
    <div className="p-8 bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950 min-h-screen text-white">
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-4xl font-semibold text-center text-gold-500">{project.title}</h2>
        <div className="mt-6">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-72 object-cover rounded-lg shadow-md"
          />
        </div>
        <h3 className="text-xl text-gray-300 mt-4">{project.description}</h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack?.map((tech, index) => (
            <span key={index} className="px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black">
              #{tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-6">
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-yellow-400 text-xl"
          >
            GitHub
          </a>
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-yellow-400 text-xl"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
