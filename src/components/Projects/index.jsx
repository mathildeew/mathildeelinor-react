import { Link } from "react-router-dom";
import { projects } from "../../js/projects";

export default function Projects() {
  return (
    <section className="flex flex-col ">
      <h2>Prosjekter</h2>
      {projects.map((project) => (
        <div key={project.id} className="flex flex-col mb-24">
          <Link to={project.link} className="overflow-hidden ">
            <img
              src={project.image}
              alt={project.name}
              className="transition-all duration-300 ease-in-out hover:scale-105"
            />
          </Link>

          <h3>{project.title}</h3>
        </div>
      ))}
    </section>
  );
}
