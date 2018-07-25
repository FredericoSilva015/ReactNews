import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './containers/homepage/homepage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Homepage />,document.getElementById('root'));
registerServiceWorker();
