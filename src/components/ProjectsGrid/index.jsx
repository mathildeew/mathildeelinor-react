import { Link } from "react-router-dom";
import { projects } from "../../js/projects";

export default function Projects() {
  return (
    <div className="projects">
      {projects.map((project) => (
        <div className="bulk" key={project.id}>
          <img src={project.image} alt={project.name} />
          <h2>{project.name}</h2>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>{project.languages}</p>
          <Link to={project.link}>Check out</Link>
          <Link to={project.github}>GitHub</Link>
        </div>
      ))}
    </div>
  );
}
