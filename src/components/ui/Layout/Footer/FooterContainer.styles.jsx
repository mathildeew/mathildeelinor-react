import styled from "styled-components";
import { displayFlex } from "../../../../../styles/mixins";

export const FooterContainer = styled.footer`
  border: 2px solid blue;
  width: 100%;
  height: 40px;
  margin-bottom: 0;
  position: relative;
  bottom: 0;

  ${displayFlex({
    direction: "column",
    align: "center",
    justify: "center",
  })}
`;
