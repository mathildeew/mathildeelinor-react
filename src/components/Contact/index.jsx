import { Link } from "react-router-dom";
import { ContactContainer } from "./ContactContainer.styles";

export default function Contact() {
  return (
    <ContactContainer>
      <div className="top">
        <h1>Contact</h1>
      </div>

      <section>
        <p> hei@mathildeelinor.no</p>
        <div className="links">
          <Link to="linkedin.com">LinkedIn</Link>
          <p>/</p>
          <Link to="github.com">GitHub</Link>
        </div>
      </section>
    </ContactContainer>
  );
}
