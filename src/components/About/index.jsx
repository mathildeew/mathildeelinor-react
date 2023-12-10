import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useCollapse } from "react-collapsed";
import { Link } from "react-router-dom";

export default function About() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <section>
      <h1 className="text-2xl">Front-end developer</h1>
      <p>
        Jeg liker å lage brukervennlige, engasjerende og solide produkter og
        bringe ideer til liv.
      </p>

      <div className="flex">
        <a href="https://github.com/mathildeew">Github</a>
        <p>/</p>
        <a href="www.linkedin.com/in/mathilde-elinor-wiik-88075b249">
          LinkedIn
        </a>
        <p>/</p>
        <Link to="/dist/CV_MathildeElinor_en.pdf" target="_blank">
          CV
        </Link>
      </div>

      <div className="collapsible">
        <div className="header" {...getToggleProps()}>
          {isExpanded ? (
            <FontAwesomeIcon icon={faMinus} />
          ) : (
            <FontAwesomeIcon icon={faPlus} />
          )}
        </div>
        <div {...getCollapseProps()}>
          <div className="mb-14">
            <div className="mb-8">
              <h2>Skills</h2>
              <p>
                Web accessibility, SE Optimization, FE Optimization, responsive
                web design, testing.
              </p>
            </div>

            <div className="mb-8">
              <h3>Språk</h3>
              <p>JavaScript, CSS, Sass, HTML, Git</p>
            </div>

            <div className="mb-8">
              <h3>Rammeverk &amp; biblioteker</h3>
              <p>React, Bootstrap, Tailwind CSS, Jest</p>
            </div>

            <div className="mb-8">
              <h3>Verktøy &amp; plattformer</h3>
              <p>
                GitHub, WordPress, Cypress, Netlify, Adobe XD, Figma, Photoshop,
                Illustrator
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
