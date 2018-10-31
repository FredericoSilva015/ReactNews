import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
 
  render() {
    return (
      <div className="footer__wrapper">
        <p className="footer__content">
          The content seen by this app is provided by The guardian, i do not claim it or make it mine.
          This app is a study on the workings of the API and React App
        </p>
      </div>
    );
  }
}

export default Footer;