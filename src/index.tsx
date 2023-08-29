import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './application/App';
import "./shared/services/i18next";
import "styles/index.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);
