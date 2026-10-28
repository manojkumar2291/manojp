import { skillGroups } from "../portfolioData";
import { icons } from "./Icons";
import SectionHeading from "./SectionHeading";
export default function SkillsSection() {
  return (
    <section id="skills" className="section container">
      <SectionHeading
        number="02"
        eyebrow="THE TOOLKIT"
        title="Built with purpose."
        description="A practical engineering toolkit, with a growing focus on intelligent applications."
      />
      <div className="skills-grid">
        {skillGroups.map((group) => {
          const Icon = icons[group.icon];
          return (
            <article
              className={
                "skill-group panel " + (group.learning ? "learning-group" : "")
              }
              key={group.name}
            >
              <div className="card-heading">
                <Icon aria-hidden="true" />
                <h3>{group.name}</h3>
              </div>
              <p className="skill-status">
                {group.label ||
                  (group.learning
                    ? "LEARNING / FOCUS AREAS"
                    : "ENGINEERING TOOLKIT")}
              </p>
              <ul className="tags">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
      <p className="section-note">
        Project cards show the technologies used in each application. Hands-on
        AI experience comes from the documented projects; continued learning is
        labeled separately and does not imply production expertise.
      </p>
    </section>
  );
}
