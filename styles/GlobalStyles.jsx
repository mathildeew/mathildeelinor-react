import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    box-sizing: border-box;
}

    html {
        --color-primary: #3e3e3e;
        --color-secondary: #f2faff;
        height: 100%;
        font-size: 62.5%
    }

    body {
        color: var(--color-primary);
        background-color: var(--color-secondary);
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    main {
        width: 100%;
        max-width: 565px;
        padding: 0 10px;
        margin-bottom: 50px;
        border: 2px solid green;
    }

    ul {
        padding: 0;
    }

    li {
        list-style: none;
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

`;
