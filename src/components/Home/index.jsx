import { Link } from "react-router-dom";
import { HomeContainer } from "./HomeContainer.styles";

export default function Home() {
  return (
    <HomeContainer>
      <div className="wrapper">
        <div className="wrapperRight">
          <div className="top">
            <span>Mathilde</span>
            <span>Elinor</span>
          </div>

          <div className="part">
            <p>Front-end developer.</p>
            <p>Currently studying at Noroff and working as an optometrist.</p>
          </div>
        </div>

        <nav>
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
        </nav>
      </div>
    </HomeContainer>
  );
}
