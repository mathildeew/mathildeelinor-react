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
            className="w-full h-auto"
          />
          <h2>{project.name}</h2>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>{project.languages}</p>
          <Link
            to={project.link}
            className="font-sans font-medium underline mr-5"
          >
            Check out
          </Link>
          <Link to={project.github} className="font-sans font-medium underline">
            GitHub
          </Link>
        </div>
      ))}
    </div>
  );
}
