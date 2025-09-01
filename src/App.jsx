import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Import Routes and Route

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectSection from './components/ProjectSection';
import FreelanceSection from './components/FreelanceSection';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import ServicesSection from "./components/ServicesSection";
import ProjectDetails from './pages/ProjectDetails';  // Import the ProjectDetails page

const App = () => {
  return (
    <Router>  {/* Wrap your app with Router */}
      <Routes>
        {/* Route for the main page */}
        <Route path="/" element={
          <div className="bg-stone-100">
            <Navbar />
            <div className="px-8">
              <HeroSection />

              <AboutSection />

              <SkillsSection />
              <ServicesSection />

              <ProjectSection />

              <FreelanceSection />

              <ContactSection />

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
