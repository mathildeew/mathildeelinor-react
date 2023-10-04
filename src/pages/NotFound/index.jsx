import { Helmet, HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { NotFoundContainer } from "./NotFoundContainer";

export default function NotFound() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Mathilde Elinor | Page not found</title>
        </Helmet>
      </HelmetProvider>

      <NotFoundContainer>
        <div className="wrapper">
          <h1>Page not found</h1>
          <FontAwesomeIcon icon={faMugHot} />
        </div>
      </NotFoundContainer>
    </>
  );
}
