import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const AboutContainer = styled.section`
  #blue {
    background-color: var(--color-primary);
    width: 100%;
    height: 300px;
    margin-bottom: 30px;

    ${displayFlex({
      direction: "column",
      align: "center",
      justify: "center",
    })}
  }

  .portrait {
    width: 180px;
    height: 220px;
    background: url("../../../public/self2.jpg");
    background-size: cover;
    background-position: top center;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    box-shadow: 6px -6px 0px 0px var(--color-secondary);
  }

  #text p:first-child {
    margin-bottom: 20px;
  }

  .bulk {
    margin-bottom: 10px;

    div:first-child {
      display: flex;
    }

    p:first-child {
      margin-right: 7px;
    }
  }

  .boldText {
    font-weight: 600;
  }

  .part {
    overflow: hidden;
  }

  @media (min-width: 768px) {
    .portrait {
      display: none;
    }

    #blue {
      width: 50%;
      height: auto;
    }

    .portraitBig {
      /* 180*220 */
      width: 180px;
      height: 220px;
      background: url("../../../public/self2.jpg");
      background-size: cover;
      background-position: top center;
      border-top-right-radius: 50%;
      border-top-left-radius: 50%;
      box-shadow: 6px -6px 0px 0px var(--color-secondary);
      position: absolute;
      left: 50%;
    }
  }
`;
