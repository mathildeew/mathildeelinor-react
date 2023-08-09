import styled from "styled-components";

export const ContactContainer = styled.main`
  h1 {
    font-size: 28vw;
    position: relative;
    left: -43px;
  }

  .links {
    display: flex;
    justify-content: space-between;
    width: 130px;
    align-items: center;

    p {
      margin: 0 5px;
    }
  }

  p {
    font-size: 1.6rem;
  }

  a {
    font-family: Montserrat, sans-serif;
    font-size: 1.6rem;
  }

  .part {
    overflow: hidden;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 215px;
      text-align: center;
    }
  }
`;
