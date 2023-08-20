import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const HomeContainer = styled.section`
  .intro {
    ${displayFlex({
      direction: "column",
    })}
    overflow: hidden;
  }

  h1 {
    font-size: 13vw;
    font-weight: 500;
  }

  h3 {
    margin-bottom: 5px;
  }

  h1,
  .blobContainer {
    margin-bottom: 60px;
  }

  .blobContainer {
    ${displayFlex({
      direction: "column",
      justify: "space-around",
    })}
    height: 550px;

    .blobText {
      font-family: Fromage, serif;
      font-size: 2.5rem;
      overflow: hidden;
    }
  }

  .blob {
    ${displayFlex({
      direction: "column",
      justify: "center",
      align: "center",
    })}

    width: 270px;
    height: 350px;
    background-color: var(--color-primary);
    border-radius: 40% 56% 72% 28% / 42% 42% 56% 48%;
    margin: 0 auto;
    animation: morph 2.75s linear infinite;
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
  }

  .text p:first-child {
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

  @media (min-width: 768px) {
    h1 {
      font-size: 8rem;
    }

    .blobContainer {
      ${displayFlex({
        direction: "row",
        align: "center",
        justify: "space-between",
      })}

      .blobText {
        width: 50%;
      }
      p {
        font-size: 1.8rem;
      }
    }

    .blob {
      margin-left: 0;
    }
  }
`;
