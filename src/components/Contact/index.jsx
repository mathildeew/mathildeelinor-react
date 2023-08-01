import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ContactContainer } from "./ContactContainer.styles";

export default function Contact() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Mathilde Elinor | Contact</title>
        </Helmet>
      </HelmetProvider>

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
    </>
  );
}
