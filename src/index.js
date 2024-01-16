import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/header';
import Home from './Pages/Home';
import Error from './Components/Error/error';
import { createGlobalStyle } from 'styled-components';
import UserChoice from "./Pages/UserChoice";

/**
 * ajout de la police "roboto"
 * @type {React.NamedExoticComponent<ExecutionProps & object>}
 */
const FontStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <FontStyles />
      <Router>
          <Header />
          <Routes>
              <Route path="/" element ={<UserChoice />} />
              <Route path= "/:id" element={<Home />} />
              <Route path="*" element={<Error/>} />
          </Routes>
      </Router>
  </React.StrictMode>
);


