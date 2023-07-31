import { Link } from "react-router-dom";
import { ContactContainer } from "./ContactContainer.styles";

export default function Contact() {
  return (
    <ContactContainer>
      <h1>Contact</h1>
      <div>
        <p>Email: hei@mathildeelinor.no</p>
        <p>On the internet:</p>
        <Link to="linkedin.com">LinkedIn</Link>
        <Link to="github.com">GitHub</Link>
      </div>
    </ContactContainer>
  );
}
