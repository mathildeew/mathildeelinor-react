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

  a,
  span {
    color: var(--color-secondary);
    padding: 10px;
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
    right: 0px;
    z-index: 1;
    transition: all 0.4s ease;

    &.inactive {
      top: -100vh;
      opacity: 0;
      visibility: hidden;
    }

    &.active {
      top: 0px;
      opacity: 1;
      visibility: visible;
    }
  }

  .menuContainer {
    ${displayFlex({
      direction: "column",
    })}

    width: 100%;
    margin: 70px 20px 30px 0;
  }

  ul {
    text-align: end;

    li {
      margin-bottom: 20px;
    }

    a {
      font-family: Fromage, sans-serif;
      font-size: 3rem;
    }
  }

  .basicContact {
    ${displayFlex({
      direction: "column",
    })}

    text-align: end;

    span,
    a {
      font-family: Montserrat, sans-serif;
    }

    span {
      font-size: 2rem;
      text-transform: uppercase;
    }

    a {
      font-size: 1.6rem;
      margin-bottom: 10px;
    }

    .contactIcon {
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

  @media only screen {
    ul a,
    .contactEmail {
      &:hover {
        font-style: italic;
        position: relative;
        left: 3px;
      }
    }

    .contactEmail:hover {
      text-decoration: underline;
    }
  }
`;
