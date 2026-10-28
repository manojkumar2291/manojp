import { focusAreas } from "../portfolioData";
import { icons } from "./Icons";
import SectionHeading from "./SectionHeading";
export default function AIFocusSection() {
  return (
    <section id="ai-focus" className="section ai-section">
      <div className="container">
        <SectionHeading
          number="05"
          eyebrow="CURIOSITY → CAPABILITY"
          title="Exploring the Future of Intelligent Applications"
          description="From a working multi-agent RAG prototype to the next areas I’m exploring. Project experience and continued learning are labeled separately."
        />
        <div className="focus-grid">
          {focusAreas.map((area) => {
            const Icon = icons[area.icon];
            return (
              <article className="focus-card" key={area.title}>
                <Icon aria-hidden="true" />
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <span className="focus-label">
                  {area.status || "EXPLORING"}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
