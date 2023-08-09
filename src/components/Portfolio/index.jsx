import { color, motion as m } from "framer-motion";
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
        <m.div
          className="transitionBackground"
          initial={{
            background: "#39469B",
            width: "100vw",
            height: "100vh",
            position: "absolute",
            zIndex: "1",
          }}
          animate={{ y: "-100%" }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
        ></m.div>

        <div className="part">
          <m.h1
            animate={{ y: 0 }}
            initial={{ y: "-10%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Portfolio
          </m.h1>
        </div>

        <m.div
          className="wrapper"
          animate={{ y: 0 }}
          initial={{ y: "2%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <section className="intro part">
            <p>
              This is a showcase of my best work from the Front-end development
              course at Noroff.
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
        </m.div>
      </PortfolioContainer>
    </>
  );
}
