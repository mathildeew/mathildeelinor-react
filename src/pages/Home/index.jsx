import SEOHelmet from "../../components/SEOHelmet";
import LogMar from "../../components/LogMar";
import About from "../../components/About";
import Projects from "../../components/ProjectsHome";
import SchoolProjects from "../../components/SchoolHome";

export default function Home() {
  return (
    <>
      <SEOHelmet
        title="Mathilde Elinor"
        content="Front-end utvikler og webdesign."
      />

      <LogMar />
      <About />
      <Projects />
      <SchoolProjects />
    </>
  );
}
