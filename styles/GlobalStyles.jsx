import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
}

html {
  --color-primary: #39469B;
  --color-secondary:  #E7D0B9;
  font-size: 62.5%;
}

#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

}

body {
  color: var(--color-primary);
  background-color: var(--color-secondary);
  width: 100vw;
}

main {
  width: 100%;
  margin: 0 auto;
  flex-grow: 1;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  /* border: 2px solid blue; */
}

.wrapper {
  /* padding: 0 32px; */
  margin: 0 auto;
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

p {
  font-family: Montserrat, sans-serif;
  font-size: 1.4rem;
  line-height: 2.5rem;
}

a {
  text-decoration: none;
  padding: 2px;
}

h1,h2,h3, p, a, span {
  color: var(--color-primary);
}

h1, a, span {
  font-family: Fromage, serif;
}

ul {
  padding: 0;
}

li {
  list-style: none;
}

.part {
    margin-bottom: 40px;
  }


/*

.top {
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  border: 2px solid red;
  display: flex;
  flex-direction: column; 
}

 */

/* Media quieries */


`;
