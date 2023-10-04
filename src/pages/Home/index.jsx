import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../../../styles/Button";
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
        <div className="intro">
          <m.h1
            animate={{ y: 0 }}
            initial={{ y: "-100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Mathilde Elinor
          </m.h1>

          <div className="blobContainer">
            <m.div className="blobText">
              <m.h2
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Front-end developer
              </m.h2>
              <m.p
                animate={{ y: 0 }}
                initial={{ y: "100%" }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                I like to craft solid, accessible and engaging products,
                bringing ideas to life.
              </m.p>
            </m.div>
            <m.div
              className="blob"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="portrait"></div>
            </m.div>
          </div>
        </div>

        <m.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: "10%", opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2>About</h2>

          <div className="text part">
            <p>
              As long as I can remember I have made things where functionality
              and aesthetics are connected, and have especially dived into the
              technological world. I have never been afraid to just give it a go
              and explore the infinite potential, whether its Microsoft Paint,
              HTML/CSS, blogging, World of Warcraft, or Photoshop. Unfortunately
              for me, I always considered these as mere hobbies.
            </p>
            <p>
              Fast forward to 2021 and I decided to step away from my role as an
              optometrist and pursue my long-lasting craving of a technology and
              design based career. As I am finishing up the front-end
              development education at Noroff, I am electrified to finally be
              able to create, design and maintain user-friendly concepts and
              satisfy my curiosity around new technologies.
            </p>
          </div>

          <section className="part">
            <div className="bulk">
              <h2>Skills</h2>
              <p>
                Web accessibility, SE Optimization, FE Optimization, responsive
                web design, testing.
              </p>
            </div>

            <div className="bulk">
              <h3>Languages</h3>
              <p>JavaScript, CSS, Sass, HTML, Git</p>
            </div>

            <div className="bulk">
              <h3>Frameworks &amp; libraries</h3>
              <p>React, Bootstrap, Jest</p>
            </div>

            <div className="bulk">
              <h3>Tools &amp; platforms</h3>
              <p>
                GitHub, WordPress, Cypress, Netlify, Adobe XD, Figma, Photoshop,
                Illustrator
              </p>
            </div>
          </section>

          <Button>
            <Link to="../../../public/CV_MathildeElinor_en.pdf" target="_blank">
              My CV
            </Link>
            <span></span>
            <span></span>
            <span></span>
          </Button>
        </m.div>
      </HomeContainer>
    </>
  );
}
