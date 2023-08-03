import styled from "styled-components";

export const AboutContainer = styled.main`
  h1 {
    font-size: 11.8rem;
    position: relative;
    left: -6px;
    z-index: 2;
    text-align: center;
  }

  .portrait {
    background: url("../../../public/self2.jpg");
    /* height: 73.3vw;
    max-height: 482px;
    width: 60vw;
    max-width: 390px; */
    width: 180px;
    height: 220px;
    background-size: cover;
    background-position: top center;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    margin-left: 200px;
    position: relative;
    top: -60px;
    z-index: 1;
  }

  .intro {
    margin-bottom: 190px;
    border: 2px solid red;
    width: 400px;
    margin: 0 auto;
  }

  .left {
    max-width: 600px;
    border: 2px solid blue;
  }

  .text p:first-child {
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

  @media (min-width: 1025px) {
    .wrapper {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  }

  /* 
  @media (min-width: 506px) {
    h1 {
      font-size: 18.7rem;
      left: 0;
    }
    .intro {
      max-width: 550px;
    } */
  /* } */
`;
