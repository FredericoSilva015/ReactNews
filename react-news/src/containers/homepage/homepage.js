import React, { Component } from 'react';
import './homepage.css';
import Articles from '../articles/articles';
import FeaturedArticle from '../../components/featuredArticle/featuredArticle';

/**
 * Container Homepage
 * @class
 */
class Homepage extends Component {

  render() {
      return (
        <div>
          <FeaturedArticle />
          <Articles/>
        </div>
      );
  }
}

export default Homepage;
