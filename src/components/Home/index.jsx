import { Link } from "react-router-dom";
import { HomeContainer } from "./HomeContainer.styles";

export default function Home() {
  return (
    <HomeContainer>
      <div className="top intro">
        <span>Mathilde</span>
        <span>Elinor</span>
      </div>

      <section>
        <div className="sections">
          <p>Front-end developer.</p>
          <p>Currently studying at Noroff and working as an optometrist.</p>
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
      </section>
    </HomeContainer>
  );
}
