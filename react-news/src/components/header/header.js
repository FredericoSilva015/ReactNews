import React, { Component } from 'react';
import './header.css';
import { AppContext } from '../../containers/homepage/homepage';


/**
 * Component Header
 * Used in homepage changes content on click, no need for routing, 
 * just change the store
 * @class
 */
class Header extends Component {
 

  render() {
      return (
        <div className="">
            <p>header</p>
          <AppContext.Consumer>
            {(context) => context.number}
          </AppContext.Consumer>
        </div>
      );
  }
}

export default Header;