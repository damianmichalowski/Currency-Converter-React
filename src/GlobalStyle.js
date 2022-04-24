import { createGlobalStyle } from "styled-components";
import background from "./background.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

#root {
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image:linear-gradient(black, black), url("${background}");
  background-blend-mode: saturation;
  background-size: cover;
  background-position: center;
}
`;