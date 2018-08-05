import React, { Component } from 'react';
import './featuredArticle.css';


/**
 * Component Featured Article
 * @class
 */
class FeaturedArticle extends Component {

  /**
   * Method to check if author exists on title
   * @method
   * 
   */
  authorCheck() {
    let title = this.props.featured.webTitle;
    title = title.split('|'); 

    return (
      <h1>
        {title[0]}
        <span className="author">{title[1]}</span>
      </h1>
    );
  }

  render() {
     return (
        <div className="">
          {this.authorCheck()}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum at elit sed maximus. Donec sed nulla malesuada, placerat magna a, ultricies libero. Duis eu neque scelerisque, aliquam ante quis, finibus ex. Mauris urna est, </p>
        </div>
      );
  }
}

export default FeaturedArticle;