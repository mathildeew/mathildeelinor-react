import { PortfolioContainer } from "./PortfolioContainer.styles";

import { projects } from "../../js/projects";

export default function Portfolio() {
  return (
    <PortfolioContainer>
      <div className="test">
        <h1>Portfolio</h1>
      </div>
      <main>
        {projects.map((project) => (
          <section className="bulk">
            <img src={project.image} />
            <h2>{project.title}</h2>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </section>
        ))}
      </main>
    </PortfolioContainer>
  );
}
