import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';

import './style/style.scss';
////для 18 реакту
/* ReactDOM
      .createRoot(document.getElementById('root'))
      .render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
      ) */


      ///////для 17 реакту
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

