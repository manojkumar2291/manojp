import { experience } from "../portfolioData";
import SectionHeading from "./SectionHeading";
export default function ExperienceSection() {
  return (
    <section id="experience" className="section container">
      <SectionHeading
        number="03"
        eyebrow="PROFESSIONAL EXPERIENCE"
        title="Real systems. Practical impact."
        description="Hands-on engineering contributions across full-stack platforms, healthcare workflows, and deployed services."
      />
      <div className="experience-list">
        {experience.map((item, index) => (
          <article className="experience-row" key={item.title}>
            <div className="experience-index">0{index + 1}</div>
            <div>
              <p className="eyebrow">PROJECT-BASED EXPERIENCE</p>
              <h3>{item.title}</h3>
              <p className="experience-context">{item.context}</p>
            </div>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
