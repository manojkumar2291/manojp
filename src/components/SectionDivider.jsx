import React from "react";
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope, FaLaptopCode} from "react-icons/fa"; // Import icons

const SectionDivider = ({ section }) => {
  // Define icons for different sections
  const icons = {
    hero: <FaHome className="text-3xl text-blue-500" />,
    about: <FaUser className="text-3xl text-green-500" />,
    skills: <FaTools className="text-3xl text-yellow-500" />,
    services:<FaLaptopCode className="text-3xl text-lime-300"/>,
    projects: <FaProjectDiagram className="text-3xl text-purple-500" />,
    contact: <FaEnvelope className="text-3xl text-red-500" />,
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="flex-grow h-px bg-yellow-400"></div>
      <div className=" mx-1 p-2 bg-grey-900 rounded-full shadow-md">{icons[section]}</div>
      <div className="flex-grow h-px bg-yellow-400"></div>
    </div>
  );
};

export default SectionDivider;
