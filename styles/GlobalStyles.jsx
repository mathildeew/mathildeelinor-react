import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html {
        --color-primary: #3e3e3e;
        --color-secondary: #fcfffc;
    }

    body {
        color: var(--color-primary);
        background-color: var(--color-secondary);
    }

`;
