import React, { Component } from 'react';
import './homepage.css';
import Articles from '../articles/articles';
import FeaturedArticle from '../../components/featuredArticle/featuredArticle';
import { AppContext } from '../../components/header/header';

/**
 * Container Homepage
 * @class
 */
class Homepage extends Component {

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

  //  Nedd loader here, else data wont pass down


  render() {
    return (
      <div>
        

        <AppContext.Consumer>
          {(context) => {
              return this.content(context);
            }
          }
        </AppContext.Consumer>
        
      </div>
    );
  }
}

export default Homepage;
