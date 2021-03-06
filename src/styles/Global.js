import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border-radius: 7px;
    transition: all 0.2s ease;
  }

  body {
    font-family: 'Barlow Semi Condensed', sans-serif;
    background-image: radial-gradient( circle at center, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  }

  button {
    background-color: unset;
    border: unset;
    cursor: pointer;
  }
`;