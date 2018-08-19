import React, { Component } from 'react';
import { AppContext } from '../../components/header/header';
import { Link } from 'react-router-dom';
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

            <h2 className="homepage__header">
              Featured
            </h2>

            <Link to={{ pathname:`article/${val.featured.id}` }}>
              <FeaturedArticle featured={val.featured} />
            </Link>
            
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

          <div className="loader loader--slowFlip">
            <span className="loader-item">1</span>
            <span className="loader-item">2</span>
            <span className="loader-item">3</span>
            <span className="loader-item">4</span>
            <span className="loader-item">5</span>
            <span className="loader-item">6</span>
            </div>
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
