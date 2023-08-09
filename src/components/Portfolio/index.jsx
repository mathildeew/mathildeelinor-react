import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion as m } from "framer-motion";
import { projects } from "../../js/projects";
import { PortfolioContainer } from "./PortfolioContainer.styles";
import Navbar from "../ui/Layout/Navbar/navContainer";

export default function Portfolio() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Mathilde Elinor | Portfolio</title>
        </Helmet>
      </HelmetProvider>

      <m.div
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

      <Navbar />
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
          <div id="intro" className="part">
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
          </div>

          <div id="projects">
            {projects.map((project) => (
              <div className="bulk" key={project.id}>
                <img src={project.image} />
                <h2>{project.name}</h2>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
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
