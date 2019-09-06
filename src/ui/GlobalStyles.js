import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }

  @font-face {
    font-family: "Comfortaa";
    src: url("/fonts/Comfortaa-Regular.ttf") format("truetype");
  }
`;

export default GlobalStyles;
