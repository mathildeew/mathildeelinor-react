import SEOHelmet from "../../components/SEOHelmet";
import About from "../../components/About";
import Projects from "../../components/ProjectsHome";
import SchoolProjects from "../../components/SchoolHome";

export default function Home() {
  return (
    <>
      <SEOHelmet
        title="Front-end utvikler"
        content="Front-end utvikler og webdesign."
      />
      <div className="flex flex-col gap-16">
        <About />
        <hr className="bg-kleinBlue h-2" />
        <Projects />
        <SchoolProjects />
      </div>
    </>
  );
}
