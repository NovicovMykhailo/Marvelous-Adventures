import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import ToastWrapper from 'elements/ToastWrapper';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename="/marvelous-adventures">
    <App />
    <ToastWrapper />
  </BrowserRouter>
  // </React.StrictMode>
);
