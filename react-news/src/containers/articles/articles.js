import React, { Component } from 'react';
import './articles.css';
import { AppContext } from '../homepage/homepage';


/**
 * Container Articles
 * Contains multiple article previews
 * Used on homepage
 * @class
 */
class Articles extends Component {
 
  render() {
      return (
        <div>
          <p>Articles</p>
          <AppContext.Consumer>
            {(context) => context.number}
          </AppContext.Consumer>
        </div>
      );
  }
}

export default Articles;
