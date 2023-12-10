import SEOHelmet from "../../components/SEOHelmet";
import About from "../../components/About";
import Hero from "../../components/Hero";
import LogMar from "../../components/LogMar";
import SchoolProjects from "../../components/School";
import Projects from "../../components/Projects";

export default function Home() {
  return (
    <>
      <SEOHelmet
        title={"Home"}
        content="Mathilde Elinor is a front-end developer based in Oslo, Norway"
      />
      <About />
      <Projects />
      <SchoolProjects />
    </>
  );
}
