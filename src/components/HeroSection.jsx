import { Component, lazy, Suspense, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ReactTyped } from "react-typed";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiMail,
  FiCpu,
} from "react-icons/fi";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiFastapi, SiMysql } from "react-icons/si";
import { heroTitles, profile } from "../portfolioData";
const HeroModel = lazy(() => import("./HeroModel"));

class VisualBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? (
      <span className="visual-fallback">
        3D preview unavailable on this device
      </span>
    ) : (
      this.props.children
    );
  }
}
VisualBoundary.propTypes = { children: PropTypes.node };

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [canRender, setCanRender] = useState(false);
  const [showModel, setShowModel] = useState(false);
  useEffect(() => {
    const query = window.matchMedia(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
    );
    const update = () =>
      setCanRender(query.matches && !navigator.connection?.saveData);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <motion.div
            className="hero-copy"
            initial={false}
            animate={{ y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.5 }}
          >
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" /> AI / GENAI ENGINEER · FULL-STACK
              DEVELOPER
            </p>
            <p className="hero-greeting">Hi, I&apos;m Manoj Kumar.</p>
            <h1>
              Building Intelligent
              <br />
              <span className="gradient-text">AI Applications</span>
              <br />
              &amp; Scalable Full-Stack Solutions
              <span className="accent">.</span>
            </h1>
            <div className="hero-role">
              <span aria-hidden="true">&gt;_</span>
              <span className="sr-only">{heroTitles.join(", ")}</span>
              <span aria-hidden="true">
                {reduceMotion ? (
                  heroTitles[0]
                ) : (
                  <ReactTyped
                    strings={heroTitles}
                    typeSpeed={42}
                    backSpeed={22}
                    backDelay={2200}
                    loop
                  />
                )}
              </span>
            </div>
            <p className="hero-intro">
              Hi, I&apos;m Manoj Kumar, a software developer passionate about
              building intelligent applications and scalable web platforms. I
              work with React.js, Node.js, Python, FastAPI, and MySQL, and
              I&apos;m expanding my expertise in Generative AI, LLMs,
              Retrieval-Augmented Generation, and AI agent workflows. I enjoy
              transforming complex problems into reliable, user-friendly
              solutions.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#project">
                View My Projects <FiArrowUpRight aria-hidden="true" />
              </a>
              {profile.resume ? (
                <a
                  className="button button-secondary"
                  href={profile.resume}
                  download="Manoj-Kumar-Resume.pdf"
                >
                  Download Resume <FiDownload aria-hidden="true" />
                </a>
              ) : (
                <button
                  className="button button-secondary"
                  disabled
                  title="A verified resume file has not been added"
                >
                  Resume · coming soon <FiDownload aria-hidden="true" />
                </button>
              )}
            </div>
            <div className="hero-socials">
              <a href="#contact">
                <FiMail aria-hidden="true" /> Contact Me
              </a>
              <span aria-hidden="true" />
              <a href={profile.github} target="_blank" rel="noreferrer">
                <FiGithub aria-hidden="true" /> GitHub Profile{" "}
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </motion.div>
          <div className="hero-visual">
            <div className="visual-grid" aria-hidden="true" />
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            <div className="visual-topline">
              <span>IDEAS → INTELLIGENT SYSTEMS</span>
              <FiCpu aria-hidden="true" />
            </div>
            <div className="orb-space" aria-hidden="true">
              {canRender && showModel ? (
                <VisualBoundary>
                  <Suspense fallback={<div className="orb-static" />}>
                    <HeroModel />
                  </Suspense>
                </VisualBoundary>
              ) : (
                <div className="orb-static">
                  <div />
                  <div />
                  <div />
                  <span>m.</span>
                </div>
              )}
            </div>
            <div className="visual-label label-ai">
              <span className="status-dot" /> AI + HUMAN INTENT
            </div>
            <div className="visual-label label-code">
              <span>&lt;/&gt;</span> BUILT TO SOLVE
            </div>
            <div className="code-note">
              <div className="code-note-title">
                <span />
                <span />
                <span />
                <small>my-approach.js</small>
              </div>
              <code>
                <span className="code-purple">const</span> approach = {"{"}
                <br />
                &nbsp; understand:{" "}
                <span className="code-cyan">&apos;the problem&apos;</span>,
                <br />
                &nbsp; build:{" "}
                <span className="code-cyan">&apos;with purpose&apos;</span>,
                <br />
                &nbsp; improve: <span className="code-purple">true</span>
                <br />
                {"}"};
              </code>
            </div>
            {canRender && (
              <button
                className="visual-toggle"
                type="button"
                onClick={() => setShowModel(!showModel)}
                aria-pressed={showModel}
              >
                {showModel ? "Pause 3D visual" : "Explore in 3D"}{" "}
                <FiArrowUpRight aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
        <div className="hero-bottom">
          <a className="scroll-cue" href="#about">
            <FiArrowDown aria-hidden="true" /> SCROLL TO EXPLORE
          </a>
          <div className="stack-strip" aria-label="Core technologies">
            <span>CORE STACK</span>
            <span>
              <FaReact /> React
            </span>
            <span>
              <FaNodeJs /> Node.js
            </span>
            <span>
              <FaPython /> Python
            </span>
            <span>
              <SiFastapi /> FastAPI
            </span>
            <span>
              <SiMysql /> MySQL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
