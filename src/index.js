import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import './Pages/pagesStyle.css';
import './Pages/mediaQuery.css';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

