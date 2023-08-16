import { useState } from "react";
import { Link } from "react-router-dom";
import Media from "react-media";
import { motion as m } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { NavbarContainer } from "./Navbar.styles";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <NavbarContainer>
      <m.nav
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
      >
        <>
          <FontAwesomeIcon
            className={showMenu ? "ellipsis active" : "ellipsis inactive"}
            icon={faEllipsis}
            onClick={() => setShowMenu(!showMenu)}
          />
          <div className={showMenu ? "menu active" : "menu inactive"}>
            <ul className="navMenu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="../../../public/cv0.pdf" target="_blank">
                  My CV
                </Link>
              </li>
            </ul>
            <div className="basicContact">
              <span>Say hello</span>
              <Link to="mailto: hei@mathildeelinor.no" className="contactEmail">
                hei@mathildeelinor.no
              </Link>
              <div className="socialIcons">
                <Link to="https://github.com/mathildeew">
                  {/* <FontAwesomeIcon icon={faGithub} /> */} GH
                </Link>
                <Link to="https://www.linkedin.com/in/mathilde-elinor-wiik-88075b249/">
                  {/* <FontAwesomeIcon icon={faLinkedin} /> */} LI
                </Link>
              </div>
            </div>
          </div>
        </>
      </m.nav>
    </NavbarContainer>
  );
}
