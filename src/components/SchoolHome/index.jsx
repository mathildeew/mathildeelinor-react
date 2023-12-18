import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { schoolProjects } from "../../js/schoolProjects.js";

export default function SchoolProjects() {
  return (
    <section className="flex flex-col ">
      <h2 className="mb-5">Skolearbeider</h2>
      {schoolProjects.map((project) => (
        <div key={project.id} className="mb-8 w-100">
          <Link to={`/prosjekter/${project.id}`} className="font-normal">
            <img src={project.logo} />
            <div className="flex items-center">
              <p className="mr-6">{project.title}</p>
              <FontAwesomeIcon icon={faArrowRightLong} />
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}
