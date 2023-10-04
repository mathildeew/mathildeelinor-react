import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import SEOHelmet from "../../components/SEOHelmet";

export default function NotFound() {
  return (
    <>
      <SEOHelmet title={"Page not found"} />

      <div className="text-center">
        <h1 className="text-5xl mb-14">Page not found</h1>
        <FontAwesomeIcon icon={faMugHot} className="text-5xl" />
      </div>
    </>
  );
}
