import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { HomeContainer } from "./HomeContainer.styles";
import { AboutContainer } from "../About/AboutContainer.styles";
import About from "../About";
import { education, experience } from "../../js/about";

export default function Home() {
  return (
    <>
      <m.div
        initial={{
          background: "#39469B",
          width: "100vw",
          height: "100vh",
          position: "absolute",
        }}
        animate={{ y: "-100%" }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
      ></m.div>

      <HomeContainer>
        <div className="wrapper">
          <div className="left">
            <m.div
              className="top"
              animate={{ y: 0 }}
              initial={{ y: "-100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h1>Mathilde Elinor</h1>
            </m.div>

            <m.div
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p>Front-end developer.</p>
              <p>
                I like to craft solid code that are structured, accurate and
                user-oriented.
              </p>
            </m.div>
          </div>
        </div>
      </HomeContainer>

      <AboutContainer>
        <section className="topWrapper">
          <m.div id="blue">
            <m.div
              className="portrait"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            ></m.div>
          </m.div>
        </section>

        <m.div
          className="wrapper"
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: "10%", opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div id="text" className="part">
            <p>
              As long as I can remember I have been drawn to combining
              technology and design. The infinite potential has always
              fascinated me and I have never been afraid to just jump in and
              give it a go, whether it is Microsoft Paint, HTML/CSS, blogging,
              World of Worldcraft or Photoshop. Unfortunately for me, I always
              considered these as mere hobbies.
            </p>
            <p>
              Fast forward to 2021 and I decided to step away from my
              optometrist career and pursue my long-lasting yearning of a
              technology and design based occupation. As I am finishing up the
              front-end development education at Noroff, I am thrilled to
              finally be able to create, design and maintain user-friendly
              concepts that solves real problems and has a purpose.
            </p>
          </div>
        </m.div>
      </AboutContainer>
    </>
  );
}
