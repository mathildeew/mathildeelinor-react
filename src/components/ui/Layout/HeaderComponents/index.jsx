import { useLocation, useMatch } from "react-router-dom";
import Header from "./Header";
import LogMar from "./LogMar";

export default function HeaderComponents() {
  const location = useLocation();
  return <>{location.pathname === "/" ? <LogMar /> : <Header />}</>;
}
