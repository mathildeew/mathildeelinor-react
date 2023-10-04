import About from "../../components/About";
import Hero from "../../components/Hero";
import SEOHelmet from "../../components/SEOHelmet";

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
