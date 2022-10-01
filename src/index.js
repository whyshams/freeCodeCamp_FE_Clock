import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const test = document.createElement('script');
document.getElementsByTagName('body')[0].appendChild(test);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

