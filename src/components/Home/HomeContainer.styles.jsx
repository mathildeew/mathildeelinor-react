import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const HomeContainer = styled.div`
  .homeTop {
    position: relative;
    margin-bottom: 30%;

    ${displayFlex({
      direction: "column",
      align: "unset",
      justify: "unset",
    })}
    span {
      font-size: 24vw;
    }
    span:nth-child(2) {
      position: absolute;
      top: 70%;
      right: 0;
    }
  }

  .homeMiddle {
    margin-bottom: 30px;
  }

  nav {
    font-size: 4rem;

    li {
      margin-bottom: 15px;
    }
  }
`;
