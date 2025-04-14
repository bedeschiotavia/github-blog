import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${props => props.theme['blue']};
  }

  body {
    background-color: ${props => props.theme['base_background']};
    color: ${props => props.theme['base_text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input {
    font: 400 1rem 'Nunito', sans-serif;
  }

  a {
    font-size: 0.75rem;
    color: ${props => props.theme['blue']};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  a:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }

`;