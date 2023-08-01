import styled from "styled-components";

export const AboutContainer = styled.main`
  .intro {
    height: 320px;
  }

  h1 {
    font-size: 37vw;
    left: -10px;
  }

  .portrait {
    background: url("../../../public/self2.jpg");
    height: 73.5vw; /* 220px*/
    width: 60vw; /* 180px */
    max-width: 300px;
    max-height: 352px;
    background-size: cover;
    background-position: top center;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    position: absolute;
    right: 10px;
    top: 70px;
    z-index: 1;
  }

  .text p:first-child,
  button:first-child {
    margin-bottom: 20px;
  }

  .bulk {
    margin-bottom: 10px;

    div:first-child {
      display: flex;
    }

    p:first-child {
      margin-right: 7px;
    }
  }

  .boldText {
    font-weight: 600;
  }
`;
