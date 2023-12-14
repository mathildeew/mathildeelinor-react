import { useEffect } from "react";
import { Link } from "react-router-dom";
import { schoolProjects } from "../../js/schoolProjects.js";

export default function SchoolProjects() {
  return (
    <section className="flex flex-col ">
      <h2 className="mb-5">Skolearbeider</h2>
      {schoolProjects.map((project) => (
        <div key={project.id} className="mb-12 w-100">
          <Link to={`/prosjekter/${project.id}`} className=" ">
            <img src={project.logo} className="" />
          </Link>
          <p>{project.title}</p>
        </div>
      ))}
      {/* <div className="sm:grid grid-cols-2 gap-5">
        {schoolProjects.map((project) => (
          <div
            key={project.id}
            className=" relative overflow-hidden flex flex-col"
          >
            <Link to={`prosjekter/${project.id}`}>
              <img
                src={project.image}
                alt={project.name}
                className="object-cover transition-all duration-300 ease-in-out hover:scale-105"
              />
            </Link>
            <div className="bg-lightYellow bg-opacity-80 h-12 w-full absolute bottom-0 flex items-center">
              <h3 className="ml-10">{project.name}</h3>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
}
