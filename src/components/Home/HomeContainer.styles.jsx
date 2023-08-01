import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const HomeContainer = styled.main`
  .intro {
    height: 150px;
    border: 2px solid red;
  }

  span {
    font-size: 20vw;
  }
  span:nth-child(2) {
    position: absolute;
    top: 70px;
    right: 0;
  }

  nav {
    font-size: 3rem;

    li {
      margin-bottom: 15px;
    }
  }
`;
