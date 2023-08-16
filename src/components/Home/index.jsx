import { motion as m } from "framer-motion";
import { HomeContainer } from "./HomeContainer.styles";

export default function Home() {
  return (
    <HomeContainer className="wrapper">
      <div className="intro">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "-100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Mathilde Elinor
        </m.h1>

        <m.div
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>Front-end developer.</p>
          <p>
            I like to craft solid, accessible and engaging products, bringing
            ideas to life.
          </p>
        </m.div>
      </div>
    </HomeContainer>
  );
}
