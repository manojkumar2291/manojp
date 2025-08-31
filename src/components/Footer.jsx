import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Manoj. All Rights Reserved.
        </div>
        <div className="flex justify-center md:justify-start space-x-4 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/podapati-manoj-kumar-2718a1249/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://github.com/manojkumar2291" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 text-2xl">
            <FaGithub />
          </a>
          <a href="https://portfolio-self-five-94.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 text-2xl">
            <FaGlobe />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
