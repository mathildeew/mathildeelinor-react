import styled from "styled-components";

export const PortfolioContainer = styled.main`
  h1 {
    font-size: 26vw;
    position: relative;
    left: -18px;
  }

  .intro {
    max-width: 700px;

    p:first-child {
      margin-bottom: 20px;
    }
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 40px;
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
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 30px;
      grid-row-gap: 50px;
    }
  }
`;
