import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { schoolProjects } from "../../js/schoolProjects.js";

export default function SchoolProjects() {
  return (
    <section className="flex flex-col gap-12 py-10">
      <h2>Skolearbeider</h2>
      {schoolProjects.map((project) => (
        <div key={project.id} className="">
          <Link to={`/prosjekter/${project.id}`} className=" inline-block">
            <img
              src={project.preview}
              className="w-5/6 transition-all duration-300 ease-in-out hover:rotate-3"
            />

            <h3>{project.title}</h3>
          </Link>
        </div>
      ))}
    </section>
  );
}
