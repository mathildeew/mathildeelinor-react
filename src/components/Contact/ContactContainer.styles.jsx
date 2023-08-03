import styled from "styled-components";

export const ContactContainer = styled.main`
  h1 {
    font-size: 28vw;
    position: relative;
    left: -43px;
  }

  p:first-child {
    margin-bottom: 20px;
  }

  .links {
    display: flex;
    justify-content: space-between;
    width: 130px;
    align-items: center;
  }

  a {
    font-family: Montserrat, sans-serif;
    font-size: 1.4rem;
  }

  .wrapper {
    max-width: 700px;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 215px;
      text-align: center;
    }
  }
`;
