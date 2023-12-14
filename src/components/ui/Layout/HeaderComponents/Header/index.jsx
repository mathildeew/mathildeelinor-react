import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full max-w-700 h-full mx-auto px-3.5 mb-16">
      <Link to={"/"} className="font-optician flex">
        Mathilde Elinor &copy; 2023
      </Link>
    </header>
  );
}
