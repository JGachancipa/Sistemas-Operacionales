import React from 'react';
import ReactDOM from 'react-dom/client';
import 'styles/Index/index.css';
import App from 'components/App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
