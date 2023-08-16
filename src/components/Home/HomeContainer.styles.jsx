import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const HomeContainer = styled.section`
  height: 80vh;

  .intro {
    ${displayFlex({
      direction: "column",
      justify: "center",
    })}
  }

  h1 {
    font-size: 15vw;
    font-weight: 500;
    margin-bottom: 40px;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 11.5rem;
    }
  }
`;
