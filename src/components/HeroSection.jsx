import { ReactTyped } from 'react-typed';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import manojmain from '../assets/manoj_main.jpg';

const HeroSection = () => {
  return (
    <section id='home' className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-20 md:py-32">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Left Side - Text */}
        <div className="text-center md:text-left md:w-1/2 lg:mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 leading-tight">
            Hi, I&apos;m Manoj Kumar 👋
          </h1>
          <div className="mt-4 text-2xl md:text-4xl text-gray-300">
            I&apos;m a{' '}
            <ReactTyped
              strings={['Full Stack Developer', 'Freelancer', 'MERN Stack Specialist']}
              typeSpeed={100}
              backSpeed={50}
              loop
              className="text-yellow-400 font-bold"
            />
          </div>
          <p className="mt-6 text-lg text-gray-400 max-w-lg">
            Building responsive and dynamic web applications from front-end to back-end. Let&apos;s turn your ideas into reality.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <a
              href="#contact"
              className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition transform hover:scale-105 shadow-lg"
            >
              Hire Me
            </a>
            <a
              href="#project"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-gray-900 transition transform hover:scale-105"
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
              className="text-yellow-400 hover:text-white transition transform hover:scale-125"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/manojkumar2291"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-white transition transform hover:scale-125"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center animate-float">
          <img
            src={manojmain}
            alt="Profile"
            className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-8 border-yellow-400 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
