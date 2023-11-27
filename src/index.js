import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/header';
import Home from './Pages/Home';
import Error from './Components/Error/error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <Header />
          <Routes>
              <Route path= "/:id" element={<Home />} />
              <Route path="*" element={<Error/>} />
          </Routes>
      </Router>
  </React.StrictMode>
);


