import { Link } from "react-router-dom";
import { useCollapse } from "react-collapsed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <section className="flex flex-col gap-6 py-10">
      <div>
        <h1>Front-end utvikler</h1>
        <p>
          Jeg liker å lage brukervennlige, engasjerende og solide produkter og
          bringe ideer til liv.
        </p>
      </div>

      <div className="flex gap-2">
        <a href="https://github.com/mathildeew">Github</a>
        <p>/</p>
        <a href="www.linkedin.com/in/mathilde-elinor-wiik-88075b249">
          LinkedIn
        </a>
        <p>/</p>
        <Link to="/dist/CV_MathildeElinor_en.pdf" target="_blank">
          CV
        </Link>
        <p>/</p>
        <a href="mailto:hei@mathildeelinor.no">Mail</a>
      </div>

      <div className="collapsible">
        <div className="header" {...getToggleProps()}>
          {isExpanded ? (
            <FontAwesomeIcon icon={faMinus} />
          ) : (
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPlus} />
              <p>Mer mer mer mer</p>
            </div>
          )}
        </div>
        <div {...getCollapseProps()}>
          <div className="flex flex-col gap-8">
            <div>
              <h2>Skills</h2>
              <p>
                Universell utforming, SE optimalisering, FE optimalisering,
                responsiv web design, testing.
              </p>
            </div>

            <div>
              <h3>Språk</h3>
              <p>JavaScript, CSS/Sass, HTML, Git</p>
            </div>

            <div>
              <h3>Rammeverk &amp; biblioteker</h3>
              <p>React, Bootstrap, Tailwind CSS, Jest</p>
            </div>

            <div>
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
