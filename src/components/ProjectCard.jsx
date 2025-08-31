import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import PropTypes from 'prop-types';

const ProjectCard = ({ name, description, techStack, source_code_link, live_demo_link, imageUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col h-full"
    >
      {/* Project Image */}
      <div className="relative w-full h-56">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Description & Tech Stack */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-300 text-sm mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {techStack?.map((tech, i) => (
            <span key={i} className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-400/20 text-cyan-300">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 bg-gray-800/50 flex justify-end gap-4">
        {source_code_link && (
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition-all"
            title="Source Code"
          >
            <FaGithub className="text-2xl" />
          </a>
        )}
        {live_demo_link && (
          <a
            href={live_demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition-all"
            title="Live Demo"
          >
            <FaExternalLinkAlt className="text-2xl" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  source_code_link: PropTypes.string,
  live_demo_link: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
};

ProjectCard.defaultProps = {
  source_code_link: '',
  live_demo_link: '',
};

export default ProjectCard;