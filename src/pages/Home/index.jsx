import SEOHelmet from "../../components/SEOHelmet";
import About from "../../components/About";
import Hero from "../../components/Hero";

export default function Home() {
  return (
    <>
      <SEOHelmet
        title={"Home"}
        content="Mathilde Elinor is a front-end developer based in Oslo, Norway"
      />

      <div>
        <Hero />
        <About />
      </div>
    </>
  );
}
