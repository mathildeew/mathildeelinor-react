import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full max-w-800 h-full mx-auto px-3.5 py-4">
      <Link to={"/"} className="font-optician flex items-center gap-6">
        <FontAwesomeIcon icon={faArrowLeftLong} />
        Mathilde Elinor &copy; {new Date().getFullYear()}
      </Link>
    </header>
  );
}
