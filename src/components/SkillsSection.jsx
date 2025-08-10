import { motion } from "framer-motion";

import { FaReact, FaNodeJs, FaJava, FaDatabase, FaHtml5, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase, SiFastapi, SiNextdotjs, SiJavascript, SiExpress, SiVercel, SiFlask } from "react-icons/si";

// Skill list with names, icons, and links
const skills = [
  { name: "React.js", icon: <FaReact className="text-blue-400" />, link: "https://react.dev/" },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" />, link: "https://nextjs.org/docs" },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-300" />, link: "https://tailwindcss.com/docs" },
  { name: "HTML & CSS", icon: <FaHtml5 className="text-orange-500" />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, link: "https://nodejs.org/en/docs" },
  { name: "Express.js", icon: <SiExpress className="text-white" />, link: "https://expressjs.com/" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, link: "https://www.mongodb.com/docs/" },
  { name: "FastAPI", icon: <SiFastapi className="text-blue-500" />, link: "https://fastapi.tiangolo.com/" },
  { name: "Java", icon: <FaJava className="text-red-500" />, link: "https://docs.oracle.com/en/java/" },
  { name: "Flask", icon: <SiFlask className="text-yellow-300" />, link: "https://flask.palletsprojects.com/en/2.3.x/" },
  { name: "SQL", icon: <FaDatabase className="text-gray-400" />, link: "https://www.w3schools.com/sql/" },
  { name: "RESTful APIs", icon: <FaDatabase className="text-gray-300" />, link: "https://www.restapitutorial.com/" },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, link: "https://firebase.google.com/docs" },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" />, link: "https://git-scm.com/doc" },
  { name: "Vercel & Render", icon: <SiVercel className="text-white" />, link: "https://vercel.com/docs" },
  
];

const SkillsSection = () => {
  return (
    <motion.section
      id="skills"
      className="py-16 bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }} // 👈 Ensures animation happens ONLY when you scroll to this section
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-yellow-400 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }} // 👈 Title appears only once when section is scrolled to
        >
          My Skills
        </motion.h2>

        <motion.p
          className="mt-4 text-lg text-gray-300 mb-8 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Technologies & tools I have experience with:
        </motion.p>

        {/* Skills Grid (2 Columns) */}
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <motion.a
              key={index}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-gray-800 bg-opacity-40 backdrop-blur-lg px-6 py-4 rounded-lg shadow-lg border border-gray-700 hover:border-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer hover:drop-shadow-[0_0_8px_#f5e107]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }} // 👈 Each skill appears only once when entering the viewport
            >
              <div className="text-5xl">{skill.icon}</div>
              <span className="text-2xl font-semibold">{skill.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
