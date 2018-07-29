import React, { Component } from 'react';
import './featuredArticle.css';
import { AppContext } from '../../components/header/header';


/**
 * Component Featured Article
 * @class
 */
class FeaturedArticle extends Component {
 

  render() {
      return (
        <div className="">
          <p>Featured Articles</p>
          <AppContext.Consumer>
            {(context) => console.log('Featured Article',context)}
          </AppContext.Consumer>
        </div>
      );
  }
}

export default FeaturedArticle;