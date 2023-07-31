import { BaseButton } from "../../../styles/Button";
import { AboutContainer } from "./AboutContainer.styles";

export default function About() {
  return (
    <AboutContainer>
      <div className="aboutTop">
        <h1>About</h1>
        <div className="selfImg"></div>
      </div>

      <section className="aboutSection aboutText">
        <p>
          As long as I can remember I have been drawn to combining technology
          and design. The infinite potential has always fascinated me and I have
          never been afraid to just jump in and give it a go, whether it is
          Microsoft Paint, HTML/CSS, blogging, World of Worldcraft or Photoshop.
          Unfortunately for me, I always considered these as mere hobbies.
        </p>
        <p>
          Fast forward to 2021 and I decided to step away from my optometrist
          career and pursue my long-lasting yearning of a technology and design
          based occupation. As I am finishing up the front-end development
          education at Noroff, I am thrilled to finally be able to create,
          design and maintain user-friendly concepts that solves real problems
          and has a purpose.
        </p>
      </section>

      <BaseButton>My CV</BaseButton>

      <section className="aboutSection">
        <h2>Skills</h2>
        <p>HTML, CSS/SASS, JavaScript, React</p>
        <p>Git, Bootstrap, Wordpress, Git</p>
        <p>Adobe XD, Figma, Photoshop, Illustrator</p>
      </section>

      <section className="aboutSection">
        <h2>Experience</h2>

        <div className="bulk">
          <div>
            <p className="boldText">Optometrist </p>
            <p>/ Ses Optikk</p>
          </div>
          <p>2020 - Present</p>
        </div>

        <div className="bulk">
          <div>
            <p className="boldText">Optometrist</p>
            <p>/ Liens Optiske</p>
          </div>
          <p>2019 - 2020</p>
        </div>

        <div className="bulk">
          <div>
            <p className="boldText">Sales Associate</p>
            <p>/ Ses Optikk</p>
          </div>
          <p>2018 - 2020</p>
        </div>

        <div className="bulk">
          <div>
            <p className="boldText">Assistant</p>
            <p>/ Linden Steinerbarnehage</p>
          </div>
          <p>2014 - 2015</p>
        </div>

        <div className="bulk">
          <div>
            <p className="boldText">Assistant</p>
            <p>/ Steinerbarnehagen i Bærum</p>
          </div>
          <p>2012 - 2014</p>
        </div>
      </section>

      <section className="aboutSection">
        <h2>Education</h2>

        <div className="bulk">
          <div>
            <p className="boldText">Front-end Development</p>
            <p>/ Noroff</p>
          </div>
          <p>2021 - Present</p>
        </div>

        <div className="bulk">
          <div>
            <p className="boldText">European Diploma</p>
            <p>/ USN</p>
          </div>
          <p>2018 - 2019</p>
        </div>

        <div className="bulk">
          <div>
            <p className="boldText">Bachelor in Optometry</p>
            <p>/ USN</p>
          </div>
          <p>2015 - 2018</p>
        </div>
      </section>
    </AboutContainer>
  );
}
