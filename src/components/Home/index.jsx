import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { HomeContainer } from "./HomeContainer.styles";

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
              <span>Mathilde</span>
              <span>Elinor</span>
            </m.div>

            <m.div
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p>Front-end developer.</p>
              <p>Currently studying at Noroff and working as an optometrist.</p>
            </m.div>
          </div>

          <m.nav
            initial={{
              filter: "blur(50px)",
            }}
            animate={{ filter: "blur(0px)" }}
            transition={{ delay: 0.5, duration: 0.4, ease: "easeIn" }}
          >
            <ul>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </m.nav>
        </div>
      </HomeContainer>
    </>
  );
}
