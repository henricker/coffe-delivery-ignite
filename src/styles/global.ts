import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${(props) => props.theme.colors['gray-100']};
    color: ${(props) => props.theme.colors['gray-700']};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font-family: ${(props) => props.theme.fonts.text};
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSize[10]};
  }
`
