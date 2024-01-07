import SEOHelmet from "../../../components/SEOHelmet";

export default function LillestromOptikk() {
  return (
    <>
      <SEOHelmet title={"Lillestrøm Optikk"} />

      <section className="flex flex-col gap-8">
        <h1>Din lokale optiker i Lillestrøm</h1>
        <img src="/dist/projects/lillestromOptikk/lillestromWeb.jpg" />

        <div>
          <h2>Ansvar</h2>
          <p>
            Utforming av visuell identitet, design og utvikling av nettside samt
            produksjon av markedsføringsmateriell for print og SoMe.
          </p>
        </div>
        <div>
          <h2>Nettsted</h2>
          <a
            href="https://www.lillestromoptikk.no"
            className="underline transition-all 0.2 ease-in-out hover:text-kleinBlue"
          >
            www.lillestromoptikk.no
          </a>
        </div>
        <img src="/dist/projects/lillestromOptikk/lillestromoptikk-banner.png" />
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
