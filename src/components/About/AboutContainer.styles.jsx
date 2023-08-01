import styled from "styled-components";

export const AboutContainer = styled.main`
  .intro {
    min-height: 200px;
    max-height: 350px;
    width: 100%;
    max-width: 320px;
  }

  h1 {
    font-size: 10rem;
    position: absolute;
  }

  .wrapper {
    width: 100%;
    height: 290px;
    border: 2px solid blue;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: end;
    padding-right: 10px;
  }

  .portrait {
    background: url("../../../public/self2.jpg");
    height: 220px; /* 220px*/
    width: 180px; /* 180px */
    background-size: cover;
    background-position: top center;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    /* position: absolute; */
    /* right: 10px; */
    /* top: 70px; */
    z-index: 1;
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
