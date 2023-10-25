import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Topo from './Topo'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Topo />
    <App />
  </React.StrictMode>
);

reportWebVitals();
