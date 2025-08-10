import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import PropTypes from 'prop-types';

const ProjectCard = ({ index, name, description, techStack, source_code_link, live_demo_link, imageUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative group rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-gray-700 shadow-lg hover:shadow-yellow-400/20 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative w-full h-56">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

        {/* Project Title */}
        <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
          {name}
        </div>

        {/* Action Buttons (GitHub & Live Demo) */}
        <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {source_code_link && (
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/80 rounded-full hover:bg-yellow-500 transition-all"
            >
              <FaGithub className="text-white text-xl" />
            </a>
          )}
          {live_demo_link && (
            <a
              href={live_demo_link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/80 rounded-full hover:bg-yellow-500 transition-all"
            >
              <FaExternalLinkAlt className="text-white text-xl" />
            </a>
          )}
        </div>
      </div>

      {/* Description & Tech Stack */}
      <div className="p-6">
        <p className="text-gray-300 text-sm h-12 overflow-hidden group-hover:h-auto transition-all duration-300">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {techStack?.map((tech, i) => (
            <span key={i} className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-400/20 text-yellow-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
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