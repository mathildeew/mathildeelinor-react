import { motion as m } from "framer-motion";

export default function About() {
  return (
    <m.section
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: "10%", opacity: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <h2>About</h2>

      <div className="mb-14">
        <p className="mb-5">
          As long as I can remember I have made things where functionality and
          aesthetics are connected, and have especially dived into the
          technological world. I have never been afraid to just give it a go and
          explore the infinite potential, whether its Microsoft Paint, HTML/CSS,
          blogging, World of Warcraft, or Photoshop. Unfortunately for me, I
          always considered these as mere hobbies.
        </p>
        <p>
          Fast forward to 2021 and I decided to step away from my role as an
          optometrist and pursue my long-lasting craving of a technology and
          design based career. As I am finishing up the front-end development
          education at Noroff, I am electrified to finally be able to create,
          design and maintain user-friendly concepts and satisfy my curiosity
          around new technologies.
        </p>
      </div>

      <div className="mb-14">
        <div className="mb-8">
          <h2>Skills</h2>
          <p>
            Web accessibility, SE Optimization, FE Optimization, responsive web
            design, testing.
          </p>
        </div>

        <div className="mb-8">
          <h3>Languages</h3>
          <p>JavaScript, CSS, Sass, HTML, Git</p>
        </div>

        <div className="mb-8">
          <h3>Frameworks &amp; libraries</h3>
          <p>React, Bootstrap, Tailwind CSS, Jest</p>
        </div>

        <div className="mb-8">
          <h3>Tools &amp; platforms</h3>
          <p>
            GitHub, WordPress, Cypress, Netlify, Adobe XD, Figma, Photoshop,
            Illustrator
          </p>
        </div>
      </div>
    </m.section>
  );
}
