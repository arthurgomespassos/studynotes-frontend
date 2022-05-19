import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
// import Login from './pages/Login';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';

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
        <Header toggleTheme={toggleTheme} theme={theme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
