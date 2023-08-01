import { Link } from "react-router-dom";
import { education, experience } from "../../js/about";
import { AboutContainer } from "./AboutContainer.styles";
import { BaseButton } from "../../../styles/Button";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function About() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Mathilde Elinor | About</title>
        </Helmet>
      </HelmetProvider>

      <AboutContainer>
        {/* <div className="top intro">
          <h1>About</h1>
          <div className="wrapper sections">
            <div className="portrait"></div>
          </div>
        </div> */}

        <section className="sections text">
          <p>
            As long as I can remember I have been drawn to combining technology
            and design. The infinite potential has always fascinated me and I
            have never been afraid to just jump in and give it a go, whether it
            is Microsoft Paint, HTML/CSS, blogging, World of Worldcraft or
            Photoshop. Unfortunately for me, I always considered these as mere
            hobbies.
          </p>
          <p>
            Fast forward to 2021 and I decided to step away from my optometrist
            career and pursue my long-lasting yearning of a technology and
            design based occupation. As I am finishing up the front-end
            development education at Noroff, I am thrilled to finally be able to
            create, design and maintain user-friendly concepts that solves real
            problems and has a purpose.
          </p>
        </section>

        <div className="sections">
          <BaseButton>
            <Link to="../../../public/cv0.pdf" target="_blank">
              My CV
            </Link>
          </BaseButton>
        </div>

        <section className="sections">
          <h2>Skills</h2>
          <p>HTML, CSS/SASS, JavaScript, React</p>
          <p>Git, Bootstrap, Wordpress, Git</p>
          <p>Adobe XD, Figma, Photoshop, Illustrator</p>
        </section>

        <section className="sections">
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

        <section className="sections">
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
      </AboutContainer>
    </>
  );
}
