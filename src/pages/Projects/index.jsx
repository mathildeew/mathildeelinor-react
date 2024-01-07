import { Link } from "react-router-dom";
import SEOHelmet from "../../components/SEOHelmet";
import { projects } from "../../js/projects";
import { schoolProjects } from "../../js/schoolProjects";

export default function Projects() {
  return (
    <>
      <SEOHelmet
        title={"Portfolio"}
        content={
          "Mathilde Elinor is a front-end developer based in Oslo, Norway."
        }
      />

      <section className="flex flex-col gap-3">
        <h1>Prosjekter</h1>
        <Link
          to="/lillestrom-optikk"
          className="underline transition-all 0.2 ease-in-out hover:text-kleinBlue"
        >
          Lillestrøm Optikk
        </Link>
        {schoolProjects.map((project) => (
          <div key={project.id} className="">
            <Link
              to={`/prosjekter/${project.id}`}
              className="underline transition-all 0.2 ease-in-out hover:text-kleinBlue"
            >
              {project.name}
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
