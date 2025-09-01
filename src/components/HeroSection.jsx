import { ReactTyped } from 'react-typed';
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import HeroModel from './HeroModel';

const HeroSection = () => {
  return (
    <section id='home' className="bg-transparent text-gray-800 py-20 md:py-32">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Left Side - Text */}
        <div className="text-center md:text-left md:w-1/2 lg:mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Hi, I&apos;m Manoj Kumar 👋
          </h1>
          <div className="mt-4 text-xl md:text-2xl text-gray-600">
            I&apos;m a{' '}
            <ReactTyped
              strings={['Full Stack Developer', 'Freelancer', 'MERN Stack Specialist']}
              typeSpeed={100}
              backSpeed={50}
              loop
              className="text-green-600 font-bold"
            />
          </div>
          <p className="mt-6 text-md text-gray-500 max-w-lg">
            Building responsive and dynamic web applications from front-end to back-end. Let&apos;s turn your ideas into reality.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition transform hover:scale-105 shadow-lg w-full sm:w-auto text-center"
            >
              Hire Me
            </a>
            <a
              href="#project"
              className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-600 hover:text-white transition transform hover:scale-105 w-full sm:w-auto text-center"
            >
              View Projects
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="mt-8 flex justify-center md:justify-start space-x-6">
            <a
              href="https://www.linkedin.com/in/podapati-manoj-kumar-2718a1249/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-gray-800 transition transform hover:scale-125"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/manojkumar2291"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-gray-800 transition transform hover:scale-125"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>

        {/* Right Side - 3D Model */}
        <div className="mt-12 md:mt-0 md:w-1/2 h-96">
          <HeroModel />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
