import styled from "styled-components";
import { displayFlex } from "../../../../../styles/mixins";

export const NavbarContainer = styled.header`
  width: 100%;
  margin-bottom: 30px;

  .ellipsis {
    font-size: 3rem;
    padding: 5px;
    position: absolute;
    top: 5px;
    right: 20px;
    z-index: 2;
    transition: all 0.4s ease-in-out;

    &.active {
      color: var(--color-secondary);
      transform: rotate(90deg);
    }
  }

  .menu {
    width: 100%;
    height: 100vh;
    background-color: var(--color-primary);
    position: absolute;
    z-index: 1;
    transition: all 0.4s ease-in-out;

    &.inactive {
      visibility: hidden;
      top: -100%;
    }
    &.active {
      visibility: visible;
      top: 0px;
    }

    ul {
      margin-top: 70px;
      margin-right: 25px;

      ${displayFlex({
        direction: "column",
        align: "flex-end",
      })}
    }

    li {
      margin-bottom: 20px;
    }

    a {
      color: var(--color-secondary);
      font-family: Fromage, sans-serif;
      font-size: 4rem;
      padding: 10px;
    }
  }

  @media (min-width: 768px) {
    height: 50px;
    ${displayFlex({
      justify: "center",
      align: "center",
    })}

    nav {
      width: 700px;

      ${displayFlex({
        justify: "end",
        align: "flex-end",
      })};
    }

    ul {
      display: flex;
    }

    a {
      font-size: 2rem;
      padding: 5px;
      margin-right: 25px;
    }
  }

  @media only screen {
    a {
      position: relative;
      transition: left 0.3s ease-in-out;

      &:hover {
        font-style: italic;
        left: 4px;
      }
    }
  }
`;
