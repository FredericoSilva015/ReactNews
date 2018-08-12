import React, { Component } from 'react';
import { authorCheck } from '../../utils'
import './featuredArticle.css';

class FeaturedArticle extends Component {

  render() {
     return (
        <div className="featured-article__wrapper">
          <div className="featured-article__img-wrapper">
          </div>
          <div className="featured-article__content-wrapper">
            {authorCheck(this.props.featured.webTitle, true)}
            <p className="featured-article__preview-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum at elit sed maximus. 
            </p>
          </div>
        </div>
      );
  }
}

export default FeaturedArticle;