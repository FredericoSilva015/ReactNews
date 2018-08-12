import React, { Component } from 'react';
import { AppContext } from '../../components/header/header';
import Articles from '../articles/articles';
import FeaturedArticle from '../../components/featuredArticle/featuredArticle';
import './homepage.css';

class Homepage extends Component {
  
  /**
   * @name content
   * @param {object} val 
   * @private
   * @returns {HTMLElement}
   * @description The loader and content is initiated with this function
   */
  content(val) {

    if (val.isLoaded) {
      return (
        <div className="container">
          <div className="homepage__content-wrapper">
            <FeaturedArticle featured={val.featured} />
            <Articles data={val.previewArray}/>
          </div>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="homepage__content-wrapper">
          <p>Something went wrong :( . </p>
        </div>
      </div>
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
