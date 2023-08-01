import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
margin: 0;
box-sizing: border-box;
}



html {
    --color-primary: #3e3e3e;
    --color-secondary: #f2faff;
    font-size: 62.5%;
    overflow-x: hidden;

}

#root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

body {
    color: var(--color-primary);
    background-color: var(--color-secondary);
    border: 2px solid red;
}

main {
    width: 100%;
    max-width: 500px;
    margin-bottom: 50px;
    margin: 0 auto;
    flex-grow: 1;
    border: 2px solid green;
    display: flex;
        flex-direction: column;
        align-items: center;
}

section {
    padding: 0 10px;
}

ul {
    padding: 0;
}

    li {
        list-style: none;
    }

    h1 {
        /* position: absolute; */
        z-index: 2;
    }

    h2 {
        font-size: 1.8rem;
        text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 8px;
    }

    h3 {
        font-family: montserrat, sans-serif;
        font-size: 1.4rem;
        font-weight: 600;
    }

    a {
        text-decoration: none;
    }

    h1,h2,h3, p, a, span {
        color: var(--color-primary);
    }

    h1, a, span {
        font-family: Fromage, serif;
    }

    p {
        font-family: Montserrat, sans-serif;
        font-size: 1.4rem;
        line-height: 2.5rem;
    }

    .top {
    /* width: 100%;
    height: 100%;
    margin-bottom: 20px;
    border: 2px solid red;
    display: flex;
    flex-direction: column; */
    }

    .sections {
        width: 100%;
    margin-bottom: 50px;
    border: 2px solid orange;
    }

    @media (min-width: 767px) {
    main {
    }
  }

  @media (min-width: 768px) {
  
  }

    `;
