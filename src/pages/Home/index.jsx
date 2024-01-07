import SEOHelmet from "../../components/SEOHelmet";
import About from "../../components/About";
import Hero from "../../components/Hero";

export default function Home() {
  return (
    <>
      <SEOHelmet title={""} content="Design og utvikling🌀" />

      <div>
        <Hero />
        <About />
      </div>
    </>
  );
}
