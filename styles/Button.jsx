import styled from "styled-components";
import { displayFlex } from "./mixins";

export const Button = styled.div`
  ${displayFlex({
    align: "center",
    justify: "center",
  })}

  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  width: 150px;
  height: 150px;
  position: relative;

  a {
    font-family: Montserrat, serif;
    z-index: 10;
    padding: 40px;
    transition: all 0.3s ease-in-out;
  }

  span {
    width: 150px;
    height: 150px;
    border: 2px solid var(--color-primary);
    position: absolute;
    transition: all 0.1s ease-in-out;
  }

  span:nth-child(2) {
    border-radius: 32% 58% 69% 43% / 48% 32% 59% 55%;
    animation: animate 4s linear infinite;
  }

  span:nth-child(3) {
    border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
    animation: animate 6s linear infinite;
  }

  span:nth-child(4) {
    border-radius: 31% 45% 74% 35% / 38% 56% 51% 87%;
    animation: animate2 10s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate2 {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @media only screen {
    &:hover {
      a {
        color: var(--color-secondary);
      }

      span {
        border: none;
        background: var(--color-primary);
      }
    }
  }
`;
