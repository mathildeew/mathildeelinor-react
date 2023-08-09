import { motion as m } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "../ui/Layout/Navbar";
import { ContactContainer } from "./ContactContainer.styles";

export default function Contact() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Mathilde Elinor | Contact</title>
        </Helmet>
      </HelmetProvider>
      <m.div
        initial={{
          background: "#39469B",
          width: "100vw",
          height: "100vh",
          position: "absolute",
          zIndex: "1",
        }}
        animate={{ y: "-100%" }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
      ></m.div>

      <Navbar />
      <ContactContainer>
        <div className="wrapper">
          <div className="h1Wrap">
            <m.h1
              animate={{ y: 0 }}
              initial={{ y: "-10%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Contact
            </m.h1>
          </div>

          <m.div
            animate={{ y: 0 }}
            initial={{ y: "50%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link to="mailto: hei@mathildeelinor.no">
              hei@mathildeelinor.no
            </Link>
            <div className="links">
              <Link to="https://www.linkedin.com/in/mathilde-elinor-wiik-88075b249/">
                LinkedIn
              </Link>
              <p>/</p>
              <Link to="https://github.com/mathildeew">GitHub</Link>
            </div>
          </m.div>
        </div>
      </ContactContainer>
    </>
  );
}
