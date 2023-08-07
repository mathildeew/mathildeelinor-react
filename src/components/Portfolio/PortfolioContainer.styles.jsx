import styled from "styled-components";

export const PortfolioContainer = styled.main`
  .wrapper {
    padding: 0 32px;
    margin: 50px auto;
  }

  h1 {
    font-size: 26vw;
    position: relative;
    left: -18px;
  }

  /* .top {
    position: relative;
    height: 100px;
    border: 2px solid red;
    margin-bottom: 30px;
  } */

  .intro {
    max-width: 700px;

    p:first-child {
      margin-bottom: 20px;
    }
  }

  img {
    width: 100%;
    margin-bottom: 20px;
  }

  .bulk p:nth-child(4) {
    margin-bottom: 20px;
  }

  a {
    font-family: montserrat, sans-serif;
    font-size: 1.4rem;
    margin-right: 20px;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 200px;
      text-align: center;
    }

    .projects {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
    }
  }
`;
