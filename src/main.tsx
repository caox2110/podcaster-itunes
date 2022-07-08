import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { reportToConsole } from './helper';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals(reportToConsole);
