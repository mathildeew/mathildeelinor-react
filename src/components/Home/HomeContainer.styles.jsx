import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const HomeContainer = styled.main`
  .intro {
    align-items: flex-end;
    max-height: 366px;
  }

  span {
    font-size: 8rem;
  }

  span:nth-child(2) {
  }

  nav {
    font-size: 3rem;

    li {
      margin-bottom: 15px;
    }
  }

  @media (min-width: 768px) {
    nav {
      font-size: 5rem;
    }
  }
`;
