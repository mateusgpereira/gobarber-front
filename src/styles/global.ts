import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    background-color: #312E38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px 'Roboto Slab', serif;
  }

  button {
    cursor: pointer;
  }

  h1, h2 , h3, h4, h5, h6, strong {
    font-weight: 500;
  }
`
