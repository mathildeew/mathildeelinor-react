import styled from "styled-components";
import { displayFlex } from "../../../../../styles/mixins";

export const HeaderContainer = styled.header`
  ${displayFlex({
    justify: "end",
  })}

  height: 50px;
  width: 100%;
  max-width: 900px;
  height: 100%;
  margin: 0 auto;

  .ellipsis {
    font-size: 3rem;
    padding: 5px;
    position: relative;
    top: 20px;
    right: 20px;
    z-index: 2;
    transition: all 0.4s ease-in-out;

    &.active {
      color: var(--color-secondary);
      transform: rotate(90deg);
    }
  }

  .menu {
    ${displayFlex({
      direction: "column",
      align: "flex-end",
    })}

    background: var(--color-primary);
    width: 100%;
    height: 100vh;
    position: absolute;
    top: -100vh;
    right: 0px;
    z-index: 1;
    transition: all 0.4s ease;

    &.inactive {
      opacity: 0;
      visibility: hidden;
    }

    &.active {
      top: 0px;
      opacity: 1;
      visibility: visible;
    }

    a {
      color: var(--color-secondary);
    }
  }

  .menuContainer {
    ${displayFlex({
      direction: "column",
    })}

    width: 100%;
    margin-right: 20px;
  }

  ul {
    text-align: end;
    margin-top: 70px;

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
    ${displayFlex({
      direction: "column",
    })}

    text-align: end;
    margin-top: 30px;

    span,
    a {
      font-family: Montserrat, sans-serif;
      padding: 10px;
    }

    span {
      color: var(--color-secondary);
      font-size: 2rem;
      text-transform: uppercase;
    }

    a {
      font-size: 1.6rem;
      margin-bottom: 10px;
    }

    svg {
      font-size: 2.5rem;
    }
  }

  @media (min-width: 750px) {
    .menu {
      width: 280px;
    }

    ul {
      margin-bottom: 60px;
    }
  }

  @media (min-width: 900px) {
    nav {
      position: relative;
    }
  }

  @media (min-width: 1400px) {
    .menu {
      left: -20px;
    }
  }
`;
