import { Helmet, HelmetProvider } from "react-helmet-async";
import { projects } from "../../js/projects";
import { PortfolioContainer } from "./PortfolioContainer.styles";

export default function Portfolio() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Mathilde Elinor | Portfolio</title>
        </Helmet>
      </HelmetProvider>

      <PortfolioContainer>
        <div className="top">
          <h1>Portfolio</h1>
        </div>
        <main>
          {projects.map((project) => (
            <section className="bulk sections">
              <img src={project.image} />
              <h2>{project.title}</h2>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </section>
          ))}
        </main>
      </PortfolioContainer>
    </>
  );
}
