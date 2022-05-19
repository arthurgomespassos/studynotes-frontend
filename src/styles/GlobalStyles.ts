import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: ShadowsIntoLight;
    src: url(../../fonts/ShadowsIntoLight-Regular.ttf);
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
    grid-template-rows: 5rem 1fr 3rem;
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
