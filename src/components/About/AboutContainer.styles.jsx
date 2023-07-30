import styled from "styled-components";

export const AboutContainer = styled.div`
  .aboutTop {
    height: 300px;
    margin-bottom: 40px;
    position: relative;
    overflow: hidden;
  }

  h1 {
    font-size: 40vw;
    position: absolute;
    z-index: 2;
    top: 20;
  }

  .selfImg {
    background: url("../../../public/self2.jpg");
    height: 220px;
    width: 180px;
    background-size: cover;
    background-position: top center;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    position: absolute;
    right: 0;
    top: 70px;
    z-index: 1;
  }

  .pinline {
    display: flex;
  }
`;
