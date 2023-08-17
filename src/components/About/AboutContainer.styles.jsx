import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const AboutContainer = styled.section`
  .topMain {
    width: 100%;
    margin-bottom: 70px;

    ${displayFlex({
      direction: "column",
      justify: "space-around",
    })}
  }

  h1 {
    font-size: 8rem;
    text-align: center;
    margin-bottom: 100px;
  }

  h3 {
    margin-bottom: 5px;
  }

  span {
    font-family: Montserrat;
    font-size: 1.6rem;
    line-height: 2;
    margin-bottom: 80px;
  }

  .blob {
    width: 270px;
    height: 350px;
    background-color: var(--color-primary);
    border-radius: 40% 56% 72% 28% / 42% 42% 56% 48%;
    margin: 0 auto;
    animation: morph 2.75s linear infinite;

    ${displayFlex({
      direction: "column",
      justify: "center",
      align: "center",
    })}
  }

  @keyframes morph {
    0%,
    100% {
      border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
    }
    33% {
      border-radius: 72% 28% 48% 48% / 28% 28% 72% 72%;
    }
    66% {
      border-radius: 100% 56% 56% 100% / 100% 100% 56% 56%;
    }
  }

  .portrait {
    width: 200px;
    height: 260px;
    background: url("../../../public/self2.jpg");
    background-size: cover;
    background-position: center center;
    border-radius: 40% 56% 72% 28% / 42% 42% 56% 48%;
    /* border-top-right-radius: 50%;
    border-top-left-radius: 50%; */
    /* box-shadow: 6px -6px 0px 0px var(--color-secondary); */
  }

  #text p:first-child {
    margin-bottom: 20px;
  }

  .bulk {
    margin-bottom: 30px;

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
    .topMain {
      ${displayFlex({
        direction: "row",
        align: "center",
      })}
    }

    span {
      font-size: 2rem;
      width: 50%;
      margin-bottom: 0px;
    }
    .blue {
      /* width: 80%; */
    }
  }
`;
