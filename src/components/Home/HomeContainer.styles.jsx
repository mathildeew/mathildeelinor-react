import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const HomeContainer = styled.main`
  margin-bottom: 20px;

  nav {
    font-size: 15vw;
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

  .text {
    margin-bottom: 40px;
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
    main {
      width: 100%;
    }

    .wrapper {
      height: 80vh;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    .top {
      align-items: start;
    }

    nav {
      font-size: 11rem;
    }
  }
`;
