import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Import Routes and Route

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import ServicesSection from "./components/ServicesSection";
import SectionDivider from './components/SectionDivider';
import ProjectDetails from './pages/ProjectDetails';  // Import the ProjectDetails page

const App = () => {
  return (
    <Router>  {/* Wrap your app with Router */}
      <Routes>
        {/* Route for the main page */}
        <Route path="/" element={
          <div className="bg-gray-900">
            <Navbar />
            <div className="px-8">
              <HeroSection />
              <SectionDivider section="hero" />

              <AboutSection />
              <SectionDivider section="about" />

              <SkillsSection />
              <SectionDivider section="skills" />
              <ServicesSection />
              <SectionDivider section='services'/>

              <ProjectSection />
              <SectionDivider section="projects" />

              <ContactSection />
              <SectionDivider section="contact" />

              <Footer />
            </div>
          </div>
        } />
        
        {/* Separate route for Project Details */}
        <Route path="/project/:id" element={<ProjectDetails />} />  {/* Displaying Project Details on a separate page */}
      </Routes>
    </Router>
  );
};

export default App;
