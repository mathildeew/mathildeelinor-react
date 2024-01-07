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

      <section className="flex flex-col gap-4">
        <h1>{project.name}</h1>
        <img src={project.image} className="" />
        <div className="flex items-center gap-3 font-semibold">
          <a href={project.github} className="underline">
            Github
          </a>
          <p>/</p>
          <a href={project.link} className="underline">
            Demo
          </a>
        </div>
        <p>{project.description}</p>
        <p>{project.languages}</p>
      </section>
    </>
  );
}
