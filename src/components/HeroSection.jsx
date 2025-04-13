import React from "react";
import {ReactTyped} from 'react-typed'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import manojmain from '../assets/manoj_main.jpg'


const HeroSection = () => {
  return (
    <section id='home'className="bg-gray-900 text-white py-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Left Side - Text */}
        <div className="text-center md:text-left md:w-1/2 lg:mx-50">
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
        Hi, I'm Manoj 👋
      </h1>
      <p className="mt-4 text-4xl text-gray-300">
        I'm a
        <span className="mt-4 text-4xl text-yellow-400">
          <b>
             {" "}Full Stack Developer
          </b>
        </span>{" "}
        
      </p>
      <p className="mt-4 text-lg text-gray-300"> Building Bridges Between Front-End and Back-End, Transforming Ideas into Web Reality</p>

      {/* Call to Action Buttons */}
      <div className="mt-6 flex justify-center md:justify-start space-x-4">
        <a
          href="#contact"
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Hire Me
        </a>
        <a
          href="#project"
          className="border border-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition"
        >
          View Projects
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="mt-6 flex justify-center md:justify-start space-x-6 text-yellow-400">
        <a
          href="https://www.linkedin.com/in/podapati-manoj-kumar-2718a1249/" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition transform hover:scale-110 border rounded-4xl p-2 hover:drop-shadow-[0_0_8px_#f5e107]"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://github.com/manojkumar2291" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition transform hover:scale-110 border rounded-4xl p-2 hover:drop-shadow-[0_0_8px_#f5e107]"
        >
          <FaGithub size={20} />
        </a>
        {/* <a
          href="https://leetcode.com/your-leetcode" // Replace with your LeetCode URL
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition transform hover:scale-110 border rounded-4xl p-2 hover:drop-shadow-[0_0_8px_#f5e107]"
        >
          <FaEnvelope size={20} />
        </a> */}
        {/* <a
          href="https://www.codechef.com/users/your-codechef" // Replace with your CodeChef URL
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition transform hover:scale-110"
        >
          <SiCodechef size={30} />
        </a> */}
      </div>
    </div>

        {/* Right Side - Image */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={manojmain}
            alt="Profile"
            className=" w-92  object-cover rounded-full border-4 border-yellow-400 shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
