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

      <About />
      <hr className="bg-badGradient h-2" />
      <Projects />
      <SchoolProjects />
    </>
  );
}
