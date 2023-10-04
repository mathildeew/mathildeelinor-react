import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion as m } from "framer-motion";
import { projects } from "../../js/projects";
import { PortfolioContainer } from "./PortfolioContainer.styles";
import SEOHelmet from "../../components/SEOHelmet";

export default function Portfolio() {
  return (
    <>
      <SEOHelmet
        title={"Portfolio"}
        content={
          "Mathilde Elinor is a front-end developer based in Oslo, Norway."
        }
      />

      <PortfolioContainer>
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "-20px" }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Portfolio
        </m.h1>

        <m.div
          className="wrapper"
          animate={{ y: 0 }}
          initial={{ y: "2%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="intro part">
            <p>
              This is a showcase of my best work from the Front-end development
              course at Noroff.
            </p>
            <p>
              Even though my primary focus lies in crafting well-structured,
              readable and maintainable code, I have also developed a deep
              appreciation for the creative aspects of the design process. The
              joy in creating something &ndash; from an idea to a physical
              product &ndash; is what really excites me the most of being a
              front-end developer.
            </p>
          </div>

          <div className="projects">
            {projects.map((project) => (
              <div className="bulk" key={project.id}>
                <img src={project.image} alt={project.name} />
                <h2>{project.name}</h2>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>{project.languages}</p>
                <Link to={project.link}>Check out</Link>
                <Link to={project.github}>GitHub</Link>
              </div>
            ))}
          </div>
        </m.div>
      </PortfolioContainer>
    </>
  );
}
