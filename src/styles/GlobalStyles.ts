import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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
`;
