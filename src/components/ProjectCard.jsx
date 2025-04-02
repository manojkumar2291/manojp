import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ index, name, description, techStack, source_code_link, live_demo_link, imageUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative group rounded-2xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative w-full h-56">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>

        {/* Project Title */}
        <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
          {name}
        </div>

        {/* Action Buttons (GitHub & Live Demo) */}
        <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {source_code_link && (
            <a href={source_code_link} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-all">
              <FaGithub className="text-white text-lg" />
            </a>
          )}
          {live_demo_link && (
            <a href={live_demo_link} target="_blank" rel="noopener noreferrer" className="p-2 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-all">
              <FaExternalLinkAlt className="text-white text-lg" />
            </a>
          )}
        </div>
      </div>

      {/* Description & Tech Stack */}
      <div className="p-6">
        <p className="text-gray-400 text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300 overflow-hidden">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {techStack?.map((tech, i) => (
            <span key={i} className="px-3 py-1 text-xs font-semibold rounded bg-gray-700 text-white">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;