import React from "react";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Section 1: Logo & Description */}
        <div>
          <h2 className="text-xl font-semibold text-yellow-400">Manoj's Portfolio</h2>
          <p className="mt-2 text-gray-400">
            Passionate developer crafting seamless digital experiences.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About</a></li>
            <li><a href="#skills" className="hover:text-yellow-400">Skills</a></li>
            <li><a href="#project" className="hover:text-yellow-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Section 3: Social Media & Projects */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">Connect with Me</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="https://www.linkedin.com/in/podapati-manoj-kumar-2718a1249/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://github.com/manojkumar2291" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 text-2xl">
              <FaGithub />
            </a>
            <a href="https://" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 text-2xl">
              <FaGlobe />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Manoj. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
