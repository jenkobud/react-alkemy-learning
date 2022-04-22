import React from 'react';
import './App.css';
import Login from './components/Login.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SignIn from './components/SignIn';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        {/*<Login/>*/}
        <SignIn/>
      </div>
    </ThemeProvider>
  );
}

export default App;
