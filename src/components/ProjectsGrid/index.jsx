import { Link } from "react-router-dom";
import { projects } from "../../js/projects";

export default function Projects() {
  return (
    <div className="grid gap-20 md:gap-24">
      {projects.map((project) => (
        <div key={project.id}>
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-auto mb-5"
          />
          <h2>{project.name}</h2>
          <h3>{project.title}</h3>
          <p className="mb-5">{project.description}</p>
          <p className="mb-5">{project.languages}</p>
          <Link
            to={project.link}
            className="font-sans font-medium underline mr-5 hover:italic hover:relative hover:left-1"
          >
            Check out
          </Link>
          <Link
            to={project.github}
            className="font-sans font-medium underline hover:italic hover:relative hover:left-1"
          >
            GitHub
          </Link>
        </div>
      ))}
    </div>
  );
}
