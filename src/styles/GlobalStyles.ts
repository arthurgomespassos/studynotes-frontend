import { createGlobalStyle } from 'styled-components';

import Pacifico from '../fonts/Pacifico-Regular.ttf';
import Roboto from '../fonts/Roboto-Regular.ttf';
import RobotoBold from '../fonts/Roboto-Bold.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: Pacifico;
    src: url(${Pacifico});
  }
  @font-face {
    font-family: Roboto;
    src: url(${Roboto});
  }
  @font-face {
    font-family: Roboto Bold;
    src: url(${RobotoBold});
  }

  *{
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Roboto;
  }

  html, body, #root {
    height: 100%;
  }

  body{
    font-size: 1.6rem;
    font-family: Roboto;
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
