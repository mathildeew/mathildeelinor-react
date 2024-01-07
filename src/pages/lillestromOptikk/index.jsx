import { motion as m } from "framer-motion";
import SEOHelmet from "../../components/SEOHelmet";

export default function LillestromOptikk() {
  return (
    <>
      <SEOHelmet title={"Lillestrøm Optikk"} content="" />
      <section className="max-w-3xl flex flex-col gap-10 px-4">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "-20px" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-6xl text-center md:text-9xl"
        >
          Lillestrøm Optikk
        </m.h1>

        <m.div
          animate={{ y: 0 }}
          initial={{ y: "2%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
        ></m.div>

        <img
          src="/projects/lillestromOptikk/lillestromWeb.jpg"
          alt="Web mockup"
        />
        <div>
          <h2>Ansvar</h2>
          <p>
            Utforming av visuell identitet, design og utvikling av nettside samt
            produksjon av markedsføringsmateriell for print og SoMe.
          </p>
        </div>
        <div>
          <h2>Nettside</h2>
          <a href="https://www.lillestromoptikk.no">www.lillestromoptikk.no</a>
        </div>
        <img
          src="/projects/lillestromOptikk/lillestromoptikk-banner.png"
          alt="Logo"
        />
        <p>
          Høsten 2023 åpnet Lillestrøm Optikk dørene &mdash; den nye lokale
          optikeren på Romerike. Målet var en designprofil som skiller seg ut i
          mengden, men likevel tydeliggjør hvilke tjenester bedriften tilbyr ved
          et profesjonelt uttrykk med innslag av grafiske elementer.
        </p>
        <p className="text-2xl pt-12">
          Prosjektet er fortsatt under arbeid &mdash; mer informasjon kommer.
        </p>
      </section>
    </>
  );
}
