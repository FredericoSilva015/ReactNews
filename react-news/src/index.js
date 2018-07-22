import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './containers/homepage/homepage';
import registerServiceWorker from './registerServiceWorker';
import AppProvider from './appProvider'

ReactDOM.render(
  <AppProvider>
    <Homepage />
  </AppProvider>, 
    document.getElementById('root'));
registerServiceWorker();
