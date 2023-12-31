import { Link } from "react-router-dom";
import { projects } from "../../js/projects";

export default function Projects() {
  return (
    <section className="">
      <h2>Prosjekter</h2>
      {projects.map((project) => (
        <div key={project.id}>
          <Link to={project.internal} className="overflow-hidden ">
            <img
              src={project.image}
              alt={project.name}
              className="w-full transition-all duration-300 ease-in-out hover:rotate-3"
            />
            <h3>{project.role}</h3>
          </Link>
        </div>
      ))}
    </section>
  );
}
