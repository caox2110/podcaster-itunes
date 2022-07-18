import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { reportToConsole } from '@/core/utils';
import { App } from '@/modules/app/pages';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

reportWebVitals(reportToConsole);
