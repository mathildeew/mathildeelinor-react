import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const HomeContainer = styled.main`
  .top {
    height: 100%;
    margin-bottom: 40px;

    ${displayFlex({
      direction: "column",
      align: "end",
    })}

    span {
      font-size: 14vw;
      font-weight: 500;
    }
  }

  .left {
    overflow: hidden;
  }

  nav {
    font-size: 15vw;
    width: 50%;
    margin-top: 50px;
  }

  @media (min-width: 438px) {
    .top {
      align-items: flex-start;
      span {
        font-size: 6.1rem;
      }
    }
  }

  @media (min-width: 1025px) {
    .wrapper {
      height: 80vh;
      max-width: 1200px;

      ${displayFlex({
        align: "center",
        justify: "space-between",
      })}
    }

    .top {
      align-items: start;
    }

    nav {
      font-size: 11rem;
    }
  }

  @media only screen {
    a {
      transition: margin 0.3s ease-in;
    }

    nav {
      a:hover {
        font-style: italic;
        margin-left: 3px;
      }
    }
  }
`;
