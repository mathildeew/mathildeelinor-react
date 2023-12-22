import { Link } from "react-router-dom";
import { projects } from "../../js/projects";

export default function Projects() {
  return (
    <section className="py-10">
      <h2>Prosjekter</h2>
      {projects.map((project) => (
        <div key={project.id}>
          <Link to={project.internal} className="overflow-hidden ">
            <img
              src={project.image}
              alt={project.name}
              className="w-5/6 transition-all duration-300 ease-in-out hover:scale-105"
            />
            <p>{project.role}</p>
          </Link>
        </div>
      ))}
    </section>
  );
}
