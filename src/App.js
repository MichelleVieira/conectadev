import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter, Router, Routes } from "react-router-dom";
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import theme from './theme'
import './mock'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Router path='/' element={<Home />} />
          <Router path='/sign-in' element={<SignIn />} />
          <Router path='*' element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
