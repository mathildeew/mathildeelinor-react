import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
margin: 0;
box-sizing: border-box;
overflow-x: hidden;
}



html {
    --color-primary: #3e3e3e;
    --color-secondary: #f2faff;
    font-size: 62.5%;

}

#root {
    min-height: 100vh;;
    display: flex;
    flex-direction: column;
}

body {
    color: var(--color-primary);
    background-color: var(--color-secondary);
    width: 100vw;
   
}

main {
    width: 100%;
    max-width: 565px;
    margin-bottom: 50px;
    flex-grow: 1;
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
        position: absolute;
        z-index: 2;
    }

    h2 {
        font-size: 1.8rem;;
    }

    a {
        text-decoration: none;
    }

    h1,h2,h3, p, a, span {
        color: var(--color-primary);
    }

    h1, h2, a, span {
        font-family: Fromage, serif;
    }

    p {
        font-family: Montserrat, sans-serif;
        font-size: 1.4rem;
        line-height: 2.5rem;
    }

    .top {
    position: relative;
    height: 120px;
    margin-bottom: 50px;
    }

    .sections {
    margin-bottom: 50px;
    }
    `;
