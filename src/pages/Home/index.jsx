import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../../../styles/Button";
import About from "../../components/About";
import Hero from "../../components/Hero";
import SEOHelmet from "../../components/SEOHelmet";
import { HomeContainer } from "./HomeContainer.styles";

export default function Home() {
  return (
    <>
      <SEOHelmet
        title={"Home"}
        content="Mathilde Elinor is a front-end developer based in Oslo, Norway"
      />

      <HomeContainer className="wrapper">
        <Hero />
        <About />
      </HomeContainer>
    </>
  );
}
