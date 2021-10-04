import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import theme from './theme'
import './mock'
import GuestRoute from './routes/GuestRoute'
import { Provider } from 'react-redux'
import store from './store'
import Auth from "./components/Auth";


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Auth>
            <Routes>
              <Route path='/' element={<Home />} />
              <GuestRoute path='/sign-in' element={<SignIn />} />
              <Route path='*' element={<h1>Not found</h1>} />
            </Routes>
          </Auth>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
