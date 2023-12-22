import { useParams } from "react-router-dom";
import SEOHelmet from "../../../components/SEOHelmet";
import { schoolProjects } from "../../../js/schoolProjects";

export default function SchoolWork() {
  const id = useParams();
  const name = id.id;
  const project = schoolProjects.find((project) => project.id === name);

  return (
    <>
      <SEOHelmet title={`${project.name} - ${project.title}`} content="" />
      <section>
        <h1>{project.name}</h1>
        <img src={project.image} className="mb-5" />
        <div className="flex">
          <a href={project.github}>Github</a>
          <p className="mx-2">/</p>
          <a href={project.link}>Demo</a>
        </div>
        <p className="mb-5">{project.description}</p>

        <p className="mb-5">{project.languages}</p>
      </section>
    </>
  );
}
