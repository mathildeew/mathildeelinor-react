import styled from "styled-components";

export const PortfolioContainer = styled.div`
  h1 {
    font-size: 6rem;
    text-align: center;
    margin-top: 50px;
  }

  .intro p:first-child,
  .bulk p,
  img {
    margin-bottom: 20px;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 80px;
  }

  img {
    width: 100%;
    height: auto;
  }

  a {
    font-family: Montserrat, sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    text-decoration: underline;
    margin-right: 20px;
  }

  .wrapper {
    max-width: 700px;
    padding: 0 8%;
    margin: 50px auto;
  }

  .part {
    margin-bottom: 50px;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 15rem;
    }

    .projects {
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 100px;
    }
  }

  @media only screen {
    a {
      position: relative;

      &:hover {
        font-style: italic;
        left: 2px;
      }
    }
  }
`;
