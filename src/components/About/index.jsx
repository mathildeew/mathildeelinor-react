import { AboutContainer } from "./AboutContainer.styles";

export default function About() {
  return (
    <AboutContainer>
      <div className="aboutTop">
        <h1>About</h1>
        <div className="selfImg"></div>
      </div>

      <p>
        As long as I can remember I have been drawn to combining technology and
        design. The infinite potential has always fascinated me and I have never
        been afraid to just jump in and give it a go, whether it is Microsoft
        Paint, HTML/CSS, blogging, World of Worldcraft or Photoshop.
        Unfortunately for me, I always considered these as mere hobbies.
      </p>
      <p>
        Fast forward to 2021 and I decided to step away from my optometrist
        career and pursue my long-lasting yearning of a technology and design
        based occupation. As I am finishing up the front-end development
        education at Noroff, I am thrilled to finally be able to create, design
        and maintain user-friendly concepts that solves real problems and has a
        purpose.
      </p>

      <div>
        <h2>Skills</h2>
        <p>HTML, CSS/SASS, JavaScript, React</p>
        <p>Git, Bootstrap, Wordpress, Git</p>
        <p>Adobe XD, Figma, Photoshop, Illustrator</p>
      </div>

      <div className="aboutExperience">
        <h2>Experience</h2>

        <div className="pinline">
          <p>Optometrist</p>
          <p>/ Ses Optikk</p>
        </div>
        <p>2020 - Present</p>

        <p>Optometrist</p>
        <p>/ Liens Optiske</p>
        <p>2019 - 2020</p>

        <p>Sales Associate</p>
        <p>/ Ses Optikk</p>
        <p>2018 - 2020</p>

        <p>Assistant</p>
        <p>/ Linden Steinerbarnehage</p>
        <p>2014 - 2015</p>

        <p>Assistant</p>
        <p>/ Steinerbarnehagen i Bærum</p>
        <p>2012 - 2014</p>
      </div>

      <div>
        <h2>Education</h2>
      </div>
    </AboutContainer>
  );
}
