import React, { Component } from 'react';
import './featuredArticle.css';
import { AppContext } from '../homepage/homepage';


/**
 * Component Featured Article
 * @class
 */
class FeaturedArticle extends Component {
 

  render() {
      return (
        <div className="">
          <AppContext.Consumer>
            <p>Featured</p>
            {(context) => context.number}
          </AppContext.Consumer>
        </div>
      );
  }
}

export default FeaturedArticle;