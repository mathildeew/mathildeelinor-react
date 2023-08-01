import { Link } from "react-router-dom";
import { HomeContainer } from "./HomeContainer.styles";

export default function Home() {
  return (
    <HomeContainer>
      <main>
        <div className="homeTop">
          <span>Mathilde</span>
          <span>Elinor</span>
        </div>

        <section>
          <div className="homeMiddle">
            <p>Front-end developer.</p>
            <p>Currently working as an optometrist.</p>
          </div>

          <nav>
            <ul>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </HomeContainer>
  );
}
