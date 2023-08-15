import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const ContactContainer = styled.main`
  h1 {
    font-size: 5rem;
    margin-bottom: 40px;
  }

  .links {
    width: 130px;
    margin-top: 20px;

    ${displayFlex({
      align: "center",
      justify: "space-between",
    })}

    p {
      margin: 0 5px;
    }
  }

  p {
    font-size: 1.6rem;
  }

  a {
    font-family: Montserrat, sans-serif;
    font-size: 1.6rem;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 215px;
      text-align: center;
    }
  }

  @media only screen {
    a {
      position: relative;

      &:hover {
        font-style: italic;
        left: 2px;
        text-decoration: underline;
      }
    }
  }
`;
