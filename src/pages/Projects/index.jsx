import SEOHelmet from "../../components/SEOHelmet";
import { projects } from "../../js/projects";
import { schoolProjects } from "../../js/schoolProjects";

export default function Projects() {
  return (
    <>
      <SEOHelmet
        title={"Portfolio"}
        content={
          "Mathilde Elinor is a front-end developer based in Oslo, Norway."
        }
      />

      <section>
        <h1>Prosjekter</h1>
      </section>
    </>
  );
}
