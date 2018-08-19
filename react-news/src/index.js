import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import Header from './components/header/header.jsx';
import registerServiceWorker from './registerServiceWorker';

const supportsHistory = 'pushState' in window.history;

ReactDOM.render(
<BrowserRouter forceRefresh={!supportsHistory}>
  <Header />
</BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();
