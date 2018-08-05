import React, { Component } from 'react';
import './articlePreview.css';
import { authorCheck } from '../../utils'

/**
 * Component Article Preview
 * Used in homepage
 * @class
 */
class ArticlePreview extends Component {
  
  test() {
    
    return (
      <div>
        <p>Hello</p>
        <p>Bye</p>
      </div>
    )
    
  }

  render() {
      return (
        <div className="">
          {this.test()}
        </div>
      );
  }
}

export default ArticlePreview;