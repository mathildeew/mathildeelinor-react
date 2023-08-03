import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
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
        <main>
          <div className="part">
            <h1>Portfolio</h1>
          </div>

          <div className="wrapper">
            <section className="intro part">
              <p>
                This is a showcase of my best work from the Front-end
                development course at Noroff.
              </p>
              <p>
                Even though my primary focus lies in crafting create
                well-structured, readable and maintainable code, I have also
                developed a deep appreciation for the creative aspects of the
                design process.
              </p>
            </section>

            <section className="projects">
              {projects.map((project) => (
                <div className="bulk">
                  <img src={project.image} />
                  <h2>{project.name}</h2>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link to={project.link}>Check out</Link>
                  <Link to={project.github}>GitHub</Link>
                </div>
              ))}
            </section>
          </div>
        </main>
      </PortfolioContainer>
    </>
  );
}
