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
          <p className="box"></p>
          <h2 className="homepage__header">
            Featured
          </h2>
            <FeaturedArticle featured={val.featured} />
          <h2 className="homepage__header">
            More on ...
          </h2>
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
