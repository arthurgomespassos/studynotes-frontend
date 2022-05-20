import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') === 'dark' ? dark : light
  );
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
    if (theme.title === 'light') {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <BrowserRouter>
          <Header toggleTheme={toggleTheme} theme={theme} />
          <Routes />
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
