import { createGlobalStyle } from 'styled-components';

import Pacifico from '../fonts/Pacifico-Regular.ttf';
import Roboto from '../fonts/Roboto-Regular.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: Pacifico;
    src: url(${Pacifico});
  }
  @font-face {
    font-family: Roboto;
    src: url(${Roboto});
  }

  *{
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body{
    font-size: 1.6rem;
    font-family: -apple-system, Roboto, Ubuntu, sans-serif;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text}
  }
  
  html {
    font-size: 62.5%;
  }

  a { 
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  button { 
    cursor: pointer;
  }

  .App {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 5rem 1fr 2.2rem;
    grid-template-columns: 1fr;
    grid-template-areas: 
    'header'
    'content'
    'footer';
    .header{
      grid-area: header;
    }
    .footer{
      grid-area: footer;
    }
  }
`;
