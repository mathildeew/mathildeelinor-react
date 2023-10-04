import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { HeaderContainer } from "./Header.styles";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function hideOnScroll() {
    if (window.scrollY > 3) {
      setShowMenu(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", hideOnScroll);
  });

  return (
    <HeaderContainer className="border-2 border-black w-full max-w-900 h-full flex justify-end mx-auto">
      <m.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
      >
        <FontAwesomeIcon
          className={showMenu ? "ellipsis active" : "ellipsis inactive"}
          icon={faEllipsis}
          onClick={() => setShowMenu(!showMenu)}
        />

        <div className={showMenu ? "menu active" : "menu inactive"}>
          <div className="menuContainer mt-16 mr-5 mb-8">
            <ul className="text-end">
              <li className="mb-5">
                <Link
                  to="/"
                  onClick={() => setShowMenu(false)}
                  className="text-3xl"
                >
                  Home
                </Link>
              </li>
              <li className="mb-5">
                <Link
                  to="/portfolio"
                  onClick={() => setShowMenu(false)}
                  className="text-3xl"
                >
                  Portfolio
                </Link>
              </li>
              <li className="mb-5">
                <Link
                  to="../../../../../public/CV_MathildeElinor_en.pdf"
                  target="_blank"
                  onClick={() => setShowMenu(false)}
                  className="text-3xl"
                >
                  My CV
                </Link>
              </li>
            </ul>

            <div className="basicContact flex flex-col text-center">
              <span className="font-sans text-xl uppercase">Say hello</span>
              <Link
                to="mailto: hei@mathildeelinor.no"
                className="contactEmail font-sans"
              >
                hei@mathildeelinor.no
              </Link>
              <div className="socialIcons">
                <Link to="https://github.com/mathildeew">
                  <FontAwesomeIcon icon={faGithub} className="contactIcon" />
                </Link>
                <Link to="https://www.linkedin.com/in/mathilde-elinor-wiik-88075b249/">
                  <FontAwesomeIcon icon={faLinkedin} className="contactIcon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </m.nav>
    </HeaderContainer>
  );
}
