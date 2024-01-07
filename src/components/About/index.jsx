import { Link } from "react-router-dom";
import { useCollapse } from "react-collapsed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <section className="flex flex-col gap-6">
      <div>
        <h1>Front-end utvikler</h1>
        <p>
          Jeg liker å bringe idéer til liv ved å skape brukervennlige,
          engasjerende og solide produkter.
        </p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/mathildeew"
          className="underline transition-all 0.2 ease-in-out hover:text-kleinBlue"
        >
          Github
        </a>
        <p>/</p>
        <a
          href="www.linkedin.com/in/mathilde-elinor-wiik-88075b249"
          className="underline transition-all 0.2 ease-in-out hover:text-kleinBlue"
        >
          LinkedIn
        </a>
        <p>/</p>
        <Link
          to="/dist/CV_MathildeElinor.pdf"
          target="_blank"
          className="underline transition-all 0.2 ease-in-out hover:text-kleinBlue"
        >
          CV
        </Link>
        <p>/</p>
        <a
          href="mailto:hei@mathildeelinor.no"
          className="underline transition-all 0.2 ease-in-out hover:text-kleinBlue"
        >
          Mail
        </a>
      </div>
    </section>
  );
}
