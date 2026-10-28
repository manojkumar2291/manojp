import { FiArrowUp, FiGithub, FiLinkedin } from "react-icons/fi";
import { profile } from "../portfolioData";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand" href="/#home">
          <span className="brand-mark">
            m<span>.</span>
          </span>
          <span>
            Manoj Kumar<small>AI / GenAI & Full-Stack Developer</small>
          </span>
        </a>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="footer-socials">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Manoj Kumar on GitHub"
          >
            <FiGithub />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Manoj Kumar on LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a href="/#home" aria-label="Back to top">
            <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
