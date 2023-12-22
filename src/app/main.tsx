import { App } from '@/app/app';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { appStarted } from '@/shared/config/init';

import './index.css';

appStarted();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
