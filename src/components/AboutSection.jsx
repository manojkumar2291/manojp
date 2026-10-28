import manoj from "../assets/manoj_main.jpg";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
export default function AboutSection() {
  return (
    <section id="about" className="section container">
      <SectionHeading
        number="01"
        eyebrow="A LITTLE ABOUT ME"
        title="Engineering with a human perspective."
      />
      <div className="about-layout">
        <div className="portrait-wrap">
          <img
            src={manoj}
            alt="Podapati Manoj Kumar"
            loading="lazy"
            width="360"
            height="420"
          />
          <div className="portrait-caption">
            <span>Manoj Kumar</span>
            <small>Developer. Problem solver. Always learning.</small>
          </div>
        </div>
        <div className="about-copy">
          <p className="lead">
            I&apos;m a Full-Stack Software Developer with hands-on experience
            developing healthcare platforms, administrative dashboards, RESTful
            APIs, and AI-powered applications.
          </p>
          <p>
            My technical background includes React.js, Node.js, Express.js,
            Python, FastAPI, and MySQL. I&apos;ve worked on authentication
            systems, payment integrations, multi-tenant architectures,
            scheduling workflows, and production deployments.
          </p>
          <p>
            I&apos;m especially interested in the intersection of Generative AI
            and traditional software engineering, including LLM-powered
            applications, RAG, AI agents, and scalable AI backend services.
          </p>
          <p>
            My goal is to build intelligent, practical applications that create
            measurable real-world value.
          </p>
          <p>
            I&apos;ve also built a multi-agent RAG document assistant using
            FastAPI, LangChain, Ollama, Chroma, and Hugging Face embeddings,
            combining document retrieval with query planning, answer writing,
            and review.
          </p>
          <ul className="strengths">
            {[
              "Full-stack application development",
              "Backend API development",
              "Database design and optimization",
              "Authentication and authorization",
              "AI integration",
              "Deployment and infrastructure",
            ].map((item) => (
              <li key={item}>
                <FiCheck aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <a href="#experience" className="text-link">
            Explore my engineering experience{" "}
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
