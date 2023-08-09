import styled from "styled-components";

export const PortfolioContainer = styled.main`
  h1 {
    font-size: 6rem;
    text-align: center;
    margin-top: 50px;
  }

  #intro p:first-child,
  .bulk p:nth-child(4),
  img {
    margin-bottom: 20px;
  }

  #projects {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 40px;
  }

  img {
    width: 100%;
  }

  a {
    font-family: Montserrat, sans-serif;
    font-size: 1.4rem;
    margin-right: 20px;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 200px;
    }

    #projects {
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 30px;
      grid-row-gap: 50px;
    }
  }
`;
