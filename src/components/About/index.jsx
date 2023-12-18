import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useCollapse } from "react-collapsed";
import { Link } from "react-router-dom";

export default function About() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <section className="mb-20">
      <h1>Front-end developer</h1>
      <p className="mb-4">
        Jeg liker å lage brukervennlige, engasjerende og solide produkter og
        bringe ideer til liv.
      </p>

      <div className="flex mb-6">
        <a href="https://github.com/mathildeew">Github</a>
        <p className="mx-2">/</p>
        <a href="www.linkedin.com/in/mathilde-elinor-wiik-88075b249">
          LinkedIn
        </a>
        <p className="mx-2">/</p>
        <Link to="/dist/CV_MathildeElinor_en.pdf" target="_blank">
          CV
        </Link>
        <p className="mx-2">/</p>
        <a href="mailto:hei@mathildeelinor.no">Mail</a>
      </div>

      <div className="collapsible">
        <div className="header mb-4" {...getToggleProps()}>
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
                Universell utforming, SE optimalisering, FE optimalisering,
                responsiv web design, testing.
              </p>
            </div>

            <div className="mb-8">
              <h3>Språk</h3>
              <p>JavaScript, CSS/Sass, HTML, Git</p>
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
