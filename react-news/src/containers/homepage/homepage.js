import React, { Component } from 'react';
import './homepage.css';
import { AppContext } from '../../appProvider';


/**
 * Container Homepage
 * @class
 */
class Homepage extends Component {
 

  render() {
      return (
        <div className="App">
          <AppContext.Consumer>
            {(context) => context.number}
          </AppContext.Consumer>
        </div>
      );
  }
}

export default Homepage;
