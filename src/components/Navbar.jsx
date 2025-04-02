import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white fixed w-full z-100 px-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-xl font-semibold">
          <h2>
            <a href="/" className="hover:text-yellow-400 transition-colors">
              Manoj's Portfolio
            </a>
          </h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About</a></li>
            <li><a href="#skills" className="hover:text-yellow-400">Skills</a></li>
            <li><a href="#services" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Services</a></li>
           {/* <li><a href="#education" className="hover:text-yellow-400">Education</a></li>*/}
            <li><a href="#project" className="hover:text-yellow-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <div className="w-6 h-6 flex flex-col justify-between">
              <div className={`w-6 h-1 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-1 bg-white ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-1 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <nav className={`md:hidden bg-gray-900 transition-all ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li><a href="#home" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#skills" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#services" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Services</a></li>
          {/* <li><a href="#education" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Education</a></li> */}
          <li><a href="#project" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
