import React from 'react';
import './Layout.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppRouter from './components/AppRouter';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <AppRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
