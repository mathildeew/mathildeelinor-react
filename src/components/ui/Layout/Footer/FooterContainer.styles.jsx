import styled from "styled-components";
import { displayFlex } from "../../../../../styles/mixins";

export const FooterContainer = styled.footer`
  ${displayFlex({
    direction: "column",
    align: "center",
    justify: "center",
  })}

  width: 100%;
  height: 40px;

  p {
    font-size: 1rem;
  }
`;
