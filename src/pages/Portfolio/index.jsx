import { motion as m } from "framer-motion";
import SEOHelmet from "../../components/SEOHelmet";
import Description from "../../components/PortfolioDescription";
import Projects from "../../components/ProjectsGrid";

export default function Portfolio() {
  return (
    <>
      <SEOHelmet
        title={"Portfolio"}
        content={
          "Mathilde Elinor is a front-end developer based in Oslo, Norway."
        }
      />

      <div>
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "-20px" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-6xl text-center my-12 md:text-9xl"
        >
          Projects
        </m.h1>

        <m.div
          animate={{ y: 0 }}
          initial={{ y: "2%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Description />
          <Projects />
        </m.div>
      </div>
    </>
  );
}
