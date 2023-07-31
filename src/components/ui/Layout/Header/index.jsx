import { Link } from "react-router-dom";
import { HeaderContainer } from "./Header.styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/">Home</Link>
    </HeaderContainer>
  );
}
