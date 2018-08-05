import React, { Component } from 'react';
import './featuredArticle.css';
import { authorCheck } from '../../utils'


/**
 * Component Featured Article
 * @class
 */
class FeaturedArticle extends Component {

  render() {
     return (
        <div className="">
          {authorCheck(this.props.featured.webTitle)}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum at elit sed maximus. Donec sed nulla malesuada, placerat magna a, ultricies libero. Duis eu neque scelerisque, aliquam ante quis, finibus ex. Mauris urna est, </p>
        </div>
      );
  }
}

export default FeaturedArticle;