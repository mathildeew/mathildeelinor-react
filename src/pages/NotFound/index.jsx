import { Helmet, HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { NotFoundContainer } from "./NotFoundContainer";
import SEOHelmet from "../../components/SEOHelmet";

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
