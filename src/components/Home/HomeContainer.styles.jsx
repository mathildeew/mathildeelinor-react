import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const HomeContainer = styled.section`
  .intro {
    ${displayFlex({
      direction: "column",
      justify: "",
    })}
    overflow: hidden;
  }

  h1 {
    font-size: 13vw;
    font-weight: 500;
    margin-bottom: 60px;
  }

  h3 {
    margin-bottom: 5px;
  }

  .blobContainer {
    ${displayFlex({
      direction: "column",
      justify: "space-between",
    })}
    height: 550px;
    margin-bottom: 50px;

    .blobText {
      font-family: Fromage, serif;
      font-size: 2.5rem;
      overflow: hidden;
    }
  }

  .blob {
    width: 270px;
    height: 350px;
    background-color: var(--color-primary);
    border-radius: 40% 56% 72% 28% / 42% 42% 56% 48%;
    margin: 0 auto;
    margin-bottom: 50px;
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
