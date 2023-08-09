import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const HomeContainer = styled.main`
  nav {
    font-size: 15vw;
    width: 50%;
    margin-top: 50px;
  }

  .top {
    display: flex;
    flex-direction: column;
    align-items: end;
    height: 100%;
    margin-bottom: 40px;

    span {
      font-size: 14vw;
      font-weight: 500;
    }
  }

  .wrapperRight {
    overflow: hidden;
  }

  @media (min-width: 438px) {
    .top {
      width: 439px;
      span {
        font-size: 6.1rem;
      }
    }
  }

  @media (min-width: 1025px) {
    .wrapper {
      height: 80vh;
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1000px;
    }

    .top {
      align-items: start;
    }

    nav {
      font-size: 11rem;
    }
  }

  /* TRANSITIONS */
  a {
    transition: margin 0.3s ease-in;
  }

  nav {
    a:hover {
      font-style: italic;
      margin-left: 3px;
    }
  }
`;
