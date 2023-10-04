import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import SEOHelmet from "../../components/SEOHelmet";
import { NotFoundContainer } from "./NotFoundContainer";

export default function NotFound() {
  return (
    <>
      <SEOHelmet title={"Page not found"} />

      <NotFoundContainer>
        <div className="wrapper">
          <h1>Page not found</h1>
          <FontAwesomeIcon icon={faMugHot} />
        </div>
      </NotFoundContainer>
    </>
  );
}
