import styled from "styled-components";
import { displayFlex } from "../../../../../styles/mixins";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 40px;

  ${displayFlex({
    direction: "column",
    align: "center",
    justify: "center",
  })}

  p {
    font-size: 1rem;
  }
`;
