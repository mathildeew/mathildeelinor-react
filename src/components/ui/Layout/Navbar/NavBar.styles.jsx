import styled from "styled-components";
import { displayFlex } from "../../../../../styles/mixins";

export const NavbarContainer = styled.header`
  width: 50%;
  margin-bottom: 30px;
  overflow: hidden;

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

    a {
      color: var(--color-secondary);
    }
  }

  .navMenu {
    margin-top: 70px;
    margin-right: 25px;

    ${displayFlex({
      direction: "column",
      align: "flex-end",
    })}

    li {
      margin-bottom: 20px;
    }

    a {
      font-family: Fromage, sans-serif;
      font-size: 3rem;
      padding: 10px;
    }
  }

  .basicContact {
    height: 150px;
    margin-top: 30px;
    margin-right: 25px;

    ${displayFlex({
      direction: "column",
      align: "flex-end",
      justify: "space-around",
    })}

    span {
      color: var(--color-secondary);
      font-family: Montserrat, sans-serif;
      font-size: 2rem;
      text-transform: uppercase;
    }

    a {
      font-family: Montserrat, sans-serif;
      font-size: 1.6rem;
    }
  }

  /* .socialIcons {
    svg {
      color: var(--color-secondary);
      font-size: 3rem;
    }
  } */

  @media (min-width: 768px) {
    .menu {
      width: 350px;
      right: 0px;
    }
  }

  @media (min-width: 1100px) {
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
