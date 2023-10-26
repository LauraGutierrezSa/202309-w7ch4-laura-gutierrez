import { createGlobalStyle } from "styled-components";

const globals = createGlobalStyle`
:root {
  --main-color: #eddecc;
  --main-font-family: "Open Sans", sans-serif;
  --light-color: #dcb53b;
  --medium-color: #885318;
  --dark-color: #556d1d;
  --darkest-color: #3b4b13;
  --main-font-size: 1.5rem;
}

*,
::before,
::after {
  box-sizing: border-box;
}

html {
  font-family: var(--main-font-family);
}

body,
h1 {
  margin: 0;
}

body {
  padding: 30px;
  font-size: var(--main-font-size);
  background-color: var(--main-color);
}

ul {
  list-style: none;
  margin-top: 0;
  padding: 0;
}

button {
  cursor: pointer;
  background-color: var(--dark-color);
  color: var(--main-color);
}
`;

export default globals;
