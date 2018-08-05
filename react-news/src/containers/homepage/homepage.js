import React, { Component } from 'react';
import './homepage.css';
import Articles from '../articles/articles';
import FeaturedArticle from '../../components/featuredArticle/featuredArticle';
import { AppContext } from '../../components/header/header';

class Homepage extends Component {
  
  /**
   * @name content
   * @param {object} val 
   * @private
   * @returns {HTMLElement}
   * @description The loader and content is initiated with this funtion
   */
  content(val) {

    if (val.isLoaded) {
      return (
        <div>
          <FeaturedArticle featured={val.featured} />
          <Articles data={val.previewArray} isLoaded={val.isLoaded}/>
        </div>
      );
    }

    return (
      <p>Something went wrong :( . </p>
    );
  }

  render() {
    return (
        <AppContext.Consumer>
          {(context) => {
              return this.content(context);
            }
          }
        </AppContext.Consumer>
    );
  }
}

export default Homepage;
