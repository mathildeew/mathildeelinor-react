import styled from "styled-components";

export const AboutContainer = styled.main`
  .top {
    width: 100%;
    height: 400px;
  }

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 32px;
    overflow: hidden;
  }

  h1 {
    font-size: 10rem;
    margin-bottom: 40px;
  }

  span {
    font-family: Montserrat;
    font-size: 1.6rem;
    line-height: 2;
  }

  .blue {
    background-color: var(--color-primary);
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
  }

  .portrait {
    width: 180px;
    height: 220px;
    background: url("../../../public/self2.jpg");
    background-size: cover;
    background-position: top center;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    box-shadow: 6px -6px 0px 0px var(--color-secondary);
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

  .part {
    overflow: hidden;
  }

  @media (min-width: 768px) {
    .portrait {
      display: none;
    }

    .blue {
      width: 50%;
      height: auto;
    }

    .topWrapper {
      width: 100%;
      height: 55vw;
      max-height: 550px;
      display: flex;
      margin-bottom: 50px;
    }

    .top {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 45px;
    }

    .left {
      width: 320px;
      flex-direction: column;
      margin: 0;
    }

    .portraitBig {
      /* 180*220 */
      width: 180px;
      height: 220px;
      background: url("../../../public/self2.jpg");
      background-size: cover;
      background-position: top center;
      border-top-right-radius: 50%;
      border-top-left-radius: 50%;
      box-shadow: 6px -6px 0px 0px var(--color-secondary);
      position: absolute;
      left: 50%;
    }
  }

  @media (min-width: 880px) {
    .content {
      margin: 0 auto;
    }
  }
`;
