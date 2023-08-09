import { Link } from "react-router-dom";
import { education, experience } from "../../js/about";
import { AboutContainer } from "./AboutContainer.styles";
import { BaseButton } from "../../../styles/Button";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion as m } from "framer-motion";

export default function About() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Mathilde Elinor | About</title>
        </Helmet>
      </HelmetProvider>

      <m.div
        className="transitionBackground"
        initial={{
          background: "#39469B",
          width: "100vw",
          height: "100vh",
          position: "absolute",
          zIndex: 1,
        }}
        animate={{ y: "-100%", x: "100%" }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeInOut" }}
      ></m.div>

      <AboutContainer>
        <section className="topWrapper">
          <div className="top">
            <div className="left">
              <m.h1
                animate={{ y: 0 }}
                initial={{ y: "-100%" }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                About
              </m.h1>
              <m.span
                animate={{ y: 0 }}
                initial={{ y: "100%" }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Hi, I am Mathilde Elinor. I like to create something something
                and some more, a sentence with three lines.
              </m.span>
            </div>

            <m.div
              className="portraitBig"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            ></m.div>
          </div>
          <div className="blue">
            <m.div
              className="portrait"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            ></m.div>
          </div>
        </section>

        <m.div
          className="wrapper"
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: "10%", opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="text part">
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

          <BaseButton className="part">
            <Link to="../../../public/cv0.pdf" target="_blank">
              My CV
            </Link>
          </BaseButton>

          <section className="part">
            <h2>Skills</h2>
            <p>HTML, CSS/SASS, JavaScript, React</p>
            <p>Git, Bootstrap, Wordpress, Git</p>
            <p>Adobe XD, Figma, Photoshop, Illustrator</p>
          </section>

          <section className="part">
            <h2>Experience</h2>

            {experience.map((job) => (
              <div className="bulk">
                <div>
                  <p className="boldText">{job.title}</p>
                  <p>/ {job.company}</p>
                </div>
                <p>{job.year}</p>
              </div>
            ))}
          </section>

          <section className="part">
            <h2>Education</h2>

            {education.map((course) => (
              <div className="bulk">
                <div>
                  <p className="boldText">{course.title}</p>
                  <p>/ {course.school}</p>
                </div>
                <p>{course.year}</p>
              </div>
            ))}
          </section>
        </m.div>
      </AboutContainer>
    </>
  );
}
