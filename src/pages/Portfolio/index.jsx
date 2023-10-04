import { motion as m } from "framer-motion";
import SEOHelmet from "../../components/SEOHelmet";
import Description from "../../components/PortfolioDescription";
import Projects from "../../components/ProjectsGrid";
import { PortfolioContainer } from "./PortfolioContainer.styles";

export default function Portfolio() {
  return (
    <>
      <SEOHelmet
        title={"Portfolio"}
        content={
          "Mathilde Elinor is a front-end developer based in Oslo, Norway."
        }
      />

      <PortfolioContainer>
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "-20px" }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Projects
        </m.h1>

        <m.div
          className="wrapper"
          animate={{ y: 0 }}
          initial={{ y: "2%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Description />
          <Projects />
        </m.div>
      </PortfolioContainer>
    </>
  );
}
