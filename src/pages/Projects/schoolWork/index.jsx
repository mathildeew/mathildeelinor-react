import { useParams } from "react-router-dom";
import SEOHelmet from "../../../components/SEOHelmet";
import { schoolProjects } from "../../../js/schoolProjects";

export default function SchoolWork() {
  const id = useParams();
  const name = id.id;
  const project = schoolProjects.find((project) => project.id === name);

  return (
    <>
      <SEOHelmet title={`${project.name} - ${project.title}`} description="" />
      <section>
        <h1>{project.name}</h1>
        <h2>{project.title}</h2>
        <img src={project.image} />
        <p>{project.description}</p>
        <p>{project.languages}</p>
        <a href={project.github}>Github</a>
        <a href={project.link}>Demo</a>
      </section>
    </>
  );
}
