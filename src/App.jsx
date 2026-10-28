import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectSection from "./components/ProjectSection";
import AIFocusSection from "./components/AIFocusSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ProjectDetails from "./pages/ProjectDetails";

function Reveal({ children }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0.4, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.45 }}
    >
      {children}
    </motion.div>
  );
}
Reveal.propTypes = { children: PropTypes.node.isRequired };

function Home() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash)
      requestAnimationFrame(() =>
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({ behavior: "instant" }),
      );
    else window.scrollTo(0, 0);
  }, [hash]);
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <Reveal>
          <AboutSection />
        </Reveal>
        <Reveal>
          <SkillsSection />
        </Reveal>
        <Reveal>
          <ExperienceSection />
        </Reveal>
        <Reveal>
          <ProjectSection />
        </Reveal>
        <Reveal>
          <AIFocusSection />
        </Reveal>
        <Reveal>
          <ContactSection />
        </Reveal>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="*" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}
